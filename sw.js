importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/57a6969ec042ac9b59d4.js",
    "revision": "0b380b69230bb832704cd80f72877ba6"
  },
  {
    "url": "/_nuxt/6e5ed05551adff8a5245.js",
    "revision": "de18776b45d2823c71ca4048c5d4b97e"
  },
  {
    "url": "/_nuxt/7b3f5f7caf22a0383fd9.js",
    "revision": "20bceeeea4a3f3deb00e8ab8563de89a"
  },
  {
    "url": "/_nuxt/8bf5793e10bd0de6382a.js",
    "revision": "2516193ca0ef816cdb0540a4cb573ccd"
  },
  {
    "url": "/_nuxt/8e84333c450614eff4b0.js",
    "revision": "6b75c439bd6cca24259961c1abc76f35"
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