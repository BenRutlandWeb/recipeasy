import{r as t,b as l,o as e,d as n,t as u,u as a,i as s,f as i,F as o,j as r}from"./vendor.87998458.js";import{j as c}from"./recipes.afcc8be1.js";const d={expose:[],setup(i){const o=t(!1),r=t(!1);"wakeLock"in navigator&&(o.value=!0);const c=l((()=>r.value?"🖥️🔒":"🖥️🔓")),d=l((()=>r.value?"active":""));let v=null;if(o){const t=()=>{null!==v&&"visible"===document.visibilityState&&y()};document.addEventListener("visibilitychange",t)}const y=async()=>{try{v=await navigator.wakeLock.request("screen"),r.value=!0,v.addEventListener("release",(()=>{r.value=!1}))}catch(t){}};function h(){r.value?v.release().then((()=>{v=null,r.value=!1})):y()}return(t,l)=>o.value?(e(),n("button",{key:0,type:"button",onClick:h,class:a(d)},u(a(c)),3)):s("",!0)}};const v={key:0},y=i("h2",null,"Ingredients",-1),h={class:"method-title"},k=i("h2",null,"Method",-1),b={key:1},m={expose:[],props:{slug:String},setup(t){const l=t,m=c.find((t=>t.slug==l.slug));return(t,l)=>{const c=d;return e(),n(o,null,[i("h1",null,u(a(m).title),1),a(m).meta?(e(),n("table",v,[i("thead",null,[i("tr",null,[(e(!0),n(o,null,r(a(m).meta,((t,l)=>(e(),n("th",{key:l},u(l),1)))),128))])]),i("tbody",null,[i("tr",null,[(e(!0),n(o,null,r(a(m).meta,((t,l)=>(e(),n("td",{key:l},u(t),1)))),128))])])])):s("",!0),y,i("ul",null,[(e(!0),n(o,null,r(a(m).ingredients,(t=>(e(),n("li",{key:t},u(t),1)))),128))]),i("div",h,[k,i(c)]),i("ol",null,[(e(!0),n(o,null,r(a(m).method,(t=>(e(),n("li",{key:t},u(t),1)))),128))]),a(m).nutrition?(e(),n("div",b,[i("h2",null,"Nutrition: "+u(a(m).nutrition.label),1),i("table",null,[i("thead",null,[i("tr",null,[(e(!0),n(o,null,r(a(m).nutrition.stats,((t,l)=>(e(),n("th",{key:l},u(l),1)))),128))])]),i("tbody",null,[i("tr",null,[(e(!0),n(o,null,r(a(m).nutrition.stats,((t,l)=>(e(),n("td",{key:l},u(t),1)))),128))])])])])):s("",!0)],64)}}};export default m;
