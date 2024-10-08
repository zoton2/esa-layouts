"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[776],{6780:()=>{},8598:(t,e,i)=>{i.d(e,{PH:()=>p,h0:()=>m,ok:()=>g,tg:()=>v});var a=i(9804),s=i.n(a),n=i(9845),o=i(9340),r=i(9497),l=i(6819),u=function(t,e,i,a){var s,n=arguments.length,o=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,a);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},d=function(t,e,i,a){return new(i||(i=Promise))((function(s,n){function o(t){try{l(a.next(t))}catch(t){n(t)}}function r(t){try{l(a.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,r)}l((a=a.apply(t,e||[])).next())}))};const c=new n.SpeedcontrolUtilBrowser(nodecg),h={additionalDonations:nodecg.Replicant("additionalDonations"),assetsDonationAlertAssets:nodecg.Replicant("assets:donation-alert-assets"),assetsIntermissionSlides:nodecg.Replicant("assets:intermission-slides"),assetsReaderIntroductionImages:nodecg.Replicant("assets:reader-introduction-images"),bids:nodecg.Replicant("bids"),bigbuttonPlayerMap:nodecg.Replicant("bigbuttonPlayerMap"),commentators:nodecg.Replicant("commentators"),commentatorsNew:nodecg.Replicant("commentatorsNew"),countdown:nodecg.Replicant("countdown"),currentRunDelay:nodecg.Replicant("currentRunDelay"),donationAlerts:nodecg.Replicant("donationAlerts"),donationReader:nodecg.Replicant("donationReader"),donationReaderNew:nodecg.Replicant("donationReaderNew"),donationsToRead:nodecg.Replicant("donationsToRead"),donationTotal:nodecg.Replicant("donationTotal"),donationTotalMilestones:nodecg.Replicant("donationTotalMilestones"),gameLayouts:nodecg.Replicant("gameLayouts"),intermissionSlides:nodecg.Replicant("intermissionSlides"),musicData:nodecg.Replicant("musicData"),obsData:nodecg.Replicant("obsData"),omnibar:nodecg.Replicant("omnibar"),otherStreamData:nodecg.Replicant("otherStreamData"),prizes:nodecg.Replicant("prizes"),readerIntroduction:nodecg.Replicant("readerIntroduction"),runDataActiveRun:c.runDataActiveRun,runDataActiveRunSurrounding:c.runDataActiveRunSurrounding,runDataArray:c.runDataArray,serverTimestamp:nodecg.Replicant("serverTimestamp"),streamDeckData:nodecg.Replicant("streamDeckData"),timer:c.timer,ttsVoices:nodecg.Replicant("ttsVoices"),upcomingRunID:nodecg.Replicant("upcomingRunID"),videoPlayer:nodecg.Replicant("videoPlayer")};let p,m=class extends l.hw{constructor(){super(...arguments),this.reps={}}get repsTyped(){return this.reps}setState({name:t,val:e}){o.Ay.set(this.reps,t,s()(e))}setReplicant({name:t,val:e}){o.Ay.set(this.reps,t,s()(e)),h[t].value=s()(e)}};u([l.sM],m.prototype,"setState",null),u([l.sM],m.prototype,"setReplicant",null),m=u([(0,l.nV)({name:"ReplicantModule",namespaced:!0})],m);const g=(0,r.MF)("ReplicantModule");function v(t){return d(this,void 0,void 0,(function*(){Object.keys(h).forEach((e=>{h[e].on("change",(i=>{t.commit("ReplicantModule/setState",{name:e,val:i})}))})),yield NodeCG.waitForReplicants(...Object.keys(h).map((t=>h[t]))),p=(0,l.f_)(m,t)}))}},4985:(t,e,i)=>{i.d(e,{A:()=>g});var a=i(9417),s=i(9643),n=i(4250),o=i(4211),r=i(4141),l=i(3133),u=i(4704),d=i(9251),c=i(5082),h=i(7290),p=i(3041),m=i(8459);const g=(0,p.A)(o.A,r.A,u.A,(0,l.P)("radioGroup"),d.A).extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:{type:Boolean,default:null},id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:{type:Boolean,default:null},value:{default:null}},data:()=>({isFocused:!1}),computed:{classes(){return{"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused,...this.themeClasses,...this.groupClasses}},computedColor(){if(!this.isDisabled)return c.A.options.computed.computedColor.call(this)},computedIcon(){return this.isActive?this.onIcon:this.offIcon},computedId(){return n.A.options.computed.computedId.call(this)},hasLabel:n.A.options.computed.hasLabel,hasState(){return(this.radioGroup||{}).hasState},isDisabled(){var t;return null!==(t=this.disabled)&&void 0!==t?t:!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly(){var t;return null!==(t=this.readonly)&&void 0!==t?t:!!this.radioGroup&&this.radioGroup.isReadonly},computedName(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||`radio-${this.radioGroup._uid}`},rippleState(){return c.A.options.computed.rippleState.call(this)},validationState(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput(t){return c.A.options.methods.genInput.call(this,"radio",t)},genLabel(){return this.hasLabel?this.$createElement(a.A,{on:{click:c.F},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},(0,h.$c)(this,"label")||this.label):null},genRadio(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s.A,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput({name:this.computedName,value:this.value,...e}),this.genRipple(this.setTextColor(this.rippleState))])},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onChange(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:()=>{}},render(t){return t("div",{staticClass:"v-radio",class:this.classes,on:(0,m.wf)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}},[this.genRadio(),this.genLabel()])}})},8361:(t,e,i)=>{i.d(e,{A:()=>c}),i(6780);var a=i(4250),s=i(6910),n=i(9078),o=i(9251),r=i(3041),l=i(7098),u=i(7290);const d=(0,r.A)(s.A,n.A,o.A).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,l.OP)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue:(t,e)=>void 0===t.value?e:t.value,onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),i=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(i)<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==i)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const i=e.find((t=>!t.disabled));if(!i)return;const a=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,a))},updateMultiple(t){const e=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),i=e.findIndex((e=>this.valueComparator(e,t)));this.mandatory&&i>-1&&e.length-1<1||null!=this.max&&i<0&&e.length+1>this.max||(i>-1?e.splice(i,1):e.push(t),this.internalValue=e)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),(0,u.$c)(this))}}),c=(d.extend({name:"v-item-group",provide(){return{itemGroup:this}}}),(0,r.A)(d,a.A).extend({name:"v-radio-group",provide(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes(){return{...a.A.options.computed.classes.call(this),"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},methods:{genDefaultSlot(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},a.A.options.methods.genDefaultSlot.call(this))},genInputSlot(){const t=a.A.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel(){const t=a.A.options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:d.options.methods.onClick},render(t){const e=a.A.options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}}))},6910:(t,e,i)=>{i.d(e,{A:()=>n});var a=i(9340),s=i(7290);const n=a.Ay.extend({name:"comparable",props:{valueComparator:{type:Function,default:s.bD}}})},4704:(t,e,i)=>{i.d(e,{A:()=>s});var a=i(7072);const s=i(9340).Ay.extend({name:"rippleable",directives:{ripple:a.A},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},5082:(t,e,i)=>{i.d(e,{A:()=>r,F:()=>o});var a=i(4250),s=i(4704),n=i(6910);function o(t){t.preventDefault()}const r=(0,i(3041).A)(a.A,s.A,n.A).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=a.A.options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})},8459:(t,e,i)=>{i.d(e,{Ay:()=>o,wf:()=>l});var a=i(7290);const s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function n(t){const e={};for(const i of t.split(s.styleList)){let[t,n]=i.split(s.styleProp);t=t.trim(),t&&("string"==typeof n&&(n=n.trim()),e[(0,a.PT)(t)]=n)}return e}function o(){const t={};let e,i=arguments.length;for(;i--;)for(e of Object.keys(arguments[i]))switch(e){case"class":case"directives":arguments[i][e]&&(t[e]=(s=t[e],(n=arguments[i][e])?s&&s?(0,a.BN)(s).concat(n):n:s));break;case"style":arguments[i][e]&&(t[e]=r(t[e],arguments[i][e]));break;case"staticClass":if(!arguments[i][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[i][e].trim();break;case"on":case"nativeOn":arguments[i][e]&&(t[e]=l(t[e],arguments[i][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][e])break;t[e]||(t[e]={}),t[e]={...arguments[i][e],...t[e]};break;default:t[e]||(t[e]=arguments[i][e])}var s,n;return t}function r(t,e){return t?e?(t=(0,a.BN)("string"==typeof t?n(t):t)).concat("string"==typeof e?n(e):e):t:e}function l(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let i=2;i--;){const a=t[i];for(const t in a)a[t]&&(e[t]?e[t]=[].concat(a[t],e[t]):e[t]=a[t])}return e}}}]);