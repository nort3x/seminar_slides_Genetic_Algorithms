import{d as _,u as d,a as h,c as m,b as u,r as p,o as a,e as n,f as t,t as o,g as l,F as f,h as g,n as v,i as x,j as y,k as b,l as k,m as N,_ as w}from"./index-1aab1494.js";import{N as P}from"./NoteDisplay-bf16d876.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},A={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=_({__name:"PresenterPrint",setup(C){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=u(()=>p.map(s=>{var r;return(r=s.meta)==null?void 0:r.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,r)=>(a(),n("div",{id:"page-root",style:v(l(x))},[t("div",V,[t("div",L,[t("h1",S,o(l(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(i.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",A,[t("div",B,[t("div",D,o(e==null?void 0:e.no)+"/"+o(l(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),H])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",j)):N("v-if",!0)]))),128))])],4))}}),M=w(z,[["__file","/home/runner/work/seminar_slides_Genetic_Algorithms/seminar_slides_Genetic_Algorithms/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{M as default};
