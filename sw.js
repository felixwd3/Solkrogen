self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('solkrogen-store').then((cache) => {
      return cache.addAll(['/', '/index.html', '/manifest.json', '/hus.jpg']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
