"use strict";var precacheConfig=[["/motormarche_react/index.html","37f8e136d38f4215985dcbe34248c32e"],["/motormarche_react/static/css/main.ebb5fcbe.css","f55cf43de84e8b988b6d112a4ef18f25"],["/motormarche_react/static/js/main.62857328.js","52a2ecf0530d9bf3c75bdf39ff0034c8"],["/motormarche_react/static/media/Chalkduster.4a4bf398.eot","4a4bf398fd0103b69a61ebc6bde2188b"],["/motormarche_react/static/media/Chalkduster.8b02f279.woff","8b02f279bfc0b7929554d7266352f7f8"],["/motormarche_react/static/media/Chalkduster.bd9805cb.ttf","bd9805cba4fdbd10e6f9d097dab9225f"],["/motormarche_react/static/media/audiring.582abc04.jpg","582abc0423d7a64429e3367daa715bbd"],["/motormarche_react/static/media/bag1.3b8b22f4.jpeg","3b8b22f415138649e4f23873c667479e"],["/motormarche_react/static/media/banner.0c31f955.png","0c31f95542e80908eed6a3ae868a7495"],["/motormarche_react/static/media/banner4.fa602bb6.jpg","fa602bb65a98de6b6d7d06ab3390cb18"],["/motormarche_react/static/media/black.c9b8d3f7.jpg","c9b8d3f7d256af76cce6bdf7574bcbfe"],["/motormarche_react/static/media/clth1.2261b812.jpg","2261b81266c9be116fc004ab062a4454"],["/motormarche_react/static/media/clth2.99bb10e5.jpg","99bb10e5b47370284480e6b91625fce3"],["/motormarche_react/static/media/clth3.7f6c2a0e.jpg","7f6c2a0efba4e7d16435c4a0a775ed50"],["/motormarche_react/static/media/clth4.71efb6ce.jpg","71efb6ceac7dfd1f6eca388ce1e716ee"],["/motormarche_react/static/media/clth5.4603b160.jpg","4603b16009c162e10aaaaea9cca61080"],["/motormarche_react/static/media/glove1.c2ff4511.jpg","c2ff451185af98bebfb0f71431c0d11c"],["/motormarche_react/static/media/light1.c3163cab.jpg","c3163cabea409098f830e11978a98680"],["/motormarche_react/static/media/serv1.620d2a7e.jpg","620d2a7e1edd51c2f1c25b95c30866b0"],["/motormarche_react/static/media/serv5.aa9ce182.jpg","aa9ce1827da1248b7544f4aafb59911a"],["/motormarche_react/static/media/serv6.65188bc8.jpg","65188bc8aef486bea5d5dbf0ef92301c"],["/motormarche_react/static/media/serv7.ff360178.jpg","ff3601789052104e0856bcd568972077"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var c="/motormarche_react/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});