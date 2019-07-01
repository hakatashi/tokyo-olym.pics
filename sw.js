importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/314fa8f25b0858aeb2b3.js",
    "revision": "b84bdbe9028fdae147d76654cc5cf948"
  },
  {
    "url": "/_nuxt/49e9a013172b523b4fc3.js",
    "revision": "e89180e3dfa985ebd61930499a029133"
  },
  {
    "url": "/_nuxt/756cf39c843032ba7e6f.js",
    "revision": "1d12e7f2a77298897e0b0dffff5249c9"
  },
  {
    "url": "/_nuxt/87794bcbec04bc53aa2c.js",
    "revision": "9497053342a1431c61a15965f92fbe31"
  },
  {
    "url": "/_nuxt/914622e170f939a1901d.js",
    "revision": "0823d4cea329857f9249605166546b64"
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
