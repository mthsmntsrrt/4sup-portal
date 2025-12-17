export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    // Limpeza leve de sessões expiradas (1% das requisições)
    if (Math.random() < 0.01) {
      ctx.waitUntil(cleanExpiredSessions(env));
    }

    // --- API ---
    if (pathname === "/api/login" && request.method === "POST") {
      return handleLogin(request, env);
    }

    if (pathname === "/api/logout" && request.method === "POST") {
      return handleLogout(request, env);
    }

    // --- Links virtuais (não expõe URL real no HTML) ---
    // Ex.: /go/portal_web  -> redireciona para o link do cliente logado
    if (pathname.startsWith("/go/") && request.method === "GET") {
      const sess = await getSession(request, env);
      if (!sess) {
        const loginUrl = new URL("/", url.origin);
        loginUrl.searchParams.set("redirectTo", pathname + url.search);
        return Response.redirect(loginUrl.toString(), 302);
      }

      const key = pathname.slice("/go/".length).trim();
      if (!key) return new Response("Link inválido", { status: 400 });

      const row = await env.DB.prepare(
        "SELECT url FROM links_empresa WHERE empresa = ? AND link_key = ?"
      ).bind(sess.empresa, key).first();

      if (!row?.url) return new Response("Link não configurado", { status: 404 });

      // Allowlist para evitar open redirect malicioso
      const target = new URL(row.url);
      const allowedHosts = [
        "gesoper.terceirizemais.com.br",
        "app.powerbi.com",
        // adicione aqui SOMENTE os hosts permitidos
      ];

      if (!allowedHosts.includes(target.hostname)) {
        return new Response("Destino não permitido", { status: 403 });
      }

      return Response.redirect(target.toString(), 302);
    }

    // --- /docs protegido ---
    if (pathname === "/docs" || pathname.startsWith("/docs/")) {
      const sess = await getSession(request, env);
      if (!sess) {
        const loginUrl = new URL("/", url.origin);
        loginUrl.searchParams.set("redirectTo", pathname + url.search);
        return Response.redirect(loginUrl.toString(), 302);
      }

      const docsPath =
        pathname === "/docs"
          ? "/mkdocs_build/"
          : "/mkdocs_build" + pathname.slice("/docs".length);

      const assetUrl = new URL(docsPath + url.search, url.origin);
      return env.ASSETS.fetch(new Request(assetUrl.toString(), request));
    }

    // Demais rotas: estático normal (login page, assets, etc.)
    return env.ASSETS.fetch(request);
  },
};

// -------------------- Cookies / sessão --------------------

function getCookie(request, name) {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(";").map((c) => c.trim());
  for (const cookie of cookies) {
    const idx = cookie.indexOf("=");
    if (idx === -1) continue;
    const k = cookie.slice(0, idx);
    const v = cookie.slice(idx + 1);
    if (k === name) return decodeURIComponent(v);
  }
  return null;
}

const SESSION_COOKIE = "docs_session";
const SESSION_TTL_SECONDS = 8 * 60 * 60; // 8h

async function getSession(request, env) {
  const sessId = getCookie(request, SESSION_COOKIE);
  if (!sessId) return null;

  const now = Math.floor(Date.now() / 1000);

  const { results } = await env.DB.prepare(
    "SELECT s.id, s.usuario_id, u.email, u.empresa \
     FROM sessoes s JOIN usuarios u ON u.id = s.usuario_id \
     WHERE s.id = ? AND s.expira_em > ?"
  ).bind(sessId, now).all();

  if (!results || results.length === 0) return null;
  return results[0]; // {id, usuario_id, email, empresa}
}

async function cleanExpiredSessions(env) {
  const now = Math.floor(Date.now() / 1000);
  try {
    await env.DB.prepare("DELETE FROM sessoes WHERE expira_em <= ?").bind(now).run();
  } catch {
    // silencia erros de limpeza para não afetar requests
  }
}

// -------------------- Login / logout --------------------

async function handleLogin(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "JSON inválido" }, 400);
  }

  const { email, password } = body || {};
  if (!email || !password) {
    return json({ error: "Informe e-mail e senha." }, 400);
  }

  const { results } = await env.DB.prepare(
    "SELECT id, email, senha_hash, empresa, ativo FROM usuarios WHERE email = ?"
  ).bind(email).all();

  if (!results || results.length === 0) {
    return json({ error: "Credenciais inválidas." }, 401);
  }

  const user = results[0];
  if (!user.ativo) {
    return json({ error: "Usuário inativo." }, 403);
  }

  const ok = await verifyPasswordPBKDF2(password, user.senha_hash);
  if (!ok) {
    return json({ error: "Credenciais inválidas." }, 401);
  }

  const sessId = crypto.randomUUID();
  const now = Math.floor(Date.now() / 1000);
  const exp = now + SESSION_TTL_SECONDS;

  await env.DB.prepare(
    "INSERT INTO sessoes (id, usuario_id, criado_em, expira_em) VALUES (?, ?, ?, ?)"
  ).bind(sessId, user.id, now, exp).run();

  const res = json({ ok: true });

  res.headers.append(
    "Set-Cookie",
    `${SESSION_COOKIE}=${encodeURIComponent(sessId)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_TTL_SECONDS}`
  );

  return res;
}

async function handleLogout(request, env) {
  const sessId = getCookie(request, SESSION_COOKIE);
  if (sessId) {
    await env.DB.prepare("DELETE FROM sessoes WHERE id = ?").bind(sessId).run();
  }

  const res = json({ ok: true });
  res.headers.append(
    "Set-Cookie",
    `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
  );
  return res;
}

// -------------------- PBKDF2 --------------------
// Formato: pbkdf2$<iter>$<saltB64>$<hashB64>

async function verifyPasswordPBKDF2(password, stored) {
  if (typeof stored !== "string") return false;
  const parts = stored.split("$");
  if (parts.length !== 4 || parts[0] !== "pbkdf2") return false;

  const iterations = Number(parts[1]);
  const salt = b64ToU8(parts[2]);
  const expected = b64ToU8(parts[3]);

  if (!Number.isFinite(iterations) || iterations < 10000) return false;

  const derived = await pbkdf2(password, salt, iterations, expected.length);
  return timingSafeEqual(derived, expected);
}

async function pbkdf2(password, saltU8, iterations, length) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt: saltU8, iterations },
    keyMaterial,
    length * 8
  );

  return new Uint8Array(bits);
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= (a[i] ^ b[i]);
  return diff === 0;
}

function b64ToU8(b64) {
  const bin = atob(b64);
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return u8;
}

// -------------------- Response util --------------------

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
