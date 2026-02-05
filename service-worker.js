self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("acordes-cache").then((cache) => {
      return cache.addAll(["acordes.html", "manifest.json", "icon.png"]);
    }),
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
