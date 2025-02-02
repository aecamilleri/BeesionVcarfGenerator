self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('contact-qr-cache').then((cache) => {
            return cache.addAll([
                '/QR%20VCard%20Generator.html',
                '/manifest.json',
                '/qrcode.min.js',
                '/style.css',
                '/icon.png',
                '/icon-512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});