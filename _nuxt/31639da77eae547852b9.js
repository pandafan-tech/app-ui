(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1026:function(e,n,r){"use strict";r.d(n,"a",(function(){return _}));var t=r(1043),o=r.n(t),c={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};let l=!1;try{let e=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",null,e)}catch(e){}var m={$:e=>"string"!=typeof e?e:document.querySelector(e),on(element,e,n,r={passive:!1}){e instanceof Array||(e=[e]);for(let i=0;i<e.length;i++)element.addEventListener(e[i],n,!!l&&r)},off(element,e,n){e instanceof Array||(e=[e]);for(let i=0;i<e.length;i++)element.removeEventListener(e[i],n)},cumulativeOffset(element){let e=0,n=0;do{e+=element.offsetTop||0,n+=element.offsetLeft||0,element=element.offsetParent}while(element);return{top:e,left:n}}};const d=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"];let f={container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};const _=()=>{let element,e,n,r,t,l,_,y,h,v,w,I,C,x,k,$,O,j,P,S,R,T,F,progress,D=e=>{_&&(S=e,P=!0)};function E(r){if(P)return L();T||(T=r),F=r-T,progress=Math.min(F/n,1),progress=R(progress),N(e,k+j*progress,C+O*progress),F<n?window.requestAnimationFrame(E):L()}function L(){P||N(e,$,x),T=!1,m.off(e,d,D),P&&v&&v(S,element),!P&&h&&h(element)}function N(element,e,n){I&&(element.scrollTop=e),w&&(element.scrollLeft=n),"body"===element.tagName.toLowerCase()&&(I&&(document.documentElement.scrollTop=e),w&&(document.documentElement.scrollLeft=n))}return function(T,F,L={}){if("object"==typeof F?L=F:"number"==typeof F&&(L.duration=F),element=m.$(T),!element)return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+T);e=m.$(L.container||f.container),n=L.duration||f.duration,r=L.easing||f.easing,t=L.hasOwnProperty("offset")?L.offset:f.offset,l=L.hasOwnProperty("force")?!1!==L.force:f.force,_=L.hasOwnProperty("cancelable")?!1!==L.cancelable:f.cancelable,y=L.onStart||f.onStart,h=L.onDone||f.onDone,v=L.onCancel||f.onCancel,w=void 0===L.x?f.x:L.x,I=void 0===L.y?f.y:L.y;let N=m.cumulativeOffset(e),W=m.cumulativeOffset(element);if("function"==typeof t&&(t=t(element,e)),k=function(e){let n=e.scrollTop;return"body"===e.tagName.toLowerCase()&&(n=n||document.documentElement.scrollTop),n}(e),$=W.top-N.top+t,C=function(e){let n=e.scrollLeft;return"body"===e.tagName.toLowerCase()&&(n=n||document.documentElement.scrollLeft),n}(e),x=W.left-N.left+t,P=!1,j=$-k,O=x-C,!l){const n="body"===e.tagName.toLowerCase()?document.documentElement.clientHeight||window.innerHeight:e.offsetHeight,r=k,o=r+n,c=$-t,l=c+element.offsetHeight;if(c>=r&&l<=o)return void(h&&h(element))}if(y&&y(element),j||O)return"string"==typeof r&&(r=c[r]||c.ease),R=o.a.apply(o.a,r),m.on(e,d,D,{passive:!0}),window.requestAnimationFrame(E),()=>{S=null,P=!0};h&&h(element)}};_()},1042:function(e,n,r){"use strict";r(95),r(27),r(40),r(265),r(23),r(13),r(80),r(94),r(127),r(66);var t=r(4),o=r(39),c=(r(181),r(16)),l=(r(1026),r(970)),m=r(65);r(187);function d(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,r)}return n}var f={middleware:["load-rt-data","authenticated"],data:function(){return{extend_info:{buy_length:"12"},showCurrencyWarning:!1,confirming:!1,currency:"rmb",showResult:!1,selectServiceDialogFormVisible:!1,raw_service_data:null,paymentPoll:null,expireTimeout:null,expired:!1,lastNavigation:null,checkoutLink:null,openSiteTimer:null,waitForPaymentConfirm:null}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({need_to_pay:function(){return Math.ceil(this.confirmedInfo.fee-this.confirmedInfo.user_balance)},need_to_pay_usd:function(){return this.confirmedInfo.usd_amount},need_to_pay_eur:function(){return this.confirmedInfo.eur_amount}},Object(m.b)(["confirmedInfo","buyServiceResult"])),mounted:function(){var e=this;return Object(t.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("payment.buy-service..."),console.log(e.confirmedInfo),(r=c.remote.getCurrentWindow()).webContents.on("will-navigate",(function(n,t){if(console.log("will-navigate"),t.includes("checkout.stripe.com")){if(r.webContents.stop(),n.preventDefault(),r.webContents.stop(),e.checkoutLink===t)return void console.log("same checkout url...");e.checkoutLink=t,e.openSite(t)}}));case 4:case"end":return n.stop()}}),n)})))()},beforeDestroy:function(){this.paymentPoll&&Object(l.clearInterval)(this.paymentPoll),this.expireTimeout&&Object(l.clearTimeout)(this.expireTimeout)},methods:{reset:function(){this.$store.dispatch("setBuyServiceResult",!1)},serialize:function(e){return"?"+Object.keys(e).reduce((function(a,n){return a.push(n+"="+encodeURIComponent(e[n])),a}),[]).join("&")},reloadUserData:function(e){var n=this;return Object(t.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.$store.dispatch("getUserAndService").then((function(e){console.log("got data."),console.log(e[1]),n.raw_service_data=e[1],n.$store.dispatch("runTimeState",{selected_line:{}}),c.ipcRenderer.send("user-info-update",2)})).catch((function(e){return console.log("get user&service e-----\x3e",e),["found no valid service","service data suspended","no service purchased"].includes(e)?n.selectServiceDialogFormVisible=!0:n.$message({message:"刷新服务信息失败，请稍后重试...",type:"error"})})));case 1:case"end":return e.stop()}}),e)})))()},waitForPayment:function(e,n){var r=this,title=this.$t("billing.wait_for_payment.title"),o=this.$t("billing.wait_for_payment.msg");this.paymentPoll&&Object(l.clearInterval)(this.paymentPoll),this.paymentPoll=Object(l.setInterval)(Object(t.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.checkPaymentStatus(n);case 1:case"end":return e.stop()}}),e)}))),3e3);var c=900;n.time_expire&&(c=1e3*n.time_expire-new Date),this.expireTimeout&&Object(l.clearTimeout)(this.expireTimeout),this.expireTimeout=Object(l.setTimeout)((function(){r.expired=!0,r.paymentPoll&&Object(l.clearInterval)(r.paymentPoll),r.$alert(r.$t("billing.wait_for_payment.timeout.msg"),r.$t("billing.wait_for_payment.timeout.title"),{confirmButtonText:r.$t("billing.wait_for_payment.confirm"),callback:function(e){}}).catch((function(e){}))}),1e3*c),e||(this.waitForPaymentConfirm=this.$confirm(o,title,{confirmButtonText:this.$t("billing.wait_for_payment.paid"),cancelButtonText:this.$t("billing.wait_for_payment.cancel"),type:"warning",closeOnHashChange:!0}).then((function(){r.$message({type:"success",message:r.$t("billing.wait_for_payment.waiting")})})).catch((function(){console.log("stop polling...."),r.paymentPoll&&Object(l.clearInterval)(r.paymentPoll)})))},checkPaymentStatus:function(e){var n=this;return Object(t.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:console.log("check: ".concat(e.channel,"/").concat(e.id)),n.$axios.get("".concat(e.channel,"/").concat(e.id)).then((function(e){console.log(e.data),["TRADE_FINISHED","complete"].includes(e.data)&&(Object(l.clearInterval)(n.paymentPoll),n.waitForPaymentConfirm.close(),n.$message({type:"success",message:n.$t("billing.wait_for_payment.suc")}),Object(l.setTimeout)(Object(t.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.reloadUserData();case 2:n.$router.push({path:"/dashboard/"});case 3:case"end":return e.stop()}}),e)}))),3e3))})).catch((function(e){console.log(e)}));case 2:case"end":return r.stop()}}),r)})))()},handleCharge:function(e){var n={}.hasOwnProperty,r=e.channel,t=e.credential[r],o="https://mapi.alipay.com/gateway.do";return n.call(t,"channel_url")&&(o=t.channel_url),n.call(t,"_input_charset")||n.call(t,"service")&&"create_direct_pay_by_user"===t.service&&(t._input_charset="utf-8"),o+"?"+function(data,e,r){void 0===r&&(r=!1);var i,output=[];for(i in data)n.call(data,i)&&"function"!=typeof data[i]&&("bfb_wap"===e&&"url"===i||"yeepay_wap"===e&&"mode"===i||"channel_url"!==i&&output.push(i+"="+(r?encodeURIComponent(data[i]):data[i])));return output.join("&")}(t,r,!0)},confirmPrice:function(e){var n=this;return Object(t.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.confirming=!0,r=n,o={plan_id:n.confirmedInfo.selected_plan_id,buy_length:n.confirmedInfo.buy_length,promocode:n.confirmedInfo.promo_code,dry_run:!1},console.log(o),n.$store.dispatch("confirmPrice",o).then(function(){var e=Object(t.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("confirmPrice ret:",t),r.$message({type:"success",message:n.$t("billing.wait_for_payment.suc")}),e.next=4,n.reloadUserData();case 4:n.$router.push({path:"/dashboard/"});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){var t;console.log(e);var o="抱歉，服务器开小差了，请稍后再试..."+((null==e||null===(t=e.data)||void 0===t?void 0:t.message)||e);e.data&&"invalidPromo"==e.data.message&&(o=n.$t("billing.invalid_promo")),r.$message({type:"error",message:o})})).finally((function(){r.confirming=!1}));case 5:case"end":return e.stop()}}),e)})))()},pingppCheckout:function(e){var n=this;return Object(t.a)(regeneratorRuntime.mark((function r(){var t,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.confirming=!0,n.showCurrencyWarning=!1,t=n,n.currency="rmb",console.log("c->",t.confirmedInfo),o={money:t.confirmedInfo.rmb_amount,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code,channel:e},console.log("o->",o),n.$store.dispatch("pingppCheckout",o).then((function(n){"alipay_pc_direct"==e?t.openSite(t.handleCharge(n)):(console.log(n),t.confirmedInfo.qr_url=n.credential.alipay_qr);var r={channel:"pingxx",id:n.id};t.waitForPayment("alipay_qr"==e,r)})).catch((function(e){console.log(e),t.$message({type:"error",message:"抱歉，服务器开小差了，请稍后再试..."+(e.response||e)})})).finally((function(){t.confirming=!1}));case 8:case"end":return r.stop()}}),r)})))()},stripeDone:function(e){var n=this;return Object(t.a)(regeneratorRuntime.mark((function r(){var t,o,c,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=e.token,o=e.args,console.log(t,o),n.$message({type:"success",message:"正在处理付款....."}),c=n,n.confirming=!1,m={token:t,eur:c.need_to_pay_eur,rmb:c.need_to_pay,auto_buy:c.confirmedInfo.selected_plan_id,auto_buy_month:Number(c.confirmedInfo.buy_length),auto_buy_promo:c.confirmedInfo.promo_code},n.$store.dispatch("createStripe",m).then((function(e){c.$message({type:"success",message:"购买成功！"}),Object(l.setTimeout)((function(){n.reloadUserData()}),3e3)})).catch((function(e){console.log(e),c.$message({type:"error",message:"抱歉，服务器开小差了，请稍后再试..."+(e.response||e)})})).finally((function(){c.confirming=!1}));case 7:case"end":return r.stop()}}),r)})))()},stripeCancel:function(){var e=this;return Object(t.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("oops."),e.confirming=!1;case 2:case"end":return n.stop()}}),n)})))()},stripeCheckout:function(e){var n=this;return Object(t.a)(regeneratorRuntime.mark((function r(){var t,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log("stripeCheckout:",e),n.confirming=!0,n.showCurrencyWarning=!1,t=n,n.currency="eur","card"!=e){r.next=8;break}return console.log("opening $checkout"),r.abrupt("return",n.payWithCard());case 8:o={eur:t.confirmedInfo.eur_amount,rmb:t.confirmedInfo.rmb_amount,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code},n.showCurrencyWarning=!0,n.$store.dispatch("createStripe"+e,o).then((function(r){console.log(e,":"),console.log(r);r.source_id;var o=r.qr_code_url,c=r.url;console.log(o,c),o?t.confirmedInfo.qr_url=o:n.openSite(c);var l={channel:"stripe_".concat(e).toLowerCase(),id:r.source_id};t.waitForPayment(o,l)})).catch((function(e){console.log(e),t.$message({type:"error",message:"抱歉，服务器开小差了，请稍后再试..."+(e.response||e)})})).finally((function(){t.confirming=!1}));case 11:case"end":return r.stop()}}),r)})))()},payWithCard:function(){var e=this;return Object(t.a)(regeneratorRuntime.mark((function n(){var r,t,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.confirming=!0,r=e.loadStripeJS(),t={eur:e.confirmedInfo.eur_amount,rmb:e.confirmedInfo.rmb_amount,auto_buy:e.confirmedInfo.selected_plan_id||e.confirmedInfo.plan_id,auto_buy_month:Number(e.confirmedInfo.buy_length),auto_buy_promo:e.confirmedInfo.promo_code},o="https:"===window.location.protocol?"pk_live_Mxmo2bAcrcjrBSmUWdC0N9s4":"pk_test_2e7gWNfoz4BurjGiPujJd942",n.next=6,e.$store.dispatch("createStripeCheckoutSession",t);case 6:c=n.sent,Promise.all([r,c]).then((function(n){var r=window.Stripe(o),t={channel:"stripe_card",id:n[1].data.id};e.waitForPayment(!1,t),r.redirectToCheckout({sessionId:n[1].data.id})})).catch((function(n){e.$alert(n.message)})).finally((function(){return e.confirming=!1}));case 8:case"end":return n.stop()}}),n)})))()},loadStripeJS:function(){return new Promise((function(e,n){if(window.Stripe)return console.log("Stripe is already loaded."),e();var r=document.createElement("script");r.src="https://js.stripe.com/v3/",r.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(r),r.addEventListener("load",e),r.addEventListener("error",(function(){return n(new Error("信用卡付款加载失败，请返回重试"))}))}))},yabandPay:function(e){e=e.toLowerCase(),console.log("Yaband:",e),this.confirming=!0,this.showCurrencyWarning=!1;var n=this;this.currency="eur";var r={eur:n.confirmedInfo.eur_amount,rmb:n.confirmedInfo.rmb_amount,auto_buy:n.confirmedInfo.selected_plan_id||n.confirmedInfo.plan_id,auto_buy_month:Number(n.confirmedInfo.buy_length),auto_buy_promo:n.confirmedInfo.promo_code};this.showCurrencyWarning=!0,this.$store.dispatch("createYaband",{channel:e,opt:r}).then((function(r){console.log(e,":"),console.log(r);var t=r.url,o=r.trade_id;n.confirmedInfo.qr_url=t;var c={channel:"yaband",id:o};n.waitForPayment(t,c)})).catch((function(e){console.log(e),n.$message({type:"error",message:"抱歉，服务器开小差了，请稍后再试..."+(e.response||e)})})).finally((function(){n.confirming=!1}))}}},_=(r(1044),r(38)),component=Object(_.a)(f,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("el-row",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{staticClass:"full-width",attrs:{type:"warning",loading:e.confirming},on:{click:e.reset}},[e._v(e._s(e.$t("back")))])],1),r("el-row",{staticClass:"result"},[r("hr"),e.confirmedInfo&&"down"==e.confirmedInfo.type?r("div",{staticClass:"downgrade-warning"},[r("center",[r("h1",[e._v("确认要降级套餐吗？"),r("br"),r("span",{staticClass:"small label warning"},[e._v("没有退费，也不会延长服务时长")])])])],1):e._e(),e.confirmedInfo&&"down"!==e.confirmedInfo.type&&"pre"!==e.confirmedInfo.selected_plan_id?r("div",[e.confirmedInfo.qr_url?e._e():r("h4",[e._v(e._s(e.$t("billing."+("up"==e.confirmedInfo.type?"upgrade":"purchase")))),r("span",{staticClass:"underline round-margin"},[e._v(e._s(e.$t("buy_length."+(e.confirmedInfo.buy_length||e.service_to_buy.extra.buy_length))))]),r("span",{staticClass:"underline round-margin"},[e._v(e._s(e.$t("plan_names."+e.confirmedInfo.selected_plan_id)))]),r("br"),e._v(e._s(e.$t("billing.total"))),"home"!==e.confirmedInfo.service_cate_to_buy?r("span",{staticClass:"underline round-margin"},[e._v("¥"+e._s(e.confirmedInfo.rmb_amount.toFixed(2)))]):e._e(),"home"==e.confirmedInfo.service_cate_to_buy?r("span",{staticClass:"underline round-margin"},[e._v("€"+e._s(e.confirmedInfo.eur_amount.toFixed(2)))]):e._e()])]):e._e(),e.need_to_pay<=0?r("div",[r("br"),"down"!==e.confirmedInfo.type?r("h4",{staticClass:"subheader"},[e._v(e._s(e.$t("billing.sufficient_balance",{n:e.confirmedInfo.user_balance.toFixed(2)})))]):e._e(),r("br"),e.need_to_pay<=0?r("el-button",{staticClass:"full-width",attrs:{type:"primary",loading:e.confirming},on:{click:function(n){return e.confirmPrice(!1)}}},[e._v(e._s(e.$t("billing.confirm")))]):e._e()],1):e._e(),e.confirmedInfo.rmb_amount>0?r("div",[r("div",[r("br"),r("h4",[e._v(e._s(e.$t("billing.due")))]),r("br"),r("center",[r("h1",{staticClass:"subheader"},["rmb"==e.currency&&"home"!==e.confirmedInfo.service_cate_to_buy?r("span",[e._v("¥"+e._s(e.confirmedInfo.rmb_amount.toFixed(2)))]):e._e(),"eur"==e.currency||"home"==e.confirmedInfo.service_cate_to_buy?r("span",[e._v("€"+e._s(e.confirmedInfo.eur_amount.toFixed(2)))]):e._e()]),e.confirmedInfo.qr_url?r("h1",[e.confirmedInfo.qr_url?r("qrcode",{attrs:{value:e.confirmedInfo.qr_url}}):e._e(),e.showCurrencyWarning?r("div",[r("p",{staticClass:"small-text"},[r("small",{staticClass:"warning"},[e._v("由于外币支付渠道收取高昂手续费，且结算汇率与微信/支付宝给您的汇率不同"),r("br"),e._v("您将要支付的人民币金额将会大于本站最终入账的金额")])])]):e._e()],1):e._e()]),r("br")],1),r("el-row",["home"==e.confirmedInfo.service_cate_to_buy?r("div",["home"==e.confirmedInfo.service_cate_to_buy?r("center",[r("p",[e._v("「回家服务」仅支持以欧元结算渠道购买")])]):e._e()],1):r("div",[r("el-divider",{attrs:{"content-position":"center"}},[e._v(e._s(e.$t("billing.pay_rmb"))+" ¥"+e._s(e.confirmedInfo.rmb_amount.toFixed(2)))]),r("el-row",[r("el-button",{staticClass:"checkout full-width",attrs:{type:"primary",loading:e.confirming},on:{click:function(n){return e.pingppCheckout("alipay_pc_direct")}}},[e._v(e._s(e.$t("billing.alipay_pc")))])],1)],1)]),r("el-divider",{attrs:{"content-position":"center"}},[e._v(e._s(e.$t("billing.pay_eur"))+" €"+e._s(e.confirmedInfo.eur_amount.toFixed(2)))]),r("el-row",[r("h3",{staticClass:"price"}),e.user.billing&&e.user.billing.country?e._e():r("el-row",[r("center",[r("h3",[r("b",[e._v(e._s(e.$t("update_billing.notify")))])]),r("br"),r("nuxt-link",{attrs:{to:"/dashboard/update_billing/"}},[r("el-button",{attrs:{type:"primary"}},[e._v(e._s(e.$t("update_billing.go")))])],1)],1),r("br")],1),r("el-row",[r("el-row",[r("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:function(n){return e.yabandPay("Alipay")}}},[e._v(e._s(e.$t("billing.alipay_qr")))])],1),r("el-row",[r("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:function(n){return e.yabandPay("Wechat")}}},[e._v(e._s(e.$t("billing.wechat")))])],1),r("el-row",[r("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:function(n){return e.stripeCheckout("card")}}},[e._v(e._s(e.$t("billing.card")))])],1)],1)],1)],1):e._e(),r("div",{staticClass:"service-cate-warning"},["home"!=e.confirmedInfo.service_cate_to_buy||e.service_to_buy&&"off"!=e.service_to_buy.status?e._e():r("center",[r("p",{staticClass:"label warning round"},[e._v("您正在购买「回家服务」"),r("br"),e._v("此项服务为中国大陆以外用户设计"),r("br"),e._v("请确认没有购买错误哦")])]),"home"==e.confirmedInfo.service_cate_to_buy?r("center",[r("p",{staticClass:"label warning round"},[e._v("「回家服务」不支持以下国家使用："),r("br"),r("b",[e._v("菲律宾、柬埔寨")])])]):e._e(),"allplatform"==e.confirmedInfo.service_cate_to_buy?r("center",[4===e.confirmedInfo.user_req.plan_id?r("p",{staticClass:"small"},[e._v("无限流量基于公平、合理条件下提供"),r("br"),e._v("月流量超过"),r("span",{staticClass:"label warning round round-margin"},[e._v("800GB")]),e._v("请提前报备原因，否则视为滥用。")]):e._e(),r("p",{staticClass:"small"},[e._v("我们无法接受："),r("br"),r("span",{staticClass:"label warning round round-margin"},[e._v("共用账号、服务")]),r("span",{staticClass:"label warning round"},[e._v("政治敏感内容")]),r("br"),e._v("购买服务意味着您已阅读且同意我们的"),r("a",{staticClass:"warning round-margin underline",on:{click:function(n){return e.openSite("/knowledges/32")}}},[e._v("服务条款")]),r("br"),e._v("违反服务条款将导致账号被删除")])]):e._e()],1)])],1)}),[],!1,null,null,null);n.a=component.exports},1043:function(e,n){var r="function"==typeof Float32Array;function t(e,n){return 1-3*n+3*e}function o(e,n){return 3*n-6*e}function c(e){return 3*e}function l(e,n,r){return((t(n,r)*e+o(n,r))*e+c(n))*e}function m(e,n,r){return 3*t(n,r)*e*e+2*o(n,r)*e+c(n)}function d(e){return e}e.exports=function(e,n,t,o){if(!(0<=e&&e<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===n&&t===o)return d;for(var c=r?new Float32Array(11):new Array(11),i=0;i<11;++i)c[i]=l(.1*i,e,t);function f(n){for(var r=0,o=1;10!==o&&c[o]<=n;++o)r+=.1;--o;var d=r+.1*((n-c[o])/(c[o+1]-c[o])),f=m(d,e,t);return f>=.001?function(e,n,r,t){for(var i=0;i<4;++i){var o=m(n,r,t);if(0===o)return n;n-=(l(n,r,t)-e)/o}return n}(n,d,e,t):0===f?d:function(e,n,r,t,o){var c,m,i=0;do{(c=l(m=n+(r-n)/2,t,o)-e)>0?r=m:n=m}while(Math.abs(c)>1e-7&&++i<10);return m}(n,r,r+.1,e,t)}return function(e){return 0===e?0:1===e?1:l(f(e),n,o)}}},1044:function(e,n,r){"use strict";var t=r(988);r.n(t).a},1045:function(e,n,r){(n=r(50)(!1)).push([e.i,".checkout{margin-bottom:1rem}.buy-service-container{height:100vh;padding:.5rem .5rem 0;position:relative}.buy-service-container .round-margin{margin:.3rem}.buy-service-container .round-margin .el-form-item,.buy-service-container .round-margin .el-form-item *,.buy-service-container .round-margin h1,.buy-service-container .round-margin h1 *,.buy-service-container .round-margin h2,.buy-service-container .round-margin h2 *,.buy-service-container .round-margin h3,.buy-service-container .round-margin h3 *,.buy-service-container .round-margin h4,.buy-service-container .round-margin h4 *,.buy-service-container .round-margin h5,.buy-service-container .round-margin h5 *,.buy-service-container .round-margin input,.buy-service-container .round-margin input *,.buy-service-container .round-margin p,.buy-service-container .round-margin p *{color:#f4f7fc}.buy-service-container .round-margin .small-text{font-size:1.2rem}.buy-service-container .round-margin .small-text .warning{background:#f4f7fc}.buy-service-container .round-margin .discount{margin-left:.5rem}.buy-service-container .round-margin .warning-div{border:1px solid #d35400;padding:.5rem;margin-top:0;margin-bottom:1rem;border-radius:5px}.buy-service-container .round-margin .el-radio-group{padding-top:.4rem}.buy-service-container .round-margin .el-input{padding-left:1rem;width:17rem}.buy-service-container .round-margin .el-input input{text-align:center;border:none;border-bottom:1px solid #95a5a6;padding:0;border-radius:0;background:transparent;font-size:1rem}.buy-service-container .round-margin .el-input input:focus,.buy-service-container .round-margin .el-input input:hover{border-color:#1abc9c}.buy-service-container .round-margin .dashboard-link,.buy-service-container .round-margin .switch-service{position:fixed;bottom:.5rem;z-index:999}.buy-service-container .round-margin .dashboard-link{right:.5rem}.buy-service-container .round-margin .switch-service{left:.5rem}.buy-service-container .round-margin .checkout{margin-bottom:1rem}.buy-service-container .round-margin .cal-fee{margin-bottom:3rem}.buy-service-container .round-margin hr{margin-top:1rem;margin-bottom:1rem}.buy-service-container .round-margin hr.short{margin-left:5rem;margin-right:5rem}.buy-service-container .round-margin .el-radio{margin-left:1rem;display:block;margin-bottom:.5rem}.buy-service-container .round-margin .price{color:#34495e;padding:.2rem;font-size:1rem}.buy-service-container .round-margin .downgrade-warning span,.buy-service-container .round-margin .price span{font-size:1rem}.buy-service-container .round-margin .service-cate-warning{margin-top:1rem}.buy-service-container .round-margin .plan-container.selected .select-plan-button{background:#67c23a;border-color:#67c23a}.buy-service-container .round-margin .plan-container.selected .desc{padding:.2rem 1rem}.buy-service-container .round-margin .plan-container.selected .select-plan-button{position:absolute;bottom:40px;left:0}.buy-service-container .round-margin .plan-container.selected .price{color:#f4f7fc;margin:.5rem 0}.buy-service-container .round-margin .plan-container.selected .feature{margin-top:0}.buy-service-container .round-margin .plan-container.selected .extra-feature{margin-top:1rem}.buy-service-container .round-margin .plan-container.selected .extra-feature h4{margin-bottom:1rem}.buy-service-container .round-margin .plan-container.selected .extra-feature h4 .el-col{margin-bottom:.1rem}.buy-service-container .round-margin .el-carousel .el-carousel__container{height:50vh}.buy-service-container .round-margin .el-carousel__item p{color:#f4f7fc}",""]),e.exports=n},988:function(e,n,r){var content=r(1045);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("42b0f803",content,!0,{sourceMap:!1})}}]);