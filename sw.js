if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/blueberry-muffins.925e2210.js",revision:"58fd4b51194ccbf80c7a9dfca15e5362"},{url:"assets/burger-bowls.8610392c.js",revision:"46d3832b2cd7797fd79993e44de54090"},{url:"assets/chilli-con-carne.e59d6dad.js",revision:"5f9da4dd064d339368ffe577a7e20e92"},{url:"assets/crispy-salmon-tacos.e8557f58.js",revision:"5d3cceea5a1ea6dfb31f2c097f8138a1"},{url:"assets/harissa-crumbed-cod-with-lentils.c2b9bb69.js",revision:"85b0fc9d58c707f95abaaa3ac1ce88cc"},{url:"assets/index.84756263.js",revision:"1dd148cfaccb725ac9e08bd99ee93773"},{url:"assets/index.8d9e709a.css",revision:"94a918ffa5850da4698686f21feeb469"},{url:"assets/pancakes.30d55497.js",revision:"1490a069d0eb98f502992cff51cf8342"},{url:"assets/RecipeImage.073c4947.js",revision:"f4f420daa5b902bef392733ac00fdf70"},{url:"assets/search.9c5eea20.js",revision:"2ac58dc23d0da1e7de454f0153100abd"},{url:"assets/smoky-chorizo-salmon.0945e6cd.js",revision:"b4b953aa2794f0f39addad7f313ca77c"},{url:"assets/tarragon-chicken.e04e2160.js",revision:"f54806268f3858688897f30e9d0e0817"},{url:"assets/vendor.5cc3f50f.js",revision:"4369d1b6d46caa6ad673855ae15f79cf"},{url:"index.html",revision:"4228fccc9d1b189a757afe6d05916c6f"},{url:"registerSW.js",revision:"9018eea37a2671c95bfab819df3de5da"},{url:"manifest.webmanifest",revision:"e700af995872532dc5fde914144d0b13"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
