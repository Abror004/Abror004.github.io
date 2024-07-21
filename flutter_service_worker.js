'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "88c3213d49af262557ab819ee7314bf1",
"version.json": "902f25f6a166694df45a3ae7357761f0",
"index.html": "caf144cfa75cd9edf1b4c4a5a1b9f4d6",
"/": "caf144cfa75cd9edf1b4c4a5a1b9f4d6",
"main.dart.js": "eccf7d5052e5453e9c07dbc6511c710f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "37723565a405b48ea29000ce0fcdc8bc",
"icons/Icon-192.png": "a86c09b6b2111a20359fc8b9e567e0c5",
"icons/Icon-maskable-192.png": "a86c09b6b2111a20359fc8b9e567e0c5",
"icons/Icon-maskable-512.png": "288ef72d087897aaa403dbbcc4e226d2",
"icons/Icon-512.png": "288ef72d087897aaa403dbbcc4e226d2",
"manifest.json": "a3a7d58172d619da3a5d2b458ea2155b",
"assets/AssetManifest.json": "9b98e3776c5ab7ccb587b9b36243069b",
"assets/NOTICES": "dd63502832e976fdfd922c6f0d76bd35",
"assets/FontManifest.json": "3d376c730e2346471c6815a769240f76",
"assets/AssetManifest.bin.json": "a88c525846dfe5420ef8973182ae714d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bddc180c313af90b1aecfbab51e69de0",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/svg/google-maps.svg": "faff79f706eeffe9e2452c03bd8e0579",
"assets/assets/svg/firebase.svg": "7f1bf2795e067daf4ac3b42a2a140496",
"assets/assets/svg/flutter-provider.svg": "4bb034106e2b5a605f9e955aa557451d",
"assets/assets/svg/google-play.svg": "c1c91b77e61927c3cb43d9c996189de0",
"assets/assets/svg/arrows-colored.svg": "9b38d1831374853ed64b50b9f9bf8402",
"assets/assets/svg/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/svg/yandex-maps.svg": "24de718438cf4a7556c0a0bf0d5b0451",
"assets/assets/svg/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/svg/flutter-getx.svg": "d6b0e14c0ac8c80723d8c5f76510c164",
"assets/assets/svg/app-store.svg": "de300ed64c3a118159be4ca44e84c22f",
"assets/assets/svg/flutter-bloc.svg": "399f11d79d6c3ffa5cba4a7bc1634259",
"assets/assets/video/rolling-ball.mp4": "b2adf7b0f303d903170b2e22d6feb3ee",
"assets/assets/video/shootxshoot.mp4": "efa24b0f651c0646566de0b01a298a9a",
"assets/assets/video/ssal.mp4": "a57ca450abb8bb3e90061b027f288cd2",
"assets/assets/png/app_images/madad.png": "d6f3486d3cc046d3eab251fef07b8551",
"assets/assets/png/app_images/kotma.png": "eac41753e6f8dc87fc84145bc98cb7dc",
"assets/assets/png/app_images/ssal.jpg": "5fc53a0d6c00f952db05d73dfa774b16",
"assets/assets/png/app_images/parfume.png": "1d7617fe539b0d8b1eb61e266398aa28",
"assets/assets/png/app_images/mebel-savdo.png": "0240286e0c804e80e5785338e54b02d5",
"assets/assets/png/app_images/ett.png": "405f7d7172b87da3fc81ee83946d1d14",
"assets/assets/png/app_images/rolling-ball.jpg": "f339aac4441b3d339207a3309c29b082",
"assets/assets/png/app_images/shootxshoot.jpg": "ec0e95f707351f992a41b020e4930d33",
"assets/assets/png/my_image.png": "d586e903ea0b1d1f1ab2e3c605f84bef",
"assets/assets/png/app_icons/kotma.jpg": "ace8a9837fcbbdd1a70fb7e6d6cfdb82",
"assets/assets/png/app_icons/madadio.jpg": "51415fe10171086490cd089a98848472",
"assets/assets/png/app_icons/six-sides.png": "e5f7fb99bf7ea9ea0db9dd065f16dcd1",
"assets/assets/png/app_icons/parfume.png": "5df53b37cb32034bc5b58c1162f394c7",
"assets/assets/png/app_icons/mebel-savdo.png": "d9c6802b2a598cee006156fecebf6b49",
"assets/assets/png/app_icons/ett.png": "028997e83285f71957940c0b92e93d01",
"assets/assets/png/app_icons/rolling-ball.png": "2b4d10bf4cc7ee68155ded5a1964b05f",
"assets/assets/png/app_icons/shootxshoot.jpg": "4c0f918159260b6ea030d887ad9f3fda",
"assets/assets/fonts/DMMono-Light.ttf": "7b404c88b96f013e886d78a66a53a77b",
"assets/assets/fonts/DMMono-Medium.ttf": "e0b4b36de3605fff15634209b7015425",
"assets/assets/fonts/DMMono-Regular.ttf": "c6d78233d13e36d83688ac5e6ee0927a",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
