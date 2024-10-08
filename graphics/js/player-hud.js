(()=>{"use strict";var e,t={8849:(e,t,n)=>{var a=n(9804),o=n.n(a),s=n(9845),r=n(9340),i=n(305),c=n(3578),l=p("computed",c.aH),d=p("computed",c.L8),u=p("methods",c.i0),g=p("methods",c.PY);function p(e,t){function n(n,a){return(0,i.u1)((function(o,s){o[e]||(o[e]={});var r,i=((r={})[s]=n,r);o[e][s]=void 0!==a?t(a,i)[s]:t(i)[s]}))}return function(e,t){if("string"==typeof t){var a=t,o=e;return n(a,void 0)(o,a)}return n(e,function(e){var t=e&&e.namespace;if("string"==typeof t)return"/"!==t[t.length-1]?t+"/":t}(t))}}var v=n(6819),f=function(e,t,n,a){var o,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};const h=new s.SpeedcontrolUtilBrowser(nodecg),m={additionalDonations:nodecg.Replicant("additionalDonations"),assetsDonationAlertAssets:nodecg.Replicant("assets:donation-alert-assets"),assetsIntermissionSlides:nodecg.Replicant("assets:intermission-slides"),assetsReaderIntroductionImages:nodecg.Replicant("assets:reader-introduction-images"),bids:nodecg.Replicant("bids"),bigbuttonPlayerMap:nodecg.Replicant("bigbuttonPlayerMap"),commentators:nodecg.Replicant("commentators"),commentatorsNew:nodecg.Replicant("commentatorsNew"),countdown:nodecg.Replicant("countdown"),currentRunDelay:nodecg.Replicant("currentRunDelay"),donationAlerts:nodecg.Replicant("donationAlerts"),donationReader:nodecg.Replicant("donationReader"),donationReaderNew:nodecg.Replicant("donationReaderNew"),donationsToRead:nodecg.Replicant("donationsToRead"),donationTotal:nodecg.Replicant("donationTotal"),donationTotalMilestones:nodecg.Replicant("donationTotalMilestones"),gameLayouts:nodecg.Replicant("gameLayouts"),intermissionSlides:nodecg.Replicant("intermissionSlides"),musicData:nodecg.Replicant("musicData"),obsData:nodecg.Replicant("obsData"),omnibar:nodecg.Replicant("omnibar"),otherStreamData:nodecg.Replicant("otherStreamData"),prizes:nodecg.Replicant("prizes"),readerIntroduction:nodecg.Replicant("readerIntroduction"),runDataActiveRun:h.runDataActiveRun,runDataActiveRunSurrounding:h.runDataActiveRunSurrounding,runDataArray:h.runDataArray,serverTimestamp:nodecg.Replicant("serverTimestamp"),streamDeckData:nodecg.Replicant("streamDeckData"),timer:h.timer,ttsVoices:nodecg.Replicant("ttsVoices"),upcomingRunID:nodecg.Replicant("upcomingRunID"),videoPlayer:nodecg.Replicant("videoPlayer")};let y,R=class extends v.hw{constructor(){super(...arguments),this.reps={}}get repsTyped(){return this.reps}setState({name:e,val:t}){r.Ay.set(this.reps,e,o()(t))}setReplicant({name:e,val:t}){r.Ay.set(this.reps,e,o()(t)),m[e].value=o()(t)}};f([v.sM],R.prototype,"setState",null),f([v.sM],R.prototype,"setReplicant",null),R=f([(0,v.nV)({name:"ReplicantModule",namespaced:!0})],R);const D=function(e,t){function n(t){return function(n,a){if("string"==typeof a){var o=a,s=n;return t(o,{namespace:e})(s,o)}var r=n,i=function(e,t){var n={};return[e,t].forEach((function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))})),n}(a||{},{namespace:e});return t(r,i)}}return{State:n(l),Getter:n(d),Mutation:n(g),Action:n(u)}}("ReplicantModule");n(7980),n(8010),n(6577),n(8969),n(9493);var b=function(e,t,n,a){var o,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};let w=class extends r.Ay{constructor(){super(...arguments),this.donationsToReadTO=0,this.tagScanned=!1,this.scannedData=null,this.therunggMessage=null}get largestDonation(){return`$${this.donationsToRead.reduce(((e,t)=>e>t.amount?e:t.amount),0).toFixed(2)}`}get tagDisplayName(){return this.scannedData?this.scannedData.raw.pronouns?`${this.scannedData.user.displayName} (${this.scannedData.raw.pronouns})`:this.scannedData.user.displayName:""}get buttonId(){var e;return(null===(e=this.scannedData)||void 0===e?void 0:e.flagcarrier.id)||""}get alertClass(){if(this.tagScanned)switch(this.tagScanned){case"success_comm":case"success_player":return"TagSuccess";case"fail_player":return"TagFail";default:return"TagNothing"}return"message"===this.streamDeckData.playerHUDTriggerType?"MessageToRead":this.donationsToRead.length?"DonationsToRead":""}mounted(){nodecg.listenFor("bigbuttonTagScanned",(({state:e,data:t})=>{window.clearTimeout(this.messageTimeout),this.therunggMessage=null,this.tagScanned=e||!0,this.scannedData=t,this.messageTimeout=window.setTimeout((()=>{this.tagScanned=!1,this.scannedData=null}),7e3)})),nodecg.listenFor("therunggMessage",(e=>{window.clearTimeout(this.messageTimeout),this.tagScanned=!1,this.scannedData=null,this.therunggMessage=e,this.messageTimeout=window.setTimeout((()=>{this.therunggMessage=null}),1e4)}))}};b([D.State((e=>e.reps.timer))],w.prototype,"timer",void 0),b([D.State((e=>e.reps.donationsToRead))],w.prototype,"donationsToRead",void 0),b([D.State((e=>e.reps.streamDeckData))],w.prototype,"streamDeckData",void 0),w=b([i.Ay],w);const _=w,T=(0,n(5450).A)(_,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"Flex",style:{"flex-direction":"column",width:"100vw",height:"100vh"}},[t("div",{class:`PlayerHUD Flex ${e.alertClass}`,style:{width:"100%","flex-grow":1,"flex-direction":"column","box-sizing":"border-box",padding:"0 5vw",transition:"background-color 1s","text-align":"center","font-size":"15vh"}},[e.therunggMessage?[t("span",{style:{"font-size":"0.6em"}},[e._v("therun.gg Message:")]),e._v("\n      "+e._s(e.therunggMessage)+"\n    ")]:e.tagScanned?["success_comm"===e.tagScanned?[t("div",[e._v("✔")]),e._v(" "),t("div",[t("span",{style:{"font-weight":600}},[e._v(e._s(e.tagDisplayName))]),e._v("\n          scanned in as commentator\n        ")])]:"success_player"===e.tagScanned?[t("div",[e._v("✔")]),e._v(" "),t("div",[t("span",{style:{"font-weight":600}},[e._v(e._s(e.tagDisplayName))]),e._v("\n          scanned in as player on\n          "),t("span",{style:{"white-space":"nowrap"}},[e._v("button "+e._s(e.buttonId)+"!")])])]:"fail_player"===e.tagScanned?[t("div",[e._v("❌")]),e._v(" "),t("div",[t("span",{style:{"font-weight":600}},[e._v(e._s(e.tagDisplayName))]),e._v("\n          cannot scan in as player on\n          "),t("span",{style:{"white-space":"nowrap"}},[e._v("button "+e._s(e.buttonId)+"!")])])]:[t("div",[e._v("❔")]),e._v(" "),t("div",[e._v("Tag was scanned but not needed")])]]:"message"===e.streamDeckData.playerHUDTriggerType?[e._v("\n      Any time\n      "),t("br"),e._v("for messages?\n    ")]:e.donationsToRead.length?[e._v("\n      Donations Pending:\n      "),t("br"),e._v(e._s(e.donationsToRead.length)+"\n      "),t("br"),e._v("Largest Unread Donation: "+e._s(e.largestDonation)+"\n    ")]:[e._v("\n      Nothing currently\n      "),t("br"),e._v("to be read\n    ")]],2),e._v(" "),t("div",{style:{background:"black",color:"white",width:"100%","text-align":"center","font-size":"15vh","padding-bottom":"2vh"}},[e._v("\n    "+e._s(e.timer.time)+"\n  ")])])}),[],!1,null,null,null).exports;r.Ay.use(c.Ay);let S=class extends v.hw{get reps(){return this.context.rootState.ReplicantModule.reps}};S=function(e,t,n,a){var o,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}([(0,v.nV)({name:"OurModule"})],S);const O=new c.il({strict:!1,state:{},modules:{ReplicantModule:R,OurModule:S}}),M=O;(0,v.f_)(S,O),function(e){return t=this,n=void 0,o=function*(){Object.keys(m).forEach((t=>{m[t].on("change",(n=>{e.commit("ReplicantModule/setState",{name:t,val:n})}))})),yield NodeCG.waitForReplicants(...Object.keys(m).map((e=>m[e]))),y=(0,v.f_)(R,e)},new((a=void 0)||(a=Promise))((function(e,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function i(e){try{c(o.throw(e))}catch(e){s(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(r,i)}c((o=o.apply(t,n||[])).next())}));var t,n,a,o}(M).then((()=>{new r.Ay({store:M,el:"#App",render:e=>e(T)})}))},8969:(e,t,n)=>{"undefined"!=typeof Reflect&&Reflect.getMetadata}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}};return t[e].call(s.exports,s,s.exports,a),s.exports}a.m=t,e=[],a.O=(t,n,o,s)=>{if(!n){var r=1/0;for(d=0;d<e.length;d++){for(var[n,o,s]=e[d],i=!0,c=0;c<n.length;c++)(!1&s||r>=s)&&Object.keys(a.O).every((e=>a.O[e](n[c])))?n.splice(c--,1):(i=!1,s<r&&(r=s));if(i){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,o,s]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={228:0,755:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var o,s,[r,i,c]=n,l=0;if(r.some((t=>0!==e[t]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var d=c(a)}for(t&&t(n);l<r.length;l++)s=r[l],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=a.O(void 0,[269,580,755],(()=>a(8849)));o=a.O(o)})();