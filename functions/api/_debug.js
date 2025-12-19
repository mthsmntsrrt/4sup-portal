export async function onRequestGet({ env }) {
  return new Response(
    JSON.stringify({
      ok: true,
      hasDB: !!env.DB,
      hasASSETS: !!env.ASSETS,
      hasCrypto: !!globalThis.crypto,
      hasAtob: !!globalThis.atob,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
