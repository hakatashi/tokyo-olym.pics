importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0146f692e33a2ddd4661.js",
    "revision": "d2f2ed4be3ffb0d73255e527fe82ab16"
  },
  {
    "url": "/_nuxt/3993aed7f9c0f3cada7a.js",
    "revision": "f6387eacc10756a803e29e2e2eabe419"
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
