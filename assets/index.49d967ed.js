import{r as t}from"./index.e2308b8a.js";import{d as s,F as a,k as e,u as o,o as r,g as l,w as p,f as i,t as n}from"./vendor.257a3678.js";const u={class:"list"},c={expose:[],setup(c){const m=t.filter((t=>"/"!==t.path)).map((t=>(t.title=t.name.split("-").map((t=>t[0].toUpperCase()+t.substr(1).toLowerCase())).join(" "),t)));return(t,c)=>{const d=i("RouterLink");return r(),s("ul",u,[(r(!0),s(a,null,e(o(m),(t=>(r(),s("li",{key:t.path},[l(d,{to:t.path,class:"recipe-card"},{default:p((()=>[l("h2",null,n(t.title),1)])),_:2},1032,["to"])])))),128))])}}};export default c;
