self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('random-station-cache-v1').then((cache) => {
        return cache.addAll([
          './',
          './index.html',
          './style.css',
          './main.js',
          './manifest.json',
          './icons/icon-192.png',
          './icons/icon-512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  