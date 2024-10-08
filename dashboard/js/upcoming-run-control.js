(()=>{"use strict";var e,t={1185:(e,t,n)=>{var o=n(9804),r=n.n(o),a=n(6873),i=n(9340),s=n(9497),c=n(6819),l=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i};const u=new a.SpeedcontrolUtilBrowser(nodecg),d={additionalDonations:nodecg.Replicant("additionalDonations"),assetsDonationAlertAssets:nodecg.Replicant("assets:donation-alert-assets"),assetsIntermissionSlides:nodecg.Replicant("assets:intermission-slides"),assetsReaderIntroductionImages:nodecg.Replicant("assets:reader-introduction-images"),bids:nodecg.Replicant("bids"),bigbuttonPlayerMap:nodecg.Replicant("bigbuttonPlayerMap"),commentators:nodecg.Replicant("commentators"),commentatorsNew:nodecg.Replicant("commentatorsNew"),countdown:nodecg.Replicant("countdown"),currentRunDelay:nodecg.Replicant("currentRunDelay"),donationAlerts:nodecg.Replicant("donationAlerts"),donationReader:nodecg.Replicant("donationReader"),donationReaderNew:nodecg.Replicant("donationReaderNew"),donationsToRead:nodecg.Replicant("donationsToRead"),donationTotal:nodecg.Replicant("donationTotal"),donationTotalMilestones:nodecg.Replicant("donationTotalMilestones"),gameLayouts:nodecg.Replicant("gameLayouts"),intermissionSlides:nodecg.Replicant("intermissionSlides"),musicData:nodecg.Replicant("musicData"),obsData:nodecg.Replicant("obsData"),omnibar:nodecg.Replicant("omnibar"),otherStreamData:nodecg.Replicant("otherStreamData"),prizes:nodecg.Replicant("prizes"),readerIntroduction:nodecg.Replicant("readerIntroduction"),runDataActiveRun:u.runDataActiveRun,runDataActiveRunSurrounding:u.runDataActiveRunSurrounding,runDataArray:u.runDataArray,serverTimestamp:nodecg.Replicant("serverTimestamp"),streamDeckData:nodecg.Replicant("streamDeckData"),timer:u.timer,ttsVoices:nodecg.Replicant("ttsVoices"),upcomingRunID:nodecg.Replicant("upcomingRunID"),videoPlayer:nodecg.Replicant("videoPlayer")};let p,f=class extends c.hw{constructor(){super(...arguments),this.reps={}}get repsTyped(){return this.reps}setState({name:e,val:t}){i.Ay.set(this.reps,e,r()(t))}setReplicant({name:e,val:t}){i.Ay.set(this.reps,e,r()(t)),d[e].value=r()(t)}};l([c.sM],f.prototype,"setState",null),l([c.sM],f.prototype,"setReplicant",null),f=l([(0,c.nV)({name:"ReplicantModule",namespaced:!0})],f);const g=(0,s.MF)("ReplicantModule");var h=n(3409),v=n(3836),m=n(694),y=n(305);n(7980),n(8010),n(6577),n(8969),n(9493);var R=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i};let b=class extends i.Ay{forceUpcomingRun(e){nodecg.sendMessage("forceUpcomingRun",e)}getRunStr(e){const t=this.runDataArray.find((t=>t.id===e));return t?[t.game||"?",t.category].filter(Boolean).join(" - "):"?"}};R([g.State((e=>e.reps.runDataArray))],b.prototype,"runDataArray",void 0),R([g.State((e=>e.reps.runDataActiveRunSurrounding))],b.prototype,"runDataActiveRunSurrounding",void 0),R([g.State((e=>e.reps.upcomingRunID))],b.prototype,"upcomingRunID",void 0),b=R([y.default],b);const D=b,w=(0,n(7241).A)(D,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t(v.A,[t("div",{style:{"font-style":"italic","margin-bottom":"5px"}},[e._v("\n    This should only need to be used if the automatically set one is incorrect.\n  ")]),e._v(" "),t("div",{style:{overflow:"hidden","white-space":"nowrap"}},[t("span",{style:{"font-weight":"bold"}},[e._v("\n      Currently Set:\n    ")]),e._v(" "),e.upcomingRunID?t("span",{attrs:{title:e.getRunStr(e.upcomingRunID)}},[e._v("\n      "+e._s(e.getRunStr(e.upcomingRunID))+"\n    ")]):t("span",[e._v("\n      none\n    ")])]),e._v(" "),e._l(["previous","current","next"],(function(n,o){return t("div",{key:o,style:{"margin-top":"5px"}},[e.runDataActiveRunSurrounding[n]?t(m.A,{staticClass:"ForceUpcomingRunBtn",attrs:{width:"100%",block:"",title:e.getRunStr(e.runDataActiveRunSurrounding[n])},on:{click:function(t){return e.forceUpcomingRun(e.runDataActiveRunSurrounding[n])}}},[t("div",{staticClass:"d-flex justify-center",style:{width:"100%"}},[t("div",{style:{overflow:"hidden"}},[e._v("\n          Force to "+e._s(n)+" ("+e._s(e.getRunStr(e.runDataActiveRunSurrounding[n]))+")\n        ")])])]):t(m.A,{attrs:{width:"100%",block:"",disabled:""}},[e._v("\n      "+e._s(n)+" not available\n    ")])],1)})),e._v(" "),t(m.A,{style:{"margin-top":"5px"},on:{click:function(t){return e.forceUpcomingRun()}}},[e._v("\n    Force to nothing\n  ")])],2)}),[],!1,null,null,null).exports;var A=n(3578);i.Ay.use(A.Ay);let S=class extends c.hw{get reps(){return this.context.rootState.ReplicantModule.reps}};S=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}([(0,c.nV)({name:"OurModule"})],S);const k=new A.il({strict:!1,state:{},modules:{ReplicantModule:f,OurModule:S}}),O=k;(0,c.f_)(S,k),function(e){return t=this,n=void 0,r=function*(){Object.keys(d).forEach((t=>{d[t].on("change",(n=>{e.commit("ReplicantModule/setState",{name:t,val:n})}))})),yield NodeCG.waitForReplicants(...Object.keys(d).map((e=>d[e]))),p=(0,c.f_)(f,e)},new((o=void 0)||(o=Promise))((function(e,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,s)}c((r=r.apply(t,n||[])).next())}));var t,n,o,r}(O).then((()=>{new i.Ay({vuetify:h.A,store:O,el:"#App",render:e=>e(w)})}))},8969:(e,t,n)=>{"undefined"!=typeof Reflect&&Reflect.getMetadata},9251:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(9340).Ay.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:()=>({themeableProvide:{isDark:!1}}),computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(e,t){e!==t&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}})},1290:(e,t,n)=>{n.d(t,{P:()=>r});var o=n(9340);function r(e="value",t="input"){return o.Ay.extend({name:"toggleable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{isActive:!!this[e]}},watch:{[e](e){this.isActive=!!e},isActive(n){!!n!==this[e]&&this.$emit(t,n)}}})}r()},7290:(e,t,n)=>{n.d(t,{$c:()=>d,D9:()=>f,Dg:()=>s,HP:()=>u,LJ:()=>r,fF:()=>i,no:()=>a,qE:()=>p,uP:()=>l});let o=!1;try{if("undefined"!=typeof window){const e=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(e){console.warn(e)}function r(e,t,n){const o=t.length-1;if(o<0)return void 0===e?n:e;for(let r=0;r<o;r++){if(null==e)return n;e=e[t[r]]}return null==e||void 0===e[t[o]]?n:e[t[o]]}function a(e,t,n){return null!=e&&t&&"string"==typeof t?void 0!==e[t]?e[t]:r(e,(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function i(e,t){const n={};for(let o=0;o<t.length;o++){const r=t[o];void 0!==e[r]&&(n[r]=e[r])}return n}function s(e,t="px"){return null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`}function c(e){return null!==e&&"object"==typeof e}const l=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function u(e){return Object.keys(e)}function d(e,t="default",n,o=!1){const r=(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):e.$scopedSlots.hasOwnProperty(r)?e.$scopedSlots[r](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!o?!e.$slots.hasOwnProperty(r)||n&&!o?void 0:e.$slots[r]:e.$slots[t]}function p(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function f(e={},t={}){for(const n in t){const o=e[n],r=t[n];c(o)&&c(r)?e[n]=f(o,r):e[n]=r}return e}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={757:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,s,c]=n,l=0;if(i.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var u=c(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[937,499,694],(()=>o(1185)));r=o.O(r)})();