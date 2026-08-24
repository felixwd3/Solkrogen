self.addEventListener('install', (e) => {
    self.skipWaiting(); // Tvinger den til at opdatere med det samme
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
    // Vi beder den om ALTID at hente fra nettet (ingen fastlåst cache)
    e.respondWith(fetch(e.request));
});
