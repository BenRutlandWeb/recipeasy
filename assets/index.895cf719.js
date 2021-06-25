import{o as e,c as t,r,a as n,w as a,b as s,d as o,e as i,f as l,g as c,h as d,t as p,u,F as m,i as g,j as h,k as f,l as b,m as y,n as _,p as k,q as w}from"./vendor.5cc3f50f.js";let v;const x={},E=function(e,t){if(!t)return e();if(void 0===v){const e=document.createElement("link").relList;v=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in x)return;x[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":v,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};const j={},L={src:"/recipeasy/favicon-192.png",alt:"Recipeasy",width:"192",height:"192",loading:"lazy",class:"w-6 h-6 dark:filter dark:brightness-150"};j.render=function(r,n){return e(),t("img",L)};const R={},T={class:"text-xl flex-1 truncate"};R.render=function(n,a){return e(),t("p",T,[r(n.$slots,"default")])};const P={},A={class:"material-icons","aria-hidden":"true"};P.render=function(n,a){return e(),t("span",A,[r(n.$slots,"default")])};const I={};I.render=function(s,o){const i=n("RouterLink");return e(),t(i,{class:"rounded-full p-2 m-2 leading-3"},{default:a((()=>[r(s.$slots,"default")])),_:3})};const O={},V={type:"button",class:"rounded-full p-2 m-2 leading-3"};O.render=function(n,a){return e(),t("button",V,[r(n.$slots,"default")])};const $={expose:[],setup(r){const n=s("dark"==localStorage.getItem("prefers-color-scheme")),m=document.documentElement;function g(e){const t=e?"dark":"no-preference";m.setAttribute("data-prefers-color-scheme",t),m.classList.toggle("dark",e),m.classList.toggle("light",!e),localStorage.setItem("prefers-color-scheme",t)}function h(){n.value=!n.value}o(n,g),i((()=>g(n.value)));const f=l((()=>n.value?"brightness_7":"brightness_4"));return(r,n)=>{const s=P,o=O;return e(),t(o,{role:"switch","aria-checked":false,"aria-label":"Toggle dark mode",onClick:h},{default:a((()=>[c(s,null,{default:a((()=>[d(p(u(f)),1)])),_:1})])),_:1})}}},C=d("search"),D={expose:[],props:{title:String},setup:r=>(n,s)=>{const o=j,i=R,l=P,u=I,g=$;return e(),t(m,null,[c(o,{class:"m-4"}),c(i,null,{default:a((()=>[d(p(r.title),1)])),_:1}),c(u,{to:{name:"search"}},{default:a((()=>[c(l,null,{default:a((()=>[C])),_:1})])),_:1}),c(g)],64)}},S={},z={class:"chip rounded py-0.5 px-2 text-sm bg-gray-100 dark:bg-gray-700"};S.render=function(n,a){return e(),t("span",z,[r(n.$slots,"default")])};const B={},q={class:"flex flex-wrap gap-2"};B.render=function(n,a){return e(),t("div",q,[r(n.$slots,"default")])};const M={expose:[],props:{items:{type:Array},tag:{type:String,default:"ul"}},setup:n=>(s,o)=>(e(),t(h(n.tag),{class:"\n      my-4\n      border\n      rounded\n      divide-y\n      dark:divide-gray-700\n      dark:border-gray-700\n    "},{default:a((()=>[(e(!0),t(m,null,g(n.items,(n=>(e(),t("li",{key:n,class:"py-2 px-4 first:rounded-t-2xl last:rounded-b-2xl"},[r(s.$slots,"default",{item:n},(()=>[d(p(n),1)]))])))),128))])),_:3}))},W={key:0,class:"w-4 h-4 rounded-full bg-pink-600 absolute top-0 right-0"},G={key:1,class:"\n        w-4\n        h-4\n        rounded-full\n        bg-pink-600\n        absolute\n        top-0\n        right-0\n        animate-ping\n      "},F=d("outdoor_grill"),H=d(" Cook mode "),J={expose:[],setup(r){const n="wakeLock"in navigator,i=s(!1);if(n){let e=null;o(i,(async function(t){if(t)try{e=await navigator.wakeLock.request("screen"),e.addEventListener("release",(()=>{i.value=!1}))}catch(r){i.value=!1}else e.release().then((()=>e=null))})),document.addEventListener("visibilitychange",(()=>{null!==e&&"visible"===document.visibilityState&&(i.value=!0)}))}function l(){i.value=!i.value}return(r,s)=>{const o=P;return n?(e(),t("button",{key:0,type:"button",role:"switch",class:["\n      bg-white\n      text-gray-700\n      border-2 border-gray-200\n      dark:bg-gray-900\n      dark:text-gray-300\n      dark:border-gray-500\n      fixed\n      bottom-6\n      right-6\n      rounded-full\n      py-3\n      pl-4\n      pr-6\n      shadow-lg\n      z-50\n      leading-3\n      flex\n      gap-2\n      items-center\n    ",{"border-pink-600":i.value,"dark:border-pink-600":i.value}],"aria-label":"Toggle cook mode",onClick:l},[i.value?(e(),t("div",W)):f("",!0),i.value?(e(),t("div",G)):f("",!0),c(o,null,{default:a((()=>[F])),_:1}),H],2)):f("",!0)}}},K={expose:[],setup(r){const n=b().meta.title;return(r,s)=>{const o=j,i=I,l=R,g=J,h=$;return e(),t(m,null,[c(i,{to:{name:"home"},"aria-label":"Go home"},{default:a((()=>[c(o)])),_:1}),c(l,null,{default:a((()=>[d(p(u(n)),1)])),_:1}),c(g),c(h)],64)}}},N={},Q={class:"\n      sticky\n      top-0\n      z-50\n      shadow\n      bg-white\n      border-b border-white\n      dark:bg-gray-900\n      dark:border-gray-700\n    "},U={class:"max-w-screen-lg mx-auto flex justify-between items-center"},X={class:"mt-8 mb-32 w-full max-w-screen-md mx-auto px-6 flex-1 grid gap-6"},Y={class:"text-center py-8 px-6 border-t dark:border-gray-700"},Z=d("© 2021 Ben Rutland Web");N.render=function(n,a){const s=K;return e(),t(m,null,[c("header",Q,[c("div",U,[r(n.$slots,"header",{},(()=>[c(s)]))])]),c("main",X,[r(n.$slots,"default")]),c("footer",Y,[r(n.$slots,"footer",{},(()=>[Z]))])],64)};const ee={expose:[],setup(r){const s=y().options.routes.filter((e=>e.path.startsWith("/recipes")));return(r,o)=>{const i=D,l=n("RouterLink"),h=S,f=B,b=M,y=N;return e(),t(y,null,{header:a((()=>[c(i,{title:"Recipeasy"})])),default:a((()=>[c(b,{items:u(s)},{default:a((({item:r})=>[c(l,{to:{name:r.name},class:"flex gap-4 text-xl mb-2"},{default:a((()=>[d(p(r.meta.title),1)])),_:2},1032,["to"]),c(f,null,{default:a((()=>[(e(!0),t(m,null,g(r.meta.keywords,(r=>(e(),t(h,{key:r},{default:a((()=>[d(p(r),1)])),_:2},1024)))),128))])),_:2},1024)])),_:1},8,["items"])])),_:1})}}},te=[{name:"recipes-tarragon-chicken",path:"/recipes/tarragon-chicken",component:()=>E((()=>import("./tarragon-chicken.198a593d.js")),["/recipeasy/assets/tarragon-chicken.198a593d.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Tarragon Chicken",ingredients:["chicken","grapes","white wine","tarragon","cream","parsley","garlic","butter"],keywords:["dinner"],image:"/recipeasy/tarragon-chicken.jpg"}},{name:"recipes-smoky-chorizo-salmon",path:"/recipes/smoky-chorizo-salmon",component:()=>E((()=>import("./smoky-chorizo-salmon.89225ee4.js")),["/recipeasy/assets/smoky-chorizo-salmon.89225ee4.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Smoky Chorizo Salmon",ingredients:["salmon","tomatoes","basil","olives","chorizo"],keywords:["fish","dinner"],image:"/recipeasy/smoky-chorizo-salmon.jpg"}},{name:"recipes-pancakes",path:"/recipes/pancakes",component:()=>E((()=>import("./pancakes.f885dd85.js")),["/recipeasy/assets/pancakes.f885dd85.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Pancakes",ingredients:["eggs","milk","flour"],keywords:["breakfast","dessert","vegetarian"],image:"/recipeasy/pancakes.jpg"}},{name:"recipes-harissa-crumbed-cod-with-lentils",path:"/recipes/harissa-crumbed-cod-with-lentils",component:()=>E((()=>import("./harissa-crumbed-cod-with-lentils.e7bd5c34.js")),["/recipeasy/assets/harissa-crumbed-cod-with-lentils.e7bd5c34.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Harissa-crumbed Cod with lentils & peppers",ingredients:["cod","peppers","puy lentils","lemon","olives","breadcrumbs"],keywords:["dinner","fish"],image:"/recipeasy/harissa-crumbed-cod-and-lentils.jpg"}},{name:"recipes-crispy-salmon-tacos",path:"/recipes/crispy-salmon-tacos",component:()=>E((()=>import("./crispy-salmon-tacos.c2259791.js")),["/recipeasy/assets/crispy-salmon-tacos.c2259791.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Crispy Salmon Tacos",ingredients:["salmon","tomatoes","mango","onions","cajun seasoning","tortillas","limes"],keywords:["fish","dinner","lunch"],image:"/recipeasy/crispy-salmon-tacos.jpg"}},{name:"recipes-chilli-con-carne",path:"/recipes/chilli-con-carne",component:()=>E((()=>import("./chilli-con-carne.04063c77.js")),["/recipeasy/assets/chilli-con-carne.04063c77.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Chilli Con Carne",ingredients:["onions","pepper","beef","kidney beans","tomatoes","chilli peppers","chilli powder","rice"],keywords:["dinner","mexican","tex-mex","meat"],image:"/recipeasy/chilli-con-carne.jpg"}},{name:"recipes-burger-bowls",path:"/recipes/burger-bowls",component:()=>E((()=>import("./burger-bowls.cc3982ea.js")),["/recipeasy/assets/burger-bowls.cc3982ea.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Burger Bowls",ingredients:["beef","garlic powder","worcestershire sauce","butter","mushrooms","cheese","bacon","bbq sauce"],keywords:["dinner","meat"],image:"/recipeasy/burger-bowls.jpg"}},{name:"recipes-blueberry-muffins",path:"/recipes/blueberry-muffins",component:()=>E((()=>import("./blueberry-muffins.596abc00.js")),["/recipeasy/assets/blueberry-muffins.596abc00.js","/recipeasy/assets/RecipeImage.073c4947.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0,meta:{title:"Blueberry Muffins",ingredients:["eggs","milk","sugar","flour","blueberries"],keywords:["baking","breakfast","snack","vegetarian"],image:"/recipeasy/blueberry-muffins.jpg"}},{name:"search",path:"/search",component:()=>E((()=>import("./search.dedeed82.js")),["/recipeasy/assets/search.dedeed82.js","/recipeasy/assets/vendor.5cc3f50f.js"]),props:!0},{name:"index",path:"/",component:ee,props:!0},{name:"404",path:"/404",component:()=>E((()=>Promise.resolve().then((function(){return se}))),void 0),props:!0}],re={},ne=d("Page not found"),ae=c("p",null,"The page you were looking for cannot be found.",-1);re.render=function(r,n){const s=j,o=I,i=R,l=$,d=N;return e(),t(d,null,{header:a((()=>[c(o,{to:{name:"home"},"aria-label":"Go home"},{default:a((()=>[c(s)])),_:1}),c(i,null,{default:a((()=>[ne])),_:1}),c(l)])),default:a((()=>[ae])),_:1})};var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re});const oe=[...te,{path:"/",component:ee,name:"home"},{path:"/search",component:()=>E((()=>import("./search.dedeed82.js")),["/recipeasy/assets/search.dedeed82.js","/recipeasy/assets/vendor.5cc3f50f.js"]),name:"search"},{path:"/:pathMatch(.*)*",name:"404",component:re}],ie=_({history:k("/recipeasy/"),routes:oe,scrollBehavior:(e,t,r)=>r||{x:0,y:0}});ie.beforeEach(((e,t,r)=>{var n;(null==(n=e.meta)?void 0:n.title)?document.title=e.meta.title+" | Recipeasy":document.title="Recipeasy",r()}));const le={};le.render=function(r,a){const s=n("RouterView");return e(),t(s)};const ce=w(le);ce.use(ie),ce.mount("#app");export{P as _,I as a,O as b,N as c,B as d,M as e,S as f};
