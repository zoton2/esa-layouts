(()=>{"use strict";var e,t={2498:(e,t,n)=>{var o=n(8458),r=n(9340),i=n(3409),s=n(3836),c=n(694),l=n(7765),a=n(2934),u=n(305);n(7980),n(8010),n(6577),n(8969),n(9493);var d=n(3578),p=n(6819),f=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};r.Ay.use(d.Ay);let v=class extends p.hw{get reps(){return this.context.rootState.ReplicantModule.reps}updateSelectedVoice(e){o.PH.setReplicant({name:"ttsVoices",val:Object.assign(Object.assign({},o.PH.repsTyped.ttsVoices),{selected:e})})}};f([p.sM],v.prototype,"updateSelectedVoice",null),v=f([(0,p.nV)({name:"OurModule"})],v);const y=new d.il({strict:!1,state:{},modules:{ReplicantModule:o.h0,OurModule:v}}),h=y,g=(0,p.f_)(v,y);var b=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let m=class extends r.Ay{constructor(){super(...arguments),this.config=nodecg.bundleConfig.tts}get selected(){return this.voices.selected}set selected(e){g.updateSelectedVoice(e)}scrollToSelectedVoice(){this.config.enabled&&this.$vuetify.goTo(`#${this.voices.selected}`,{container:"#VoiceList",offset:25})}playExample(){nodecg.sendMessage("ttsExample")}mounted(){this.scrollToSelectedVoice()}};b([o.ok.State((e=>e.reps.ttsVoices))],m.prototype,"voices",void 0),b([function(e,t){void 0===t&&(t={});var n=t.deep,o=void 0!==n&&n,r=t.immediate,i=void 0!==r&&r;return(0,u.createDecorator)((function(t,n){"object"!=typeof t.watch&&(t.watch=Object.create(null));var r=t.watch;"object"!=typeof r[e]||Array.isArray(r[e])?void 0===r[e]&&(r[e]=[]):r[e]=[r[e]],r[e].push({handler:n,deep:o,immediate:i})}))}("voices")],m.prototype,"scrollToSelectedVoice",null),m=b([u.default],m);const w=m,O=(0,n(7241).A)(w,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t(s.A,[e.config.enabled?[t("div",{style:{"max-height":"250px","overflow-y":"auto"},attrs:{id:"VoiceList"}},[t(a.A,{style:{margin:"0px",padding:"10px"},attrs:{"hide-details":""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.voices.available,(function(e){return t(l.A,{key:e.code,attrs:{id:e.code,value:e.code,label:e.name}})})),1)],1),e._v(" "),t(c.A,{on:{click:e.playExample}},[e._v("\n      Play Example Donation\n    ")])]:t("div",{style:{"font-style":"italic"}},[e._v("\n    This feature is not enabled.\n  ")])],2)}),[],!1,null,null,null).exports;(0,o.tg)(h).then((()=>{new r.Ay({vuetify:i.A,store:h,el:"#App",render:e=>e(O)})}))},8969:(e,t,n)=>{"undefined"!=typeof Reflect&&Reflect.getMetadata},9078:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(9340);const r=function(e="value",t="change"){return o.Ay.extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}()},1290:(e,t,n)=>{n.d(t,{P:()=>r});var o=n(9340);function r(e="value",t="input"){return o.Ay.extend({name:"toggleable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{isActive:!!this[e]}},watch:{[e](e){this.isActive=!!e},isActive(n){!!n!==this[e]&&this.$emit(t,n)}}})}r()},7290:(e,t,n)=>{n.d(t,{$c:()=>g,BN:()=>h,D9:()=>m,Dg:()=>l,HP:()=>f,LJ:()=>r,PT:()=>y,bD:()=>i,fF:()=>c,g8:()=>p,kW:()=>a,no:()=>s,qE:()=>b,uP:()=>d});let o=!1;try{if("undefined"!=typeof window){const e=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(e){console.warn(e)}function r(e,t,n){const o=t.length-1;if(o<0)return void 0===e?n:e;for(let r=0;r<o;r++){if(null==e)return n;e=e[t[r]]}return null==e||void 0===e[t[o]]?n:e[t[o]]}function i(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>i(e[n],t[n])))}function s(e,t,n){return null!=e&&t&&"string"==typeof t?void 0!==e[t]?e[t]:r(e,(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function c(e,t){const n={};for(let o=0;o<t.length;o++){const r=t[o];void 0!==e[r]&&(n[r]=e[r])}return n}function l(e,t="px"){return null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`}function a(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function u(e){return null!==e&&"object"==typeof e}const d=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function p(e,t){const n=e.$vuetify.icons.component;if(t.startsWith("$")){const n=s(e,`$vuetify.icons.values.${t.split("$").pop().split(".").pop()}`,t);if("string"!=typeof n)return n;t=n}return null==n?t:{component:n,props:{icon:t}}}function f(e){return Object.keys(e)}const v=/-(\w)/g,y=e=>e.replace(v,((e,t)=>t?t.toUpperCase():""));function h(e){return null!=e?Array.isArray(e)?e:[e]:[]}function g(e,t="default",n,o=!1){const r=a(t);return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):e.$scopedSlots.hasOwnProperty(r)?e.$scopedSlots[r](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!o?!e.$slots.hasOwnProperty(r)||n&&!o?void 0:e.$slots[r]:e.$slots[t]}function b(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function m(e={},t={}){for(const n in t){const o=e[n],r=t[n];u(o)&&u(r)?e[n]=m(o,r):e[n]=r}return e}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,r,i]=e[u],c=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(c=!1,i<s&&(s=i));if(c){e.splice(u--,1);var a=r();void 0!==a&&(t=a)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={434:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[s,c,l]=n,a=0;if(s.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(l)var u=l(o)}for(t&&t(n);a<s.length;a++)i=s[a],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[937,499,158,694,691],(()=>o(2498)));r=o.O(r)})();