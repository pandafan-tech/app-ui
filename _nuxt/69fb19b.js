(window.webpackJsonp=window.webpackJsonp||[]).push([[1,8,9],{1128:function(e,n,t){var a=t(1134);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(2).default)("3d8352dc",a,!0,{sourceMap:!1})},1129:function(e,n,t){"use strict";t.r(n);t(62),t(39),t(27),t(40),t(74);var a=t(6),i=t(14),r=(t(23),t(9),t(206),t(18)),o=(t(63),t(75),t(207)),l=t(1132);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u={middleware:["load-rt-data","authenticated"],props:{showHead:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},saved:{type:Function,default:null}},data:function(){return{newbilling:{},euList:o,countryList:l,updating:!1,inputCompanyInfo:!1}},computed:{personalNameRequired:function(){return this.inputCompanyInfo?"":"*"},vatReverseCharge:function(){return!(!this.newbilling.company_vat||"Netherlands"===this.newbilling.country)},vatRate:function(){var e=0;return this.euList.includes(this.newbilling.country)&&(e=.21,this.vatReverseCharge&&(e=0)),e}},mounted:function(){document.addEventListener("keydown",this.escHandler,!1);for(var e=s({},this.$store.state.user.billing),n=0,t=Object.entries(e);n<t.length;n++){var a=Object(i.a)(t[n],2),r=a[0],o=a[1];e[r]=unescape(o.trim())}this.newbilling=e},beforeDestroy:function(){document.removeEventListener("keydown",this.escHandler)},methods:{updateBilling:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var t,a,i,r,o,l,c,u,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=0,a=["firstname","lastname","country","addr","city"];case 2:if(!(t<a.length)){n.next=11;break}if(i=a[t],e.newbilling[i]&&e.newbilling[i].trim()){n.next=8;break}if(null===(r=e.newbilling.company_name)||void 0===r||!r.trim()||!["firstname","lastname"].includes(i)){n.next=7;break}return n.abrupt("continue",8);case 7:return n.abrupt("return",e.$message({message:e.$t("update_billing.incomplete"),type:"warning"}));case 8:t++,n.next=2;break;case 11:if(e.countryList.includes(e.newbilling.country)){n.next=13;break}return n.abrupt("return",e.$message({message:"无法识别的国家名称，请重新选择。",type:"warning"}));case 13:return n.prev=13,e.updating=!0,n.next=17,e.$store.dispatch("updateBilling",s({},e.newbilling));case 17:o=n.sent,console.log("ret:",o),e.$notify({title:e.$t("update_billing.saved"),type:"success"}),e.updating=!1,e.saved&&e.saved(),n.next=29;break;case 24:n.prev=24,n.t0=n.catch(13),console.log("failed:",null===(l=n.t0.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.message),e.$notify({title:e.$t("update_billing.save_failed"),message:e.$t("billing.".concat(null===(u=n.t0.response)||void 0===u||null===(d=u.data)||void 0===d?void 0:d.message)),type:"error"}),e.updating=!1;case 29:case"end":return n.stop()}}),n,null,[[13,24]])})))()},delBilling:function(){var e=this;this.$confirm(this.$t("warning.confirm_delete"),this.$t("warning.title"),{confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("service_selector.cancel"),type:"warning"}).then((function(){e.updating=!0,e.$store.dispatch("updateBilling",{}).then((function(){e.$notify({title:e.$t("update_billing.deleted"),type:"success"}),e.newbilling={}})).catch((function(n){var t,a;e.$notify({title:e.$t("update_billing.delete_error"),message:e.$t("billing.".concat(null===(t=n.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)),type:"error"})})).finally((function(){e.updating=!1}))})).catch((function(){}))}}},d=(t(1133),t(51)),p=Object(d.a)(u,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.updating,expression:"updating"}],staticClass:"updatebilling-container"},[t("el-row",{attrs:{gutter:10}},[e.showHead?t("el-col",{attrs:{span:24}},[t("center",[t("h5",[t("i",{staticClass:"el-icon-question"}),t("span",[e._v(e._s(e.$t("update_billing.sub.a")))])])])],1):e._e(),t("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.newbilling},nativeOn:{submit:function(n){return n.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.firstname"))+e._s(e.personalNameRequired))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.firstname")},model:{value:e.newbilling.firstname,callback:function(n){e.$set(e.newbilling,"firstname",n)},expression:"newbilling.firstname"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.lastname"))+e._s(e.personalNameRequired))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.lastname")},model:{value:e.newbilling.lastname,callback:function(n){e.$set(e.newbilling,"lastname",n)},expression:"newbilling.lastname"}})],1),t("el-col",{attrs:{span:24}},[t("p",[e._v(e._s(e.$t("update_billing.form.addr")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.addr")},model:{value:e.newbilling.addr,callback:function(n){e.$set(e.newbilling,"addr",n)},expression:"newbilling.addr"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.city")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.city")},model:{value:e.newbilling.city,callback:function(n){e.$set(e.newbilling,"city",n)},expression:"newbilling.city"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.state")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.state")},model:{value:e.newbilling.state,callback:function(n){e.$set(e.newbilling,"state",n)},expression:"newbilling.state"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.zip")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.zip")},model:{value:e.newbilling.zip,callback:function(n){e.$set(e.newbilling,"zip",n)},expression:"newbilling.zip"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.country")))]),t("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:e.$t("update_billing.form.country")},model:{value:e.newbilling.country,callback:function(n){e.$set(e.newbilling,"country",n)},expression:"newbilling.country"}},e._l(e.countryList,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e.newbilling.company_name||e.inputCompanyInfo?t("div",[t("el-col",{attrs:{span:24}},[t("p",[e._v(e._s(e.$t("update_billing.form.company_name"))+"*")]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.company_name")},model:{value:e.newbilling.company_name,callback:function(n){e.$set(e.newbilling,"company_name",n)},expression:"newbilling.company_name"}})],1),t("el-col",{attrs:{span:24}},[t("p",[e._v(e._s(e.$t("update_billing.form.company_vat")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.company_vat")},model:{value:e.newbilling.company_vat,callback:function(n){e.$set(e.newbilling,"company_vat",n)},expression:"newbilling.company_vat"}})],1)],1):e._e()],1)],1),e.vatRate?t("div",[t("h4",{staticClass:"warning"},[e._v(e._s(e.$t("billing.eu_hint")))])]):e._e(),t("el-button",{staticClass:"full-width save-button",attrs:{type:"success",size:"small"},on:{click:function(n){return e.updateBilling()}}},[e._v(e._s(e.$t("update_billing.save")))]),t("br"),t("el-row",{attrs:{justify:"space-between",align:"middle"}},[t("el-col",{attrs:{span:12,align:"start"}},[e.inputCompanyInfo||e.newbilling.company_name?e._e():t("el-link",{staticClass:"success",attrs:{plain:"",type:"success"},on:{click:function(n){e.inputCompanyInfo=!0}}},[e._v(e._s(e.$t("billing.input_company_info")))])],1),e.showDelete?t("el-col",{attrs:{span:12,align:"end"}},[t("el-link",{staticClass:"warning",attrs:{type:"warning"},on:{click:function(n){return e.delBilling()}}},[e._v(e._s(e.$t("update_billing.del")))])],1):e._e()],1),t("el-row",{staticClass:"explain"},[t("h5",[e._v("- "+e._s(e.$t("update_billing.sub.a")))]),t("h5",[e._v("- "+e._s(e.$t("update_billing.sub.b")))]),t("h5",[e._v("- "+e._s(e.$t("update_billing.sub.d")))]),t("br"),t("h5",[e._v(e._s(e.$t("update_billing.sub.e")))])])],1)}),[],!1,null,null,null);n.default=p.exports},1130:function(e,n,t){var a=t(1142);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(2).default)("79959b40",a,!0,{sourceMap:!1})},1131:function(e,n,t){var a=t(1144);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(2).default)("f5b74d3a",a,!0,{sourceMap:!1})},1132:function(e){e.exports=JSON.parse('["Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Cook Islands","Costa Rica","Côte d\'Ivoire, Republic of","Croatia","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands (Islas Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern and Antarctic Lands","Gabon","Gambia, The","Georgia","Germany","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Republic of","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, Republic of","Madagascar","Malawi","Malaysia","Maldives","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Palau","Papua New Guinea","Paraguay","Peru","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","South Africa","South Georgia and South Sandwich Islands","Spain","Sri Lanka","Suriname","Swaziland","Sweden","Switzerland","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vietnam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Zambia"]')},1133:function(e,n,t){"use strict";t(1128)},1134:function(e,n,t){var a=t(1)(!1);a.push([e.i,".updatebilling-container{position:relative}.updatebilling-container p{margin-top:.5rem!important;font-weight:700!important}.updatebilling-container .el-input{padding-left:0!important;width:100%!important;margin-top:.1rem!important}.updatebilling-container .el-input input{text-align:left!important;border:1px solid #95a5a6;padding:.2rem!important;color:#4d4d4d;font-size:1rem!important}.updatebilling-container .el-input input:focus,.updatebilling-container .el-input input:hover{border-color:#1abc9c}.updatebilling-container .el-card{margin-bottom:.6rem;background:#34495e;border:none}.updatebilling-container .el-card .subtitle{color:#f4f7fc;font-weight:500}.updatebilling-container .el-card.set-item .el-icon-arrow-down{transform:rotate(0deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item .el-icon-arrow-down.open{transform:rotate(-180deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item a i{padding-top:.3rem}.updatebilling-container .el-card.set-item a h2{color:#bdc3c7;margin-bottom:.1rem}.updatebilling-container .el-card.set-item .el-radio:not(.is-checked) .el-radio__label{color:#bdc3c7}.updatebilling-container .el-card__body{padding:1rem}.updatebilling-container .save-button{margin-bottom:1rem;margin-top:1rem;padding:1rem .5rem;font-size:1.1rem}.updatebilling-container .dashboard-link{position:fixed;right:.5rem;bottom:.5rem}.updatebilling-container .explain{margin-top:1rem}.updatebilling-container .el-link--success .el-link--inner{color:var(--logo-green)!important}.updatebilling-container .el-link--warning .el-link--inner{color:var(--warning-yellow)!important}",""]),e.exports=a},1141:function(e,n,t){"use strict";t(1130)},1142:function(e,n,t){var a=t(1)(!1);a.push([e.i,".serviceCateSelector[data-v-f4caa9e8]{z-index:9999}",""]),e.exports=a},1143:function(e,n,t){"use strict";t(1131)},1144:function(e,n,t){var a=t(1)(!1);a.push([e.i,".serviceCateSelector .el-dialog__body{padding:15px}",""]),e.exports=a},1150:function(e,n,t){"use strict";t.r(n);var a={name:"ServiceSelector",props:{modalVisible:{type:Boolean,default:!1},callback:{type:Function,default:null},showHead:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0}},watch:{modalVisible:function(e,n){console.log(e,n)}},beforeDestroy:function(){this.updateParentSwitchVal()},methods:{updateParentSwitchVal:function(){this.callback&&this.callback(),this.$emit("update:modalVisible",!1)},sendReturn:function(e){this.callback(e),this.updateParentSwitchVal()}}},i=(t(1141),t(1143),t(51)),r=Object(i.a)(a,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-dialog",{staticClass:"serviceCateSelector",attrs:{title:e.$t("billing.modal.title"),visible:e.modalVisible,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"close-on-press-escape":!1,"show-close":!0},on:{close:e.updateParentSwitchVal}},[t("Billing",{attrs:{showDelete:e.showDelete,showHead:e.showHead,saved:e.updateParentSwitchVal}})],1)}),[],!1,null,"f4caa9e8",null);n.default=r.exports;installComponents(r,{Billing:t(1129).default})},1184:function(e,n,t){"use strict";t.r(n);t(62),t(39),t(27),t(205),t(74);var a=t(6),i=(t(316),t(4),t(102)),r=t.n(i),o=(t(23),t(9),t(40),t(63),t(75),t(18)),l=t(1123),c=t(19),s=t(52);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var d={components:{Billing:t(1129).default},middleware:["load-rt-data","authenticated"],data:function(){return{extend_info:{buy_length:"12"},showBillingModal:!1,showCurrencyWarning:!1,confirming:!1,currency:"rmb",showResult:!1,selectServiceDialogFormVisible:!1,raw_service_data:null,paymentPoll:null,expireTimeout:null,expired:!1,lastNavigation:null,checkoutLink:null,openSiteTimer:null,waitForPaymentConfirm:null}},computed:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({need_to_pay:function(){return Math.ceil(this.confirmedInfo.fee-this.confirmedInfo.user_balance)},need_to_pay_usd:function(){return this.confirmedInfo.usd_amount},need_to_pay_eur:function(){var e=this.confirmedInfo.fee-this.confirmedInfo.user_balance;return e>0&&e<1&&(e=1),e},alipayAllowed:function(){var e,n,t,a,i,r,o,l;return console.log("allowed payment methods:",null===(e=this.user)||void 0===e||null===(n=e.extra)||void 0===n?void 0:n.allowed_payment_methods,null===(t=this.user)||void 0===t||null===(a=t.extra)||void 0===a||null===(i=a.allowed_payment_methods)||void 0===i?void 0:i.includes("alipay")),null===(r=this.user)||void 0===r||null===(o=r.extra)||void 0===o||null===(l=o.allowed_payment_methods)||void 0===l?void 0:l.includes("alipay")}},Object(s.b)(["confirmedInfo","buyServiceResult"])),mounted:function(){console.log("payment.buy-service..."),console.log(this.confirmedInfo),c.remote.getCurrentWindow().webContents.on("will-navigate",this.navigateHandler)},beforeDestroy:function(){c.remote.getCurrentWindow().webContents.removeListener("will-navigate",this.navigateHandler),this.paymentPoll&&Object(l.clearInterval)(this.paymentPoll),this.expireTimeout&&Object(l.clearTimeout)(this.expireTimeout)},methods:{reset:function(){this.$store.dispatch("setBuyServiceResult",!1)},serialize:function(e){return"?"+Object.keys(e).reduce((function(n,t){return n.push(t+"="+encodeURIComponent(e[t])),n}),[]).join("&")},navigateHandler:function(e,n){if(console.log("will-navigate"),n.includes("checkout.stripe.com")){var t=c.remote.getCurrentWindow();if(t.webContents.stop(),e.preventDefault(),t.webContents.stop(),this.checkoutLink===n)return void console.log("same checkout url...");this.checkoutLink=n,this.openSite(n)}},waitForPayment:function(e,n){var t=this,a=this.$t("billing.wait_for_payment.title"),i=this.$t("billing.wait_for_payment.msg");this.paymentPoll&&Object(l.clearInterval)(this.paymentPoll),this.paymentPoll=Object(l.setInterval)((function(){t.checkPaymentStatus(n)}),1e4);var r=900;if(n.time_expire&&(r=1e3*n.time_expire-new Date),this.expireTimeout&&Object(l.clearTimeout)(this.expireTimeout),this.expireTimeout=Object(l.setTimeout)((function(){t.expired=!0,t.paymentPoll&&Object(l.clearInterval)(t.paymentPoll),t.$alert(t.$t("billing.wait_for_payment.timeout.msg"),t.$t("billing.wait_for_payment.timeout.title"),{confirmButtonText:t.$t("billing.wait_for_payment.confirm"),callback:function(e){console.log(e)}}).catch((function(e){console.log(e)}))}),1e3*r),!e){var o=this.$createElement,c=i,s=this;n.alternativeLink&&(c=o("p",null,[o("span",null,i),o("br"),o("b",null,this.$t("billing.alternativeLink.a")),o("a",{style:"color: teal",on:{click:function(){s.openSite(n.alternativeLink)}}},this.$t("billing.alternativeLink.b"))])),this.waitForPaymentConfirm=this.$confirm(c,a,{confirmButtonText:this.$t("billing.wait_for_payment.paid"),cancelButtonText:this.$t("billing.wait_for_payment.cancel"),type:"success",closeOnHashChange:!0}).then((function(){t.$message({type:"success",message:t.$t("billing.wait_for_payment.waiting")}),t.checkPaymentStatus(n)})).catch((function(){console.log("stop polling...."),t.paymentPoll&&Object(l.clearInterval)(t.paymentPoll)}))}},checkPaymentStatus:function(e){var n=this;console.log("check: ".concat(e.channel,"/").concat(e.id)),this.$axios.get("".concat(e.channel,"/").concat(e.id)).then((function(e){console.log(e.data),["TRADE_FINISHED","complete"].includes(e.data)&&(Object(l.clearInterval)(n.paymentPoll),n.waitForPaymentConfirm&&r.a.close(),n.$message({type:"success",message:n.$t("billing.wait_for_payment.suc")}),Object(l.setTimeout)(Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.reloadUserData();case 2:n.$router.push({path:"/dashboard/"});case 3:case"end":return e.stop()}}),e)}))),3e3))})).catch((function(e){console.log(e)}))},handleCharge:function(e){var n={}.hasOwnProperty,t=e.channel,a=e.credential[t],i="https://mapi.alipay.com/gateway.do";n.call(a,"channel_url")&&(i=a.channel_url),n.call(a,"_input_charset")||n.call(a,"service")&&"create_direct_pay_by_user"===a.service&&(a._input_charset="utf-8");var r=function(e,t,a){void 0===a&&(a=!1);var i,r=[];for(i in e)n.call(e,i)&&"function"!=typeof e[i]&&("bfb_wap"===t&&"url"===i||"yeepay_wap"===t&&"mode"===i||"channel_url"!==i&&r.push(i+"="+(a?encodeURIComponent(e[i]):e[i])));return r.join("&")}(a,t,!0);return i+"?"+r},confirmPrice:function(){var e=this;this.confirming=!0;var n=this,t={plan_id:this.confirmedInfo.selected_plan_id,buy_length:this.confirmedInfo.buy_length,promocode:this.confirmedInfo.promo_code,dry_run:!1};console.log(t),this.$store.dispatch("confirmPrice",t).then(function(){var t=Object(a.a)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("confirmPrice ret:",a),n.$message({type:"success",message:e.$t("billing.wait_for_payment.suc")}),t.next=4,e.reloadUserData();case 4:e.$router.push({path:"/dashboard/"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var a;console.log(t);var i="抱歉，服务器开小差了，请稍后再试..."+((null==t||null===(a=t.data)||void 0===a?void 0:a.message)||t);t.data&&"invalidPromo"===t.data.message&&(i=e.$t("billing.invalid_promo")),n.$message({type:"error",message:i})})).finally((function(){n.confirming=!1}))},pingppCheckout:function(e){this.confirming=!0,this.showCurrencyWarning=!1;var n=this;this.currency="rmb",console.log("c->",n.confirmedInfo);var t={amount:n.confirmedInfo.rmb_amount,auto_buy:n.confirmedInfo.selected_plan_id||n.confirmedInfo.plan_id,auto_buy_month:Number(n.confirmedInfo.buy_length),auto_buy_promo:n.confirmedInfo.promo_code,all_pre:n.confirmedInfo.all_pre||!1,channel:e};console.log("o->",t),this.$store.dispatch("pingppCheckout",t).then((function(t){"alipay_pc_direct"===e?n.openSite(n.handleCharge(t)):(console.log(t),n.confirmedInfo.qr_url=t.credential.alipay_qr);var a={channel:"pingxx",id:t.id};n.waitForPayment("alipay_qr"===e,a)})).catch((function(e){console.log(e),n.$message({type:"error",message:"抱歉，服务器开小差了，请稍后再试..."+(e.response||e)})})).finally((function(){n.confirming=!1}))},paymentwallCheckout:function(e){var n=this;console.log("paymentwallCheckout:",e),this.confirming=!0,this.showCurrencyWarning=!1;var t=this;this.currency="eur";var a={ps:"unionpay",amount:t.need_to_pay_eur,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code,all_pre:t.confirmedInfo.all_pre||!1};this.showCurrencyWarning=!0,this.$store.dispatch("createPaymentwall",a).then((function(e){console.log(e),n.openSite(e.directLink||e.redirect);var a={channel:"paymentwall",id:e.id,alternativeLink:e.redirect||null};t.waitForPayment(!1,a)})).catch((function(e){console.log(e),t.$message({type:"error",message:e.response||e})})).finally((function(){t.confirming=!1}))},paypalCheckout:function(e){var n=this;console.log("paypalCheckout:",e),this.confirming=!0,this.showCurrencyWarning=!1;var t=this;this.currency="eur";var a={amount:t.need_to_pay_eur,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code,all_pre:t.confirmedInfo.all_pre||!1};this.showCurrencyWarning=!0,this.$store.dispatch("createPaypal",a).then((function(e){console.log(e),n.openSite(e.redirect);var a={channel:"paypal",id:e.orderID};t.waitForPayment(!1,a)})).catch((function(e){console.log(e),t.$message({type:"error",message:e.response||e})})).finally((function(){t.confirming=!1}))},stripeCheckout:function(e){var n=this;console.log("stripeCheckout:",e),this.confirming=!0,this.showCurrencyWarning=!1;var t=this;if(this.currency="eur","card"===e)return console.log("opening $checkout"),this.payWithCard();var a={amount:t.need_to_pay_eur,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code,all_pre:t.confirmedInfo.all_pre||!1};this.showCurrencyWarning=!0,this.$store.dispatch("createStripe"+e,a).then((function(a){console.log(e,":"),console.log(a);var i=a.source_id,r=a.qr_code_url,o=a.url;console.log(r,o),r?t.confirmedInfo.qr_url=r:n.openSite(o);var l={channel:"stripe_".concat(e).toLowerCase(),id:i};t.waitForPayment(r,l)})).catch((function(e){console.log(e),t.$message({type:"error",message:e.response||e})})).finally((function(){t.confirming=!1}))},payWithCard:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var t,a,i,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.confirming=!0,a={amount:(t=e).need_to_pay_eur,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code,all_pre:t.confirmedInfo.all_pre||!1},n.prev=3,n.next=6,e.$store.dispatch("createStripeCheckoutSession",a);case 6:i=n.sent.data,r={channel:"stripe_card",id:i.id},e.waitForPayment(!1,r),e.openSite(i.url),e.confirming=!1,n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.$alert(n.t0.message).catch((function(){}));case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))()},yabandPay:function(e){e=e.toLowerCase(),console.log("Yaband:",e),this.confirming=!0,this.showCurrencyWarning=!1;var n=this;this.currency="eur";var t={eur:n.confirmedInfo.eur_amount,rmb:n.confirmedInfo.rmb_amount,auto_buy:n.confirmedInfo.selected_plan_id||n.confirmedInfo.plan_id,auto_buy_month:Number(n.confirmedInfo.buy_length),auto_buy_promo:n.confirmedInfo.promo_code,all_pre:n.confirmedInfo.all_pre||!1};this.showCurrencyWarning=!0,this.$store.dispatch("createYaband",{channel:e,opt:t}).then((function(t){console.log(e,":"),console.log(t);var a=t.url,i=t.trade_id;n.confirmedInfo.qr_url=a;var r={channel:"yaband",id:i};n.waitForPayment(a,r)})).catch((function(e){console.log(e),n.$message({type:"error",message:"抱歉，服务器开小差了，请稍后再试..."+(e.response||e)})})).finally((function(){n.confirming=!1}))}}},p=d,m=(t(1314),t(1316),t(51)),g=Object(m.a)(p,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-row",{staticStyle:{"margin-top":"1rem"}},[t("el-button",{staticClass:"full-width",attrs:{type:"warning",loading:e.confirming},on:{click:e.reset}},[e._v(e._s(e.$t("back")))])],1),t("el-row",{staticClass:"result"},[t("hr"),e.confirmedInfo&&"down"==e.confirmedInfo.type?t("div",{staticClass:"downgrade-warning"},[t("center",[t("h1",[e._v(e._s(e.$t("payment.downgrade.warning.title"))),t("br"),t("span",{staticClass:"small label warning"},[e._v(e._s(e.$t("payment.downgrade.warning.content")))])])])],1):e._e(),e.confirmedInfo&&"down"!==e.confirmedInfo.type&&"pre"!==e.confirmedInfo.selected_plan_id?t("div",[e.confirmedInfo.qr_url?e._e():t("h4",[e._v(e._s(e.$t("billing."+("up"==e.confirmedInfo.type?"upgrade":"purchase")))),t("span",{staticClass:"underline round-margin"},[e._v(e._s(e.$t("buy_length."+(e.confirmedInfo.buy_length||e.service_to_buy.extra.buy_length))))]),t("span",{staticClass:"underline round-margin"},[e._v(e._s(e.$t("plan_names."+e.confirmedInfo.selected_plan_id)))]),t("br"),e._v(e._s(e.$t("billing.total"))),t("span",{staticClass:"underline round-margin"},[e._v("€"+e._s(e.confirmedInfo.eur_amount.toFixed(2)))])])]):e._e(),"pre"===e.confirmedInfo.plan_id?t("div",[t("h4",[e._v(e._s(e.$t("buy_premium_data.review_msg",{n:e.confirmedInfo.buy_length})))])]):e._e(),e.need_to_pay<=0?t("div",[t("br"),"down"!==e.confirmedInfo.type?t("h4",{staticClass:"subheader"},[e._v(e._s(e.$t("billing.sufficient_balance",{n:e.confirmedInfo.user_balance.toFixed(2)})))]):e._e(),t("br"),e.need_to_pay<=0?t("el-button",{staticClass:"full-width",attrs:{type:"primary",loading:e.confirming},on:{click:function(n){return e.confirmPrice(!1)}}},[e._v(e._s(e.$t("billing.confirm")))]):e._e()],1):e._e(),e.need_to_pay>0?t("div",[t("div",[t("br"),t("h4",[e._v(e._s(e.$tc("billing.due",e.confirmedInfo.user_balance)))]),t("center",[t("h1",{staticClass:"subheader"},[t("span",[e._v("€"+e._s(e.need_to_pay_eur.toFixed(2)))])]),e.confirmedInfo.qr_url?t("h1",[e.confirmedInfo.qr_url?t("qrcode",{attrs:{value:e.confirmedInfo.qr_url}}):e._e()],1):e._e()])],1),t("el-row",[t("h3",{staticClass:"price"}),e.user.billing&&e.user.billing.country?e._e():t("el-row",{staticClass:"billing-toggle"},[t("p",[e._v(e._s(e.$t("update_billing.sub.a")))]),t("el-button",{staticClass:"full-width",attrs:{type:"success"},on:{click:function(n){e.showBillingModal=!0}}},[e._v(e._s(e.$t("payment.billing.button")))]),t("BillingModal",{attrs:{showDelete:!1,modalVisible:e.showBillingModal},on:{"update:modalVisible":function(n){e.showBillingModal=n},"update:modal-visible":function(n){e.showBillingModal=n}}})],1),t("el-row",[t("el-row",[t("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:function(n){return e.stripeCheckout("card")}}},[e._v(e._s(e.$t("billing.card")))])],1),t("el-row",[e.alipayAllowed?t("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:function(n){return e.pingppCheckout("alipay_pc_direct")}}},[e._v(e._s(e.$t("billing.alipay_pc")))]):e._e()],1),t("el-row",[t("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:e.paymentwallCheckout}},[e._v(e._s(e.$t("billing.paymentwall")))]),"zh"===e.$i18n.locale?t("div",{staticClass:"hints"},[t("a",{attrs:{target:"_blank"},on:{click:function(n){return e.openSite("/knowledges/115")}}},[t("i",{staticClass:"el-icon-link"}),e._v("第一次用银联云闪付？点此查看教程")])]):e._e()],1),t("el-row",[t("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:e.paypalCheckout}},[e._v(e._s(e.$t("billing.paypal")))]),"zh"===e.$i18n.locale?t("div",{staticClass:"hints"},[t("a",{attrs:{target:"_blank"},on:{click:function(n){return e.openSite("/knowledges/113")}}},[t("i",{staticClass:"el-icon-link"}),e._v("没有 PayPal 账号？没有问题，点此了解如何使用 PayPal 付款")])]):e._e()],1)],1)],1)],1):e._e(),t("div",{staticClass:"service-cate-warning"},["home"!=e.confirmedInfo.service_cate_to_buy||e.service_to_buy&&"off"!=e.service_to_buy.status?e._e():t("center",[t("p",{staticClass:"label warning round"},[e._v("您正在购买「回家服务」"),t("br"),e._v("此项服务为中国大陆以外用户设计"),t("br"),e._v("请确认没有购买错误哦")])]),"home"==e.confirmedInfo.service_cate_to_buy?t("center",[t("p",{staticClass:"label warning round"},[e._v("「回家服务」不支持以下国家使用："),t("br"),t("b",[e._v("菲律宾、柬埔寨")])])]):e._e(),"allplatform"==e.confirmedInfo.service_cate_to_buy?t("center",[4===e.confirmedInfo.user_req.plan_id?t("p",{staticClass:"small"},[e._v(e._s(e.$t("payment.warning.a"))),t("br"),e._v(e._s(e.$t("payment.warning.b.a"))),t("span",{staticClass:"label warning round round-margin"},[e._v("500GB")]),e._v(e._s(e.$t("payment.warning.b.b")))]):e._e(),t("p",{staticClass:"small"},[e._v(e._s(e.$t("payment.warning.c.a"))),t("br"),t("span",{staticClass:"label warning round round-margin"},[e._v(e._s(e.$t("payment.warning.c.b")))]),t("span",{staticClass:"label warning round"},[e._v(e._s(e.$t("payment.warning.c.c")))]),t("br"),e._v(e._s(e.$t("payment.warning.d.a"))),t("a",{staticClass:"warning round-margin underline",on:{click:function(n){return e.openSite("/terms-of-service")}}},[e._v(e._s(e.$t("payment.warning.d.b")))]),t("br"),e._v(e._s(e.$t("payment.warning.d.c")))])]):e._e()],1)])],1)}),[],!1,null,"77a5cba9",null);n.default=g.exports;installComponents(g,{BillingModal:t(1150).default})},1256:function(e,n,t){var a=t(1315);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(2).default)("024cf74e",a,!0,{sourceMap:!1})},1257:function(e,n,t){var a=t(1317);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(2).default)("00fbef6d",a,!0,{sourceMap:!1})},1314:function(e,n,t){"use strict";t(1256)},1315:function(e,n,t){var a=t(1)(!1);a.push([e.i,".checkout[data-v-77a5cba9]{margin-bottom:1rem}.buy-service-container[data-v-77a5cba9]{height:100vh;padding:.5rem .5rem 0;position:relative}.buy-service-container .round-margin[data-v-77a5cba9]{margin:.3rem}.buy-service-container .round-margin .el-form-item[data-v-77a5cba9],.buy-service-container .round-margin .el-form-item *[data-v-77a5cba9],.buy-service-container .round-margin h1[data-v-77a5cba9],.buy-service-container .round-margin h1 *[data-v-77a5cba9],.buy-service-container .round-margin h2[data-v-77a5cba9],.buy-service-container .round-margin h2 *[data-v-77a5cba9],.buy-service-container .round-margin h3[data-v-77a5cba9],.buy-service-container .round-margin h3 *[data-v-77a5cba9],.buy-service-container .round-margin h4[data-v-77a5cba9],.buy-service-container .round-margin h4 *[data-v-77a5cba9],.buy-service-container .round-margin h5[data-v-77a5cba9],.buy-service-container .round-margin h5 *[data-v-77a5cba9],.buy-service-container .round-margin input[data-v-77a5cba9],.buy-service-container .round-margin input *[data-v-77a5cba9],.buy-service-container .round-margin p[data-v-77a5cba9],.buy-service-container .round-margin p *[data-v-77a5cba9]{color:#f4f7fc}.buy-service-container .round-margin .small-text[data-v-77a5cba9]{font-size:1.2rem}.buy-service-container .round-margin .small-text .warning[data-v-77a5cba9]{background:#f4f7fc}.buy-service-container .round-margin .discount[data-v-77a5cba9]{margin-left:.5rem}.buy-service-container .round-margin .warning-div[data-v-77a5cba9]{border:1px solid #d35400;padding:.5rem;margin-top:0;margin-bottom:1rem;border-radius:5px}.buy-service-container .round-margin .el-radio-group[data-v-77a5cba9]{padding-top:.4rem}.buy-service-container .round-margin .dashboard-link[data-v-77a5cba9],.buy-service-container .round-margin .switch-service[data-v-77a5cba9]{position:fixed;bottom:.5rem;z-index:999}.buy-service-container .round-margin .dashboard-link[data-v-77a5cba9]{right:.5rem}.buy-service-container .round-margin .switch-service[data-v-77a5cba9]{left:.5rem}.buy-service-container .round-margin .checkout[data-v-77a5cba9]{margin-bottom:1rem}.buy-service-container .round-margin .cal-fee[data-v-77a5cba9]{margin-bottom:3rem}.buy-service-container .round-margin hr[data-v-77a5cba9]{margin-top:1rem;margin-bottom:1rem}.buy-service-container .round-margin hr.short[data-v-77a5cba9]{margin-left:5rem;margin-right:5rem}.buy-service-container .round-margin .el-radio[data-v-77a5cba9]{margin-left:1rem;display:block;margin-bottom:.5rem}.buy-service-container .round-margin .price[data-v-77a5cba9]{color:#34495e;padding:.2rem;font-size:1rem}.buy-service-container .round-margin .downgrade-warning span[data-v-77a5cba9],.buy-service-container .round-margin .price span[data-v-77a5cba9]{font-size:1rem}.buy-service-container .round-margin .service-cate-warning[data-v-77a5cba9]{margin-top:1rem}.buy-service-container .round-margin .plan-container.selected .select-plan-button[data-v-77a5cba9]{background:#67c23a;border-color:#67c23a}.buy-service-container .round-margin .plan-container.selected .desc[data-v-77a5cba9]{padding:.2rem 1rem}.buy-service-container .round-margin .plan-container.selected .select-plan-button[data-v-77a5cba9]{position:absolute;bottom:40px;left:0}.buy-service-container .round-margin .plan-container.selected .price[data-v-77a5cba9]{color:#f4f7fc;margin:.5rem 0}.buy-service-container .round-margin .plan-container.selected .feature[data-v-77a5cba9]{margin-top:0}.buy-service-container .round-margin .plan-container.selected .extra-feature[data-v-77a5cba9]{margin-top:1rem}.buy-service-container .round-margin .plan-container.selected .extra-feature h4[data-v-77a5cba9]{margin-bottom:1rem}.buy-service-container .round-margin .plan-container.selected .extra-feature h4 .el-col[data-v-77a5cba9]{margin-bottom:.1rem}.buy-service-container .round-margin .el-carousel .el-carousel__container[data-v-77a5cba9]{height:50vh}.buy-service-container .round-margin .el-carousel__item p[data-v-77a5cba9]{color:#f4f7fc}.billing-div[data-v-77a5cba9]{margin-top:2rem;margin-bottom:2rem}.billing-toggle[data-v-77a5cba9]{margin-top:2rem;margin-bottom:5rem}.billing-toggle .el-button[data-v-77a5cba9]{padding:1.2rem;font-size:1.2rem}",""]),e.exports=a},1316:function(e,n,t){"use strict";t(1257)},1317:function(e,n,t){var a=t(1)(!1);a.push([e.i,".hints[data-v-77a5cba9]{vertical-align:middle;text-align:center;margin-bottom:1rem;border-radius:1.625rem;transition:all .1s ease-out}.hints[data-v-77a5cba9]:hover{box-shadow:none}.hints a[data-v-77a5cba9]{display:block;padding:.2rem 0}",""]),e.exports=a}}]);