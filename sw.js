if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-81f24117"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/blueberry-muffins.f8e40503.js",revision:"095f2b895403ae9e86c23b6f6d38f4a1"},{url:"assets/burger-bowls.8c9c2fd3.js",revision:"69263b21dd828a2a1cc6e5a6815e87f8"},{url:"assets/chilli-con-carne.2b30fdf6.js",revision:"c57faf6036ec85c34975f43cbb6b2d17"},{url:"assets/crispy-salmon-tacos.49ba7d4b.js",revision:"82bb31e75cc69b62c2c63e95699ea21b"},{url:"assets/index.66c101b4.js",revision:"64134f2a3ffea46677b407f29d1bcb9d"},{url:"assets/index.7bf9a816.css",revision:"b472a6573d07a7bb037160ea03296a22"},{url:"assets/pancakes.b58e4d3f.js",revision:"67fb5572fefccabe31dd5263c9221a9f"},{url:"assets/RecipeMethod.2d25d518.js",revision:"e50ae293a933cf867f2f651a9e621bf5"},{url:"assets/RecipeMethod.4a6680bc.css",revision:"12e31ddce2aca52ad322a75c72f5b59e"},{url:"assets/search.2aaa5701.js",revision:"3e6d3095e1f387b17f95190b5e4940f6"},{url:"assets/search.4cf94c15.css",revision:"b7ee486ed94eb9723da7e0124a5176ec"},{url:"assets/smoky-chorizo-salmon.abd5aedc.js",revision:"b3e39b4cc79a2310ce1938e9752ecbdf"},{url:"assets/vendor.a1e05afc.js",revision:"d58f5ac9f49d2427d513a780b4561ab0"},{url:"index.html",revision:"40a57904698622846cd362bb3383f99c"},{url:"registerSW.js",revision:"9018eea37a2671c95bfab819df3de5da"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
