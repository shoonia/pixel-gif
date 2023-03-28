const e=(e,t)=>{const n={};for(const r in t)e[r]!==t[r]&&(n[r]=t[r]);return n},t=JSON.parse(document.getElementById("colors").textContent),n=(e,t,n)=>[e,t,n].map((e=>{const t=e.toString(16);return t.length<2?"0"+t:t})).join(""),r=/^#/,a=/[^\da-f]/g,i=e=>{let i=e.trim().toLowerCase().replace(r,"");switch(i in t&&(i=t[i]),a.test(i)&&(i=(e=>{const[t,r,a]=e.match(/(0?\.?\d+)%?\b/g)||[],i=[Number(t),Number(r),Number(a)];return i.every((e=>e>=0&&e<=255))?n(...i):""})(i)),i.length){case 6:return i;case 3:return i.split("").map((e=>e+e)).join("")}},s=e=>{let t="";for(;e--;)t+=(16*Math.random()|0).toString(16);return t},o=(e,t,n)=>[71,73,70,56,57,97,1,0,1,0,128,0,0,e,t,n,0,0,0,33,249,4,0,0,0,0,0,44,0,0,0,0,1,0,1,0,0,2,2,68,1,0,59],l=(e,t,n)=>"data:image/gif;base64,"+btoa(String.fromCharCode(...o(e,t,n))),c=(e,t,n,r)=>o(e,t,n).map((e=>e.toString(r))).join(" "),{readyStore:h,connect:d,dispatch:u,getState:p,setState:f}=(e=>{let t={},n={},r=[],a=(e,r)=>{if("@dispatch"!==e&&a("@dispatch",[e,r,t[e]]),t[e]){let i;t[e].forEach((a=>{let s=t[e].includes(a)&&a(n,r);s&&"function"!=typeof s.then&&(n={...n,...s},i={...i,...s})})),i&&a("@changed",i)}},i=(e,n)=>((t[e]||(t[e]=[])).push(n),()=>{t[e]=t[e].filter((e=>e!==n))}),s=()=>n,o=e=>a("@set",e);return i("@set",((e,t)=>t)),e.forEach((e=>{e&&e({dispatch:a,on:i,get:s,set:o})})),a("@init"),{dispatch:a,getState:s,setState:o,connect(...e){let t=e.pop();return r.push({keys:e,cb:t}),()=>{r=r.filter((e=>e.cb!==t))}},readyStore:()=>(a("@ready"),i("@changed",((e,t)=>{r.forEach((e=>{e.keys.some((e=>e in t))&&e.cb(n)}))})),Promise.all(r.map((e=>e.cb(n)))))}})([t=>{t.on("@init",(()=>({r:0,g:0,b:0,radix:16,hex:"000000"}))),t.on("set/rgb",((e,[t,r])=>{const{r:a,g:i,b:s}={...e,[t]:r};return{[t]:r,hex:n(a,i,s)}})),t.on("set/hex",((t,n)=>{const r=parseInt(n,16);return e(t,{r:r>>16&255,g:r>>8&255,b:255&r,hex:n})}))}]);let g=(e,t)=>{Array.isArray(t)?t.some((t=>g(e,t))):null!=t&&!1!==t&&e.append(t)},m=e=>{let t=new DocumentFragment;return g(t,e.children),t},b=new Map,x=new Set(["ref","children","__ns"]),y=new Set(["innerHTML","value","muted"]),v=(e,t)=>{if("function"==typeof e)return e(t);let n,r;for(n in e="string"==typeof e?t.__ns?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e):e,t)if(!x.has(n))if(r=t[n],b.has(n))b.get(n)(e,r);else if("style"===n)if("string"==typeof r)e.style.cssText=r;else for(n in r)n.startsWith("--")?e.style.setProperty(n,r[n]):e.style[n]=r[n];else y.has(n)||n.startsWith("on")&&n in e?e[n]=r:null==r||"boolean"==typeof r&&"-"!==n[4]?r?e.setAttribute(n,""):e.removeAttribute(n):e.setAttribute(n,r);return g("template"===e.localName?e.content:e,t.children),r=t.ref,r&&("function"==typeof r?r(e):r.current=e),e},w=e=>Object.seal({current:e}),S=e=>{let t=new Text(e);return[t,e=>{t.textContent=e}]};const k=()=>v("hex-color-picker",{ref:e=>{d("hex",(t=>{e.color="#"+t.hex})),e.addEventListener("color-changed",(()=>{u("set/hex",e.color.slice(1))}))},class:"c"});const E=({title:e,children:t})=>v("fieldset",{children:[v("legend",{children:e}),t]}),C=({id:e})=>v("datalist",{ref:e=>{const n=v(m,{});for(const e in t)n.append(v("option",{value:t[e],children:e}));e.append(n)},id:e}),_=()=>{const e=w(),t="i"+s(4),n=()=>{const t=i(e.current.value);t&&u("set/hex",t)};return d("hex",(t=>{e.current.value=t.hex})),v(E,{title:"HEX",children:[v("input",{ref:e,list:t,onchange:n,onkeyup:e=>{"Enter"===e.key&&n()},class:"d",type:"text",value:"ffffff",spellcheck:"false",autoComplete:"on",placeholder:"ffffff"}),v(C,{id:t})]})};const L=({param:e})=>{const t=w(),n=w(),r=t=>{const n=t.target.valueAsNumber;u("set/rgb",[e,n>255?255:n])};return d(e,(r=>{const a=`${r[e]}`;t.current.value=a,n.current.value=a})),v("div",{class:"k",children:[v("span",{class:"l",children:e.toUpperCase()}),v("input",{type:"number",class:"m",max:255,min:0,step:1,ref:t,oninput:r}),v("input",{type:"range",class:"n",max:255,min:0,step:1,ref:n,oninput:r})]})},A=()=>v(E,{title:"RGB",children:v("div",{class:"e",children:[v(L,{param:"r"}),v(L,{param:"g"}),v(L,{param:"b"})]})});const I=()=>v(E,{title:"Random Color",children:v("button",{type:"button",onclick:()=>{u("set/hex",s(6))},class:"f",children:"Generate"})});const N=e=>{const t=e.target;t.select(),navigator.clipboard.writeText(t.value)},j=({label:e,ref:t})=>v("label",{children:[e,v("input",{ref:t,onclick:N,class:"o",type:"text",spellcheck:"false",readOnly:!0})]}),B=e=>{const t=v("canvas",{width:50,height:50}),n=t.getContext("2d",{alpha:!0,desynchronized:!0});if(n)return n.fillStyle=e,n.arc(25,25,24,0,2*Math.PI),n.stroke(),n.fill(),t.toDataURL("image/png",.1)},P=()=>{const e=w(),t=w(),r=w(),a=w(),i=document.querySelector('link[rel="icon"]');let s;return d("r","g","b","radix",(({r:o,g:h,b:d,radix:u})=>{const p=l(o,h,d),f="#"+n(o,h,d),g=`url(${p})`,m="display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:"+g;e.current.value=p,a.current.value=p.slice(22),t.current.value="https://shoonia.github.io/pixel-gif/"+f,r.current.value=c(o,h,d,u),document.body.style.backgroundImage=g,clearTimeout(s),s=setTimeout((()=>{document.title="1x1 Pixel GIF | "+f,location.hash=f,i.href=B(f)||"",console.log("%c  ",m,f)}),300)})),v(E,{title:"Output",children:[v(j,{ref:e,label:"Data: URL"}),v(j,{ref:a,label:"Base64:"}),v("div",{class:"g",children:[v(j,{ref:r,label:"Bytes:"}),v("select",{ref:e=>{e.addEventListener("change",(()=>{f({radix:~~e.value})}))},class:"h",children:[v("option",{value:"16",children:"16"}),v("option",{value:"10",children:"10"}),v("option",{value:"8",children:"8"}),v("option",{value:"2",children:"2"})]})]}),v(j,{ref:t,label:"Share Link:"})]})};const T=e=>`1x1_#${e.toUpperCase()}.gif`,D=async()=>{const{r:e,g:t,b:n,hex:r}=p(),a=await window.showSaveFilePicker({suggestedName:T(r)});if("granted"===await a.queryPermission()){const r=await a.createWritable();await r.write(new Blob([new Uint8Array(o(e,t,n))],{type:"image/gif"})),await r.close()}},F=e=>{e.addEventListener("click",(()=>{const{r:t,g:n,b:r,hex:a}=p();e.download=T(a),e.href=l(t,n,r)}))};const M=()=>{const[e,t]=S("-");return fetch("https://api.github.com/repos/shoonia/pixel-gif").then((e=>e.json())).then((e=>t(e.stargazers_count))),v("div",{class:"p",children:[v("a",{href:"https://github.com/shoonia/pixel-gif",tabIndex:0,class:"r q",children:[v("svg",{height:"1.4em",width:"1.4em",viewBox:"0 0 16 16","aria-hidden":!0,__ns:1,children:v("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.43-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z",__ns:1})}),"Stars"]}),v("a",{href:"https://github.com/shoonia/pixel-gif/stargazers",tabIndex:0,class:"s q",children:e})]})},O=()=>{const e="function"==typeof window.showSaveFilePicker?v("button",{type:"button",class:"j",onclick:D,children:"Download"}):v("a",{role:"button",class:"j",ref:F,href:"#",children:"Download"});return v("fieldset",{class:"i",children:[e,v(M,{})]})},U=i(location.hash),q=U||s(6);history.pushState("","","#"+q),window.addEventListener("popstate",(()=>{const e=p(),t=location.hash.slice(1);if(t!==e.hex){const e=i(t);e&&u("set/hex",e)}})),document.body.append(v((()=>v("main",{children:[v("div",{class:"a",children:[v("h1",{children:"One pixel Base64 encoded GIF generator"}),v(k,{})]}),v("div",{class:"b",children:[v(_,{}),v(A,{}),v(I,{})]}),v(P,{}),v(O,{})]})),{})),u("set/hex",q),h();