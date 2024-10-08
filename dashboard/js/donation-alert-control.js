(()=>{"use strict";var e,t={4402:(e,t,n)=>{var o=n(9804),r=n.n(o),i=n(6873),a=n(9340),s=n(9497),l=n(6819),c=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const d=new i.SpeedcontrolUtilBrowser(nodecg),u={additionalDonations:nodecg.Replicant("additionalDonations"),assetsDonationAlertAssets:nodecg.Replicant("assets:donation-alert-assets"),assetsIntermissionSlides:nodecg.Replicant("assets:intermission-slides"),assetsReaderIntroductionImages:nodecg.Replicant("assets:reader-introduction-images"),bids:nodecg.Replicant("bids"),bigbuttonPlayerMap:nodecg.Replicant("bigbuttonPlayerMap"),commentators:nodecg.Replicant("commentators"),commentatorsNew:nodecg.Replicant("commentatorsNew"),countdown:nodecg.Replicant("countdown"),currentRunDelay:nodecg.Replicant("currentRunDelay"),donationAlerts:nodecg.Replicant("donationAlerts"),donationReader:nodecg.Replicant("donationReader"),donationReaderNew:nodecg.Replicant("donationReaderNew"),donationsToRead:nodecg.Replicant("donationsToRead"),donationTotal:nodecg.Replicant("donationTotal"),donationTotalMilestones:nodecg.Replicant("donationTotalMilestones"),gameLayouts:nodecg.Replicant("gameLayouts"),intermissionSlides:nodecg.Replicant("intermissionSlides"),musicData:nodecg.Replicant("musicData"),obsData:nodecg.Replicant("obsData"),omnibar:nodecg.Replicant("omnibar"),otherStreamData:nodecg.Replicant("otherStreamData"),prizes:nodecg.Replicant("prizes"),readerIntroduction:nodecg.Replicant("readerIntroduction"),runDataActiveRun:d.runDataActiveRun,runDataActiveRunSurrounding:d.runDataActiveRunSurrounding,runDataArray:d.runDataArray,serverTimestamp:nodecg.Replicant("serverTimestamp"),streamDeckData:nodecg.Replicant("streamDeckData"),timer:d.timer,ttsVoices:nodecg.Replicant("ttsVoices"),upcomingRunID:nodecg.Replicant("upcomingRunID"),videoPlayer:nodecg.Replicant("videoPlayer")};let p,f=class extends l.hw{constructor(){super(...arguments),this.reps={}}get repsTyped(){return this.reps}setState({name:e,val:t}){a.Ay.set(this.reps,e,r()(t))}setReplicant({name:e,val:t}){a.Ay.set(this.reps,e,r()(t)),u[e].value=r()(t)}};c([l.sM],f.prototype,"setState",null),c([l.sM],f.prototype,"setReplicant",null),f=c([(0,l.nV)({name:"ReplicantModule",namespaced:!0})],f);const m=(0,s.MF)("ReplicantModule");var v=n(3409),g=n(3836),h=n(694),y=n(305),b=(n(7980),n(8010),n(6577),n(8969));function R(e){return void 0===e&&(e={}),function(t,n){(0,b.A)(e,t,n),(0,y.createDecorator)((function(t,n){(t.props||(t.props={}))[n]=e}))(t,n)}}n(9493);var A=n(5224),x=n(3808),_=n(7580),w=n(5324),D=n(3572),O=n(220),k=n(156);let S=class extends a.Ay{};S=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}([y.default],S);const j=S;var P=n(7241);const M=(0,P.A)(j,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t(A.A,{style:{"text-align":"center",padding:"5px","margin-top":"10px","white-space":"nowrap",overflow:"hidden"}},[e._t("default")],2)}),[],!1,null,null,null).exports,I={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let N;const T=new Uint8Array(16);function E(){if(!N&&(N="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!N))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return N(T)}const V=[];for(let e=0;e<256;++e)V.push((e+256).toString(16).slice(1));const B=function(e,t,n){if(I.randomUUID&&!t&&!e)return I.randomUUID();const o=(e=e||{}).random||(e.rng||E)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return function(e,t=0){return V[e[t+0]]+V[e[t+1]]+V[e[t+2]]+V[e[t+3]]+"-"+V[e[t+4]]+V[e[t+5]]+"-"+V[e[t+6]]+V[e[t+7]]+"-"+V[e[t+8]]+V[e[t+9]]+"-"+V[e[t+10]]+V[e[t+11]]+V[e[t+12]]+V[e[t+13]]+V[e[t+14]]+V[e[t+15]]}(o)};var U=n(3578),C=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};a.Ay.use(U.Ay);let q=class extends l.hw{get reps(){return this.context.rootState.ReplicantModule.reps}addBlankItem(){const e=r()(p.repsTyped.donationAlerts);e.push({id:B(),threshold:0,sound:null,volume:50,graphic:null,graphicDisplayTime:5}),p.setReplicant({name:"donationAlerts",val:e})}editItem(e){const t=r()(p.repsTyped.donationAlerts),n=t.findIndex((t=>t.id===e.id));n>=0&&(t[n]=r()(e),p.setReplicant({name:"donationAlerts",val:t}))}removeItem(e){const t=r()(p.repsTyped.donationAlerts),n=t.findIndex((t=>t.id===e));n>=0&&(t.splice(n,1),p.setReplicant({name:"donationAlerts",val:t}))}};C([l.sM],q.prototype,"addBlankItem",null),C([l.sM],q.prototype,"editItem",null),C([l.sM],q.prototype,"removeItem",null),q=C([(0,l.nV)({name:"OurModule"})],q);const F=new U.il({strict:!1,state:{},modules:{ReplicantModule:f,OurModule:q}}),L=F,Z=(0,l.f_)(q,F);var z=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let G=class extends a.Ay{constructor(){super(...arguments),this.dialog=!1,this.thresholdEdit="0",this.soundEdit="",this.volumeEdit="0",this.isFormValid=!1}isRequired(e){return!!e||"Required"}isNumber(e){return!Number.isNaN(Number(e))||"Must be a number"}isZeroOrBigger(e){return Number(e)>=0||"Must be equal to or bigger than 0"}isZeroOrSmaller(e){return Number(e)<=0||"Must be equal to or smaller than 0"}isValidAsset(e){return!!this.assets.find((t=>t.name===e))||"Asset name must match a file uploaded"}test(){nodecg.sendMessage("omnibarPlaySound",{amount:this.alert.threshold})}edit(){var e,t,n;this.dialog=!0,this.thresholdEdit=null!==(e=this.alert.threshold.toString())&&void 0!==e?e:"0",this.soundEdit=null!==(t=this.alert.sound)&&void 0!==t?t:"",this.volumeEdit=null!==(n=this.alert.volume.toString())&&void 0!==n?n:"0"}save(){const e={id:this.alert.id,threshold:Number(this.thresholdEdit),sound:this.soundEdit,volume:Number(this.volumeEdit),graphic:this.alert.graphic,graphicDisplayTime:this.alert.graphicDisplayTime};Z.editItem(e),this.dialog=!1}remove(){Z.removeItem(this.alert.id)}};z([R({type:Object,required:!0})],G.prototype,"alert",void 0),z([R({type:Number,required:!0})],G.prototype,"index",void 0),z([m.State((e=>e.reps.assetsDonationAlertAssets))],G.prototype,"assets",void 0),G=z([(0,y.default)({components:{MediaCard:M}})],G);const Q=G,$=(0,P.A)(Q,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("media-card",{staticClass:"d-flex align-center px-2",style:{"text-align":"unset",height:"40px","margin-top":e.index>0?"10px":0}},[t(_.A,{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(A.A,[t(x.OQ,{staticClass:"pa-4 pb-0"},[t(w.A,{model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[t(k.A,{attrs:{label:"Amount Threshold in Dollars","prepend-icon":"mdi-cash",autocomplete:"off",rules:[e.isRequired,e.isNumber,e.isZeroOrBigger],filled:"",dense:""},model:{value:e.thresholdEdit,callback:function(t){e.thresholdEdit=t},expression:"thresholdEdit"}}),e._v(" "),t(k.A,{attrs:{label:"Sound Asset Name","prepend-icon":"mdi-music-box",autocomplete:"off",rules:[e.isRequired,e.isValidAsset],filled:"",dense:""},model:{value:e.soundEdit,callback:function(t){e.soundEdit=t},expression:"soundEdit"}}),e._v(" "),t(k.A,{attrs:{label:"Volume in dB","prepend-icon":"mdi-volume-high",autocomplete:"off",rules:[e.isRequired,e.isNumber,e.isZeroOrSmaller],filled:"",dense:""},model:{value:e.volumeEdit,callback:function(t){e.volumeEdit=t},expression:"volumeEdit"}})],1)],1),e._v(" "),t(x.SL,[t(O.A),e._v(" "),t(h.A,{attrs:{disabled:!e.isFormValid},on:{click:e.save}},[e._v("Save")]),e._v(" "),t(h.A,{on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")])],1)],1)],1),e._v(" "),t(D.A,{staticClass:"mr-2",on:{click:e.test}},[e._v("\n    mdi-play\n  ")]),e._v(" "),t("div",{staticClass:"flex-grow-1"},[e._v("\n    $"+e._s(e.alert.threshold)+" - "+e._s(e.alert.sound||"N/A")+" ("+e._s(e.alert.volume)+" dB)\n    ")]),e._v(" "),t(D.A,{on:{click:e.edit}},[e._v("\n    mdi-pencil\n  ")]),e._v(" "),t(D.A,{on:{click:e.remove}},[e._v("\n    mdi-delete\n  ")])],1)}),[],!1,null,null,null).exports;var H=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let J=class extends a.Ay{addBlank(){Z.addBlankItem()}};H([m.State((e=>e.reps.donationAlerts))],J.prototype,"donationAlerts",void 0),J=H([(0,y.default)({components:{Alert:$}})],J);const K=J,W=(0,P.A)(K,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t(g.A,[t(h.A,{on:{click:e.addBlank}},[e._v("Add New Donation Alert Tier")]),e._v(" "),e.donationAlerts.length?t("div",{style:{"margin-top":"10px"}},e._l(e.donationAlerts,(function(e,n){return t("alert",{key:e.id,attrs:{alert:e,index:n}})})),1):t("div",{staticClass:"pa-3 font-italic"},[e._v("\n    No donation alert tiers created, add a new one with the button above.\n  ")])],1)}),[],!1,null,null,null).exports;(function(e){return t=this,n=void 0,r=function*(){Object.keys(u).forEach((t=>{u[t].on("change",(n=>{e.commit("ReplicantModule/setState",{name:t,val:n})}))})),yield NodeCG.waitForReplicants(...Object.keys(u).map((e=>u[e]))),p=(0,l.f_)(f,e)},new((o=void 0)||(o=Promise))((function(e,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,s)}l((r=r.apply(t,n||[])).next())}));var t,n,o,r})(L).then((()=>{new a.Ay({vuetify:v.A,store:L,el:"#App",render:e=>e(W)})}))},208:(e,t,n)=>{n.d(t,{mM:()=>i,vt:()=>a});var o=n(9437),r=n(5596);(0,o.o)("carousel-transition"),(0,o.o)("carousel-reverse-transition"),(0,o.o)("tab-transition"),(0,o.o)("tab-reverse-transition"),(0,o.o)("menu-transition"),(0,o.o)("fab-transition","center center","out-in"),(0,o.o)("dialog-transition"),(0,o.o)("dialog-bottom-transition"),(0,o.o)("dialog-top-transition");const i=(0,o.o)("fade-transition"),a=((0,o.o)("scale-transition"),(0,o.o)("scroll-x-transition"),(0,o.o)("scroll-x-reverse-transition"),(0,o.o)("scroll-y-transition"),(0,o.o)("scroll-y-reverse-transition"),(0,o.o)("slide-x-transition"));(0,o.o)("slide-x-reverse-transition"),(0,o.o)("slide-y-transition"),(0,o.o)("slide-y-reverse-transition"),(0,o.b)("expand-transition",(0,r.A)()),(0,o.b)("expand-x-transition",(0,r.A)("",!0))},8459:(e,t,n)=>{n.d(t,{Ay:()=>a});var o=n(7290);const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function i(e){const t={};for(const n of e.split(r.styleList)){let[e,i]=n.split(r.styleProp);e=e.trim(),e&&("string"==typeof i&&(i=i.trim()),t[(0,o.PT)(e)]=i)}return t}function a(){const e={};let t,n=arguments.length;for(;n--;)for(t of Object.keys(arguments[n]))switch(t){case"class":case"directives":arguments[n][t]&&(e[t]=(r=e[t],(i=arguments[n][t])?r&&r?(0,o.BN)(r).concat(i):i:r));break;case"style":arguments[n][t]&&(e[t]=s(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=l(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]={...arguments[n][t],...e[t]};break;default:e[t]||(e[t]=arguments[n][t])}var r,i;return e}function s(e,t){return e?t?(e=(0,o.BN)("string"==typeof e?i(e):e)).concat("string"==typeof t?i(t):t):e:t}function l(...e){if(!e[0])return e[1];if(!e[1])return e[0];const t={};for(let n=2;n--;){const o=e[n];for(const e in o)o[e]&&(t[e]?t[e]=[].concat(o[e],t[e]):t[e]=o[e])}return t}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,r,i]=e[d],s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={524:0,243:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[a,s,l]=n,c=0;if(a.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var d=l(o)}for(t&&t(n);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[937,499,158,220,243,259,806],(()=>o(4402)));r=o.O(r)})();