(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8884:function(e,t,a){Promise.resolve().then(a.bind(a,7473))},7473:function(e,t,a){"use strict";a.d(t,{default:function(){return er}});var s,r,l=a(7437),n=a(2265),i=a(2002),o=a(4839),c=a(6164);function d(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,c.m6)((0,o.W)(t))}let x=n.memo(e=>{let{className:t,...a}=e,s=Array(150).fill(1),r=Array(100).fill(1),n=["--sky-300","--pink-300","--green-300","--yellow-300","--red-300","--purple-300","--blue-300","--indigo-300","--violet-300"],o=()=>n[Math.floor(Math.random()*n.length)];return(0,l.jsx)("div",{style:{transform:"translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)"},className:d("absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",t),...a,children:s.map((e,t)=>(0,l.jsx)(i.E.div,{className:"w-16 h-8 border-l border-slate-700 relative",children:r.map((e,a)=>(0,l.jsx)(i.E.div,{whileHover:{backgroundColor:"var(".concat(o(),")"),transition:{duration:0}},animate:{transition:{duration:2}},className:"w-16 h-8  border-r border-t border-slate-700 relative",children:a%2==0&&t%2==0?(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"})}):null},"col"+a))},"row"+t))})});var m=a(6648);function p(e){return(0,l.jsxs)("div",{className:d("hero-content w-[80%] flex flex-col-reverse lg:flex-row items-center justify-evenly gap-20",e.className),children:[(0,l.jsxs)("section",{children:[(0,l.jsx)("p",{className:" text-lg lg:text-xl mb-3 lg:mb-6 dark:text-neutral-200 relative z-20 text-center lg:text-left",children:e.preface||"Hello there,my name is"}),(0,l.jsx)("h1",{className:"text-3xl lg:text-6xl font-bold dark:text-white relative z-20 text-center lg:text-left ",children:e.content}),(0,l.jsx)("p",{className:" text-xl lg:text-2xl mt-8 dark:text-neutral-200 relative z-20 text-center lg:text-right",children:e.followup||"I do all things web!"})]}),(0,l.jsx)(m.default,{src:e.src,alt:"profile",width:400,height:400,className:" rounded-3xl relative z-20 drop-shadow"})]})}function u(e){return(0,l.jsxs)("div",{className:"h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg",children:[(0,l.jsx)("div",{className:"absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"}),(0,l.jsx)(x,{}),(0,l.jsx)(p,{...e.heroContent})]})}var h=a(5896);function f(e){return(0,l.jsxs)("div",{className:"p-10 lg:p-20 lg:py-40 min-h-screen flex flex-col lg:flex-row items-center justify-around gap-x-30",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-extrabold text-[250px] lg:text-[350px] relative text-accent leading-[1] text-[#0F172A]",style:{filter:"blur(0px)",opacity:1,transform:"none"},children:e.yoe}),(0,l.jsx)("span",{className:"tracking-[0.15em] pl-[48px] underline decoration-accent/20 decoration-wavy text-[20px] -mt-2 inline-block font-[500] text-white",style:{filter:"blur(0px)",opacity:1,transform:"none"},children:"years of experience"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"font-display text-center drop-shadow-sm text-white w-fit tracking-[-2px] text-6xl font-bold mb-10",style:{filter:"blur(0px)",opacity:1,transform:"none"},children:(0,l.jsx)("div",{className:"lg:mb-1 pb-8 md:pb-0",style:{paddingRight:"8px",display:"inline-block"},children:"About Me"})}),(0,l.jsx)("p",{className:"text-white/95 font-medium leading-[26px] max-w-[500px]",children:e.description}),(0,l.jsx)(v,{})]})]})}let v=()=>(0,l.jsxs)("button",{className:d("px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden  max-w-[200px] mt-5","bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn"),children:[(0,l.jsx)("span",{className:"group-hover/modal-btn:translate-x-40 text-center transition duration-500",children:"Get Resume"}),(0,l.jsx)("div",{className:"-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20",children:(0,l.jsx)(h.Z,{})})]});var b=a(9754),g=a(31);let j=e=>{let{data:t}=e,a=(0,n.useRef)(null),s=(0,n.useRef)(null),[r,o]=(0,n.useState)(0);(0,n.useEffect)(()=>{a.current&&o(a.current.getBoundingClientRect().height)},[a]);let{scrollYProgress:c}=(0,b.v)({target:s,offset:["start 10%","end 50%"]}),d=(0,g.H)(c,[0,1],[0,r]),x=(0,g.H)(c,[0,.1],[0,1]);return(0,l.jsx)("div",{className:"w-full bg-white dark:bg-neutral-950 rounded-3xl shadow-lg md:px-10",ref:s,children:(0,l.jsxs)("div",{ref:a,className:"relative max-w-7xl mx-auto pb-20",children:[null==t?void 0:t.map((e,t)=>(0,l.jsxs)("div",{className:"flex justify-start pt-10 md:pt-40 md:gap-10",children:[(0,l.jsxs)("div",{className:"sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full",children:[(0,l.jsx)("div",{className:"h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center",children:(0,l.jsx)("div",{className:"h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"})}),(0,l.jsx)("h3",{className:"hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-300 dark:text-neutral-300 drop-shadow-sm",children:e.title})]}),(0,l.jsxs)("div",{className:"relative pl-20 pr-4 md:pl-4 w-full",children:[(0,l.jsx)("h3",{className:"md:hidden block text-2xl mb-4 text-left font-bold text-neutral-300 dark:text-neutral-300 drop-shadow-sm",children:e.title}),e.content," "]})]},t)),(0,l.jsx)("div",{className:" h-full absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ",children:(0,l.jsx)(i.E.div,{style:{height:d,opacity:x},className:"absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"})})]})})};(s=r||(r={})).Zolo="Zolo",s.PwCIndia="PwC India";let y=[{position:"Sr. Software Engineer II",company:"Zolo",place:"India",startDate:1711909800,endDate:null,description:"Built and launched Aceternity UI and Aceternity UI Pro from scratch",techStack:["React","Next.js","Tailwind CSS","Framer Motion"]},{position:"Sr. Software Engineer I",company:"Zolo",place:"India",startDate:1680287400,endDate:1711823400,description:"Built and launched Aceternity UI and Aceternity UI Pro from scratch",techStack:["React","Next.js","Tailwind CSS","Framer Motion"]},{position:"Software Development Engineer II",company:"Zolo",place:"India",startDate:1656873e3,endDate:1680201e3,description:"Built and launched Aceternity UI and Aceternity UI Pro from scratch",techStack:["React","Next.js","Tailwind CSS","Framer Motion"]},{position:"Associate, Technology Consulting",company:"PwC India",place:"India",startDate:1600021800,endDate:1656441e3,description:"Built and launched Aceternity UI and Aceternity UI Pro from scratch",techStack:["React","Next.js","Tailwind CSS","Framer Motion"]}],w=e=>({companyStartDate:Math.min(...N(e).map(e=>e.startDate)),companyEndDate:N(e).some(e=>null===e.endDate)?null:Math.max(...N(e).map(e=>e.endDate||Date.now()))}),N=e=>y.filter(t=>t.company===r[e]);var k=a(3265),D=a(3288),I=a(2601);function S(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MMM yyyy",a=new Date(1e3*e);return(0,k.WU)(a,t)}function A(e,t){let a=new Date(1e3*e),s=t?new Date(1e3*t):new Date,r=(0,D.o)(s,a),l=(0,I.d)(s,a)%12,n=[];return r>0&&n.push("".concat(r," year").concat(1!==r?"s":"")),l>0&&n.push("".concat(l," month").concat(1!==l?"s":"")),n.join(" ")}var Z=e=>{let{experience:t}=e;return(0,l.jsx)("div",{className:"px-1 max-w-xl py-2 lg:p-6",children:(0,l.jsxs)("div",{className:"border-l-2 border-blue-500 pl-4",children:[(0,l.jsx)("h3",{className:"text-lg font-semibold text-gray-300",children:t.position}),(0,l.jsxs)("p",{className:"text-sm text-gray-400 font-light",children:[(0,l.jsxs)("span",{children:[S(t.startDate)," -"," ",t.endDate?S(t.endDate):"Present"]}),"\xa0\xa0•\xa0\xa0",(0,l.jsx)("span",{children:A(t.startDate,t.endDate)})]})]})})},R=a(5781),C=a(2978);let E=["React","Next","Javascript","Typescript","Redux","Node"],T=["Reduced API response time by 60%","Implemented CI/CD pipeline, cutting deployment time by 75%"];var F=e=>{var t;return(0,l.jsxs)("div",{className:" rounded-lg shadow-sm shadow-slate-300 p-6 max-w-[600px] mx-auto",children:[(0,l.jsxs)("div",{className:"flex justify-between items-start mb-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"text-xl font-bold text-blue-400",children:e.company}),(0,l.jsxs)("p",{className:"text-sm text-gray-300",children:[(0,l.jsxs)("span",{children:[S(e.startDate)," -"," ",e.endDate?S(e.endDate):"Present"]}),"\xa0\xa0•\xa0\xa0",(0,l.jsx)("span",{children:A(e.startDate,e.endDate)})]})]}),(0,l.jsx)("div",{className:"w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center",children:(0,l.jsx)(R.Z,{})})]}),(0,l.jsx)("div",{className:"",children:null==e?void 0:null===(t=e.positions)||void 0===t?void 0:t.map(e=>(0,l.jsx)(Z,{experience:e},"".concat(e.company,"-").concat(e.position)))}),(0,l.jsxs)("div",{className:"mt-6",children:[(0,l.jsx)("h4",{className:"text-base font-semibold text-gray-300 mb-2",children:"Skills & Technologies"}),(0,l.jsx)("div",{className:"flex flex-wrap gap-2",children:E.map(e=>(0,l.jsx)("span",{className:"px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm",children:e},e))})]}),(0,l.jsxs)("div",{className:"mt-6",children:[(0,l.jsx)("h4",{className:"text-base font-semibold text-gray-300 mb-2",children:"Key Achievements"}),(0,l.jsx)("ul",{className:"list-none pl-0",children:T.map(e=>(0,l.jsxs)("li",{className:"flex items-center gap-2 mb-2",children:[(0,l.jsx)(C.Z,{}),(0,l.jsx)("span",{className:"text-gray-400",children:e})]},e))})]})]})};let M=Object.keys(r).map(e=>({company:r[e],positions:N(e),...w(e)})).map(e=>({title:e.company,content:(0,l.jsx)(F,{positions:e.positions,startDate:e.companyStartDate,endDate:e.companyEndDate,company:e.company})}));function _(){return(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(j,{data:M})})}function z(){return(0,l.jsxs)("div",{className:"w-full p-10 flex flex-col items-center justify-center bg-white dark:bg-[#0F172A]",children:[(0,l.jsx)("div",{className:"font-display text-center drop-shadow-sm text-white w-fit tracking-[-2px] text-6xl font-bold mb-10",style:{filter:"blur(0px)",opacity:1,transform:"none"},children:(0,l.jsx)("div",{className:"lg:mb-1 pb-8 md:pb-0",style:{paddingRight:"8px",display:"inline-block"},children:"Work Experience"})}),(0,l.jsx)(_,{})]})}var P=a(5348),H=a(3490),U=a(5475),B=a(3024),G=a(7937),J=a(5932),L=a(5843),O=a(4315);let W=e=>{let{title:t,description:a,icon:s,index:r}=e;return(0,l.jsxs)("div",{className:d("flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",(0===r||4===r)&&"lg:border-l dark:border-neutral-800",r<4&&"lg:border-b dark:border-neutral-800"),children:[r<4&&(0,l.jsx)("div",{className:"opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"}),r>=4&&(0,l.jsx)("div",{className:"opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"}),(0,l.jsx)("div",{className:"mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400",children:s}),(0,l.jsxs)("div",{className:"text-lg font-bold mb-2 relative z-10 px-10",children:[(0,l.jsx)("div",{className:"absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"}),(0,l.jsx)("span",{className:"group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100",children:t})]}),a?(0,l.jsx)("p",{className:"text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10",children:a}):null]})};function K(e){let t=[{title:"React",description:"The building block for dynamic user interfaces. It's like LEGOs for web developers.",icon:(0,l.jsx)(P.Z,{})},{title:"Next",description:"React's BFF (Best Friend Forever). It helps you build full-stack apps with ease.",icon:(0,l.jsx)(H.Z,{})},{title:"Javascript",description:"The web's unpredictable but powerful sidekick.",icon:(0,l.jsx)(U.Z,{})},{title:"Typescript",description:"JavaScript's superpowered cousin. It adds types for safer and more predictable code.",icon:(0,l.jsx)(B.Z,{})},{title:"Redux",description:"The central nervous system of your app. It manages your state with a single source of truth.",icon:(0,l.jsx)(G.Z,{})},{title:"Node",description:"JavaScript's server-side superpower. It runs your code on the server.",icon:(0,l.jsx)(J.Z,{})},{title:"Git",description:"The time machine for your code. It lets you travel back and forth to different versions.",icon:(0,l.jsx)(L.Z,{})},{title:"Docker",description:"The shipping container for your apps. It packages them up for easy deployment.",icon:(0,l.jsx)(O.Z,{})}];return(0,l.jsxs)("div",{className:"py-20 lg:py-40 lg:h-screen flex flex-col items-center justify-center",children:[(0,l.jsx)("div",{className:"font-display text-center drop-shadow-sm text-white w-fit tracking-[-2px] text-6xl font-bold mb-10",style:{filter:"blur(0px)",opacity:1,transform:"none"},children:(0,l.jsx)("div",{className:"lg:mb-1 pb-8 md:pb-0",style:{paddingRight:"8px",display:"inline-block"},children:"Tech Knowledge"})}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto",children:t.map((e,t)=>(0,l.jsx)(W,{...e,index:t},e.title))})]})}var Y=a(9969),q=a(5963),X=a(1582),Q=a(8951),V=a(7138);function $(){let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{t(!0)},[]),(0,l.jsxs)("footer",{className:"bg-[#0F172A] py-12 px-4 mt-auto relative text-white transition-opacity duration-1000 ease-in-out ".concat(e?"opacity-100":"opacity-0"),children:[(0,l.jsx)("div",{className:"container mx-auto",children:(0,l.jsxs)("div",{className:"flex flex-col items-center space-y-6",children:[(0,l.jsxs)("nav",{className:"flex flex-wrap justify-center gap-4",children:[(0,l.jsxs)(V.default,{href:"https://github.com/mr-srivastava",className:"text-white/70 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110","aria-label":"GitHub",children:[(0,l.jsx)(Y.Z,{className:"h-6 w-6"}),(0,l.jsx)("span",{className:"sr-only",children:"GitHub"})]}),(0,l.jsxs)(V.default,{href:"https://www.linkedin.com/in/aadarsh-srivastava-3470b0128/",className:"text-white/70 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110","aria-label":"LinkedIn",children:[(0,l.jsx)(q.Z,{className:"h-6 w-6"}),(0,l.jsx)("span",{className:"sr-only",children:"LinkedIn"})]}),(0,l.jsxs)(V.default,{href:"https://x.com/skeptic_addy",className:"text-white/70 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110","aria-label":"Twitter",children:[(0,l.jsx)(X.Z,{className:"h-6 w-6"}),(0,l.jsx)("span",{className:"sr-only",children:"Twitter"})]}),(0,l.jsxs)(V.default,{href:"mailto:aadarsh.srivastava16@gmail.com",className:"text-white/70 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110","aria-label":"Email",children:[(0,l.jsx)(Q.Z,{className:"h-6 w-6"}),(0,l.jsx)("span",{className:"sr-only",children:"Email"})]})]}),(0,l.jsx)("div",{className:"text-center",children:(0,l.jsxs)("p",{className:"text-sm text-white/70",children:["\xa9 ",new Date().getFullYear()," Aadarsh Srivastava. All rights reserved."]})})]})}),(0,l.jsx)("div",{className:"mt-8 text-center overflow-hidden",children:(0,l.jsx)("span",{className:"text-[13vw] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent inline-block animate-slide-up",children:"Stay curious!"})})]})}function ee(){return(0,l.jsx)($,{})}let et={preface:"Hello there,my name is",content:"Aadarsh Srivastava",followup:"I do all things web!",src:"/profile.jpg"},ea={yoe:"04",description:"Aadarsh is a seasoned full-stack developer with 4 years of experience crafting innovative web applications. Proficient in JavaScript, TypeScript, React, Next.js, Node.js, and more, he's a quick learner and team player. His passion for creating exceptional digital experiences makes him a valuable asset to any team."};var es=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,{heroContent:et}),(0,l.jsx)(f,{...ea}),(0,l.jsx)(z,{}),(0,l.jsx)(K,{}),(0,l.jsx)(ee,{})]});function er(){return(0,l.jsx)("div",{className:"relative",children:(0,l.jsx)(es,{})})}}},function(e){e.O(0,[949,971,23,744],function(){return e(e.s=8884)}),_N_E=e.O()}]);