(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1266:function(f,M,i){var c=i(1323);c.__esModule&&(c=c.default),typeof c=="string"&&(c=[[f.i,c,""]]),c.locals&&(f.exports=c.locals);var m=i(2).default,I=m("406f80ba",c,!0,{sourceMap:!1})},1321:function(f,M){var i="Expected a function",c=0/0,m="[object Symbol]",I=/^\s+|\s+$/g,N=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,W=/^0o[0-7]+$/i,j=parseInt,U=typeof global=="object"&&global&&global.Object===Object&&global,Y=typeof self=="object"&&self&&self.Object===Object&&self,k=U||Y||Function("return this")(),V=Object.prototype,G=V.toString,K=Math.max,J=Math.min,O=function(){return k.Date.now()};function w(o,s,h){var g,b,T,_,d,v,F=0,E=!1,P=!1,$=!0;if(typeof o!="function")throw new TypeError(i);s=B(s)||0,S(h)&&(E=!!h.leading,P="maxWait"in h,T=P?K(B(h.maxWait)||0,s):T,$="trailing"in h?!!h.trailing:$);function D(r){var p=g,x=b;return g=b=void 0,F=r,_=o.apply(x,p),_}function e(r){return F=r,d=setTimeout(a,s),E?D(r):_}function n(r){var p=r-v,x=r-F,L=s-p;return P?J(L,T-x):L}function t(r){var p=r-v,x=r-F;return v===void 0||p>=s||p<0||P&&x>=T}function a(){var r=O();if(t(r))return l(r);d=setTimeout(a,n(r))}function l(r){return d=void 0,$&&g?D(r):(g=b=void 0,_)}function u(){d!==void 0&&clearTimeout(d),F=0,g=v=b=d=void 0}function y(){return d===void 0?_:l(O())}function C(){var r=O(),p=t(r);if(g=arguments,b=this,v=r,p){if(d===void 0)return e(v);if(P)return d=setTimeout(a,s),D(v)}return d===void 0&&(d=setTimeout(a,s)),_}return C.cancel=u,C.flush=y,C}function S(o){var s=typeof o;return!!o&&(s=="object"||s=="function")}function A(o){return!!o&&typeof o=="object"}function R(o){return typeof o=="symbol"||A(o)&&G.call(o)==m}function B(o){if(typeof o=="number")return o;if(R(o))return c;if(S(o)){var s=typeof o.valueOf=="function"?o.valueOf():o;o=S(s)?s+"":s}if(typeof o!="string")return o===0?o:+o;o=o.replace(I,"");var h=z.test(o);return h||W.test(o)?j(o.slice(2),h?2:8):N.test(o)?c:+o}f.exports=w},1322:function(f,M,i){"use strict";var c=i(1266),m=i.n(c)},1323:function(f,M,i){var c=i(1),m=c(!1);m.push([f.i,".summary .details .fee-details-switch[data-v-0b3d6c73]{text-align:right}.summary .details .otp[data-v-0b3d6c73]{margin-top:10px;text-align:right;font-size:1rem;color:var(--secondary-color)}.summary .details .promo input[data-v-0b3d6c73]{font-size:20px;text-align:center;border:none;border-bottom:1px solid var(--secondary-color);border-radius:0;background:transparent;color:var(--primary-color)}@media (max-width:768px){.summary .details .promo input[data-v-0b3d6c73]{width:120px}}.summary .details .promo .promo-info[data-v-0b3d6c73]{font-weight:300;background:var(--alizarin);color:var(--white);margin-right:10px;display:inline-block;border-radius:15px;padding:2px 5px;font-size:15px}.summary .details h5.subtitle[data-v-0b3d6c73]{margin-top:10px}.summary .details h3[data-v-0b3d6c73]{display:block;position:relative;text-align:right;font-size:1.1rem;line-height:1.1rem;color:var(--primary-color);white-space:pre-wrap;word-wrap:break-word;margin-bottom:10px}.summary .details h3 .subtitle[data-v-0b3d6c73]{font-weight:300;color:var(--secondary-color);font-size:15px}.summary .details h3.large span[data-v-0b3d6c73]{font-weight:700!important;color:var(--primary-color)!important}.summary .details h3.large span[data-v-0b3d6c73]:last-of-type{font-size:30px}.summary .details h3 span[data-v-0b3d6c73]{display:inline-block}.summary .details h3 span.title[data-v-0b3d6c73]{color:var(--secondary-color);position:absolute;left:0;font-weight:500;text-align:left}.summary .details h3 span.title i[data-v-0b3d6c73]{margin-left:5px}",""]),f.exports=m},1477:function(f,M,i){"use strict";i.r(M);var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.mode==="buyService"?t("div",[t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("service_cate")))]),t("span",[e._v(e._s(e.$t(e.selectedCate)))])]),t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("service_plan")))]),e.selectedTime?t("span",[e._v(e._s(e.$t("plan_names."+e.selectedPlan)))]):t("span",[e._v(e._s(e.$t("service_details.extra_premium")))])]),e.purchaseType.type==="upgrade"?t("el-tooltip",{attrs:{content:e.$t("pricing.upgrade_all_time"),placement:"top"}},[t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.upgrade_time"))),t("i",{staticClass:"el-icon-question"})]),t("span",[e._v(e._s(e.$tc("pricing.month",e.currentBuyLength)))])])]):e._e(),!["upgrade","downgrade"].includes(e.purchaseType.type)&&e.selectedTime?t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.selected_time")))]),t("span",[e._v(e._s(e.$t("buy_length."+e.selectedTime))),e.selectedTime===1&&e.purchaseType.type==="new_buy"?t("span",[e._v("("+e._s(e.todayToMonthEndStr)+")")]):e._e()])]):e._e(),e.selectedTime?t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.due_after_payment")))]),t("span",[e._v(e._s(e.dueTimeAfterPurchase))])]):e._e(),!e.selectedTime&&!e.allPre?t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.extra_amount")))]),t("span",[e._v(e._s(e.extraPremium)+" GB")])]):e._e(),e.selectedTime?e._e():t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.extra_amount_price")))]),t("span",[e._v("\u20AC"+e._s(e.feeList["pre"+e.currentService.plan_id]))])]),e.showFeeDetails?e._e():t("div",{staticClass:"fee-details-switch"},[t("a",{on:{click:function(a){e.showFeeDetails=!0}}},[e._v(e._s(e.$t("pricing.fee-details")))])]),e.showFeeDetails?t("div",[t("el-divider"),e.purchaseType.type==="new_buy"?t("div",[t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.days_left_this_month")))]),t("span",[e._v(e._s(e.$tc("day",e.daysLeftThisMonth)))])]),t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.days_in_this_month")))]),t("span",[e._v(e._s(e.$tc("day",e.daysInMonth)))])]),t("el-tooltip",{attrs:{content:e.$t("pricing.provide_by_percentage"),placement:"top"}},[t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.percentage_left_month"))),t("i",{staticClass:"el-icon-question"})]),t("span",[e._v(e._s(Math.ceil(e.percentageLeftThisMonth*100))+"%")])])]),t("el-tooltip",{attrs:{content:e.currentMonthFeeCalStr,placement:"top"}},[t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.cost_of_month"))),t("i",{staticClass:"el-icon-question"})]),t("span",[e._v("\u20AC"+e._s(e.currentMonthFeeDisplay.toFixed(2)))])])]),e.selectedTime>1?t("div",[t("el-tooltip",{attrs:{content:e.otherMonthFeeCalStr,placement:"top"}},[t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.cost_of_left_month"))),t("i",{staticClass:"el-icon-question"})]),t("span",[e._v("\u20AC"+e._s(e.otherMonthFee.toFixed(2)))])])])],1):e._e(),t("el-divider"),(e.showPromo||e.promoCode)&&!["upgrade","downgrade"].includes(e.purchaseType.type)&&e.selectedTime?t("h3",{staticClass:"promo"},[t("span",{staticClass:"title"},[e._v(e._s(e.$t("promo.title")))]),e.promoCode&&e.promoCodeInfoStr?t("span",{staticClass:"promo-info"},[e._v(e._s(e.promoCodeInfoStr))]):e._e(),t("span",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.promoCode,expression:"promoCode"}],attrs:{type:"text",placeholder:e.$t("promo.hint"),debounce:"300"},domProps:{value:e.promoCode},on:{input:function(a){a.target.composing||(e.promoCode=a.target.value)}}})])]):e._e()],1):e._e()],1):e._e(),t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.local_calc_fee")))]),t("span",[e._v(e._s(e.localFeeDisplay))])]),e.vatRate>0?t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.vat_rate")))]),t("span",[e._v(e._s(e.vatRate*100)+"%")])]):e._e(),e.balance>0&&e.roundUplocalFee>0?t("div",[t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("account_balance")))]),t("span",[e._v("\u20AC"+e._s(e.balance.toFixed(2)))])])]):e._e()],1):t("div",[t("h3",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("pricing.add_credit")))]),t("span",[e._v("\u20AC"+e._s(e.topUpAmount.toFixed(2)))])])]),t("el-divider"),t("h3",{staticClass:"large"},[t("span",{staticClass:"title"},[e._v(e._s(e.$t("billing.due")))]),t("span",[e._v(e._s(e.amountDueDisplay)),e.forcedMinimalFee?t("h5",{staticClass:"subtitle"},[t("small",[e._v(e._s(e.$t("billing.due_rounded")))])]):e._e()])]),e.willPayWithRMB?t("h3",{staticClass:"subtitle secondary"},[t("small",[e._v(e._s(e.$t("pricing.currency_converted_to_cny")))])]):e._e(),e.canPayWithRMB&&e.$i18n.locale==="zh"?t("h3",{staticClass:"subtitle secondary"},[t("small",[e._v(e._s(e.$t("pricing.can_pay_with_yin_lian")))])]):e._e(),e.isYunshanfu?t("h3",{staticClass:"subtitle secondary"},[t("small",[t("b",[e._v(e._s(e.$t("pricing.yunshanfu_usd")))])])]):e._e(),e._t("default")],2)},m=[],I=i(63),N=i(38),z=i(26),W=i(75),j=i(6),U=i(22),Y=i(9),k=i(39),V=i(107),G=i(321),K=i(27),J=i(64),O=i(76),w=i(18),S=i(206),A=i(1321),R=i.n(A),B=i(52),o=i(21),s=i.n(o),h=i(210),g=i.n(h),b=i(211),T=i.n(b);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?_(Object(t),!0).forEach(function(a){Object(w.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}s.a.extend(g.a),s.a.extend(T.a);var v={name:"PricingPageFeeBreakdown",props:{mode:{type:String,default:"buyService"},selectedCate:{type:String,default:"allplatform"},selectedTime:{type:Number,default:12},selectedPlan:{type:[Number,String],default:4},extraPremium:{type:Number,default:10},currentService:{type:Object,default:function(){}},allPre:{type:Boolean,default:!1},currentAllPre:{type:Number,default:0},maxPreForCurrentMonth:{type:Number,default:100},showPromo:{type:Boolean,default:!1},promoCode:{type:String,default:""},purchaseType:{type:Object,default:function(){}},selectedPaymentMethod:{type:Object,default:function(){}},topUpAmount:{type:Number,default:20},value:{type:Number,default:0}},data:function(){return{showFeeDetails:!0}},computed:d({balance:function(){var n;return(n=this.user)!==null&&n!==void 0&&n.money?this.user.balance_currency!=="eur"?this.user.money/this.$config.rmbToEurRate:this.user.money:0},feeList:function(){return this.$config.feeList},extraPremiumDataMode:function(){return this.selectedCate==="allplatform"&&this.selectedTime===0&&this.extraPremium},currentPlanId:function(){var n;return(n=this.currentService)===null||n===void 0?void 0:n.plan_id},dueTimeAfterPurchase:function(){var n=s()().tz("Asia/Shanghai");if(["downgrade","upgrade"].includes(this.purchaseType.type)){var t,a;return n.add((t=this.currentService)===null||t===void 0||(a=t.extra)===null||a===void 0?void 0:a.buy_length,"month").format("YYYY/MM/01")}var l=0;if(this.purchaseType.type==="extend"){var u,y;l=((u=this.currentService)===null||u===void 0||(y=u.extra)===null||y===void 0?void 0:y.buy_length)||0}return n.add(l+this.selectedTime,"month").format("YYYY/MM/01")},currentBuyLength:function(){var n,t;return((n=this.currentService)===null||n===void 0||(t=n.extra)===null||t===void 0?void 0:t.buy_length)||0},daysInMonth:function(){return this.$utils.getDaysInMonth(s()())},daysLeftThisMonth:function(){return this.daysInMonth-s()().tz("Asia/Shanghai").date()+1},percentageLeftThisMonth:function(){return this.daysLeftThisMonth/this.daysInMonth},selectedPlanFee:function(){return this.$config.feeList[this.selectedPlan]},currentPlanFee:function(){return this.$config.feeList[this.currentPlanId]},currentMonthFeeCalStr:function(){return"".concat(this.$t("pricing.full_month_fee"),": ").concat(this.selectedPlanFee," x ").concat((this.percentageLeftThisMonth*100).toFixed(2),"% (").concat(this.$t("pricing.up_rounded"),")")},currentMonthFeeDisplay:function(){var n=this.$utils.moneyShape(this.currentMonthFee)+this.$utils.moneyShape(this.otherMonthFee);return n>this.roundUplocalFee?this.currentMonthFee:this.$utils.moneyShape(this.currentMonthFee)},currentMonthFee:function(){return this.selectedPlanFee*this.percentageLeftThisMonth},otherMonthFee:function(){return["new_buy"].includes(this.purchaseType.type)?(this.realTime-1)*this.selectedPlanFee:0},todayToMonthEndStr:function(){var n=s()().tz("Asia/Shanghai");return"".concat(n.format("M/D"),"-").concat(n.format("M"),"/").concat(this.$utils.getDaysInMonth(n))},realTime:function(){var n=this.selectedTime;return n===12&&(n=10),n===6&&(n=5.5),n},otherMonthFeeCalStr:function(){return["new_buy"].includes(this.purchaseType.type)?"".concat(this.selectedPlanFee,"(").concat(this.$t("pricing.full_month_fee"),") x ").concat(this.realTime-1,"(").concat(this.$t("pricing.left_month"),")"):""},promoCodeInfoStr:function(){return this.promoCodeInfo?this.promoCodeInfo===1?this.$t("billing.invalid_promo"):this.$i18n.locale==="zh"?"".concat(this.promoCodeInfo*10,"\u6298"):"-".concat(100-this.promoCodeInfo*100,"%"):""},exactLocalFeeBeforeTax:function(){return console.log("mode is:",this.mode),this.mode==="buyService"?this.calcBuyServiceFee():this.calcTopupFee()},exactVatAmount:function(){return this.exactLocalFeeBeforeTax*this.vatRate},vatAmount:function(){return Math.ceil(this.exactVatAmount*100)/100},exactLocalFee:function(){return Math.ceil((this.exactLocalFeeBeforeTax+this.exactVatAmount)*100)/100},forcedMinimalFee:function(){return this.exactLocalFee>0&&this.exactLocalFee<1&&this.amountDue>0},roundUplocalFee:function(){return this.forcedMinimalFee?1:this.exactLocalFee},localFeeDisplay:function(){return console.log("exactLocalFee",this.exactLocalFee),this.$utils.toCurrencyString(this.exactLocalFee,"EUR")},exactAmountDue:function(){return console.log("exactLocalFee:",this.exactLocalFee),console.log("balance:",this.balance),console.log("exact needed:",this.exactLocalFee-this.balance),this.mode==="topUp"?this.exactLocalFee:this.exactLocalFee<=this.balance?0:this.exactLocalFee-this.balance},amountDue:function(){return this.exactAmountDue>0&&this.exactAmountDue<1?1:this.exactAmountDue},amountDueDisplay:function(){return this.$utils.toCurrencyString(this.amountDue,"EUR")},willPayWithRMB:function(){var n,t,a,l;return((n=this.selectedPaymentMethod)===null||n===void 0||(t=n.name)===null||t===void 0?void 0:t.endsWith("alipay"))||((a=this.selectedPaymentMethod)===null||a===void 0||(l=a.name)===null||l===void 0?void 0:l.endsWith("wechat"))},isYunshanfu:function(){var n;return((n=this.selectedPaymentMethod)===null||n===void 0?void 0:n.name)==="paymentwall"},canPayWithRMB:function(){var n,t,a;return((n=this.selectedPaymentMethod)===null||n===void 0||(t=n.name)===null||t===void 0?void 0:t.startsWith("paypal"))||((a=this.selectedPaymentMethod)===null||a===void 0?void 0:a.name)==="paymentwall"},vatRate:function(){var n,t,a=0;return this.$utils.isEu((n=this.user)===null||n===void 0||(t=n.billing)===null||t===void 0?void 0:t.country)&&(a=.21,this.vatReverseCharge&&(a=0)),a},vatReverseCharge:function(){var n,t,a,l;return!!((n=this.user)!==null&&n!==void 0&&(t=n.billing)!==null&&t!==void 0&&t.company_vat&&((a=this.user)===null||a===void 0||(l=a.billing)===null||l===void 0?void 0:l.country)!=="Netherlands")}},Object(B.b)({session:function(n){return n.session},isAdmin:function(n){return n.session.isAdmin},user:function(n){return n.user},loggedIn:function(n){return n.session.jwt_token},serviceArray:function(n){return n.service},hasService:function(n){var t;return((t=Object.keys(n.service))===null||t===void 0?void 0:t.length)>0}})),watch:{promoCode:function(n){var t=this;return Object(j.a)(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!n){u.next=3;break}return u.next=3,t.checkPromoCode();case 3:t.updateOutsideLocalFee();case 4:case"end":return u.stop()}},a)}))()},exactLocalFeeBeforeTax:function(){console.log("---> new exactLocalFeeBeforeTax",this.exactLocalFeeBeforeTax),this.$emit("input",this.exactLocalFeeBeforeTax)}},mounted:function(){this.updateOutsideLocalFee()},methods:{updateOutsideLocalFee:function(){console.log("updaing localFee for the outside...",this.exactLocalFeeBeforeTax),this.$emit("input",this.exactLocalFeeBeforeTax)},checkPromoCode:R()(Object(j.a)(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,this.$store.dispatch("pay/checkPromoCode",{promoCode:this.promoCode});case 3:n=a.sent.data,this.promoCodeInfo=n,a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),this.promoCodeInfo=null;case 10:case"end":return a.stop()}},e,this,[[0,7]])})),500),calcTopupFee:function(){var n=Number(this.topUpAmount);return n<1?1:n},calcBuyServiceFee:function(){if(this.extraPremiumDataMode){var n;if(console.log("calcBuyServiceFee->premium"),((n=this.currentService)===null||n===void 0?void 0:n.quote)!==-1)return this.$utils.moneyShape(this.$config.feeList.pre2*Number(this.extraPremium));if(this.allPre){var t,a;return console.log("calc all pre"),this.$utils.moneyShape((this.maxPreForCurrentMonth+(((t=this.currentService)===null||t===void 0||(a=t.extra)===null||a===void 0?void 0:a.buy_length)-this.currentAllPre-1)*100)*this.$config.feeList.pre4)}return Number(this.extraPremium)>this.maxPreForCurrentMonth?this.$utils.moneyShape(this.maxPreForCurrentMonth*this.$config.feeList.pre4):this.$utils.moneyShape(Number(this.extraPremium)*this.$config.feeList.pre4)}if(this.purchaseType.type==="downgrade")return console.log("calcBuyServiceFee->downgrade"),0;if(this.purchaseType.type==="upgrade"){var l,u,y,C;console.log("calcBuyServiceFee->upgrade"),console.log("selectedPlanFee:",this.selectedPlanFee),console.log("currentPlanFee:",this.currentPlanFee);var r=s()((l=this.currentService)===null||l===void 0||(u=l.extra)===null||u===void 0?void 0:u.buy_time).tz("Asia/Shanghai"),p=(this.$utils.getDaysInMonth(r)-r.date()+1)/this.$utils.getDaysInMonth(r),x=this.selectedPlanFee-this.currentPlanFee,L=x*p,X=(L+(((y=this.currentService)===null||y===void 0||(C=y.extra)===null||C===void 0?void 0:C.buy_length)-1)*this.currentPlanFee)*(this.promoCodeInfo||1);return console.log(r,p,x,L,X),X}return this.purchaseType.type==="extend"?(console.log("calcBuyServiceFee->extend"),this.selectedPlanFee*this.realTime*(this.promoCodeInfo||1)):(console.log("calcBuyServiceFee->default..."),(this.currentMonthFee+this.otherMonthFee)*(this.promoCodeInfo||1))}}},F=v,E=i(1322),P=i(51),$=Object(P.a)(F,c,m,!1,null,"0b3d6c73",null),D=M.default=$.exports}}]);
