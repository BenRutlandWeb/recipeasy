if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-0f5e2b99"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/[slug].7b004ebb.js",revision:"4f9ade63154b4a69f80ccadcc4719b21"},{url:"assets/[slug].fdbd4b9e.css",revision:"9bd2963fb9d307b24cc87aad9a417b98"},{url:"assets/index.4e38916c.css",revision:"e25e20d6c7c7ffad5f6e597ddf583c52"},{url:"assets/index.dc87322c.js",revision:"c695718833bc7772d215c10888941364"},{url:"assets/recipes.4a15ba5f.css",revision:"c2607982284a5a6eb85097376f4536e5"},{url:"assets/recipes.927e3dcc.js",revision:"12c68cd1b707a5989172c698a7d4d297"},{url:"assets/search.19ee2d4d.css",revision:"e2f09cacbe2ba88cae04b4ab85af425b"},{url:"assets/search.848a218b.js",revision:"90a1e8a36800e63a2db652b8db5781c9"},{url:"index.html",revision:"6f625102013abb550883de59f943f9a3"},{url:"registerSW.js",revision:"9018eea37a2671c95bfab819df3de5da"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
