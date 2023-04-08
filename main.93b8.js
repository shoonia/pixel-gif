(()=>{let e=(t,r)=>{Array.isArray(r)?r.some((r=>e(t,r))):null!=r&&!1!==r&&t.append(r)},t=t=>{let r=new DocumentFragment;return e(r,t.children),r},r=new Map,n=new Set(["ref","children","__ns"]),s=new Set(["innerHTML","value","muted"]),o=(t,o)=>{if("function"===typeof t)return t(o);let a,i;for(a in t="string"===typeof t?o.__ns?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t):t,o)if(!n.has(a))if(i=o[a],r.has(a))r.get(a)(t,i);else if("style"===a)if("string"===typeof i)t.style.cssText=i;else for(a in i)a.startsWith("--")?t.style.setProperty(a,i[a]):t.style[a]=i[a];else s.has(a)||a.startsWith("on")&&a in t?t[a]=i:null==i||"boolean"===typeof i&&"-"!==a[4]?i?t.setAttribute(a,""):t.removeAttribute(a):t.setAttribute(a,i);return e("template"===t.localName?t.content:t,o.children),i=o.ref,i&&("function"===typeof i?i(t):i.current=t),t},a=e=>Object.seal({current:e});const i=({open:e,title:t,children:r})=>o("details",{open:e,class:"H",children:[o("summary",{class:"I",children:t}),o("fieldset",{children:r})]}),l=JSON.parse(document.getElementById("colors").textContent),c=(e,t,r)=>[e,t,r].map((e=>{const t=e.toString(16);return t.length<2?"0"+t:t})).join(""),h=/^#/,d=/[^\da-f]/g,u=e=>{let t=e.trim().toLowerCase().replace(h,"");switch(t in l&&(t=l[t]),d.test(t)&&(t=(e=>{const[t,r,n]=e.match(/(0?\.?\d+)%?\b/g)||[],s=[Number(t),Number(r),Number(n)];return s.every((e=>e>=0&&e<=255))?c(...s):""})(t)),t.length){case 6:return t;case 3:return t.split("").map((e=>e+e)).join("")}},p=e=>{let t="";for(;e--;)t+=(16*Math.random()|0).toString(16);return t},f=(e,t,r)=>[71,73,70,56,57,97,1,0,1,0,128,0,0,e,t,r,0,0,0,33,249,4,0,0,0,0,0,44,0,0,0,0,1,0,1,0,0,2,2,68,1,0,59],g=e=>btoa(String.fromCharCode.apply(null,e)),m=e=>"data:image/gif;base64,"+e,{readyStore:b,connect:v,dispatch:x,getState:y,setState:w}=(e=>{let t={},r={},n=[],s=(e,n)=>{if("@dispatch"!==e&&s("@dispatch",[e,n,t[e]]),t[e]){let o;t[e].forEach((s=>{let a=t[e].includes(s)&&s(r,n);a&&"function"!==typeof a.then&&(r={...r,...a},o={...o,...a})})),o&&s("@changed",o)}},o=(e,r)=>((t[e]||(t[e]=[])).push(r),()=>{t[e]=t[e].filter((e=>e!==r))}),a=()=>r,i=e=>s("@set",e);return o("@set",((e,t)=>t)),e.forEach((e=>{e&&e({dispatch:s,on:o,get:a,set:i})})),s("@init"),{dispatch:s,getState:a,setState:i,connect(...e){let t=e.pop();return n.push({keys:e,cb:t}),()=>{n=n.filter((e=>e.cb!==t))}},readyStore:()=>(s("@ready"),o("@changed",((e,t)=>{n.forEach((e=>{e.keys.some((e=>e in t))&&e.cb(r)}))})),Promise.all(n.map((e=>e.cb(r)))))}})([e=>{e.on("@init",(()=>({r:0,g:0,b:0,radix:16,hex:"000000",bytes:f(0,0,0)}))),e.on("rgb",((e,[t,r])=>{const{r:n,g:s,b:o}={...e,[t]:r};return{[t]:r,hex:c(n,s,o),bytes:f(n,s,o)}})),e.on("hex",((e,t)=>{const r=parseInt(t,16),n=r>>16&255,s=r>>8&255,o=255&r;return((e,t)=>{const r={};for(const n in t)e[n]!==t[n]&&(r[n]=t[n]);return r})(e,{r:n,g:s,b:o,hex:t,bytes:f(n,s,o)})}))}]),k=({id:e})=>{const r=o(t,{});let n;for(n in l)r.append(o("option",{value:l[n],children:n}));return o("datalist",{id:e,children:r})},M=()=>{const e=a(),t="e"+p(4);return v("hex",(t=>{e.current.value=t.hex})),o(i,{open:!0,title:"HEX",children:[o("input",{ref:e,list:t,onchange:()=>{const t=u(e.current.value);t&&x("hex",t)},class:"j",type:"text",autoComplete:"on",placeholder:"ffffff",spellcheck:"false","aria-label":"color"}),o(k,{id:t})]})},S=({param:e})=>{const t=a(),r=a(),n=`color channel "${e}"`,s=t=>{const r=~~t.target.valueAsNumber;x("rgb",[e,r>255?255:r])};return v(e,(n=>{const s=n[e];t.current.valueAsNumber=s,r.current.valueAsNumber=s})),o("div",{class:"D",children:[o("span",{class:"E",children:e}),o("input",{ref:t,type:"number",class:"F",oninput:s,max:255,min:0,step:1,"aria-label":n}),o("input",{ref:r,type:"range",class:"G",oninput:s,max:255,min:0,step:1,"aria-label":n})]})},_=()=>o(i,{open:!0,title:"RGB",children:[o(S,{param:"r"}),o(S,{param:"g"}),o(S,{param:"b"})]}),C=()=>{const e=new URL("https://shoonia.github.io/1x1/");return o("a",{ref:t=>{v("hex",(r=>{e.hash=r.hex+"ff",t.href=e.href}))},href:e.href,class:"k","aria-label":"One pixel Base64 encoded transparent PNG generator",children:"1x1 Pixel PNG"})},E=()=>{const[e,t]=(e=>{let t=new Text("-");return[t,e=>{t.textContent=e}]})();return fetch("https://api.github.com/repos/shoonia/pixel-gif").then((e=>e.json())).then((e=>t(e.stargazers_count))),o("div",{class:"l",children:[o("a",{href:"https://github.com/shoonia/pixel-gif","aria-label":"Star on GitHub",tabIndex:0,class:"n m",children:[o("svg",{height:"1.4em",width:"1.4em",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":!0,__ns:1,children:o("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.43-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z",__ns:1})}),"Stars"]}),o("a",{href:"https://github.com/shoonia/pixel-gif/stargazers",tabIndex:0,class:"o m",children:e})]})},z=()=>o("div",{class:"p",children:[o("svg",{"aria-label":"flag of Ukraine",viewBox:"0 0 3 2",width:"2em",__ns:1,children:[o("path",{fill:"#005bbb",d:"M0 0h3v1H0z",__ns:1}),o("path",{fill:"#ffd500",d:"M0 1h3v1H0z",__ns:1})]}),o("a",{href:"https://u24.gov.ua/",children:"Support Ukraine"})]}),L=(e,t=0,r=1)=>e>r?r:e<t?t:e,$=(e,t=0,r=Math.pow(10,t))=>Math.round(r*e)/r,P=(Math,e=>("#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?$(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?$(parseInt(e.substring(6,8),16)/255,2):1})),A=e=>{const{h:t,s:r,l:n}=(({h:e,s:t,v:r,a:n})=>{const s=(200-t)*r/100;return{h:$(e),s:$(s>0&&s<200?t*r/100/(s<=100?s:200-s)*100:0),l:$(s/2),a:$(n,2)}})(e);return`hsl(${t}, ${r}%, ${n}%)`},I=e=>{const t=e.toString(16);return t.length<2?"0"+t:t},N=(e,t)=>{if(e===t)return!0;for(const r in e)if(e[r]!==t[r])return!1;return!0},B={},H=e=>{let t=B[e];return t||(t=document.createElement("template"),t.innerHTML=e,B[e]=t),t},T=(e,t,r)=>{e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:r}))};let U=!1;const j=e=>"touches"in e,O=(e,t)=>{const r=j(t)?t.touches[0]:t,n=e.el.getBoundingClientRect();T(e.el,"move",e.getMove({x:L((r.pageX-(n.left+window.pageXOffset))/n.width),y:L((r.pageY-(n.top+window.pageYOffset))/n.height)}))};class D{constructor(e,t,r,n){const s=H(`<div role="slider" tabindex="0" part="${t}" ${r}><div part="${t}-pointer"></div></div>`);e.appendChild(s.content.cloneNode(!0));const o=e.querySelector(`[part=${t}]`);o.addEventListener("mousedown",this),o.addEventListener("touchstart",this),o.addEventListener("keydown",this),this.el=o,this.xy=n,this.nodes=[o.firstChild,o]}set dragging(e){const t=e?document.addEventListener:document.removeEventListener;t(U?"touchmove":"mousemove",this),t(U?"touchend":"mouseup",this)}handleEvent(e){switch(e.type){case"mousedown":case"touchstart":if(e.preventDefault(),!(e=>!(U&&!j(e))&&(U||(U=j(e)),!0))(e)||!U&&0!=e.button)return;this.el.focus(),O(this,e),this.dragging=!0;break;case"mousemove":case"touchmove":e.preventDefault(),O(this,e);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":((e,t)=>{const r=t.keyCode;r>40||e.xy&&r<37||r<33||(t.preventDefault(),T(e.el,"move",e.getMove({x:39===r?.01:37===r?-.01:34===r?.05:33===r?-.05:35===r?1:36===r?-1:0,y:40===r?.01:38===r?-.01:0},!0)))})(this,e)}}style(e){e.forEach(((e,t)=>{for(const r in e)this.nodes[t].style.setProperty(r,e[r])}))}}class G extends D{constructor(e){super(e,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:e}){this.h=e,this.style([{left:e/360*100+"%",color:A({h:e,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${$(e)}`)}getMove(e,t){return{h:t?L(this.h+360*e.x,0,360):360*e.x}}}class F extends D{constructor(e){super(e,"saturation",'aria-label="Color"',!0)}update(e){this.hsva=e,this.style([{top:100-e.v+"%",left:`${e.s}%`,color:A(e)},{"background-color":A({h:e.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${$(e.s)}%, Brightness ${$(e.v)}%`)}getMove(e,t){return{s:t?L(this.hsva.s+100*e.x,0,100):100*e.x,v:t?L(this.hsva.v-100*e.y,0,100):Math.round(100-100*e.y)}}}const q=Symbol("same"),R=Symbol("color"),V=Symbol("hsva"),W=Symbol("update"),X=Symbol("parts"),Y=Symbol("css"),J=Symbol("sliders");class K extends HTMLElement{static get observedAttributes(){return["color"]}get[Y](){return[':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',"[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}","[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}"]}get[J](){return[F,G]}get color(){return this[R]}set color(e){if(!this[q](e)){const t=this.colorModel.toHsva(e);this[W](t),this[R]=e}}constructor(){super();const e=H(`<style>${this[Y].join("")}</style>`),t=this.attachShadow({mode:"open"});t.appendChild(e.content.cloneNode(!0)),t.addEventListener("move",this),this[X]=this[J].map((e=>new e(t)))}connectedCallback(){if(this.hasOwnProperty("color")){const e=this.color;delete this.color,this.color=e}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(e,t,r){const n=this.colorModel.fromAttr(r);this[q](n)||(this.color=n)}handleEvent(e){const t=this[V],r={...t,...e.detail};let n;this[W](r),N(r,t)||this[q](n=this.colorModel.fromHsva(r))||(this[R]=n,T(this,"color-changed",{value:n}))}[q](e){return this.color&&this.colorModel.equal(e,this.color)}[W](e){this[V]=e,this[X].forEach((t=>t.update(e)))}}const Q={defaultColor:"#000",toHsva:e=>(({r:e,g:t,b:r,a:n})=>{const s=Math.max(e,t,r),o=s-Math.min(e,t,r),a=o?s===e?(t-r)/o:s===t?2+(r-e)/o:4+(e-t)/o:0;return{h:$(60*(a<0?a+6:a)),s:$(s?o/s*100:0),v:$(s/255*100),a:n}})(P(e)),fromHsva:({h:e,s:t,v:r})=>(({r:e,g:t,b:r,a:n})=>{const s=n<1?I($(255*n)):"";return"#"+I(e)+I(t)+I(r)+s})((({h:e,s:t,v:r,a:n})=>{e=e/360*6,t/=100,r/=100;const s=Math.floor(e),o=r*(1-t),a=r*(1-(e-s)*t),i=r*(1-(1-e+s)*t),l=s%6;return{r:$(255*[r,a,o,o,i,r][l]),g:$(255*[i,r,r,a,o,o][l]),b:$(255*[o,o,i,r,r,a][l]),a:$(n,2)}})({h:e,s:t,v:r,a:1})),equal:(e,t)=>e.toLowerCase()===t.toLowerCase()||N(P(e),P(t)),fromAttr:e=>e};class Z extends K{get colorModel(){return Q}}customElements.define("hex-color-picker",class extends Z{});const ee=()=>{const e=window.matchMedia("(min-width:700px)").matches;return o(i,{open:e,title:"Picker",children:o("hex-color-picker",{ref:e=>{v("hex",(t=>{e.color="#"+t.hex})),e.addEventListener("color-changed",(e=>{x("hex",e.detail.value.slice(1))}))},class:"q"})})},te=e=>{const t=e.target;t.select(),navigator.clipboard.writeText(t.value)},re=({label:e,ref:t})=>o("label",{children:[e,o("input",{ref:t,onclick:te,class:"C",type:"text",spellcheck:"false",readOnly:!0})]}),ne=o("canvas",{width:50,height:50}),se=()=>{const e=a(),r=a(),n=a(),s=a(),i=a(),l=document.querySelector('link[rel="icon"]'),c=f(0,0,0).length;let h;return v("hex","radix",(({hex:t,bytes:o,radix:a})=>{const c="#"+t,d=g(o),u=m(d),p=`url(${u})`;e.current.style.backgroundImage=p,r.current.value=u,i.current.value=d,s.current.value=o.map((e=>e.toString(a))).join(" "),n.current.value="https://shoonia.github.io/pixel-gif/"+c,clearTimeout(h),h=window.setTimeout((()=>{const e="display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:"+p;l.href=(e=>{const t=ne.cloneNode(),r=t.getContext("2d",{alpha:!0,desynchronized:!0,colorSpace:"srgb"});if(r)return r.fillStyle=e,r.arc(25,25,24,0,2*Math.PI),r.stroke(),r.fill(),t.toDataURL("image/png",.1)})(c)||"",document.title="1x1 Pixel GIF | "+c,location.hash=c,console.log("%c  ",e,c)}),300)})),o(t,{children:[o("div",{ref:e,class:"r",children:o("span",{class:"v",children:`1x1 (${c} bytes)`})}),o("fieldset",{class:"s",children:[o(re,{ref:r,label:"Data URL:"}),o(re,{ref:i,label:"Base64:"}),o("div",{class:"t",children:[o(re,{ref:s,label:"Bytes:"}),o("select",{ref:e=>{e.addEventListener("change",(()=>{w({radix:~~e.value})}))},class:"u",children:[o("option",{value:"16",children:"16"}),o("option",{value:"10",children:"10"}),o("option",{value:"8",children:"8"}),o("option",{value:"2",children:"2"})]})]}),o(re,{ref:n,label:"Share Link:"})]})]})},oe=e=>`1x1_#${e.toUpperCase()}.gif`,ae=e=>{e.addEventListener("click",(()=>{const{hex:t,bytes:r}=y();e.download=oe(t),e.href=m(g(r))}))},ie=e=>{e.addEventListener("click",(async()=>{const{hex:e,bytes:t}=y(),r=await window.showSaveFilePicker({suggestedName:oe(e)});if("granted"===await r.queryPermission()){const e=await r.createWritable();await e.write(new Blob([new Uint8Array(t)],{type:"image/gif"})),await e.close()}}))},le=()=>{const e=o(t,{children:[o("svg",{viewBox:"0 0 768 768",height:"1em",width:"1em","aria-hidden":!0,__ns:1,children:o("path",{fill:"currentColor",d:"M691.199 499.2v153.6c0 10.598-4.262 20.16-11.251 27.149s-16.55 11.251-27.149 11.251H115.2c-10.598 0-20.16-4.262-27.149-11.251S76.8 663.399 76.8 652.8V499.2c0-21.196-17.204-38.4-38.4-38.4S0 478.003 0 499.2v153.6c0 31.796 12.941 60.672 33.754 81.446S83.405 768 115.2 768h537.599c31.795 0 60.672-12.941 81.446-33.754s33.754-49.651 33.754-81.446V499.2c0-21.196-17.203-38.4-38.4-38.4s-38.4 17.203-38.4 38.4zM422.4 406.503V38.401c0-21.197-17.204-38.4-38.4-38.4s-38.4 17.203-38.4 38.4v368.102L219.149 280.052c-15.015-15.015-39.322-15.015-54.298 0s-15.015 39.322 0 54.298L356.85 526.349c3.532 3.533 7.757 6.375 12.442 8.333s9.716 2.919 14.707 2.919c9.831 0 19.66-3.763 27.148-11.251l191.999-191.999c15.015-15.015 15.015-39.322 0-54.298s-39.322-15.015-54.298 0z",__ns:1})}),"Download"]});return"function"===typeof window.showSaveFilePicker?o("button",{ref:ie,type:"button",class:"w",children:e}):o("a",{ref:ae,role:"button",class:"w",href:"#",children:e})},ce=()=>o("button",{type:"button","aria-label":"random color",class:"x",onclick:()=>{x("hex",p(6))},children:o("svg",{height:"40",width:"40",viewBox:"0 0 290 221","aria-hidden":!0,fill:"currentColor",__ns:1,children:[o("path",{d:"M239 128l-36 79c-1 3-4 5-8 6l-86 8c-4 0-7-2-9-5l-50-70c-2-3-3-7-1-10l36-79c1-3 4-5 8-6l86-8c4 0 7 2 9 5l50 70c2 3 3 7 1 10zm-88 5l44 61 31-70-43-61-32 70zm32 67l-42-59-74 6 42 60 74-7zM64 134l75-7 32-70-75 7-32 70zM54 43c7-15 20-23 35-25l2 6c-14 2-25 9-31 22l-6-3zM23 170c-9-13-11-28-6-43l7 2c-4 13-4 26 5 37l-6 4zM181 13c15 1 25 7 34 20l-6 4c-6-11-17-17-29-17l1-7zm89 92c7 15 6 30-2 44l-6-3c7-12 8-25 2-38l6-3zM46 31C53 16 65 8 81 6l1 6c-13 2-24 9-30 22l-6-3zM9 172c-10-13-11-28-6-43l6 2c-4 13-3 26 5 37l-5 4zM183 0c16 0 29 7 38 20l-5 4c-8-11-19-18-33-17V0zm102 106c7 15 5 30-2 44l-6-3c7-12 8-25 2-38l6-3z",__ns:1}),o("circle",{transform:"matrix(-.67 -.29 .04 -.97 188.24 152.27)",r:"14",__ns:1}),o("circle",{transform:"matrix(-.65 -.28 .07 -.94 188.32 98.63)",r:"14",__ns:1}),o("circle",{transform:"matrix(.69 .43 -.47 .38 132.73 156.33)",r:"14",__ns:1}),o("circle",{transform:"matrix(.69 .43 -.47 .38 95.04 160.39)",r:"14",__ns:1}),o("circle",{transform:"matrix(.69 .43 -.47 .38 153.61 186.19)",r:"14",__ns:1}),o("circle",{transform:"matrix(.69 .43 -.47 .38 115.92 190.25)",r:"14",__ns:1}),o("circle",{transform:"matrix(-.93 .28 -.11 .94 114.82 96.89)",r:"14",__ns:1})]})});var he=["Shift","Meta","Alt","Control"],de="object"==typeof navigator&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";function ue(e,t){return"function"==typeof e.getModifierState&&e.getModifierState(t)}function pe(e){return e.trim().split(" ").map((function(e){var t=e.split(/\b\+/),r=t.pop();return[t=t.map((function(e){return"$mod"===e?de:e})),r]}))}function fe(e,t){var r;void 0===t&&(t={});var n=null!=(r=t.timeout)?r:1e3,s=Object.keys(e).map((function(t){return[pe(t),e[t]]})),o=new Map,a=null;return function(e){e instanceof KeyboardEvent&&(s.forEach((function(t){var r=t[0],n=t[1],s=o.get(r)||r;!function(e,t){return!(t[1].toUpperCase()!==e.key.toUpperCase()&&t[1]!==e.code||t[0].find((function(t){return!ue(e,t)}))||he.find((function(r){return!t[0].includes(r)&&t[1]!==r&&ue(e,r)})))}(e,s[0])?ue(e,e.key)||o.delete(r):s.length>1?o.set(r,s.slice(1)):(o.delete(r),n(e))})),a&&clearTimeout(a),a=setTimeout(o.clear.bind(o),n))}}const ge="B",me=()=>{null===history.state&&history.go(-1)},be=()=>history.go(1);window.addEventListener("popstate",(()=>{const e=y(),t=location.hash.slice(1);if(t!==e.hex){const e=u(t);e&&x("hex",e)}})),function(e,t,r){var n;void 0===r&&(r={});var s=null!=(n=r.event)?n:"keydown",o=fe(t,r);e.addEventListener(s,o)}(window,{"$mod+z":me,"$mod+Shift+z":be});const ve=()=>{const e=/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"⌘":"Ctrl";return o("div",{class:"y",children:[o("div",{children:[o("div",{children:"Undo:"}),o("button",{type:"button",class:"z",onclick:me,children:o("kbd",{class:"A",children:[o("span",{class:ge,children:e}),o("span",{class:ge,children:"z"})]})})]}),o("div",{children:[o("div",{children:"Redo:"}),o("button",{type:"button",class:"z",onclick:be,children:o("kbd",{class:"A",children:[o("span",{class:ge,children:e}),o("span",{class:ge,children:"Shift"}),o("span",{class:ge,children:"z"})]})})]})]})},xe=u(location.hash)||p(6);history.pushState("","","#"+xe),document.body.append(o((()=>o("div",{class:"a",children:[o("header",{class:"b",children:[o("a",{href:"./",class:"f","aria-current":"page",children:"1x1 Pixel GIF"}),o("div",{class:"g",children:[o(z,{}),o(ce,{})]})]}),o("aside",{class:"c",children:[o(M,{}),o(_,{}),o(ee,{})]}),o("main",{class:"d",children:o("div",{class:"i",children:[o("h1",{class:"h",children:"One pixel Base64 encoded GIF generator"}),o(se,{}),o(le,{})]})}),o("footer",{class:"e",children:[o("div",{class:"f",children:o(ve,{})}),o("div",{class:"g",children:[o(E,{}),o(C,{})]})]})]})),{})),x("hex",xe),b()})();