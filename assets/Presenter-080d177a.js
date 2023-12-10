import{o as a,e as m,f as e,d as T,b as k,p as C,q as p,s as $,_ as L,v as y,w as D,x as F,c as N,a as I,y as R,z as M,A as E,B as q,C as O,D as U,E as W,G as j,H as J,I as K,J as Q,K as X,L as Y,M as ee,N as te,g as t,O as se,l as o,t as oe,n as v,i as A,P as V,S as H,m as S,Q as ne,R as B,T as P,U as le,j as ie,V as b,W as ae,X as re,F as ce,Y as ue,Z as de,$ as _e,a0 as me,a1 as he,a2 as ve,a3 as pe}from"./index-1aab1494.js";import{N as fe}from"./NoteDisplay-bf16d876.js";import ge from"./DrawingControls-1c026bfe.js";const xe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},we=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),ye=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Se=[we,ye];function be(l,r){return a(),m("svg",xe,[...Se])}const ke={name:"carbon-zoom-out",render:be},Ce={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$e=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ze=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Ne=[$e,ze];function Me(l,r){return a(),m("svg",Ce,[...Ne])}const Ae={name:"carbon-zoom-in",render:Me},Ve={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},He=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),Be=[He];function Pe(l,r){return a(),m("svg",Ve,[...Be])}const Te={name:"carbon-renew",render:Pe},Le={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ze=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),De=[Ge,Ze];function Fe(l,r){return a(),m("svg",Le,[...De])}const Ie={name:"carbon-time",render:Fe},Re="/seminar_slides_Genetic_Algorithms/assets/logo-title-horizontal-96c3c915.png",Ee=T({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(l){const r=l,g=k(()=>{var c,u,n;return(n=(u=(c=C.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.note}),x=k(()=>{var c,u,n;return(n=(u=(c=C.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.noteHTML});return(c,u)=>(a(),p(fe,{class:$(r.class),note:g.value,"note-html":x.value},null,8,["class","note","note-html"]))}}),qe=L(Ee,[["__file","/home/runner/work/seminar_slides_Genetic_Algorithms/seminar_slides_Genetic_Algorithms/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=l=>(ve("data-v-574fd206"),l=l(),pe(),l),Oe={class:"bg-main h-full slidev-presenter"},Ue={class:"grid-section top flex"},We=f(()=>e("img",{src:Re,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),je=f(()=>e("div",{class:"flex-auto"},null,-1)),Je={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ke=f(()=>e("div",{class:"context"}," current ",-1)),Qe=f(()=>e("div",{class:"context"}," next ",-1)),Xe={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ye={class:"border-t border-main py-1 px-2 text-sm"},et={class:"grid-section bottom"},tt={class:"progress-bar"},st=T({__name:"Presenter",setup(l){const r=y();D(),F(r);const g=N.titleTemplate.replace("%s",N.title||"Slidev");I({title:`Presenter - ${g}`}),y(!1);const{timer:x,resetTimer:c}=R(),u=y([]),n=k(()=>M.value<E.value?{route:C.value,clicks:M.value+1}:q.value?{route:O.value,clicks:0}:null);return U(),W(()=>{const z=r.value.querySelector("#slide-content"),s=j(J()),w=K();Q(()=>{if(!w.value||Y.value||!ee.value)return;const d=z.getBoundingClientRect(),_=(s.x-d.left)/d.width*100,h=(s.y-d.top)/d.height*100;if(!(_<0||_>100||h<0||h>100))return{x:_,y:h}},d=>{X.cursor=d})}),(z,s)=>{const w=Ie,d=Te,_=te("HiddenText"),h=Ae,G=ke;return a(),m(ce,null,[e("div",Oe,[e("div",{class:$(["grid-container",`layout${t(se)}`])},[e("div",Ue,[We,je,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:s[0]||(s[0]=(...i)=>t(c)&&t(c)(...i))},[o(w,{class:"absolute"}),o(d,{class:"absolute opacity-0"})]),e("div",Je,oe(t(x)),1)]),e("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:v(t(A))},[o(H,{key:"main",class:"h-full w-full"},{default:V(()=>[o(ue,{"render-context":"presenter"})]),_:1}),Ke],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:v(t(A))},[n.value?(a(),p(H,{key:"next",class:"h-full w-full"},{default:V(()=>{var i;return[o(t(_e),{is:(i=n.value.route)==null?void 0:i.component,"clicks-elements":u.value,"onUpdate:clicksElements":s[1]||(s[1]=Z=>u.value=Z),clicks:n.value.clicks,"clicks-disabled":!1,class:$(t(de)(n.value.route)),route:n.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):S("v-if",!0),Qe],4),S(" Notes "),(a(),m("div",Xe,[(a(),p(qe,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:v({fontSize:`${t(ne)}em`})},null,8,["style"])),e("div",Ye,[e("button",{class:"slidev-icon-btn",onClick:s[2]||(s[2]=(...i)=>t(B)&&t(B)(...i))},[o(_,{text:"Increase font size"}),o(h)]),e("button",{class:"slidev-icon-btn",onClick:s[3]||(s[3]=(...i)=>t(P)&&t(P)(...i))},[o(_,{text:"Decrease font size"}),o(G)]),S("v-if",!0)])])),e("div",et,[o(me,{persist:!0})]),(a(),p(ge,{key:2}))],2),e("div",tt,[e("div",{class:"progress h-2px bg-primary transition-all",style:v({width:`${(t(le)-1)/(t(ie)-1)*100}%`})},null,4)])]),o(he),o(re,{modelValue:t(b),"onUpdate:modelValue":s[5]||(s[5]=i=>ae(b)?b.value=i:null)},null,8,["modelValue"])],64)}}});const it=L(st,[["__scopeId","data-v-574fd206"],["__file","/home/runner/work/seminar_slides_Genetic_Algorithms/seminar_slides_Genetic_Algorithms/node_modules/@slidev/client/internals/Presenter.vue"]]);export{it as default};