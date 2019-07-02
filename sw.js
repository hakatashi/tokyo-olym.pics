importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c3fb3cc9a6aa338e68e.js",
    "revision": "c24c18c04f9463275fe819ee719b5e6c"
  },
  {
    "url": "/_nuxt/5cf0eb2a4979da98415f.js",
    "revision": "7f11f16c361834ecfc73567ed14daee0"
  },
  {
    "url": "/_nuxt/7b3f5f7caf22a0383fd9.js",
    "revision": "20bceeeea4a3f3deb00e8ab8563de89a"
  },
  {
    "url": "/_nuxt/8d60a181155d589a4060.js",
    "revision": "fe3ea15e72e69cb1feadd86df7d86337"
  },
  {
    "url": "/_nuxt/f16d94a5f5ed49a34d38.js",
    "revision": "c994b5d20c7c39442bd754fd324b14b5"
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
