var ke=Object.defineProperty;var k=(e,t)=>{for(var r in t)ke(e,r,{get:t[r],enumerable:!0})};var E={};k(E,{default:()=>le});import{PassThrough as oe}from"node:stream";import{createReadableStreamFromReadable as ie}from"@remix-run/node";import{RemixServer as ne}from"@remix-run/react";function _e(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a,i,d,w,f=[],g=!0,m=!1;try{if(d=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;g=!1}else for(;!(g=(a=d.call(r)).done)&&(f.push(a.value),f.length!==t);g=!0);}catch(z){m=!0,i=z}finally{try{if(!g&&r.return!=null&&(w=r.return(),Object(w)!==w))return}finally{if(m)throw i}}return f}}function Le(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Z(e){var t=Le(e,"string");return typeof t=="symbol"?t:String(t)}function ze(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,Z(a.key),a)}}function Ae(e,t,r){return t&&W(e.prototype,t),r&&W(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function H(e,t,r){return t=Z(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function J(e,t){return je(e)||_e(e,t)||Se(e,t)||Re()}function je(e){if(Array.isArray(e))return e}function Se(e,t){if(e){if(typeof e=="string")return Y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(e,t)}}function Y(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function Re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(e,t){var r=V(e,t,"get");return Ce(e,r)}function X(e,t,r){var a=V(e,t,"set");return Fe(e,a,r),r}function V(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function Ce(e,t){return t.get?t.get.call(e):t.value}function Fe(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}function A(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}function ee(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function K(e,t,r){ee(e,t),t.set(e,r)}function Q(e,t){ee(e,t),t.add(e)}var te=[" daum[ /]"," deusu/"," yadirectfetcher","(?:^| )site","(?:^|[^g])news","@[a-z]","\\(at\\)[a-z]","\\(github\\.com/","\\[at\\][a-z]","^12345","^<","^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$","^[^ ]{50,}$","^active","^ad muncher","^amaya","^anglesharp/","^anonymous","^avsdevicesdk/","^axios/","^bidtellect/","^biglotron","^btwebclient/","^castro","^clamav[ /]","^client/","^cobweb/","^coccoc","^custom","^ddg[_-]android","^discourse","^dispatch/\\d","^downcast/","^duckduckgo","^facebook","^fdm[ /]\\d","^getright/","^gozilla/","^hatena","^hobbit","^hotzonu","^hwcdn/","^jeode/","^jetty/","^jigsaw","^linkdex","^lwp[-: ]","^metauri","^microsoft bits","^movabletype","^mozilla/\\d\\.\\d \\(compatible;?\\)$","^mozilla/\\d\\.\\d \\w*$","^navermailapp","^netsurf","^offline explorer","^php","^postman","^postrank","^python","^read","^reed","^restsharp/","^snapchat","^space bison","^svn","^swcd ","^taringa","^test certificate info","^thumbor/","^tumblr/","^user-agent:mozilla","^valid","^venus/fedoraplanet","^w3c","^webbandit/","^webcopier","^wget","^whatsapp","^xenu link sleuth","^yahoo","^yandex","^zdm/\\d","^zoom marketplace/","^{{.*}}$","adbeat\\.com","appinsights","archive","ask jeeves/teoma","bit\\.ly/","bluecoat drtr","bot","browsex","burpcollaborator","capture","catch","check","chrome-lighthouse","chromeframe","cloud","crawl","cryptoapi","dareboost","datanyze","dataprovider","dejaclick","dmbrowser","download","evc-batch/","feed","firephp","freesafeip","gomezagent","google","headlesschrome/","http","httrack","hubspot marketing grader","hydra","ibisbrowser","images","inspect","iplabel","ips-agent","java","library","mail\\.ru/","manager","monitor","morningscore/","neustar wpm","nutch","offbyone","optimize","pageburst","pagespeed","perl","phantom","pingdom","powermarks","preview","proxy","ptst[ /]\\d","reader","rexx;","rigor","rss","scan","scrape","search","serp ?reputation ?management","server","sogou","sparkler/","speedcurve","spider","splash","statuscake","stumbleupon\\.com","supercleaner","synapse","synthetic","torrent","tracemyfile","transcoder","trendsmapresolver","twingly recon","url","virtuoso","wappalyzer","webglance","webkit2png","websitemetadataretriever","whatcms/","wordpress","zgrab"];function Ee(e){try{new RegExp("(?<! cu)bot").test("dangerbot")}catch{return e}return[["bot","(?<! cu)bot"],["google","(?<! (?:channel/|google/))google(?!(app|/google| pixel))"],["http","(?<!(?:lib))http"],["java","java(?!;)"],["search","(?<! ya(?:yandex)?)search"]].forEach(function(t){var r=J(t,2),a=r[0],i=r[1],d=e.lastIndexOf(a);~d&&e.splice(d,1,i)}),e}Ee(te);var re="i",N=new WeakMap,L=new WeakMap,j=new WeakSet,C=new WeakSet,Ie=function(){function e(t){var r=this;ze(this,e),Q(this,C),Q(this,j),K(this,N,{writable:!0,value:void 0}),K(this,L,{writable:!0,value:void 0}),X(this,N,t||te.slice()),A(this,j,F).call(this);var a=function(d){return r.test(d)};return Object.defineProperties(a,Object.entries(Object.getOwnPropertyDescriptors(e.prototype)).reduce(function(i,d){var w=J(d,2),f=w[0],g=w[1];return typeof g.value=="function"&&Object.assign(i,H({},f,{value:r[f].bind(r)})),typeof g.get=="function"&&Object.assign(i,H({},f,{get:function(){return r[f]}})),i},{}))}return Ae(e,[{key:"pattern",get:function(){return new RegExp(b(this,L))}},{key:"test",value:function(r){return Boolean(r)&&b(this,L).test(r)}},{key:"isbot",value:function(r){return Boolean(r)&&b(this,L).test(r)}},{key:"find",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=r.match(b(this,L));return a&&a[0]}},{key:"matches",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return b(this,N).filter(function(a){return new RegExp(a,re).test(r)})}},{key:"clear",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";this.exclude(this.matches(r))}},{key:"extend",value:function(){var r=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];[].push.apply(b(this,N),a.filter(function(i){return A(r,C,U).call(r,i)===-1}).map(function(i){return i.toLowerCase()})),A(this,j,F).call(this)}},{key:"exclude",value:function(){for(var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=r.length;a--;){var i=A(this,C,U).call(this,r[a]);i>-1&&b(this,N).splice(i,1)}A(this,j,F).call(this)}},{key:"spawn",value:function(r){return new e(r||b(this,N))}}]),e}();function F(){X(this,L,new RegExp(b(this,N).join("|"),re))}function U(e){return b(this,N).indexOf(e.toLowerCase())}var ae=new Ie;import{renderToPipeableStream as se}from"react-dom/server";import{jsx as de}from"react/jsx-runtime";var S=5e3;function le(e,t,r,a,i){return ae(e.headers.get("user-agent")||"")?Pe(e,t,r,a):Me(e,t,r,a)}function Pe(e,t,r,a){return new Promise((i,d)=>{let w=!1,{pipe:f,abort:g}=se(de(ne,{context:a,url:e.url,abortDelay:S}),{onAllReady(){w=!0;let m=new oe,z=ie(m);r.set("Content-Type","text/html"),i(new Response(z,{headers:r,status:t})),f(m)},onShellError(m){d(m)},onError(m){t=500,w&&console.error(m)}});setTimeout(g,S)})}function Me(e,t,r,a){return new Promise((i,d)=>{let w=!1,{pipe:f,abort:g}=se(de(ne,{context:a,url:e.url,abortDelay:S}),{onShellReady(){w=!0;let m=new oe,z=ie(m);r.set("Content-Type","text/html"),i(new Response(z,{headers:r,status:t})),f(m)},onShellError(m){d(m)},onError(m){t=500,w&&console.error(m)}});setTimeout(g,S)})}var P={};k(P,{Layout:()=>we,default:()=>ue,links:()=>He});import{Links as Be,LiveReload as De,Meta as $e,Outlet as qe,Scripts as Ge,ScrollRestoration as We}from"@remix-run/react";var ce="/build/_assets/tailwind-L43Q7V6D.css";var me="/build/_assets/animations-ESIWWYZM.css";import{jsx as x,jsxs as I}from"react/jsx-runtime";var He=()=>[...void 0?[{rel:"stylesheet",href:void 0}]:[],{rel:"stylesheet",href:ce},{rel:"stylesheet",href:me},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap"}];function we({children:e}){return I("html",{lang:"zh-CN",className:"h-full",children:[I("head",{children:[x("meta",{charSet:"utf-8"}),x("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),x($e,{}),x(Be,{})]}),I("body",{className:"h-full font-serif bg-gradient-to-b from-yellow-50/30 to-yellow-100/30",children:[e,x(We,{}),x(Ge,{}),x(De,{})]})]})}function ue(){return x(we,{children:x(qe,{})})}var T={};k(T,{action:()=>Je,default:()=>fe,loader:()=>Ze});import{json as Ye,redirect as O}from"@remix-run/node";import{Form as Ke,useLoaderData as Qe}from"@remix-run/react";import{useState as M,useEffect as Ue}from"react";import{jsx as c,jsxs as y}from"react/jsx-runtime";async function Ze({request:e}){let r=new URL(e.url).searchParams.get("signNumber");return r?Ye({signNumber:r}):O("/")}async function Je({request:e}){let t=await e.formData(),r=t.get("signNumber");return t.get("cupResult")==="yin"?O("/"):O(`/result?signNumber=${r}`)}function fe(){let{signNumber:e}=Qe(),[t,r]=M(!1),[a,i]=M(!1),[d,w]=M(null),f=()=>{r(!0),i(!1);let g=Math.random()<.3?"yang":"yin";setTimeout(()=>{r(!1),w(g),i(!0)},1e3)};return Ue(()=>{r(!1),i(!1),w(null)},[]),y("div",{className:"min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3",children:[c("div",{className:"text-center py-6",children:y("div",{className:"bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-6 mx-2 inline-block",children:[c("div",{className:"mb-3",children:c("i",{className:"fas fa-hands-praying text-yellow-800/90 text-3xl"})}),c("h2",{className:"text-xl font-bold text-yellow-900 mb-2",children:"\u6295\u63B7\u5723\u676F"}),c("p",{className:"text-yellow-900/80 text-xs",children:"\u8BDA\u5FC3\u7948\u7977\uFF0C\u7B49\u5F85\u795E\u660E\u6307\u793A"})]})}),y("div",{className:"flex-1 flex flex-col items-center justify-center px-4",children:[c("div",{className:"relative w-full max-w-xs aspect-square bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4 flex items-center justify-center",children:c("div",{className:`transform transition-all duration-500 ${t?"animate-shake":""}`,children:y("div",{className:"relative",children:[c("i",{className:"fas fa-moon text-6xl text-yellow-800/80 absolute top-0 left-0 transform -rotate-45"}),c("i",{className:"fas fa-moon text-6xl text-yellow-800/80 absolute top-0 right-0 transform rotate-45"})]})})}),a&&y("div",{className:"mt-6 text-center",children:[c("div",{className:`text-lg font-bold ${d==="yang"?"text-yellow-700":"text-yellow-900/70"}`,children:d==="yang"?"\u5723\u676F\uFF08\u9633\u676F\uFF09":"\u9634\u676F"}),c("p",{className:"mt-2 text-sm text-yellow-900/80",children:d==="yang"?"\u606D\u559C\uFF0C\u5F97\u5230\u5723\u676F\uFF01\u795E\u660E\u5DF2\u7136\u5E94\u5141\uFF0C\u53EF\u4EE5\u89E3\u7B7E\u3002":"\u672A\u5F97\u5723\u676F\uFF0C\u9700\u91CD\u65B0\u6C42\u7B7E\u3002"})]})]}),c("div",{className:"px-4 space-y-4",children:a?y(Ke,{method:"post",className:"space-y-4",children:[c("input",{type:"hidden",name:"signNumber",value:e}),c("input",{type:"hidden",name:"cupResult",value:d||""}),y("button",{type:"submit",className:`w-full py-3 px-4 text-base font-medium rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50
                ${d==="yang"?"text-yellow-50 bg-gradient-to-r from-yellow-800 to-yellow-700 hover:from-yellow-700 hover:to-yellow-600":"text-yellow-900 bg-gradient-to-r from-amber-200 to-yellow-200 hover:from-amber-300 hover:to-yellow-300 border border-yellow-900/20"}`,children:[c("i",{className:`mr-2 fas ${d==="yang"?"fa-book-open":"fa-redo"}`}),d==="yang"?"\u67E5\u770B\u89E3\u7B7E":"\u91CD\u65B0\u6C42\u7B7E"]})]}):y("button",{onClick:f,disabled:t,className:"w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50 disabled:opacity-50",children:[c("i",{className:"fas fa-hands-praying mr-2"}),t?"\u8BDA\u5FC3\u7948\u7977...":"\u6295\u63B7\u5723\u676F"]})}),c("div",{className:"px-4 py-6",children:c("div",{className:"bg-white/60 rounded-lg p-3 border border-yellow-900/10",children:y("p",{className:"text-yellow-900/80 text-xs leading-5",children:[c("i",{className:"fas fa-info-circle mr-1 text-yellow-700"}),"\u6295\u63B7\u5723\u676F\u65F6\u9700\u8654\u8BDA\u7948\u7977\u3002\u82E5\u5F97\u5723\u676F\uFF08\u9633\u676F\uFF09\uFF0C\u5219\u53EF\u89E3\u7B7E\uFF1B\u82E5\u4E3A\u9634\u676F\uFF0C\u9700\u91CD\u65B0\u6C42\u7B7E\u3002"]})})})]})}var B={};k(B,{default:()=>ge,loader:()=>at});import{json as Xe,redirect as Ve}from"@remix-run/node";import{Link as et,useLoaderData as tt}from"@remix-run/react";import{jsx as n,jsxs as l}from"react/jsx-runtime";var rt={1:{title:"\u7B2C\u4E00\u7B7E \u4E0A\u4E0A\u7B7E",poem:`\u4E00\u671D\u5929\u5B50\u5750\u91D1\u92AE\uFF0C\u56DB\u6D77\u5347\u5E73\u4E50\u81EA\u7136\u3002
\u592A\u5E73\u666F\u8C61\u4EBA\u96BE\u89C1\uFF0C\u98CE\u8C03\u96E8\u987A\u56FD\u4E30\u5E74\u3002`,meaning:"\u6B64\u7B7E\u4E3A\u4E0A\u4E0A\u7B7E\uFF0C\u9884\u793A\u7740\u8BF8\u4E8B\u987A\u9042\uFF0C\u524D\u7A0B\u5149\u660E\u3002\u5982\u540C\u5929\u5B50\u767B\u57FA\uFF0C\u56FD\u6CF0\u6C11\u5B89\uFF0C\u98CE\u8C03\u96E8\u987A\u3002",advice:"\u5B9C\u8FDB\u53D6\uFF0C\u53EF\u8C0B\u4E8B\uFF0C\u8BF8\u4E8B\u7686\u5B9C\u3002",explanation:{general:"\u6574\u4F53\u8FD0\u52BF\u6781\u597D\uFF0C\u53EF\u4EE5\u5927\u80C6\u5411\u524D\u3002",fortune:"\u8D22\u8FD0\u4EA8\u901A\uFF0C\u6B63\u8D22\u504F\u8D22\u7686\u6709\u8FDB\u8D26\u3002",health:"\u8EAB\u4F53\u5EB7\u5065\uFF0C\u7CBE\u795E\u6109\u60A6\u3002",love:"\u59FB\u7F18\u7F8E\u6EE1\uFF0C\u6709\u60C5\u4EBA\u7EC8\u6210\u7737\u5C5E\u3002",career:"\u4E8B\u4E1A\u84B8\u84B8\u65E5\u4E0A\uFF0C\u6709\u5347\u8FC1\u4E4B\u8C61\u3002"}}};async function at({request:e}){let r=new URL(e.url).searchParams.get("signNumber");if(!r)return Ve("/");let a=rt[1]||{title:`\u7B2C${r}\u7B7E`,poem:"\u6682\u65E0\u7B7E\u6587",meaning:"\u6682\u65E0\u89E3\u91CA",advice:"\u6682\u65E0\u5EFA\u8BAE",explanation:{general:"\u6682\u65E0\u8BE6\u89E3",fortune:"\u6682\u65E0\u8BE6\u89E3",health:"\u6682\u65E0\u8BE6\u89E3",love:"\u6682\u65E0\u8BE6\u89E3",career:"\u6682\u65E0\u8BE6\u89E3"}};return Xe({signNumber:parseInt(r,10),signMeaning:a})}function ge(){let{signNumber:e,signMeaning:t}=tt();return l("div",{className:"min-h-[calc(100vh-6rem)] bg-amber-50/30 py-3 px-4",children:[n("div",{className:"text-center mb-6",children:l("div",{className:"inline-block bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-6 py-4",children:[n("div",{className:"mb-2",children:n("i",{className:"fas fa-scroll text-yellow-800/90 text-2xl"})}),n("h1",{className:"text-xl font-bold text-yellow-900",children:t.title})]})}),l("div",{className:"space-y-4",children:[l("div",{className:"bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4",children:[l("h2",{className:"text-base font-medium text-yellow-900 mb-3 flex items-center",children:[n("i",{className:"fas fa-feather-alt mr-2"}),"\u7B7E\u8BD7"]}),n("div",{className:"bg-white/60 rounded-lg p-4 border border-yellow-900/10",children:n("p",{className:"text-yellow-900/90 text-sm whitespace-pre-line leading-relaxed",children:t.poem})})]}),l("div",{className:"bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4",children:[l("h2",{className:"text-base font-medium text-yellow-900 mb-3 flex items-center",children:[n("i",{className:"fas fa-book-open mr-2"}),"\u89E3\u7B7E"]}),l("div",{className:"space-y-3",children:[n("div",{className:"bg-white/60 rounded-lg p-4 border border-yellow-900/10",children:n("p",{className:"text-yellow-900/90 text-sm leading-relaxed",children:t.meaning})}),n("div",{className:"bg-white/60 rounded-lg p-4 border border-yellow-900/10",children:l("p",{className:"text-yellow-900/90 text-sm leading-relaxed",children:[n("span",{className:"font-medium",children:"\u5EFA\u8BAE\uFF1A"}),t.advice]})})]})]}),l("div",{className:"bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4",children:[l("h2",{className:"text-base font-medium text-yellow-900 mb-3 flex items-center",children:[n("i",{className:"fas fa-list-ul mr-2"}),"\u8BE6\u89E3"]}),l("div",{className:"space-y-2",children:[n("div",{className:"bg-white/60 rounded-lg p-3 border border-yellow-900/10",children:l("div",{className:"flex items-start space-x-3",children:[n("i",{className:"fas fa-star text-yellow-800/80 mt-0.5"}),l("p",{className:"text-sm text-yellow-900/90 flex-1",children:[n("span",{className:"font-medium",children:"\u603B\u8BBA\uFF1A"}),t.explanation.general]})]})}),n("div",{className:"bg-white/60 rounded-lg p-3 border border-yellow-900/10",children:l("div",{className:"flex items-start space-x-3",children:[n("i",{className:"fas fa-coins text-yellow-800/80 mt-0.5"}),l("p",{className:"text-sm text-yellow-900/90 flex-1",children:[n("span",{className:"font-medium",children:"\u8D22\u8FD0\uFF1A"}),t.explanation.fortune]})]})}),n("div",{className:"bg-white/60 rounded-lg p-3 border border-yellow-900/10",children:l("div",{className:"flex items-start space-x-3",children:[n("i",{className:"fas fa-heart text-yellow-800/80 mt-0.5"}),l("p",{className:"text-sm text-yellow-900/90 flex-1",children:[n("span",{className:"font-medium",children:"\u59FB\u7F18\uFF1A"}),t.explanation.love]})]})}),n("div",{className:"bg-white/60 rounded-lg p-3 border border-yellow-900/10",children:l("div",{className:"flex items-start space-x-3",children:[n("i",{className:"fas fa-briefcase text-yellow-800/80 mt-0.5"}),l("p",{className:"text-sm text-yellow-900/90 flex-1",children:[n("span",{className:"font-medium",children:"\u4E8B\u4E1A\uFF1A"}),t.explanation.career]})]})}),n("div",{className:"bg-white/60 rounded-lg p-3 border border-yellow-900/10",children:l("div",{className:"flex items-start space-x-3",children:[n("i",{className:"fas fa-heart-pulse text-yellow-800/80 mt-0.5"}),l("p",{className:"text-sm text-yellow-900/90 flex-1",children:[n("span",{className:"font-medium",children:"\u5065\u5EB7\uFF1A"}),t.explanation.health]})]})})]})]})]}),n("div",{className:"mt-6 mb-4",children:l(et,{to:"/",className:"block w-full py-3 px-4 text-yellow-900 text-base font-medium bg-gradient-to-r from-amber-200 to-yellow-200 rounded-lg shadow-md transition-all duration-300 hover:from-amber-300 hover:to-yellow-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50 border border-yellow-900/20 text-center",children:[n("i",{className:"fas fa-home mr-2"}),"\u8FD4\u56DE\u9996\u9875"]})})]})}var D={};k(D,{default:()=>he,meta:()=>it});import{Form as ot}from"@remix-run/react";import{jsx as s,jsxs as u}from"react/jsx-runtime";var it=()=>[{title:"\u9EC4\u5927\u4ED9\u7075\u7B7E\u6BBF\u5802 - \u8654\u8BDA\u6C42\u7B7E"},{name:"description",content:"\u9EC4\u5927\u4ED9\u7075\u7B7E\u6BBF\u5802\uFF0C\u627F\u8499\u9EC4\u5927\u4ED9\u5E08\u6069\u51C6\uFF0C\u4F20\u627F\u53E4\u6CD5\uFF0C\u6307\u5F15\u8FF7\u6D25"}];function he(){return u("div",{className:"min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3",children:[u("div",{className:"bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-3 mx-2 text-center",children:[s("div",{className:"mb-2",children:s("i",{className:"fas fa-dharmachakra text-yellow-800/90 text-3xl"})}),s("h1",{className:"text-xl font-bold mb-1 text-yellow-900",children:"\u9EC4\u5927\u4ED9\u7075\u7B7E\u6BBF\u5802"}),s("p",{className:"text-yellow-800/90 text-sm",children:"\u627F\u8499\u9EC4\u5927\u4ED9\u5E08\u6069\u51C6\uFF0C\u4F20\u627F\u53E4\u6CD5\uFF0C\u6307\u5F15\u8FF7\u6D25"})]}),s("div",{className:"flex flex-col items-center justify-center py-3 px-2",children:s("div",{className:"w-full bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4 shadow-[0_0_15px_rgba(217,119,6,0.1)]",children:u(ot,{method:"post",action:"/draw",className:"space-y-4",children:[u("div",{className:"text-center space-y-3",children:[s("div",{className:"inline-block p-3 bg-yellow-100/80 rounded-full border-2 border-yellow-900/20",children:s("i",{className:"fas fa-pray text-xl text-yellow-800"})}),s("h3",{className:"text-base font-medium text-yellow-900",children:"\u8654\u8BDA\u6C42\u7B7E"}),s("p",{className:"text-yellow-800/90 text-xs",children:"\u8BDA\u5FC3\u7948\u613F\uFF0C\u9759\u5019\u4ED9\u793A"})]}),s("button",{type:"submit",className:"w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50",children:"\u5F00\u59CB\u6C42\u7B7E"})]})})}),s("div",{className:"px-4 py-3",children:u("div",{className:"bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-3",children:[s("h2",{className:"text-base font-medium text-yellow-900 mb-3 text-center",children:"\u6C42\u7B7E\u6D41\u7A0B"}),u("div",{className:"space-y-2",children:[u("div",{className:"flex items-start space-x-3",children:[s("span",{className:"bg-yellow-100 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",children:"\u58F9"}),s("p",{className:"text-sm text-yellow-900/90 flex-1",children:'\u70B9\u51FB"\u5F00\u59CB\u6C42\u7B7E"\u6309\u94AE\uFF0C\u8654\u8BDA\u7948\u613F'})]}),u("div",{className:"flex items-start space-x-3",children:[s("span",{className:"bg-yellow-100 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",children:"\u8D30"}),s("p",{className:"text-sm text-yellow-900/90 flex-1",children:"\u53EF\u9009\u62E9\u6295\u63B7\u5723\u676F\uFF0C\u83B7\u5F97\u795E\u660E\u6307\u793A"})]}),u("div",{className:"flex items-start space-x-3",children:[s("span",{className:"bg-yellow-100 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",children:"\u53C1"}),s("p",{className:"text-sm text-yellow-900/90 flex-1",children:"\u89E3\u7B7E\u540E\u83B7\u5F97\u9EC4\u5927\u4ED9\u5E08\u6307\u5F15"})]})]})]})}),s("div",{className:"px-4 py-3",children:u("div",{className:"bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-3",children:[s("h2",{className:"text-base font-medium text-yellow-900 mb-3 text-center",children:"\u6C42\u7B7E\u987B\u77E5"}),u("div",{className:"space-y-2",children:[u("div",{className:"flex items-start space-x-3",children:[s("i",{className:"fas fa-circle text-[6px] text-yellow-800 mt-1.5"}),s("p",{className:"text-sm text-yellow-900/90 flex-1",children:"\u6C42\u7B7E\u524D\u9700\u8654\u8BDA\u7948\u7977\uFF0C\u5FC3\u65E0\u6742\u5FF5"})]}),u("div",{className:"flex items-start space-x-3",children:[s("i",{className:"fas fa-circle text-[6px] text-yellow-800 mt-1.5"}),s("p",{className:"text-sm text-yellow-900/90 flex-1",children:"\u6BCF\u6B21\u6C42\u7B7E\u9700\u95F4\u9694\u4E00\u5929\u4EE5\u4E0A"})]}),u("div",{className:"flex items-start space-x-3",children:[s("i",{className:"fas fa-circle text-[6px] text-yellow-800 mt-1.5"}),s("p",{className:"text-sm text-yellow-900/90 flex-1",children:"\u89E3\u7B7E\u5185\u5BB9\u4EC5\u4F9B\u53C2\u8003\uFF0C\u5207\u52FF\u8FC7\u5206\u4F9D\u8D56"})]}),u("div",{className:"flex items-start space-x-3",children:[s("i",{className:"fas fa-circle text-[6px] text-yellow-800 mt-1.5"}),s("p",{className:"text-sm text-yellow-900/90 flex-1",children:"\u9075\u533B\u5631\uFF0C\u5B88\u6CD5\u89C4\uFF0C\u6709\u7591\u95EE\u53CA\u65F6\u54A8\u8BE2\u4E13\u4E1A\u4EBA\u58EB"})]})]})]})})]})}var $={};k($,{action:()=>lt,default:()=>ye,loader:()=>st});import{json as be,redirect as R}from"@remix-run/node";import{Form as xe,useLoaderData as nt}from"@remix-run/react";import{jsx as h,jsxs as v}from"react/jsx-runtime";async function st({request:e}){let r=new URL(e.url).searchParams.get("signNumber");if(r)return be({signNumber:parseInt(r,10)});let a=Math.floor(Math.random()*100)+1;return be({signNumber:a})}async function lt({request:e}){let t=await e.formData(),r=t.get("signNumber"),a=t.get("intent");if(!r&&!a){let i=Math.floor(Math.random()*100)+1;return R(`/draw?signNumber=${i}`)}return a==="divine"?R(`/divine?signNumber=${r}`):a==="result"?R(`/result?signNumber=${r}`):R("/")}function ye(){let{signNumber:e}=nt();return v("div",{className:"min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3",children:[h("div",{className:"text-center py-6",children:v("div",{className:"bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-6 mx-2 inline-block",children:[h("div",{className:"mb-3",children:h("i",{className:"fas fa-scroll text-yellow-800/90 text-3xl"})}),v("h2",{className:"text-xl font-bold text-yellow-900 mb-2",children:["\u7B2C ",e," \u7B7E"]}),h("p",{className:"text-yellow-900/80 text-xs",children:"\u4ED9\u7B7E\u5DF2\u5B9A\uFF0C\u662F\u5426\u9700\u8981\u6295\u63B7\u5723\u676F\u786E\u8BA4\uFF1F"})]})}),v("div",{className:"px-4 space-y-4",children:[v(xe,{method:"post",children:[h("input",{type:"hidden",name:"signNumber",value:e}),h("input",{type:"hidden",name:"intent",value:"divine"}),v("button",{type:"submit",className:"w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50",children:[h("i",{className:"fas fa-hands-praying mr-2"}),"\u6295\u63B7\u5723\u676F"]})]}),v(xe,{method:"post",children:[h("input",{type:"hidden",name:"signNumber",value:e}),h("input",{type:"hidden",name:"intent",value:"result"}),v("button",{type:"submit",className:"w-full py-3 px-4 text-yellow-900 text-base font-medium bg-gradient-to-r from-amber-200 to-yellow-200 rounded-lg shadow-md transition-all duration-300 hover:from-amber-300 hover:to-yellow-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50 border border-yellow-900/20",children:[h("i",{className:"fas fa-book-open mr-2"}),"\u7ACB\u5373\u89E3\u7B7E"]})]})]}),h("div",{className:"px-4 py-6",children:h("div",{className:"bg-white/60 rounded-lg p-3 border border-yellow-900/10",children:v("p",{className:"text-yellow-900/80 text-xs leading-5",children:[h("i",{className:"fas fa-info-circle mr-1 text-yellow-700"}),"\u6295\u63B7\u5723\u676F\u53EF\u83B7\u5F97\u795E\u660E\u52A0\u6301\uFF0C\u89E3\u7B7E\u66F4\u51C6\u786E\u3002\u76F4\u63A5\u89E3\u7B7E\u5219\u4E0D\u542B\u795E\u660E\u6307\u793A\u3002"]})})})]})}var G={};k(G,{default:()=>Ne});import{Outlet as mt}from"@remix-run/react";import{Link as _,useLocation as dt}from"@remix-run/react";import{useState as ct}from"react";import{jsx as o,jsxs as p}from"react/jsx-runtime";function q({children:e}){let[t,r]=ct(!1),i=dt().pathname==="/";return p("div",{className:"min-h-screen bg-gradient-to-b from-yellow-50/30 to-yellow-100/30 relative",children:[o("div",{className:"absolute inset-0 bg-[url('/images/chinese-pattern.svg')] opacity-5 fixed"}),p("header",{className:"bg-gradient-to-b from-red-900 to-red-800 shadow-sm border-b border-red-700 relative",children:[o("div",{className:"absolute inset-0 bg-[url('/images/chinese-pattern.svg')] opacity-10"}),p("nav",{className:"max-w-screen-md mx-auto px-3 py-2 relative",children:[p("div",{className:"flex justify-between items-center",children:[!i&&p(_,{to:"/",className:"text-lg font-bold text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center",children:[o("i",{className:"fas fa-peace mr-2 text-yellow-200/90"}),o("span",{className:"font-serif",children:"\u9EC3\u5927\u4ED9\u9748\u7C3D"})]}),i&&o("div",{className:"w-6"}),o("button",{onClick:()=>r(!t),className:"text-yellow-50 hover:text-yellow-100 transition-colors duration-300 md:hidden","aria-label":"\u958B\u555F\u9078\u55AE",children:o("i",{className:`fas ${t?"fa-times":"fa-bars"} text-lg`})}),p("div",{className:"hidden md:flex space-x-6",children:[p(_,{to:"/fortune",className:"text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center text-sm",children:[o("i",{className:"fas fa-pray w-4 text-yellow-200/90"}),o("span",{className:"ml-1",children:"\u6C42\u7C64\u554F\u4E8B"})]}),p(_,{to:"/blog",className:"text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center text-sm",children:[o("i",{className:"fas fa-scroll w-4 text-yellow-200/90"}),o("span",{className:"ml-1",children:"\u9748\u7C3D\u5178\u7C4D"})]}),p(_,{to:"/about",className:"text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center text-sm",children:[o("i",{className:"fas fa-temple w-4 text-yellow-200/90"}),o("span",{className:"ml-1",children:"\u95DC\u65BC\u672C\u6BBF"})]})]})]}),o("div",{className:`${t?"max-h-48 opacity-100":"max-h-0 opacity-0"} 
            md:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2`,children:p("div",{className:"border-t border-red-700/50 pt-2 space-y-2",children:[p(_,{to:"/fortune",className:"flex items-center py-1.5 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 text-sm",onClick:()=>r(!1),children:[o("i",{className:"fas fa-pray w-5 text-yellow-200/90"}),o("span",{className:"ml-1",children:"\u6C42\u7C64\u554F\u4E8B"})]}),p(_,{to:"/blog",className:"flex items-center py-1.5 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 text-sm",onClick:()=>r(!1),children:[o("i",{className:"fas fa-scroll w-5 text-yellow-200/90"}),o("span",{className:"ml-1",children:"\u9748\u7C3D\u5178\u7C4D"})]}),p(_,{to:"/about",className:"flex items-center py-1.5 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 text-sm",onClick:()=>r(!1),children:[o("i",{className:"fas fa-temple w-5 text-yellow-200/90"}),o("span",{className:"ml-1",children:"\u95DC\u65BC\u672C\u6BBF"})]})]})})]})]}),o("main",{className:"flex-grow relative",children:e}),p("footer",{className:"bg-gradient-to-b from-red-800 to-red-900 text-yellow-50 border-t border-red-700 relative mt-auto",children:[o("div",{className:"absolute inset-0 bg-[url('/images/chinese-pattern.svg')] opacity-10"}),o("div",{className:"max-w-screen-md mx-auto px-3 py-4 relative",children:p("div",{className:"text-center",children:[p("div",{className:"flex justify-center space-x-6 mb-3",children:[o("a",{href:"#",className:"text-yellow-200/80 hover:text-yellow-100 transition-colors duration-300","aria-label":"\u5FAE\u4FE1",children:o("i",{className:"fab fa-weixin text-lg"})}),o("a",{href:"#",className:"text-yellow-200/80 hover:text-yellow-100 transition-colors duration-300","aria-label":"\u5FAE\u535A",children:o("i",{className:"fab fa-weibo text-lg"})}),o("a",{href:"#",className:"text-yellow-200/80 hover:text-yellow-100 transition-colors duration-300","aria-label":"QQ",children:o("i",{className:"fab fa-qq text-lg"})})]}),p("div",{className:"text-yellow-200/80 space-y-1",children:[o("p",{className:"text-sm font-medium font-serif",children:"\u9EC3\u5927\u4ED9\u9748\u7C3D\u6BBF\u5802"}),o("p",{className:"text-xs tracking-wider",children:"\u627F\u8499\u9EC3\u5927\u4ED9\u5E2B\u6069\u51C6 \u2022 \u50B3\u627F\u53E4\u6CD5 \u2022 \u6307\u5F15\u8FF7\u6D25"}),o("p",{className:"text-xs opacity-80",children:" 2024 \u7248\u6B0A\u6240\u6709 \u2022 \u8654\u8AA0\u6C42\u7C64 \u2022 \u8B39\u614E\u53C3\u8003"})]})]})})]})]})}import{jsx as ve}from"react/jsx-runtime";function Ne(){return ve(q,{children:ve(mt,{})})}var pt={entry:{module:"/build/entry.client-MLFC2VMK.js",imports:["/build/_shared/chunk-FZJTZK24.js"]},routes:{root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,module:"/build/root-4LAQEOFQ.js",imports:void 0,hasAction:!1,hasLoader:!1,hasClientAction:!1,hasClientLoader:!1,hasErrorBoundary:!1},"routes/_layout":{id:"routes/_layout",parentId:"root",path:void 0,index:void 0,caseSensitive:void 0,module:"/build/routes/_layout-7GMJJUKJ.js",imports:void 0,hasAction:!1,hasLoader:!1,hasClientAction:!1,hasClientLoader:!1,hasErrorBoundary:!1},"routes/_layout._index":{id:"routes/_layout._index",parentId:"routes/_layout",path:void 0,index:!0,caseSensitive:void 0,module:"/build/routes/_layout._index-6ZXPQS3V.js",imports:void 0,hasAction:!1,hasLoader:!1,hasClientAction:!1,hasClientLoader:!1,hasErrorBoundary:!1},"routes/_layout.divine":{id:"routes/_layout.divine",parentId:"routes/_layout",path:"divine",index:void 0,caseSensitive:void 0,module:"/build/routes/_layout.divine-OFOTGHMW.js",imports:["/build/_shared/chunk-7AW6HZLB.js"],hasAction:!0,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasErrorBoundary:!1},"routes/_layout.draw":{id:"routes/_layout.draw",parentId:"routes/_layout",path:"draw",index:void 0,caseSensitive:void 0,module:"/build/routes/_layout.draw-E5UYAMMS.js",imports:["/build/_shared/chunk-7AW6HZLB.js"],hasAction:!0,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasErrorBoundary:!1},"routes/_layout.result":{id:"routes/_layout.result",parentId:"routes/_layout",path:"result",index:void 0,caseSensitive:void 0,module:"/build/routes/_layout.result-QRBKIGK6.js",imports:["/build/_shared/chunk-7AW6HZLB.js"],hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasErrorBoundary:!1}},version:"21bf261c",hmr:void 0,url:"/build/manifest-21BF261C.js"};var Ut="production",Zt="public/build",Jt={v3_fetcherPersist:!0,v3_relativeSplatPath:!0,v3_throwAbortReason:!0,v3_singleFetch:!1,v3_lazyRouteDiscovery:!0,unstable_optimizeDeps:!1,unstable_routeConfig:!1},Xt="/build/",Vt={module:E},er={root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,module:P},"routes/_layout.divine":{id:"routes/_layout.divine",parentId:"routes/_layout",path:"divine",index:void 0,caseSensitive:void 0,module:T},"routes/_layout.result":{id:"routes/_layout.result",parentId:"routes/_layout",path:"result",index:void 0,caseSensitive:void 0,module:B},"routes/_layout._index":{id:"routes/_layout._index",parentId:"routes/_layout",path:void 0,index:!0,caseSensitive:void 0,module:D},"routes/_layout.draw":{id:"routes/_layout.draw",parentId:"routes/_layout",path:"draw",index:void 0,caseSensitive:void 0,module:$},"routes/_layout":{id:"routes/_layout",parentId:"root",path:void 0,index:void 0,caseSensitive:void 0,module:G}};export{pt as assets,Zt as assetsBuildDirectory,Vt as entry,Jt as future,Ut as mode,Xt as publicPath,er as routes};
