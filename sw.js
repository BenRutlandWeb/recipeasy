if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/blueberry-muffins.2461dbf9.js",revision:"d69eef7133e3585a9f058f8c2243a122"},{url:"assets/burger-bowls.1a470a6d.js",revision:"cf12e6e1549b352e23ac73551b020774"},{url:"assets/chicken-with-sage-and-prosciutto.c3814ae0.js",revision:"0499358e8f9ad2b68db812ce031713c2"},{url:"assets/chilli-con-carne.5b51d04b.js",revision:"8e329371b47c6cf1a4da51c71d14ab28"},{url:"assets/crispy-salmon-tacos.0b6f2409.js",revision:"ab839695a1ac6879d1f23fa2665f5a55"},{url:"assets/harissa-crumbed-cod-with-lentils.75bc6084.js",revision:"3c62db5cf64a0f6337f47b01222367b1"},{url:"assets/index.67998391.css",revision:"5d8f97196d8599684ecbd068a6a84836"},{url:"assets/index.e6f4e6dd.js",revision:"71804278f0328d4f8917579585c726f3"},{url:"assets/pancakes.decb4ee9.js",revision:"af7d9339ec903977da66911d3cdb5026"},{url:"assets/peppers-with-fennel.dd9c2734.js",revision:"8f5c6f07f890aa22c240d539ac7b9e16"},{url:"assets/pork-with-tomatoes-and-red-wine.327c21e6.js",revision:"5887b1d7a3db258ef85f9d57b1d6d3ba"},{url:"assets/prawn-pasta-with-rocket.e5db579b.js",revision:"e37c1326a43dd2a8e4a09d06a7fcae52"},{url:"assets/RecipeImage.073c4947.js",revision:"f4f420daa5b902bef392733ac00fdf70"},{url:"assets/search.cfcf3eb3.js",revision:"ac21b69bfc85c000bbaca61c0425352b"},{url:"assets/smoky-chorizo-salmon.6b978094.js",revision:"f974f0757027875c5213c8a1380c972a"},{url:"assets/tarragon-chicken.f3d18337.js",revision:"740aaef637a873b0116b55ca3901ccf9"},{url:"assets/torte-caprese.3a0a0040.js",revision:"2a721842b3ebcdbfaa1c612812e59fea"},{url:"assets/vendor.5cc3f50f.js",revision:"4369d1b6d46caa6ad673855ae15f79cf"},{url:"index.html",revision:"75a992e762c905e9dd83493bf7d68b47"},{url:"registerSW.js",revision:"9018eea37a2671c95bfab819df3de5da"},{url:"manifest.webmanifest",revision:"e700af995872532dc5fde914144d0b13"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
