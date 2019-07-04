importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5a23150aa98ff4f76e4b.js",
    "revision": "7606ae0cb2ebc8d356c982a5d126f1fe"
  },
  {
    "url": "/_nuxt/5da12672103c84d1d574.js",
    "revision": "53183b2e6751390d9a539896ffe98f0e"
  },
  {
    "url": "/_nuxt/c9e159150bbe73479fd7.js",
    "revision": "a036e78e7cc97bd1ee2adc2f72570ca3"
  },
  {
    "url": "/_nuxt/ceaeec2b6359aa27d3aa.js",
    "revision": "49be0082dba548f1b2a8fc5f304b5090"
  },
  {
    "url": "/_nuxt/f8732253573278996d2b.js",
    "revision": "c12376f5f84df27b1c223c0ca14fef05"
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
