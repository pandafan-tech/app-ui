(window.webpackJsonp=window.webpackJsonp||[]).push([[1,7,8],{1051:function(e,n,t){var content=t(1063);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(58).default)("92d06a4c",content,!0,{sourceMap:!1})},1059:function(e,n,t){"use strict";t.r(n);t(59),t(23),t(45),t(71);var r=t(5),o=t(11),l=(t(20),t(8),t(198),t(16)),c=(t(82),t(101),t(1060)),d=t(1061);function m(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(n){Object(l.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var h={middleware:["load-rt-data","authenticated"],props:{showHead:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0}},data:function(){return{newbilling:{},euList:c,countryList:d,updating:!1,inputCompanyInfo:!1}},computed:{personalNameRequired:function(){return this.inputCompanyInfo?"":"*"},vatReverseCharge:function(){return!(!this.newbilling.company_vat||"Netherlands"===this.newbilling.country)},vatRate:function(){var e=0;return this.euList.includes(this.newbilling.country)&&(e=.21,this.vatReverseCharge&&(e=0)),e}},mounted:function(){document.addEventListener("keydown",this.escHandler,!1);for(var e=f({},this.$store.state.user.billing),n=0,t=Object.entries(e);n<t.length;n++){var r=Object(o.a)(t[n],2),l=r[0],c=r[1];e[l]=unescape(c.trim())}this.newbilling=e},beforeDestroy:function(){document.removeEventListener("keydown",this.escHandler)},methods:{updateBilling:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o,l,c,d,m,h,_;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=0,r=["firstname","lastname","country","addr","city"];case 2:if(!(t<r.length)){n.next=11;break}if(o=r[t],e.newbilling[o]&&e.newbilling[o].trim()){n.next=8;break}if(null===(l=e.newbilling.company_name)||void 0===l||!l.trim()||!["firstname","lastname"].includes(o)){n.next=7;break}return n.abrupt("continue",8);case 7:return n.abrupt("return",e.$message({message:e.$t("update_billing.incomplete"),type:"warning"}));case 8:t++,n.next=2;break;case 11:if(e.countryList.includes(e.newbilling.country)){n.next=13;break}return n.abrupt("return",e.$message({message:"无法识别的国家名称，请重新选择。",type:"warning"}));case 13:return n.prev=13,e.updating=!0,n.next=17,e.$store.dispatch("updateBilling",f({},e.newbilling));case 17:c=n.sent,console.log("ret:",c),e.$notify({title:e.$t("update_billing.saved"),type:"success"}),e.updating=!1,n.next=28;break;case 23:n.prev=23,n.t0=n.catch(13),console.log("failed:",null===(d=n.t0.response)||void 0===d||null===(m=d.data)||void 0===m?void 0:m.message),e.$notify({title:e.$t("update_billing.save_failed"),message:e.$t("billing.".concat(null===(h=n.t0.response)||void 0===h||null===(_=h.data)||void 0===_?void 0:_.message)),type:"error"}),e.updating=!1;case 28:case"end":return n.stop()}}),n,null,[[13,23]])})))()},delBilling:function(){var e=this;this.$confirm(this.$t("warning.confirm_delete"),this.$t("warning.title"),{confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("service_selector.cancel"),type:"warning"}).then((function(){e.updating=!0,e.$store.dispatch("updateBilling",{}).then((function(){e.$notify({title:e.$t("update_billing.deleted"),type:"success"}),e.newbilling={}})).catch((function(n){var t,r;e.$notify({title:e.$t("update_billing.delete_error"),message:e.$t("billing.".concat(null===(t=n.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)),type:"error"})})).finally((function(){e.updating=!1}))})).catch((function(){}))}}},_=(t(1062),t(44)),component=Object(_.a)(h,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.updating,expression:"updating"}],staticClass:"updatebilling-container"},[t("el-row",{attrs:{gutter:10}},[e.showHead?t("el-col",{attrs:{span:24}},[t("center",[t("h5",[t("i",{staticClass:"el-icon-question"}),t("span",[e._v(e._s(e.$t("update_billing.sub.a")))])])]),t("br")],1):e._e(),t("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.newbilling},nativeOn:{submit:function(n){return n.preventDefault(),e.onSubmit(n)}}},[t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.firstname"))+e._s(e.personalNameRequired))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.firstname")},model:{value:e.newbilling.firstname,callback:function(n){e.$set(e.newbilling,"firstname",n)},expression:"newbilling.firstname"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.lastname"))+e._s(e.personalNameRequired))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.lastname")},model:{value:e.newbilling.lastname,callback:function(n){e.$set(e.newbilling,"lastname",n)},expression:"newbilling.lastname"}})],1),t("el-col",{attrs:{span:24}},[t("p",[e._v(e._s(e.$t("update_billing.form.addr")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.addr")},model:{value:e.newbilling.addr,callback:function(n){e.$set(e.newbilling,"addr",n)},expression:"newbilling.addr"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.city")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.city")},model:{value:e.newbilling.city,callback:function(n){e.$set(e.newbilling,"city",n)},expression:"newbilling.city"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.state")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.state")},model:{value:e.newbilling.state,callback:function(n){e.$set(e.newbilling,"state",n)},expression:"newbilling.state"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.zip")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.zip")},model:{value:e.newbilling.zip,callback:function(n){e.$set(e.newbilling,"zip",n)},expression:"newbilling.zip"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.country")))]),t("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:e.$t("update_billing.form.country")},model:{value:e.newbilling.country,callback:function(n){e.$set(e.newbilling,"country",n)},expression:"newbilling.country"}},e._l(e.countryList,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e.newbilling.company_name||e.inputCompanyInfo?t("div",[t("el-col",{attrs:{span:24}},[t("p",[e._v(e._s(e.$t("update_billing.form.company_name"))+"*")]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.company_name")},model:{value:e.newbilling.company_name,callback:function(n){e.$set(e.newbilling,"company_name",n)},expression:"newbilling.company_name"}})],1),t("el-col",{attrs:{span:24}},[t("p",[e._v(e._s(e.$t("update_billing.form.company_vat")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.company_vat")},model:{value:e.newbilling.company_vat,callback:function(n){e.$set(e.newbilling,"company_vat",n)},expression:"newbilling.company_vat"}})],1)],1):e._e()],1)],1),e.vatRate?t("div",[t("h4",{staticClass:"warning"},[e._v(e._s(e.$t("billing.eu_hint")))])]):e._e(),t("el-button",{staticClass:"full-width back-button",attrs:{type:"primary",size:"small"},on:{click:function(n){return e.updateBilling()}}},[e._v(e._s(e.$t("update_billing.save")))]),t("br"),e.inputCompanyInfo||e.newbilling.company_name?e._e():t("el-link",{attrs:{type:"success"},on:{click:function(n){e.inputCompanyInfo=!0}}},[e._v(e._s(e.$t("billing.input_company_info")))]),e.showDelete?t("div",[t("el-link",{attrs:{type:"info"},on:{click:function(n){return e.delBilling()}}},[e._v(e._s(e.$t("update_billing.del")))])],1):e._e()],1)}),[],!1,null,null,null);n.default=component.exports},1060:function(e){e.exports=JSON.parse('["Austria","Italy","Belgium","Latvia","Bulgaria","Lithuania","Croatia","Luxembourg","Cyprus","Malta","Czechia","Netherlands","Denmark","Poland","Estonia","Portugal","Finland","Romania","France","Slovakia","Germany","Slovenia","Greece","Spain","Hungary","Sweden","Ireland"]')},1061:function(e){e.exports=JSON.parse('["Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Cook Islands","Costa Rica","Côte d\'Ivoire, Republic of","Croatia","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands (Islas Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern and Antarctic Lands","Gabon","Gambia, The","Georgia","Germany","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Republic of","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, Republic of","Madagascar","Malawi","Malaysia","Maldives","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Palau","Papua New Guinea","Paraguay","Peru","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","South Africa","South Georgia and South Sandwich Islands","Spain","Sri Lanka","Suriname","Swaziland","Sweden","Switzerland","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vietnam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Zambia"]')},1062:function(e,n,t){"use strict";t(1051)},1063:function(e,n,t){var r=t(57)((function(i){return i[1]}));r.push([e.i,".updatebilling-container{position:relative}.updatebilling-container p{margin-top:.5rem!important;font-weight:700!important}.updatebilling-container .el-input{padding-left:0!important;width:100%!important;margin-top:.1rem!important}.updatebilling-container .el-input input{text-align:left!important;border:1px solid #95a5a6;padding:.2rem!important;color:#4d4d4d;font-size:1rem!important}.updatebilling-container .el-input input:focus,.updatebilling-container .el-input input:hover{border-color:#1abc9c}.updatebilling-container .el-card{margin-bottom:.6rem;background:#34495e;border:none}.updatebilling-container .el-card .subtitle{color:#f4f7fc;font-weight:500}.updatebilling-container .el-card.set-item .el-icon-arrow-down{transform:rotate(0deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item .el-icon-arrow-down.open{transform:rotate(-180deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item a i{padding-top:.3rem}.updatebilling-container .el-card.set-item a h2{color:#bdc3c7;margin-bottom:.1rem}.updatebilling-container .el-card.set-item .el-radio:not(.is-checked) .el-radio__label{color:#bdc3c7}.updatebilling-container .el-card__body{padding:1rem}.updatebilling-container .back-button{margin-bottom:1rem;margin-top:1rem}.updatebilling-container .dashboard-link{position:fixed;right:.5rem;bottom:.5rem}",""]),e.exports=r},1068:function(e,n,t){var content=t(1093);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(58).default)("d5fca8e8",content,!0,{sourceMap:!1})},1090:function(e,n,t){"use strict";t.r(n);t(59),t(23),t(38),t(289),t(71);var r=t(5),o=(t(20),t(8),t(45),t(82),t(101),t(16)),l=t(1045),c=t(17),d=t(206),m=t(46);function f(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var h={components:{Billing:t(1059).default},middleware:["load-rt-data","authenticated"],data:function(){return{extend_info:{buy_length:"12"},showBillingModal:!1,showCurrencyWarning:!1,confirming:!1,currency:"rmb",showResult:!1,selectServiceDialogFormVisible:!1,raw_service_data:null,paymentPoll:null,expireTimeout:null,expired:!1,lastNavigation:null,checkoutLink:null,openSiteTimer:null,waitForPaymentConfirm:null}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({need_to_pay:function(){return Math.ceil(this.confirmedInfo.fee-this.confirmedInfo.user_balance)},need_to_pay_usd:function(){return this.confirmedInfo.usd_amount},need_to_pay_eur:function(){var e=this.confirmedInfo.fee-this.confirmedInfo.user_balance;return e>0&&e<1&&(e=1),e},alipayAllowed:function(){var e,n,t,r,o,l,c,d;return console.log("allowed payment methods:",null===(e=this.user)||void 0===e||null===(n=e.extra)||void 0===n?void 0:n.allowed_payment_methods,null===(t=this.user)||void 0===t||null===(r=t.extra)||void 0===r||null===(o=r.allowed_payment_methods)||void 0===o?void 0:o.includes("alipay")),null===(l=this.user)||void 0===l||null===(c=l.extra)||void 0===c||null===(d=c.allowed_payment_methods)||void 0===d?void 0:d.includes("alipay")}},Object(m.b)(["confirmedInfo","buyServiceResult"])),mounted:function(){console.log("payment.buy-service..."),console.log(this.confirmedInfo),c.remote.getCurrentWindow().webContents.on("will-navigate",this.navigateHandler)},beforeDestroy:function(){c.remote.getCurrentWindow().webContents.removeListener("will-navigate",this.navigateHandler),this.paymentPoll&&Object(l.clearInterval)(this.paymentPoll),this.expireTimeout&&Object(l.clearTimeout)(this.expireTimeout)},methods:{reset:function(){this.$store.dispatch("setBuyServiceResult",!1)},serialize:function(e){return"?"+Object.keys(e).reduce((function(a,n){return a.push(n+"="+encodeURIComponent(e[n])),a}),[]).join("&")},navigateHandler:function(e,n){if(console.log("will-navigate"),n.includes("checkout.stripe.com")){var t=c.remote.getCurrentWindow();if(t.webContents.stop(),e.preventDefault(),t.webContents.stop(),this.checkoutLink===n)return void console.log("same checkout url...");this.checkoutLink=n,this.openSite(n)}},reloadUserData:function(e){var n=this;return this.$store.dispatch("getUserAndService").then((function(e){console.log("got data."),console.log(e[1]),n.raw_service_data=e[1],n.$store.dispatch("runTimeState",{selected_line:{}}),c.ipcRenderer.send("user-info-update",2)})).catch((function(e){return console.log("get user&service e-----\x3e",e),["found no valid service","service data suspended","no service purchased"].includes(e)?n.selectServiceDialogFormVisible=!0:n.$message({message:"刷新服务信息失败，请稍后重试...",type:"error"})}))},waitForPayment:function(e,n){var t=this,title=this.$t("billing.wait_for_payment.title"),r=this.$t("billing.wait_for_payment.msg");this.paymentPoll&&Object(l.clearInterval)(this.paymentPoll),this.paymentPoll=Object(l.setInterval)((function(){t.checkPaymentStatus(n)}),1e4);var o=900;n.time_expire&&(o=1e3*n.time_expire-new Date),this.expireTimeout&&Object(l.clearTimeout)(this.expireTimeout),this.expireTimeout=Object(l.setTimeout)((function(){t.expired=!0,t.paymentPoll&&Object(l.clearInterval)(t.paymentPoll),t.$alert(t.$t("billing.wait_for_payment.timeout.msg"),t.$t("billing.wait_for_payment.timeout.title"),{confirmButtonText:t.$t("billing.wait_for_payment.confirm"),callback:function(e){console.log(e)}}).catch((function(e){console.log(e)}))}),1e3*o),e||(this.waitForPaymentConfirm=this.$confirm(r,title,{confirmButtonText:this.$t("billing.wait_for_payment.paid"),cancelButtonText:this.$t("billing.wait_for_payment.cancel"),type:"success",closeOnHashChange:!0}).then((function(){t.$message({type:"success",message:t.$t("billing.wait_for_payment.waiting")}),t.checkPaymentStatus(n)})).catch((function(){console.log("stop polling...."),t.paymentPoll&&Object(l.clearInterval)(t.paymentPoll)})))},checkPaymentStatus:function(e){var n=this;console.log("check: ".concat(e.channel,"/").concat(e.id)),this.$axios.get("".concat(e.channel,"/").concat(e.id)).then((function(e){console.log(e.data),["TRADE_FINISHED","complete"].includes(e.data)&&(Object(l.clearInterval)(n.paymentPoll),n.waitForPaymentConfirm&&d.MessageBox.close(),n.$message({type:"success",message:n.$t("billing.wait_for_payment.suc")}),Object(l.setTimeout)(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.reloadUserData();case 2:n.$router.push({path:"/dashboard/"});case 3:case"end":return e.stop()}}),e)}))),3e3))})).catch((function(e){console.log(e)}))},handleCharge:function(e){var n={}.hasOwnProperty,t=e.channel,r=e.credential[t],o="https://mapi.alipay.com/gateway.do";return n.call(r,"channel_url")&&(o=r.channel_url),n.call(r,"_input_charset")||n.call(r,"service")&&"create_direct_pay_by_user"===r.service&&(r._input_charset="utf-8"),o+"?"+function(data,e,t){void 0===t&&(t=!1);var i,output=[];for(i in data)n.call(data,i)&&"function"!=typeof data[i]&&("bfb_wap"===e&&"url"===i||"yeepay_wap"===e&&"mode"===i||"channel_url"!==i&&output.push(i+"="+(t?encodeURIComponent(data[i]):data[i])));return output.join("&")}(r,t,!0)},confirmPrice:function(){var e=this;this.confirming=!0;var n=this,t={plan_id:this.confirmedInfo.selected_plan_id,buy_length:this.confirmedInfo.buy_length,promocode:this.confirmedInfo.promo_code,dry_run:!1};console.log(t),this.$store.dispatch("confirmPrice",t).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("confirmPrice ret:",r),n.$message({type:"success",message:e.$t("billing.wait_for_payment.suc")}),t.next=4,e.reloadUserData();case 4:e.$router.push({path:"/dashboard/"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var r;console.log(t);var o="抱歉，服务器开小差了，请稍后再试..."+((null==t||null===(r=t.data)||void 0===r?void 0:r.message)||t);t.data&&"invalidPromo"===t.data.message&&(o=e.$t("billing.invalid_promo")),n.$message({type:"error",message:o})})).finally((function(){n.confirming=!1}))},pingppCheckout:function(e){this.confirming=!0,this.showCurrencyWarning=!1;var n=this;this.currency="rmb",console.log("c->",n.confirmedInfo);var t={amount:n.confirmedInfo.rmb_amount,auto_buy:n.confirmedInfo.selected_plan_id||n.confirmedInfo.plan_id,auto_buy_month:Number(n.confirmedInfo.buy_length),auto_buy_promo:n.confirmedInfo.promo_code,all_pre:n.confirmedInfo.all_pre||!1,channel:e};console.log("o->",t),this.$store.dispatch("pingppCheckout",t).then((function(t){"alipay_pc_direct"===e?n.openSite(n.handleCharge(t)):(console.log(t),n.confirmedInfo.qr_url=t.credential.alipay_qr);var r={channel:"pingxx",id:t.id};n.waitForPayment("alipay_qr"===e,r)})).catch((function(e){console.log(e),n.$message({type:"error",message:"抱歉，服务器开小差了，请稍后再试..."+(e.response||e)})})).finally((function(){n.confirming=!1}))},paypalCheckout:function(e){var n=this;console.log("paypalCheckout:",e),this.confirming=!0,this.showCurrencyWarning=!1;var t=this;this.currency="eur";var r={amount:t.need_to_pay_eur,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code,all_pre:t.confirmedInfo.all_pre||!1};this.showCurrencyWarning=!0,this.$store.dispatch("createPaypal",r).then((function(e){console.log(e),n.openSite(e.redirect);var r={channel:"paypal",id:e.orderID};t.waitForPayment(!1,r)})).catch((function(e){console.log(e),t.$message({type:"error",message:e.response||e})})).finally((function(){t.confirming=!1}))},stripeCheckout:function(e){var n=this;console.log("stripeCheckout:",e),this.confirming=!0,this.showCurrencyWarning=!1;var t=this;if(this.currency="eur","card"===e)return console.log("opening $checkout"),this.payWithCard();var r={amount:t.need_to_pay_eur,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code,all_pre:t.confirmedInfo.all_pre||!1};this.showCurrencyWarning=!0,this.$store.dispatch("createStripe"+e,r).then((function(r){console.log(e,":"),console.log(r);var o=r.source_id,l=r.qr_code_url,c=r.url;console.log(l,c),l?t.confirmedInfo.qr_url=l:n.openSite(c);var d={channel:"stripe_".concat(e).toLowerCase(),id:o};t.waitForPayment(l,d)})).catch((function(e){console.log(e),t.$message({type:"error",message:e.response||e})})).finally((function(){t.confirming=!1}))},payWithCard:function(){var e=this;this.confirming=!0;var n=this.loadStripeJS(),t=this,r={amount:t.need_to_pay_eur,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code,all_pre:t.confirmedInfo.all_pre||!1},o="https:"===window.location.protocol?"pk_live_Mxmo2bAcrcjrBSmUWdC0N9s4":"pk_test_2e7gWNfoz4BurjGiPujJd942",l=this.$store.dispatch("createStripeCheckoutSession",r);Promise.all([n,l]).then((function(n){var t=window.Stripe(o),r={channel:"stripe_card",id:n[1].data.id};e.waitForPayment(!1,r),t.redirectToCheckout({sessionId:n[1].data.id})})).catch((function(n){e.$alert(n.message).catch((function(){}))})).finally((function(){return e.confirming=!1}))},loadStripeJS:function(){return new Promise((function(e,n){if(window.Stripe)return console.log("Stripe is already loaded."),e();var t=document.createElement("script");t.src="https://js.stripe.com/v3/",t.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(t),t.addEventListener("load",e),t.addEventListener("error",(function(){return n(new Error("信用卡付款加载失败，请返回重试"))}))}))},yabandPay:function(e){e=e.toLowerCase(),console.log("Yaband:",e),this.confirming=!0,this.showCurrencyWarning=!1;var n=this;this.currency="eur";var t={eur:n.confirmedInfo.eur_amount,rmb:n.confirmedInfo.rmb_amount,auto_buy:n.confirmedInfo.selected_plan_id||n.confirmedInfo.plan_id,auto_buy_month:Number(n.confirmedInfo.buy_length),auto_buy_promo:n.confirmedInfo.promo_code,all_pre:n.confirmedInfo.all_pre||!1};this.showCurrencyWarning=!0,this.$store.dispatch("createYaband",{channel:e,opt:t}).then((function(t){console.log(e,":"),console.log(t);var r=t.url,o=t.trade_id;n.confirmedInfo.qr_url=r;var l={channel:"yaband",id:o};n.waitForPayment(r,l)})).catch((function(e){console.log(e),n.$message({type:"error",message:"抱歉，服务器开小差了，请稍后再试..."+(e.response||e)})})).finally((function(){n.confirming=!1}))}}},_=(t(1181),t(44)),component=Object(_.a)(h,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-row",{staticStyle:{"margin-top":"1rem"}},[t("el-button",{staticClass:"full-width",attrs:{type:"warning",loading:e.confirming},on:{click:e.reset}},[e._v(e._s(e.$t("back")))])],1),t("el-row",{staticClass:"result"},[t("hr"),e.confirmedInfo&&"down"==e.confirmedInfo.type?t("div",{staticClass:"downgrade-warning"},[t("center",[t("h1",[e._v(e._s(e.$t("payment.downgrade.warning.title"))),t("br"),t("span",{staticClass:"small label warning"},[e._v(e._s(e.$t("payment.downgrade.warning.content")))])])])],1):e._e(),e.confirmedInfo&&"down"!==e.confirmedInfo.type&&"pre"!==e.confirmedInfo.selected_plan_id?t("div",[e.confirmedInfo.qr_url?e._e():t("h4",[e._v(e._s(e.$t("billing."+("up"==e.confirmedInfo.type?"upgrade":"purchase")))),t("span",{staticClass:"underline round-margin"},[e._v(e._s(e.$t("buy_length."+(e.confirmedInfo.buy_length||e.service_to_buy.extra.buy_length))))]),t("span",{staticClass:"underline round-margin"},[e._v(e._s(e.$t("plan_names."+e.confirmedInfo.selected_plan_id)))]),t("br"),e._v(e._s(e.$t("billing.total"))),t("span",{staticClass:"underline round-margin"},[e._v("€"+e._s(e.confirmedInfo.eur_amount.toFixed(2)))])])]):e._e(),"pre"===e.confirmedInfo.plan_id?t("div",[t("h4",[e._v(e._s(e.$t("buy_premium_data.review_msg",{n:e.confirmedInfo.buy_length})))])]):e._e(),e.need_to_pay<=0?t("div",[t("br"),"down"!==e.confirmedInfo.type?t("h4",{staticClass:"subheader"},[e._v(e._s(e.$t("billing.sufficient_balance",{n:e.confirmedInfo.user_balance.toFixed(2)})))]):e._e(),t("br"),e.need_to_pay<=0?t("el-button",{staticClass:"full-width",attrs:{type:"primary",loading:e.confirming},on:{click:function(n){return e.confirmPrice(!1)}}},[e._v(e._s(e.$t("billing.confirm")))]):e._e()],1):e._e(),e.need_to_pay>0?t("div",[t("div",[t("br"),t("h4",[e._v(e._s(e.$tc("billing.due",e.confirmedInfo.user_balance)))]),t("center",[t("h1",{staticClass:"subheader"},[t("span",[e._v("€"+e._s(e.need_to_pay_eur.toFixed(2)))])]),e.confirmedInfo.qr_url?t("h1",[e.confirmedInfo.qr_url?t("qrcode",{attrs:{value:e.confirmedInfo.qr_url}}):e._e()],1):e._e()])],1),t("el-row",[t("h3",{staticClass:"price"}),e.user.billing&&e.user.billing.country?e._e():t("el-row",{staticClass:"billing-toggle"},[t("p",[e._v(e._s(e.$t("update_billing.sub.a")))]),t("el-button",{staticClass:"full-width",attrs:{type:"success"},on:{click:function(n){e.showBillingModal=!0}}},[e._v(e._s(e.$t("payment.billing.button")))]),t("BillingModal",{attrs:{showDelete:!1,modalVisible:e.showBillingModal},on:{"update:modalVisible":function(n){e.showBillingModal=n},"update:modal-visible":function(n){e.showBillingModal=n}}})],1),t("el-row",[t("el-row",[t("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:function(n){return e.stripeCheckout("card")}}},[e._v(e._s(e.$t("billing.card")))])],1),t("el-row",[e.alipayAllowed?t("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:function(n){return e.pingppCheckout("alipay_pc_direct")}}},[e._v(e._s(e.$t("billing.alipay_pc")))]):e._e()],1),t("el-row",[t("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:e.paypalCheckout}},[e._v(e._s(e.$t("billing.paypal")))])],1)],1)],1)],1):e._e(),t("div",{staticClass:"service-cate-warning"},["home"!=e.confirmedInfo.service_cate_to_buy||e.service_to_buy&&"off"!=e.service_to_buy.status?e._e():t("center",[t("p",{staticClass:"label warning round"},[e._v("您正在购买「回家服务」"),t("br"),e._v("此项服务为中国大陆以外用户设计"),t("br"),e._v("请确认没有购买错误哦")])]),"home"==e.confirmedInfo.service_cate_to_buy?t("center",[t("p",{staticClass:"label warning round"},[e._v("「回家服务」不支持以下国家使用："),t("br"),t("b",[e._v("菲律宾、柬埔寨")])])]):e._e(),"allplatform"==e.confirmedInfo.service_cate_to_buy?t("center",[4===e.confirmedInfo.user_req.plan_id?t("p",{staticClass:"small"},[e._v(e._s(e.$t("payment.warning.a"))),t("br"),e._v(e._s(e.$t("payment.warning.b.a"))),t("span",{staticClass:"label warning round round-margin"},[e._v("500GB")]),e._v(e._s(e.$t("payment.warning.b.b")))]):e._e(),t("p",{staticClass:"small"},[e._v(e._s(e.$t("payment.warning.c.a"))),t("br"),t("span",{staticClass:"label warning round round-margin"},[e._v(e._s(e.$t("payment.warning.c.b")))]),t("span",{staticClass:"label warning round"},[e._v(e._s(e.$t("payment.warning.c.c")))]),t("br"),e._v(e._s(e.$t("payment.warning.d.a"))),t("a",{staticClass:"warning round-margin underline",on:{click:function(n){return e.openSite("/terms-of-service")}}},[e._v(e._s(e.$t("payment.warning.d.b")))]),t("br"),e._v(e._s(e.$t("payment.warning.d.c")))])]):e._e()],1)])],1)}),[],!1,null,"b159fd04",null);n.default=component.exports;installComponents(component,{BillingModal:t(1172).default})},1092:function(e,n,t){"use strict";t(1068)},1093:function(e,n,t){var r=t(57)((function(i){return i[1]}));r.push([e.i,".serviceCateSelector[data-v-253fdd3f]{z-index:9999}",""]),e.exports=r},1138:function(e,n,t){var content=t(1182);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(58).default)("3df389e0",content,!0,{sourceMap:!1})},1172:function(e,n,t){"use strict";t.r(n);var r={name:"ServiceSelector",props:{modalVisible:{type:Boolean,default:!1},callback:{type:Function,default:function(){return function(){}}},showHead:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0}},watch:{modalVisible:function(e,n){console.log(e,n)}},beforeDestroy:function(){this.updateParentSwitchVal()},methods:{updateParentSwitchVal:function(){this.$emit("update:modalVisible",!1)},sendReturn:function(e){this.callback(e),this.updateParentSwitchVal()}}},o=(t(1092),t(44)),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-dialog",{staticClass:"serviceCateSelector",attrs:{title:e.$t("billing.modal.title"),visible:e.modalVisible,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"close-on-press-escape":!1,"show-close":!0},on:{close:e.updateParentSwitchVal}},[t("Billing",{attrs:{showDelete:e.showDelete,showHead:e.showHead}})],1)}),[],!1,null,"253fdd3f",null);n.default=component.exports;installComponents(component,{Billing:t(1059).default})},1181:function(e,n,t){"use strict";t(1138)},1182:function(e,n,t){var r=t(57)((function(i){return i[1]}));r.push([e.i,".checkout[data-v-b159fd04]{margin-bottom:1rem}.buy-service-container[data-v-b159fd04]{height:100vh;padding:.5rem .5rem 0;position:relative}.buy-service-container .round-margin[data-v-b159fd04]{margin:.3rem}.buy-service-container .round-margin .el-form-item[data-v-b159fd04],.buy-service-container .round-margin .el-form-item *[data-v-b159fd04],.buy-service-container .round-margin h1[data-v-b159fd04],.buy-service-container .round-margin h1 *[data-v-b159fd04],.buy-service-container .round-margin h2[data-v-b159fd04],.buy-service-container .round-margin h2 *[data-v-b159fd04],.buy-service-container .round-margin h3[data-v-b159fd04],.buy-service-container .round-margin h3 *[data-v-b159fd04],.buy-service-container .round-margin h4[data-v-b159fd04],.buy-service-container .round-margin h4 *[data-v-b159fd04],.buy-service-container .round-margin h5[data-v-b159fd04],.buy-service-container .round-margin h5 *[data-v-b159fd04],.buy-service-container .round-margin input[data-v-b159fd04],.buy-service-container .round-margin input *[data-v-b159fd04],.buy-service-container .round-margin p[data-v-b159fd04],.buy-service-container .round-margin p *[data-v-b159fd04]{color:#f4f7fc}.buy-service-container .round-margin .small-text[data-v-b159fd04]{font-size:1.2rem}.buy-service-container .round-margin .small-text .warning[data-v-b159fd04]{background:#f4f7fc}.buy-service-container .round-margin .discount[data-v-b159fd04]{margin-left:.5rem}.buy-service-container .round-margin .warning-div[data-v-b159fd04]{border:1px solid #d35400;padding:.5rem;margin-top:0;margin-bottom:1rem;border-radius:5px}.buy-service-container .round-margin .el-radio-group[data-v-b159fd04]{padding-top:.4rem}.buy-service-container .round-margin .dashboard-link[data-v-b159fd04],.buy-service-container .round-margin .switch-service[data-v-b159fd04]{position:fixed;bottom:.5rem;z-index:999}.buy-service-container .round-margin .dashboard-link[data-v-b159fd04]{right:.5rem}.buy-service-container .round-margin .switch-service[data-v-b159fd04]{left:.5rem}.buy-service-container .round-margin .checkout[data-v-b159fd04]{margin-bottom:1rem}.buy-service-container .round-margin .cal-fee[data-v-b159fd04]{margin-bottom:3rem}.buy-service-container .round-margin hr[data-v-b159fd04]{margin-top:1rem;margin-bottom:1rem}.buy-service-container .round-margin hr.short[data-v-b159fd04]{margin-left:5rem;margin-right:5rem}.buy-service-container .round-margin .el-radio[data-v-b159fd04]{margin-left:1rem;display:block;margin-bottom:.5rem}.buy-service-container .round-margin .price[data-v-b159fd04]{color:#34495e;padding:.2rem;font-size:1rem}.buy-service-container .round-margin .downgrade-warning span[data-v-b159fd04],.buy-service-container .round-margin .price span[data-v-b159fd04]{font-size:1rem}.buy-service-container .round-margin .service-cate-warning[data-v-b159fd04]{margin-top:1rem}.buy-service-container .round-margin .plan-container.selected .select-plan-button[data-v-b159fd04]{background:#67c23a;border-color:#67c23a}.buy-service-container .round-margin .plan-container.selected .desc[data-v-b159fd04]{padding:.2rem 1rem}.buy-service-container .round-margin .plan-container.selected .select-plan-button[data-v-b159fd04]{position:absolute;bottom:40px;left:0}.buy-service-container .round-margin .plan-container.selected .price[data-v-b159fd04]{color:#f4f7fc;margin:.5rem 0}.buy-service-container .round-margin .plan-container.selected .feature[data-v-b159fd04]{margin-top:0}.buy-service-container .round-margin .plan-container.selected .extra-feature[data-v-b159fd04]{margin-top:1rem}.buy-service-container .round-margin .plan-container.selected .extra-feature h4[data-v-b159fd04]{margin-bottom:1rem}.buy-service-container .round-margin .plan-container.selected .extra-feature h4 .el-col[data-v-b159fd04]{margin-bottom:.1rem}.buy-service-container .round-margin .el-carousel .el-carousel__container[data-v-b159fd04]{height:50vh}.buy-service-container .round-margin .el-carousel__item p[data-v-b159fd04]{color:#f4f7fc}.billing-div[data-v-b159fd04]{margin-top:2rem;margin-bottom:2rem}.billing-toggle[data-v-b159fd04]{margin-top:2rem;margin-bottom:5rem}.billing-toggle .el-button[data-v-b159fd04]{padding:1.2rem;font-size:1.2rem}",""]),e.exports=r}}]);