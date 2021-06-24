import{p as e,a as t,o as s,c as a,w as o,r as n,b as r,d as c,e as l,f as i,g as u,h as p,i as d,j as m,t as f,u as h,F as _,k as g,l as b,m as y,n as k,q as v,s as E,v as w,x as j}from"./vendor.f1dabf69.js";let L;const R={},I=function(e,t){if(!t)return e();if(void 0===L){const e=document.createElement("link").relList;L=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in R)return;R[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":L,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};const P={},T=o();e("data-v-b9955256");const x={src:"/recipeasy/favicon-192.png",alt:"Recipeasy",width:"192",height:"192",loading:"lazy"};t();const $=T(((e,t)=>(s(),a("img",x))));P.render=$,P.__scopeId="data-v-b9955256";const A={},O=o()(((e,t)=>(s(),a("p",null,[n(e.$slots,"default",{},void 0,!0)]))));A.render=O,A.__scopeId="data-v-33380fc3";const S={},D={class:"material-icons","aria-hidden":"true"};S.render=function(e,t){return s(),a("span",D,[n(e.$slots,"default")])};const V={},z=o(),C=z(((e,t)=>{const o=r("RouterLink");return s(),a(o,{class:"button"},{default:z((()=>[n(e.$slots,"default",{},void 0,!0)])),_:3})}));V.render=C,V.__scopeId="data-v-3a1efac6";const B={},q=o();e("data-v-66bfb742");const M={type:"button",class:"button"};t();const W=q(((e,t)=>(s(),a("button",M,[n(e.$slots,"default",{},void 0,!0)]))));B.render=W,B.__scopeId="data-v-66bfb742";const G={expose:[],setup(e){const t=c("dark"==localStorage.getItem("prefers-color-scheme")),o=document.documentElement;function n(e){const t=e?"dark":"no-preference";o.setAttribute("data-prefers-color-scheme",t),localStorage.setItem("prefers-color-scheme",t)}function r(){t.value=!t.value}l(t,n),i((()=>n(t.value)));const _=u((()=>t.value?"brightness_7":"brightness_4"));return(e,t)=>{const o=S,n=B;return s(),a(n,{role:"switch","aria-checked":false,"aria-label":"Toggle dark mode",onClick:r},{default:p((()=>[d(o,null,{default:p((()=>[m(f(h(_)),1)])),_:1})])),_:1})}}},F=m("search"),H={expose:[],props:{title:String},setup:e=>(t,o)=>{const n=P,r=A,c=S,l=V,i=G;return s(),a(_,null,[d(n,{class:"m-4"}),d(r,null,{default:p((()=>[m(f(e.title),1)])),_:1}),d(l,{to:{name:"search"}},{default:p((()=>[d(c,null,{default:p((()=>[F])),_:1})])),_:1}),d(i)],64)}};const J={},K={class:"chip"};J.render=function(e,t){return s(),a("span",K,[n(e.$slots,"default")])};const N={},Q={class:"chips"};N.render=function(e,t){return s(),a("div",Q,[n(e.$slots,"default")])};const U={expose:[],props:{items:{type:Array},tag:{type:String,default:"ul"}},setup:e=>(t,o)=>(s(),a(b(e.tag),{class:"list-group"},{default:p((()=>[(s(!0),a(_,null,g(e.items,(e=>(s(),a("li",{key:e,class:"list-group-item"},[n(t.$slots,"default",{item:e},(()=>[m(f(e),1)]))])))),128))])),_:3}))};const X=o();e("data-v-6f5613fa");const Y=m("outdoor_grill");t();const Z={expose:[],setup(e){const t="wakeLock"in navigator,o=c(!1);if(t){let e=null;l(o,(async function(t){if(t)try{e=await navigator.wakeLock.request("screen"),e.addEventListener("release",(()=>{o.value=!1}))}catch(s){o.value=!1}else e.release().then((()=>e=null))})),document.addEventListener("visibilitychange",(()=>{null!==e&&"visible"===document.visibilityState&&(o.value=!0)}))}function n(){o.value=!o.value}return(e,r)=>{const c=S,l=B;return t?(s(),a(l,{key:0,role:"switch",class:{active:o.value},"aria-checked":e.isDarkMode,"aria-label":"Toggle cook mode",onClick:n},{default:X((()=>[d(c,null,{default:X((()=>[Y])),_:1})])),_:1},8,["class","aria-checked"])):y("",!0)}},__scopeId:"data-v-6f5613fa"};const ee=o();e("data-v-3bc937b2");const te=m("Recipeasy");t();const se={expose:[],setup:e=>(k().meta.title,(e,t)=>{const o=P,n=V,r=A,c=Z,l=G;return s(),a(_,null,[d(n,{to:{name:"home"},"aria-label":"Go home"},{default:ee((()=>[d(o)])),_:1}),d(r,null,{default:ee((()=>[te])),_:1}),d(c),d(l)],64)}),__scopeId:"data-v-3bc937b2"};const ae={},oe={class:"header"},ne={class:"main"},re={class:"footer"},ce=m("© 2021 Ben Rutland Web");ae.render=function(e,t){const o=se;return s(),a(_,null,[d("header",oe,[n(e.$slots,"header",{},(()=>[d(o)]))]),d("main",ne,[n(e.$slots,"default")]),d("footer",re,[n(e.$slots,"footer",{},(()=>[ce]))])],64)};const le={expose:[],setup(e){const t=v().options.routes.filter((e=>e.path.startsWith("/recipes")));return(e,o)=>{const n=H,c=r("RouterLink"),l=J,i=N,u=U,b=ae;return s(),a(b,null,{header:p((()=>[d(n,{title:"Recipeasy"})])),default:p((()=>[d(u,{items:h(t)},{default:p((({item:e})=>[d(c,{to:{name:e.name},class:"recipe-card"},{default:p((()=>[m(f(e.meta.title),1)])),_:2},1032,["to"]),d(i,{class:"chips"},{default:p((()=>[(s(!0),a(_,null,g(e.meta.keywords,(e=>(s(),a(l,{class:"chip",key:e},{default:p((()=>[m(f(e),1)])),_:2},1024)))),128))])),_:2},1024)])),_:1},8,["items"])])),_:1})}}},ie=[{name:"recipes-smoky-chorizo-salmon",path:"/recipes/smoky-chorizo-salmon",component:()=>I((()=>import("./smoky-chorizo-salmon.ae0c3037.js")),["/recipeasy/assets/smoky-chorizo-salmon.ae0c3037.js","/recipeasy/assets/RecipeImage.2bef65a6.js","/recipeasy/assets/vendor.f1dabf69.js"]),props:!0,meta:{title:"Smoky Chorizo Salmon",ingredients:["salmon","tomatoes","basil","olives","chorizo"],keywords:["fish","dinner"],image:"/recipeasy/smoky-chorizo-salmon.jpg"}},{name:"recipes-pancakes",path:"/recipes/pancakes",component:()=>I((()=>import("./pancakes.16748e5c.js")),["/recipeasy/assets/pancakes.16748e5c.js","/recipeasy/assets/RecipeImage.2bef65a6.js","/recipeasy/assets/vendor.f1dabf69.js"]),props:!0,meta:{title:"Pancakes",ingredients:["eggs","milk","flour"],keywords:["breakfast","dessert","vegetarian"],image:"/recipeasy/pancakes.jpg"}},{name:"recipes-crispy-salmon-tacos",path:"/recipes/crispy-salmon-tacos",component:()=>I((()=>import("./crispy-salmon-tacos.c539f31a.js")),["/recipeasy/assets/crispy-salmon-tacos.c539f31a.js","/recipeasy/assets/RecipeImage.2bef65a6.js","/recipeasy/assets/vendor.f1dabf69.js"]),props:!0,meta:{title:"Crispy Salmon Tacos",ingredients:["salmon","tomatoes","mango","onions","cajun seasoning","tortillas","limes"],keywords:["fish","dinner","lunch"],image:"/recipeasy/crispy-salmon-tacos.jpg"}},{name:"recipes-chilli-con-carne",path:"/recipes/chilli-con-carne",component:()=>I((()=>import("./chilli-con-carne.8d41caa7.js")),["/recipeasy/assets/chilli-con-carne.8d41caa7.js","/recipeasy/assets/RecipeImage.2bef65a6.js","/recipeasy/assets/vendor.f1dabf69.js"]),props:!0,meta:{title:"Chilli Con Carne",ingredients:["onions","pepper","beef","kidney beans","tomatoes","chilli peppers","chilli powder","rice"],keywords:["dinner","mexican","tex-mex","meat"],image:"/recipeasy/chilli-con-carne.jpg"}},{name:"recipes-burger-bowls",path:"/recipes/burger-bowls",component:()=>I((()=>import("./burger-bowls.fff32458.js")),["/recipeasy/assets/burger-bowls.fff32458.js","/recipeasy/assets/RecipeImage.2bef65a6.js","/recipeasy/assets/vendor.f1dabf69.js"]),props:!0,meta:{title:"Burger Bowls",ingredients:["beef","garlic powder","worcestershire sauce","butter","mushrooms","cheese","bacon","bbq sauce"],keywords:["dinner","meat"],image:"/recipeasy/burger-bowls.jpg"}},{name:"recipes-blueberry-muffins",path:"/recipes/blueberry-muffins",component:()=>I((()=>import("./blueberry-muffins.076cc146.js")),["/recipeasy/assets/blueberry-muffins.076cc146.js","/recipeasy/assets/RecipeImage.2bef65a6.js","/recipeasy/assets/vendor.f1dabf69.js"]),props:!0,meta:{title:"Blueberry Muffins",ingredients:["eggs","milk","sugar","flour","blueberries"],keywords:["baking","breakfast","snack","vegetarian"],image:"/recipeasy/blueberry-muffins.jpg"}},{name:"search",path:"/search",component:()=>I((()=>import("./search.24ecf0ca.js")),["/recipeasy/assets/search.24ecf0ca.js","/recipeasy/assets/search.fc0eaf4d.css","/recipeasy/assets/vendor.f1dabf69.js"]),props:!0},{name:"index",path:"/",component:le,props:!0},{name:"404",path:"/404",component:()=>I((()=>Promise.resolve().then((function(){return me}))),void 0),props:!0}],ue={},pe=m("Page not found"),de=d("p",null,"The page you were looking for cannot be found.",-1);ue.render=function(e,t){const o=P,n=V,r=A,c=G,l=ae;return s(),a(l,null,{header:p((()=>[d(n,{to:{name:"home"},"aria-label":"Go home"},{default:p((()=>[d(o)])),_:1}),d(r,null,{default:p((()=>[pe])),_:1}),d(c)])),default:p((()=>[de])),_:1})};var me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ue});const fe=[...ie,{path:"/",component:le,name:"home"},{path:"/search",component:()=>I((()=>import("./search.24ecf0ca.js")),["/recipeasy/assets/search.24ecf0ca.js","/recipeasy/assets/search.fc0eaf4d.css","/recipeasy/assets/vendor.f1dabf69.js"]),name:"search"},{path:"/:pathMatch(.*)*",name:"404",component:ue}],he=E({history:w("/recipeasy/"),routes:fe,scrollBehavior:(e,t,s)=>s||{x:0,y:0}});he.beforeEach(((e,t,s)=>{var a;(null==(a=e.meta)?void 0:a.title)?document.title=e.meta.title+" | Recipeasy":document.title="Recipeasy",s()}));const _e={};_e.render=function(e,t){const o=r("RouterView");return s(),a(o)};const ge=j(_e);ge.use(he),ge.mount("#app");export{S as _,V as a,B as b,ae as c,N as d,U as e,J as f};
