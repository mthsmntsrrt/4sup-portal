const SESSION_COOKIE = "docs_session";

export async function onRequestPost({ request, env }) {
  if (!env.DB) return json({ error: "D1 binding ausente (DB)." }, 500);

  const sessId = getCookie(request, SESSION_COOKIE);
  if (sessId) {
    await env.DB.prepare("DELETE FROM sessoes WHERE id = ?").bind(sessId).run();
  }

  const res = json({ ok: true }, 200);
  res.headers.append(
    "Set-Cookie",
    `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
  );
  return res;
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

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
