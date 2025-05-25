// service-worker.js

const CACHE_NAME = 'complaint-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/db.js',
  '/sync.js',
  '/manifest.json',
  '/assets/logo.png'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  console.log('Service Worker installed');
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
