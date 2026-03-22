importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@6.2.4/workbox-sw.min.js');

workbox.setConfig({ debug: false });
workbox.routing.registerRoute(
  new RegExp('.*'),
  new workbox.strategies.CacheFirst({
    cacheName: 'airbnb-manager',
  })
);
