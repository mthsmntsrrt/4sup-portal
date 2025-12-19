const SESSION_COOKIE = "docs_session";
const SESSION_TTL_SECONDS = 8 * 60 * 60;

export async function onRequestPost({ request, env }) {
  try {
    // sanity
    if (!env.DB) return json({ error: "D1 binding ausente (DB)." }, 500);

    // parse
    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "JSON inválido" }, 400);
    }

    const { email, password } = body || {};
    if (!email || !password) return json({ error: "Informe e-mail e senha." }, 400);

    // user
    const user = await env.DB.prepare(
      "SELECT id, email, senha_hash, empresa, ativo FROM usuarios WHERE email = ?"
    ).bind(email).first();

    if (!user) return json({ error: "Credenciais inválidas." }, 401);
    if (!user.ativo) return json({ error: "Usuário inativo." }, 403);

    // verify
    const ok = await verifyPasswordPBKDF2(password, user.senha_hash);
    if (!ok) return json({ error: "Credenciais inválidas." }, 401);

    // session
    const sessId = crypto.randomUUID();
    const now = Math.floor(Date.now() / 1000);
    const exp = now + SESSION_TTL_SECONDS;

    await env.DB.prepare(
      "INSERT INTO sessoes (id, usuario_id, criado_em, expira_em) VALUES (?, ?, ?, ?)"
    ).bind(sessId, user.id, now, exp).run();

    const res = json({ ok: true }, 200);
    res.headers.append(
      "Set-Cookie",
      `${SESSION_COOKIE}=${encodeURIComponent(sessId)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_TTL_SECONDS}`
    );
    return res;
  } catch (e) {
    return json(
      {
        error: "LOGIN_EXCEPTION",
        message: String(e?.message || e),
        name: e?.name ? String(e.name) : null,
        stack: e?.stack ? String(e.stack).split("\n").slice(0, 10) : null,
      },
      500
    );
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

// pbkdf2$iter$saltB64$hashB64
async function verifyPasswordPBKDF2(password, stored) {
  try {
    if (typeof stored !== "string") return false;
    const parts = stored.split("$");
    if (parts.length !== 4 || parts[0] !== "pbkdf2") return false;

    const iterations = Number(parts[1]);
    if (!Number.isFinite(iterations) || iterations < 10000) return false;

    const salt = b64ToU8(parts[2]);
    const expected = b64ToU8(parts[3]);
    if (!salt || !expected) return false;

    const derived = await pbkdf2(password, salt, iterations, expected.length);
    return timingSafeEqual(derived, expected);
  } catch {
    return false;
  }
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
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

function b64ToU8(b64) {
  try {
    const bin = atob(b64.trim());
    const u8 = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    return u8;
  } catch {
    return null;
  }
}
