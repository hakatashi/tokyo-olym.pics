importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/30b96505458b4e6671c8.js",
    "revision": "649e25733d621242542a6001ae8ab175"
  },
  {
    "url": "/_nuxt/67bef6cbf95143792b40.js",
    "revision": "f6d80bf83f47346c17290abdad07be42"
  },
  {
    "url": "/_nuxt/777be29b25c3962020bc.js",
    "revision": "439b42d77f37dd6daa97e57d089a964f"
  },
  {
    "url": "/_nuxt/b7338a980f9fef2ac734.js",
    "revision": "b0b83d5ce1435db6869c4f43f73c66ed"
  },
  {
    "url": "/_nuxt/e80feda5bb6d81c3314d.js",
    "revision": "1a2e30d048a9e563a290714242529a17"
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
