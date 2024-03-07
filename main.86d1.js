const e=(t,r)=>{Array.isArray(t)?t.some((t=>e(t,r))):null!=t&&!1!==t&&r.append(t)},t=t=>{const r=new DocumentFragment;return e(t,r),r},r=new Set(["ns","children","ref"]),n=new Map([["style",(e,t,r)=>{if("string"===typeof t)e.setAttribute(r,t);else for(r in t)r.startsWith("--")?e.style.setProperty(r,t[r]):e.style[r]=t[r]}]]),s=new Set(["value"]),a=(t,a)=>{let o,i,l=a.ns?document.createElementNS(a.ns,t):document.createElement(t);for(o in a)r.has(o)||(i=a[o],n.has(o)?n.get(o)(l,i,o):s.has(o)||o.startsWith("on")?l[o]=i:null==i||"boolean"===typeof i&&"-"!==o[4]?i&&l.setAttribute(o,""):l.setAttribute(o,i));return e(a.children,"template"===t?l.content:l),(o=a.ref)&&("function"===typeof o?o(l):o.current=l),l},o=e=>Object.seal({current:e}),i=e=>{const t=new Text(e);return[t,r=>{e!==r&&(t.textContent=e=r)}]},l="http://www.w3.org/2000/svg",c=({open:e,title:t,children:r})=>a("details",{open:e,class:"M",children:[a("summary",{class:"N",children:t}),a("fieldset",{children:r})]}),h=JSON.parse(document.getElementById("colors").textContent),d=e=>e.map((e=>{const t=e.toString(16);return t.length<2?"0"+t:t})).join(""),u=/^#/,p=/[^\da-f]/g,f=e=>{let t=e.trim().toLowerCase().replace(u,"");switch(t in h?t=h[t]:p.test(t)&&(t=(e=>{const[t,r,n]=e.match(/(0?\.?\d+)%?\b/g)||[],s=[+t,+r,+n];return s.every((e=>e>=0&&e<256))?d(s):""})(t)),t.length){case 6:return t;case 3:return t.split("").map((e=>e+e)).join("")}},g=()=>crypto.randomUUID().slice(-6),m=(e,t,r)=>[71,73,70,56,57,97,1,0,1,0,128,0,0,e,t,r,0,0,0,33,249,4,0,0,0,0,0,44,0,0,0,0,1,0,1,0,0,2,2,68,1,0,59],b=e=>btoa(String.fromCharCode.apply(null,e)),v=e=>"data:image/gif;base64,"+e,{readyStore:x,connect:y,dispatch:w,getState:k,setState:S}=(e=>{let t=Object.create(null),r={},n=[],s=(e,n)=>{if("@dispatch"!==e&&s("@dispatch",[e,n]),e in t){let a;t[e].forEach((e=>{let t=e(r,n);t&&"function"!==typeof t.then&&(r={...r,...t},a={...a,...t})})),a&&s("@changed",a)}},a=(e,r)=>((t[e]??=[]).push(r),()=>{t[e]=t[e].filter((e=>e!==r))}),o=()=>r,i=e=>s("@set",e);return a("@set",((e,t)=>t)),e.forEach((e=>{e&&e({dispatch:s,on:a,get:o,set:i})})),s("@init"),{dispatch:s,getState:o,setState:i,connect(...e){let t=e.pop();return n.push({e,f:t}),()=>{n=n.filter((e=>e.f!==t))}},readyStore:()=>(s("@ready"),a("@changed",((e,t)=>{n.forEach((e=>{e.e.some((e=>e in t))&&e.f(r)}))})),Promise.all(n.map((e=>e.f(r)))))}})([e=>{e.on("@init",(()=>({r:0,g:0,b:0,radix:16,hex:"000000",bytes:m(0,0,0),toast:!1}))),e.on("rgb",((e,[t,r])=>{const n=~~r,s=n<0?0:n>255?255:n,{r:a,g:o,b:i}={...e,[t]:s};return{[t]:s,hex:d([a,o,i]),bytes:m(a,o,i)}})),e.on("hex",((e,t)=>{const r=parseInt(t,16),n=r>>16&255,s=r>>8&255,a=255&r;return((e,t,r)=>{for(const n in t)e[n]!==t[n]&&(r[n]=t[n]);return r})(e,{r:n,g:s,b:a},{hex:t,bytes:m(n,s,a)})}))}]),M=({param:e})=>{const t=o(),r=o(),n=`color channel "${e}"`,s=t=>w("rgb",[e,t.currentTarget.valueAsNumber]);return y(e,(n=>{const s=n[e],a="r"===e?s:0,o="g"===e?s:0,i="b"===e?s:0;t.current.valueAsNumber=s,r.current.valueAsNumber=s,r.current.style.setProperty("--c-thumb",`rgb(${a} ${o} ${i})`)})),a("div",{class:"H",children:[a("span",{class:"I",children:e}),a("input",{ref:t,type:"number",class:"J",oninput:s,max:255,min:0,step:1,"aria-label":n}),a("input",{ref:r,type:"range",class:"K",oninput:s,max:255,min:0,step:1,"aria-label":n})]})},C="https://shoonia.github.io/1x1/#",[z,E]=i("-");fetch("https://api.github.com/repos/shoonia/pixel-gif").then((e=>e.json())).then((e=>E(e.stargazers_count||"-")));const L=(e,t=0,r=1)=>e>r?r:e<t?t:e,$=(e,t=0,r=Math.pow(10,t))=>Math.round(r*e)/r,A=e=>("#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?$(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?$(parseInt(e.substring(6,8),16)/255,2):1}),P=e=>{const{h:t,s:r,l:n}=(({h:e,s:t,v:r,a:n})=>{const s=(200-t)*r/100;return{h:$(e),s:$(s>0&&s<200?t*r/100/(s<=100?s:200-s)*100:0),l:$(s/2),a:$(n,2)}})(e);return`hsl(${t}, ${r}%, ${n}%)`},B=e=>{const t=e.toString(16);return t.length<2?"0"+t:t},I=(e,t)=>{if(e===t)return!0;for(const r in e)if(e[r]!==t[r])return!1;return!0},j={},T=e=>{let t=j[e];return t||(t=document.createElement("template"),t.innerHTML=e,j[e]=t),t},H=(e,t,r)=>{e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:r}))};let D=!1;const N=e=>"touches"in e,U=(e,t)=>{const r=N(t)?t.touches[0]:t,n=e.el.getBoundingClientRect();H(e.el,"move",e.getMove({x:L((r.pageX-(n.left+window.pageXOffset))/n.width),y:L((r.pageY-(n.top+window.pageYOffset))/n.height)}))};class G{constructor(e,t,r,n){const s=T(`<div role="slider" tabindex="0" part="${t}" ${r}><div part="${t}-pointer"></div></div>`);e.appendChild(s.content.cloneNode(!0));const a=e.querySelector(`[part=${t}]`);a.addEventListener("mousedown",this),a.addEventListener("touchstart",this),a.addEventListener("keydown",this),this.el=a,this.xy=n,this.nodes=[a.firstChild,a]}set dragging(e){const t=e?document.addEventListener:document.removeEventListener;t(D?"touchmove":"mousemove",this),t(D?"touchend":"mouseup",this)}handleEvent(e){switch(e.type){case"mousedown":case"touchstart":if(e.preventDefault(),!(e=>!(D&&!N(e))&&(D||(D=N(e)),!0))(e)||!D&&0!=e.button)return;this.el.focus(),U(this,e),this.dragging=!0;break;case"mousemove":case"touchmove":e.preventDefault(),U(this,e);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":((e,t)=>{const r=t.keyCode;r>40||e.xy&&r<37||r<33||(t.preventDefault(),H(e.el,"move",e.getMove({x:39===r?.01:37===r?-.01:34===r?.05:33===r?-.05:35===r?1:36===r?-1:0,y:40===r?.01:38===r?-.01:0},!0)))})(this,e)}}style(e){e.forEach(((e,t)=>{for(const r in e)this.nodes[t].style.setProperty(r,e[r])}))}}class O extends G{constructor(e){super(e,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:e}){this.h=e,this.style([{left:e/360*100+"%",color:P({h:e,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",""+$(e))}getMove(e,t){return{h:t?L(this.h+360*e.x,0,360):360*e.x}}}class W extends G{constructor(e){super(e,"saturation",'aria-label="Color"',!0)}update(e){this.hsva=e,this.style([{top:100-e.v+"%",left:e.s+"%",color:P(e)},{"background-color":P({h:e.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${$(e.s)}%, Brightness ${$(e.v)}%`)}getMove(e,t){return{s:t?L(this.hsva.s+100*e.x,0,100):100*e.x,v:t?L(this.hsva.v-100*e.y,0,100):Math.round(100-100*e.y)}}}const F=Symbol(),q=Symbol(),R=Symbol(),V=Symbol(),X=Symbol(),J=Symbol(),K=Symbol();class Q extends HTMLElement{static get observedAttributes(){return["color"]}get[J](){return[':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',"[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}","[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}"]}get[K](){return[W,O]}get color(){return this[q]}set color(e){if(!this[F](e)){const t=this.colorModel.toHsva(e);this[V](t),this[q]=e}}constructor(){super();const e=T(`<style>${this[J].join("")}</style>`),t=this.attachShadow({mode:"open"});t.appendChild(e.content.cloneNode(!0)),t.addEventListener("move",this),this[X]=this[K].map((e=>new e(t)))}connectedCallback(){if(this.hasOwnProperty("color")){const e=this.color;delete this.color,this.color=e}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(e,t,r){const n=this.colorModel.fromAttr(r);this[F](n)||(this.color=n)}handleEvent(e){const t=this[R],r={...t,...e.detail};let n;this[V](r),I(r,t)||this[F](n=this.colorModel.fromHsva(r))||(this[q]=n,H(this,"color-changed",{value:n}))}[F](e){return this.color&&this.colorModel.equal(e,this.color)}[V](e){this[R]=e,this[X].forEach((t=>t.update(e)))}}const Y={defaultColor:"#000",toHsva:e=>(({r:e,g:t,b:r,a:n})=>{const s=Math.max(e,t,r),a=s-Math.min(e,t,r),o=a?s===e?(t-r)/a:s===t?2+(r-e)/a:4+(e-t)/a:0;return{h:$(60*(o<0?o+6:o)),s:$(s?a/s*100:0),v:$(s/255*100),a:n}})(A(e)),fromHsva:({h:e,s:t,v:r})=>(({r:e,g:t,b:r,a:n})=>{const s=n<1?B($(255*n)):"";return"#"+B(e)+B(t)+B(r)+s})((({h:e,s:t,v:r,a:n})=>{t/=100,r/=100;const s=Math.floor(e=e/360*6),a=r*(1-t),o=r*(1-(e-s)*t),i=r*(1-(1-e+s)*t),l=s%6;return{r:$(255*[r,o,a,a,i,r][l]),g:$(255*[i,r,r,o,a,a][l]),b:$(255*[a,a,i,r,r,o][l]),a:$(n,2)}})({h:e,s:t,v:r,a:1})),equal:(e,t)=>e.toLowerCase()===t.toLowerCase()||I(A(e),A(t)),fromAttr:e=>e};customElements.define("color-picker",class extends Q{get colorModel(){return Y}});const _=({currentTarget:e})=>{e.select(),navigator.clipboard.writeText(e.value),S({toast:!0})},Z=({label:e,ref:t})=>a("label",{children:[e,a("input",{ref:t,onclick:_,class:"G",type:"text",spellcheck:"false",readonly:""})]}),ee=a("canvas",{width:50,height:50}),te=ee.getContext("2d",{alpha:!0,desynchronized:!0,colorSpace:"srgb"});te.arc(25,25,24,0,2*Math.PI);const re=e=>`1x1_#${e.toUpperCase()}.gif`,ne=t([a("svg",{viewBox:"0 0 768 768",width:"1em",children:a("path",{fill:"currentcolor",d:"M691.199 499.2v153.6c0 10.598-4.262 20.16-11.251 27.149s-16.55 11.251-27.149 11.251H115.2c-10.598 0-20.16-4.262-27.149-11.251S76.8 663.399 76.8 652.8V499.2c0-21.196-17.204-38.4-38.4-38.4S0 478.003 0 499.2v153.6c0 31.796 12.941 60.672 33.754 81.446S83.405 768 115.2 768h537.599c31.795 0 60.672-12.941 81.446-33.754s33.754-49.651 33.754-81.446V499.2c0-21.196-17.203-38.4-38.4-38.4s-38.4 17.203-38.4 38.4zM422.4 406.503V38.401c0-21.197-17.204-38.4-38.4-38.4s-38.4 17.203-38.4 38.4v368.102L219.149 280.052c-15.015-15.015-39.322-15.015-54.298 0s-15.015 39.322 0 54.298L356.85 526.349c3.532 3.533 7.757 6.375 12.442 8.333s9.716 2.919 14.707 2.919c9.831 0 19.66-3.763 27.148-11.251l191.999-191.999c15.015-15.015 15.015-39.322 0-54.298s-39.322-15.015-54.298 0z",ns:l}),ns:l}),"Download"]);var se=["Shift","Meta","Alt","Control"],ae="object"==typeof navigator?navigator.platform:"",oe=/Mac|iPod|iPhone|iPad/.test(ae),ie=oe?"Meta":"Control",le="Win32"===ae?["Control","Alt"]:oe?["Alt"]:[];function ce(e,t){return"function"==typeof e.getModifierState&&(e.getModifierState(t)||le.includes(t)&&e.getModifierState("AltGraph"))}function he(e){return e.trim().split(" ").map((e=>{var t=e.split(/\b\+/),r=t.pop();return[t=t.map((e=>"$mod"===e?ie:e)),r]}))}function de(e,t){var r;void 0===t&&(t={});var n=null!=(r=t.timeout)?r:1e3,s=Object.keys(e).map((t=>[he(t),e[t]])),a=new Map,o=null;return e=>{e instanceof KeyboardEvent&&(s.forEach((t=>{var r=t[0],n=t[1],s=a.get(r)||r;((e,t)=>!(t[1].toUpperCase()!==e.key.toUpperCase()&&t[1]!==e.code||t[0].find((t=>!ce(e,t)))||se.find((r=>!t[0].includes(r)&&t[1]!==r&&ce(e,r)))))(e,s[0])?s.length>1?a.set(r,s.slice(1)):(a.delete(r),n(e)):ce(e,e.key)||a.delete(r)})),o&&clearTimeout(o),o=setTimeout(a.clear.bind(a),n))}}const ue="B",pe=/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"⌘":"Ctrl",fe=()=>{null===history.state&&history.go(-1)},ge=()=>history.go(1);function me(e,t){window.dataLayer.push(arguments)}addEventListener("popstate",(()=>{const e=k(),t=location.hash.slice(1);if(t!==e.hex){const e=f(t);e&&w("hex",e)}})),((e,t,r)=>{var n;void 0===r&&(r={});var s=null!=(n=r.event)?n:"keydown",a=de({"$mod+z":fe,"$mod+Shift+z":ge},r);e.addEventListener(s,a)})(window),window.dataLayer=[],me("js",new Date),me("config","G-2W35Q7B86C");const be=f(location.hash)||g();w("hex",be),history.replaceState("","","#"+be),document.body.append(t([a("div",{ref:x,class:"a",children:[a("header",{class:"b",children:[a("a",{href:"./",class:"f","aria-current":"page",children:"1x1 Pixel GIF"}),a("div",{class:"g",children:[a("div",{class:"p",children:a("a",{class:"q",href:"https://u24.gov.ua/",children:[a("svg",{"aria-label":"flag of Ukraine",viewBox:"0 0 3 2",width:"2em",children:[a("path",{fill:"#005bbb",d:"M0 0h3v1H0z",ns:l}),a("path",{fill:"#ffd500",d:"M0 1h3v1H0z",ns:l})],ns:l}),"Support Ukraine"]})}),a("button",{type:"button","aria-label":"random color",class:"x",onclick:()=>w("hex",g()),children:a("svg",{width:"2.5em",fill:"currentcolor",viewBox:"0 0 290 221",children:[a("path",{d:"m239 128-36 79c-1 3-4 5-8 6l-86 8c-4 0-7-2-9-5l-50-70c-2-3-3-7-1-10l36-79c1-3 4-5 8-6l86-8c4 0 7 2 9 5l50 70c2 3 3 7 1 10zm-88 5 44 61 31-70-43-61-32 70zm32 67-42-59-74 6 42 60 74-7zM64 134l75-7 32-70-75 7-32 70zM54 43c7-15 20-23 35-25l2 6c-14 2-25 9-31 22l-6-3zM23 170c-9-13-11-28-6-43l7 2c-4 13-4 26 5 37l-6 4zM181 13c15 1 25 7 34 20l-6 4c-6-11-17-17-29-17l1-7zm89 92c7 15 6 30-2 44l-6-3c7-12 8-25 2-38l6-3zM46 31C53 16 65 8 81 6l1 6c-13 2-24 9-30 22l-6-3zM9 172c-10-13-11-28-6-43l6 2c-4 13-3 26 5 37l-5 4zM183 0c16 0 29 7 38 20l-5 4c-8-11-19-18-33-17V0zm102 106c7 15 5 30-2 44l-6-3c7-12 8-25 2-38l6-3z",ns:l}),a("circle",{r:"14",transform:"matrix(-.7 -.3 0 -1 188 152)",ns:l}),a("circle",{r:"14",transform:"matrix(-.7 -.3 0 -1 188 99)",ns:l}),a("circle",{r:"14",transform:"matrix(.7 .4 -.5 .4 133 156)",ns:l}),a("circle",{r:"14",transform:"matrix(.7 .4 -.5 .4 95 160)",ns:l}),a("circle",{r:"14",transform:"matrix(.7 .4 -.5 .4 154 186)",ns:l}),a("circle",{r:"14",transform:"matrix(.7 .4 -.5 .4 116 190)",ns:l}),a("circle",{r:"14",transform:"matrix(-.9 .3 -.1 1 115 97)",ns:l})],ns:l})})]})]}),a("aside",{class:"c",children:[c({open:!0,title:"HEX",children:[a("input",{ref:e=>{e.addEventListener("change",(()=>{const t=f(e.value);t&&w("hex",t)})),y("hex",(t=>{e.value=t.hex}))},list:"color-list",class:"j",type:"search",autocomplete:"on",placeholder:"ffffff",spellcheck:"false","aria-label":"color",minlength:3,maxlength:25}),a("datalist",{id:"color-list",children:Object.keys(h).map((e=>a("option",{value:h[e],children:e})))})]}),c({open:!0,title:"RGB",children:[M({param:"r"}),M({param:"g"}),M({param:"b"})]}),c({open:matchMedia("(min-width:700px)").matches,title:"Picker",children:a("color-picker",{ref:e=>{y("hex",(t=>{e.color="#"+t.hex})),e.addEventListener("color-changed",(e=>w("hex",e.detail.value.slice(1))))},class:"F"})})]}),a("main",{class:"d",children:a("div",{class:"i",children:[a("h1",{class:"h",children:"One pixel Base64 encoded GIF generator"}),(()=>{const e=o(),r=o(),n=o(),s=o(),l=o(),c=document.querySelector('link[rel="icon"]'),[h,d]=i("#000000");let u;return y("hex",(({hex:t,bytes:s})=>{const a="#"+t,o=b(s),i=v(o),h=`url(${i})`;d(a),e.current.style.backgroundImage=h,r.current.value=i,l.current.value=o,n.current.value="https://shoonia.github.io/pixel-gif/"+a,clearTimeout(u),u=setTimeout((()=>{const e="display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:"+h;c.href=(e=>(te.fillStyle=e,te.fill(),te.stroke(),ee.toDataURL("image/png",.1)))(a),location.hash=a,console.log("%c  ",e,a)}),300)})),y("bytes","radix",(({bytes:e,radix:t})=>{s.current.value=e.map((e=>e.toString(t))).join(" ")})),t([a("div",{ref:e,class:"r",children:[a("code",{class:"u",children:h}),a("code",{class:"v",children:"1x1 (43 bytes)"})]}),a("fieldset",{class:"s",children:[Z({ref:r,label:"Data URL:"}),Z({ref:l,label:"Base64:"}),a("div",{class:"t",children:[Z({ref:s,label:"Bytes:"}),a("select",{onchange:e=>S({radix:~~e.currentTarget.value}),class:"L","aria-label":"byte base",children:[16,10,8,2].map((e=>a("option",{value:e,children:e})))})]}),Z({ref:n,label:"Share Link:"})]})])})(),"function"===typeof showSaveFilePicker?a("button",{onclick:async()=>{const{hex:e,bytes:t}=k(),r=await showSaveFilePicker({suggestedName:re(e)}),n=await r.createWritable();await n.write(new Blob([new Uint8Array(t)],{type:"image/gif"})),await n.close()},type:"button",class:"w",children:ne}):a("a",{onclick:({currentTarget:e})=>{const{hex:t,bytes:r}=k();e.download=re(t),e.href=v(b(r))},role:"button",class:"w",href:"#",children:ne})]})}),a("div",{ref:e=>{let t;y("toast",(r=>{r.toast&&(clearTimeout(t),e.classList.add("D"),t=setTimeout((()=>e.classList.remove("D")),3e3))}))},class:"C",role:"status",children:"Copied to clipboard"}),a("footer",{class:"e",children:[a("div",{class:"f",children:a("div",{class:"y",children:[a("div",{children:[a("div",{children:"Undo:"}),a("button",{type:"button",class:"z",onclick:fe,children:a("kbd",{class:"A",children:[a("span",{class:ue,children:pe}),a("span",{class:ue,children:"z"})]})})]}),a("div",{children:[a("div",{children:"Redo:"}),a("button",{type:"button",class:"z",onclick:ge,children:a("kbd",{class:"A",children:[a("span",{class:ue,children:pe}),a("span",{class:ue,children:"Shift"}),a("span",{class:ue,children:"z"})]})})]})]})}),a("div",{class:"g",children:[a("div",{class:"l",children:[a("a",{href:"https://github.com/shoonia/pixel-gif","aria-label":"Star on GitHub",tabindex:0,class:"n m",children:[a("svg",{width:"1.4em",viewBox:"0 0 16 16",fill:"currentcolor",children:a("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.43-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z",ns:l}),ns:l}),"Stars"]}),a("a",{href:"https://github.com/shoonia/pixel-gif/stargazers",tabindex:0,class:"o m",children:z})]}),a("a",{ref:e=>y("hex",(t=>{e.href=C+t.hex+"ff"})),href:C,class:"k","aria-label":"One pixel Base64 encoded transparent PNG generator",children:"1x1 Pixel PNG"})]})]})]}),a("script",{async:"",src:"https://www.googletagmanager.com/gtag/js?id=G-2W35Q7B86C"})])),addEventListener("load",(()=>navigator.serviceWorker?.register("sw.js")));