if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const u=e=>a(e,t),o={module:{uri:t},exports:c,require:u};s[t]=Promise.all(n.map((e=>o[e]||u(e)))).then((e=>(i(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"61e3da866d7aa635d4f8c349f63a2115"},{url:"/_next/static/aj7uEzs1YwiyusuLu4mSB/_buildManifest.js",revision:"ff922c5cfc902466bc8002c14198983b"},{url:"/_next/static/aj7uEzs1YwiyusuLu4mSB/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/220-47909a5a9fc93908.js",revision:"aj7uEzs1YwiyusuLu4mSB"},{url:"/_next/static/chunks/4bd1b696-235e7a2b134672fd.js",revision:"aj7uEzs1YwiyusuLu4mSB"},{url:"/_next/static/chunks/517-5719cafdb9a1aaa7.js",revision:"aj7uEzs1YwiyusuLu4mSB"},{url:"/_next/static/chunks/app/_not-found/page-2d2f6a5d21af9765.js",revision:"aj7uEzs1YwiyusuLu4mSB"},{url:"/_next/static/chunks/app/layout-3d6b4b941fe0ce40.js",revision:"aj7uEzs1YwiyusuLu4mSB"},{url:"/_next/static/chunks/app/page-1293f2d6ac7d1952.js",revision:"aj7uEzs1YwiyusuLu4mSB"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"aj7uEzs1YwiyusuLu4mSB"},{url:"/_next/static/chunks/main-a4adacf3ff0b6fb0.js",revision:"aj7uEzs1YwiyusuLu4mSB"},{url:"/_next/static/chunks/main-app-3a2e81da2e9b4463.js",revision:"aj7uEzs1YwiyusuLu4mSB"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"aj7uEzs1YwiyusuLu4mSB"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"aj7uEzs1YwiyusuLu4mSB"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-14ffe8e936842fe9.js",revision:"aj7uEzs1YwiyusuLu4mSB"},{url:"/_next/static/css/f9f450ec18818442.css",revision:"f9f450ec18818442"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/icons/apple-touch-icon.png",revision:"3ec7f7dea95dfc255069a16c8aa0df85"},{url:"/icons/favicon-96x96.png",revision:"d2a7d8c13b92b00a421a0a97f6ccc755"},{url:"/icons/favicon.ico",revision:"104669646716a4ebaf648a82ff99a81f"},{url:"/icons/favicon.svg",revision:"ce6768283becc5b41497d96cc9b4360c"},{url:"/icons/icon-192x192.png",revision:"b296cfdb18d9e17d36ad90d04b3560c2"},{url:"/icons/icon-512x512.png",revision:"18142e45da6c934b9275556a7b6d2df9"},{url:"/manifest.json",revision:"bc443a4af0755309b92ef4ee97a9087e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/site.webmanifest",revision:"737e2eab7e0fad6827dc1037841d3d46"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
