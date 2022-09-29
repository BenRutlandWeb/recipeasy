import{p as u,b as r,d as _,e as n,w as l,q as g,t as $,F as v,_ as p,j as B,s as C,v as S,a as A,r as y,x as w,y as d,h as k,z as L,A as I,i as h,f as b,B as T,C as N,D as R}from"./index.c121dfee.js";const z={};function F(t,o){const e=p,a=B,s=C,c=S;return r(),_(v,null,[n(a,{to:{name:"home"},"aria-label":"Go home"},{default:l(()=>[n(e,{icon:"arrow_back"})]),_:1}),n(s,null,{default:l(()=>[g($(t.$route.meta.title),1)]),_:1}),n(c)],64)}var V=u(z,[["render",F]]);const D=["src"],E={props:{src:String},setup(t){return(o,e)=>(r(),_("img",{src:t.src,loading:"lazy",width:"360",height:"360",class:"shadow block w-full rounded dark:filter dark:brightness-75 dark:contrast-110"},null,8,D))}},M=["aria-checked"],q={setup(t){var c;const o=JSON.parse((c=localStorage.getItem("favourites"))!=null?c:"{}"),e=A(),a=y(o[e.name]);function s(){o[e.name]?(delete o[e.name],a.value=!1):(o[e.name]=!0,a.value=!0),localStorage.setItem("favourites",JSON.stringify(o))}return(i,m)=>{const f=p;return r(),_("button",{type:"button",role:"switch",onClick:s,"aria-label":"Toggle favourite","aria-checked":a.value?"true":"false"},[n(f,{class:w({"text-pink-600":a.value}),icon:a.value?"favorite":"favorite_border"},null,8,["class","icon"])],8,M)}}},G={setup(t){async function o(){try{await navigator.share({url:window.location.href})}catch{}}return(e,a)=>{const s=p;return r(),_("button",{type:"button",onClick:o,"aria-label":"Share recipe"},[n(s,{icon:"share"})])}}},J={},O={class:"flex border divide-x rounded dark:border-gray-700 dark:divide-gray-700"};function j(t,o){const e=q,a=G;return r(),_("div",O,[n(e,{class:"flex-1 text-center p-2"}),n(a,{class:"flex-1 text-center p-2"})])}var H=u(J,[["render",j]]);const K={},P={class:"chip rounded py-0.5 px-2 text-sm bg-gray-100 dark:bg-gray-800 capitalize"};function Q(t,o){return r(),_("span",P,[d(t.$slots,"default")])}var U=u(K,[["render",Q]]);const W={},X={class:"flex flex-wrap gap-2"};function Y(t,o){return r(),_("div",X,[d(t.$slots,"default")])}var Z=u(W,[["render",Y]]);const ee={props:{chips:{type:Array}},setup(t){return(o,e)=>{const a=U,s=Z;return r(),k(s,null,{default:l(()=>[(r(!0),_(v,null,L(t.chips.sort(),c=>(r(),k(a,{key:c},{default:l(()=>[g($(c),1)]),_:2},1024))),128))]),_:1})}}},te=["aria-checked"],oe={key:0,class:"w-4 h-4 rounded-full bg-pink-600 absolute top-0 right-0"},ne={key:1,class:"w-4 h-4 rounded-full bg-pink-600 absolute top-0 right-0 animate-ping"},ae=g(" Cook mode "),se={setup(t){const o="wakeLock"in navigator,e=y(!1);if(o){let s=null;async function c(i){if(i)try{s=await navigator.wakeLock.request("screen"),s.addEventListener("release",()=>{e.value=!1})}catch{e.value=!1}else s.release().then(()=>s=null)}I(e,c),document.addEventListener("visibilitychange",()=>{s!==null&&document.visibilityState==="visible"&&(e.value=!0)})}function a(){e.value=!e.value}return(s,c)=>{const i=p;return o?(r(),_("button",{key:0,type:"button",role:"switch",class:w(["bg-white text-gray-700 border-2 border-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-500 fixed bottom-6 right-6 rounded-full py-3 pl-4 pr-6 shadow-lg z-50 leading-3 flex gap-2 items-center",{"border-pink-600":e.value,"dark:border-pink-600":e.value}]),"aria-label":"Toggle cook mode","aria-checked":e.value?"true":"false",onClick:a},[e.value?(r(),_("div",oe)):h("",!0),e.value?(r(),_("div",ne)):h("",!0),n(i,{icon:e.value?"outdoor_grill":"outdoor_grill_border"},null,8,["icon"]),ae],10,te)):h("",!0)}}},re={},ce={class:"grid gap-6"},_e={class:"grid gap-6 md:col-span-2"};function ie(t,o){const e=V,a=T,s=E,c=H,i=ee,m=N,f=se,x=R;return r(),_(v,null,[n(a,null,{default:l(()=>[d(t.$slots,"header",{},()=>[n(e)])]),_:3}),n(m,{class:"md:grid-cols-3 md:items-start"},{default:l(()=>[b("div",ce,[n(s,{src:t.$route.meta.image,alt:t.$route.meta.title},null,8,["src","alt"]),n(c),n(i,{chips:t.$route.meta.keywords},null,8,["chips"])]),b("div",_e,[d(t.$slots,"default")])]),_:3}),n(f),n(x)],64)}var ue=u(re,[["render",ie]]);export{ue as _};
