/* eslint-env serviceworker */

self.addEventListener('install', function (event) {
  console.log('install event')
  console.log(event)
  event.waitUntil(
    caches.open('sw-cache').then(function (cache) {
      return cache.add('index.html')
    })
  )
})

self.addEventListener('fetch', function (event) {
  console.log('fetch event')
  console.log(event)
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})