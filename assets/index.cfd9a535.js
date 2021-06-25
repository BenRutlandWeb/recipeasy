import{o as e,c as t,r as n,a as r,w as s,b as a,d as o,e as l,f as i,g as c,h as u,t as d,u as p,F as m,i as f,j as h,k as g,l as b,m as y,n as _,p as k,q as w}from"./vendor.5cc3f50f.js";let v;const x={},E=function(e,t){if(!t)return e();if(void 0===v){const e=document.createElement("link").relList;v=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in x)return;x[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":v,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))};const j={},L={src:"/recipeasy/favicon-192.png",alt:"Recipeasy",width:"192",height:"192",loading:"lazy",class:"w-6 h-6 dark:filter dark:brightness-0 dark:invert"};j.render=function(n,r){return e(),t("img",L)};const R={},P={class:"text-xl flex-1 truncate"};R.render=function(r,s){return e(),t("p",P,[n(r.$slots,"default")])};const T={},A={class:"material-icons","aria-hidden":"true"};T.render=function(r,s){return e(),t("span",A,[n(r.$slots,"default")])};const I={};I.render=function(a,o){const l=r("RouterLink");return e(),t(l,{class:"rounded-full p-2 m-2 leading-3"},{default:s((()=>[n(a.$slots,"default")])),_:3})};const O={},$={type:"button",class:"rounded-full p-2 m-2 leading-3"};O.render=function(r,s){return e(),t("button",$,[n(r.$slots,"default")])};const S={expose:[],setup(n){const r=a("dark"==localStorage.getItem("prefers-color-scheme")),m=document.documentElement;function f(e){const t=e?"dark":"no-preference";m.setAttribute("data-prefers-color-scheme",t),m.classList.toggle("dark",e),m.classList.toggle("light",!e),localStorage.setItem("prefers-color-scheme",t)}function h(){r.value=!r.value}o(r,f),l((()=>f(r.value)));const g=i((()=>r.value?"brightness_7":"brightness_4"));return(n,r)=>{const a=T,o=O;return e(),t(o,{role:"switch","aria-checked":false,"aria-label":"Toggle dark mode",onClick:h},{default:s((()=>[c(a,null,{default:s((()=>[u(d(p(g)),1)])),_:1})])),_:1})}}},V=u("search"),z={expose:[],props:{title:String},setup:n=>(r,a)=>{const o=j,l=R,i=T,p=I,f=S;return e(),t(m,null,[c(o,{class:"m-4"}),c(l,null,{default:s((()=>[u(d(n.title),1)])),_:1}),c(p,{to:{name:"search"}},{default:s((()=>[c(i,null,{default:s((()=>[V])),_:1})])),_:1}),c(f)],64)}},C={},D={class:"chip rounded py-0.5 px-2 text-sm bg-gray-100"};C.render=function(r,s){return e(),t("span",D,[n(r.$slots,"default")])};const B={},q={class:"flex flex-wrap gap-2"};B.render=function(r,s){return e(),t("div",q,[n(r.$slots,"default")])};const M={expose:[],props:{items:{type:Array},tag:{type:String,default:"ul"}},setup:r=>(a,o)=>(e(),t(h(r.tag),{class:"my-4 border rounded divide-y"},{default:s((()=>[(e(!0),t(m,null,f(r.items,(r=>(e(),t("li",{key:r,class:"py-2 px-4 first:rounded-t-2xl last:rounded-b-2xl"},[n(a.$slots,"default",{item:r},(()=>[u(d(r),1)]))])))),128))])),_:3}))},W={key:0,class:"w-4 h-4 rounded-full bg-pink-600 absolute top-0 right-0"},G={key:1,class:"\n        w-4\n        h-4\n        rounded-full\n        bg-pink-600\n        absolute\n        top-0\n        right-0\n        animate-ping\n      "},F=u("outdoor_grill"),H=u(" Cook mode "),J={expose:[],setup(n){const r="wakeLock"in navigator,l=a(!1);if(r){let e=null;o(l,(async function(t){if(t)try{e=await navigator.wakeLock.request("screen"),e.addEventListener("release",(()=>{l.value=!1}))}catch(n){l.value=!1}else e.release().then((()=>e=null))})),document.addEventListener("visibilitychange",(()=>{null!==e&&"visible"===document.visibilityState&&(l.value=!0)}))}function i(){l.value=!l.value}return(n,a)=>{const o=T;return r?(e(),t("button",{key:0,type:"button",role:"switch",class:["\n      bg-white\n      text-gray-700\n      border-2 border-gray-200\n      dark:bg-gray-900\n      dark:text-gray-300\n      dark:border-gray-500\n      fixed\n      bottom-6\n      right-6\n      rounded-full\n      py-3\n      pl-4\n      pr-6\n      shadow-lg\n      z-50\n      leading-3\n      flex\n      gap-2\n      items-center\n    ",{"border-pink-600":l.value}],"aria-label":"Toggle cook mode",onClick:i},[l.value?(e(),t("div",W)):g("",!0),l.value?(e(),t("div",G)):g("",!0),c(o,null,{default:s((()=>[F])),_:1}),H],2)):g("",!0)}}},K={expose:[],setup(n){const r=b().meta.title;return(n,a)=>{const o=j,l=I,i=R,f=J,h=S;return e(),t(m,null,[c(l,{to:{name:"home"},"aria-label":"Go home"},{default:s((()=>[c(o)])),_:1}),c(i,null,{default:s((()=>[u(d(p(r)),1)])),_:1}),c(f),c(h)],64)}}},N={},Q={class:"\n      sticky\n      top-0\n      z-50\n      shadow\n      bg-white\n      border-b border-white\n      dark:bg-gray-900\n      dark:border-gray-700\n    "},U={class:"max-w-screen-lg mx-auto flex justify-between items-center"},X={class:"mt-8 mb-32 w-full max-w-screen-md mx-auto px-6 flex-1 grid gap-6"},Y={class:"text-center py-8 px-6 border-t dark:border-gray-700"},Z=u("© 2021 Ben Rutland Web");N.render=function(r,s){const a=K;return e(),t(m,null,[c("header",Q,[c("div",U,[n(r.$slots,"header",{},(()=>[c(a)]))])]),c("main",X,[n(r.$slots,"default")]),c("footer",Y,[n(r.$slots,"footer",{},(()=>[Z]))])],64)};const ee={expose:[],setup(n){const a=y().options.routes.filter((e=>e.path.startsWith("/recipes")));return(n,o)=>{const l=z,i=r("RouterLink"),h=C,g=B,b=M,y=N;return e(),t(y,null,{header:s((()=>[c(l,{title:"Recipeasy"})])),default:s((()=>[c(b,{items:p(a)},{default:s((({item:n})=>[c(i,{to:{name:n.name},class:"flex gap-4 text-xl mb-2"},{default:s((()=>[u(d(n.meta.title),1)])),_:2},1032,["to"]),c(g,null,{default:s((()=>[(e(!0),t(m,null,f(n.meta.keywords,(n=>(e(),t(h,{key:n},{default:s((()=>[u(d(n),1)])),_:2},1024)))),128))])),_:2},1024)])),_:1},8,["items"])])),_:1})}}},te=[{name:"recipes-smoky-chorizo-salmon",path:"/recipes/smoky-chorizo-salmon",component:()=>E((()=>import("./smoky-chorizo-salmon.02490e38.js")),["/recipeasy/assets/smoky-chorizo-salmon.02490e38.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Smoky Chorizo Salmon",ingredients:["salmon","tomatoes","basil","olives","chorizo"],keywords:["fish","dinner"],image:"/recipeasy/smoky-chorizo-salmon.jpg"}},{name:"recipes-pancakes",path:"/recipes/pancakes",component:()=>E((()=>import("./pancakes.c7b44dcb.js")),["/recipeasy/assets/pancakes.c7b44dcb.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Pancakes",ingredients:["eggs","milk","flour"],keywords:["breakfast","dessert","vegetarian"],image:"/recipeasy/pancakes.jpg"}},{name:"recipes-harissa-crumbed-cod-with-lentils",path:"/recipes/harissa-crumbed-cod-with-lentils",component:()=>E((()=>import("./harissa-crumbed-cod-with-lentils.3ca69edd.js")),["/recipeasy/assets/harissa-crumbed-cod-with-lentils.3ca69edd.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Harissa-crumbed Cod with lentils & peppers",ingredients:["cod","peppers","puy lentils","lemon","olives","breadcrumbs"],keywords:["dinner","fish"],image:"/recipeasy/harissa-crumbed-cod-and-lentils.jpg"}},{name:"recipes-crispy-salmon-tacos",path:"/recipes/crispy-salmon-tacos",component:()=>E((()=>import("./crispy-salmon-tacos.61ec31fb.js")),["/recipeasy/assets/crispy-salmon-tacos.61ec31fb.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Crispy Salmon Tacos",ingredients:["salmon","tomatoes","mango","onions","cajun seasoning","tortillas","limes"],keywords:["fish","dinner","lunch"],image:"/recipeasy/crispy-salmon-tacos.jpg"}},{name:"recipes-chilli-con-carne",path:"/recipes/chilli-con-carne",component:()=>E((()=>import("./chilli-con-carne.27aebd80.js")),["/recipeasy/assets/chilli-con-carne.27aebd80.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Chilli Con Carne",ingredients:["onions","pepper","beef","kidney beans","tomatoes","chilli peppers","chilli powder","rice"],keywords:["dinner","mexican","tex-mex","meat"],image:"/recipeasy/chilli-con-carne.jpg"}},{name:"recipes-burger-bowls",path:"/recipes/burger-bowls",component:()=>E((()=>import("./burger-bowls.b6060d38.js")),["/recipeasy/assets/burger-bowls.b6060d38.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Burger Bowls",ingredients:["beef","garlic powder","worcestershire sauce","butter","mushrooms","cheese","bacon","bbq sauce"],keywords:["dinner","meat"],image:"/recipeasy/burger-bowls.jpg"}},{name:"recipes-blueberry-muffins",path:"/recipes/blueberry-muffins",component:()=>E((()=>import("./blueberry-muffins.0c3a72a7.js")),["/recipeasy/assets/blueberry-muffins.0c3a72a7.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Blueberry Muffins",ingredients:["eggs","milk","sugar","flour","blueberries"],keywords:["baking","breakfast","snack","vegetarian"],image:"/recipeasy/blueberry-muffins.jpg"}},{name:"search",path:"/search",component:()=>E((()=>import("./search.289dec9d.js")),["/recipeasy/assets/search.289dec9d.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0},{name:"index",path:"/",component:ee,props:!0},{name:"404",path:"/404",component:()=>E((()=>Promise.resolve().then((function(){return ae}))),void 0),props:!0}],ne={},re=u("Page not found"),se=c("p",null,"The page you were looking for cannot be found.",-1);ne.render=function(n,r){const a=j,o=I,l=R,i=S,u=N;return e(),t(u,null,{header:s((()=>[c(o,{to:{name:"home"},"aria-label":"Go home"},{default:s((()=>[c(a)])),_:1}),c(l,null,{default:s((()=>[re])),_:1}),c(i)])),default:s((()=>[se])),_:1})};var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ne});const oe=[...te,{path:"/",component:ee,name:"home"},{path:"/search",component:()=>E((()=>import("./search.289dec9d.js")),["/recipeasy/assets/search.289dec9d.js","/recipeasy/assets/vendor.5cc3f50f.js"]),name:"search"},{path:"/:pathMatch(.*)*",name:"404",component:ne}],le=_({history:k("/recipeasy/"),routes:oe,scrollBehavior:(e,t,n)=>n||{x:0,y:0}});le.beforeEach(((e,t,n)=>{var r;(null==(r=e.meta)?void 0:r.title)?document.title=e.meta.title+" | Recipeasy":document.title="Recipeasy",n()}));const ie={};ie.render=function(n,s){const a=r("RouterView");return e(),t(a)};const ce=w(ie);ce.use(le),ce.mount("#app");export{T as _,I as a,O as b,N as c,B as d,M as e,C as f};
