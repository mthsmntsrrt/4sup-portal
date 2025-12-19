export async function onRequestGet() {
  return new Response("WORKER_OK", { status: 200 });
}
