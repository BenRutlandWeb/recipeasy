import{_ as e,a,b as s,c as t,d as r,e as n,f as l}from"./index.bcd53431.js";import{n as o,m as c,b as i,e as u,g as d,o as p,c as h,a as f,w as g,u as m,l as y,F as b,d as k,t as v}from"./vendor.12da91c2.js";const w=f("label",{for:"app-search",class:"sr-only"}," Search by ingredient, dish, keyword... ",-1),x={expose:[],setup(t){const r=o(),n=c(),l=i((()=>n.query.q||"")),k=u(null);function v({target:e}){r.push({name:"search",query:Object.assign({},n.query,{q:e.value})})}function x({target:e}){const a=Object.assign({},n.query);delete a.q,r.push({query:a}),k.value.focus()}return d((()=>k.value.focus())),(t,r)=>{const n=e,o=a,c=s;return p(),h(b,null,[f(o,{to:{name:"home"},"aria-label":"Go home"},{default:g((()=>[f(n,{icon:"arrow_back"})])),_:1}),w,f("input",{type:"search",id:"app-search",placeholder:"Ingredient, dish, keyword...",autocomplete:"off",value:m(l),onInput:v,ref:k,class:"\n      text-xl\n      flex-1\n      placeholder-gray-500\n      focus:outline-none\n      bg-transparent\n    "},null,40,["value"]),m(l)?(p(),h(c,{key:0,onClick:x,"aria-label":"clear search"},{default:g((()=>[f(n,{icon:"close"})])),_:1})):y("",!0)],64)}}},q={class:"p-4 grid gap-2"},_={class:"text-xl font-bold"},j={expose:[],props:{recipe:{type:Object}},setup:e=>(a,s)=>{const r=t,n=k("RouterLink");return p(),h(n,{to:{name:e.recipe.name},class:"\n      block\n      h-full\n      shadow\n      rounded\n      dark:shadow-2xl\n      dark:bg-gray-850\n      relative\n    "},{default:g((()=>[f("img",{src:e.recipe.meta.image,alt:e.recipe.meta.title,width:"640",height:"360",loading:"lazy",class:"\n        block\n        w-full\n        h-auto\n        aspect-ratio-32/9\n        object-cover\n        rounded-t\n        dark:filter\n        dark:brightness-75\n        dark:contrast-110\n      "},null,8,["src","alt"]),f("div",q,[f(r,{chips:e.recipe.meta.keywords},null,8,["chips"]),f("h3",_,v(e.recipe.meta.title),1)])])),_:1},8,["to"])}},C={key:1},L={key:2,class:"text-center grid gap-4"},O={class:"relative"},I=f("p",{class:"text-2xl"},"Search Recipeasy",-1),R={expose:[],setup(a){const s=i((()=>c().query.q||"")),t=o().options.routes.filter((e=>e.path.startsWith("/recipes"))).reverse(),u=i((()=>t.filter((e=>{var a,t;const r=s.value.toLowerCase(),n=e.meta;return n.title.toLowerCase().includes(r)||(null==(a=n.ingredients)?void 0:a.find((e=>e.toLowerCase().includes(r))))||(null==(t=n.keywords)?void 0:t.find((e=>e.toLowerCase().includes(r))))}))));return(a,t)=>{const o=x,c=j,i=n,d=e,y=l,b=r;return p(),h(b,null,{header:g((()=>[f(o)])),default:g((()=>[m(s)&&m(u).length?(p(),h(i,{key:0,items:m(u),class:"grid gap-6"},{default:g((({item:e})=>[f(c,{recipe:e},null,8,["recipe"])])),_:1},8,["items"])):m(s)?(p(),h("p",C,"No recipes found.")):(p(),h("div",L,[f("div",O,[f(d,{icon:"search",class:"w-64 h-64 mx-auto filter grayscale opacity-10"}),f(y,{class:"w-16 h-16 mx-auto filter absolute top-18 left-28"})]),I]))])),_:1})}}};export default R;
