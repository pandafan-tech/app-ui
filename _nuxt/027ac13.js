(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1165:function(s,_,a){var i=a(1206);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[s.i,i,""]]),i.locals&&(s.exports=i.locals);var u=a(2).default,m=u("3eb93276",i,!0,{sourceMap:!1})},1205:function(s,_,a){"use strict";var i=a(1165),u=a.n(i)},1206:function(s,_,a){var i=a(1),u=i(!1);u.push([s.i,".extra-premium input[data-v-d3b460f6]{font-size:26px;margin:0 10px;text-align:center;padding:10px 0;width:100px;border:none;background:transparent;color:var(--primary-color);border-bottom:.5px solid var(--secondary-color)}.extra-premium input[data-v-d3b460f6]::focus{border:none}.extra-premium .explain[data-v-d3b460f6]{text-align:left}.extra-premium .explain ul li[data-v-d3b460f6]{color:var(--secondary-color)}@media (max-width:768px){.extra-premium h2[data-v-d3b460f6]{font-size:20px!important}.extra-premium input[data-v-d3b460f6]{font-szie:20px!important}}.purchase-input[data-v-d3b460f6]{display:flex;align-items:center;justify-content:center}.purchase-input input[data-v-d3b460f6]{display:flex}.hint-for-basic[data-v-d3b460f6]{margin-bottom:2rem}.hint-for-basic h5[data-v-d3b460f6]{font-weight:400;color:var(--secondary-color)}b[data-v-d3b460f6]{color:var(--primary-color)}",""]),s.exports=u},1297:function(s,_,a){"use strict";a.r(_);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"extra-premium"},[e.canBuyExtraPremiumForOtherMonth?r("div",[e.canBuyExtraForThisMonth&&!e.model.allPre?r("h2",{staticClass:"purchase-input"},[e._v(e._s(e.$t("pricing.to_buy"))),r("input",{directives:[{name:"model",rawName:"v-model",value:e.model.extraPremium,expression:"model.extraPremium"}],attrs:{type:"range",disabled:e.model.allPre,min:"1",step:"1",max:e.maxPreForCurrentMonth},domProps:{value:e.model.extraPremium},on:{__r:function(n){return e.$set(e.model,"extraPremium",n.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.model.extraPremium,expression:"model.extraPremium"}],attrs:{type:"number",disabled:e.model.allPre,min:"1",step:"1",max:e.maxPreForCurrentMonth},domProps:{value:e.model.extraPremium},on:{input:function(n){n.target.composing||e.$set(e.model,"extraPremium",n.target.value)}}}),e._v("GB "+e._s(e.$t("service.pre")))]):e._e(),r("el-row",{staticClass:"hint-for-basic",attrs:{type:"flex",align:"middle",justify:"center"}},[r("el-col",{attrs:{md:9,xs:24}},[e.currentService.plan_id===2?r("h5",[e._v(e._s(e.$tc("pricing.premium_data.basic_price",e.$config.feeList.pre2))),r("br"),r("span",[e._v(e._s(e.$tc("pricing.premium_data.basic_hint",e.$config.feeList.pre4)))]),r("br"),r("el-link",{attrs:{type:"success"},on:{click:e.upgradePlan}},[e._v(e._s(e.$t("service_details.upgrade")))])],1):r("h5",[e._v(e._s(e.$tc("pricing.premium_data.pre_hint",e.$config.feeList.pre4)))])])],1),e.currentService.plan_id!==2&&e.canBuyExtraForThisMonth&&!e.model.allPre?r("h4",{staticClass:"subheader"},[Number(e.model.extraPremium)===e.maxPreForCurrentMonth?r("span",[e._v(e._s(e.$tc("pricing.max_premium_hint",e.maxPreForCurrentMonth)))]):r("span",[e._v(e._s(e.$tc("pricing.max_premium_hint2",e.maxPreForCurrentMonth-(e.model.extraPremium||0))))])]):e._e(),e.currentService.plan_id!==2&&e.currentService.extra.buy_length-e.currentAllPre?r("div",[e.currentAllPre>1?r("p",[e._v(e._s(e.$tc("pricing.already_unlimited_for",e.currentAllPre)))]):e._e(),r("el-checkbox",{staticClass:"all-pre-check",model:{value:e.model.allPre,callback:function(n){e.$set(e.model,"allPre",n)},expression:"model.allPre"}},[r("b",[e._v(e._s(e.$tc("pricing.get_extra_for",e.currentService.extra.buy_length-e.currentAllPre)))])])],1):e._e()],1):r("div",[r("h2",{staticClass:"subheader"},[e._v(e._s(e.$t("pricing.already_unlimited")))]),e.currentAllPre>1?r("p",[e._v(e._s(e.$tc("pricing.already_unlimited_for",e.currentAllPre)))]):e._e()]),r("el-divider"),r("div",{staticClass:"explain"},[r("ul",[e.currentService.plan_id===4?r("li",[e._v(e._s(e.$t("pricing.extra_premium_explain.c")))]):e._e(),r("li",[e._v(e._s(e.$t("pricing.extra_premium_explain.d")))])])])],1)},u=[],m=a(63),y=a(40),b=a(26),O=a(22),j=a(39),$=a(207),p=a(18),S=a(23),M=a(24),C=a(9),F=a(76),v=a(6),f=a(52);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(n){Object(p.a)(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var h={name:"PricingPagePremiumData",props:{currentService:{type:Object,default:function(){return{}}},value:{type:Object,default:function(){return{}}}},data:function(){return{model:{alreadyBought:0,extraPremium:10,allPre:!1,maxPreForCurrentMonth:100,currentAllPre:0}}},fetch:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark(function r(){var n,l;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!((n=t.user)!==null&&n!==void 0&&n.id)){o.next=14;break}return o.prev=1,o.next=4,t.$store.dispatch("getAlreadyBoughtPremiumData",{userId:t.user.id});case 4:l=o.sent,console.log("alreadyBought: "+l.toString()),t.model.alreadyBought=l,console.log(t.model.alreadyBought),o.next=14;break;case 10:o.prev=10,o.t0=o.catch(1),console.log("fetch alreadyBought failed: "+o.t0),t.$sentry.captureException(o.t0);case 14:case"end":return o.stop()}},r,null,[[1,10]])}))()},computed:d({currentAllPre:function(){var t,r;return((t=this.currentService)===null||t===void 0||(r=t.extra)===null||r===void 0?void 0:r.all_pre)||0},canBuyExtraPremiumForOtherMonth:function(){var t,r,n,l;return((t=this.currentService)===null||t===void 0||(r=t.extra)===null||r===void 0?void 0:r.buy_length)>(((n=this.currentService)===null||n===void 0||(l=n.extra)===null||l===void 0?void 0:l.all_pre)||0)},canBuyExtraForThisMonth:function(){var t,r;return(t=this.currentService)!==null&&t!==void 0&&(r=t.extra)!==null&&r!==void 0&&r.all_pre?!1:this.maxPreForCurrentMonth>0},maxPreForCurrentMonth:function(){var t,r;if(((t=this.currentService)===null||t===void 0?void 0:t.plan_id)===2)return 999999999999;var n=((r=this.model.alreadyBought)===null||r===void 0?void 0:r.allplatform)||0;return 100-n}},Object(f.b)({user:function(t){return t.user}})),watch:{maxPreForCurrentMonth:function(t){this.model.maxPreForCurrentMonth=t},currentAllPre:function(t){this.model.currentAllPre=t},model:function(t){console.log("new premiumOptions:",t),this.$emit("input",d(d({},t),{},{extraPremium:Number(t.extraPremium)}))},"model.extraPremium":function(t){t>this.maxPreForCurrentMonth&&(this.model.extraPremium=this.maxPreForCurrentMonth)}},mounted:function(){console.log("premium module loaded."),this.$emit("input",this.model)}},P=h,E=a(1205),x=a(51),g=Object(x.a)(P,i,u,!1,null,"d3b460f6",null),B=_.default=g.exports}}]);
