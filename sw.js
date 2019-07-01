importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1cd3ff2abdef023df7cb.js",
    "revision": "e5d10cc5885a78c939b9a683ccd4a25d"
  },
  {
    "url": "/_nuxt/23a07fa717c407de3ee2.js",
    "revision": "1c0f2c1e4dbea11e9000bdc86093366a"
  },
  {
    "url": "/_nuxt/2477c487f34a03fbc634.js",
    "revision": "3be638fc4c88046880b8734062b97f2c"
  },
  {
    "url": "/_nuxt/9e7ca1965e89c3dd4439.js",
    "revision": "53a09d8d54040406a16f7cedeea00422"
  },
  {
    "url": "/_nuxt/bc1c8bdc5bcf9f5160ef.js",
    "revision": "4bd5985244eed0da3fa61a5e8b941826"
  },
  {
    "url": "/_nuxt/c563ef0d38eaac30ea6f.js",
    "revision": "86bd64c2e5b1dbfbfbdc8374b7599488"
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
