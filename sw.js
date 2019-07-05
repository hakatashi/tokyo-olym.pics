importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2e6de2a479d8a557a66f.js",
    "revision": "2d2823510d052eb13e6f63f979302e39"
  },
  {
    "url": "/_nuxt/38c96780557e1f68e64e.js",
    "revision": "d1d45d0b1dd8ec17366d879459571a98"
  },
  {
    "url": "/_nuxt/67bef6cbf95143792b40.js",
    "revision": "f6d80bf83f47346c17290abdad07be42"
  },
  {
    "url": "/_nuxt/8fdaf06a06f8340284b7.js",
    "revision": "ec15d3b6a1d902ad407f53e279831d7b"
  },
  {
    "url": "/_nuxt/dd512419716350d35498.js",
    "revision": "734efa210b6a6e4d8321fadfac18ee24"
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
