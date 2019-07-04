importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4f0be0f35ec60377ca6c.js",
    "revision": "a74169bc31b37138801b8e37b4463847"
  },
  {
    "url": "/_nuxt/6169dc61fd31e9c1b73c.js",
    "revision": "7bd157c44c26dc8d787ae6a6bfd4f4f0"
  },
  {
    "url": "/_nuxt/67bef6cbf95143792b40.js",
    "revision": "f6d80bf83f47346c17290abdad07be42"
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
