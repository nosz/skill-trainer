// Service Worker der Plattform (ERZEUGT von assets/lokale_tests_erzeugen.ps1 aus assets/pwa/sw_vorlage.js; nicht von Hand aendern).
// HTML: erst Netz (immer aktuell), bei Fehler oder Zeitueberschreitung aus dem Cache. Bilder und Icons: erst Cache.
// Der Cache-Name enthaelt einen Hash aller Dateien: jedes Update der Produktion erzeugt einen neuen Cache, alte werden geloescht.
const CACHE = "ninox-ca6b58e06920";
const FILES = ["dashboard/dashboard.html","dashboard/dashboard_vorschau.jpg","icons/icon-192.png","icons/icon-512.png","icons/icon-512-maskable.png","index.html","manifest.webmanifest","ninox_app_professionelles_prompten/ninox_app_professionelles_prompten.html","ninox_app_professionelles_prompten/ninox_app_professionelles_prompten_vorschau.jpg","ninox_app_prompt_skill_agent_mcp/ninox_app_prompt_skill_agent_mcp.html","ninox_app_prompt_skill_agent_mcp/ninox_app_prompt_skill_agent_mcp_vorschau.jpg","ninox_app_rollen_rechte/ninox_app_rollen_rechte.html","ninox_app_rollen_rechte/ninox_app_rollen_rechte_vorschau.jpg","ninox_app_script/ninox_app_script.html","ninox_app_script/ninox_app_script_vorschau.jpg","ninox_app_skills/ninox_app_skills.html","ninox_app_skills/ninox_app_skills_vorschau.jpg"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("ninox-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  if (new URL(r.url).origin !== location.origin) return;
  const html = r.mode === "navigate" || (r.headers.get("accept") || "").includes("text/html");
  e.respondWith(html ? netzZuerst(r) : cacheZuerst(r));
});
async function netzZuerst(r) {
  try {
    const res = await Promise.race([fetch(r), new Promise((_, no) => setTimeout(() => no(new Error("timeout")), 6000))]);
    if (res && res.ok) { const c = await caches.open(CACHE); c.put(r, res.clone()); }
    return res;
  } catch (err) {
    return (await caches.match(r, { ignoreSearch: true })) || (r.mode === "navigate" ? await caches.match(FILES[0]) : null) || Response.error();
  }
}
async function cacheZuerst(r) {
  const hit = await caches.match(r, { ignoreSearch: true });
  if (hit) return hit;
  const res = await fetch(r);
  if (res && res.ok) { const c = await caches.open(CACHE); c.put(r, res.clone()); }
  return res;
}