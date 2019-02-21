//THIS FILE SHOULD BE LOCATED AT MOST TOP LEVEL ROOT OF PROJECT
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

//Un-Comment lines below in case of debugging service worker
/*
    workbox.setConfig({
        debug: true
    });
    workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
*/

/**
 * This is what we control and create revisions for in a format:
 * <filename>_hash-<md5_hash>.<extension>
 * That is why we use here Cache-first strategy:
 * https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-runtime-caching.CacheFirst
 */

/* Caching Redtube server js files */
workbox.routing.registerRoute(
    new RegExp(/.*\/cdn_files\/redtube\/js\/.*/),
    workbox.strategies.cacheFirst({
        cacheName: 'rt-js',
        cacheExpiration: {
            maxEntries: 100
        },
        cacheableResponse: {statuses: [0, 200]}
    })
);

/* Caching Redtube server css files */
workbox.routing.registerRoute(
    new RegExp(/.*\/cdn_files\/redtube\/css\/.*/),
    workbox.strategies.cacheFirst({
        cacheName: 'rt-css',
        cacheExpiration: {
            maxEntries: 100
        },
        cacheableResponse: {statuses: [0, 200]}
    })
);

/* Caching Redtube server image files */
workbox.routing.registerRoute(
    new RegExp(/.*\/cdn_files\/redtube\/images\/.*/),
    workbox.strategies.cacheFirst({
        cacheName: 'rt-images',
        cacheExpiration: {
            maxEntries: 100
        },
        cacheableResponse: {statuses: [0, 200]}
    })
);

/* Caching Redtube server icon files */
workbox.routing.registerRoute(
    new RegExp(/.*\/cdn_files\/redtube\/icons\/.*/),
    workbox.strategies.cacheFirst({
        cacheName: 'rt-icons',
        cacheExpiration: {
            maxEntries: 100
        },
        cacheableResponse: {statuses: [0, 200]}
    })
);

/* Caching Redtube server font files */
workbox.routing.registerRoute(
    new RegExp(/.*\/cdn_files\/redtube\/fonts\/.*/),
    workbox.strategies.cacheFirst({
        cacheName: 'rt-fonts',
        cacheExpiration: {
            maxEntries: 100
        },
        cacheableResponse: {statuses: [0, 200]}
    })
);
/**
 * This is external resource that we do not control. It can change any time, it's not revisioned.
 * In this case if we have cache - we serve from cache, but doing network request to refresh cache for subsequent run
 * https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-runtime-caching.StaleWhileRevalidate
 * Ex: https://cdn1d-static-shared.phncdn.com/mg_utils-1.0.0.js
 */
workbox.routing.registerRoute(
    new RegExp(/https:\/\/(cdn1d-static-shared|ss)\.phncdn\.com\/.*\.js/),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'rt-sharedcdn',
        cacheExpiration: {
            maxEntries: 30
        },
        cacheableResponse: {statuses: [0, 200]}
    })
);

/* Caching RedTube Home page in case of offline mode  */
workbox.routing.registerRoute(
    new RegExp(/((www.)?redtube.(com|stage)\d{0,2})$/),
    workbox.strategies.networkFirst({
        cacheName: 'rt-home',
        cacheExpiration: {
            maxEntries: 100
        },
        cacheableResponse: {statuses: [0, 200]}
    })
);