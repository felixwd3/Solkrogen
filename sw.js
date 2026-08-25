self.addEventListener('install', (e) => {
  console.log('Service Worker installeret');
});

self.addEventListener('fetch', (e) => {
  // Tillader appen at hente data fra nettet
});
