import{f as u,e as f,g as l,i as r,m as p,r as v,c as $,t as n}from"./web.8b9ef842.js";import{_ as x,P as _}from"./ProjectThumb.f1e046b3.js";import"./data.f3f5d41e.js";const b=n('<div class="mb-20"><div class="text-white "><div class="max-w-[1400px] px-[5vw] mx-auto pt-10 "><div class="grid md:grid-rows-2 grid-cols-1 md:grid-cols-3 gap-7"></div></div></div><div class="flex justify-center items-center">'),h=n('<div class=" aspect-video w-full h-full ">'),w=n('<div class="px-8 py-3 font-text text-gray-800 mt-10 font-bold border border-gray-800 rounded">'),C=({projectData:s})=>{const[i,d]=f(!1);return(()=>{const a=l(b),o=a.firstChild,c=o.firstChild,m=c.firstChild,g=o.nextSibling;return r(m,()=>x.take(s,i()?s.length:6).map(e=>(()=>{const t=l(h);return r(t,$(_,{get title(){return e.title},get bgImage(){return e.bgImage},get projectLink(){return e.projectLink},get webLink(){return e.webLink}})),t})())),r(g,(()=>{const e=p(()=>s.length>6);return()=>e()&&(()=>{const t=l(w);return t.$$click=()=>d(!i()),r(t,()=>i()?"Show Less":"Load More"),v(),t})()})()),a})()};u(["click"]);export{C as default};