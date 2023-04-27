(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function M(){}function Ee(t,e){for(const n in e)t[n]=e[n];return t}function Sg(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Uu(t){return t()}function bl(){return Object.create(null)}function Ot(t){t.forEach(Uu)}function Js(t){return typeof t=="function"}function ie(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let cs;function Tl(t,e){return cs||(cs=document.createElement("a")),cs.href=e,t===cs.href}function Ag(t){return Object.keys(t).length===0}function Yo(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Fu(t){let e;return Yo(t,n=>e=n)(),e}function Il(t,e,n){t.$$.on_destroy.push(Yo(e,n))}function Jo(t,e,n,i){if(t){const s=xu(t,e,n,i);return t[0](s)}}function xu(t,e,n,i){return t[1]&&i?Ee(n.ctx.slice(),t[1](i(e))):n.ctx}function Zo(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function ea(t,e,n,i,s,r){if(s){const o=xu(e,n,i,r);t.p(o,s)}}function ta(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function pt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function bt(t){return t??""}let Zs=!1;function Cg(){Zs=!0}function Rg(){Zs=!1}function Dg(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Ng(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=c?s+1:Dg(1,s,f=>e[n[f]].claim_order,c))-1;i[l]=n[u]+1;const d=u+1;n[d]=l,s=Math.max(d,s)}const r=[],o=[];let a=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);r.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<r.length&&o[l].claim_order>=r[c].claim_order;)c++;const u=c<r.length?r[c]:null;t.insertBefore(o[l],u)}}function m(t,e){t.appendChild(e)}function Rn(t,e){if(Zs){for(Ng(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function S(t,e,n){t.insertBefore(e,n||null)}function ti(t,e,n){Zs&&!n?Rn(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Ti(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function ne(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function de(t){return document.createTextNode(t)}function j(){return de(" ")}function vt(){return de("")}function Ce(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function mt(t,e){for(const n in e)g(t,n,e[n])}function ct(t){return Array.from(t.childNodes)}function Og(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Pg(t,e,n,i,s=!1){Og(t);const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function Lg(t,e,n,i){return Pg(t,s=>s.nodeName===e,s=>{const r=[];for(let o=0;o<s.attributes.length;o++){const a=s.attributes[o];n[a.name]||r.push(a.name)}r.forEach(o=>s.removeAttribute(o))},()=>i(e))}function yt(t,e,n){return Lg(t,e,n,ne)}function Be(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function us(t,e){t.value=e??""}function ft(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Mg(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}let Ii;function Mt(t){Ii=t}function er(){if(!Ii)throw new Error("Function called outside component initialization");return Ii}function Bu(t){er().$$.on_mount.push(t)}function Vu(t){er().$$.on_destroy.push(t)}function na(){const t=er();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=Mg(e,n,{cancelable:i});return s.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Ug(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const Fn=[],Yt=[],ws=[],co=[],Fg=Promise.resolve();let uo=!1;function xg(){uo||(uo=!0,Fg.then(ia))}function ho(t){ws.push(t)}function Mr(t){co.push(t)}const Ur=new Set;let Ln=0;function ia(){if(Ln!==0)return;const t=Ii;do{try{for(;Ln<Fn.length;){const e=Fn[Ln];Ln++,Mt(e),Bg(e.$$)}}catch(e){throw Fn.length=0,Ln=0,e}for(Mt(null),Fn.length=0,Ln=0;Yt.length;)Yt.pop()();for(let e=0;e<ws.length;e+=1){const n=ws[e];Ur.has(n)||(Ur.add(n),n())}ws.length=0}while(Fn.length);for(;co.length;)co.pop()();uo=!1,Ur.clear(),Mt(t)}function Bg(t){if(t.fragment!==null){t.update(),Ot(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ho)}}const bs=new Set;let un;function We(){un={r:0,c:[],p:un}}function Qe(){un.r||Ot(un.c),un=un.p}function T(t,e){t&&t.i&&(bs.delete(t),t.i(e))}function k(t,e,n,i){if(t&&t.o){if(bs.has(t))return;bs.add(t),un.c.push(()=>{bs.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Vg(t,e){const n=e.token={};function i(s,r,o,a){if(e.token!==n)return;e.resolved=a;let l=e.ctx;o!==void 0&&(l=l.slice(),l[o]=a);const c=s&&(e.current=s)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((d,f)=>{f!==r&&d&&(We(),k(d,1,1,()=>{e.blocks[f]===d&&(e.blocks[f]=null)}),Qe())}):e.block.d(1),c.c(),T(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[r]=c),u&&ia()}if(Sg(t)){const s=er();if(t.then(r=>{Mt(s),i(e.then,1,e.value,r),Mt(null)},r=>{if(Mt(s),i(e.catch,2,e.error,r),Mt(null),!e.hasCatch)throw r}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function qg(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function jg(t,e){k(t,1,1,()=>{e.delete(t.key)})}function $g(t,e,n,i,s,r,o,a,l,c,u,d){let f=t.length,h=r.length,p=f;const y={};for(;p--;)y[t[p].key]=p;const E=[],A=new Map,v=new Map;for(p=h;p--;){const P=d(s,r,p),F=n(P);let L=o.get(F);L?i&&L.p(P,e):(L=c(F,P),L.c()),A.set(F,E[p]=L),F in y&&v.set(F,Math.abs(p-y[F]))}const _=new Set,C=new Set;function V(P){T(P,1),P.m(a,u),o.set(P.key,P),u=P.first,h--}for(;f&&h;){const P=E[h-1],F=t[f-1],L=P.key,D=F.key;P===F?(u=P.first,f--,h--):A.has(D)?!o.has(L)||_.has(L)?V(P):C.has(D)?f--:v.get(L)>v.get(D)?(C.add(L),V(P)):(_.add(D),f--):(l(F,o),f--)}for(;f--;){const P=t[f];A.has(P.key)||l(P,o)}for(;h;)V(E[h-1]);return E}function Dn(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(n[l]=a[l],s[l]=1);t[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Hg(t){return typeof t=="object"&&t!==null?t:{}}function Fr(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Q(t){t&&t.c()}function K(t,e,n,i){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),i||ho(()=>{const o=t.$$.on_mount.map(Uu).filter(Js);t.$$.on_destroy?t.$$.on_destroy.push(...o):Ot(o),t.$$.on_mount=[]}),r.forEach(ho)}function W(t,e){const n=t.$$;n.fragment!==null&&(Ot(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zg(t,e){t.$$.dirty[0]===-1&&(Fn.push(t),xg(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ae(t,e,n,i,s,r,o,a=[-1]){const l=Ii;Mt(t);const c=t.$$={fragment:null,ctx:[],props:r,update:M,not_equal:s,bound:bl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:bl(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(d,f,...h)=>{const p=h.length?h[0]:f;return c.ctx&&s(c.ctx[d],c.ctx[d]=p)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](p),u&&zg(t,d)),f}):[],c.update(),u=!0,Ot(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Cg();const d=ct(e.target);c.fragment&&c.fragment.l(d),d.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&T(t.$$.fragment),K(t,e.target,e.anchor,e.customElement),Rg(),ia()}Mt(l)}class le{$destroy(){W(this,1),this.$destroy=M}$on(e,n){if(!Js(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Ag(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Mn=[];function Gg(t,e){return{subscribe:Cs(t,e).subscribe}}function Cs(t,e=M){let n;const i=new Set;function s(a){if(ie(t,a)&&(t=a,n)){const l=!Mn.length;for(const c of i)c[1](),Mn.push(c,t);if(l){for(let c=0;c<Mn.length;c+=2)Mn[c][0](Mn[c+1]);Mn.length=0}}}function r(a){s(a(t))}function o(a,l=M){const c=[a,l];return i.add(c),i.size===1&&(n=e(s)||M),a(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}function Kg(t,e,n){const i=!Array.isArray(t),s=i?[t]:t,r=e.length<2;return Gg(n,o=>{let a=!1;const l=[];let c=0,u=M;const d=()=>{if(c)return;u();const h=e(i?l[0]:l,o);r?o(h):u=Js(h)?h:M},f=s.map((h,p)=>Yo(h,y=>{l[p]=y,c&=~(1<<p),a&&d()},()=>{c|=1<<p}));return a=!0,d(),function(){Ot(f),u()}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Wg=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ju={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(f=64)),i.push(n[u],n[d],n[f],n[h])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw Error();const f=r<<2|a>>4;if(i.push(f),c!==64){const h=a<<4&240|c>>2;if(i.push(h),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Qg=function(t){const e=qu(t);return ju.encodeByteArray(e,!0)},Rs=function(t){return Qg(t).replace(/\./g,"")},$u=function(t){try{return ju.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=()=>Xg().__FIREBASE_DEFAULTS__,Jg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$u(t[1]);return e&&JSON.parse(e)},tr=()=>{try{return Yg()||Jg()||Zg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hu=t=>{var e,n;return(n=(e=tr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sa=t=>{const e=Hu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},ep=()=>{var t;return(t=tr())===null||t===void 0?void 0:t.config},zu=t=>{var e;return(e=tr())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Rs(JSON.stringify(n)),Rs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function np(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function ip(){var t;const e=(t=tr())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ku(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rp(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wu(){try{return typeof indexedDB=="object"}catch{return!1}}function Qu(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function op(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="FirebaseError";class dt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ap,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nn.prototype.create)}}class Nn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?lp(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new dt(s,a,i)}}function lp(t,e){return t.replace(cp,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const cp=/\{\$([^}]+)}/g;function up(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ei(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(El(r)&&El(o)){if(!Ei(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function El(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function hp(t,e){const n=new dp(t,e);return n.subscribe.bind(n)}class dp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");fp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=xr),s.error===void 0&&(s.error=xr),s.complete===void 0&&(s.complete=xr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=1e3,pp=2,mp=4*60*60*1e3,yp=.5;function kl(t,e=gp,n=pp){const i=e*Math.pow(n,t),s=Math.round(yp*i*(Math.random()-.5)*2);return Math.min(mp,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return t&&t._delegate?t._delegate:t}let ut=class{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new tp;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wp(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:vp(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vp(t){return t===cn?void 0:t}function wp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _p(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Tp={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Ip=oe.INFO,Ep={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},kp=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Ep[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nr{constructor(e){this.name=e,this._logLevel=Ip,this._logHandler=kp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Sp=(t,e)=>e.some(n=>t instanceof n);let Sl,Al;function Ap(){return Sl||(Sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cp(){return Al||(Al=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xu=new WeakMap,fo=new WeakMap,Yu=new WeakMap,Br=new WeakMap,ra=new WeakMap;function Rp(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Jt(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xu.set(n,t)}).catch(()=>{}),ra.set(e,t),e}function Dp(t){if(fo.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});fo.set(t,e)}let go={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Np(t){go=t(go)}function Op(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Vr(this),e,...n);return Yu.set(i,e.sort?e.sort():[e]),Jt(i)}:Cp().includes(t)?function(...e){return t.apply(Vr(this),e),Jt(Xu.get(this))}:function(...e){return Jt(t.apply(Vr(this),e))}}function Pp(t){return typeof t=="function"?Op(t):(t instanceof IDBTransaction&&Dp(t),Sp(t,Ap())?new Proxy(t,go):t)}function Jt(t){if(t instanceof IDBRequest)return Rp(t);if(Br.has(t))return Br.get(t);const e=Pp(t);return e!==t&&(Br.set(t,e),ra.set(e,t)),e}const Vr=t=>ra.get(t);function Ju(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Jt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Jt(o.result),l.oldVersion,l.newVersion,Jt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Lp=["get","getKey","getAll","getAllKeys","count"],Mp=["put","add","delete","clear"],qr=new Map;function Cl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qr.get(e))return qr.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Mp.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Lp.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return qr.set(e,r),r}Np(t=>({...t,get:(e,n,i)=>Cl(e,n)||t.get(e,n,i),has:(e,n)=>!!Cl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fp(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Fp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const po="@firebase/app",Rl="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new nr("@firebase/app"),xp="@firebase/app-compat",Bp="@firebase/analytics-compat",Vp="@firebase/analytics",qp="@firebase/app-check-compat",jp="@firebase/app-check",$p="@firebase/auth",Hp="@firebase/auth-compat",zp="@firebase/database",Gp="@firebase/database-compat",Kp="@firebase/functions",Wp="@firebase/functions-compat",Qp="@firebase/installations",Xp="@firebase/installations-compat",Yp="@firebase/messaging",Jp="@firebase/messaging-compat",Zp="@firebase/performance",em="@firebase/performance-compat",tm="@firebase/remote-config",nm="@firebase/remote-config-compat",im="@firebase/storage",sm="@firebase/storage-compat",rm="@firebase/firestore",om="@firebase/firestore-compat",am="firebase",lm="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="[DEFAULT]",cm={[po]:"fire-core",[xp]:"fire-core-compat",[Vp]:"fire-analytics",[Bp]:"fire-analytics-compat",[jp]:"fire-app-check",[qp]:"fire-app-check-compat",[$p]:"fire-auth",[Hp]:"fire-auth-compat",[zp]:"fire-rtdb",[Gp]:"fire-rtdb-compat",[Kp]:"fire-fn",[Wp]:"fire-fn-compat",[Qp]:"fire-iid",[Xp]:"fire-iid-compat",[Yp]:"fire-fcm",[Jp]:"fire-fcm-compat",[Zp]:"fire-perf",[em]:"fire-perf-compat",[tm]:"fire-rc",[nm]:"fire-rc-compat",[im]:"fire-gcs",[sm]:"fire-gcs-compat",[rm]:"fire-fst",[om]:"fire-fst-compat","fire-js":"fire-js",[am]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Map,yo=new Map;function um(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _t(t){const e=t.name;if(yo.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;yo.set(e,t);for(const n of Ds.values())um(n,t);return!0}function Ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zt=new Nn("app","Firebase",hm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=lm;function Zu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:mo,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});if(n||(n=ep()),!n)throw Zt.create("no-options");const r=Ds.get(s);if(r){if(Ei(n,r.options)&&Ei(i,r.config))return r;throw Zt.create("duplicate-app",{appName:s})}const o=new bp(s);for(const l of yo.values())o.addComponent(l);const a=new dm(n,i,o);return Ds.set(s,a),a}function Bi(t=mo){const e=Ds.get(t);if(!e&&t===mo)return Zu();if(!e)throw Zt.create("no-app",{appName:t});return e}function Ve(t,e,n){var i;let s=(i=cm[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(a.join(" "));return}_t(new ut(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="firebase-heartbeat-database",gm=1,ki="firebase-heartbeat-store";let jr=null;function eh(){return jr||(jr=Ju(fm,gm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ki)}}}).catch(t=>{throw Zt.create("idb-open",{originalErrorMessage:t.message})})),jr}async function pm(t){try{return(await eh()).transaction(ki).objectStore(ki).get(th(t))}catch(e){if(e instanceof dt)Tn.warn(e.message);else{const n=Zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function Dl(t,e){try{const i=(await eh()).transaction(ki,"readwrite");return await i.objectStore(ki).put(e,th(t)),i.done}catch(n){if(n instanceof dt)Tn.warn(n.message);else{const i=Zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(i.message)}}}function th(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=1024,ym=30*24*60*60*1e3;class _m{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wm(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Nl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=ym}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Nl(),{heartbeatsToSend:n,unsentEntries:i}=vm(this._heartbeatsCache.heartbeats),s=Rs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nl(){return new Date().toISOString().substring(0,10)}function vm(t,e=mm){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ol(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ol(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class wm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wu()?Qu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ol(t){return Rs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){_t(new ut("platform-logger",e=>new Up(e),"PRIVATE")),_t(new ut("heartbeat",e=>new _m(e),"PRIVATE")),Ve(po,Rl,t),Ve(po,Rl,"esm2017"),Ve("fire-js","")}bm("");var Tm="firebase",Im="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve(Tm,Im,"app");const nh="@firebase/installations",oa="0.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=1e4,sh=`w:${oa}`,rh="FIS_v2",Em="https://firebaseinstallations.googleapis.com/v1",km=60*60*1e3,Sm="installations",Am="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},In=new Nn(Sm,Am,Cm);function oh(t){return t instanceof dt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah({projectId:t}){return`${Em}/projects/${t}/installations`}function lh(t){return{token:t.token,requestStatus:2,expiresIn:Dm(t.expiresIn),creationTime:Date.now()}}async function ch(t,e){const i=(await e.json()).error;return In.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function uh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Rm(t,{refreshToken:e}){const n=uh(t);return n.append("Authorization",Nm(e)),n}async function hh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Dm(t){return Number(t.replace("s","000"))}function Nm(t){return`${rh} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Om({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=ah(t),s=uh(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:rh,appId:t.appId,sdkVersion:sh},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await hh(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:lh(c.authToken)}}else throw await ch("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=/^[cdef][\w-]{21}$/,_o="";function Mm(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Um(t);return Lm.test(n)?n:_o}catch{return _o}}function Um(t){return Pm(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new Map;function gh(t,e){const n=ir(t);ph(n,e),Fm(n,e)}function ph(t,e){const n=fh.get(t);if(n)for(const i of n)i(e)}function Fm(t,e){const n=xm();n&&n.postMessage({key:t,fid:e}),Bm()}let hn=null;function xm(){return!hn&&"BroadcastChannel"in self&&(hn=new BroadcastChannel("[Firebase] FID Change"),hn.onmessage=t=>{ph(t.data.key,t.data.fid)}),hn}function Bm(){fh.size===0&&hn&&(hn.close(),hn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="firebase-installations-database",qm=1,En="firebase-installations-store";let $r=null;function aa(){return $r||($r=Ju(Vm,qm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(En)}}})),$r}async function Ns(t,e){const n=ir(t),s=(await aa()).transaction(En,"readwrite"),r=s.objectStore(En),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&gh(t,e.fid),e}async function mh(t){const e=ir(t),i=(await aa()).transaction(En,"readwrite");await i.objectStore(En).delete(e),await i.done}async function sr(t,e){const n=ir(t),s=(await aa()).transaction(En,"readwrite"),r=s.objectStore(En),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&gh(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(t){let e;const n=await sr(t.appConfig,i=>{const s=jm(i),r=$m(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===_o?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function jm(t){const e=t||{fid:Mm(),registrationStatus:0};return yh(e)}function $m(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(In.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Hm(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:zm(t)}:{installationEntry:e}}async function Hm(t,e){try{const n=await Om(t,e);return Ns(t.appConfig,n)}catch(n){throw oh(n)&&n.customData.serverCode===409?await mh(t.appConfig):await Ns(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function zm(t){let e=await Pl(t.appConfig);for(;e.registrationStatus===1;)await dh(100),e=await Pl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await la(t);return i||n}return e}function Pl(t){return sr(t,e=>{if(!e)throw In.create("installation-not-found");return yh(e)})}function yh(t){return Gm(t)?{fid:t.fid,registrationStatus:0}:t}function Gm(t){return t.registrationStatus===1&&t.registrationTime+ih<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Km({appConfig:t,heartbeatServiceProvider:e},n){const i=Wm(t,n),s=Rm(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:sh,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await hh(()=>fetch(i,a));if(l.ok){const c=await l.json();return lh(c)}else throw await ch("Generate Auth Token",l)}function Wm(t,{fid:e}){return`${ah(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(t,e=!1){let n;const i=await sr(t.appConfig,r=>{if(!_h(r))throw In.create("not-registered");const o=r.authToken;if(!e&&Ym(o))return r;if(o.requestStatus===1)return n=Qm(t,e),r;{if(!navigator.onLine)throw In.create("app-offline");const a=Zm(r);return n=Xm(t,a),a}});return n?await n:i.authToken}async function Qm(t,e){let n=await Ll(t.appConfig);for(;n.authToken.requestStatus===1;)await dh(100),n=await Ll(t.appConfig);const i=n.authToken;return i.requestStatus===0?ca(t,e):i}function Ll(t){return sr(t,e=>{if(!_h(e))throw In.create("not-registered");const n=e.authToken;return ey(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Xm(t,e){try{const n=await Km(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Ns(t.appConfig,i),n}catch(n){if(oh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mh(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ns(t.appConfig,i)}throw n}}function _h(t){return t!==void 0&&t.registrationStatus===2}function Ym(t){return t.requestStatus===2&&!Jm(t)}function Jm(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+km}function Zm(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ey(t){return t.requestStatus===1&&t.requestTime+ih<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(t){const e=t,{installationEntry:n,registrationPromise:i}=await la(e);return i?i.catch(console.error):ca(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(t,e=!1){const n=t;return await iy(n),(await ca(n,e)).token}async function iy(t){const{registrationPromise:e}=await la(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){if(!t||!t.options)throw Hr("App Configuration");if(!t.name)throw Hr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Hr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Hr(t){return In.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="installations",ry="installations-internal",oy=t=>{const e=t.getProvider("app").getImmediate(),n=sy(e),i=Ht(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},ay=t=>{const e=t.getProvider("app").getImmediate(),n=Ht(e,vh).getImmediate();return{getId:()=>ty(n),getToken:s=>ny(n,s)}};function ly(){_t(new ut(vh,oy,"PUBLIC")),_t(new ut(ry,ay,"PRIVATE"))}ly();Ve(nh,oa);Ve(nh,oa,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="analytics",cy="firebase_id",uy="origin",hy=60*1e3,dy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new nr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function fy(t,e){const n=document.createElement("script");n.src=`${wh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function gy(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function py(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await bh(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){lt.error(a)}t("config",s,r)}async function my(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await bh(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){lt.error(r)}}function yy(t,e,n,i){async function s(r,o,a){try{r==="event"?await my(t,e,n,o,a):r==="config"?await py(t,e,n,i,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(l){lt.error(l)}}return s}function _y(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=yy(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function vy(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(wh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},gt=new Nn("analytics","Analytics",wy);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=30,Ty=1e3;class Iy{constructor(e={},n=Ty){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Th=new Iy;function Ey(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ky(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Ey(i)},r=dy.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw gt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Sy(t,e=Th,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw gt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw gt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ry;return setTimeout(async()=>{a.abort()},n!==void 0?n:hy),Ih({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Ih(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=Th){var r;const{appId:o,measurementId:a}=t;try{await Ay(i,e)}catch(l){if(a)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await ky(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Cy(c)){if(s.deleteThrottleMetadata(o),a)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?kl(n,s.intervalMillis,by):kl(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,d),lt.debug(`Calling attemptFetch again in ${u} millis`),Ih(t,d,i,s)}}function Ay(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Cy(t){if(!(t instanceof dt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ry{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Dy(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(){if(Wu())try{await Qu()}catch(t){return lt.warn(gt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return lt.warn(gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Oy(t,e,n,i,s,r,o){var a;const l=Sy(t);l.then(h=>{n[h.measurementId]=h.appId,t.options.measurementId&&h.measurementId!==t.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>lt.error(h)),e.push(l);const c=Ny().then(h=>{if(h)return i.getId()}),[u,d]=await Promise.all([l,c]);vy(r)||fy(r,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[uy]="firebase",f.update=!0,d!=null&&(f[cy]=d),s("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.app=e}_delete(){return delete gi[this.app.options.appId],Promise.resolve()}}let gi={},Ml=[];const Ul={};let zr="dataLayer",Ly="gtag",Fl,Eh,xl=!1;function My(){const t=[];if(Ku()&&t.push("This is a browser extension environment."),op()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=gt.create("invalid-analytics-context",{errorInfo:e});lt.warn(n.message)}}function Uy(t,e,n){My();const i=t.options.appId;if(!i)throw gt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gt.create("no-api-key");if(gi[i]!=null)throw gt.create("already-exists",{id:i});if(!xl){gy(zr);const{wrappedGtag:r,gtagCore:o}=_y(gi,Ml,Ul,zr,Ly);Eh=r,Fl=o,xl=!0}return gi[i]=Oy(t,Ml,Ul,e,Fl,zr,n),new Py(t)}function Fy(t=Bi()){t=De(t);const e=Ht(t,Os);return e.isInitialized()?e.getImmediate():xy(t)}function xy(t,e={}){const n=Ht(t,Os);if(n.isInitialized()){const s=n.getImmediate();if(Ei(e,n.getOptions()))return s;throw gt.create("already-initialized")}return n.initialize({options:e})}function By(t,e,n,i){t=De(t),Dy(Eh,gi[t.app.options.appId],e,n,i).catch(s=>lt.error(s))}const Bl="@firebase/analytics",Vl="0.9.3";function Vy(){_t(new ut(Os,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Uy(i,s,n)},"PUBLIC")),_t(new ut("analytics-internal",t,"PRIVATE")),Ve(Bl,Vl),Ve(Bl,Vl,"esm2017");function t(e){try{const n=e.getProvider(Os).getImmediate();return{logEvent:(i,s,r)=>By(n,i,s,r)}}catch(n){throw gt.create("interop-component-reg-failed",{reason:n})}}}Vy();function ua(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function kh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qy=kh,Sh=new Nn("auth","Firebase",kh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new nr("@firebase/auth");function Ts(t,...e){ql.logLevel<=oe.ERROR&&ql.error(`Auth (${ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,...e){throw ha(t,...e)}function At(t,...e){return ha(t,...e)}function Ah(t,e,n){const i=Object.assign(Object.assign({},qy()),{[e]:n});return new Nn("auth","Firebase",i).create(e,{appName:t.name})}function jy(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Rt(t,"argument-error"),Ah(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ha(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Sh.create(t,...e)}function z(t,e,...n){if(!t)throw ha(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ts(e),new Error(e)}function Vt(t,e){t||Ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new Map;function Ft(t){Vt(t instanceof Function,"Expected a class definition");let e=jl.get(t);return e?(Vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jl.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(t,e){const n=Ht(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Ei(r,e??{}))return s;Rt(s,"already-initialized")}return n.initialize({options:e})}function Hy(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zy(){return $l()==="http:"||$l()==="https:"}function $l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zy()||Ku()||"connection"in navigator)?navigator.onLine:!0}function Ky(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vt(n>e,"Short delay should be less than long delay!"),this.isMobile=np()||sp()}get(){return Gy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t,e){Vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=new Vi(3e4,6e4);function Xy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rr(t,e,n,i,s={}){return Rh(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ch.fetch()(Dh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Rh(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Wy),e);try{const s=new Jy(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw hs(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hs(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ah(t,u,c);Rt(t,u)}}catch(s){if(s instanceof dt)throw s;Rt(t,"network-request-failed")}}async function Yy(t,e,n,i,s={}){const r=await rr(t,e,n,i,s);return"mfaPendingCredential"in r&&Rt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Dh(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?da(t.config,s):`${t.config.apiScheme}://${s}`}class Jy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(At(this.auth,"network-request-failed")),Qy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hs(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=At(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zy(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function e_(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function t_(t,e=!1){const n=De(t),i=await n.getIdToken(e),s=fa(i);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:pi(Gr(s.auth_time)),issuedAtTime:pi(Gr(s.iat)),expirationTime:pi(Gr(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Gr(t){return Number(t)*1e3}function fa(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ts("JWT malformed, contained fewer than 3 sections"),null;try{const s=$u(n);return s?JSON.parse(s):(Ts("Failed to decode base64 JWT payload"),null)}catch(s){return Ts("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function n_(t){const e=fa(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof dt&&i_(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function i_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pi(this.lastLoginAt),this.creationTime=pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Si(t,e_(n,{idToken:i}));z(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?a_(r.providerUserInfo):[],a=o_(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Nh(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function r_(t){const e=De(t);await Ps(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function o_(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function a_(t){return t.map(e=>{var{providerId:n}=e,i=ua(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(t,e){const n=await Rh(t,{},async()=>{const i=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Dh(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ch.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):n_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await l_(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Ai;return i&&(z(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=ua(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Nh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Si(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return t_(this,e)}reload(){return r_(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ps(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Si(this,Zy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,h=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:C,isAnonymous:V,providerData:P,stsTokenManager:F}=n;z(_&&F,e,"internal-error");const L=Ai.fromJSON(this.name,F);z(typeof _=="string",e,"internal-error"),zt(d,e.name),zt(f,e.name),z(typeof C=="boolean",e,"internal-error"),z(typeof V=="boolean",e,"internal-error"),zt(h,e.name),zt(p,e.name),zt(y,e.name),zt(E,e.name),zt(A,e.name),zt(v,e.name);const D=new mn({uid:_,auth:e,email:f,emailVerified:C,displayName:d,isAnonymous:V,photoURL:p,phoneNumber:h,tenantId:y,stsTokenManager:L,createdAt:A,lastLoginAt:v});return P&&Array.isArray(P)&&(D.providerData=P.map(fe=>Object.assign({},fe))),E&&(D._redirectEventId=E),D}static async _fromIdTokenResponse(e,n,i=!1){const s=new Ai;s.updateFromServerResponse(n);const r=new mn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ps(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Oh.type="NONE";const Hl=Oh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t,e,n){return`firebase:${t}:${e}:${n}`}class qn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Is(this.userKey,s.apiKey,r),this.fullPersistenceKey=Is("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new qn(Ft(Hl),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Ft(Hl);const o=Is(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=mn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new qn(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new qn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ph(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fh(e))return"Blackberry";if(xh(e))return"Webos";if(ga(e))return"Safari";if((e.includes("chrome/")||Lh(e))&&!e.includes("edge/"))return"Chrome";if(Uh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ph(t=$e()){return/firefox\//i.test(t)}function ga(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lh(t=$e()){return/crios\//i.test(t)}function Mh(t=$e()){return/iemobile/i.test(t)}function Uh(t=$e()){return/android/i.test(t)}function Fh(t=$e()){return/blackberry/i.test(t)}function xh(t=$e()){return/webos/i.test(t)}function or(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function c_(t=$e()){var e;return or(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u_(){return rp()&&document.documentMode===10}function Bh(t=$e()){return or(t)||Uh(t)||xh(t)||Fh(t)||/windows phone/i.test(t)||Mh(t)}function h_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t,e=[]){let n;switch(t){case"Browser":n=zl($e());break;case"Worker":n=`${zl($e())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gl(this),this.idTokenSubscription=new Gl(this),this.beforeStateQueue=new d_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await qn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ps(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ky()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await qn.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function ar(t){return De(t)}class Gl{constructor(e){this.auth=e,this.observer=null,this.addObserver=hp(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function g_(t,e,n){const i=ar(t);z(i._canInitEmulator,i,"emulator-config-failed"),z(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=qh(e),{host:o,port:a}=p_(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||m_()}function qh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function p_(t){const e=qh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Kl(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Kl(o)}}}function Kl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function m_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t,e){return Yy(t,"POST","/v1/accounts:signInWithIdp",Xy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="http://localhost";class kn extends jh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=ua(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new kn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,jn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jn(e,n)}buildRequest(){const e={requestUri:y_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends pa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends qi{constructor(){super("facebook.com")}static credential(e){return kn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return It.credential(n,i)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends qi{constructor(){super("github.com")}static credential(e){return kn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends qi{constructor(){super("twitter.com")}static credential(e,n){return kn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Wt.credential(n,i)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await mn._fromIdTokenResponse(e,i,s),o=Wl(i);return new Kn({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Wl(i);return new Kn({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Wl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends dt{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ls.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Ls(e,n,i,s)}}function $h(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ls._fromErrorAndOperation(t,r,e,i):r})}async function __(t,e,n=!1){const i=await Si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kn._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Si(t,$h(i,s,e,t),n);z(r.idToken,i,"internal-error");const o=fa(r.idToken);z(o,i,"internal-error");const{sub:a}=o;return z(t.uid===a,i,"user-mismatch"),Kn._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Rt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(t,e,n=!1){const i="signIn",s=await $h(t,i,e),r=await Kn._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function b_(t,e,n,i){return De(t).onIdTokenChanged(e,n,i)}function T_(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function I_(t,e,n,i){return De(t).onAuthStateChanged(e,n,i)}function E_(t){return De(t).signOut()}async function k_(t){return De(t).delete()}const Ms="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ms,"1"),this.storage.removeItem(Ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(){const t=$e();return ga(t)||or(t)}const A_=1e3,C_=10;class zh extends Hh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=S_()&&h_(),this.fallbackToPolling=Bh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);u_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,C_):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},A_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zh.type="LOCAL";const R_=zh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh extends Hh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gh.type="SESSION";const Kh=Gh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new lr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await D_(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ma("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function O_(t){Ct().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function P_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function L_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function M_(){return Wh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="firebaseLocalStorageDb",U_=1,Us="firebaseLocalStorage",Xh="fbase_key";class ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cr(t,e){return t.transaction([Us],e?"readwrite":"readonly").objectStore(Us)}function F_(){const t=indexedDB.deleteDatabase(Qh);return new ji(t).toPromise()}function wo(){const t=indexedDB.open(Qh,U_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Us,{keyPath:Xh})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Us)?e(i):(i.close(),await F_(),e(await wo()))})})}async function Ql(t,e,n){const i=cr(t,!0).put({[Xh]:e,value:n});return new ji(i).toPromise()}async function x_(t,e){const n=cr(t,!1).get(e),i=await new ji(n).toPromise();return i===void 0?null:i.value}function Xl(t,e){const n=cr(t,!0).delete(e);return new ji(n).toPromise()}const B_=800,V_=3;class Yh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>V_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lr._getInstance(M_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await P_(),!this.activeServiceWorker)return;this.sender=new N_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||L_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wo();return await Ql(e,Ms,"1"),await Xl(e,Ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ql(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>x_(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=cr(s,!1).getAll();return new ji(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),B_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yh.type="LOCAL";const q_=Yh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $_(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=At("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",j_().appendChild(i)})}function H_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Vi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t,e){return e?Ft(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends jh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function z_(t){return w_(t.auth,new ya(t),t.bypassAuthState)}function G_(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),v_(n,new ya(t),t.bypassAuthState)}async function K_(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),__(n,new ya(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z_;case"linkViaPopup":case"linkViaRedirect":return K_;case"reauthViaPopup":case"reauthViaRedirect":return G_;default:Rt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=new Vi(2e3,1e4);async function Q_(t,e,n){const i=ar(t);jy(t,e,pa);const s=Jh(i,n);return new dn(i,"signInViaPopup",e,s).executeNotNull()}class dn extends Zh{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,W_.get())};e()}}dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="pendingRedirect",Es=new Map;class Y_ extends Zh{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Es.get(this.auth._key());if(!e){try{const i=await J_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Es.set(this.auth._key(),e)}return this.bypassAuthState||Es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function J_(t,e){const n=tv(e),i=ev(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Z_(t,e){Es.set(t._key(),e)}function ev(t){return Ft(t._redirectPersistence)}function tv(t){return Is(X_,t.config.apiKey,t.name)}async function nv(t,e,n=!1){const i=ar(t),s=Jh(i,e),o=await new Y_(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=10*60*1e3;class sv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!ed(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(At(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yl(e))}saveEventToCache(e){this.cachedEventUids.add(Yl(e)),this.lastProcessedEventTime=Date.now()}}function Yl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ed({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ed(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lv=/^https?/;async function cv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ov(t);for(const n of e)try{if(uv(n))return}catch{}Rt(t,"unauthorized-domain")}function uv(t){const e=vo(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!lv.test(n))return!1;if(av.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=new Vi(3e4,6e4);function Jl(){const t=Ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dv(t){return new Promise((e,n)=>{var i,s,r;function o(){Jl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jl(),n(At(t,"network-request-failed"))},timeout:hv.get()})}if(!((s=(i=Ct().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ct().gapi)===null||r===void 0)&&r.load)o();else{const a=H_("iframefcb");return Ct()[a]=()=>{gapi.load?o():n(At(t,"network-request-failed"))},$_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ks=null,e})}let ks=null;function fv(t){return ks=ks||dv(t),ks}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new Vi(5e3,15e3),pv="__/auth/iframe",mv="emulator/auth/iframe",yv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_v=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vv(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?da(e,mv):`https://${t.config.authDomain}/${pv}`,i={apiKey:e.apiKey,appName:t.name,v:ni},s=_v.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${xi(i).slice(1)}`}async function wv(t){const e=await fv(t),n=Ct().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:vv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yv,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=Ct().setTimeout(()=>{r(o)},gv.get());function l(){Ct().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tv=500,Iv=600,Ev="_blank",kv="http://localhost";class Zl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sv(t,e,n,i=Tv,s=Iv){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bv),{width:i.toString(),height:s.toString(),top:r,left:o}),c=$e().toLowerCase();n&&(a=Lh(c)?Ev:n),Ph(c)&&(e=e||kv,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[h,p])=>`${f}${h}=${p},`,"");if(c_(c)&&a!=="_self")return Av(e||"",a),new Zl(null);const d=window.open(e||"",a,u);z(d,t,"popup-blocked");try{d.focus()}catch{}return new Zl(d)}function Av(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="__/auth/handler",Rv="emulator/auth/handler";function ec(t,e,n,i,s,r){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ni,eventId:s};if(e instanceof pa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",up(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof qi){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Dv(t)}?${xi(a).slice(1)}`}function Dv({config:t}){return t.emulator?da(t,Rv):`https://${t.authDomain}/${Cv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="webStorageSupport";class Nv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kh,this._completeRedirectFn=nv,this._overrideRedirectResult=Z_}async _openPopup(e,n,i,s){var r;Vt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=ec(e,n,i,vo(),s);return Sv(e,o,ma())}async _openRedirect(e,n,i,s){return await this._originValidation(e),O_(ec(e,n,i,vo(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Vt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await wv(e),i=new sv(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kr,{type:Kr},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Kr];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bh()||ga()||or()}}const Ov=Nv;var tc="@firebase/auth",nc="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mv(t){_t(new ut("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{z(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vh(t)},u=new f_(a,l,c);return Hy(u,n),u})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),_t(new ut("auth-internal",e=>{const n=ar(e.getProvider("auth").getImmediate());return(i=>new Pv(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(tc,nc,Lv(t)),Ve(tc,nc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=5*60,Fv=zu("authIdTokenMaxAge")||Uv;let ic=null;const xv=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Fv)return;const s=n==null?void 0:n.token;ic!==s&&(ic=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Bv(t=Bi()){const e=Ht(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$y(t,{popupRedirectResolver:Ov,persistence:[q_,R_,Kh]}),i=zu("authTokenSyncURL");if(i){const r=xv(i);T_(n,r,()=>r(n.currentUser)),b_(n,o=>r(o))}const s=Hu("auth");return s&&g_(n,`http://${s}`),n}Mv("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="type.googleapis.com/google.protobuf.Int64Value",qv="type.googleapis.com/google.protobuf.UInt64Value";function td(t,e){const n={};for(const i in t)t.hasOwnProperty(i)&&(n[i]=e(t[i]));return n}function bo(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>bo(e));if(typeof t=="function"||typeof t=="object")return td(t,e=>bo(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Fs(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Vv:case qv:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Fs(e)):typeof t=="function"||typeof t=="object"?td(t,e=>Fs(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $n extends dt{constructor(e,n,i){super(`${_a}/${e}`,n||""),this.details=i}}function jv(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function $v(t,e){let n=jv(t),i=n,s;try{const r=e&&e.error;if(r){const o=r.status;if(typeof o=="string"){if(!sc[o])return new $n("internal","internal");n=sc[o],i=o}const a=r.message;typeof a=="string"&&(i=a),s=r.details,s!==void 0&&(s=Fs(s))}}catch{}return n==="ok"?null:new $n(n,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),i=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="us-central1";function zv(t){let e=null;return{promise:new Promise((n,i)=>{e=setTimeout(()=>{i(new $n("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Gv{constructor(e,n,i,s,r=To,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Hv(n,i,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(r);this.customDomain=a.origin,this.region=To}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function Kv(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function Wv(t,e,n){return i=>Xv(t,e,i,n||{})}async function Qv(t,e,n,i){n["Content-Type"]="application/json";let s;try{s=await i(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let r=null;try{r=await s.json()}catch{}return{status:s.status,json:r}}function Xv(t,e,n,i){const s=t._url(e);return Yv(t,s,n,i)}async function Yv(t,e,n,i){n=bo(n);const s={data:n},r={},o=await t.contextProvider.getContext();o.authToken&&(r.Authorization="Bearer "+o.authToken),o.messagingToken&&(r["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=o.appCheckToken);const a=i.timeout||7e4,l=zv(a),c=await Promise.race([Qv(e,s,r,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!c)throw new $n("cancelled","Firebase Functions instance was deleted.");const u=$v(c.status,c.json);if(u)throw u;if(!c.json)throw new $n("internal","Response is not valid JSON object.");let d=c.json.data;if(typeof d>"u"&&(d=c.json.result),typeof d>"u")throw new $n("internal","Response is missing data field.");return{data:Fs(d)}}const rc="@firebase/functions",oc="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="auth-internal",Zv="app-check-internal",ew="messaging-internal";function tw(t,e){const n=(i,{instanceIdentifier:s})=>{const r=i.getProvider("app").getImmediate(),o=i.getProvider(Jv),a=i.getProvider(ew),l=i.getProvider(Zv);return new Gv(r,o,a,l,s,t)};_t(new ut(_a,n,"PUBLIC").setMultipleInstances(!0)),Ve(rc,oc,e),Ve(rc,oc,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t=Bi(),e=To){const i=Ht(De(t),_a).getImmediate({identifier:e}),s=sa("functions");return s&&iw(i,...s),i}function iw(t,e,n){Kv(De(t),e,n)}function $i(t,e,n){return Wv(De(t),e,n)}tw(fetch.bind(self));var sw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,va=va||{},G=sw||self;function xs(){}function ur(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Hi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function rw(t){return Object.prototype.hasOwnProperty.call(t,Wr)&&t[Wr]||(t[Wr]=++ow)}var Wr="closure_uid_"+(1e9*Math.random()>>>0),ow=0;function aw(t,e,n){return t.call.apply(t.bind,arguments)}function lw(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=aw:qe=lw,qe.apply(null,arguments)}function ds(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function rn(){this.s=this.s,this.o=this.o}var cw=0;rn.prototype.s=!1;rn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),cw!=0)&&rw(this)};rn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function wa(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ac(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(ur(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var uw=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",xs,e),G.removeEventListener("test",xs,e)}catch{}return t}();function Bs(t){return/^[\s\xa0]*$/.test(t)}var lc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Qr(t,e){return t<e?-1:t>e?1:0}function hr(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Et(t){return hr().indexOf(t)!=-1}function ba(t){return ba[" "](t),t}ba[" "]=xs;function hw(t){var e=gw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var dw=Et("Opera"),Wn=Et("Trident")||Et("MSIE"),id=Et("Edge"),Io=id||Wn,sd=Et("Gecko")&&!(hr().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge"))&&!(Et("Trident")||Et("MSIE"))&&!Et("Edge"),fw=hr().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge");function rd(){var t=G.document;return t?t.documentMode:void 0}var Vs;e:{var Xr="",Yr=function(){var t=hr();if(sd)return/rv:([^\);]+)(\)|;)/.exec(t);if(id)return/Edge\/([\d\.]+)/.exec(t);if(Wn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(fw)return/WebKit\/(\S+)/.exec(t);if(dw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yr&&(Xr=Yr?Yr[1]:""),Wn){var Jr=rd();if(Jr!=null&&Jr>parseFloat(Xr)){Vs=String(Jr);break e}}Vs=Xr}var gw={};function pw(){return hw(function(){let t=0;const e=lc(String(Vs)).split("."),n=lc("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Qr(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Qr(s[2].length==0,r[2].length==0)||Qr(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Eo;if(G.document&&Wn){var cc=rd();Eo=cc||parseInt(Vs,10)||void 0}else Eo=void 0;var mw=Eo;function Ci(t,e){if(je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sd){e:{try{ba(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ci.X.h.call(this)}}Me(Ci,je);var yw={2:"touch",3:"pen",4:"mouse"};Ci.prototype.h=function(){Ci.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zi="closure_listenable_"+(1e6*Math.random()|0),_w=0;function vw(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++_w,this.ba=this.ea=!1}function dr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ta(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function od(t){const e={};for(const n in t)e[n]=t[n];return e}const uc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ad(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<uc.length;r++)n=uc[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function fr(t){this.src=t,this.g={},this.h=0}fr.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=So(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new vw(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function ko(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=nd(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(dr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function So(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Ia="closure_lm_"+(1e6*Math.random()|0),Zr={};function ld(t,e,n,i,s){if(i&&i.once)return ud(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ld(t,e[r],n,i,s);return null}return n=Sa(n),t&&t[zi]?t.N(e,n,Hi(i)?!!i.capture:!!i,s):cd(t,e,n,!1,i,s)}function cd(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Hi(s)?!!s.capture:!!s,a=ka(t);if(a||(t[Ia]=a=new fr(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=ww(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)uw||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(dd(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ww(){function t(n){return e.call(t.src,t.listener,n)}const e=bw;return t}function ud(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ud(t,e[r],n,i,s);return null}return n=Sa(n),t&&t[zi]?t.O(e,n,Hi(i)?!!i.capture:!!i,s):cd(t,e,n,!0,i,s)}function hd(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)hd(t,e[r],n,i,s);else i=Hi(i)?!!i.capture:!!i,n=Sa(n),t&&t[zi]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=So(r,n,i,s),-1<n&&(dr(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ka(t))&&(e=t.g[e.toString()],t=-1,e&&(t=So(e,n,i,s)),(n=-1<t?e[t]:null)&&Ea(n))}function Ea(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[zi])ko(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(dd(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ka(e))?(ko(n,t),n.h==0&&(n.src=null,e[Ia]=null)):dr(t)}}}function dd(t){return t in Zr?Zr[t]:Zr[t]="on"+t}function bw(t,e){if(t.ba)t=!0;else{e=new Ci(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Ea(t),t=n.call(i,e)}return t}function ka(t){return t=t[Ia],t instanceof fr?t:null}var eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sa(t){return typeof t=="function"?t:(t[eo]||(t[eo]=function(e){return t.handleEvent(e)}),t[eo])}function Re(){rn.call(this),this.i=new fr(this),this.P=this,this.I=null}Me(Re,rn);Re.prototype[zi]=!0;Re.prototype.removeEventListener=function(t,e,n,i){hd(this,t,e,n,i)};function Pe(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new je(e,t);else if(e instanceof je)e.target=e.target||t;else{var s=e;e=new je(i,t),ad(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=fs(o,i,!0,e)&&s}if(o=e.g=t,s=fs(o,i,!0,e)&&s,s=fs(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=fs(o,i,!1,e)&&s}Re.prototype.M=function(){if(Re.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)dr(n[i]);delete t.g[e],t.h--}}this.I=null};Re.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Re.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function fs(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ko(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Aa=G.JSON.stringify;function Tw(){var t=pd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Iw{constructor(){this.h=this.g=null}add(e,n){const i=fd.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var fd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Ew,t=>t.reset());class Ew{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kw(t){G.setTimeout(()=>{throw t},0)}function gd(t,e){Ao||Sw(),Co||(Ao(),Co=!0),pd.add(t,e)}var Ao;function Sw(){var t=G.Promise.resolve(void 0);Ao=function(){t.then(Aw)}}var Co=!1,pd=new Iw;function Aw(){for(var t;t=Tw();){try{t.h.call(t.g)}catch(n){kw(n)}var e=fd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Co=!1}function gr(t,e){Re.call(this),this.h=t||1,this.g=e||G,this.j=qe(this.lb,this),this.l=Date.now()}Me(gr,Re);U=gr.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Pe(this,"tick"),this.ca&&(Ca(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ca(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){gr.X.M.call(this),Ca(this),delete this.g};function Ra(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function md(t){t.g=Ra(()=>{t.g=null,t.i&&(t.i=!1,md(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Cw extends rn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:md(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(t){rn.call(this),this.h=t,this.g={}}Me(Ri,rn);var hc=[];function yd(t,e,n,i){Array.isArray(n)||(n&&(hc[0]=n.toString()),n=hc);for(var s=0;s<n.length;s++){var r=ld(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function _d(t){Ta(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ea(e)},t),t.g={}}Ri.prototype.M=function(){Ri.X.M.call(this),_d(this)};Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pr(){this.g=!0}pr.prototype.Aa=function(){this.g=!1};function Rw(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Dw(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Vn(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ow(t,n)+(i?" "+i:"")})}function Nw(t,e){t.info(function(){return"TIMEOUT: "+e})}pr.prototype.info=function(){};function Ow(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Aa(n)}catch{return e}}var On={},dc=null;function mr(){return dc=dc||new Re}On.Pa="serverreachability";function vd(t){je.call(this,On.Pa,t)}Me(vd,je);function Di(t){const e=mr();Pe(e,new vd(e))}On.STAT_EVENT="statevent";function wd(t,e){je.call(this,On.STAT_EVENT,t),this.stat=e}Me(wd,je);function Ge(t){const e=mr();Pe(e,new wd(e,t))}On.Qa="timingevent";function bd(t,e){je.call(this,On.Qa,t),this.size=e}Me(bd,je);function Gi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var yr={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Td={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Da(){}Da.prototype.h=null;function fc(t){return t.h||(t.h=t.i())}function Id(){}var Ki={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Na(){je.call(this,"d")}Me(Na,je);function Oa(){je.call(this,"c")}Me(Oa,je);var Ro;function _r(){}Me(_r,Da);_r.prototype.g=function(){return new XMLHttpRequest};_r.prototype.i=function(){return{}};Ro=new _r;function Wi(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Ri(this),this.O=Pw,t=Io?125:void 0,this.T=new gr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ed}function Ed(){this.i=null,this.g="",this.h=!1}var Pw=45e3,Do={},qs={};U=Wi.prototype;U.setTimeout=function(t){this.O=t};function No(t,e,n){t.K=1,t.v=wr(qt(e)),t.s=n,t.P=!0,kd(t,null)}function kd(t,e){t.F=Date.now(),Qi(t),t.A=qt(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Pd(n.i,"t",i),t.C=0,n=t.l.H,t.h=new Ed,t.g=ef(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Cw(qe(t.La,t,t.g),t.N)),yd(t.S,t.g,"readystatechange",t.ib),e=t.H?od(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Di(),Rw(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&xt(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=xt(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(u!=3||Io||this.g&&(this.h.h||this.g.fa()||yc(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?Di(3):Di(2)),vr(this);var n=this.g.aa();this.Y=n;t:if(Sd(this)){var i=yc(this.g);t="";var s=i.length,r=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),mi(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Dw(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bs(a)){var c=a;break t}}c=null}if(n=c)Vn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Oo(this,n);else{this.i=!1,this.o=3,Ge(12),fn(this),mi(this);break e}}this.P?(Ad(this,u,o),Io&&this.i&&u==3&&(yd(this.S,this.T,"tick",this.hb),this.T.start())):(Vn(this.j,this.m,o,null),Oo(this,o)),u==4&&fn(this),this.i&&!this.I&&(u==4?Xd(this.l,this):(this.i=!1,Qi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),fn(this),mi(this)}}}catch{}finally{}};function Sd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ad(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=Lw(t,n),s==qs){e==4&&(t.o=4,Ge(14),i=!1),Vn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Do){t.o=4,Ge(15),Vn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Vn(t.j,t.m,s,null),Oo(t,s);Sd(t)&&s!=qs&&s!=Do&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ge(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ba(e),e.K=!0,Ge(11))):(Vn(t.j,t.m,n,"[Invalid Chunked Response]"),fn(t),mi(t))}U.hb=function(){if(this.g){var t=xt(this.g),e=this.g.fa();this.C<e.length&&(vr(this),Ad(this,t,e),this.i&&t!=4&&Qi(this))}};function Lw(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?qs:(n=Number(e.substring(n,i)),isNaN(n)?Do:(i+=1,i+n>e.length?qs:(e=e.substr(i,n),t.C=i+n,e)))}U.cancel=function(){this.I=!0,fn(this)};function Qi(t){t.V=Date.now()+t.O,Cd(t,t.O)}function Cd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Gi(qe(t.gb,t),e)}function vr(t){t.B&&(G.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Nw(this.j,this.A),this.K!=2&&(Di(),Ge(17)),fn(this),this.o=2,mi(this)):Cd(this,this.V-t)};function mi(t){t.l.G==0||t.I||Xd(t.l,t)}function fn(t){vr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ca(t.T),_d(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Oo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Po(n.h,t))){if(!t.J&&Po(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Hs(n),Ir(n);else break e;xa(n),Ge(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Gi(qe(n.cb,n),6e3));if(1>=Ud(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else gn(n,11)}else if((t.J||n.g==t)&&Hs(n),!Bs(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const d=c[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const p=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Pa(r,r.h),r.h=null))}if(i.D){const y=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.za=y,ge(i.F,i.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Zd(i,i.H?i.ka:null,i.V),o.J){Fd(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(vr(a),Qi(a)),i.g=o}else Wd(i);0<n.i.length&&Er(n)}else c[0]!="stop"&&c[0]!="close"||gn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?gn(n,7):Fa(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Di(4)}catch{}}function Mw(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ur(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Uw(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ur(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Rd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ur(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Uw(t),i=Mw(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var Dd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function yn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof yn){this.h=e!==void 0?e:t.h,js(this,t.j),this.s=t.s,this.g=t.g,$s(this,t.m),this.l=t.l,e=t.i;var n=new Ni;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),gc(this,n),this.o=t.o}else t&&(n=String(t).match(Dd))?(this.h=!!e,js(this,n[1]||"",!0),this.s=hi(n[2]||""),this.g=hi(n[3]||"",!0),$s(this,n[4]),this.l=hi(n[5]||"",!0),gc(this,n[6]||"",!0),this.o=hi(n[7]||"")):(this.h=!!e,this.i=new Ni(null,this.h))}yn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(di(e,pc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(di(e,pc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(di(n,n.charAt(0)=="/"?Vw:Bw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",di(n,jw)),t.join("")};function qt(t){return new yn(t)}function js(t,e,n){t.j=n?hi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $s(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gc(t,e,n){e instanceof Ni?(t.i=e,$w(t.i,t.h)):(n||(e=di(e,qw)),t.i=new Ni(e,t.h))}function ge(t,e,n){t.i.set(e,n)}function wr(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function di(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,xw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pc=/[#\/\?@]/g,Bw=/[#\?:]/g,Vw=/[#\?]/g,qw=/[#\?@]/g,jw=/#/g;function Ni(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function on(t){t.g||(t.g=new Map,t.h=0,t.i&&Fw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Ni.prototype;U.add=function(t,e){on(this),this.i=null,t=ii(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Nd(t,e){on(t),e=ii(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Od(t,e){return on(t),e=ii(t,e),t.g.has(e)}U.forEach=function(t,e){on(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};U.oa=function(){on(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};U.W=function(t){on(this);let e=[];if(typeof t=="string")Od(this,t)&&(e=e.concat(this.g.get(ii(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return on(this),this.i=null,t=ii(this,t),Od(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Pd(t,e,n){Nd(t,e),0<n.length&&(t.i=null,t.g.set(ii(t,e),wa(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ii(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $w(t,e){e&&!t.j&&(on(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Nd(this,i),Pd(this,s,n))},t)),t.j=e}var Hw=class{constructor(t,e){this.h=t,this.g=e}};function Ld(t){this.l=t||zw,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ga&&G.g.Ga()&&G.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zw=10;function Md(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ud(t){return t.h?1:t.g?t.g.size:0}function Po(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Pa(t,e){t.g?t.g.add(e):t.h=e}function Fd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ld.prototype.cancel=function(){if(this.i=xd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wa(t.i)}function La(){}La.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};La.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function Gw(){this.g=new La}function Kw(t,e,n){const i=n||"";try{Rd(t,function(s,r){let o=s;Hi(s)&&(o=Aa(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Ww(t,e){const n=new pr;if(G.Image){const i=new Image;i.onload=ds(gs,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ds(gs,n,i,"TestLoadImage: error",!1,e),i.onabort=ds(gs,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ds(gs,n,i,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function gs(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Xi(t){this.l=t.ac||null,this.j=t.jb||!1}Me(Xi,Da);Xi.prototype.g=function(){return new br(this.l,this.j)};Xi.prototype.i=function(t){return function(){return t}}({});function br(t,e){Re.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ma,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(br,Re);var Ma=0;U=br.prototype;U.open=function(t,e){if(this.readyState!=Ma)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Oi(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yi(this)),this.readyState=Ma};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Oi(this)),this.g&&(this.readyState=3,Oi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bd(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Bd(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yi(this):Oi(this),this.readyState==3&&Bd(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Yi(this))};U.Ua=function(t){this.g&&(this.response=t,Yi(this))};U.ga=function(){this.g&&Yi(this)};function Yi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Oi(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Oi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Qw=G.JSON.parse;function _e(t){Re.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vd,this.K=this.L=!1}Me(_e,Re);var Vd="",Xw=/^https?$/i,Yw=["POST","PUT"];U=_e.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ro.g(),this.C=this.u?fc(this.u):fc(Ro),this.g.onreadystatechange=qe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){mc(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=G.FormData&&t instanceof G.FormData,!(0<=nd(Yw,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$d(this),0<this.B&&((this.K=Jw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.qa,this)):this.A=Ra(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){mc(this,r)}};function Jw(t){return Wn&&pw()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof va<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pe(this,"timeout"),this.abort(8))};function mc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qd(t),Tr(t)}function qd(t){t.D||(t.D=!0,Pe(t,"complete"),Pe(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pe(this,"complete"),Pe(this,"abort"),Tr(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tr(this,!0)),_e.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?jd(this):this.fb())};U.fb=function(){jd(this)};function jd(t){if(t.h&&typeof va<"u"&&(!t.C[1]||xt(t)!=4||t.aa()!=2)){if(t.v&&xt(t)==4)Ra(t.Ha,0,t);else if(Pe(t,"readystatechange"),xt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(Dd)[1]||null;if(!s&&G.self&&G.self.location){var r=G.self.location.protocol;s=r.substr(0,r.length-1)}i=!Xw.test(s?s.toLowerCase():"")}n=i}if(n)Pe(t,"complete"),Pe(t,"success");else{t.m=6;try{var o=2<xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",qd(t)}}finally{Tr(t)}}}}function Tr(t,e){if(t.g){$d(t);const n=t.g,i=t.C[0]?xs:null;t.g=null,t.C=null,e||Pe(t,"ready");try{n.onreadystatechange=i}catch{}}}function $d(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function xt(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Qw(e)}};function yc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Vd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Hd(t){let e="";return Ta(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Ua(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Hd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function li(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zd(t){this.Ca=0,this.i=[],this.j=new pr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=li("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=li("baseRetryDelayMs",5e3,t),this.bb=li("retryDelaySeedMs",1e4,t),this.$a=li("forwardChannelMaxRetries",2,t),this.ta=li("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ld(t&&t.concurrentRequestLimit),this.Fa=new Gw,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=zd.prototype;U.ma=8;U.G=1;function Fa(t){if(Gd(t),t.G==3){var e=t.U++,n=qt(t.F);ge(n,"SID",t.I),ge(n,"RID",e),ge(n,"TYPE","terminate"),Ji(t,n),e=new Wi(t,t.j,e,void 0),e.K=2,e.v=wr(qt(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=ef(e.l,null),e.g.da(e.v)),e.F=Date.now(),Qi(e)}Jd(t)}function Ir(t){t.g&&(Ba(t),t.g.cancel(),t.g=null)}function Gd(t){Ir(t),t.u&&(G.clearTimeout(t.u),t.u=null),Hs(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Er(t){Md(t.h)||t.m||(t.m=!0,gd(t.Ja,t),t.C=0)}function Zw(t,e){return Ud(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Gi(qe(t.Ja,t,e),Yd(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Wi(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=od(r),ad(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Kd(this,s,e),n=qt(this.F),ge(n,"RID",t),ge(n,"CVER",22),this.D&&ge(n,"X-HTTP-Session-Id",this.D),Ji(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Hd(r)))+"&"+e:this.o&&Ua(n,this.o,r)),Pa(this.h,s),this.Ya&&ge(n,"TYPE","init"),this.O?(ge(n,"$req",e),ge(n,"SID","null"),s.Z=!0,No(s,n,null)):No(s,n,e),this.G=2}}else this.G==3&&(t?_c(this,t):this.i.length==0||Md(this.h)||_c(this))};function _c(t,e){var n;e?n=e.m:n=t.U++;const i=qt(t.F);ge(i,"SID",t.I),ge(i,"RID",n),ge(i,"AID",t.T),Ji(t,i),t.o&&t.s&&Ua(i,t.o,t.s),n=new Wi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Kd(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Pa(t.h,n),No(n,i,e)}function Ji(t,e){t.ia&&Ta(t.ia,function(n,i){ge(e,i,n)}),t.l&&Rd({},function(n,i){ge(e,i,n)})}function Kd(t,e,n){n=Math.min(t.i.length,n);var i=t.l?qe(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{Kw(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function Wd(t){t.g||t.u||(t.Z=1,gd(t.Ia,t),t.A=0)}function xa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Gi(qe(t.Ia,t),Yd(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,Qd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Gi(qe(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ge(10),Ir(this),Qd(this))};function Ba(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Qd(t){t.g=new Wi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=qt(t.sa);ge(e,"RID","rpc"),ge(e,"SID",t.I),ge(e,"CI",t.L?"0":"1"),ge(e,"AID",t.T),ge(e,"TYPE","xmlhttp"),Ji(t,e),t.o&&t.s&&Ua(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=wr(qt(e)),n.s=null,n.P=!0,kd(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Ir(this),xa(this),Ge(19))};function Hs(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Xd(t,e){var n=null;if(t.g==e){Hs(t),Ba(t),t.g=null;var i=2}else if(Po(t.h,e))n=e.D,Fd(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=mr(),Pe(i,new bd(i,n)),Er(t)}else Wd(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&Zw(t,e)||i==2&&xa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:gn(t,5);break;case 4:gn(t,10);break;case 3:gn(t,6);break;default:gn(t,2)}}}function Yd(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function gn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=qe(t.kb,t);n||(n=new yn("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||js(n,"https"),wr(n)),Ww(n.toString(),i)}else Ge(2);t.G=0,t.l&&t.l.va(e),Jd(t),Gd(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function Jd(t){if(t.G=0,t.la=[],t.l){const e=xd(t.h);(e.length!=0||t.i.length!=0)&&(ac(t.la,e),ac(t.la,t.i),t.h.i.length=0,wa(t.i),t.i.length=0),t.l.ua()}}function Zd(t,e,n){var i=n instanceof yn?qt(n):new yn(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),$s(i,i.m);else{var s=G.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new yn(null,void 0);i&&js(r,i),e&&(r.g=e),s&&$s(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&ge(i,n,e),ge(i,"VER",t.ma),Ji(t,i),i}function ef(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new _e(new Xi({jb:!0})):new _e(t.ra),e.Ka(t.H),e}function tf(){}U=tf.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function zs(){if(Wn&&!(10<=Number(mw)))throw Error("Environmental error: no available transport.")}zs.prototype.g=function(t,e){return new ht(t,e)};function ht(t,e){Re.call(this),this.g=new zd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Bs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new si(this)}Me(ht,Re);ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ge(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Zd(t,null,t.V),Er(t)};ht.prototype.close=function(){Fa(this.g)};ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Aa(t),t=n);e.i.push(new Hw(e.ab++,t)),e.G==3&&Er(e)};ht.prototype.M=function(){this.g.l=null,delete this.j,Fa(this.g),delete this.g,ht.X.M.call(this)};function nf(t){Na.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(nf,Na);function sf(){Oa.call(this),this.status=1}Me(sf,Oa);function si(t){this.g=t}Me(si,tf);si.prototype.xa=function(){Pe(this.g,"a")};si.prototype.wa=function(t){Pe(this.g,new nf(t))};si.prototype.va=function(t){Pe(this.g,new sf)};si.prototype.ua=function(){Pe(this.g,"b")};zs.prototype.createWebChannel=zs.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;yr.NO_ERROR=0;yr.TIMEOUT=8;yr.HTTP_ERROR=6;Td.COMPLETE="complete";Id.EventType=Ki;Ki.OPEN="a";Ki.CLOSE="b";Ki.ERROR="c";Ki.MESSAGE="d";Re.prototype.listen=Re.prototype.N;_e.prototype.listenOnce=_e.prototype.O;_e.prototype.getLastError=_e.prototype.Oa;_e.prototype.getLastErrorCode=_e.prototype.Ea;_e.prototype.getStatus=_e.prototype.aa;_e.prototype.getResponseJson=_e.prototype.Sa;_e.prototype.getResponseText=_e.prototype.fa;_e.prototype.send=_e.prototype.da;_e.prototype.setWithCredentials=_e.prototype.Ka;var e0=function(){return new zs},t0=function(){return mr()},to=yr,n0=Td,i0=On,vc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},s0=Xi,ps=Id,r0=_e;const wc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new nr("@firebase/firestore");function bc(){return Sn.logLevel}function x(t,...e){if(Sn.logLevel<=oe.DEBUG){const n=e.map(Va);Sn.debug(`Firestore (${ri}): ${t}`,...n)}}function jt(t,...e){if(Sn.logLevel<=oe.ERROR){const n=e.map(Va);Sn.error(`Firestore (${ri}): ${t}`,...n)}}function Lo(t,...e){if(Sn.logLevel<=oe.WARN){const n=e.map(Va);Sn.warn(`Firestore (${ri}): ${t}`,...n)}}function Va(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ri}) INTERNAL ASSERTION FAILED: `+t;throw jt(e),new Error(e)}function Ie(t,e){t||Y()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends dt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class o0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class a0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class l0{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ie(typeof i.accessToken=="string"),new rf(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new Fe(e)}}class c0{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ie(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class u0{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new c0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class d0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=r=>{r.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.A=n.token,new h0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=f0(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function he(t,e){return t<e?-1:t>e?1:0}function Qn(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new it(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new it(0,0))}static max(){return new X(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n,i){n===void 0?n=0:n>e.length&&Y(),i===void 0?i=e.length-n:i>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pi?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends Pi{construct(e,n,i){return new ye(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new H(R.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const g0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Pi{construct(e,n,i){return new nt(e,n,i)}static isValidIdentifier(e){return g0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new H(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new H(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ye.fromString(e))}static fromName(e){return new q(ye.fromString(e).popFirst(5))}static empty(){return new q(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ye(e.slice()))}}function p0(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(i===1e9?new it(n+1,0):new it(n,i));return new tn(s,q.empty(),e)}function m0(t){return new tn(t.readTime,t.key,-1)}class tn{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new tn(X.min(),q.empty(),-1)}static max(){return new tn(X.max(),q.empty(),-1)}}function y0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class v0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==_0)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,i)=>{n(e)})}static reject(e){return new b((n,i)=>{i(e)})}static waitFor(e){return new b((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=b.resolve(!1);for(const i of e)n=n.next(s=>s?b.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new b((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new b((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function Zi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ut(i),this.ct=i=>n.writeSequenceNumber(i))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ja.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Li&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function b0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){return t==null}function Mo(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new He(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const T0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=T0.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xn(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lf(t){const e=t.mapValue.fields.__previous_value__;return af(e)?lf(e):e}function Mi(t){const e=nn(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function An(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?af(t)?4:I0(t)?9007199254740991:10:Y()}function Dt(t,e){if(t===e)return!0;const n=An(t);if(n!==An(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mi(t).isEqual(Mi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=nn(i.timestampValue),o=nn(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Xn(i.bytesValue).isEqual(Xn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Te(i.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(i.geoPointValue.longitude)===Te(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Te(i.integerValue)===Te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Te(i.doubleValue),o=Te(s.doubleValue);return r===o?Mo(r)===Mo(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Qn(t.arrayValue.values||[],e.arrayValue.values||[],Dt);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Tc(r)!==Tc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Dt(r[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Ui(t,e){return(t.values||[]).find(n=>Dt(n,e))!==void 0}function Yn(t,e){if(t===e)return 0;const n=An(t),i=An(e);if(n!==i)return he(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=Te(s.integerValue||s.doubleValue),a=Te(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ic(t.timestampValue,e.timestampValue);case 4:return Ic(Mi(t),Mi(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Xn(s),a=Xn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=he(o[l],a[l]);if(c!==0)return c}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=he(Te(s.latitude),Te(r.latitude));return o!==0?o:he(Te(s.longitude),Te(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Yn(o[l],a[l]);if(c)return c}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===ms.mapValue&&r===ms.mapValue)return 0;if(s===ms.mapValue)return 1;if(r===ms.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=he(a[u],c[u]);if(d!==0)return d;const f=Yn(o[a[u]],l[c[u]]);if(f!==0)return f}return he(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Ic(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=nn(t),i=nn(e),s=he(n.seconds,i.seconds);return s!==0?s:he(n.nanos,i.nanos)}function Jn(t){return Uo(t)}function Uo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=nn(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Xn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Uo(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Uo(i.fields[a])}`;return r+"}"}(t.mapValue):Y();var e,n}function Fo(t){return!!t&&"integerValue"in t}function $a(t){return!!t&&"arrayValue"in t}function Ec(t){return!!t&&"nullValue"in t}function kc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function no(t){return!!t&&"mapValue"in t}function yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=yi(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function I0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.position=e,this.inclusive=n}}function Sc(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=q.comparator(q.fromName(o.referenceValue),n.key):i=Yn(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ac(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{}class ke extends cf{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new k0(e,n,i):n==="array-contains"?new C0(e,i):n==="in"?new R0(e,i):n==="not-in"?new D0(e,i):n==="array-contains-any"?new N0(e,i):new ke(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new S0(e,i):new A0(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yn(n,this.value)):n!==null&&An(this.value)===An(n)&&this.matchesComparison(Yn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Nt extends cf{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Nt(e,n)}matches(e){return uf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function uf(t){return t.op==="and"}function hf(t){return E0(t)&&uf(t)}function E0(t){for(const e of t.filters)if(e instanceof Nt)return!1;return!0}function xo(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+Jn(t.value);if(hf(t))return t.filters.map(e=>xo(e)).join(",");{const e=t.filters.map(n=>xo(n)).join(",");return`${t.op}(${e})`}}function df(t,e){return t instanceof ke?function(n,i){return i instanceof ke&&n.op===i.op&&n.field.isEqual(i.field)&&Dt(n.value,i.value)}(t,e):t instanceof Nt?function(n,i){return i instanceof Nt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&df(r,i.filters[o]),!0):!1}(t,e):void Y()}function ff(t){return t instanceof ke?function(e){return`${e.field.canonicalString()} ${e.op} ${Jn(e.value)}`}(t):t instanceof Nt?function(e){return e.op.toString()+" {"+e.getFilters().map(ff).join(" ,")+"}"}(t):"Filter"}class k0 extends ke{constructor(e,n,i){super(e,n,i),this.key=q.fromName(i.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class S0 extends ke{constructor(e,n){super(e,"in",n),this.keys=gf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class A0 extends ke{constructor(e,n){super(e,"not-in",n),this.keys=gf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>q.fromName(i.referenceValue))}class C0 extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $a(n)&&Ui(n.arrayValue,this.value)}}class R0 extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ui(this.value.arrayValue,n)}}class D0 extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ui(this.value.arrayValue,n)}}class N0 extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$a(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ui(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n="asc"){this.field=e,this.dir=n}}function O0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ys(this.root,e,this.comparator,!0)}}class ys{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Oe.RED,this.left=s??Oe.EMPTY,this.right=r??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Oe(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Oe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cc(this.data.getIterator())}getIteratorFrom(e){return new Cc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Se(this.comparator);return n.data=e,n}}class Cc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new Se(nt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qn(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!no(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(n)}setAll(e){let n=nt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=yi(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());no(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];no(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){kr(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new kt(yi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xe(e,0,X.min(),X.min(),X.min(),kt.empty(),0)}static newFoundDocument(e,n,i,s){return new xe(e,1,n,X.min(),i,s,0)}static newNoDocument(e,n){return new xe(e,2,n,X.min(),X.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,X.min(),X.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Rc(t,e=null,n=[],i=[],s=null,r=null,o=null){return new P0(t,e,n,i,s,r,o)}function Ha(t){const e=se(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>xo(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Sr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Jn(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Jn(i)).join(",")),e.ft=n}return e.ft}function za(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!O0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!df(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ac(t.startAt,e.startAt)&&Ac(t.endAt,e.endAt)}function Bo(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function L0(t,e,n,i,s,r,o,a){return new Ar(t,e,n,i,s,r,o,a)}function Ga(t){return new Ar(t)}function Dc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function M0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function U0(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function F0(t){return t.collectionGroup!==null}function Hn(t){const e=se(t);if(e.dt===null){e.dt=[];const n=U0(e),i=M0(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new _i(n)),e.dt.push(new _i(nt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new _i(nt.keyField(),r))}}}return e.dt}function $t(t){const e=se(t);if(!e._t)if(e.limitType==="F")e._t=Rc(e.path,e.collectionGroup,Hn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Hn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new _i(r.field,o))}const i=e.endAt?new Gs(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Gs(e.startAt.position,e.startAt.inclusive):null;e._t=Rc(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e._t}function Vo(t,e,n){return new Ar(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cr(t,e){return za($t(t),$t(e))&&t.limitType===e.limitType}function pf(t){return`${Ha($t(t))}|lt:${t.limitType}`}function qo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>ff(i)).join(", ")}]`),Sr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Jn(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Jn(i)).join(",")),`Target(${n})`}($t(t))}; limitType=${t.limitType})`}function Rr(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):q.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of Hn(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Sc(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,Hn(n),i)||n.endAt&&!function(s,r,o){const a=Sc(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,Hn(n),i))}(t,e)}function x0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mf(t){return(e,n)=>{let i=!1;for(const s of Hn(t)){const r=B0(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function B0(t,e,n){const i=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Yn(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mo(e)?"-0":e}}function q0(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this._=void 0}}function j0(t,e,n){return t instanceof jo?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Ks?yf(t,e):t instanceof Ws?_f(t,e):function(i,s){const r=H0(i,s),o=Nc(r)+Nc(i.gt);return Fo(r)&&Fo(i.gt)?q0(o):V0(i.yt,o)}(t,e)}function $0(t,e,n){return t instanceof Ks?yf(t,e):t instanceof Ws?_f(t,e):n}function H0(t,e){return t instanceof $o?Fo(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class jo extends Dr{}class Ks extends Dr{constructor(e){super(),this.elements=e}}function yf(t,e){const n=vf(e);for(const i of t.elements)n.some(s=>Dt(s,i))||n.push(i);return{arrayValue:{values:n}}}class Ws extends Dr{constructor(e){super(),this.elements=e}}function _f(t,e){let n=vf(e);for(const i of t.elements)n=n.filter(s=>!Dt(s,i));return{arrayValue:{values:n}}}class $o extends Dr{constructor(e,n){super(),this.yt=e,this.gt=n}}function Nc(t){return Te(t.integerValue||t.doubleValue)}function vf(t){return $a(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function z0(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Ks&&i instanceof Ks||n instanceof Ws&&i instanceof Ws?Qn(n.elements,i.elements,Dt):n instanceof $o&&i instanceof $o?Dt(n.gt,i.gt):n instanceof jo&&i instanceof jo}(t.transform,e.transform)}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ss(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ka{}function wf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new K0(t.key,vn.none()):new Wa(t.key,t.data,vn.none());{const n=t.data,i=kt.empty();let s=new Se(nt.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Nr(t.key,i,new Xt(s.toArray()),vn.none())}}function G0(t,e,n){t instanceof Wa?function(i,s,r){const o=i.value.clone(),a=Pc(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(i,s,r){if(!Ss(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Pc(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(bf(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function vi(t,e,n,i){return t instanceof Wa?function(s,r,o,a){if(!Ss(s.precondition,r))return o;const l=s.value.clone(),c=Lc(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Nr?function(s,r,o,a){if(!Ss(s.precondition,r))return o;const l=Lc(s.fieldTransforms,a,r),c=r.data;return c.setAll(bf(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return Ss(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Oc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Qn(n,i,(s,r)=>z0(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wa extends Ka{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Nr extends Ka{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function bf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Pc(t,e,n){const i=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,$0(o,a,n[s]))}return i}function Lc(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,j0(r,o,e))}return i}class K0 extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,Z;function Tf(t){if(t===void 0)return jt("GRPC error has no .code"),R.UNKNOWN;switch(t){case be.OK:return R.OK;case be.CANCELLED:return R.CANCELLED;case be.UNKNOWN:return R.UNKNOWN;case be.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case be.INTERNAL:return R.INTERNAL;case be.UNAVAILABLE:return R.UNAVAILABLE;case be.UNAUTHENTICATED:return R.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case be.NOT_FOUND:return R.NOT_FOUND;case be.ALREADY_EXISTS:return R.ALREADY_EXISTS;case be.PERMISSION_DENIED:return R.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case be.ABORTED:return R.ABORTED;case be.OUT_OF_RANGE:return R.OUT_OF_RANGE;case be.UNIMPLEMENTED:return R.UNIMPLEMENTED;case be.DATA_LOSS:return R.DATA_LOSS;default:return Y()}}(Z=be||(be={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return b0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=new Le(q.comparator);function sn(){return Q0}const If=new Le(q.comparator);function fi(...t){let e=If;for(const n of t)e=e.insert(n.key,n);return e}function X0(t){let e=If;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function pn(){return wi()}function Ef(){return wi()}function wi(){return new oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Y0=new Se(q.comparator);function te(...t){let e=Y0;for(const n of t)e=e.add(n);return e}const J0=new Se(he);function kf(){return J0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,es.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Or(X.min(),s,kf(),sn(),te())}}class es{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new es(i,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n,i,s){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=s}}class Sf{constructor(e,n){this.targetId=e,this.Et=n}}class Af{constructor(e,n,i=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Mc{constructor(){this.At=0,this.Rt=Fc(),this.bt=He.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=te(),n=te(),i=te();return this.Rt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Y()}}),new es(this.bt,this.Pt,e,n,i)}xt(){this.vt=!1,this.Rt=Fc()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Z0{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=sn(),this.qt=Uc(),this.Ut=new Se(he)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const i=this.Wt(n);switch(e.state){case 0:this.zt(n)&&i.Dt(e.resumeToken);break;case 1:i.Mt(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.Mt(),i.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(i.Ft(),i.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,s)=>{this.zt(s)&&n(s)})}Jt(e){const n=e.targetId,i=e.Et.count,s=this.Yt(n);if(s){const r=s.target;if(Bo(r))if(i===0){const o=new q(r.path);this.Qt(n,o,xe.newNoDocument(o,X.min()))}else Ie(i===1);else this.Xt(n)!==i&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Bo(a.target)){const l=new q(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,xe.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let i=te();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const s=new Or(e,n,this.Ut,this.Lt,i);return this.Lt=sn(),this.qt=Uc(),this.Ut=new Se(he),s}Gt(e,n){if(!this.zt(e))return;const i=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.zt(e))return;const s=this.Wt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Mc,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Se(he),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Mc),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Uc(){return new Le(q.comparator)}function Fc(){return new Le(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),tb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),nb=(()=>({and:"AND",or:"OR"}))();class ib{constructor(e,n){this.databaseId=e,this.wt=n}}function sb(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rb(t,e){return t.wt?e.toBase64():e.toUint8Array()}function zn(t){return Ie(!!t),X.fromTimestamp(function(e){const n=nn(e);return new it(n.seconds,n.nanos)}(t))}function ob(t,e){return function(n){return new ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Cf(t){const e=ye.fromString(t);return Ie(Of(e)),e}function io(t,e){const n=Cf(e);if(n.get(1)!==t.databaseId.projectId)throw new H(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Rf(n))}function Ho(t,e){return ob(t.databaseId,e)}function ab(t){const e=Cf(t);return e.length===4?ye.emptyPath():Rf(e)}function xc(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rf(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lb(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.wt?(Ie(c===void 0||typeof c=="string"),He.fromBase64String(c||"")):(Ie(c===void 0||c instanceof Uint8Array),He.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?R.UNKNOWN:Tf(l.code);return new H(c,l.message||"")}(o);n=new Af(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=io(t,i.document.name),r=zn(i.document.updateTime),o=i.document.createTime?zn(i.document.createTime):X.min(),a=new kt({mapValue:{fields:i.document.fields}}),l=xe.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new As(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=io(t,i.document),r=i.readTime?zn(i.readTime):X.min(),o=xe.newNoDocument(s,r),a=i.removedTargetIds||[];n=new As([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=io(t,i.document),r=i.removedTargetIds||[];n=new As([],r,s,null)}else{if(!("filter"in e))return Y();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new W0(s),o=i.targetId;n=new Sf(o,r)}}return n}function cb(t,e){return{documents:[Ho(t,e.path)]}}function ub(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Ho(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ho(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return Nf(Nt.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:xn(u.field),direction:fb(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.wt||Sr(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function hb(t){let e=ab(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Ie(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const d=Df(u);return d instanceof Nt&&hf(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new _i(Bn(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,Sr(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,f=u.values||[];return new Gs(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,f=u.values||[];return new Gs(f,d)}(n.endAt)),L0(e,s,o,r,a,"F",l,c)}function db(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Df(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Bn(e.unaryFilter.field);return ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Bn(e.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bn(e.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Bn(e.unaryFilter.field);return ke.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return ke.create(Bn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Nt.create(e.compositeFilter.filters.map(n=>Df(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function fb(t){return eb[t]}function gb(t){return tb[t]}function pb(t){return nb[t]}function xn(t){return{fieldPath:t.canonicalString()}}function Bn(t){return nt.fromServerFormat(t.fieldPath)}function Nf(t){return t instanceof ke?function(e){if(e.op==="=="){if(kc(e.value))return{unaryFilter:{field:xn(e.field),op:"IS_NAN"}};if(Ec(e.value))return{unaryFilter:{field:xn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(kc(e.value))return{unaryFilter:{field:xn(e.field),op:"IS_NOT_NAN"}};if(Ec(e.value))return{unaryFilter:{field:xn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xn(e.field),op:gb(e.op),value:e.value}}}(t):t instanceof Nt?function(e){const n=e.getFilters().map(i=>Nf(i));return n.length===1?n[0]:{compositeFilter:{op:pb(e.op),filters:n}}}(t):Y()}function Of(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&G0(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=vi(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=vi(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Ef();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=wf(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Qn(this.mutations,e.mutations,(n,i)=>Oc(n,i))&&Qn(this.baseMutations,e.baseMutations,(n,i)=>Oc(n,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n,i,s,r=X.min(),o=X.min(),a=He.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.ie=e}}function vb(t){const e=hb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.Je=new bb}addToCollectionParentIndex(e,n){return this.Je.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(tn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(tn.min())}updateCollectionGroup(e,n,i){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class bb{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Se(ye.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Se(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Zn(0)}static vn(){return new Zn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.changes=new oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?b.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&vi(i.mutation,s,Xt.empty(),it.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,te()).next(()=>i))}getLocalViewOfDocuments(e,n,i=te()){const s=pn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=fi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=pn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,te()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=sn();const o=wi(),a=wi();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Nr)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),vi(u.mutation,c,u.mutation.getFieldMask(),it.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new Ib(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const i=wi();let s=new Le((o,a)=>o-a),r=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||Xt.empty();u=a.applyToLocalView(c,u),i.set(l,u);const d=(s.get(a.batchId)||te()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=Ef();u.forEach(f=>{if(!r.has(f)){const h=wf(n.get(f),i.get(f));h!==null&&d.set(f,h),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return b.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):F0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):b.resolve(pn());let a=-1,l=r;return o.next(c=>b.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,te())).next(u=>({batchId:a,changes:X0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(i=>{let s=fi();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=fi();return this.indexManager.getCollectionParents(e,s).next(o=>b.forEach(o,a=>{const l=function(c,u){return new Ar(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,d)=>{r=r.insert(u,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,xe.newInvalidDocument(c)))});let o=fi();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&vi(c.mutation,l,Xt.empty(),it.now()),Rr(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:zn(i.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(i){return{name:i.name,query:vb(i.bundledQuery),readTime:zn(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.overlays=new Le(q.comparator),this.es=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const i=pn();return b.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.oe(e,n,r)}),b.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.es.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(i)),b.resolve()}getOverlaysForCollection(e,n,i){const s=pn(),r=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Le((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=pn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=pn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return b.resolve(a)}oe(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(i.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new yb(n,i));let r=this.es.get(n);r===void 0&&(r=te(),this.es.set(n,r)),this.es.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.ns=new Se(Ae.ss),this.rs=new Se(Ae.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const i=new Ae(e,n);this.ns=this.ns.add(i),this.rs=this.rs.add(i)}us(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.cs(new Ae(e,n))}hs(e,n){e.forEach(i=>this.removeReference(i,n))}ls(e){const n=new q(new ye([])),i=new Ae(n,e),s=new Ae(n,e+1),r=[];return this.rs.forEachInRange([i,s],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new q(new ye([])),i=new Ae(n,e),s=new Ae(n,e+1);let r=te();return this.rs.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ae(e,0),i=this.ns.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Ae{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return q.comparator(e.key,n.key)||he(e._s,n._s)}static os(e,n){return he(e._s,n._s)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Se(Ae.ss)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mb(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new Ae(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.ps(i),r=s<0?0:s;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Ae(n,0),s=new Ae(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([i,s],o=>{const a=this.ys(o._s);r.push(a)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Se(he);return n.forEach(s=>{const r=new Ae(s,0),o=new Ae(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{i=i.add(a._s)})}),b.resolve(this.Is(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;q.isDocumentKey(r)||(r=r.child(""));const o=new Ae(new q(r),0);let a=new Se(he);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l._s)),!0)},o),b.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(i=>{const s=this.ys(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.gs;return b.forEach(n.mutations,s=>{const r=new Ae(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=i})}An(e){}containsKey(e,n){const i=new Ae(n,0),s=this.gs.firstAfterOrEqual(i);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.Es=e,this.docs=new Le(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return b.resolve(i?i.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let i=sn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():xe.newInvalidDocument(s))}),b.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=sn();const o=n.path,a=new q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||y0(m0(u),i)<=0||(s.has(u.key)||Rr(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,i,s){Y()}As(e,n){return b.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new Rb(this)}getSize(e){return b.resolve(this.size)}}class Rb extends Tb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(i)}),b.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.persistence=e,this.Rs=new oi(n=>Ha(n),za),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Qa,this.targetCount=0,this.vs=Zn.Pn()}forEachTarget(e,n){return this.Rs.forEach((i,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.bs&&(this.bs=n),b.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Zn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Dn(n),b.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(r).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const i=this.Rs.get(n)||null;return b.resolve(i)}addMatchingKeys(e,n,i){return this.Ps.us(n,i),b.resolve()}removeMatchingKeys(e,n,i){this.Ps.hs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),b.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Ps.ds(n);return b.resolve(i)}containsKey(e,n){return b.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ja(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Db(this),this.indexManager=new wb,this.remoteDocumentCache=function(i){return new Cb(i)}(i=>this.referenceDelegate.xs(i)),this.yt=new _b(n),this.Ns=new kb(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Sb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Vs[e.toKey()];return i||(i=new Ab(n,this.referenceDelegate),this.Vs[e.toKey()]=i),i}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,i){x("MemoryPersistence","Starting transaction:",e);const s=new Ob(this.Ss.next());return this.referenceDelegate.ks(),i(s).next(r=>this.referenceDelegate.Os(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ms(e,n){return b.or(Object.values(this.Vs).map(i=>()=>i.containsKey(e,n)))}}class Ob extends v0{constructor(e){super(),this.currentSequenceNumber=e}}class Xa{constructor(e){this.persistence=e,this.Fs=new Qa,this.$s=null}static Bs(e){return new Xa(e)}get Ls(){if(this.$s)return this.$s;throw Y()}addReference(e,n,i){return this.Fs.addReference(i,n),this.Ls.delete(i.toString()),b.resolve()}removeReference(e,n,i){return this.Fs.removeReference(i,n),this.Ls.add(i.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),b.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Ls.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ls,i=>{const s=q.fromPath(i);return this.qs(e,s).next(r=>{r||n.removeEntry(s,X.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(i=>{i?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return b.or([()=>b.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Si=i,this.Di=s}static Ci(e,n){let i=te(),s=te();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ya(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,i,s){return this.ki(e,n).next(r=>r||this.Oi(e,n,s,i)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Dc(n))return b.resolve(null);let i=$t(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Vo(n,null,"F"),i=$t(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=te(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,Vo(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,i,s){return Dc(n)||s.isEqual(X.min())?this.Mi(e,n):this.Ni.getDocuments(e,i).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,i,s)?this.Mi(e,n):(bc()<=oe.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qo(n)),this.Bi(e,o,n,p0(s,-1)))})}Fi(e,n){let i=new Se(mf(e));return n.forEach((s,r)=>{Rr(e,r)&&(i=i.add(r))}),i}$i(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mi(e,n){return bc()<=oe.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",qo(n)),this.Ni.getDocumentsMatchingQuery(e,n,tn.min())}Bi(e,n,i,s){return this.Ni.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,i,s){this.persistence=e,this.Li=n,this.yt=s,this.qi=new Le(he),this.Ui=new oi(r=>Ha(r),za),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(i)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Eb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Mb(t,e,n,i){return new Lb(t,e,n,i)}async function Pf(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=te();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function Lf(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Ub(t,e){const n=se(t),i=e.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const a=[];e.targetChanges.forEach((u,d)=>{const f=s.get(d);if(!f)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,d)));let h=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(d)?h=h.withResumeToken(He.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(u.resumeToken,i)),s=s.insert(d,h),function(p,y,E){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,h,u)&&a.push(n.Cs.updateTargetData(r,h))});let l=sn(),c=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Fb(r,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!i.isEqual(X.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(d=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return b.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.qi=s,r))}function Fb(t,e,n){let i=te(),s=te();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=sn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:s}})}function xb(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Cs.getTargetData(i,e).next(r=>r?(s=r,b.resolve(s)):n.Cs.allocateTargetId(i).next(o=>(s=new wn(e,o,0,i.currentSequenceNumber),n.Cs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.qi.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qi=n.qi.insert(i.targetId,i),n.Ui.set(e,i.targetId)),i})}async function zo(t,e,n){const i=se(t),s=i.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Zi(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.qi=i.qi.remove(e),i.Ui.delete(s.target)}function Bc(t,e,n){const i=se(t);let s=X.min(),r=te();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=se(a),d=u.Ui.get(c);return d!==void 0?b.resolve(u.qi.get(d)):u.Cs.getTargetData(l,c)}(i,o,$t(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Li.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?r:te())).next(a=>(Bb(i,x0(e),a),{documents:a,Hi:r})))}function Bb(t,e,n){let i=t.Ki.get(e)||X.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Ki.set(e,i)}class Vc{constructor(){this.activeTargetIds=kf()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vb{constructor(){this.Lr=new Vc,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,i){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Vc,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,i,s,r){const o=this.ho(e,n);x("RestConnection","Sending: ",o,i);const a={};return this.lo(a,s,r),this.fo(e,o,a,i).then(l=>(x("RestConnection","Received: ",l),l),l=>{throw Lo("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",i),l})}_o(e,n,i,s,r,o){return this.ao(e,n,i,s,r)}lo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+ri,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}ho(e,n){const i=jb[e];return`${this.oo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,i,s){return new Promise((r,o)=>{const a=new r0;a.setWithCredentials(!0),a.listenOnce(n0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case to.NO_ERROR:const c=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(c)),r(c);break;case to.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new H(R.DEADLINE_EXCEEDED,"Request time out"));break;case to.HTTP_ERROR:const u=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const h=function(p){const y=p.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(y)>=0?y:R.UNKNOWN}(f.status);o(new H(h,f.message))}else o(new H(R.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new H(R.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,i,15)})}wo(e,n,i){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=e0(),o=t0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new s0({})),this.lo(a.initMessageHeaders,n,i),a.encodeInitMessageHeaders=!0;const l=s.join("");x("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,d=!1;const f=new $b({Hr:p=>{d?x("Connection","Not sending because WebChannel is closed:",p):(u||(x("Connection","Opening WebChannel transport."),c.open(),u=!0),x("Connection","WebChannel sending:",p),c.send(p))},Jr:()=>c.close()}),h=(p,y,E)=>{p.listen(y,A=>{try{E(A)}catch(v){setTimeout(()=>{throw v},0)}})};return h(c,ps.EventType.OPEN,()=>{d||x("Connection","WebChannel transport opened.")}),h(c,ps.EventType.CLOSE,()=>{d||(d=!0,x("Connection","WebChannel transport closed"),f.io())}),h(c,ps.EventType.ERROR,p=>{d||(d=!0,Lo("Connection","WebChannel transport errored:",p),f.io(new H(R.UNAVAILABLE,"The operation could not be completed")))}),h(c,ps.EventType.MESSAGE,p=>{var y;if(!d){const E=p.data[0];Ie(!!E);const A=E,v=A.error||((y=A[0])===null||y===void 0?void 0:y.error);if(v){x("Connection","WebChannel received error:",v);const _=v.status;let C=function(P){const F=be[P];if(F!==void 0)return Tf(F)}(_),V=v.message;C===void 0&&(C=R.INTERNAL,V="Unknown error status: "+_+" with message "+v.message),d=!0,f.io(new H(C,V)),c.close()}else x("Connection","WebChannel received:",E),f.ro(E)}}),h(o,i0.STAT_EVENT,p=>{p.stat===vc.PROXY?x("Connection","Detected buffering proxy"):p.stat===vc.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function so(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t){return new ib(t,!0)}class Uf{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=i,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),i=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-i);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n,i,s,r,o,a,l){this.Hs=e,this.vo=i,this.Vo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Uf(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(jt(n.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.So===n&&this.Go(i,s)},i=>{e(()=>{const s=new H(R.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Qo(s)})})}Go(e,n){const i=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{i(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{i(()=>this.Qo(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gb extends zb{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=lb(this.yt,e),i=function(s){if(!("targetChange"in s))return X.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?X.min():r.readTime?zn(r.readTime):X.min()}(e);return this.listener.Wo(n,i)}zo(e){const n={};n.database=xc(this.yt),n.addTarget=function(s,r){let o;const a=r.target;return o=Bo(a)?{documents:cb(s,a)}:{query:ub(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=rb(s,r.resumeToken):r.snapshotVersion.compareTo(X.min())>0&&(o.readTime=sb(s,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const i=db(this.yt,e);i&&(n.labels=i),this.Bo(n)}Ho(e){const n={};n.database=xc(this.yt),n.removeTarget=e,this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.yt=s,this.nu=!1}su(){if(this.nu)throw new H(R.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.ao(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(R.UNKNOWN,s.toString())})}_o(e,n,i,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(R.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class Wb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(jt(n),this.ou=!1):x("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{i.enqueueAndForget(async()=>{ns(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=se(a);l._u.add(4),await ts(l),l.gu.set("Unknown"),l._u.delete(4),await Pr(l)}(this))})}),this.gu=new Wb(i,s)}}async function Pr(t){if(ns(t))for(const e of t.wu)await e(!0)}async function ts(t){for(const e of t.wu)await e(!1)}function Ff(t,e){const n=se(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),el(n)?Za(n):ai(n).ko()&&Ja(n,e))}function xf(t,e){const n=se(t),i=ai(n);n.du.delete(e),i.ko()&&Bf(n,e),n.du.size===0&&(i.ko()?i.Fo():ns(n)&&n.gu.set("Unknown"))}function Ja(t,e){t.yu.Ot(e.targetId),ai(t).zo(e)}function Bf(t,e){t.yu.Ot(e),ai(t).Ho(e)}function Za(t){t.yu=new Z0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),ai(t).start(),t.gu.uu()}function el(t){return ns(t)&&!ai(t).No()&&t.du.size>0}function ns(t){return se(t)._u.size===0}function Vf(t){t.yu=void 0}async function Xb(t){t.du.forEach((e,n)=>{Ja(t,e)})}async function Yb(t,e){Vf(t),el(t)?(t.gu.hu(e),Za(t)):t.gu.set("Unknown")}async function Jb(t,e,n){if(t.gu.set("Online"),e instanceof Af&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.du.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.du.delete(o),i.yu.removeTarget(o))}(t,e)}catch(i){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await jc(t,i)}else if(e instanceof As?t.yu.Kt(e):e instanceof Sf?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(X.min()))try{const i=await Lf(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.yu.Zt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.du.get(l);c&&s.du.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.du.get(a);if(!l)return;s.du.set(a,l.withResumeToken(He.EMPTY_BYTE_STRING,l.snapshotVersion)),Bf(s,a);const c=new wn(l.target,a,1,l.sequenceNumber);Ja(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){x("RemoteStore","Failed to raise snapshot:",i),await jc(t,i)}}async function jc(t,e,n){if(!Zi(e))throw e;t._u.add(1),await ts(t),t.gu.set("Offline"),n||(n=()=>Lf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Pr(t)})}async function $c(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const i=ns(n);n._u.add(3),await ts(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Pr(n)}async function Zb(t,e){const n=se(t);e?(n._u.delete(2),await Pr(n)):e||(n._u.add(2),await ts(n),n.gu.set("Unknown"))}function ai(t){return t.pu||(t.pu=function(e,n,i){const s=se(e);return s.su(),new Gb(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,i)}(t.datastore,t.asyncQueue,{Yr:Xb.bind(null,t),Zr:Yb.bind(null,t),Wo:Jb.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),el(t)?Za(t):t.gu.set("Unknown")):(await t.pu.stop(),Vf(t))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new tl(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qf(t,e){if(jt("AsyncQueue",`${e}: ${t}`),Zi(t))return new H(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.comparator=e?(n,i)=>e(n,i)||q.comparator(n.key,i.key):(n,i)=>q.comparator(n.key,i.key),this.keyedMap=fi(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Gn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Gn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.Tu=new Le(q.comparator)}track(e){const n=e.doc.key,i=this.Tu.get(n);i?e.type!==0&&i.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&i.type!==1?this.Tu=this.Tu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Tu=this.Tu.remove(n):e.type===1&&i.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Y():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,i)=>{e.push(i)}),e}}class ei{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ei(e,n,Gn.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(){this.Au=void 0,this.listeners=[]}}class t1{constructor(){this.queries=new oi(e=>pf(e),Cr),this.onlineState="Unknown",this.Ru=new Set}}async function n1(t,e){const n=se(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new e1),s)try{r.Au=await n.onListen(i)}catch(o){const a=qf(o,`Initialization of query '${qo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&nl(n)}async function i1(t,e){const n=se(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function s1(t,e){const n=se(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(s)&&(i=!0);o.Au=s}}i&&nl(n)}function r1(t,e,n){const i=se(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function nl(t){t.Ru.forEach(e=>{e.next()})}class o1{constructor(e,n,i){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=i||{}}Pu(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new ei(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Nu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.key=e}}class $f{constructor(e){this.key=e}}class a1{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=te(),this.mutatedKeys=te(),this.Gu=mf(e),this.Qu=new Gn(this.Gu)}get ju(){return this.qu}Wu(e,n){const i=n?n.zu:new Hc,s=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,d)=>{const f=s.get(u),h=Rr(this.query,d)?d:null,p=!!f&&this.mutatedKeys.has(f.key),y=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let E=!1;f&&h?f.data.isEqual(h.data)?p!==y&&(i.track({type:3,doc:h}),E=!0):this.Hu(f,h)||(i.track({type:2,doc:h}),E=!0,(l&&this.Gu(h,l)>0||c&&this.Gu(h,c)<0)&&(a=!0)):!f&&h?(i.track({type:0,doc:h}),E=!0):f&&!h&&(i.track({type:1,doc:f}),E=!0,(l||c)&&(a=!0)),E&&(h?(o=o.add(h),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Qu:o,zu:i,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((c,u)=>function(d,f){const h=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return h(d)-h(f)}(c.type,u.type)||this.Gu(c.doc,u.doc)),this.Ju(i);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,r.length!==0||l?{snapshot:new ei(this.query,e.Qu,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Hc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=te(),this.Qu.forEach(i=>{this.Zu(i.key)&&(this.Ku=this.Ku.add(i.key))});const n=[];return e.forEach(i=>{this.Ku.has(i)||n.push(new $f(i))}),this.Ku.forEach(i=>{e.has(i)||n.push(new jf(i))}),n}tc(e){this.qu=e.Hi,this.Ku=te();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ei.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class l1{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class c1{constructor(e){this.key=e,this.nc=!1}}class u1{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new oi(a=>pf(a),Cr),this.rc=new Map,this.oc=new Set,this.uc=new Le(q.comparator),this.cc=new Map,this.ac=new Qa,this.hc={},this.lc=new Map,this.fc=Zn.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function h1(t,e){const n=_1(t);let i,s;const r=n.ic.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.ec();else{const o=await xb(n.localStore,$t(e));n.isPrimaryClient&&Ff(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await d1(n,e,i,a==="current",o.resumeToken)}return s}async function d1(t,e,n,i,s){t._c=(d,f,h)=>async function(p,y,E,A){let v=y.view.Wu(E);v.$i&&(v=await Bc(p.localStore,y.query,!1).then(({documents:V})=>y.view.Wu(V,v)));const _=A&&A.targetChanges.get(y.targetId),C=y.view.applyChanges(v,p.isPrimaryClient,_);return Gc(p,y.targetId,C.Xu),C.snapshot}(t,d,f,h);const r=await Bc(t.localStore,e,!0),o=new a1(e,r.Hi),a=o.Wu(r.documents),l=es.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Gc(t,n,c.Xu);const u=new l1(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function f1(t,e){const n=se(t),i=n.ic.get(e),s=n.rc.get(i.targetId);if(s.length>1)return n.rc.set(i.targetId,s.filter(r=>!Cr(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await zo(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),xf(n.remoteStore,i.targetId),Go(n,i.targetId)}).catch(qa)):(Go(n,i.targetId),await zo(n.localStore,i.targetId,!0))}async function Hf(t,e){const n=se(t);try{const i=await Ub(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.cc.get(r);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?Ie(o.nc):s.removedDocuments.size>0&&(Ie(o.nc),o.nc=!1))}),await Gf(n,i,e)}catch(i){await qa(i)}}function zc(t,e,n){const i=se(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=se(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.bu(o)&&(l=!0)}),l&&nl(a)}(i.eventManager,e),s.length&&i.sc.Wo(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function g1(t,e,n){const i=se(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.cc.get(e),r=s&&s.key;if(r){let o=new Le(q.comparator);o=o.insert(r,xe.newNoDocument(r,X.min()));const a=te().add(r),l=new Or(X.min(),new Map,new Se(he),o,a);await Hf(i,l),i.uc=i.uc.remove(r),i.cc.delete(e),il(i)}else await zo(i.localStore,e,!1).then(()=>Go(i,e,n)).catch(qa)}function Go(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.rc.get(e))t.ic.delete(i),n&&t.sc.wc(i,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(i=>{t.ac.containsKey(i)||zf(t,i)})}function zf(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(xf(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),il(t))}function Gc(t,e,n){for(const i of n)i instanceof jf?(t.ac.addReference(i.key,e),p1(t,i)):i instanceof $f?(x("SyncEngine","Document no longer in limbo: "+i.key),t.ac.removeReference(i.key,e),t.ac.containsKey(i.key)||zf(t,i.key)):Y()}function p1(t,e){const n=e.key,i=n.path.canonicalString();t.uc.get(n)||t.oc.has(i)||(x("SyncEngine","New document in limbo: "+n),t.oc.add(i),il(t))}function il(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(ye.fromString(e)),i=t.fc.next();t.cc.set(i,new c1(n)),t.uc=t.uc.insert(n,i),Ff(t.remoteStore,new wn($t(Ga(n.path)),i,2,ja.at))}}async function Gf(t,e,n){const i=se(t),s=[],r=[],o=[];i.ic.isEmpty()||(i.ic.forEach((a,l)=>{o.push(i._c(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Ya.Ci(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.sc.Wo(s),await async function(a,l){const c=se(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(l,d=>b.forEach(d.Si,f=>c.persistence.referenceDelegate.addReference(u,d.targetId,f)).next(()=>b.forEach(d.Di,f=>c.persistence.referenceDelegate.removeReference(u,d.targetId,f)))))}catch(u){if(!Zi(u))throw u;x("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const f=c.qi.get(d),h=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(h);c.qi=c.qi.insert(d,p)}}}(i.localStore,r))}async function m1(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const i=await Pf(n.localStore,e);n.currentUser=e,function(s,r){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new H(R.CANCELLED,r))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Gf(n,i.ji)}}function y1(t,e){const n=se(t),i=n.cc.get(e);if(i&&i.nc)return te().add(i.key);{let s=te();const r=n.rc.get(e);if(!r)return s;for(const o of r){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function _1(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=y1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=g1.bind(null,e),e.sc.Wo=s1.bind(null,e.eventManager),e.sc.wc=r1.bind(null,e.eventManager),e}class v1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Mf(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Mb(this.persistence,new Pb,e.initialUser,this.yt)}yc(e){return new Nb(Xa.Bs,this.yt)}gc(e){return new Vb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class w1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>zc(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=m1.bind(null,this.syncEngine),await Zb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new t1}createDatastore(e){const n=Mf(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new Hb(s));var s;return function(r,o,a,l){return new Kb(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>zc(this.syncEngine,a,0),o=qc.C()?new qc:new qb,new Qb(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const u=new u1(i,s,r,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);x("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ts(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t,e,n){if(!n)throw new H(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function T1(t,e,n,i){if(e===!0&&i===!0)throw new H(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kc(t){if(!q.isDocumentKey(t))throw new H(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function I1(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ko(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=I1(t);throw new H(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new Map;class Qc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,T1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new o0;switch(n.type){case"gapi":const i=n.client;return new u0(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Wc.get(e);n&&(x("ComponentProvider","Removing Datastore"),Wc.delete(e),n.terminate())}(this),Promise.resolve()}}function E1(t,e,n,i={}){var s;const r=(t=Ko(t,sl))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Lo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=Fe.MOCK_USER;else{o=Gu(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new H(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Fe(l)}t._authCredentials=new a0(new rf(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class rl{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new rl(this.firestore,e,this._query)}}class Fi extends rl{constructor(e,n,i){super(e,n,Ga(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new q(e))}withConverter(e){return new Fi(this.firestore,e,this._path)}}function k1(t,e,...n){if(t=De(t),arguments.length===1&&(e=of.R()),b1("doc","path",e),t instanceof sl){const i=ye.fromString(e,...n);return Kc(i),new Bt(t,null,new q(i))}{if(!(t instanceof Bt||t instanceof Fi))throw new H(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ye.fromString(e,...n));return Kc(i),new Bt(t.firestore,t instanceof Fi?t.converter:null,new q(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):jt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=of.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{x("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(x("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=qf(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function C1(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Pf(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function R1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await D1(t);x("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>$c(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>$c(e.remoteStore,r)),t.onlineComponents=e}async function D1(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await C1(t,new v1)),t.offlineComponents}async function N1(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await R1(t,new w1)),t.onlineComponents}async function O1(t){const e=await N1(t),n=e.eventManager;return n.onListen=h1.bind(null,e.syncEngine),n.onUnlisten=f1.bind(null,e.syncEngine),n}function P1(t,e,n={}){const i=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new S1({next:d=>{r.enqueueAndForget(()=>i1(s,u));const f=d.docs.has(o);!f&&d.fromCache?l.reject(new H(R.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&a&&a.source==="server"?l.reject(new H(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new o1(Ga(o.path),c,{includeMetadataChanges:!0,Nu:!0});return n1(s,u)}(await O1(t),t.asyncQueue,e,n,i)),i.promise}class L1{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Uf(this,"async_queue_retry"),this.Wc=()=>{const n=so();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=so();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=so();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new _n;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Zi(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(i=>{this.Kc=i,this.Gc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw jt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Gc=!1,i))));return this.Bc=n,n}enqueueAfterDelay(e,n,i){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=tl.createAndSchedule(this,e,n,i,r=>this.Yc(r));return this.Uc.push(s),s}zc(){this.Kc&&Y()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Kf extends sl{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new L1,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wf(this),this._firestoreClient.terminate()}}function M1(t,e){const n=typeof t=="object"?t:Bi(),i=typeof t=="string"?t:e||"(default)",s=Ht(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=sa("firestore");r&&E1(s,...r)}return s}function U1(t){return t._firestoreClient||Wf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Wf(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new w0(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new A1(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(He.fromBase64String(e))}catch(n){throw new H(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qs(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}const x1=new RegExp("[~\\*/\\[\\]]");function B1(t,e,n){if(e.search(x1)>=0)throw Xc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qf(...e.split("."))._internalPath}catch{throw Xc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xc(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new H(R.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new V1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class V1 extends Xf{data(){return super.data()}}function Yf(t,e){return typeof e=="string"?B1(t,e):e instanceof Qf?e._internalPath:e._delegate._internalPath}class q1{convertValue(e,n="none"){switch(An(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const i={};return kr(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new F1(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=lf(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Mi(e));default:return null}}convertTimestamp(e){const n=nn(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=ye.fromString(e);Ie(Of(i));const s=new Li(i.get(1),i.get(3)),r=new q(i.popFirst(5));return s.isEqual(n)||jt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jf extends Xf{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $1(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Yf("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class $1 extends Jf{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){t=Ko(t,Bt);const e=Ko(t.firestore,Kf);return P1(U1(e),t._key).then(n=>G1(e,t,n))}class z1 extends q1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function G1(t,e,n){const i=n.docs.get(e._key),s=new z1(t);return new Jf(t,s,e._key,i,new j1(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ri=n})(ni),_t(new ut("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Kf(new l0(n.getProvider("auth-internal")),new d0(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new H(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Li(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Ve(wc,"3.8.3",t),Ve(wc,"3.8.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="firebasestorage.googleapis.com",eg="storageBucket",K1=2*60*1e3,W1=10*60*1e3,Q1=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends dt{constructor(e,n,i=0){super(ro(e),`Firebase Storage: ${n} (${ro(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ro(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function ro(t){return"storage/"+t}function ol(){const t="An unknown error occurred, please check the error payload for server response.";return new ve(pe.UNKNOWN,t)}function X1(t){return new ve(pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Y1(t){return new ve(pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function J1(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ve(pe.UNAUTHENTICATED,t)}function Z1(){return new ve(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function eT(t){return new ve(pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function tg(){return new ve(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ng(){return new ve(pe.CANCELED,"User canceled the upload/download.")}function tT(t){return new ve(pe.INVALID_URL,"Invalid URL '"+t+"'.")}function nT(t){return new ve(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function iT(){return new ve(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+eg+"' property when initializing the app?")}function ig(){return new ve(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sT(){return new ve(pe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function rT(t){return new ve(pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wo(t){return new ve(pe.INVALID_ARGUMENT,t)}function sg(){return new ve(pe.APP_DELETED,"The Firebase app was deleted.")}function oT(t){return new ve(pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function bi(t,e){return new ve(pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ci(t){throw new ve(pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=at.makeFromUrl(e,n)}catch{return new at(e,"")}if(i.path==="")return i;throw nT(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",h=new RegExp(`^https?://${d}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},y=n===Zf?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",A=new RegExp(`^https?://${y}/${s}/${E}`,"i"),_=[{regex:a,indices:l,postModify:r},{regex:h,indices:p,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<_.length;C++){const V=_[C],P=V.regex.exec(e);if(P){const F=P[V.indices.bucket];let L=P[V.indices.path];L||(L=""),i=new at(F,L),V.postModify(i);break}}if(i==null)throw tT(e);return i}}class aT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...E){c||(c=!0,e.apply(null,E))}function d(E){s=setTimeout(()=>{s=null,t(h,l())},E)}function f(){r&&clearTimeout(r)}function h(E,...A){if(c){f();return}if(E){f(),u.call(null,E,...A);return}if(l()||o){f(),u.call(null,E,...A);return}i<64&&(i*=2);let _;a===1?(a=2,_=0):_=(i+Math.random())*1e3,d(_)}let p=!1;function y(E){p||(p=!0,f(),!c&&(s!==null?(E||(a=2),clearTimeout(s),d(0)):E||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function cT(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){return t!==void 0}function hT(t){return typeof t=="function"}function dT(t){return typeof t=="object"&&!Array.isArray(t)}function al(t){return typeof t=="string"||t instanceof String}function Yc(t){return ll()&&t instanceof Blob}function ll(){return typeof Blob<"u"&&!ip()}function Jc(t,e,n,i){if(i<e)throw Wo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Wo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function fT(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(bn||(bn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,i,s,r,o,a,l,c,u,d,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,p)=>{this.resolve_=h,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new _s(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===bn.NO_ERROR,l=r.getStatus();if(!a||rg(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===bn.ABORT;i(!1,new _s(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new _s(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());uT(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=ol();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?sg():ng();o(l)}else{const l=tg();o(l)}};this.canceled_?n(!1,new _s(!1,null,!0)):this.backoffId_=lT(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _s{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function pT(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mT(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yT(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _T(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vT(t,e,n,i,s,r,o=!0){const a=fT(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return yT(c,e),pT(c,n),mT(c,r),_T(c,i),new gT(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bT(...t){const e=wT();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(ll())return new Blob(t);throw new ve(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function TT(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t){if(typeof atob>"u")throw rT("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class oo{constructor(e,n){this.data=e,this.contentType=n||null}}function ET(t,e){switch(t){case St.RAW:return new oo(og(e));case St.BASE64:case St.BASE64URL:return new oo(ag(t,e));case St.DATA_URL:return new oo(ST(e),AT(e))}throw ol()}function og(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=t.charCodeAt(++n);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function kT(t){let e;try{e=decodeURIComponent(t)}catch{throw bi(St.DATA_URL,"Malformed data URL.")}return og(e)}function ag(t,e){switch(t){case St.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw bi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case St.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw bi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=IT(e)}catch(s){throw s.message.includes("polyfill")?s:bi(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class lg{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw bi(St.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=CT(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function ST(t){const e=new lg(t);return e.base64?ag(St.BASE64,e.rest):kT(e.rest)}function AT(t){return new lg(t).contentType}function CT(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){let i=0,s="";Yc(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Yc(this.data_)){const i=this.data_,s=TT(i,e,n);return s===null?null:new Qt(s)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new Qt(i,!0)}}static getBlob(...e){if(ll()){const n=e.map(i=>i instanceof Qt?i.data_:i);return new Qt(bT.apply(null,n))}else{const n=e.map(o=>al(o)?ET(St.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[r++]=o[a]}),new Qt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t){let e;try{e=JSON.parse(t)}catch{return null}return dT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NT(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function cg(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t,e){return e}class ze{constructor(e,n,i,s){this.server=e,this.local=n||e,this.writable=!!i,this.xform=s||OT}}let vs=null;function PT(t){return!al(t)||t.length<2?t:cg(t)}function LT(){if(vs)return vs;const t=[];t.push(new ze("bucket")),t.push(new ze("generation")),t.push(new ze("metageneration")),t.push(new ze("name","fullPath",!0));function e(r,o){return PT(o)}const n=new ze("name");n.xform=e,t.push(n);function i(r,o){return o!==void 0?Number(o):o}const s=new ze("size");return s.xform=i,t.push(s),t.push(new ze("timeCreated")),t.push(new ze("updated")),t.push(new ze("md5Hash",null,!0)),t.push(new ze("cacheControl",null,!0)),t.push(new ze("contentDisposition",null,!0)),t.push(new ze("contentEncoding",null,!0)),t.push(new ze("contentLanguage",null,!0)),t.push(new ze("contentType",null,!0)),t.push(new ze("metadata","customMetadata",!0)),vs=t,vs}function MT(t,e){function n(){const i=t.bucket,s=t.fullPath,r=new at(i,s);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function UT(t,e,n){const i={};i.type="file";const s=n.length;for(let r=0;r<s;r++){const o=n[r];i[o.local]=o.xform(i,e[o.server])}return MT(i,t),i}function FT(t,e,n){const i=RT(e);return i===null?null:UT(t,i,n)}function ug(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class is{constructor(e,n,i,s){this.url=e,this.method=n,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){if(!t)throw ol()}function ul(t,e){function n(i,s){const r=FT(t,s,e);return en(r!==null),r}return n}function ss(t){function e(n,i){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Z1():s=J1():n.getStatus()===402?s=Y1(t.bucket):n.getStatus()===403?s=eT(t.path):s=i,s.status=n.getStatus(),s.serverResponse=i.serverResponse,s}return e}function xT(t){const e=ss(t);function n(i,s){let r=e(i,s);return i.getStatus()===404&&(r=X1(t.path)),r.serverResponse=s.serverResponse,r}return n}function BT(t,e,n){const i=e.fullServerUrl(),s=cl(i,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new is(s,r,ul(t,n),o);return a.errorHandler=xT(e),a}function VT(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function hg(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=VT(null,e)),i}function qT(t,e,n,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let C=0;C<2;C++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=hg(e,i,s),u=ug(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",h=Qt.getBlob(d,i,f);if(h===null)throw ig();const p={name:c.fullPath},y=cl(r,t.host,t._protocol),E="POST",A=t.maxUploadRetryTime,v=new is(y,E,ul(t,n),A);return v.urlParams=p,v.headers=o,v.body=h.uploadData(),v.errorHandler=ss(e),v}class Xs{constructor(e,n,i,s){this.current=e,this.total=n,this.finalized=!!i,this.metadata=s||null}}function hl(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{en(!1)}return en(!!n&&(e||["active"]).indexOf(n)!==-1),n}function jT(t,e,n,i,s){const r=e.bucketOnlyServerUrl(),o=hg(e,i,s),a={name:o.fullPath},l=cl(r,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=ug(o,n),f=t.maxUploadRetryTime;function h(y){hl(y);let E;try{E=y.getResponseHeader("X-Goog-Upload-URL")}catch{en(!1)}return en(al(E)),E}const p=new is(l,c,h,f);return p.urlParams=a,p.headers=u,p.body=d,p.errorHandler=ss(e),p}function $T(t,e,n,i){const s={"X-Goog-Upload-Command":"query"};function r(c){const u=hl(c,["active","final"]);let d=null;try{d=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{en(!1)}d||en(!1);const f=Number(d);return en(!isNaN(f)),new Xs(f,i.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new is(n,o,r,a);return l.headers=s,l.errorHandler=ss(e),l}const Zc=256*1024;function HT(t,e,n,i,s,r,o,a){const l=new Xs(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=i.size()),i.size()!==l.total)throw sT();const c=l.total-l.current;let u=c;s>0&&(u=Math.min(u,s));const d=l.current,f=d+u;let h="";u===0?h="finalize":c===u?h="upload, finalize":h="upload";const p={"X-Goog-Upload-Command":h,"X-Goog-Upload-Offset":`${l.current}`},y=i.slice(d,f);if(y===null)throw ig();function E(C,V){const P=hl(C,["active","final"]),F=l.current+u,L=i.size();let D;return P==="final"?D=ul(e,r)(C,V):D=null,new Xs(F,L,P==="final",D)}const A="POST",v=e.maxUploadRetryTime,_=new is(n,A,E,v);return _.headers=p,_.body=y.uploadData(),_.progressCallback=a||null,_.errorHandler=ss(t),_}const tt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ao(t){switch(t){case"running":case"pausing":case"canceling":return tt.RUNNING;case"paused":return tt.PAUSED;case"success":return tt.SUCCESS;case"canceled":return tt.CANCELED;case"error":return tt.ERROR;default:return tt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n,i){if(hT(e)||n!=null||i!=null)this.next=e,this.error=n??void 0,this.complete=i??void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class GT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,s){if(this.sent_)throw ci("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ci("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ci("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ci("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ci("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class KT extends GT{initXhr(){this.xhr_.responseType="text"}}function ui(){return new KT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,i=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=i,this._mappings=LT(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(pe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(rg(s.status,[]))if(r)s=tg();else{this.sleepTime=Math.max(this.sleepTime*2,Q1),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(pe.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,r)=>{this._resolve=s,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,i])=>{switch(this._state){case"running":e(n,i);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const i=jT(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(i,ui,e,n);this._request=s,s.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,i)=>{const s=$T(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(s,ui,n,i);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Zc*this._chunkMultiplier,n=new Xs(this._transferred,this._blob.size()),i=this._uploadUrl;this._resolveToken((s,r)=>{let o;try{o=HT(this._ref._location,this._ref.storage,i,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ui,s,r,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Zc*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const i=BT(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(i,ui,e,n);this._request=s,s.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const i=qT(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(i,ui,e,n);this._request=s,s.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ng(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ao(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,i,s){const r=new zT(n||void 0,i||void 0,s||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ao(this._state)){case tt.SUCCESS:Un(this._resolve.bind(null,this.snapshot))();break;case tt.CANCELED:case tt.ERROR:const n=this._reject;Un(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ao(this._state)){case tt.RUNNING:case tt.PAUSED:e.next&&Un(e.next.bind(e,this.snapshot))();break;case tt.SUCCESS:e.complete&&Un(e.complete.bind(e))();break;case tt.CANCELED:case tt.ERROR:e.error&&Un(e.error.bind(e,this._error))();break;default:e.error&&Un(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this._service=e,n instanceof at?this._location=n:this._location=at.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Cn(e,n)}get root(){const e=new at(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cg(this._location.path)}get storage(){return this._service}get parent(){const e=DT(this._location.path);if(e===null)return null;const n=new at(this._location.bucket,e);return new Cn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw oT(e)}}function QT(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new WT(t,new Qt(e),n)}function XT(t,e){const n=NT(t._location.path,e),i=new at(t._location.bucket,n);return new Cn(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(t){return/^[A-Za-z]+:\/\//.test(t)}function JT(t,e){return new Cn(t,e)}function dg(t,e){if(t instanceof dl){const n=t;if(n._bucket==null)throw iT();const i=new Cn(n,n._bucket);return e!=null?dg(i,e):i}else return e!==void 0?XT(t,e):t}function ZT(t,e){if(e&&YT(e)){if(t instanceof dl)return JT(t,e);throw Wo("To use ref(service, url), the first argument must be a Storage instance.")}else return dg(t,e)}function eu(t,e){const n=e==null?void 0:e[eg];return n==null?null:at.makeFromBucketSpec(n,t)}function eI(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=i;s&&(t._overrideAuthToken=typeof s=="string"?s:Gu(s,t.app.options.projectId))}class dl{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Zf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=K1,this._maxUploadRetryTime=W1,this._requests=new Set,s!=null?this._bucket=at.makeFromBucketSpec(s,this._host):this._bucket=eu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=at.makeFromBucketSpec(this._url,e):this._bucket=eu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cn(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new aT(sg());{const o=vT(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const tu="@firebase/storage",nu="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="storage";function tI(t,e,n){return t=De(t),QT(t,e,n)}function nI(t,e){return t=De(t),ZT(t,e)}function iI(t=Bi(),e){t=De(t);const i=Ht(t,fg).getImmediate({identifier:e}),s=sa("storage");return s&&sI(i,...s),i}function sI(t,e,n,i={}){eI(t,e,n,i)}function rI(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new dl(n,i,s,e,ni)}function oI(){_t(new ut(fg,rI,"PUBLIC").setMultipleInstances(!0)),Ve(tu,nu,""),Ve(tu,nu,"esm2017")}oI();const Lr=Cs({fbUser:"pending"}),aI=async t=>fetch(`https://people.googleapis.com/v1/people/me?personFields=${encodeURIComponent("names,nicknames,birthdays,genders")}&sources=READ_SOURCE_TYPE_PROFILE&key=${gg.apiKey}`,{headers:{Accept:"application/json",Authorization:"Bearer "+t}}).then(e=>e.json()),gg={apiKey:"AIzaSyCJzyei15JLOlBt8UNMpeH45S0fT2sEhrI",authDomain:"spartan-mingle.firebaseapp.com",projectId:"spartan-mingle",storageBucket:"spartan-mingle.appspot.com",messagingSenderId:"65412408980",appId:"1:65412408980:web:dfa7b4a985e3a1e957f681",measurementId:"G-NSCNW8Q2TL"},pg=Zu(gg);Fy(pg);const rs=new It;rs.addScope("https://www.googleapis.com/auth/userinfo.profile");rs.addScope("https://www.googleapis.com/auth/userinfo.email");rs.addScope("https://www.googleapis.com/auth/user.gender.read");rs.setCustomParameters({hd:"case.edu"});const os=Bv();window.auth=os;let Qo="";const as=nw(pg),lI=M1(),cI=iI(),uI=(t,e)=>nI(cI,`userImages/${t}/${e}`);I_(os,t=>{Lr.set({fbUser:t})});const mg=()=>Q_(os,rs).then(async t=>{const n=It.credentialFromResult(t).accessToken;Qo=(await aI(n)).names[0].givenName,t.user}).catch(t=>{alert("Error signing in. Please try again, and use your Case email.")}),hI=()=>{E_(os)},dI=$i(as,"updateUser"),fI=$i(as,"deleteUser"),gI=$i(as,"queryProfileStack"),yg=async t=>(await gI(t)).data,pI=$i(as,"likeDislike");window.queryProfileStack=yg;window.createDummyUsers=$i(as,"createDummyUsers");const mI=async()=>{try{await mg(),await fI(),await k_(os.currentUser),alert("Your account has successfully been deleted.")}catch{alert("There was an error deleting your acount.")}},_g=async()=>{const t=Fu(Lr).fbUser;if(typeof t=="string")return;const e=k1(lI,"users",t.uid),n=await H1(e);return n.exists()?n.data():!1};function iu(t){let e,n;return{c(){e=ne("desc"),n=de(t[7])},m(i,s){S(i,e,s),m(e,n)},p(i,s){s&128&&Be(n,i[7])},d(i){i&&w(e)}}}function su(t){let e,n;return{c(){e=ne("title"),n=de(t[6])},m(i,s){S(i,e,s),m(e,n)},p(i,s){s&64&&Be(n,i[6])},d(i){i&&w(e)}}}function yI(t){let e,n,i,s=t[7]&&iu(t),r=t[6]&&su(t);return{c(){e=ne("svg"),s&&s.c(),n=vt(),r&&r.c(),i=ne("path"),g(i,"d","M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"),g(i,"fill",t[2]),g(e,"viewBox",t[3]),g(e,"width",t[0]),g(e,"height",t[1]),g(e,"class",t[8]),g(e,"aria-label",t[4]),g(e,"aria-hidden",t[5])},m(o,a){S(o,e,a),s&&s.m(e,null),m(e,n),r&&r.m(e,null),m(e,i)},p(o,[a]){o[7]?s?s.p(o,a):(s=iu(o),s.c(),s.m(e,n)):s&&(s.d(1),s=null),o[6]?r?r.p(o,a):(r=su(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a&4&&g(i,"fill",o[2]),a&8&&g(e,"viewBox",o[3]),a&1&&g(e,"width",o[0]),a&2&&g(e,"height",o[1]),a&256&&g(e,"class",o[8]),a&16&&g(e,"aria-label",o[4]),a&32&&g(e,"aria-hidden",o[5])},i:M,o:M,d(o){o&&w(e),s&&s.d(),r&&r.d()}}}function _I(t,e,n){let{size:i="1em"}=e,{width:s=i}=e,{height:r=i}=e,{color:o="currentColor"}=e,{viewBox:a="0 0 24 24"}=e,{ariaLabel:l=void 0}=e,{ariaHidden:c=void 0}=e,{title:u=void 0}=e,{desc:d=void 0}=e,{class:f=void 0}=e;return t.$$set=h=>{"size"in h&&n(9,i=h.size),"width"in h&&n(0,s=h.width),"height"in h&&n(1,r=h.height),"color"in h&&n(2,o=h.color),"viewBox"in h&&n(3,a=h.viewBox),"ariaLabel"in h&&n(4,l=h.ariaLabel),"ariaHidden"in h&&n(5,c=h.ariaHidden),"title"in h&&n(6,u=h.title),"desc"in h&&n(7,d=h.desc),"class"in h&&n(8,f=h.class)},[s,r,o,a,l,c,u,d,f,i]}class vI extends le{constructor(e){super(),ae(this,e,_I,yI,ie,{size:9,width:0,height:1,color:2,viewBox:3,ariaLabel:4,ariaHidden:5,title:6,desc:7,class:8})}}function wI(t){let e,n,i,s,r;return n=new vI({props:{size:"25"}}),{c(){e=I("button"),Q(n.$$.fragment),g(e,"class","svelte-nj89nm")},m(o,a){S(o,e,a),K(n,e,null),i=!0,s||(r=Ce(e,"click",t[0]),s=!0)},p:M,i(o){i||(T(n.$$.fragment,o),i=!0)},o(o){k(n.$$.fragment,o),i=!1},d(o){o&&w(e),W(n),s=!1,r()}}}function bI(t){return[()=>window.location.hash="#profile"]}class TI extends le{constructor(e){super(),ae(this,e,bI,wI,ie,{})}}function II(t){let e,n,i,s,r,o,a;return s=new TI({}),{c(){e=I("header"),n=I("div"),n.innerHTML='<h1 class="svelte-zrr4ro">spartan mingle</h1>',i=j(),Q(s.$$.fragment),g(n,"class","container svelte-zrr4ro"),g(e,"class","svelte-zrr4ro")},m(l,c){S(l,e,c),m(e,n),m(e,i),K(s,e,null),r=!0,o||(a=Ce(n,"click",t[0]),o=!0)},p:M,i(l){r||(T(s.$$.fragment,l),r=!0)},o(l){k(s.$$.fragment,l),r=!1},d(l){l&&w(e),W(s),o=!1,a()}}}function EI(t){return[()=>window.location.hash=""]}class kI extends le{constructor(e){super(),ae(this,e,EI,II,ie,{})}}function SI(t){let e,n,i,s,r,o;n=new kI({});const a=t[2].default,l=Jo(a,t,t[1],null);return{c(){e=I("div"),Q(n.$$.fragment),i=j(),s=I("main"),l&&l.c(),g(s,"class","svelte-1c9wafy"),g(e,"class",r=bt(`container ${t[0]?"noScroll":""}`)+" svelte-1c9wafy")},m(c,u){S(c,e,u),K(n,e,null),m(e,i),m(e,s),l&&l.m(s,null),o=!0},p(c,[u]){l&&l.p&&(!o||u&2)&&ea(l,a,c,c[1],o?Zo(a,c[1],u,null):ta(c[1]),null),(!o||u&1&&r!==(r=bt(`container ${c[0]?"noScroll":""}`)+" svelte-1c9wafy"))&&g(e,"class",r)},i(c){o||(T(n.$$.fragment,c),T(l,c),o=!0)},o(c){k(n.$$.fragment,c),k(l,c),o=!1},d(c){c&&w(e),W(n),l&&l.d(c)}}}function AI(t,e,n){let{$$slots:i={},$$scope:s}=e,{noScroll:r=!1}=e;return t.$$set=o=>{"noScroll"in o&&n(0,r=o.noScroll),"$$scope"in o&&n(1,s=o.$$scope)},[r,s,i]}class ls extends le{constructor(e){super(),ae(this,e,AI,SI,ie,{noScroll:0})}}function CI(t){let e,n,i=[{xmlns:"http://www.w3.org/2000/svg"},{width:"64"},{height:"64"},{viewBox:"0 0 16.933 16.933"},t[0]],s={};for(let r=0;r<i.length;r+=1)s=Ee(s,i[r]);return{c(){e=ne("svg"),n=ne("path"),this.h()},l(r){e=yt(r,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var o=ct(e);n=yt(o,"path",{d:!0,style:!0}),ct(n).forEach(w),o.forEach(w),this.h()},h(){g(n,"d","M8.467 4.233a4.233 4.233 0 0 0-1.059 8.33v.402H5.293v.793a1.058 1.058 45 0 0 1.058 1.059h1.058v1.058h2.117l.001-1.058h1.057a1.06 1.06 135.02 0 0 1.06-1.059v-.794H9.526v-.402A4.233 4.233 0 0 0 12.7 8.467a4.233 4.233 0 0 0-4.233-4.234zm0 1.588a2.646 2.646 0 1 1 0 5.291 2.646 2.646 0 0 1 0-5.291z"),ft(n,"paint-order","markers stroke fill"),mt(e,s)},m(r,o){ti(r,e,o),Rn(e,n)},p(r,[o]){mt(e,s=Dn(i,[{xmlns:"http://www.w3.org/2000/svg"},{width:"64"},{height:"64"},{viewBox:"0 0 16.933 16.933"},o&1&&r[0]]))},i:M,o:M,d(r){r&&w(e)}}}function RI(t,e,n){return t.$$set=i=>{n(0,e=Ee(Ee({},e),pt(i)))},e=pt(e),[e]}let DI=class extends le{constructor(e){super(),ae(this,e,RI,CI,ie,{})}};function NI(t){let e,n,i=[{xmlns:"http://www.w3.org/2000/svg"},{width:"64"},{height:"64"},{viewBox:"0 0 16.933 16.933"},t[0]],s={};for(let r=0;r<i.length;r+=1)s=Ee(s,i[r]);return{c(){e=ne("svg"),n=ne("path"),this.h()},l(r){e=yt(r,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var o=ct(e);n=yt(o,"path",{d:!0,style:!0}),ct(n).forEach(w),o.forEach(w),this.h()},h(){g(n,"d","m10.086 2.678 1.336 1.336-.805.806a4.233 4.233 0 1 0 1.496 1.497l.806-.806 1.336 1.336a.329.329 157.5 0 0 .561-.232V2.117h-4.498a.329.329 112.5 0 0-.232.561zM8.466 5.82a2.646 2.646 0 1 1 0 5.291 2.646 2.646 0 0 1 0-5.291z"),ft(n,"paint-order","markers stroke fill"),mt(e,s)},m(r,o){ti(r,e,o),Rn(e,n)},p(r,[o]){mt(e,s=Dn(i,[{xmlns:"http://www.w3.org/2000/svg"},{width:"64"},{height:"64"},{viewBox:"0 0 16.933 16.933"},o&1&&r[0]]))},i:M,o:M,d(r){r&&w(e)}}}function OI(t,e,n){return t.$$set=i=>{n(0,e=Ee(Ee({},e),pt(i)))},e=pt(e),[e]}let PI=class extends le{constructor(e){super(),ae(this,e,OI,NI,ie,{})}};function LI(t){let e,n,i=[{xmlns:"http://www.w3.org/2000/svg"},{width:"64"},{height:"64"},{viewBox:"0 0 16.933 16.933"},t[0]],s={};for(let r=0;r<i.length;r+=1)s=Ee(s,i[r]);return{c(){e=ne("svg"),n=ne("path"),this.h()},l(r){e=yt(r,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var o=ct(e);n=yt(o,"path",{d:!0,style:!0}),ct(n).forEach(w),o.forEach(w),this.h()},h(){g(n,"d","M7.408 2.91v1.46a4.233 4.233 0 0 0 1.059 8.33 4.233 4.233 0 0 0 4.095-3.175h1.46a.794.794 0 0 0 .795-.794V7.408h-2.251c-.1-.383-.252-.75-.453-1.091l1.592-1.592-1.496-1.496-1.592 1.592a4.234 4.234 0 0 0-1.091-.453v-2.25l-1.324-.001a.794.794 135.01 0 0-.794.793zm1.059 2.91a2.646 2.646 0 1 1 0 5.292 2.646 2.646 0 0 1 0-5.291z"),ft(n,"paint-order","markers stroke fill"),ft(n,"stroke-linejoin","round"),ft(n,"stroke-width","2.1167"),mt(e,s)},m(r,o){ti(r,e,o),Rn(e,n)},p(r,[o]){mt(e,s=Dn(i,[{xmlns:"http://www.w3.org/2000/svg"},{width:"64"},{height:"64"},{viewBox:"0 0 16.933 16.933"},o&1&&r[0]]))},i:M,o:M,d(r){r&&w(e)}}}function MI(t,e,n){return t.$$set=i=>{n(0,e=Ee(Ee({},e),pt(i)))},e=pt(e),[e]}let UI=class extends le{constructor(e){super(),ae(this,e,MI,LI,ie,{})}};function FI(t){let e,n,i=[{xmlns:"http://www.w3.org/2000/svg"},{width:"64"},{height:"64"},{viewBox:"0 0 16.933 16.933"},t[0]],s={};for(let r=0;r<i.length;r+=1)s=Ee(s,i[r]);return{c(){e=ne("svg"),n=ne("path"),this.h()},l(r){e=yt(r,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var o=ct(e);n=yt(o,"path",{d:!0,style:!0}),ct(n).forEach(w),o.forEach(w),this.h()},h(){g(n,"d","M11.115 4.233H5.822c-.877.001-1.586.712-1.586 1.588v5.292c0 .876.71 1.586 1.586 1.587h1.587v.265H5.292v.793a1.058 1.058 0 0 0 1.058 1.059H7.41v1.058h2.116l.001-1.058h1.058a1.06 1.06 0 0 0 1.06-1.059v-.793H9.526V12.7h1.588c.876 0 1.586-.711 1.586-1.588V5.821c.001-.877-.709-1.587-1.585-1.588zM5.822 5.82h5.292v5.292H5.822z"),ft(n,"color","#000"),ft(n,"paint-order","markers stroke fill"),ft(n,"stroke-linejoin","round"),mt(e,s)},m(r,o){ti(r,e,o),Rn(e,n)},p(r,[o]){mt(e,s=Dn(i,[{xmlns:"http://www.w3.org/2000/svg"},{width:"64"},{height:"64"},{viewBox:"0 0 16.933 16.933"},o&1&&r[0]]))},i:M,o:M,d(r){r&&w(e)}}}function xI(t,e,n){return t.$$set=i=>{n(0,e=Ee(Ee({},e),pt(i)))},e=pt(e),[e]}let BI=class extends le{constructor(e){super(),ae(this,e,xI,FI,ie,{})}};function VI(t){let e,n,i=[{xmlns:"http://www.w3.org/2000/svg"},{width:"64"},{height:"64"},{viewBox:"0 0 16.933 16.933"},t[0]],s={};for(let r=0;r<i.length;r+=1)s=Ee(s,i[r]);return{c(){e=ne("svg"),n=ne("path"),this.h()},l(r){e=yt(r,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var o=ct(e);n=yt(o,"path",{d:!0,style:!0}),ct(n).forEach(w),o.forEach(w),this.h()},h(){g(n,"d","M10.319 2.117a.329.329 0 0 0-.233.56l1.337 1.337-.221.221a1.61 1.61 0 0 0-.088-.002H5.821c-.876.001-1.586.712-1.586 1.588v5.291c0 .876.71 1.587 1.586 1.588h5.292c.876 0 1.586-.712 1.586-1.588l.001-5.291c0-.03 0-.059-.002-.088l.222-.222 1.336 1.336a.329.329 0 0 0 .56-.232V2.117zM5.821 5.82h5.292v5.292H5.82z"),ft(n,"paint-order","markers stroke fill"),mt(e,s)},m(r,o){ti(r,e,o),Rn(e,n)},p(r,[o]){mt(e,s=Dn(i,[{xmlns:"http://www.w3.org/2000/svg"},{width:"64"},{height:"64"},{viewBox:"0 0 16.933 16.933"},o&1&&r[0]]))},i:M,o:M,d(r){r&&w(e)}}}function qI(t,e,n){return t.$$set=i=>{n(0,e=Ee(Ee({},e),pt(i)))},e=pt(e),[e]}let jI=class extends le{constructor(e){super(),ae(this,e,qI,VI,ie,{})}};function $I(t){let e,n,i=[{xmlns:"http://www.w3.org/2000/svg"},{width:"64"},{height:"64"},{viewBox:"0 0 16.933 16.933"},t[0]],s={};for(let r=0;r<i.length;r+=1)s=Ee(s,i[r]);return{c(){e=ne("svg"),n=ne("path"),this.h()},l(r){e=yt(r,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var o=ct(e);n=yt(o,"path",{d:!0,style:!0}),ct(n).forEach(w),o.forEach(w),this.h()},h(){g(n,"d","M8.202 2.117a.794.794 0 0 0-.794.793v1.323H5.821c-.876.001-1.586.712-1.586 1.588v5.291c0 .876.71 1.587 1.586 1.588h5.292c.876-.001 1.586-.712 1.585-1.588l.001-1.587h1.324a.794.794 0 0 0 .794-.794V7.408H12.7V5.821c0-.03-.001-.06-.003-.089l1.008-1.007-1.496-1.496-1.007 1.006a1.607 1.607 0 0 0-.088-.002H9.526V2.117H8.202zM5.821 5.82h5.292v5.292H5.82z"),ft(n,"paint-order","markers stroke fill"),ft(n,"stroke-linejoin","round"),ft(n,"stroke-width","2.1167"),mt(e,s)},m(r,o){ti(r,e,o),Rn(e,n)},p(r,[o]){mt(e,s=Dn(i,[{xmlns:"http://www.w3.org/2000/svg"},{width:"64"},{height:"64"},{viewBox:"0 0 16.933 16.933"},o&1&&r[0]]))},i:M,o:M,d(r){r&&w(e)}}}function HI(t,e,n){return t.$$set=i=>{n(0,e=Ee(Ee({},e),pt(i)))},e=pt(e),[e]}class zI extends le{constructor(e){super(),ae(this,e,HI,$I,ie,{})}}const GI=t=>`linear-gradient(135deg, rgba(255,96,96,${+t}) 0%, rgba(255,0,202,${+t}) 100%)`,Ke={male:"#648ceb",female:"pink",other:"#b1a1bf",accent:GI(1),accentColor:"rgb(255,48,149)",dislikeColor:"#060a37"};function ru(t){let e,n;return{c(){e=ne("desc"),n=de(t[7])},m(i,s){S(i,e,s),m(e,n)},p(i,s){s&128&&Be(n,i[7])},d(i){i&&w(e)}}}function ou(t){let e,n;return{c(){e=ne("title"),n=de(t[6])},m(i,s){S(i,e,s),m(e,n)},p(i,s){s&64&&Be(n,i[6])},d(i){i&&w(e)}}}function KI(t){let e,n,i,s=t[7]&&ru(t),r=t[6]&&ou(t);return{c(){e=ne("svg"),s&&s.c(),n=vt(),r&&r.c(),i=ne("path"),g(i,"d","M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"),g(i,"fill",t[2]),g(e,"viewBox",t[3]),g(e,"width",t[0]),g(e,"height",t[1]),g(e,"class",t[8]),g(e,"aria-label",t[4]),g(e,"aria-hidden",t[5])},m(o,a){S(o,e,a),s&&s.m(e,null),m(e,n),r&&r.m(e,null),m(e,i)},p(o,[a]){o[7]?s?s.p(o,a):(s=ru(o),s.c(),s.m(e,n)):s&&(s.d(1),s=null),o[6]?r?r.p(o,a):(r=ou(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a&4&&g(i,"fill",o[2]),a&8&&g(e,"viewBox",o[3]),a&1&&g(e,"width",o[0]),a&2&&g(e,"height",o[1]),a&256&&g(e,"class",o[8]),a&16&&g(e,"aria-label",o[4]),a&32&&g(e,"aria-hidden",o[5])},i:M,o:M,d(o){o&&w(e),s&&s.d(),r&&r.d()}}}function WI(t,e,n){let{size:i="1em"}=e,{width:s=i}=e,{height:r=i}=e,{color:o="currentColor"}=e,{viewBox:a="0 0 24 24"}=e,{ariaLabel:l=void 0}=e,{ariaHidden:c=void 0}=e,{title:u=void 0}=e,{desc:d=void 0}=e,{class:f=void 0}=e;return t.$$set=h=>{"size"in h&&n(9,i=h.size),"width"in h&&n(0,s=h.width),"height"in h&&n(1,r=h.height),"color"in h&&n(2,o=h.color),"viewBox"in h&&n(3,a=h.viewBox),"ariaLabel"in h&&n(4,l=h.ariaLabel),"ariaHidden"in h&&n(5,c=h.ariaHidden),"title"in h&&n(6,u=h.title),"desc"in h&&n(7,d=h.desc),"class"in h&&n(8,f=h.class)},[s,r,o,a,l,c,u,d,f,i]}class QI extends le{constructor(e){super(),ae(this,e,WI,KI,ie,{size:9,width:0,height:1,color:2,viewBox:3,ariaLabel:4,ariaHidden:5,title:6,desc:7,class:8})}}function au(t){let e,n;return e=new QI({props:{width:null,height:null,color:"white",class:`genderSelectorHeartIcon ${t[1]?"active":"inactive"}`}}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},p(i,s){const r={};s&2&&(r.class=`genderSelectorHeartIcon ${i[1]?"active":"inactive"}`),e.$set(r)},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function XI(t){let e,n,i=t[0]&&au(t);return{c(){i&&i.c(),e=vt()},m(s,r){i&&i.m(s,r),S(s,e,r),n=!0},p(s,[r]){s[0]?i?(i.p(s,r),r&1&&T(i,1)):(i=au(s),i.c(),T(i,1),i.m(e.parentNode,e)):i&&(We(),k(i,1,1,()=>{i=null}),Qe())},i(s){n||(T(i),n=!0)},o(s){k(i),n=!1},d(s){i&&i.d(s),s&&w(e)}}}function YI(t,e,n){let{visible:i}=e,{isActive:s}=e;return t.$$set=r=>{"visible"in r&&n(0,i=r.visible),"isActive"in r&&n(1,s=r.isActive)},[i,s]}class lo extends le{constructor(e){super(),ae(this,e,YI,XI,ie,{visible:0,isActive:1})}}function lu(t){let e,n;return{c(){e=I("div"),g(e,"class","selector svelte-1owyvm6"),g(e,"style",n=`
                    border-radius: ${t[2]?"10px":"50%"};
                    transform: translateX(${(t[5]??-1)*64}px) scale(${t[2]?1:0});
                    --translate-x: ${(t[5]??-1)*64}px;
                    animation: ${t[2]?"0.3s popIn":"0.3s popOut"};
                    background-color: ${t[6]};`)},m(i,s){S(i,e,s),t[16](e)},p(i,s){s&100&&n!==(n=`
                    border-radius: ${i[2]?"10px":"50%"};
                    transform: translateX(${(i[5]??-1)*64}px) scale(${i[2]?1:0});
                    --translate-x: ${(i[5]??-1)*64}px;
                    animation: ${i[2]?"0.3s popIn":"0.3s popOut"};
                    background-color: ${i[6]};`)&&g(e,"style",n)},d(i){i&&w(e),t[16](null)}}}function JI(t){let e,n;return e=new t[8]({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function ZI(t){let e,n;return e=new t[11]({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function eE(t){let e,n;return e=new t[7]({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function tE(t){let e,n;return e=new t[10]({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function nE(t){let e,n;return e=new t[9]({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function iE(t){let e,n;return e=new t[12]({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function cu(t){let e,n;return{c(){e=I("div"),g(e,"class","selector foreground svelte-1owyvm6"),g(e,"style",n=`
                    border-radius: 50%;
                    transform: translateX(${(t[5]??-1)*64}px) scale(${t[2]?1:0});
                    --translate-x: ${(t[5]??-1)*64}px;
                    animation: ${t[2]?"0.3s popIn":"0.3s popOut"};`)},m(i,s){S(i,e,s),t[20](e)},p(i,s){s&36&&n!==(n=`
                    border-radius: 50%;
                    transform: translateX(${(i[5]??-1)*64}px) scale(${i[2]?1:0});
                    --translate-x: ${(i[5]??-1)*64}px;
                    animation: ${i[2]?"0.3s popIn":"0.3s popOut"};`)&&g(e,"style",n)},d(i){i&&w(e),t[20](null)}}}function sE(t){let e,n,i,s,r,o,a,l,c,u,d,f,h,p,y,E,A,v,_,C,V,P,F,L,D,fe,J,we,Xe,Ne,Tt,ce=!t[1]&&lu(t);const Ye=[ZI,JI],Je=[];function st($,Ue){return $[1]?0:1}f=st(t),h=Je[f]=Ye[f](t),y=new lo({props:{visible:t[1],isActive:t[0].male}});const ee=[tE,eE],rt=[];function ot($,Ue){return $[1]?0:1}v=ot(t),_=rt[v]=ee[v](t),V=new lo({props:{visible:t[1],isActive:t[0].female}});const me=[iE,nE],N=[];function re($,Ue){return $[1]?0:1}L=re(t),D=N[L]=me[L](t),J=new lo({props:{visible:t[1],isActive:t[0].other}});let B=!t[1]&&cu(t);return{c(){e=I("div"),n=I("div"),ce&&ce.c(),i=j(),s=I("div"),r=j(),o=I("div"),a=j(),l=I("div"),c=j(),u=I("div"),d=I("button"),h.c(),p=j(),Q(y.$$.fragment),E=j(),A=I("button"),_.c(),C=j(),Q(V.$$.fragment),P=j(),F=I("button"),D.c(),fe=j(),Q(J.$$.fragment),we=j(),B&&B.c(),g(s,"style",`background-color: ${Ke.male}`),g(s,"class","svelte-1owyvm6"),g(o,"style",`background-color: ${Ke.female}`),g(o,"class","svelte-1owyvm6"),g(l,"style",`background-color: ${Ke.other}`),g(l,"class","svelte-1owyvm6"),g(n,"class","background svelte-1owyvm6"),g(d,"class","icon svelte-1owyvm6"),g(A,"class","icon svelte-1owyvm6"),g(F,"class","icon svelte-1owyvm6"),g(u,"class","container svelte-1owyvm6"),g(e,"class","wrapper svelte-1owyvm6")},m($,Ue){S($,e,Ue),m(e,n),ce&&ce.m(n,null),m(n,i),m(n,s),m(n,r),m(n,o),m(n,a),m(n,l),m(e,c),m(e,u),m(u,d),Je[f].m(d,null),m(d,p),K(y,d,null),m(u,E),m(u,A),rt[v].m(A,null),m(A,C),K(V,A,null),m(u,P),m(u,F),N[L].m(F,null),m(F,fe),K(J,F,null),m(u,we),B&&B.m(u,null),Xe=!0,Ne||(Tt=[Ce(d,"click",t[17]),Ce(A,"click",t[18]),Ce(F,"click",t[19])],Ne=!0)},p($,[Ue]){$[1]?ce&&(ce.d(1),ce=null):ce?ce.p($,Ue):(ce=lu($),ce.c(),ce.m(n,i));let an=f;f=st($),f!==an&&(We(),k(Je[an],1,1,()=>{Je[an]=null}),Qe(),h=Je[f],h||(h=Je[f]=Ye[f]($),h.c()),T(h,1),h.m(d,p));const Pt={};Ue&2&&(Pt.visible=$[1]),Ue&1&&(Pt.isActive=$[0].male),y.$set(Pt);let wt=v;v=ot($),v!==wt&&(We(),k(rt[wt],1,1,()=>{rt[wt]=null}),Qe(),_=rt[v],_||(_=rt[v]=ee[v]($),_.c()),T(_,1),_.m(A,C));const Lt={};Ue&2&&(Lt.visible=$[1]),Ue&1&&(Lt.isActive=$[0].female),V.$set(Lt);let ln=L;L=re($),L!==ln&&(We(),k(N[ln],1,1,()=>{N[ln]=null}),Qe(),D=N[L],D||(D=N[L]=me[L]($),D.c()),T(D,1),D.m(F,fe));const Pn={};Ue&2&&(Pn.visible=$[1]),Ue&1&&(Pn.isActive=$[0].other),J.$set(Pn),$[1]?B&&(B.d(1),B=null):B?B.p($,Ue):(B=cu($),B.c(),B.m(u,null))},i($){Xe||(T(h),T(y.$$.fragment,$),T(_),T(V.$$.fragment,$),T(D),T(J.$$.fragment,$),Xe=!0)},o($){k(h),k(y.$$.fragment,$),k(_),k(V.$$.fragment,$),k(D),k(J.$$.fragment,$),Xe=!1},d($){$&&w(e),ce&&ce.d(),Je[f].d(),W(y),rt[v].d(),W(V),N[L].d(),W(J),B&&B.d(),Ne=!1,Ot(Tt)}}}function rE(t,e,n){let i,s,r,o,{selected:a}=e,{multiple:l=!1}=e;const c=DI,u=PI,d=UI,f=BI,h=jI,p=zI;let y=s,E,A;const v=L=>{if(n(14,y=s),a[L]){n(0,a[L]=!1,a);return}l||(n(0,a.male=!1,a),n(0,a.female=!1,a),n(0,a.other=!1,a)),n(0,a[L]=!0,a)};function _(L){Yt[L?"unshift":"push"](()=>{A=L,n(4,A)})}const C=()=>v("male"),V=()=>v("female"),P=()=>v("other");function F(L){Yt[L?"unshift":"push"](()=>{E=L,n(3,E)})}return t.$$set=L=>{"selected"in L&&n(0,a=L.selected),"multiple"in L&&n(1,l=L.multiple)},t.$$.update=()=>{t.$$.dirty&1&&n(6,i=a.male?Ke.male:a.female?Ke.female:Ke.other),t.$$.dirty&1&&n(15,s=a.male?0:a.female?1:a.other?2:null),t.$$.dirty&1&&n(2,r=Object.values(a).some(L=>L)),t.$$.dirty&4&&console.log(r),t.$$.dirty&49156&&n(5,o=r?s:y)},[a,l,r,E,A,o,i,c,u,d,f,h,p,v,y,s,_,C,V,P,F]}class uu extends le{constructor(e){super(),ae(this,e,rE,sE,ie,{selected:0,multiple:1})}}const hu=()=>({male:!1,female:!1,other:!1});function du(t){let e,n;return{c(){e=ne("desc"),n=de(t[7])},m(i,s){S(i,e,s),m(e,n)},p(i,s){s&128&&Be(n,i[7])},d(i){i&&w(e)}}}function fu(t){let e,n;return{c(){e=ne("title"),n=de(t[6])},m(i,s){S(i,e,s),m(e,n)},p(i,s){s&64&&Be(n,i[6])},d(i){i&&w(e)}}}function oE(t){let e,n,i,s=t[7]&&du(t),r=t[6]&&fu(t);return{c(){e=ne("svg"),s&&s.c(),n=vt(),r&&r.c(),i=ne("path"),g(i,"d","M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"),g(i,"fill",t[2]),g(e,"viewBox",t[3]),g(e,"width",t[0]),g(e,"height",t[1]),g(e,"class",t[8]),g(e,"aria-label",t[4]),g(e,"aria-hidden",t[5])},m(o,a){S(o,e,a),s&&s.m(e,null),m(e,n),r&&r.m(e,null),m(e,i)},p(o,[a]){o[7]?s?s.p(o,a):(s=du(o),s.c(),s.m(e,n)):s&&(s.d(1),s=null),o[6]?r?r.p(o,a):(r=fu(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a&4&&g(i,"fill",o[2]),a&8&&g(e,"viewBox",o[3]),a&1&&g(e,"width",o[0]),a&2&&g(e,"height",o[1]),a&256&&g(e,"class",o[8]),a&16&&g(e,"aria-label",o[4]),a&32&&g(e,"aria-hidden",o[5])},i:M,o:M,d(o){o&&w(e),s&&s.d(),r&&r.d()}}}function aE(t,e,n){let{size:i="1em"}=e,{width:s=i}=e,{height:r=i}=e,{color:o="currentColor"}=e,{viewBox:a="0 0 24 24"}=e,{ariaLabel:l=void 0}=e,{ariaHidden:c=void 0}=e,{title:u=void 0}=e,{desc:d=void 0}=e,{class:f=void 0}=e;return t.$$set=h=>{"size"in h&&n(9,i=h.size),"width"in h&&n(0,s=h.width),"height"in h&&n(1,r=h.height),"color"in h&&n(2,o=h.color),"viewBox"in h&&n(3,a=h.viewBox),"ariaLabel"in h&&n(4,l=h.ariaLabel),"ariaHidden"in h&&n(5,c=h.ariaHidden),"title"in h&&n(6,u=h.title),"desc"in h&&n(7,d=h.desc),"class"in h&&n(8,f=h.class)},[s,r,o,a,l,c,u,d,f,i]}class vg extends le{constructor(e){super(),ae(this,e,aE,oE,ie,{size:9,width:0,height:1,color:2,viewBox:3,ariaLabel:4,ariaHidden:5,title:6,desc:7,class:8})}}const Ys=(t,e)=>`https://storage.googleapis.com/spartan-mingle.appspot.com/userImages/${t}/${e}`;function lE(t){let e,n;return{c(){e=I("img"),g(e,"style",t[3]),Tl(e.src,n=Ys(t[0],t[1]))||g(e,"src",n),g(e,"alt",t[2])},m(i,s){S(i,e,s)},p(i,[s]){s&8&&g(e,"style",i[3]),s&3&&!Tl(e.src,n=Ys(i[0],i[1]))&&g(e,"src",n),s&4&&g(e,"alt",i[2])},i:M,o:M,d(i){i&&w(e)}}}function cE(t,e,n){let{uid:i}=e,{id:s}=e,{alt:r}=e,{style:o=""}=e;return t.$$set=a=>{"uid"in a&&n(0,i=a.uid),"id"in a&&n(1,s=a.id),"alt"in a&&n(2,r=a.alt),"style"in a&&n(3,o=a.style)},[i,s,r,o]}class fl extends le{constructor(e){super(),ae(this,e,cE,lE,ie,{uid:0,id:1,alt:2,style:3})}}function gu(t){let e,n;return{c(){e=ne("desc"),n=de(t[7])},m(i,s){S(i,e,s),m(e,n)},p(i,s){s&128&&Be(n,i[7])},d(i){i&&w(e)}}}function pu(t){let e,n;return{c(){e=ne("title"),n=de(t[6])},m(i,s){S(i,e,s),m(e,n)},p(i,s){s&64&&Be(n,i[6])},d(i){i&&w(e)}}}function uE(t){let e,n,i,s=t[7]&&gu(t),r=t[6]&&pu(t);return{c(){e=ne("svg"),s&&s.c(),n=vt(),r&&r.c(),i=ne("path"),g(i,"d","M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"),g(i,"fill",t[2]),g(e,"viewBox",t[3]),g(e,"width",t[0]),g(e,"height",t[1]),g(e,"class",t[8]),g(e,"aria-label",t[4]),g(e,"aria-hidden",t[5])},m(o,a){S(o,e,a),s&&s.m(e,null),m(e,n),r&&r.m(e,null),m(e,i)},p(o,[a]){o[7]?s?s.p(o,a):(s=gu(o),s.c(),s.m(e,n)):s&&(s.d(1),s=null),o[6]?r?r.p(o,a):(r=pu(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a&4&&g(i,"fill",o[2]),a&8&&g(e,"viewBox",o[3]),a&1&&g(e,"width",o[0]),a&2&&g(e,"height",o[1]),a&256&&g(e,"class",o[8]),a&16&&g(e,"aria-label",o[4]),a&32&&g(e,"aria-hidden",o[5])},i:M,o:M,d(o){o&&w(e),s&&s.d(),r&&r.d()}}}function hE(t,e,n){let{size:i="1em"}=e,{width:s=i}=e,{height:r=i}=e,{color:o="currentColor"}=e,{viewBox:a="0 0 24 24"}=e,{ariaLabel:l=void 0}=e,{ariaHidden:c=void 0}=e,{title:u=void 0}=e,{desc:d=void 0}=e,{class:f=void 0}=e;return t.$$set=h=>{"size"in h&&n(9,i=h.size),"width"in h&&n(0,s=h.width),"height"in h&&n(1,r=h.height),"color"in h&&n(2,o=h.color),"viewBox"in h&&n(3,a=h.viewBox),"ariaLabel"in h&&n(4,l=h.ariaLabel),"ariaHidden"in h&&n(5,c=h.ariaHidden),"title"in h&&n(6,u=h.title),"desc"in h&&n(7,d=h.desc),"class"in h&&n(8,f=h.class)},[s,r,o,a,l,c,u,d,f,i]}class dE extends le{constructor(e){super(),ae(this,e,hE,uE,ie,{size:9,width:0,height:1,color:2,viewBox:3,ariaLabel:4,ariaHidden:5,title:6,desc:7,class:8})}}function mu(t,e,n){const i=t.slice();return i[7]=e[n][0],i[8]=e[n][1],i}function fE(t){let e,n,i,s=Math.floor(t[8].progress*100)+"",r,o;return{c(){e=I("div"),n=I("div"),i=de("Uploading... ("),r=de(s),o=de("%)"),g(n,"class","fakeImage svelte-wqln31"),g(e,"class","imageContainer svelte-wqln31")},m(a,l){S(a,e,l),m(e,n),m(n,i),m(n,r),m(n,o)},p(a,l){l&1&&s!==(s=Math.floor(a[8].progress*100)+"")&&Be(r,s)},i:M,o:M,d(a){a&&w(e)}}}function gE(t){let e,n,i,s,r,o,a,l;n=new fl({props:{uid:t[1].uid,id:t[7],alt:"photo of you"}}),r=new vg({props:{color:"white"}});function c(){return t[5](t[7])}return{c(){e=I("div"),Q(n.$$.fragment),i=j(),s=I("button"),Q(r.$$.fragment),g(s,"class","close svelte-wqln31"),g(e,"class","imageContainer svelte-wqln31")},m(u,d){S(u,e,d),K(n,e,null),m(e,i),m(e,s),K(r,s,null),o=!0,a||(l=Ce(s,"click",c),a=!0)},p(u,d){t=u;const f={};d&2&&(f.uid=t[1].uid),d&1&&(f.id=t[7]),n.$set(f)},i(u){o||(T(n.$$.fragment,u),T(r.$$.fragment,u),o=!0)},o(u){k(n.$$.fragment,u),k(r.$$.fragment,u),o=!1},d(u){u&&w(e),W(n),W(r),a=!1,l()}}}function yu(t){let e,n,i,s;const r=[gE,fE],o=[];function a(l,c){return l[8].type==="upload"&&l[8].done||l[8].type==="old"?0:l[8].type==="upload"?1:-1}return~(e=a(t))&&(n=o[e]=r[e](t)),{c(){n&&n.c(),i=vt()},m(l,c){~e&&o[e].m(l,c),S(l,i,c),s=!0},p(l,c){let u=e;e=a(l),e===u?~e&&o[e].p(l,c):(n&&(We(),k(o[u],1,1,()=>{o[u]=null}),Qe()),~e?(n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),T(n,1),n.m(i.parentNode,i)):n=null)},i(l){s||(T(n),s=!0)},o(l){k(n),s=!1},d(l){~e&&o[e].d(l),l&&w(i)}}}function _u(t){let e,n,i,s,r,o,a;return n=new dE({props:{color:Ke.accentColor,size:64}}),{c(){e=I("label"),Q(n.$$.fragment),i=j(),s=I("input"),g(s,"type","file"),g(s,"accept","image/*"),s.multiple=!0,g(s,"class","svelte-wqln31"),g(e,"class","uploadBox svelte-wqln31")},m(l,c){S(l,e,c),K(n,e,null),m(e,i),m(e,s),r=!0,o||(a=Ce(s,"change",t[4]),o=!0)},p:M,i(l){r||(T(n.$$.fragment,l),r=!0)},o(l){k(n.$$.fragment,l),r=!1},d(l){l&&w(e),W(n),o=!1,a()}}}function pE(t){let e,n,i,s=Object.entries(t[0]),r=[];for(let l=0;l<s.length;l+=1)r[l]=yu(mu(t,s,l));const o=l=>k(r[l],1,1,()=>{r[l]=null});let a=t[2]<6&&_u(t);return{c(){e=I("div");for(let l=0;l<r.length;l+=1)r[l].c();n=j(),a&&a.c(),g(e,"class","container svelte-wqln31")},m(l,c){S(l,e,c);for(let u=0;u<r.length;u+=1)r[u].m(e,null);m(e,n),a&&a.m(e,null),i=!0},p(l,[c]){if(c&11){s=Object.entries(l[0]);let u;for(u=0;u<s.length;u+=1){const d=mu(l,s,u);r[u]?(r[u].p(d,c),T(r[u],1)):(r[u]=yu(d),r[u].c(),T(r[u],1),r[u].m(e,n))}for(We(),u=s.length;u<r.length;u+=1)o(u);Qe()}l[2]<6?a?(a.p(l,c),c&4&&T(a,1)):(a=_u(l),a.c(),T(a,1),a.m(e,null)):a&&(We(),k(a,1,1,()=>{a=null}),Qe())},i(l){if(!i){for(let c=0;c<s.length;c+=1)T(r[c]);T(a),i=!0}},o(l){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)k(r[c]);k(a),i=!1},d(l){l&&w(e),Ti(r,l),a&&a.d()}}}function mE(t,e,n){let i,s,{photos:r={}}=e;const o=u=>{delete r[u],n(0,r)},a=u=>{for(const d of u.currentTarget.files)s<6&&l(crypto.randomUUID(),d)},l=(u,d)=>{const f=tI(uI(i.uid,u),d);n(0,r[u]={type:"upload",progress:0,done:!1,error:!1,task:f},r),f.on("state_changed",h=>n(0,r[u].progress=h.bytesTransferred/h.totalBytes,r),()=>n(0,r[u].error=!0,r),()=>n(0,r[u].done=!0,r))},c=u=>o(u);return t.$$set=u=>{"photos"in u&&n(0,r=u.photos)},t.$$.update=()=>{t.$$.dirty&1&&n(2,s=Object.keys(r).length)},n(1,i=Fu(Lr).fbUser),[r,i,s,o,a,c]}class yE extends le{constructor(e){super(),ae(this,e,mE,pE,ie,{photos:0})}}function _E(t){let e,n,i,s,r;const o=t[2].default,a=Jo(o,t,t[1],null);return{c(){e=I("button"),a&&a.c(),g(e,"class",n=bt(t[0]?"minor":"")+" svelte-sdg8sr")},m(l,c){S(l,e,c),a&&a.m(e,null),i=!0,s||(r=Ce(e,"click",t[3]),s=!0)},p(l,[c]){a&&a.p&&(!i||c&2)&&ea(a,o,l,l[1],i?Zo(o,l[1],c,null):ta(l[1]),null),(!i||c&1&&n!==(n=bt(l[0]?"minor":"")+" svelte-sdg8sr"))&&g(e,"class",n)},i(l){i||(T(a,l),i=!0)},o(l){k(a,l),i=!1},d(l){l&&w(e),a&&a.d(l),s=!1,r()}}}function vE(t,e,n){let{$$slots:i={},$$scope:s}=e,{minor:r=!1}=e;function o(a){Ug.call(this,t,a)}return t.$$set=a=>{"minor"in a&&n(0,r=a.minor),"$$scope"in a&&n(1,s=a.$$scope)},[r,s,i,o]}class Xo extends le{constructor(e){super(),ae(this,e,vE,_E,ie,{minor:0})}}function wE(t){let e,n;const i=t[1].default,s=Jo(i,t,t[0],null);return{c(){e=I("div"),s&&s.c(),g(e,"class","svelte-sqe6h7")},m(r,o){S(r,e,o),s&&s.m(e,null),n=!0},p(r,[o]){s&&s.p&&(!n||o&1)&&ea(s,i,r,r[0],n?Zo(i,r[0],o,null):ta(r[0]),null)},i(r){n||(T(s,r),n=!0)},o(r){k(s,r),n=!1},d(r){r&&w(e),s&&s.d(r)}}}function bE(t,e,n){let{$$slots:i={},$$scope:s}=e;return t.$$set=r=>{"$$scope"in r&&n(0,s=r.$$scope)},[s,i]}class TE extends le{constructor(e){super(),ae(this,e,bE,wE,ie,{})}}function IE(t){let e;return{c(){e=I("span"),e.textContent="Loading..."},m(n,i){S(n,e,i)},p:M,i:M,o:M,d(n){n&&w(e)}}}class wg extends le{constructor(e){super(),ae(this,e,null,IE,ie,{})}}function EE(t){let e;return{c(){e=I("div"),e.textContent="Loading...",g(e,"class","svelte-lr8j3l")},m(n,i){S(n,e,i)},p:M,i:M,o:M,d(n){n&&w(e)}}}class kE extends le{constructor(e){super(),ae(this,e,null,EE,ie,{})}}function vu(t){let e,n;return{c(){e=ne("desc"),n=de(t[7])},m(i,s){S(i,e,s),m(e,n)},p(i,s){s&128&&Be(n,i[7])},d(i){i&&w(e)}}}function wu(t){let e,n;return{c(){e=ne("title"),n=de(t[6])},m(i,s){S(i,e,s),m(e,n)},p(i,s){s&64&&Be(n,i[6])},d(i){i&&w(e)}}}function SE(t){let e,n,i,s=t[7]&&vu(t),r=t[6]&&wu(t);return{c(){e=ne("svg"),s&&s.c(),n=vt(),r&&r.c(),i=ne("path"),g(i,"d","M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"),g(i,"fill",t[2]),g(e,"viewBox",t[3]),g(e,"width",t[0]),g(e,"height",t[1]),g(e,"class",t[8]),g(e,"aria-label",t[4]),g(e,"aria-hidden",t[5])},m(o,a){S(o,e,a),s&&s.m(e,null),m(e,n),r&&r.m(e,null),m(e,i)},p(o,[a]){o[7]?s?s.p(o,a):(s=vu(o),s.c(),s.m(e,n)):s&&(s.d(1),s=null),o[6]?r?r.p(o,a):(r=wu(o),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a&4&&g(i,"fill",o[2]),a&8&&g(e,"viewBox",o[3]),a&1&&g(e,"width",o[0]),a&2&&g(e,"height",o[1]),a&256&&g(e,"class",o[8]),a&16&&g(e,"aria-label",o[4]),a&32&&g(e,"aria-hidden",o[5])},i:M,o:M,d(o){o&&w(e),s&&s.d(),r&&r.d()}}}function AE(t,e,n){let{size:i="1em"}=e,{width:s=i}=e,{height:r=i}=e,{color:o="currentColor"}=e,{viewBox:a="0 0 24 24"}=e,{ariaLabel:l=void 0}=e,{ariaHidden:c=void 0}=e,{title:u=void 0}=e,{desc:d=void 0}=e,{class:f=void 0}=e;return t.$$set=h=>{"size"in h&&n(9,i=h.size),"width"in h&&n(0,s=h.width),"height"in h&&n(1,r=h.height),"color"in h&&n(2,o=h.color),"viewBox"in h&&n(3,a=h.viewBox),"ariaLabel"in h&&n(4,l=h.ariaLabel),"ariaHidden"in h&&n(5,c=h.ariaHidden),"title"in h&&n(6,u=h.title),"desc"in h&&n(7,d=h.desc),"class"in h&&n(8,f=h.class)},[s,r,o,a,l,c,u,d,f,i]}class bg extends le{constructor(e){super(),ae(this,e,AE,SE,ie,{size:9,width:0,height:1,color:2,viewBox:3,ariaLabel:4,ariaHidden:5,title:6,desc:7,class:8})}}function CE(t){let e,n,i,s,r,o;return n=new fl({props:{id:t[0],uid:t[1],alt:t[2]}}),r=new bg({props:{color:"white",size:96}}),{c(){e=I("div"),Q(n.$$.fragment),i=j(),s=I("div"),Q(r.$$.fragment),g(s,"class","backside svelte-1nj92wz"),g(s,"style",`background: ${Ke.accent}`),g(e,"class","container svelte-1nj92wz"),g(e,"style",t[3])},m(a,l){S(a,e,l),K(n,e,null),m(e,i),m(e,s),K(r,s,null),o=!0},p(a,[l]){const c={};l&1&&(c.id=a[0]),l&2&&(c.uid=a[1]),l&4&&(c.alt=a[2]),n.$set(c),(!o||l&8)&&g(e,"style",a[3])},i(a){o||(T(n.$$.fragment,a),T(r.$$.fragment,a),o=!0)},o(a){k(n.$$.fragment,a),k(r.$$.fragment,a),o=!1},d(a){a&&w(e),W(n),W(r)}}}function RE(t,e,n){let{id:i}=e,{uid:s}=e,{alt:r}=e,{style:o=""}=e;return t.$$set=a=>{"id"in a&&n(0,i=a.id),"uid"in a&&n(1,s=a.uid),"alt"in a&&n(2,r=a.alt),"style"in a&&n(3,o=a.style)},[i,s,r,o]}class DE extends le{constructor(e){super(),ae(this,e,RE,CE,ie,{id:0,uid:1,alt:2,style:3})}}function bu(t,e,n){const i=t.slice();return i[16]=e[n],i[17]=e,i[18]=n,i}function Tu(t){let e,n,i=t[18];const s=()=>t[9](e,i),r=()=>t[9](null,i);return{c(){e=I("span"),n=de(t[16]),g(e,"class","svelte-1663oaz")},m(o,a){S(o,e,a),m(e,n),s()},p(o,a){t=o,i!==t[18]&&(r(),i=t[18],s())},d(o){o&&w(e),r()}}}function NE(t){let e,n,i,s,r,o,a,l,c,u,d,f,h,p,y,E;a=new DE({props:{uid:t[0],id:t[1],alt:"text"}});let A="match!",v=[];for(let _=0;_<A.length;_+=1)v[_]=Tu(bu(t,A,_));return{c(){e=I("div"),n=I("div"),s=j(),r=I("div"),o=I("div"),Q(a.$$.fragment),c=j(),u=I("div");for(let _=0;_<v.length;_+=1)v[_].c();g(n,"class",bt("bg")+" svelte-1663oaz"),g(n,"style",i=`${t[3]&&!t[7]?"opacity: 0.25":"opacity: 0"}; background: ${Ke.accent}`),g(o,"class","imgContainer svelte-1663oaz"),g(o,"style",l=`transform: scale(${t[6]}) rotate(${t[4]}turn) rotate3d(0, 1, 0, ${t[5]}turn)`),g(u,"class","callout svelte-1663oaz"),g(r,"class",d=bt(`container ${t[7]?"goAway":""}`)+" svelte-1663oaz"),g(e,"class",f=bt(`wrapper ${t[7]?"goAway":""}`)+" svelte-1663oaz"),g(e,"style",h=`${t[3]&&!t[7]?`
        backdrop-filter: blur(4px) opacity(1);
    `:`
        backdrop-filter: blur(4px) opacity(0);
    `}`)},m(_,C){S(_,e,C),m(e,n),m(e,s),m(e,r),m(r,o),K(a,o,null),m(r,c),m(r,u);for(let V=0;V<v.length;V+=1)v[V].m(u,null);p=!0,y||(E=[Ce(e,"keydown",t[8]),Ce(e,"click",t[8])],y=!0)},p(_,[C]){(!p||C&136&&i!==(i=`${_[3]&&!_[7]?"opacity: 0.25":"opacity: 0"}; background: ${Ke.accent}`))&&g(n,"style",i);const V={};if(C&1&&(V.uid=_[0]),C&2&&(V.id=_[1]),a.$set(V),(!p||C&112&&l!==(l=`transform: scale(${_[6]}) rotate(${_[4]}turn) rotate3d(0, 1, 0, ${_[5]}turn)`))&&g(o,"style",l),C&4){A="match!";let P;for(P=0;P<A.length;P+=1){const F=bu(_,A,P);v[P]?v[P].p(F,C):(v[P]=Tu(F),v[P].c(),v[P].m(u,null))}for(;P<v.length;P+=1)v[P].d(1);v.length=A.length}(!p||C&128&&d!==(d=bt(`container ${_[7]?"goAway":""}`)+" svelte-1663oaz"))&&g(r,"class",d),(!p||C&128&&f!==(f=bt(`wrapper ${_[7]?"goAway":""}`)+" svelte-1663oaz"))&&g(e,"class",f),(!p||C&136&&h!==(h=`${_[3]&&!_[7]?`
        backdrop-filter: blur(4px) opacity(1);
    `:`
        backdrop-filter: blur(4px) opacity(0);
    `}`))&&g(e,"style",h)},i(_){p||(T(a.$$.fragment,_),p=!0)},o(_){k(a.$$.fragment,_),p=!1},d(_){_&&w(e),W(a),Ti(v,_),y=!1,Ot(E)}}}const OE=1e3;function PE(t,e,n){let{uid:i}=e,{pid:s}=e;const r=na(),o=[];let a=-1,l=!1,c=Date.now(),u,d,f,h,p=!1;const y=()=>{const _=(Date.now()-c)/OE,C=Math.min(_,1),V=(1-C)**2;if(n(5,f=(1-V)*3),n(4,d=Math.exp(-5*_)+Math.sin(_)*.5*.01),n(6,h=C**(1/3)),Math.floor((_-.4)*2*o.length)>a){const F=a+1;o[F]&&(n(2,o[F].style.visibility="visible",o),n(2,o[F].style.animation="0.25s slideIn",o),a++)}requestAnimationFrame(y)},E=()=>{n(7,p=!0),setTimeout(()=>r("done"),500)};y(),Bu(()=>{u=requestAnimationFrame(y),setTimeout(()=>{n(3,l=!0)},0)}),Vu(()=>{cancelAnimationFrame(u)});function A(v,_){Yt[v?"unshift":"push"](()=>{o[_]=v,n(2,o)})}return t.$$set=v=>{"uid"in v&&n(0,i=v.uid),"pid"in v&&n(1,s=v.pid)},[i,s,o,l,d,f,h,p,E,A]}class LE extends le{constructor(e){super(),ae(this,e,PE,NE,ie,{uid:0,pid:1})}}function Iu(t,e,n){const i=t.slice();return i[24]=e[n],i}function ME(t){let e,n,i={ctx:t,current:null,token:null,hasCatch:!1,pending:qE,then:xE,catch:FE,value:23,blocks:[,,,]};return Vg(t[9],i),{c(){e=vt(),i.block.c()},m(s,r){S(s,e,r),i.block.m(s,i.anchor=r),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(s,r){t=s,qg(i,t,r)},i(s){n||(T(i.block),n=!0)},o(s){for(let r=0;r<3;r+=1){const o=i.blocks[r];k(o)}n=!1},d(s){s&&w(e),i.block.d(s),i.token=null,i=null}}}function UE(t){let e,n;return e=new kE({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},p:M,i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function FE(t){return{c:M,m:M,p:M,i:M,o:M,d:M}}function xE(t){let e,n,i,s,r,o,a,l,c,u,d,f,h,p,y,E,A,v,_,C,V,P,F,L,D,fe,J,we,Xe,Ne,Tt,ce,Ye,Je,st,ee,rt,ot,me,N,re,B,$,Ue,an,Pt,wt,Lt,ln,Pn;function Ig(O){t[13](O)}let gl={};t[1]!==void 0&&(gl.selected=t[1]),c=new uu({props:gl}),Yt.push(()=>Fr(c,"selected",Ig));function Eg(O){t[14](O)}let pl={multiple:!0};t[2]!==void 0&&(pl.selected=t[2]),A=new uu({props:pl}),Yt.push(()=>Fr(A,"selected",Eg));let Ze=(t[4]??"").length>0&&Eu(t);function kg(O){t[17](O)}let ml={};t[0]!==void 0&&(ml.photos=t[0]),ee=new yE({props:ml}),Yt.push(()=>Fr(ee,"photos",kg));let et=t[8].length>0&&ku(t);return wt=new TE({props:{$$slots:{default:[VE]},$$scope:{ctx:t}}}),{c(){e=I("section"),n=I("h2"),n.textContent="Hello! My first name is",i=j(),s=I("input"),r=j(),o=I("section"),a=I("h2"),a.textContent="I am",l=j(),Q(c.$$.fragment),d=j(),f=I("section"),h=I("h2"),h.textContent="I like",p=j(),y=I("i"),y.textContent="select multiple",E=j(),Q(A.$$.fragment),_=j(),C=I("section"),V=I("h2"),V.textContent="I was born on",P=j(),F=I("input"),L=j(),D=I("section"),fe=I("h2"),fe.textContent="About me",J=j(),we=I("i"),we.textContent="optional",Xe=j(),Ne=I("textarea"),Tt=j(),Ze&&Ze.c(),ce=j(),Ye=I("section"),Je=I("h2"),Je.textContent="Photos",st=j(),Q(ee.$$.fragment),ot=j(),me=I("section"),N=I("label"),re=I("input"),B=de(`\r
                I have read and I accept the `),$=I("a"),$.textContent="terms and conditions and privacy policy",Ue=de("."),an=j(),et&&et.c(),Pt=j(),Q(wt.$$.fragment),g(s,"type","text"),g(e,"class","svelte-qowjxl"),g(o,"class","svelte-qowjxl"),g(y,"class","svelte-qowjxl"),g(f,"class","svelte-qowjxl"),g(F,"type","date"),g(C,"class","svelte-qowjxl"),g(we,"class","svelte-qowjxl"),g(Ne,"rows",5),g(Ne,"cols",30),Ne.value=t[4],g(Ne,"class","svelte-qowjxl"),g(D,"class","svelte-qowjxl"),g(Ye,"class","svelte-qowjxl"),g(re,"type","checkbox"),g($,"href","/#terms"),g(me,"class","svelte-qowjxl")},m(O,ue){S(O,e,ue),m(e,n),m(e,i),m(e,s),us(s,t[5]),S(O,r,ue),S(O,o,ue),m(o,a),m(o,l),K(c,o,null),S(O,d,ue),S(O,f,ue),m(f,h),m(f,p),m(f,y),m(f,E),K(A,f,null),S(O,_,ue),S(O,C,ue),m(C,V),m(C,P),m(C,F),us(F,t[3]),S(O,L,ue),S(O,D,ue),m(D,fe),m(D,J),m(D,we),m(D,Xe),m(D,Ne),m(D,Tt),Ze&&Ze.m(D,null),S(O,ce,ue),S(O,Ye,ue),m(Ye,Je),m(Ye,st),K(ee,Ye,null),S(O,ot,ue),S(O,me,ue),m(me,N),m(N,re),re.checked=t[6],m(N,B),m(N,$),m(N,Ue),S(O,an,ue),et&&et.m(O,ue),S(O,Pt,ue),K(wt,O,ue),Lt=!0,ln||(Pn=[Ce(s,"input",t[12]),Ce(F,"input",t[15]),Ce(Ne,"input",t[16]),Ce(re,"change",t[18])],ln=!0)},p(O,ue){ue&32&&s.value!==O[5]&&us(s,O[5]);const yl={};!u&&ue&2&&(u=!0,yl.selected=O[1],Mr(()=>u=!1)),c.$set(yl);const _l={};!v&&ue&4&&(v=!0,_l.selected=O[2],Mr(()=>v=!1)),A.$set(_l),ue&8&&us(F,O[3]),(!Lt||ue&16)&&(Ne.value=O[4]),(O[4]??"").length>0?Ze?Ze.p(O,ue):(Ze=Eu(O),Ze.c(),Ze.m(D,null)):Ze&&(Ze.d(1),Ze=null);const vl={};!rt&&ue&1&&(rt=!0,vl.photos=O[0],Mr(()=>rt=!1)),ee.$set(vl),ue&64&&(re.checked=O[6]),O[8].length>0?et?et.p(O,ue):(et=ku(O),et.c(),et.m(Pt.parentNode,Pt)):et&&(et.d(1),et=null);const wl={};ue&134217728&&(wl.$$scope={dirty:ue,ctx:O}),wt.$set(wl)},i(O){Lt||(T(c.$$.fragment,O),T(A.$$.fragment,O),T(ee.$$.fragment,O),T(wt.$$.fragment,O),Lt=!0)},o(O){k(c.$$.fragment,O),k(A.$$.fragment,O),k(ee.$$.fragment,O),k(wt.$$.fragment,O),Lt=!1},d(O){O&&w(e),O&&w(r),O&&w(o),W(c),O&&w(d),O&&w(f),W(A),O&&w(_),O&&w(C),O&&w(L),O&&w(D),Ze&&Ze.d(),O&&w(ce),O&&w(Ye),W(ee),O&&w(ot),O&&w(me),O&&w(an),et&&et.d(O),O&&w(Pt),W(wt,O),ln=!1,Ot(Pn)}}}function Eu(t){let e,n=(t[4]??"").length+"",i,s,r;return{c(){e=I("span"),i=de(n),s=de("/140"),g(e,"style",r=`color: ${(t[4]??"").length>140?"red":"unset"}`)},m(o,a){S(o,e,a),m(e,i),m(e,s)},p(o,a){a&16&&n!==(n=(o[4]??"").length+"")&&Be(i,n),a&16&&r!==(r=`color: ${(o[4]??"").length>140?"red":"unset"}`)&&g(e,"style",r)},d(o){o&&w(e)}}}function ku(t){let e,n,i=t[8],s=[];for(let r=0;r<i.length;r+=1)s[r]=Su(Iu(t,i,r));return{c(){e=I("section"),n=I("ul");for(let r=0;r<s.length;r+=1)s[r].c();g(e,"class","errors svelte-qowjxl")},m(r,o){S(r,e,o),m(e,n);for(let a=0;a<s.length;a+=1)s[a].m(n,null)},p(r,o){if(o&256){i=r[8];let a;for(a=0;a<i.length;a+=1){const l=Iu(r,i,a);s[a]?s[a].p(l,o):(s[a]=Su(l),s[a].c(),s[a].m(n,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=i.length}},d(r){r&&w(e),Ti(s,r)}}}function Su(t){let e,n=t[24]+"",i;return{c(){e=I("li"),i=de(n)},m(s,r){S(s,e,r),m(e,i)},p(s,r){r&256&&n!==(n=s[24]+"")&&Be(i,n)},d(s){s&&w(e)}}}function BE(t){let e;return{c(){e=de("Save")},m(n,i){S(n,e,i)},d(n){n&&w(e)}}}function VE(t){let e,n;return e=new Xo({props:{$$slots:{default:[BE]},$$scope:{ctx:t}}}),e.$on("click",t[11]),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},p(i,s){const r={};s&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function qE(t){let e,n;return e=new wg({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},p:M,i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function jE(t){let e;return{c(){e=de("Sign out")},m(n,i){S(n,e,i)},d(n){n&&w(e)}}}function $E(t){let e;return{c(){e=de("Delete account")},m(n,i){S(n,e,i)},d(n){n&&w(e)}}}function HE(t){let e,n,i,s,r,o,a,l,c,u;const d=[UE,ME],f=[];function h(p,y){return p[7]?0:1}return e=h(t),n=f[e]=d[e](t),a=new Xo({props:{minor:!0,$$slots:{default:[jE]},$$scope:{ctx:t}}}),a.$on("click",hI),c=new Xo({props:{minor:!0,$$slots:{default:[$E]},$$scope:{ctx:t}}}),c.$on("click",mI),{c(){n.c(),i=j(),s=I("div"),r=j(),o=I("div"),Q(a.$$.fragment),l=j(),Q(c.$$.fragment),g(s,"class","padding svelte-qowjxl"),g(o,"class","actions")},m(p,y){f[e].m(p,y),S(p,i,y),S(p,s,y),S(p,r,y),S(p,o,y),K(a,o,null),m(o,l),K(c,o,null),u=!0},p(p,[y]){let E=e;e=h(p),e===E?f[e].p(p,y):(We(),k(f[E],1,1,()=>{f[E]=null}),Qe(),n=f[e],n?n.p(p,y):(n=f[e]=d[e](p),n.c()),T(n,1),n.m(i.parentNode,i));const A={};y&134217728&&(A.$$scope={dirty:y,ctx:p}),a.$set(A);const v={};y&134217728&&(v.$$scope={dirty:y,ctx:p}),c.$set(v)},i(p){u||(T(n),T(a.$$.fragment,p),T(c.$$.fragment,p),u=!0)},o(p){k(n),k(a.$$.fragment,p),k(c.$$.fragment,p),u=!1},d(p){f[e].d(p),p&&w(i),p&&w(s),p&&w(r),p&&w(o),W(a),W(c)}}}let zE="";function GE(t,e,n){let i;const s=_g();s.then(D=>{D&&(n(1,r={male:D.gender==="male",female:D.gender==="female",other:D.gender==="other"}),n(2,o=D.sexuality),n(3,a=new Date(D.birthday).toISOString().split("T")[0]),n(4,l=D.aboutMe),n(6,u=D.terms===1),n(5,c=D.nickname||Qo),n(0,d=D.photos.reduce((fe,J)=>({...fe,[J]:{type:"old"}}),{})))});let r=hu(),o=hu(),a,l="",c=Qo,u=!1,d={},f;const h=[()=>[r.male||r.female||r.other,"Missing gender: please select your gender."],()=>[o.male||o.female||o.other,"Missing attraction: please select the gender(s) you are attracted to."],()=>[!!a,"Missing birthday: please enter your birthday."],()=>[Date.now()-new Date(a).getTime()>18*52*7*24*60*60*1e3,"Sorry, but you must be at least 18 years of age or older to use this website."],()=>[i>=2,"Not enough photos: please upload at least 2 photos."],()=>[l.length<140,"Description too long: max 140 characters."],()=>[u,"Terms and Conditions: You must agree to the terms and conditions in order to use this website."]];let p=[];const y=()=>{n(8,p=[]);for(const[D,fe]of h.map(J=>J()))D||p.push(fe)},E=D=>{const fe=D.currentTarget;console.log(fe.scrollHeight),fe.scrollHeight>118?fe.value=l:n(4,l=fe.value)},A=()=>{y(),!(p.length>0)&&(n(7,f=dI({nickname:c,tagline:zE,gender:r.male?"male":r.female?"female":"other",sexuality:o,birthday:new Date(a).getTime(),aboutMe:l,terms:u&&1,photos:Object.keys(d)})),f.then(()=>window.location.hash=""))};function v(){c=this.value,n(5,c)}function _(D){r=D,n(1,r)}function C(D){o=D,n(2,o)}function V(){a=this.value,n(3,a)}const P=D=>E(D);function F(D){d=D,n(0,d)}function L(){u=this.checked,n(6,u)}return t.$$.update=()=>{t.$$.dirty&1&&(i=Object.keys(d).length)},[d,r,o,a,l,c,u,f,p,s,E,A,v,_,C,V,P,F,L]}class KE extends le{constructor(e){super(),ae(this,e,GE,HE,ie,{})}}function WE(t){let e,n,i;return{c(){e=I("button"),e.textContent="Sign in with CWRU Google Account",g(e,"class","svelte-xsr2eu")},m(s,r){S(s,e,r),n||(i=Ce(e,"click",mg),n=!0)},p:M,i:M,o:M,d(s){s&&w(e),n=!1,i()}}}class QE extends le{constructor(e){super(),ae(this,e,null,WE,ie,{})}}function XE(t){let e;return{c(){e=I("div"),e.innerHTML=`<h1>Terms and Conditions and Privacy Policy</h1> 

    <p>Welcome to the Spartan Mingle site (the Website)! This is a binding agreement between you
        and the group of owners, operators, administrators and all else responsible for the Website
        (collectively, &quot;us&quot;, &quot;we&quot;). We are not affiliated with Case Western Reserve University (the University);
        we&#39;re just students there.
        
        In order to create an
        account on this website, you need to agree to the following terms and conditions.
        If you disagree with any of these terms, you are prohibited from accessing this site.
        By agreeing to this contract, you agree to use our Website only in accordance with all laws
        and university policy.

        You agree that by using the service, you may be exposed to Content you find offensive or objectionable.
        If such Content is reported to us, it will be our sole discretion as to what action, if any, should be taken,
        in accordance with applicable laws and university policy.</p> 

    <h2 class="svelte-pzkyxi">Eligible Users</h2> 

    <p>In order to use this Website, you must:</p> 

    <ul><li>be considered by the University to be a full-time student; and</li> 
        <li>be of 18 years of age or older.</li></ul> 

    <p>By agreeing to this contract, you agree that you meet all of the above criteria. If, in the future,
        you no longer meet all of the criteria, you agree that you will delete your account and cease usage
        of the Website.</p> 

    <h2 class="svelte-pzkyxi">Your Data and Privacy</h2> 

    <p>You agree that any information, except direct messages, which you provide to us on the Website
        is public information and it may be:</p> 

    <ul><li>stored on our servers for perpetuity, unless your account is deleted; and</li> 
        <li>shared with other users of the website for the purposes of matchmaking.</li></ul> 

    <p>By agreeing to this contract, you agree that any direct messages you send through the Website
        are not private and that we retain the right to share this information with third
        parties such as the University for the purposes of enforcing compliance with university policy.</p> 

    <p>You agree that for all content (photos, text descriptions, etc.) you upload to our Website:</p> 

    <ul><li>the content chiefly depicts you;</li> 
        <li>you give us the non-exclusive right to store, reproduce, and redistribute your content in perpetuity,
            for commercial purposes or otherwise; and</li> 
        <li>you are legally able to give us those rights.</li></ul> 

    <h2 class="svelte-pzkyxi">Termination</h2> 

    <p>We may terminate your access to all or any part of the Website at any time, at our sole discretion,
        if we believe that you have violated this Agreement, or for any other reason that we see fit.
        You agree that any termination of your access
        to the Website may involve removing or discarding any content you have provided. We may, at our sole
        discretion, discontinue providing the Website at any time, with or without notice.</p> 
    <p>If you wish to terminate this Agreement, you may delete your account and cease using the Website.
        Once you delete your account, all of the data which you provided to us will be deleted.</p> 
    <p>All provisions of this Agreement which by their nature should survive termination shall survive termination
        including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations
        of liability.</p> 

    <h2 class="svelte-pzkyxi">Disclaimers</h2> 

    <p><b>This Website is provided &quot;as is&quot;. We hereby disclaim all warranties of any kind, express or implied,
        including, without limitation, the warranties of merchantability, fitness for a particular purpose
        and non-infringement. We do not make any warranty that the Website will be error free or that access
        to the Website will be continuous or uninterrupted. You agree that any interruptions to the service
        will not qualify for reimbursement or compensation. You understand that you download from, or otherwise
        obtain content or services through, the Website at your own discretion and risk.

        In no event shall we be liable for any claim, damages or other liability,
        whether in an action of contract, tort or otherwise, arising from, out of or in connection with the
        software or the use or other dealings in the software.

        No advice or information, whether oral or written, obtained by you in any fashion shall create any warranty
        not expressly stated in this Agreement.

        You expressly understand and agree that in no event will we be liable with respect to any subject matter of
        this agreement under any contract, negligence, strict liability or other legal or equitable theory for: 
        (i) any special, incidental or consequential damages; (ii) the cost of procurement or substitute
        products or services; (iii) interruption of use or loss or corruption of data; (iv)
        any statements or conduct of any third party on the service; or (v) 
        ny unauthorized access to or alterations of your Content. We shall have no liability for any failure
        or delay due to matters beyond our reasonable control.

        The foregoing shall not apply to the extent prohibited by applicable law.</b></p> 

    <h2 class="svelte-pzkyxi">License</h2> 
    <p>This Terms of Service document is based on one developed by Automattic (http://wordpress.com/tos/) and is
        licensed under a Creative Commons Attribution-ShareAlike 2.5 License.</p>`},m(n,i){S(n,e,i)},p:M,i:M,o:M,d(n){n&&w(e)}}}class YE extends le{constructor(e){super(),ae(this,e,null,XE,ie,{})}}function JE(){if(typeof window>"u"){const{subscribe:s}=Cs();return{subscribe:s}}const t=Cs(window.location.href),e=history.pushState,n=history.replaceState,i=()=>t.set(window.location.href);return history.pushState=function(){e.apply(this,arguments),i()},history.replaceState=function(){n.apply(this,arguments),i()},window.addEventListener("popstate",i),window.addEventListener("hashchange",i),{subscribe:Kg(t,s=>new URL(s)).subscribe}}const ZE=JE();function Au(t,e,n){const i=t.slice();return i[24]=e[n],i[26]=n,i}function Cu(t,e,n){const i=t.slice();return i[27]=e[n],i[26]=n,i}function Ru(t){let e,n,i,s,r;return s=new fl({props:{style:`
                z-index: ${t[26]===t[4]?0:-1}
                `,uid:t[1].userId,id:t[27],alt:"photo of "+t[1].nickname}}),{c(){e=I("link"),i=j(),Q(s.$$.fragment),g(e,"rel","prefetch"),g(e,"href",n=Ys(t[1].userId,t[27]))},m(o,a){S(o,e,a),S(o,i,a),K(s,o,a),r=!0},p(o,a){(!r||a&2&&n!==(n=Ys(o[1].userId,o[27])))&&g(e,"href",n);const l={};a&16&&(l.style=`
                z-index: ${o[26]===o[4]?0:-1}
                `),a&2&&(l.uid=o[1].userId),a&2&&(l.id=o[27]),a&2&&(l.alt="photo of "+o[1].nickname),s.$set(l)},i(o){r||(T(s.$$.fragment,o),r=!0)},o(o){k(s.$$.fragment,o),r=!1},d(o){o&&w(e),o&&w(i),W(s,o)}}}function Du(t){let e,n;return{c(){e=I("div"),g(e,"class",n=bt(`photoTab ${t[26]===t[4]?"selected":""}`)+" svelte-koy50e")},m(i,s){S(i,e,s)},p(i,s){s&16&&n!==(n=bt(`photoTab ${i[26]===i[4]?"selected":""}`)+" svelte-koy50e")&&g(e,"class",n)},d(i){i&&w(e)}}}function ek(t){let e,n,i,s,r,o,a,l,c,u,d,f,h=(t[2]||t[1].nickname)+"",p,y,E,A=Math.floor((Date.now()-t[1].birthday)/(52*7*24*60*60*1e3))+"",v,_,C,V=t[1].aboutMe+"",P,F,L,D,fe,J,we,Xe,Ne,Tt,ce,Ye,Je,st=t[1].photos,ee=[];for(let N=0;N<st.length;N+=1)ee[N]=Ru(Cu(t,st,N));const rt=N=>k(ee[N],1,1,()=>{ee[N]=null});let ot=t[1].photos,me=[];for(let N=0;N<ot.length;N+=1)me[N]=Du(Au(t,ot,N));return D=new vg({props:{color:"white",size:96}}),Xe=new bg({props:{color:"white",size:96}}),{c(){e=I("div"),n=I("div");for(let N=0;N<ee.length;N+=1)ee[N].c();i=j(),s=I("div"),r=j(),o=I("div"),a=j(),l=I("div");for(let N=0;N<me.length;N+=1)me[N].c();c=j(),u=I("div"),d=I("div"),f=I("h1"),p=de(h),y=j(),E=I("h2"),v=de(A),_=j(),C=I("p"),P=de(V),F=j(),L=I("div"),Q(D.$$.fragment),J=j(),we=I("div"),Q(Xe.$$.fragment),g(s,"class","leftClickPane svelte-koy50e"),g(o,"class","rightClickPane svelte-koy50e"),g(n,"class","photoContainer svelte-koy50e"),g(l,"class","photoTabs svelte-koy50e"),g(f,"class","svelte-koy50e"),g(E,"class","svelte-koy50e"),g(d,"class","byline svelte-koy50e"),g(C,"class","description svelte-koy50e"),g(L,"class","overlay svelte-koy50e"),g(L,"style",fe=`
        background: ${Ke.dislikeColor};
        ${t[7]>1?`transition: ${t[8]}s`:""};
        opacity: ${t[7]};
    `),g(we,"class","overlay svelte-koy50e"),g(we,"style",Ne=`
        background: ${Ke.accent};
        ${t[6]>1?`transition: ${t[8]}s`:""};
        opacity: ${t[6]};

    `),g(e,"data-debug",t[2]),g(e,"class","container svelte-koy50e"),g(e,"style",Tt=`${t[0]!==null?`z-index: ${t[3]?4:t[0]}`:""}; ${t[5]}`)},m(N,re){S(N,e,re),m(e,n);for(let B=0;B<ee.length;B+=1)ee[B].m(n,null);m(n,i),m(n,s),m(n,r),m(n,o),m(e,a),m(e,l);for(let B=0;B<me.length;B+=1)me[B].m(l,null);m(e,c),m(e,u),m(u,d),m(d,f),m(f,p),m(d,y),m(d,E),m(E,v),m(u,_),m(u,C),m(C,P),m(e,F),m(e,L),K(D,L,null),m(e,J),m(e,we),K(Xe,we,null),ce=!0,Ye||(Je=[Ce(s,"mouseup",t[15]),Ce(o,"mouseup",t[16]),Ce(e,"pointerdown",t[10])],Ye=!0)},p(N,[re]){if(re&18){st=N[1].photos;let B;for(B=0;B<st.length;B+=1){const $=Cu(N,st,B);ee[B]?(ee[B].p($,re),T(ee[B],1)):(ee[B]=Ru($),ee[B].c(),T(ee[B],1),ee[B].m(n,i))}for(We(),B=st.length;B<ee.length;B+=1)rt(B);Qe()}if(re&18){ot=N[1].photos;let B;for(B=0;B<ot.length;B+=1){const $=Au(N,ot,B);me[B]?me[B].p($,re):(me[B]=Du($),me[B].c(),me[B].m(l,null))}for(;B<me.length;B+=1)me[B].d(1);me.length=ot.length}(!ce||re&6)&&h!==(h=(N[2]||N[1].nickname)+"")&&Be(p,h),(!ce||re&2)&&A!==(A=Math.floor((Date.now()-N[1].birthday)/(52*7*24*60*60*1e3))+"")&&Be(v,A),(!ce||re&2)&&V!==(V=N[1].aboutMe+"")&&Be(P,V),(!ce||re&128&&fe!==(fe=`
        background: ${Ke.dislikeColor};
        ${N[7]>1?`transition: ${N[8]}s`:""};
        opacity: ${N[7]};
    `))&&g(L,"style",fe),(!ce||re&64&&Ne!==(Ne=`
        background: ${Ke.accent};
        ${N[6]>1?`transition: ${N[8]}s`:""};
        opacity: ${N[6]};

    `))&&g(we,"style",Ne),(!ce||re&4)&&g(e,"data-debug",N[2]),(!ce||re&41&&Tt!==(Tt=`${N[0]!==null?`z-index: ${N[3]?4:N[0]}`:""}; ${N[5]}`))&&g(e,"style",Tt)},i(N){if(!ce){for(let re=0;re<st.length;re+=1)T(ee[re]);T(D.$$.fragment,N),T(Xe.$$.fragment,N),ce=!0}},o(N){ee=ee.filter(Boolean);for(let re=0;re<ee.length;re+=1)k(ee[re]);k(D.$$.fragment,N),k(Xe.$$.fragment,N),ce=!1},d(N){N&&w(e),Ti(ee,N),Ti(me,N),W(D),W(Xe),Ye=!1,Ot(Je)}}}function tk(t,e,n){let i,s,r,{zIndex:o=null}=e,{profile:a}=e,{debug:l=""}=e;const c=na(),u=(window.innerWidth-500)/1e3;let d=!1,f=0,h=!1,p=[0,0],y=[0,0],E="",A="undecided",v=0,_=0;const C=J=>{const we=f+J;y[0]===0&&y[1]===0&&0<=we&&we<a.photos.length&&n(4,f=we)},V=J=>{J.target.releasePointerCapture(J.pointerId),h=!0,p[0]=J.clientX,p[1]=J.clientY,y[0]=0,y[1]=0},P=J=>{h&&(y[0]=J.clientX-p[0],y[1]=J.clientY-p[1],n(12,[v,_]=y,v,n(13,_)))},F=J=>{if((y[0]!==0||y[1]!==0)&&J.preventDefault(),h=!1,Math.abs(i)>.3){i>0?n(11,A="like"):n(11,A="dislike");const we=Math.sqrt(v**2+_**2);n(12,v=v/we*(window.innerWidth+500)),n(13,_=_/we*window.innerHeight),d||(n(3,d=!0),L(A))}else n(11,A="undecided"),n(12,v=n(13,_=0))},L=J=>{c("swipe",{verdict:J})};Bu(()=>{window.addEventListener("pointermove",P),window.addEventListener("pointerup",F),window.addEventListener("pointercancel",F)}),Vu(()=>{window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",F),window.removeEventListener("pointercancel",F)});const D=()=>C(-1),fe=()=>C(1);return t.$$set=J=>{"zIndex"in J&&n(0,o=J.zIndex),"profile"in J&&n(1,a=J.profile),"debug"in J&&n(2,l=J.debug)},t.$$.update=()=>{t.$$.dirty&4096&&n(14,i=v/window.innerWidth*2),t.$$.dirty&16384&&n(7,s=-Math.min(i,0)),t.$$.dirty&16384&&n(6,r=Math.max(i,0)),t.$$.dirty&14336&&n(5,E=`
                transition: ${A=="undecided"?"none":"ease-out 1s"};
                /*transform-origin: left;*/
                transform: perspective(1000px)
                        /*rotate3d(0, 1, ${_/window.innerHeight}, ${-v/window.innerWidth*45}deg)*/
                        translate(${v}px, ${_}px)
                        rotate3d(1, 0, 0, ${-_/window.innerHeight*45}deg)
                        ;
            `)},[o,a,l,d,f,E,r,s,u,C,V,A,v,_,i,D,fe]}class nk extends le{constructor(e){super(),ae(this,e,tk,ek,ie,{zIndex:0,profile:1,debug:2})}}function Nu(t,e,n){const i=t.slice();return i[8]=e[n],i}function ik(t){let e;return{c(){e=de("No profiles left")},m(n,i){S(n,e,i)},i:M,o:M,d(n){n&&w(e)}}}function sk(t){let e,n;return e=new wg({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function Ou(t,e){let n,i,s;return i=new nk({props:{profile:e[0][e[8]]}}),i.$on("swipe",function(){Js(e[3])&&e[3].apply(this,arguments)}),{key:t,first:null,c(){n=vt(),Q(i.$$.fragment),this.first=n},m(r,o){S(r,n,o),K(i,r,o),s=!0},p(r,o){e=r;const a={};o&3&&(a.profile=e[0][e[8]]),i.$set(a)},i(r){s||(T(i.$$.fragment,r),s=!0)},o(r){k(i.$$.fragment,r),s=!1},d(r){r&&w(n),W(i,r)}}}function rk(t){let e,n,i,s,r=[],o=new Map,a;const l=[sk,ik],c=[];function u(h,p){return h[2]?0:h[1].length==0?1:-1}~(n=u(t))&&(i=c[n]=l[n](t));let d=t[1].slice(0,Pu).reverse();const f=h=>h[8];for(let h=0;h<d.length;h+=1){let p=Nu(t,d,h),y=f(p);o.set(y,r[h]=Ou(y,p))}return{c(){e=I("div"),i&&i.c(),s=j();for(let h=0;h<r.length;h+=1)r[h].c();g(e,"class","container svelte-8epvpi")},m(h,p){S(h,e,p),~n&&c[n].m(e,null),m(e,s);for(let y=0;y<r.length;y+=1)r[y].m(e,null);a=!0},p(h,[p]){let y=n;n=u(h),n!==y&&(i&&(We(),k(c[y],1,1,()=>{c[y]=null}),Qe()),~n?(i=c[n],i||(i=c[n]=l[n](h),i.c()),T(i,1),i.m(e,s)):i=null),p&11&&(d=h[1].slice(0,Pu).reverse(),We(),r=$g(r,p,f,1,h,d,o,e,jg,Ou,null,Nu),Qe())},i(h){if(!a){T(i);for(let p=0;p<d.length;p+=1)T(r[p]);a=!0}},o(h){k(i);for(let p=0;p<r.length;p+=1)k(r[p]);a=!1},d(h){h&&w(e),~n&&c[n].d();for(let p=0;p<r.length;p+=1)r[p].d()}}}const Pu=5;function ok(t,e,n){let i;const s=na();let r={},o=[],a=!1,l=!0;const c=_g().then(d=>Object.entries(d.sexuality).filter(([f,h])=>h).map(([f])=>f)),u=async()=>{n(2,a=!0);const d=await yg({genders:await c});for(const f of d)n(0,r[f.userId]=f,r),o.includes(f.userId)||o.push(f.userId);n(2,a=!1),n(0,r)};return u(),t.$$.update=()=>{t.$$.dirty&23&&n(3,i=async({detail:{verdict:d}})=>{pI({otherUser:o[0],verdict:d}).then(f=>s("match-verdict",{matchVerdict:f.data,uid:o[0],pid:r[o[0]].photos[0]})),l?n(4,l=!1):o.shift(),n(1,o),n(0,r),n(4,l),n(2,a),!a&&o.length<5&&u()})},[r,o,a,i,l]}class ak extends le{constructor(e){super(),ae(this,e,ok,rk,ie,{})}}function Lu(t){let e=t[0].uid,n,i,s=Mu(t);return{c(){s.c(),n=vt()},m(r,o){s.m(r,o),S(r,n,o),i=!0},p(r,o){o&1&&ie(e,e=r[0].uid)?(We(),k(s,1,1,M),Qe(),s=Mu(r),s.c(),T(s,1),s.m(n.parentNode,n)):s.p(r,o)},i(r){i||(T(s),i=!0)},o(r){k(s),i=!1},d(r){r&&w(n),s.d(r)}}}function Mu(t){let e,n;const i=[t[0]];let s={};for(let r=0;r<i.length;r+=1)s=Ee(s,i[r]);return e=new LE({props:s}),e.$on("done",t[2]),{c(){Q(e.$$.fragment)},m(r,o){K(e,r,o),n=!0},p(r,o){const a=o&1?Dn(i,[Hg(r[0])]):{};e.$set(a)},i(r){n||(T(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){W(e,r)}}}function lk(t){let e,n,i,s;e=new ak({}),e.$on("match-verdict",t[3]);let r=t[0]&&Lu(t);return{c(){Q(e.$$.fragment),n=j(),r&&r.c(),i=vt()},m(o,a){K(e,o,a),S(o,n,a),r&&r.m(o,a),S(o,i,a),s=!0},p(o,[a]){o[0]?r?(r.p(o,a),a&1&&T(r,1)):(r=Lu(o),r.c(),T(r,1),r.m(i.parentNode,i)):r&&(We(),k(r,1,1,()=>{r=null}),Qe())},i(o){s||(T(e.$$.fragment,o),T(r),s=!0)},o(o){k(e.$$.fragment,o),k(r),s=!1},d(o){W(e,o),o&&w(n),r&&r.d(o),o&&w(i)}}}function ck(t,e,n){let i=null,s=[];const r=(l,c)=>{i?s.push({uid:l,pid:c}):n(0,i={uid:l,pid:c})};return[i,r,()=>{s.length>0?n(0,i=s.shift()):n(0,i=null)},({detail:{matchVerdict:l,uid:c,pid:u}})=>{l.matched&&r(c,u)}]}class uk extends le{constructor(e){super(),ae(this,e,ck,lk,ie,{})}}function hk(t){let e,n;return e=new ls({props:{$$slots:{default:[mk]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function dk(t){let e,n;return e=new ls({props:{noScroll:!0,$$slots:{default:[yk]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function fk(t){let e,n;return e=new ls({props:{$$slots:{default:[_k]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function gk(t){let e,n;return e=new ls({props:{$$slots:{default:[vk]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function pk(t){let e,n;return e=new ls({props:{$$slots:{default:[wk]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function mk(t){let e,n;return e=new QE({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function yk(t){let e,n;return e=new uk({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function _k(t){let e,n;return e=new KE({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function vk(t){let e;return{c(){e=de("Loading...")},m(n,i){S(n,e,i)},d(n){n&&w(e)}}}function wk(t){let e,n;return e=new YE({}),{c(){Q(e.$$.fragment)},m(i,s){K(e,i,s),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){W(e,i)}}}function bk(t){let e,n,i,s;const r=[pk,gk,fk,dk,hk],o=[];function a(l,c){return l[0].hash=="#terms"?0:l[1].fbUser=="pending"?1:l[0].hash==="#profile"&&l[1].fbUser?2:l[1].fbUser?3:4}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),i=vt()},m(l,c){o[e].m(l,c),S(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e!==u&&(We(),k(o[u],1,1,()=>{o[u]=null}),Qe(),n=o[e],n||(n=o[e]=r[e](l),n.c()),T(n,1),n.m(i.parentNode,i))},i(l){s||(T(n),s=!0)},o(l){k(n),s=!1},d(l){o[e].d(l),l&&w(i)}}}function Tk(t,e,n){let i,s;return Il(t,ZE,r=>n(0,i=r)),Il(t,Lr,r=>n(1,s=r)),[i,s]}class Ik extends le{constructor(e){super(),ae(this,e,Tk,bk,ie,{})}}const Tg=document.getElementById("app");new Ik({target:Tg});for(const[t,e]of Object.entries(Ke))Tg.style.setProperty("--"+t,e);
