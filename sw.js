const CACHE_NAME = 'utom-futuro-v25';
const APP_FILES = ['./', './index.html', './styles.css?v=9', './app.js?v=20', './manifest.webmanifest', './offline.html', './assets/utom-logo.png?v=2', './assets/utom-icon.svg', './assets/utom-icon-192.png?v=2', './assets/utom-icon-512.png', './assets/carrera-proyecto-arquitectonico.png', './assets/carrera-diseno-digital.png', './assets/carrera-aprendizaje-en-aula.png', './assets/carrera-comunidad-innovacion.png'];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_FILES);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('utom-futuro-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  if (!event.request.url.startsWith(self.registration.scope)) return;
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(event.request);
        if (response.ok) await cache.put(event.request, response.clone());
        return response;
      } catch {
        const cached = await cache.match(event.request)
          || await cache.match(new URL('index.html', self.registration.scope).href)
          || await cache.match(new URL('offline.html', self.registration.scope).href);
        return cached;
      }
    })());
    return;
  }
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(event.request);
    if (cached) return cached;
    const response = await fetch(event.request);
    if (response.ok) await cache.put(event.request, response.clone());
    return response;
  })());
});
