import{_ as e,a,b as s,c as t,d as l,e as r}from"./index.58844ad6.js";import{m as n,l as o,f as u,b as c,e as i,o as d,c as p,g as f,w as h,u as y,k as m,F as g,h as v}from"./vendor.5cc3f50f.js";const b=v("arrow_back"),q=f("label",{for:"app-search",class:"sr-only"}," Search by ingredient, dish, keyword... ",-1),k=v("close"),w={expose:[],setup(t){const l=n(),r=o(),v=u((()=>r.query.q||"")),w=c(null);function _({target:e}){l.push({name:"search",query:Object.assign({},r.query,{q:e.value})})}function x({target:e}){const a=Object.assign({},r.query);delete a.q,l.push({query:a}),w.value.focus()}return i((()=>w.value.focus())),(t,l)=>{const r=e,n=a,o=s;return d(),p(g,null,[f(n,{to:{name:"home"},"aria-label":"Go home"},{default:h((()=>[f(r,null,{default:h((()=>[b])),_:1})])),_:1}),q,f("input",{type:"search",id:"app-search",placeholder:"Ingredient, dish, keyword...",autocomplete:"off",value:y(v),onInput:_,ref:w,class:"\n      text-xl\n      flex-1\n      placeholder-gray-500\n      focus:outline-none\n      bg-transparent\n    "},null,40,["value"]),y(v)?(d(),p(o,{key:0,onClick:x,"aria-label":"clear search"},{default:h((()=>[f(r,null,{default:h((()=>[k])),_:1})])),_:1})):m("",!0)],64)}}},_={key:1,class:"list"},x=f("p",null,"No recipes found",-1),C={expose:[],setup(e){const a=u((()=>o().query.q||"")),s=n().options.routes.filter((e=>e.path.startsWith("/recipes"))),c=u((()=>s.filter((e=>{var s,t;const l=a.value.toLowerCase(),r=e.meta;return r.title.toLowerCase().includes(l)||(null==(s=r.ingredients)?void 0:s.find((e=>e.toLowerCase().includes(l))))||(null==(t=r.keywords)?void 0:t.find((e=>e.toLowerCase().includes(l))))}))));return(e,a)=>{const s=w,n=l,o=r,u=t;return d(),p(u,null,{header:h((()=>[f(s)])),default:h((()=>[y(c).length?(d(),p(o,{key:0,items:y(c),class:"grid gap-6"},{default:h((({item:e})=>[f(n,{recipe:e},null,8,["recipe"])])),_:1},8,["items"])):(d(),p("div",_,[x]))])),_:1})}}};export default C;
