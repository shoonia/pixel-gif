!function(){const t=(t,e=0,o=1)=>t>o?o:t<e?e:t,e=(t,e=0,o=Math.pow(10,e))=>Math.round(o*t)/o,o=(Math.PI,t=>("#"===t[0]&&(t=t.substr(1)),t.length<6?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:1}:{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:1})),r=({h:t,s:o,v:r,a:s})=>{const n=(200-o)*r/100;return{h:e(t),s:e(n>0&&n<200?o*r/100/(n<=100?n:200-n)*100:0),l:e(n/2),a:e(s,2)}},s=t=>{const{h:e,s:o,l:s}=r(t);return`hsl(${e}, ${o}%, ${s}%)`},n=({h:t,s:o,v:r,a:s})=>{t=t/360*6,o/=100,r/=100;const n=Math.floor(t),a=r*(1-o),i=r*(1-(t-n)*o),l=r*(1-(1-t+n)*o),h=n%6;return{r:e(255*[r,i,a,a,l,r][h]),g:e(255*[l,r,r,i,a,a][h]),b:e(255*[a,a,l,r,r,i][h]),a:e(s,2)}},a=t=>{const e=t.toString(16);return e.length<2?"0"+e:e},i=({r:t,g:e,b:o})=>"#"+a(t)+a(e)+a(o),l=({r:t,g:o,b:r,a:s})=>{const n=Math.max(t,o,r),a=n-Math.min(t,o,r),i=a?n===t?(o-r)/a:n===o?2+(r-t)/a:4+(t-o)/a:0;return{h:e(60*(i<0?i+6:i)),s:e(n?a/n*100:0),v:e(n/255*100),a:s}},h=(t,e)=>{if(t===e)return!0;for(const o in t)if(t[o]!==e[o])return!1;return!0},c={},d=t=>{let e=c[t];return e||(e=document.createElement("template"),e.innerHTML=t,c[t]=e),e},u=(t,e,o)=>{t.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:o}))};let p=!1;const b=t=>"touches"in t,f=(e,o)=>{const r=b(o)?o.touches[0]:o,s=e.el.getBoundingClientRect();u(e.el,"move",e.getMove({x:t((r.pageX-(s.left+window.pageXOffset))/s.width),y:t((r.pageY-(s.top+window.pageYOffset))/s.height)}))};class g{set dragging(t){const e=t?document.addEventListener:document.removeEventListener;e(p?"touchmove":"mousemove",this),e(p?"touchend":"mouseup",this)}handleEvent(t){switch(t.type){case"mousedown":case"touchstart":if(t.preventDefault(),!(t=>!(p&&!b(t)||(p||(p=b(t)),0)))(t)||!p&&0!=t.button)return;this.el.focus(),f(this,t),this.dragging=!0;break;case"mousemove":case"touchmove":t.preventDefault(),f(this,t);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":((t,e)=>{const o=e.keyCode;o>40||t.xy&&o<37||o<33||(e.preventDefault(),u(t.el,"move",t.getMove({x:39===o?.01:37===o?-.01:34===o?.05:33===o?-.05:35===o?1:36===o?-1:0,y:40===o?.01:38===o?-.01:0},!0)))})(this,t)}}style(t){t.forEach(((t,e)=>{for(const o in t)this.nodes[e].style.setProperty(o,t[o])}))}constructor(t,e,o,r){const s=d(`<div role="slider" tabindex="0" part="${e}" ${o}><div part="${e}-pointer"></div></div>`);t.appendChild(s.content.cloneNode(!0));const n=t.querySelector(`[part=${e}]`);n.addEventListener("mousedown",this),n.addEventListener("touchstart",this),n.addEventListener("keydown",this),this.el=n,this.xy=r,this.nodes=[n.firstChild,n]}}class v extends g{update({h:t}){this.h=t,this.style([{left:t/360*100+"%",color:s({h:t,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${e(t)}`)}getMove(e,o){return{h:o?t(this.h+360*e.x,0,360):360*e.x}}constructor(t){super(t,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}}class m extends g{update(t){this.hsva=t,this.style([{top:100-t.v+"%",left:`${t.s}%`,color:s(t)},{"background-color":s({h:t.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${e(t.s)}%, Brightness ${e(t.v)}%`)}getMove(e,o){return{s:o?t(this.hsva.s+100*e.x,0,100):100*e.x,v:o?t(this.hsva.v-100*e.y,0,100):Math.round(100-100*e.y)}}constructor(t){super(t,"saturation",'aria-label="Color"',!0)}}const x=Symbol("same"),y=Symbol("color"),w=Symbol("hsva"),M=Symbol("update"),k=Symbol("parts"),C=Symbol("css"),E=Symbol("sliders");class $ extends HTMLElement{static get observedAttributes(){return["color"]}get[C](){return[':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',"[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}","[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}"]}get[E](){return[m,v]}get color(){return this[y]}set color(t){if(!this[x](t)){const e=this.colorModel.toHsva(t);this[M](e),this[y]=t}}connectedCallback(){if(this.hasOwnProperty("color")){const t=this.color;delete this.color,this.color=t}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(t,e,o){const r=this.colorModel.fromAttr(o);this[x](r)||(this.color=r)}handleEvent(t){const e=this[w],o={...e,...t.detail};let r;this[M](o),h(o,e)||this[x](r=this.colorModel.fromHsva(o))||(this[y]=r,u(this,"color-changed",{value:r}))}[x](t){return this.color&&this.colorModel.equal(t,this.color)}[M](t){this[w]=t,this[k].forEach((e=>e.update(t)))}constructor(){super();const t=d(`<style>${this[C].join("")}</style>`),e=this.attachShadow({mode:"open"});e.appendChild(t.content.cloneNode(!0)),e.addEventListener("move",this),this[k]=this[E].map((t=>new t(e)))}}const S={defaultColor:"#000",toHsva:t=>l(o(t)),fromHsva:t=>i(n(t)),equal:(t,e)=>t.toLowerCase()===e.toLowerCase()||h(o(t),o(e)),fromAttr:t=>t};class L extends ${get colorModel(){return S}}customElements.define("hex-color-picker",class extends L{})}();
//# sourceMappingURL=index.fef1afbd.js.map
