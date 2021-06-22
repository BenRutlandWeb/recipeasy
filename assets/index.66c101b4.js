import{p as e,a as t,o as s,c as o,w as a,b as n,r,d as l,t as c,F as i,e as p,f as u,g as m,h as d,u as h,i as f,j as _,k as b,l as g,m as y,n as k,q as v,s as E}from"./vendor.a1e05afc.js";let w;const R={},V=function(e,t){if(!t)return e();if(void 0===w){const e=document.createElement("link").relList;w=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in R)return;R[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":w,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))};const L={},I=a();e("data-v-887b89be");const P={class:"logo-link"},j=n("img",{src:"/recipeasy/favicon-192.png",alt:"Recipeasy",width:"192",height:"192",loading:"lazy",class:"logo"},null,-1);t();const x=I(((e,t)=>(s(),o("div",P,[j]))));L.render=x,L.__scopeId="data-v-887b89be";const T={},A={class:"material-icons","aria-hidden":"true"};T.render=function(e,t){return s(),o("span",A,[r(e.$slots,"default")])};const O=a();e("data-v-4ffba00a");const D=p("search");t();const S={expose:[],props:{title:String},setup:e=>(t,a)=>{const r=L,p=T,u=l("RouterLink");return s(),o(i,null,[n(r),n("h1",null,c(e.title),1),n(u,{to:{name:"search"},class:"button"},{default:O((()=>[n(p,null,{default:O((()=>[D])),_:1})])),_:1})],64)},__scopeId:"data-v-4ffba00a"};const $={},z={class:"chip"};$.render=function(e,t){return s(),o("span",z,[r(e.$slots,"default")])};const C={},B={class:"chips"};C.render=function(e,t){return s(),o("div",B,[r(e.$slots,"default")])};const q={expose:[],props:{items:{type:Array},tag:{type:String,default:"ul"}},setup:e=>(t,a)=>(s(),o(d(e.tag),{class:"list-group"},{default:u((()=>[(s(!0),o(i,null,m(e.items,(e=>(s(),o("li",{key:e,class:"list-group-item"},[r(t.$slots,"default",{item:e},(()=>[p(c(e),1)]))])))),128))])),_:3}))};const M=a();e("data-v-80cf5660");const W=p("close");t();const F={expose:[],setup(e){const t=h().meta.title;return(e,a)=>{const r=T,p=l("RouterLink");return s(),o(i,null,[n("h1",null,c(f(t)),1),n(p,{to:{name:"home"},class:"button","aria-label":"go home"},{default:M((()=>[n(r,null,{default:M((()=>[W])),_:1})])),_:1})],64)}},__scopeId:"data-v-80cf5660"};const U={expose:[],props:{modelValue:Boolean},emits:["update:modelValue"],setup(e,{emit:t}){const a=e;function n(){t("update:modelValue",!a.modelValue)}return(t,a)=>(s(),o("button",{type:"button",role:"switch","aria-checked":e.modelValue,onClick:n},null,8,["aria-checked"]))}};const G={class:"theme-switch"},H=p(" Dark mode "),J={expose:[],setup(e){const t=_("dark"==localStorage.getItem("prefers-color-scheme")),a=document.documentElement;function r(e){const t=e?"dark":"no-preference";a.setAttribute("data-prefers-color-scheme",t),localStorage.setItem("prefers-color-scheme",t)}return b(t,r),g((()=>r(t.value))),(e,a)=>{const r=U;return s(),o("label",G,[n(r,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e)},null,8,["modelValue"]),H])}}};const K={},N={class:"header"},Q={class:"main"},X={class:"footer"},Y=p("© 2021 Ben Rutland Web");K.render=function(e,t){const a=F,l=J;return s(),o(i,null,[n("header",N,[r(e.$slots,"header",{},(()=>[n(a)]))]),n("main",Q,[r(e.$slots,"default")]),n("footer",X,[r(e.$slots,"footer",{},(()=>[Y])),n(l)])],64)};const Z={expose:[],setup(e){const t=y().options.routes.filter((e=>e.path.startsWith("/recipes")));return(e,a)=>{const r=S,d=l("RouterLink"),h=$,_=C,b=q,g=K;return s(),o(g,null,{header:u((()=>[n(r,{title:"Recipeasy"})])),default:u((()=>[n(b,{items:f(t)},{default:u((({item:e})=>[n(d,{to:{name:e.name},class:"recipe-card"},{default:u((()=>[p(c(e.meta.title),1)])),_:2},1032,["to"]),n(_,{class:"chips"},{default:u((()=>[(s(!0),o(i,null,m(e.meta.keywords,(e=>(s(),o(h,{class:"chip",key:e},{default:u((()=>[p(c(e),1)])),_:2},1024)))),128))])),_:2},1024)])),_:1},8,["items"])])),_:1})}}},ee=[{name:"recipes-smoky-chorizo-salmon",path:"/recipes/smoky-chorizo-salmon",component:()=>V((()=>import("./smoky-chorizo-salmon.abd5aedc.js")),["/recipeasy/assets/smoky-chorizo-salmon.abd5aedc.js","/recipeasy/assets/RecipeMethod.2d25d518.js","/recipeasy/assets/RecipeMethod.4a6680bc.css","/recipeasy/assets/vendor.a1e05afc.js"]),props:!0,meta:{title:"Smoky Chorizo Salmon",ingredients:["salmon","tomatoes","basil","olives","chorizo"],keywords:["fish","dinner"]}},{name:"recipes-pancakes",path:"/recipes/pancakes",component:()=>V((()=>import("./pancakes.b58e4d3f.js")),["/recipeasy/assets/pancakes.b58e4d3f.js","/recipeasy/assets/RecipeMethod.2d25d518.js","/recipeasy/assets/RecipeMethod.4a6680bc.css","/recipeasy/assets/vendor.a1e05afc.js"]),props:!0,meta:{title:"Pancakes",ingredients:["eggs","milk","flour"],keywords:["breakfast","dessert","vegetarian"]}},{name:"recipes-crispy-salmon-tacos",path:"/recipes/crispy-salmon-tacos",component:()=>V((()=>import("./crispy-salmon-tacos.49ba7d4b.js")),["/recipeasy/assets/crispy-salmon-tacos.49ba7d4b.js","/recipeasy/assets/RecipeMethod.2d25d518.js","/recipeasy/assets/RecipeMethod.4a6680bc.css","/recipeasy/assets/vendor.a1e05afc.js"]),props:!0,meta:{title:"Crispy Salmon Tacos",ingredients:["salmon","tomatoes","mango","onions","cajun seasoning","tortillas","limes"],keywords:["fish","dinner","lunch"]}},{name:"recipes-chilli-con-carne",path:"/recipes/chilli-con-carne",component:()=>V((()=>import("./chilli-con-carne.2b30fdf6.js")),["/recipeasy/assets/chilli-con-carne.2b30fdf6.js","/recipeasy/assets/RecipeMethod.2d25d518.js","/recipeasy/assets/RecipeMethod.4a6680bc.css","/recipeasy/assets/vendor.a1e05afc.js"]),props:!0,meta:{title:"Chilli Con Carne",ingredients:["onions","pepper","beef","kidney beans","tomatoes","chilli peppers","chilli powder","rice"],keywords:["dinner","mexican","tex-mex","meat"]}},{name:"recipes-burger-bowls",path:"/recipes/burger-bowls",component:()=>V((()=>import("./burger-bowls.8c9c2fd3.js")),["/recipeasy/assets/burger-bowls.8c9c2fd3.js","/recipeasy/assets/RecipeMethod.2d25d518.js","/recipeasy/assets/RecipeMethod.4a6680bc.css","/recipeasy/assets/vendor.a1e05afc.js"]),props:!0,meta:{title:"Burger Bowls",ingredients:["beef","garlic powder","worcestershire sauce","butter","mushrooms","cheese","bacon","bbq sauce"],keywords:["dinner","meat"]}},{name:"recipes-blueberry-muffins",path:"/recipes/blueberry-muffins",component:()=>V((()=>import("./blueberry-muffins.f8e40503.js")),["/recipeasy/assets/blueberry-muffins.f8e40503.js","/recipeasy/assets/RecipeMethod.2d25d518.js","/recipeasy/assets/RecipeMethod.4a6680bc.css","/recipeasy/assets/vendor.a1e05afc.js"]),props:!0,meta:{title:"Blueberry Muffins",ingredients:["eggs","milk","sugar","flour","blueberries"],keywords:["baking","breakfast","snack","vegetarian"]}},{name:"search",path:"/search",component:()=>V((()=>import("./search.2aaa5701.js")),["/recipeasy/assets/search.2aaa5701.js","/recipeasy/assets/search.4cf94c15.css","/recipeasy/assets/vendor.a1e05afc.js"]),props:!0},{name:"index",path:"/",component:Z,props:!0},{name:"404",path:"/404",component:()=>V((()=>Promise.resolve().then((function(){return oe}))),void 0),props:!0}],te={},se=n("p",null,"The page you were looking for cannot be found.",-1);te.render=function(e,t){const a=S,r=K;return s(),o(r,null,{header:u((()=>[n(a,{title:"Page not found"})])),default:u((()=>[se])),_:1})};var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:te});const ae=[...ee,{path:"/",component:Z,name:"home"},{path:"/search",component:()=>V((()=>import("./search.2aaa5701.js")),["/recipeasy/assets/search.2aaa5701.js","/recipeasy/assets/search.4cf94c15.css","/recipeasy/assets/vendor.a1e05afc.js"]),name:"search"},{path:"/:pathMatch(.*)*",name:"404",component:te}],ne=k({history:v("/recipeasy/"),routes:ae,scrollBehavior:(e,t,s)=>s||{x:0,y:0}});ne.beforeEach(((e,t,s)=>{var o;(null==(o=e.meta)?void 0:o.title)?document.title=e.meta.title+" | Recipeasy":document.title="Recipeasy",s()}));const re={};re.render=function(e,t){const a=l("RouterView");return s(),o(a)};const le=E(re);le.use(ne),le.mount("#app");export{T as _,K as a,C as b,q as c,$ as d,U as e};
