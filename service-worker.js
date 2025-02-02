self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('contact-qr-cache').then((cache) => {
            return cache.addAll([
                '/BeesionVcarfGenerator/QR%20VCard%20Generator.html',
                '/BeesionVcarfGenerator/manifest.json',
                '/BeesionVcarfGenerator/qrcode.min.js',
                '/BeesionVcarfGenerator/style.css',
                '/BeesionVcarfGenerator/icon.png',
                '/BeesionVcarfGenerator/icon-512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        }).catch(() => {
            return caches.match('/BeesionVcarfGenerator/QR%20VCard%20Generator.html');
        })
    );
});
