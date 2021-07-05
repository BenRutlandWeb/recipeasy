import{v as e,o as t,c as r,a,r as s,b as n,u as i,d as o,w as c,e as l,f as p,g as d,h as m,t as u,F as h,i as g,j as f,k as _,l as k,m as b,n as y,p as w,q as v}from"./vendor.89dd05f2.js";let L;const j={},E=function(e,t){if(!t)return e();if(void 0===L){const e=document.createElement("link").relList;L=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in j)return;j[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":L,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},z={},x={viewBox:"0 0 200 200",width:"24",height:"24",class:"w-6 h-6 dark:filter dark:brightness-150"},A=a("linearGradient",{id:"rlg",y2:"100%"},[a("stop",{"stop-color":"#d71d4c"}),a("stop",{offset:"100%","stop-color":"#7143b1"})],-1),R=a("path",{fill:"url(#rlg)","fill-rule":"evenodd",d:"M147.96 146.09a6.02 6.02 0 016.95 4.87 6.02 6.02 0 01-4.87 6.95l-.77.14a581.78 581.78 0 01-16.6 2.92c-4.06.66-8.13 1.25-12.21 1.78-3.96.53-7.94.94-11.92 1.23-3.91.42-7.83.72-11.76.89-3.54.14-7.08.21-10.62.21l-6.56-.04c-2.2-.02-4.41-.04-6.61-.04a5.98 5.98 0 01-5.99-6.01 5.98 5.98 0 016.01-5.99c2.24 0 4.47.02 6.71.04l6.46.04c3.36 0 6.73-.06 10.09-.2 3.74-.16 7.47-.45 11.19-.86 3.82-.27 7.63-.66 11.43-1.16 3.96-.52 7.92-1.1 11.87-1.73 5.42-.88 10.82-1.83 16.22-2.86l.98-.18zm9.89-39.36c1.6-.35 4.02-.85 5.1.56 1.07 1.42-.45 4.7-2.83 6.99-2.39 2.3-26.73 16.29-37.12 20.77-10.39 4.48-15.33 6.54-19.9 5.29q-4.73-1.51-7.37-5.1l-2.45-4.34Q74.7 134.3 71 133.54a9.8 9.8 0 01-6.61-4.34q-1.57-2.82-1.51-4.53c.05-1.72.23-3.17 2.07-4.73q3.53-2.34 12.47-2.26 8.18.26 15.1-.76 35.34-2.42 65.33-10.2zm-.38-29.46c2.31-.99 7.96-1.58 9.53 3.78a11.97 11.97 0 01-3.49 12.46c-2.78 2.32-12.18 6.89-31.72 6.42q-29.52.15-32.1 0c-2.56-.15-6.06-.44-8.3 3.02-2.25 3.46-4.63 4.59-10.39 4.91-5.76.33-19.42-1.97-23-5.86-3.58-3.9-4.1-7.22-3.8-9.43.3-2.22.82-4.47 3.8-6.57 2.98-2.1 6.78-5.5 22.44-4.95q7.4.83 9.56 3.95c2.16 3.12 2.17 4.46 9.7 3.98q36.14-2.49 57.77-11.7zm4.53-43.8l1 1.89q-22.77 5.77-24.6 7.36-1.61 1.03-.4 2.28 1.21 1.25 2.1.93a177.3 177.3 0 0124.55-6.8l.56 2.08q-19.27 6.03-23.98 7.79-1.59.7-1.13 2 .46 1.3 2.08.6c7.61-2.87 16.4-4.72 24.35-6.42l.57 2.45c-8.56 1.52-19.12 5.94-24.92 7.55q-1.17 1.25 0 2.18c1.16.93 1.51 1.03 5.57-.12 4.06-1.15 13.65-4.24 20.67-5.65v2.27q-15.5 6.73-20.2 8.88c-4.7 2.14-9.35 4.88-13.4 4.34q-6.33-1.8-10.96-5.29-49.82 14.8-67.59 12.09-6.43-.75-10-4.35-2.88-3.13-2.27-7.17.82-4.46 3.96-6.61 5.12-4.23 12.84-3.02 14.32 2.1 31.72 1.13 16.76-.04 28.89-4.72 2.51-6.93 5.85-9.63c3.34-2.7 8.44-2.94 13.97-3.4 5.54-.45 17.22-2.04 20.77-2.64zm-9.5 145.46l-.72.28c-1.53.53-3.1.97-4.68 1.32-2.21.51-4.44.93-6.68 1.27-2.67.42-5.35.76-8.04 1.04-2.99.31-6 .57-9 .76a302.17 302.17 0 01-37.25.1c-5.19-.29-10.36-.79-15.51-1.5a99.4 99.4 0 01-6.21-1.07c-1.6-.32-3.17-.71-4.73-1.18-.73-.21-1.44-.47-2.13-.78a4.88 4.88 0 01-1.1-1.84 7.98 7.98 0 01-.34-1.54c-.12-.93-.17-1.88-.16-2.82 0-1.15.04-2.3.11-3.46.08-1.45.18-2.9.29-4.35a338 338 0 00.42-6.4c.14-2.52.21-5.04.22-7.56 0-5.4-.37-10.8-1.13-16.15-.46-3.29-.99-6.57-1.59-9.85-.53-2.9-1.14-5.8-1.83-8.67a112.92 112.92 0 00-4.74-15.06 129.89 129.89 0 00-6.27-13.29c-1.18-2.21-2.4-4.39-3.64-6.57l-4.07-7.04-.65-1.12-.03-.04c-2.1-3.59-4.25-7.16-6.44-10.7a414.95 414.95 0 01-4.08-6.73 80.85 80.85 0 01-2.87-5.25c-.33-.65-.62-1.3-.88-1.98.8-.17 1.6-.33 2.41-.46 1.97-.32 3.94-.62 5.91-.9a353.37 353.37 0 0012.15-1.92c19.02-3.26 38-6.8 56.91-10.64a1389.8 1389.8 0 0042.37-9.27c7.44-1.75 14.86-3.58 22.26-5.48a839.8 839.8 0 0016.37-4.39l.44 1.92a94.45 94.45 0 011.39 7.92 152.29 152.29 0 011.36 17.3c.1 4.41.09 8.82-.04 13.22a462.29 462.29 0 01-6.06 51.41 325.3 325.3 0 01-10.33 42.19c-1.94 6.6-4.2 13.1-6.77 19.47a91.47 91.47 0 01-4.64 9.81zM179 .62q6.17-2.19 9.25 3.2 7.04 20 6.04 52.87-3.29 53.74-17 97.05-6.18 21.04-13.78 34.18c-7.59 13.13-103.44 13.7-115.36 1.7C36.23 177.6 45.88 164.36 42 137c-3.88-27.36-9.09-35.94-21.04-56.52C9.01 59.9-.97 48.7 7 39.13c4.2-4.55 13.26-4.58 28-7.13S119.9 17.6 179 .62z"},null,-1);z.render=function(e,a){return t(),r("svg",x,[A,R])};const O={},P={class:"text-xl flex-1 truncate"};O.render=function(e,a){return t(),r("p",P,[s(e.$slots,"default")])};const I={viewBox:"0 0 24 24",width:"24",height:"24",class:"w-6 h-6 fill-current inline-block","aria-hidden":"true"},S={expose:[],props:{icon:{type:String}},setup(e){const s=e,o={search:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",outdoor_grill:"M17 22c1.66 0 3-1.34 3-3s-1.34-3-3-3c-1.3 0-2.4.84-2.82 2H9.14l1.99-3.06a6.36 6.36 0 001.74 0l1.02 1.57c.42-.53.96-.95 1.6-1.21l-.6-.93A6.992 6.992 0 0019 8H5c0 2.84 1.69 5.27 4.12 6.37l-3.95 6.08a1 1 0 00.29 1.38 1 1 0 001.38-.29l1-1.55h6.34C14.6 21.16 15.7 22 17 22zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9.41 7h1c.15-1.15.23-1.64-.89-2.96-.42-.5-.68-.77-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96.22.24.79.67.45 2.04zM11.89 7h1c.15-1.15.23-1.64-.89-2.96-.42-.5-.68-.78-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96.23.24.8.67.45 2.04zM14.41 7h1c.15-1.15.23-1.64-.89-2.96-.42-.5-.68-.77-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96.22.24.79.67.45 2.04z",outdoor_grill_border:"M17 22c1.66 0 3-1.34 3-3s-1.34-3-3-3c-1.3 0-2.4.84-2.82 2H9.14l1.99-3.06a6.36 6.36 0 001.74 0l1.02 1.57c.42-.53.96-.95 1.6-1.21l-.6-.93A6.992 6.992 0 0019 8H5c0 2.84 1.69 5.27 4.12 6.37l-3.95 6.08a1 1 0 00.29 1.38 1 1 0 001.38-.29l1-1.55h6.34C14.6 21.16 15.7 22 17 22zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-9.58-8h9.16c-.77 1.76-2.54 3-4.58 3s-3.81-1.24-4.58-3zM9.41 7h1c.15-1.15.23-1.64-.89-2.96-.42-.5-.68-.77-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96.22.24.79.67.45 2.04zM11.89 7h1c.15-1.15.23-1.64-.89-2.96-.42-.5-.68-.78-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96.23.24.8.67.45 2.04zM14.41 7h1c.15-1.15.23-1.64-.89-2.96-.42-.5-.68-.77-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96.22.24.79.67.45 2.04z",favorite_border:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",favorite:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A5.99 5.99 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",brightness_7:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18a6 6 0 11.01-12.01A6 6 0 0112 18zm0-10a4 4 0 100 8 4 4 0 000-8z",brightness_4:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55a6 6 0 000-10.9A5.98 5.98 0 0118 12a6 6 0 01-6 6z",arrow_back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",close:"M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z",share:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0021 5a3 3 0 10-5.91.7L8.04 9.81A2.99 2.99 0 003 12a3 3 0 005.04 2.19l7.12 4.16A2.92 2.92 0 1018 16.08z"},c=n((()=>o[s.icon]));return(e,s)=>(t(),r("svg",I,[a("path",{d:i(c)},null,8,["d"])]))}},T={};T.render=function(e,a){const n=o("RouterLink");return t(),r(n,{class:"rounded-full p-2 m-2 leading-3"},{default:c((()=>[s(e.$slots,"default")])),_:3})};const M={},C={type:"button",class:"rounded-full p-2 m-2 leading-3"};M.render=function(e,a){return t(),r("button",C,[s(e.$slots,"default")])};const V={expose:[],setup(e){const s=l("dark"==localStorage.getItem("prefers-color-scheme")),o=document.documentElement;function m(e){const t=e?"dark":"no-preference";o.setAttribute("data-prefers-color-scheme",t),o.classList.toggle("dark",e),o.classList.toggle("light",!e),localStorage.setItem("prefers-color-scheme",t)}function u(){s.value=!s.value}p(s,m),d((()=>m(s.value)));const h=n((()=>s.value?"brightness_7":"brightness_4"));return(e,s)=>{const n=S,o=M;return t(),r(o,{role:"switch","aria-checked":"false","aria-label":"Toggle dark mode",onClick:u},{default:c((()=>[a(n,{icon:i(h)},null,8,["icon"])])),_:1},8,["aria-checked"])}}},D={expose:[],props:{title:String},setup:e=>(s,n)=>{const i=z,o=O,l=S,p=T,d=V;return t(),r(h,null,[a(i,{class:"m-4"}),a(o,null,{default:c((()=>[m(u(e.title),1)])),_:1}),a(p,{to:{name:"search"},"aria-label":"Search"},{default:c((()=>[a(l,{icon:"search"})])),_:1}),a(d)],64)}},q={class:"p-2"},H={class:"truncate-2 text-sm font-bold"},$={expose:[],props:{recipe:{type:Object}},setup:e=>(s,n)=>{const i=o("RouterLink");return t(),r(i,{to:{name:e.recipe.name},class:"block h-full shadow rounded dark:shadow-xl dark:bg-gray-850 relative"},{default:c((()=>[a("img",{src:e.recipe.meta.image,alt:e.recipe.meta.title,width:"640",height:"360",loading:"lazy",class:"\n        block\n        w-full\n        h-auto\n        aspect-ratio-1/1\n        object-cover\n        rounded-t\n        dark:filter\n        dark:brightness-75\n        dark:contrast-110\n      "},null,8,["src","alt"]),a("div",q,[a("h3",H,u(e.recipe.meta.title),1)])])),_:1},8,["to"])}};const W=_(),B={expose:[],props:{items:{type:Array},tag:{type:String,default:"ul"}},setup:e=>(a,n)=>(t(),r(f(e.tag),{class:"slider-group flex overflow-auto px-6 pb-8 -mx-6"},{default:W((()=>[(t(!0),r(h,null,g(e.items,(e=>(t(),r("li",{key:e,class:"slider-item"},[s(a.$slots,"default",{item:e},(()=>[m(u(e),1)]),!0)])))),128))])),_:3})),__scopeId:"data-v-071e635e"},N={class:"truncate-2 text-base font-bold py-2 px-4"},J={expose:[],props:{recipe:{type:Object}},setup:e=>(s,n)=>{const i=o("RouterLink");return t(),r(i,{to:{name:e.recipe.name},class:"flex items-center rounded shadow dark:bg-gray-850"},{default:c((()=>[a("img",{src:e.recipe.meta.image,alt:e.recipe.meta.title,width:"360",height:"360",loading:"lazy",class:"\n        block\n        w-16\n        rounded-l\n        dark:filter\n        dark:brightness-75\n        dark:contrast-110\n      "},null,8,["src","alt"]),a("h3",N,u(e.recipe.meta.title),1)])),_:1},8,["to"])}},G={expose:[],props:{items:{type:Array},tag:{type:String,default:"ul"}},setup:e=>(a,n)=>(t(),r(f(e.tag),null,{default:c((()=>[(t(!0),r(h,null,g(e.items,(e=>(t(),r("li",{key:e},[s(a.$slots,"default",{item:e},(()=>[m(u(e),1)]))])))),128))])),_:3}))},F={},Q={class:"\n      sticky\n      top-0\n      z-50\n      shadow\n      bg-white\n      border-b border-white\n      dark:bg-gray-900\n      dark:border-gray-700\n    "},U={class:"max-w-screen-lg mx-auto flex justify-between items-center"};F.render=function(e,n){return t(),r("header",Q,[a("div",U,[s(e.$slots,"default")])])};const Y={},K={class:"mt-8 mb-32 w-full max-w-screen-lg mx-auto px-6 flex-1 grid gap-6"};Y.render=function(e,a){return t(),r("main",K,[s(e.$slots,"default")])};const X={},Z={class:"text-center py-8 px-6 border-t dark:border-gray-700"},ee=m("© 2021 Ben Rutland Web");X.render=function(e,a){return t(),r("footer",Z,[s(e.$slots,"default",{},(()=>[ee]))])};const te={};te.render=function(e,n){const i=D,o=F,l=Y,p=X;return t(),r(h,null,[a(o,null,{default:c((()=>[s(e.$slots,"header",{},(()=>[a(i)]))])),_:3}),a(l,null,{default:c((()=>[s(e.$slots,"default")])),_:3}),a(p)],64)};const re=a("h2",{class:"mt-0"},"Your favourites",-1),ae=a("h2",null,"All recipes",-1),se={expose:[],setup(e){var s,n;const o=JSON.parse(null!=(s=localStorage.getItem("favourites"))?s:"{}"),l=Object.keys(o),p=JSON.parse(null!=(n=localStorage.getItem("recent"))?n:"[]"),d=k().options.routes.filter((e=>e.path.startsWith("/recipes"))).reverse(),m=d.filter((e=>l.includes(e.name))),u=p.map((e=>d.find((t=>t.name==e))));return(e,s)=>{const n=D,o=$,l=B,p=J,g=G,f=te;return t(),r(f,null,{header:c((()=>[a(n,{title:"Recipeasy"})])),default:c((()=>[i(m).length?(t(),r(h,{key:0},[re,a(l,{items:i(m)},{default:c((({item:e})=>[a(o,{recipe:e},null,8,["recipe"])])),_:1},8,["items"])],64)):b("",!0),i(u).length?(t(),r(h,{key:1},[a("h2",{class:{"mt-0":!i(m).length}},"Recently viewed",2),a(l,{items:i(u)},{default:c((({item:e})=>[a(o,{recipe:e},null,8,["recipe"])])),_:1},8,["items"])],64)):b("",!0),ae,a(g,{items:i(d),class:"grid gap-6 md:grid-cols-2 lg:grid-cols-3"},{default:c((({item:e})=>[a(p,{recipe:e},null,8,["recipe"])])),_:1},8,["items"])])),_:1})}}},ne=[{name:"recipes-torte-caprese",path:"/recipes/torte-caprese",component:()=>E((()=>import("./torte-caprese.5aedac47.js")),["/recipeasy/assets/torte-caprese.5aedac47.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Torta Caprese",ingredients:["eggs","almonds","sugar","dark chocolate","butter"],keywords:["baking","dessert","italian","gluten free","vegetarian"],image:"/recipeasy/torte-caprese.jpg"}},{name:"recipes-tarragon-chicken",path:"/recipes/tarragon-chicken",component:()=>E((()=>import("./tarragon-chicken.2eac03a3.js")),["/recipeasy/assets/tarragon-chicken.2eac03a3.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Tarragon Chicken",ingredients:["chicken","grapes","white wine","tarragon","cream","parsley","garlic","butter"],keywords:["dinner"],image:"/recipeasy/tarragon-chicken.jpg"}},{name:"recipes-smoky-chorizo-salmon",path:"/recipes/smoky-chorizo-salmon",component:()=>E((()=>import("./smoky-chorizo-salmon.75fcd6fd.js")),["/recipeasy/assets/smoky-chorizo-salmon.75fcd6fd.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Smoky Chorizo Salmon",ingredients:["salmon","tomatoes","basil","olives","chorizo"],keywords:["fish","dinner"],image:"/recipeasy/smoky-chorizo-salmon.jpg"}},{name:"recipes-prawn-pasta-with-rocket",path:"/recipes/prawn-pasta-with-rocket",component:()=>E((()=>import("./prawn-pasta-with-rocket.339a5c03.js")),["/recipeasy/assets/prawn-pasta-with-rocket.339a5c03.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Prawn Pasta With Rocket",ingredients:["garlic","pine nuts","chilli pepper","prawns","white wine","basil","pasta","rocket"],keywords:["italian","dinner","seafood"],image:"/recipeasy/prawn-pasta-with-rocket.jpg"}},{name:"recipes-pork-with-tomatoes-and-red-wine",path:"/recipes/pork-with-tomatoes-and-red-wine",component:()=>E((()=>import("./pork-with-tomatoes-and-red-wine.faf27a4f.js")),["/recipeasy/assets/pork-with-tomatoes-and-red-wine.faf27a4f.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Pork With Tomatoes And Red Wine",ingredients:["pork fillet","tomatoes","red wine","tomato puree","mixed herbs","mushrooms","courgettes"],keywords:["dinner","italian"],image:"/recipeasy/pork-with-tomatoes-and-red-wine.jpg"}},{name:"recipes-peppers-with-fennel",path:"/recipes/peppers-with-fennel",component:()=>E((()=>import("./peppers-with-fennel.2674f285.js")),["/recipeasy/assets/peppers-with-fennel.2674f285.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Peppers with fennel",ingredients:["peppers","fennel","garlic","pine nuts"],keywords:["dinner","vegetarian","vegan"],image:"/recipeasy/peppers-with-fennel.jpg"}},{name:"recipes-pancakes",path:"/recipes/pancakes",component:()=>E((()=>import("./pancakes.a9d30ec6.js")),["/recipeasy/assets/pancakes.a9d30ec6.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Pancakes",ingredients:["eggs","milk","flour"],keywords:["breakfast","dessert","vegetarian"],image:"/recipeasy/pancakes.jpg"}},{name:"recipes-honey-and-mustard-chicken",path:"/recipes/honey-and-mustard-chicken",component:()=>E((()=>import("./honey-and-mustard-chicken.c276a9d0.js")),["/recipeasy/assets/honey-and-mustard-chicken.c276a9d0.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Honey and mustard chicken",ingredients:["honey","dijon mustard","chicken","olive oil","balsamic vinegar","sun-dried tomatoes","pasta"],keywords:["dinner","italian"],image:"/recipeasy/honey-and-mustard-chicken.jpg"}},{name:"recipes-harissa-crumbed-cod-with-lentils",path:"/recipes/harissa-crumbed-cod-with-lentils",component:()=>E((()=>import("./harissa-crumbed-cod-with-lentils.50252a4d.js")),["/recipeasy/assets/harissa-crumbed-cod-with-lentils.50252a4d.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Harissa-crumbed Cod with lentils & peppers",ingredients:["cod","peppers","puy lentils","lemon","olives","breadcrumbs"],keywords:["dinner","fish"],image:"/recipeasy/harissa-crumbed-cod-and-lentils.jpg"}},{name:"recipes-crispy-salmon-tacos",path:"/recipes/crispy-salmon-tacos",component:()=>E((()=>import("./crispy-salmon-tacos.c1336134.js")),["/recipeasy/assets/crispy-salmon-tacos.c1336134.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Crispy Salmon Tacos",ingredients:["salmon","tomatoes","mango","onions","cajun seasoning","tortillas","limes"],keywords:["fish","dinner","lunch"],image:"/recipeasy/crispy-salmon-tacos.jpg"}},{name:"recipes-chilli-con-carne",path:"/recipes/chilli-con-carne",component:()=>E((()=>import("./chilli-con-carne.c6e71216.js")),["/recipeasy/assets/chilli-con-carne.c6e71216.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Chilli Con Carne",ingredients:["onions","pepper","beef","kidney beans","tomatoes","chilli peppers","chilli powder","rice"],keywords:["dinner","mexican","tex-mex","meat"],image:"/recipeasy/chilli-con-carne.jpg"}},{name:"recipes-chicken-with-sage-and-prosciutto",path:"/recipes/chicken-with-sage-and-prosciutto",component:()=>E((()=>import("./chicken-with-sage-and-prosciutto.0076a9c0.js")),["/recipeasy/assets/chicken-with-sage-and-prosciutto.0076a9c0.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Chicken With Sage And Prosciutto",ingredients:["parma ham","prosciutto","chicken","butter","white wine"],keywords:["dinner","italian"],image:"/recipeasy/chicken-with-sage-and-prosciutto.jpg"}},{name:"recipes-burger-bowls",path:"/recipes/burger-bowls",component:()=>E((()=>import("./burger-bowls.d14b5c17.js")),["/recipeasy/assets/burger-bowls.d14b5c17.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Burger Bowls",ingredients:["beef","garlic powder","worcestershire sauce","butter","mushrooms","cheese","bacon","bbq sauce"],keywords:["dinner","meat"],image:"/recipeasy/burger-bowls.jpg"}},{name:"recipes-blueberry-muffins",path:"/recipes/blueberry-muffins",component:()=>E((()=>import("./blueberry-muffins.30eefbfb.js")),["/recipeasy/assets/blueberry-muffins.30eefbfb.js","/recipeasy/assets/RecipeLayout.33659f78.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0,meta:{title:"Blueberry Muffins",ingredients:["eggs","milk","sugar","flour","blueberries"],keywords:["breakfast","snack","baking","vegetarian"],image:"/recipeasy/blueberry-muffins.jpg"}},{name:"search",path:"/search",component:()=>E((()=>import("./search.5a76f9c5.js")),["/recipeasy/assets/search.5a76f9c5.js","/recipeasy/assets/vendor.89dd05f2.js"]),props:!0},{name:"index",path:"/",component:se,props:!0},{name:"404",path:"/404",component:()=>E((()=>Promise.resolve().then((function(){return le}))),void 0),props:!0}],ie={},oe=m("Page not found"),ce=a("p",null,"The page you were looking for cannot be found.",-1);ie.render=function(e,s){const n=z,i=T,o=O,l=V,p=te;return t(),r(p,null,{header:c((()=>[a(i,{to:{name:"home"},"aria-label":"Go home"},{default:c((()=>[a(n)])),_:1}),a(o,null,{default:c((()=>[oe])),_:1}),a(l)])),default:c((()=>[ce])),_:1})};var le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie});const pe=[...ne,{path:"/",component:se,name:"home"},{path:"/search",component:()=>E((()=>import("./search.5a76f9c5.js")),["/recipeasy/assets/search.5a76f9c5.js","/recipeasy/assets/vendor.89dd05f2.js"]),name:"search"},{path:"/:pathMatch(.*)*",name:"404",component:ie}],de=y({history:w("/recipeasy/"),routes:pe,scrollBehavior:(e,t,r)=>r||{left:0,top:0}});de.beforeEach(((e,t,r)=>{var a;(null==(a=e.meta)?void 0:a.title)?document.title=e.meta.title+" | Recipeasy":document.title="Recipeasy",function(e){var t;if(!e.path.startsWith("/recipes"))return;let r=JSON.parse(null!=(t=localStorage.getItem("recent"))?t:"[]");r[0]!=e.name&&(r=r.filter((t=>t!==e.name)),r.unshift(e.name),r=r.slice(0,10),localStorage.setItem("recent",JSON.stringify(r)))}(e),r()}));const me={};me.render=function(e,a){const s=o("RouterView");return t(),r(s)};const ue=v(me);ue.use(de),ue.mount("#app"),function(t={}){const{immediate:r=!1,onNeedRefresh:a,onOfflineReady:s}=t;let n;"serviceWorker"in navigator&&(n=new e("/recipeasy/sw.js",{scope:"/recipeasy/"}),n.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==s||s()})),n.register({immediate:r}).then((e=>e)))}();export{S as _,T as a,M as b,te as c,J as d,G as e,O as f,V as g,F as h,Y as i,X as j};
