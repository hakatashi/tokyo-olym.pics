importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0bbf0ef1ffed93213bfe.js",
    "revision": "fa49e9e08cb8d8c89cde2508faf73b0b"
  },
  {
    "url": "/_nuxt/3a857f806349502d969a.js",
    "revision": "e23619f97e9035c0bc9004182fdc9dec"
  },
  {
    "url": "/_nuxt/9d06fb3f84d672ca9ffe.js",
    "revision": "fb390da426f7299800cc0d647878dc01"
  },
  {
    "url": "/_nuxt/a66efe5c98a7fef09490.js",
    "revision": "ac6b3cf6bdbca8d1c2a9bd665b75503c"
  },
  {
    "url": "/_nuxt/bc1c8bdc5bcf9f5160ef.js",
    "revision": "4bd5985244eed0da3fa61a5e8b941826"
  },
  {
    "url": "/_nuxt/fae8ca2f41e909aeb867.js",
    "revision": "e85c3ae211f9196db6dc1d4290cb5472"
  }
], {
  "cacheId": "tokyo-olym.pics",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
