(window.webpackJsonp=window.webpackJsonp||[]).push([[1,9,10],{1129:function(m,v,i){var r=i(1135);r.__esModule&&(r=r.default),typeof r=="string"&&(r=[[m.i,r,""]]),r.locals&&(m.exports=r.locals);var p=i(2).default,j=p("78a5912f",r,!0,{sourceMap:!1})},1130:function(m,v,i){"use strict";i.r(v);var r=function(){var a=this,d=a.$createElement,l=a._self._c||d;return l("div",{directives:[{name:"loading",rawName:"v-loading",value:a.updating,expression:"updating"}],staticClass:"updatebilling-container"},[l("el-row",{attrs:{gutter:10}},[a.showHead?l("el-col",{attrs:{span:24}},[l("center",[l("h5",[l("i",{staticClass:"el-icon-question"}),l("span",[a._v(a._s(a.$t("update_billing.sub.a")))])])])],1):a._e(),l("el-form",{attrs:{"label-position":"right","label-width":"80px",model:a.newbilling},nativeOn:{submit:function(c){return c.preventDefault(),a.onSubmit.apply(null,arguments)}}},[l("el-col",{attrs:{span:12}},[l("p",[a._v(a._s(a.$t("update_billing.form.firstname"))+a._s(a.personalNameRequired))]),l("el-input",{attrs:{type:"text",placeholder:a.$t("update_billing.form.firstname")},model:{value:a.newbilling.firstname,callback:function(c){a.$set(a.newbilling,"firstname",c)},expression:"newbilling.firstname"}})],1),l("el-col",{attrs:{span:12}},[l("p",[a._v(a._s(a.$t("update_billing.form.lastname"))+a._s(a.personalNameRequired))]),l("el-input",{attrs:{type:"text",placeholder:a.$t("update_billing.form.lastname")},model:{value:a.newbilling.lastname,callback:function(c){a.$set(a.newbilling,"lastname",c)},expression:"newbilling.lastname"}})],1),l("el-col",{attrs:{span:24}},[l("p",[a._v(a._s(a.$t("update_billing.form.addr")))]),l("el-input",{attrs:{type:"text",placeholder:a.$t("update_billing.form.addr")},model:{value:a.newbilling.addr,callback:function(c){a.$set(a.newbilling,"addr",c)},expression:"newbilling.addr"}})],1),l("el-col",{attrs:{span:12}},[l("p",[a._v(a._s(a.$t("update_billing.form.city")))]),l("el-input",{attrs:{type:"text",placeholder:a.$t("update_billing.form.city")},model:{value:a.newbilling.city,callback:function(c){a.$set(a.newbilling,"city",c)},expression:"newbilling.city"}})],1),l("el-col",{attrs:{span:12}},[l("p",[a._v(a._s(a.$t("update_billing.form.state")))]),l("el-input",{attrs:{type:"text",placeholder:a.$t("update_billing.form.state")},model:{value:a.newbilling.state,callback:function(c){a.$set(a.newbilling,"state",c)},expression:"newbilling.state"}})],1),l("el-col",{attrs:{span:12}},[l("p",[a._v(a._s(a.$t("update_billing.form.zip")))]),l("el-input",{attrs:{type:"text",placeholder:a.$t("update_billing.form.zip")},model:{value:a.newbilling.zip,callback:function(c){a.$set(a.newbilling,"zip",c)},expression:"newbilling.zip"}})],1),l("el-col",{attrs:{span:12}},[l("p",[a._v(a._s(a.$t("update_billing.form.country")))]),l("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:a.$t("update_billing.form.country")},model:{value:a.newbilling.country,callback:function(c){a.$set(a.newbilling,"country",c)},expression:"newbilling.country"}},a._l(a.countryList,function(c){return l("el-option",{key:c,attrs:{label:c,value:c}})}),1)],1),a.newbilling.company_name||a.inputCompanyInfo?l("div",[l("el-col",{attrs:{span:24}},[l("p",[a._v(a._s(a.$t("update_billing.form.company_name"))+"*")]),l("el-input",{attrs:{type:"text",placeholder:a.$t("update_billing.form.company_name")},model:{value:a.newbilling.company_name,callback:function(c){a.$set(a.newbilling,"company_name",c)},expression:"newbilling.company_name"}})],1),l("el-col",{attrs:{span:24}},[l("p",[a._v(a._s(a.$t("update_billing.form.company_vat")))]),l("el-input",{attrs:{type:"text",placeholder:a.$t("update_billing.form.company_vat")},model:{value:a.newbilling.company_vat,callback:function(c){a.$set(a.newbilling,"company_vat",c)},expression:"newbilling.company_vat"}})],1)],1):a._e()],1)],1),a.vatRate?l("div",{staticClass:"eu-hint"},[l("h5",{staticClass:"warning"},[a._v(a._s(a.$t("billing.eu_hint")))])]):a._e(),l("el-button",{staticClass:"full-width save-button",attrs:{type:"success",size:"small"},on:{click:function(c){return a.updateBilling()}}},[a._v(a._s(a.$t("update_billing.save")))]),l("br"),l("el-row",{attrs:{justify:"space-between",align:"middle"}},[l("el-col",{attrs:{span:12,align:"start"}},[a.inputCompanyInfo||a.newbilling.company_name?a._e():l("el-link",{staticClass:"success",attrs:{plain:"",type:"success"},on:{click:function(c){a.inputCompanyInfo=!0}}},[a._v(a._s(a.$t("billing.input_company_info")))])],1),a.showDelete?l("el-col",{attrs:{span:12,align:"end"}},[l("el-link",{staticClass:"warning",attrs:{type:"warning"},on:{click:function(c){return a.delBilling()}}},[a._v(a._s(a.$t("update_billing.del")))])],1):a._e()],1),l("el-row",{staticClass:"explain"},[l("h5",[a._v("- "+a._s(a.$t("update_billing.sub.a")))]),l("h5",[a._v("- "+a._s(a.$t("update_billing.sub.b")))]),l("h5",[a._v("- "+a._s(a.$t("update_billing.sub.d")))]),l("br"),l("h5",[a._v(a._s(a.$t("update_billing.sub.e")))])])],1)},p=[],j=i(62),R=i(40),F=i(27),z=i(39),D=i(75),O=i(6),E=i(15),y=i(23),C=i(9),x=i(206),N=i(19),V=i(63),J=i(76),W=i(207),U=i(1133);function S(a,d){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);d&&(c=c.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),l.push.apply(l,c)}return l}function h(a){for(var d=1;d<arguments.length;d++){var l=arguments[d]!=null?arguments[d]:{};d%2?S(Object(l),!0).forEach(function(c){Object(N.a)(a,c,l[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):S(Object(l)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(l,c))})}return a}var P={middleware:["load-rt-data","authenticated"],props:{showHead:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},saved:{type:Function,default:null}},data:function(){return{newbilling:{firstname:"",lastname:"",addr:"",city:"",state:"",zip:"",country:"China",company_name:"",company_vat:""},euList:W,countryList:U,updating:!1,inputCompanyInfo:!1}},computed:{personalNameRequired:function(){return this.inputCompanyInfo?"":"*"},vatReverseCharge:function(){return!!(this.newbilling.company_vat&&this.newbilling.country!=="Netherlands")},vatRate:function(){var d=0;return this.euList.includes(this.newbilling.country)&&(d=.21,this.vatReverseCharge&&(d=0)),d}},mounted:function(){var d;if(document.addEventListener("keydown",this.escHandler,!1),(d=this.$store.state.user.billing)!==null&&d!==void 0&&d.country){console.log("Init billing address as user's billing.",this.user.billing);for(var l=h({},this.$store.state.user.billing),c=0,b=Object.entries(l);c<b.length;c++){var I=Object(E.a)(b[c],2),e=I[0],o=I[1];l[e]=unescape(o.trim())}this.newbilling=l,this.newbilling.country||(console.log("setting default country to China"),this.newbilling.country="China")}},beforeDestroy:function(){document.removeEventListener("keydown",this.escHandler)},methods:{updateBilling:function(){var d=this;return Object(O.a)(regeneratorRuntime.mark(function l(){var c,b,I,e,o,n,t,_,s,f;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:c=["firstname","lastname","country","addr","city"],b=0,I=c;case 2:if(!(b<I.length)){u.next=11;break}if(e=I[b],!(!d.newbilling[e]||!d.newbilling[e].trim())){u.next=8;break}if(!((o=d.newbilling.company_name)!==null&&o!==void 0&&o.trim()&&["firstname","lastname"].includes(e))){u.next=7;break}return u.abrupt("continue",8);case 7:return u.abrupt("return",d.$message({message:d.$t("update_billing.incomplete"),type:"warning"}));case 8:b++,u.next=2;break;case 11:if(d.countryList.includes(d.newbilling.country)){u.next=13;break}return u.abrupt("return",d.$message({message:"\u65E0\u6CD5\u8BC6\u522B\u7684\u56FD\u5BB6\u540D\u79F0\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002",type:"warning"}));case 13:return u.prev=13,d.updating=!0,u.next=17,d.$store.dispatch("updateBilling",h({},d.newbilling));case 17:n=u.sent,console.log("ret:",n),d.$notify({title:d.$t("update_billing.saved"),type:"success"}),d.updating=!1,d.saved&&d.saved(),u.next=29;break;case 24:u.prev=24,u.t0=u.catch(13),console.log("failed:",(t=u.t0.response)===null||t===void 0||(_=t.data)===null||_===void 0?void 0:_.message),d.$notify({title:d.$t("update_billing.save_failed"),message:d.$t("billing.".concat((s=u.t0.response)===null||s===void 0||(f=s.data)===null||f===void 0?void 0:f.message)),type:"error"}),d.updating=!1;case 29:case"end":return u.stop()}},l,null,[[13,24]])}))()},delBilling:function(){var d=this;this.$confirm(this.$t("warning.confirm_delete"),this.$t("warning.title"),{confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("service_selector.cancel"),type:"warning"}).then(function(){d.updating=!0,d.$store.dispatch("updateBilling",{}).then(function(){d.$notify({title:d.$t("update_billing.deleted"),type:"success"}),d.newbilling={}}).catch(function(l){var c,b;d.$notify({title:d.$t("update_billing.delete_error"),message:d.$t("billing.".concat((c=l.response)===null||c===void 0||(b=c.data)===null||b===void 0?void 0:b.message)),type:"error"})}).finally(function(){d.updating=!1})}).catch(function(){})}}},L=P,K=i(1134),M=i(51),T=Object(M.a)(L,r,p,!1,null,null,null),G=v.default=T.exports},1131:function(m,v,i){var r=i(1143);r.__esModule&&(r=r.default),typeof r=="string"&&(r=[[m.i,r,""]]),r.locals&&(m.exports=r.locals);var p=i(2).default,j=p("c5990654",r,!0,{sourceMap:!1})},1132:function(m,v,i){var r=i(1145);r.__esModule&&(r=r.default),typeof r=="string"&&(r=[[m.i,r,""]]),r.locals&&(m.exports=r.locals);var p=i(2).default,j=p("7ab33336",r,!0,{sourceMap:!1})},1133:function(m){m.exports=JSON.parse(`["Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Cook Islands","Costa Rica","C\xF4te d'Ivoire, Republic of","Croatia","Cura\xE7ao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands (Islas Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern and Antarctic Lands","Gabon","Gambia, The","Georgia","Germany","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Republic of","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, Republic of","Madagascar","Malawi","Malaysia","Maldives","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Palau","Papua New Guinea","Paraguay","Peru","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","R\xE9union","Romania","Russian Federation","Rwanda","Saint Barth\xE9lemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","South Africa","South Georgia and South Sandwich Islands","Spain","Sri Lanka","Suriname","Swaziland","Sweden","Switzerland","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vietnam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Zambia"]`)},1134:function(m,v,i){"use strict";var r=i(1129),p=i.n(r)},1135:function(m,v,i){var r=i(1),p=r(!1);p.push([m.i,".updatebilling-container{position:relative}.updatebilling-container p{margin-top:.5rem!important;font-weight:700!important}.updatebilling-container .el-input{padding-left:0!important;width:100%!important;margin-top:.1rem!important}.updatebilling-container .el-input input{text-align:left!important;border:1px solid #95a5a6;padding:.2rem!important;color:#4d4d4d;font-size:1rem!important}.updatebilling-container .el-input input:focus,.updatebilling-container .el-input input:hover{border-color:#1abc9c}.updatebilling-container .el-card{margin-bottom:.6rem;background:#34495e;border:none}.updatebilling-container .el-card .subtitle{color:#f4f7fc;font-weight:500}.updatebilling-container .el-card.set-item .el-icon-arrow-down{transform:rotate(0deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item .el-icon-arrow-down.open{transform:rotate(-180deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item a i{padding-top:.3rem}.updatebilling-container .el-card.set-item a h2{color:#bdc3c7;margin-bottom:.1rem}.updatebilling-container .el-card.set-item .el-radio:not(.is-checked) .el-radio__label{color:#bdc3c7}.updatebilling-container .el-card__body{padding:1rem}.updatebilling-container .save-button{margin-bottom:1rem;margin-top:1rem;padding:1rem .5rem;font-size:1.1rem}.updatebilling-container .dashboard-link{position:fixed;right:.5rem;bottom:.5rem}.updatebilling-container .explain{margin-top:1rem}.updatebilling-container .el-link--success .el-link--inner{color:var(--logo-green)!important}.updatebilling-container .el-link--warning .el-link--inner{color:var(--warning-yellow)!important}.updatebilling-container .eu-hint{padding-top:1rem;text-align:right}",""]),m.exports=p},1142:function(m,v,i){"use strict";var r=i(1131),p=i.n(r)},1143:function(m,v,i){var r=i(1),p=r(!1);p.push([m.i,".billingModal[data-v-32c06148]{z-index:9999}",""]),m.exports=p},1144:function(m,v,i){"use strict";var r=i(1132),p=i.n(r)},1145:function(m,v,i){var r=i(1),p=r(!1);p.push([m.i,".billingModal .el-dialog__body{padding:15px;padding-top:0!important}.billingModal .el-dialog{padding-top:1.5rem!important}",""]),m.exports=p},1150:function(m,v,i){"use strict";i.r(v);var r=function(){var y=this,C=y.$createElement,x=y._self._c||C;return x("el-dialog",{staticClass:"serviceCateSelector billingModal",attrs:{title:y.$t("billing.modal.title"),visible:y.modalVisible,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"close-on-press-escape":!1,"show-close":!0},on:{close:y.updateParentSwitchVal}},[x("Billing",{attrs:{showDelete:y.showDelete,showHead:y.showHead,saved:y.updateParentSwitchVal}})],1)},p=[],j={name:"ServiceSelector",props:{modalVisible:{type:Boolean,default:!1},callback:{type:Function,default:null},showHead:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0}},watch:{modalVisible:function(C,x){console.log(C,x)}},beforeDestroy:function(){this.updateParentSwitchVal()},methods:{updateParentSwitchVal:function(){this.callback&&this.callback(),this.$emit("update:modalVisible",!1)},sendReturn:function(C){this.callback(C),this.updateParentSwitchVal()}}},R=j,F=i(1142),z=i(1144),D=i(51),O=Object(D.a)(R,r,p,!1,null,"32c06148",null),E=v.default=O.exports;installComponents(O,{Billing:i(1130).default})},1184:function(m,v,i){"use strict";i.r(v);var r=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("el-row",{staticStyle:{"margin-top":"1rem"}},[n("el-button",{staticClass:"full-width",attrs:{type:"warning",loading:e.confirming},on:{click:e.reset}},[e._v(e._s(e.$t("back")))])],1),n("el-row",{staticClass:"result"},[n("hr"),e.confirmedInfo&&e.confirmedInfo.type=="down"?n("div",{staticClass:"downgrade-warning"},[n("center",[n("h1",[e._v(e._s(e.$t("payment.downgrade.warning.title"))),n("br"),n("span",{staticClass:"small label warning"},[e._v(e._s(e.$t("payment.downgrade.warning.content")))])])])],1):e._e(),e.confirmedInfo&&e.confirmedInfo.type!=="down"&&e.confirmedInfo.selected_plan_id!=="pre"?n("div",[e.confirmedInfo.qr_url?e._e():n("h4",[e._v(e._s(e.$t("billing."+(e.confirmedInfo.type=="up"?"upgrade":"purchase")))),n("span",{staticClass:"underline round-margin"},[e._v(e._s(e.$t("buy_length."+(e.confirmedInfo.buy_length||e.service_to_buy.extra.buy_length))))]),n("span",{staticClass:"underline round-margin"},[e._v(e._s(e.$t("plan_names."+e.confirmedInfo.selected_plan_id)))]),n("br"),e._v(e._s(e.$t("billing.total"))),n("span",{staticClass:"underline round-margin"},[e._v("\u20AC"+e._s(e.confirmedInfo.eur_amount.toFixed(2)))])])]):e._e(),e.confirmedInfo.plan_id==="pre"?n("div",[n("h4",[e._v(e._s(e.$t("buy_premium_data.review_msg",{n:e.confirmedInfo.buy_length})))])]):e._e(),e.need_to_pay<=0?n("div",[n("br"),e.confirmedInfo.type!=="down"?n("h4",{staticClass:"subheader"},[e._v(e._s(e.$t("billing.sufficient_balance",{n:e.confirmedInfo.user_balance.toFixed(2)})))]):e._e(),n("br"),e.need_to_pay<=0?n("el-button",{staticClass:"full-width",attrs:{type:"primary",loading:e.confirming},on:{click:function(t){return e.confirmPrice(!1)}}},[e._v(e._s(e.$t("billing.confirm")))]):e._e()],1):e._e(),e.need_to_pay>0?n("div",[n("div",[n("br"),n("h4",[e._v(e._s(e.$tc("billing.due",e.confirmedInfo.user_balance)))]),n("center",[n("h1",{staticClass:"subheader"},[n("span",[e._v("\u20AC"+e._s(e.need_to_pay_eur.toFixed(2)))])]),e.confirmedInfo.qr_url?n("h1",[e.confirmedInfo.qr_url?n("qrcode",{attrs:{value:e.confirmedInfo.qr_url}}):e._e()],1):e._e()])],1),n("el-row",[n("h3",{staticClass:"price"}),!e.user.billing||!e.user.billing.country?n("el-row",{staticClass:"billing-toggle"},[n("p",[e._v(e._s(e.$t("update_billing.sub.a")))]),n("el-button",{staticClass:"full-width",attrs:{type:"success"},on:{click:function(t){e.showBillingModal=!0}}},[e._v(e._s(e.$t("payment.billing.button")))]),n("BillingModal",{attrs:{showDelete:!1,modalVisible:e.showBillingModal},on:{"update:modalVisible":function(t){e.showBillingModal=t},"update:modal-visible":function(t){e.showBillingModal=t}}})],1):e._e(),n("el-row",[n("el-row",[n("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:function(t){return e.stripeCheckout("card")}}},[e._v(e._s(e.$t("billing.card")))])],1),n("el-row",[e.alipayAllowed?n("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:function(t){return e.pingppCheckout("alipay_pc_direct")}}},[e._v(e._s(e.$t("billing.alipay_pc")))]):e._e()],1),n("el-row",[n("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:e.paymentwallCheckout}},[e._v(e._s(e.$t("billing.paymentwall")))]),e.$i18n.locale==="zh"?n("div",{staticClass:"hints"},[n("a",{attrs:{target:"_blank"},on:{click:function(t){return e.openSite("/knowledges/115")}}},[n("i",{staticClass:"el-icon-link"}),e._v("\u7B2C\u4E00\u6B21\u7528\u94F6\u8054\u4E91\u95EA\u4ED8\uFF1F\u70B9\u6B64\u67E5\u770B\u6559\u7A0B")])]):e._e()],1),n("el-row",[n("el-button",{staticClass:"checkout full-width",attrs:{disabled:!e.user.billing||!e.user.billing.country,type:"primary",loading:e.confirming},on:{click:e.paypalCheckout}},[e._v(e._s(e.$t("billing.paypal")))]),e.$i18n.locale==="zh"?n("div",{staticClass:"hints"},[n("a",{attrs:{target:"_blank"},on:{click:function(t){return e.openSite("/knowledges/113")}}},[n("i",{staticClass:"el-icon-link"}),e._v("\u6CA1\u6709 PayPal \u8D26\u53F7\uFF1F\u6CA1\u6709\u95EE\u9898\uFF0C\u70B9\u6B64\u4E86\u89E3\u5982\u4F55\u4F7F\u7528 PayPal \u4ED8\u6B3E")])]):e._e()],1)],1)],1)],1):e._e(),n("div",{staticClass:"service-cate-warning"},[e.confirmedInfo.service_cate_to_buy=="home"&&(!e.service_to_buy||e.service_to_buy.status=="off")?n("center",[n("p",{staticClass:"label warning round"},[e._v("\u60A8\u6B63\u5728\u8D2D\u4E70\u300C\u56DE\u5BB6\u670D\u52A1\u300D"),n("br"),e._v("\u6B64\u9879\u670D\u52A1\u4E3A\u4E2D\u56FD\u5927\u9646\u4EE5\u5916\u7528\u6237\u8BBE\u8BA1"),n("br"),e._v("\u8BF7\u786E\u8BA4\u6CA1\u6709\u8D2D\u4E70\u9519\u8BEF\u54E6")])]):e._e(),e.confirmedInfo.service_cate_to_buy=="home"?n("center",[n("p",{staticClass:"label warning round"},[e._v("\u300C\u56DE\u5BB6\u670D\u52A1\u300D\u4E0D\u652F\u6301\u4EE5\u4E0B\u56FD\u5BB6\u4F7F\u7528\uFF1A"),n("br"),n("b",[e._v("\u83F2\u5F8B\u5BBE\u3001\u67EC\u57D4\u5BE8")])])]):e._e(),e.confirmedInfo.service_cate_to_buy=="allplatform"?n("center",[e.confirmedInfo.user_req.plan_id===4?n("p",{staticClass:"small"},[e._v(e._s(e.$t("payment.warning.a"))),n("br"),e._v(e._s(e.$t("payment.warning.b.a"))),n("span",{staticClass:"label warning round round-margin"},[e._v("500GB")]),e._v(e._s(e.$t("payment.warning.b.b")))]):e._e(),n("p",{staticClass:"small"},[e._v(e._s(e.$t("payment.warning.c.a"))),n("br"),n("span",{staticClass:"label warning round round-margin"},[e._v(e._s(e.$t("payment.warning.c.b")))]),n("span",{staticClass:"label warning round"},[e._v(e._s(e.$t("payment.warning.c.c")))]),n("br"),e._v(e._s(e.$t("payment.warning.d.a"))),n("a",{staticClass:"warning round-margin underline",on:{click:function(t){return e.openSite("/terms-of-service")}}},[e._v(e._s(e.$t("payment.warning.d.b")))]),n("br"),e._v(e._s(e.$t("payment.warning.d.c")))])]):e._e()],1)])],1)},p=[],j=i(62),R=i(40),F=i(27),z=i(205),D=i(75),O=i(6),E=i(317),y=i(4),C=i(103),x=i.n(C),N=i(23),V=i(9),J=i(39),W=i(63),U=i(76),S=i(19),h=i(1124),P=i(13),L=i(52),K=i(1130);function M(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable})),n.push.apply(n,t)}return n}function T(e){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?M(Object(n),!0).forEach(function(t){Object(S.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var G={components:{Billing:K.default},middleware:["load-rt-data","authenticated"],data:function(){return{extend_info:{buy_length:"12"},showBillingModal:!1,showCurrencyWarning:!1,confirming:!1,currency:"rmb",showResult:!1,selectServiceDialogFormVisible:!1,raw_service_data:null,paymentPoll:null,expireTimeout:null,expired:!1,lastNavigation:null,checkoutLink:null,openSiteTimer:null,waitForPaymentConfirm:null}},computed:T({need_to_pay:function(){return Math.ceil(this.confirmedInfo.fee-this.confirmedInfo.user_balance)},need_to_pay_usd:function(){return this.confirmedInfo.usd_amount},need_to_pay_eur:function(){var o=this.confirmedInfo.fee-this.confirmedInfo.user_balance;return o>0&&o<1&&(o=1),o},alipayAllowed:function(){var o,n,t,_,s,f,g,u;return console.log("allowed payment methods:",(o=this.user)===null||o===void 0||(n=o.extra)===null||n===void 0?void 0:n.allowed_payment_methods,(t=this.user)===null||t===void 0||(_=t.extra)===null||_===void 0||(s=_.allowed_payment_methods)===null||s===void 0?void 0:s.includes("alipay")),(f=this.user)===null||f===void 0||(g=f.extra)===null||g===void 0||(u=g.allowed_payment_methods)===null||u===void 0?void 0:u.includes("alipay")}},Object(L.b)(["confirmedInfo","buyServiceResult"])),mounted:function(){console.log("payment.buy-service..."),console.log(this.confirmedInfo);var o=P.remote.getCurrentWindow();o.webContents.on("will-navigate",this.navigateHandler)},beforeDestroy:function(){var o=P.remote.getCurrentWindow();o.webContents.removeListener("will-navigate",this.navigateHandler),this.paymentPoll&&Object(h.clearInterval)(this.paymentPoll),this.expireTimeout&&Object(h.clearTimeout)(this.expireTimeout)},methods:{reset:function(){this.$store.dispatch("setBuyServiceResult",!1)},serialize:function(o){return"?"+Object.keys(o).reduce(function(n,t){return n.push(t+"="+encodeURIComponent(o[t])),n},[]).join("&")},navigateHandler:function(o,n){if(console.log("will-navigate"),n.includes("checkout.stripe.com")){var t=P.remote.getCurrentWindow();if(t.webContents.stop(),o.preventDefault(),t.webContents.stop(),this.checkoutLink===n){console.log("same checkout url...");return}this.checkoutLink=n,this.openSite(n)}},waitForPayment:function(o,n){var t=this,_=this.$t("billing.wait_for_payment.title"),s=this.$t("billing.wait_for_payment.msg");this.paymentPoll&&Object(h.clearInterval)(this.paymentPoll),this.paymentPoll=Object(h.setInterval)(function(){t.checkPaymentStatus(n)},10*1e3);var f=15*60;if(n.time_expire&&(f=n.time_expire*1e3-new Date),this.expireTimeout&&Object(h.clearTimeout)(this.expireTimeout),this.expireTimeout=Object(h.setTimeout)(function(){t.expired=!0,t.paymentPoll&&Object(h.clearInterval)(t.paymentPoll),t.$alert(t.$t("billing.wait_for_payment.timeout.msg"),t.$t("billing.wait_for_payment.timeout.title"),{confirmButtonText:t.$t("billing.wait_for_payment.confirm"),callback:function(B){console.log(B)}}).catch(function(w){console.log(w)})},f*1e3),!o){var g=this.$createElement,u=s,k=this;n.alternativeLink&&(u=g("p",null,[g("span",null,s),g("br"),g("b",null,this.$t("billing.alternativeLink.a")),g("a",{style:"color: teal",on:{click:function(){k.openSite(n.alternativeLink)}}},this.$t("billing.alternativeLink.b"))])),this.waitForPaymentConfirm=this.$confirm(u,_,{confirmButtonText:this.$t("billing.wait_for_payment.paid"),cancelButtonText:this.$t("billing.wait_for_payment.cancel"),type:"success",closeOnHashChange:!0}).then(function(){t.$message({type:"success",message:t.$t("billing.wait_for_payment.waiting")}),t.checkPaymentStatus(n)}).catch(function(){console.log("stop polling...."),t.paymentPoll&&Object(h.clearInterval)(t.paymentPoll)})}},checkPaymentStatus:function(o){var n=this;console.log("check: ".concat(o.channel,"/").concat(o.id)),this.$axios.get("".concat(o.channel,"/").concat(o.id)).then(function(t){var _=["TRADE_FINISHED","complete"];console.log(t.data),_.includes(t.data)&&(Object(h.clearInterval)(n.paymentPoll),n.waitForPaymentConfirm&&x.a.close(),n.$message({type:"success",message:n.$t("billing.wait_for_payment.suc")}),Object(h.setTimeout)(Object(O.a)(regeneratorRuntime.mark(function s(){return regeneratorRuntime.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,n.reloadUserData();case 2:n.$router.push({path:"/dashboard/"});case 3:case"end":return g.stop()}},s)})),3e3))}).catch(function(t){console.log(t)})},handleCharge:function(o){var n="https://mapi.alipay.com/gateway.do",t={}.hasOwnProperty,_=function(w,B,A){typeof A=="undefined"&&(A=!1);var H=[],$;for($ in w)!t.call(w,$)||typeof w[$]=="function"||B==="bfb_wap"&&$==="url"||B==="yeepay_wap"&&$==="mode"||$!=="channel_url"&&H.push($+"="+(A?encodeURIComponent(w[$]):w[$]));return H.join("&")},s=o.channel,f=o.credential[s],g=n;t.call(f,"channel_url")&&(g=f.channel_url),t.call(f,"_input_charset")||t.call(f,"service")&&f.service==="create_direct_pay_by_user"&&(f._input_charset="utf-8");var u=_(f,s,!0);return g+"?"+u},confirmPrice:function(){var o=this;this.confirming=!0;var n=this,t={plan_id:this.confirmedInfo.selected_plan_id,buy_length:this.confirmedInfo.buy_length,promocode:this.confirmedInfo.promo_code,dry_run:!1};console.log(t),this.$store.dispatch("confirmPrice",t).then(function(){var _=Object(O.a)(regeneratorRuntime.mark(function s(f){return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return console.log("confirmPrice ret:",f),n.$message({type:"success",message:o.$t("billing.wait_for_payment.suc")}),u.next=4,o.reloadUserData();case 4:o.$router.push({path:"/dashboard/"});case 5:case"end":return u.stop()}},s)}));return function(s){return _.apply(this,arguments)}}()).catch(function(_){var s;console.log(_);var f="\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u5F00\u5C0F\u5DEE\u4E86\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5..."+((_==null||(s=_.data)===null||s===void 0?void 0:s.message)||_);_.data&&_.data.message==="invalidPromo"&&(f=o.$t("billing.invalid_promo")),n.$message({type:"error",message:f})}).finally(function(){n.confirming=!1})},pingppCheckout:function(o){this.confirming=!0,this.showCurrencyWarning=!1;var n=this;this.currency="rmb",console.log("c->",n.confirmedInfo);var t={amount:n.confirmedInfo.rmb_amount,auto_buy:n.confirmedInfo.selected_plan_id||n.confirmedInfo.plan_id,auto_buy_month:Number(n.confirmedInfo.buy_length),auto_buy_promo:n.confirmedInfo.promo_code,all_pre:n.confirmedInfo.all_pre||!1,channel:o};console.log("o->",t),this.$store.dispatch("pingppCheckout",t).then(function(_){o==="alipay_pc_direct"?n.openSite(n.handleCharge(_)):(console.log(_),n.confirmedInfo.qr_url=_.credential.alipay_qr);var s={channel:"pingxx",id:_.id};n.waitForPayment(o==="alipay_qr",s)}).catch(function(_){console.log(_),n.$message({type:"error",message:"\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u5F00\u5C0F\u5DEE\u4E86\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5..."+(_.response||_)})}).finally(function(){n.confirming=!1})},paymentwallCheckout:function(o){var n=this;console.log("paymentwallCheckout:",o),this.confirming=!0,this.showCurrencyWarning=!1;var t=this;this.currency="eur";var _={ps:"unionpay",amount:t.need_to_pay_eur,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code,all_pre:t.confirmedInfo.all_pre||!1};this.showCurrencyWarning=!0,this.$store.dispatch("createPaymentwall",_).then(function(s){console.log(s),n.openSite(s.directLink||s.redirect);var f={channel:"paymentwall",id:s.id,alternativeLink:s.redirect||null};t.waitForPayment(!1,f)}).catch(function(s){console.log(s),t.$message({type:"error",message:s.response||s})}).finally(function(){t.confirming=!1})},paypalCheckout:function(o){var n=this;console.log("paypalCheckout:",o),this.confirming=!0,this.showCurrencyWarning=!1;var t=this;this.currency="eur";var _={amount:t.need_to_pay_eur,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code,all_pre:t.confirmedInfo.all_pre||!1};this.showCurrencyWarning=!0,this.$store.dispatch("createPaypal",_).then(function(s){console.log(s),n.openSite(s.redirect);var f={channel:"paypal",id:s.orderID};t.waitForPayment(!1,f)}).catch(function(s){console.log(s),t.$message({type:"error",message:s.response||s})}).finally(function(){t.confirming=!1})},stripeCheckout:function(o){var n=this;console.log("stripeCheckout:",o),this.confirming=!0,this.showCurrencyWarning=!1;var t=this;if(this.currency="eur",o==="card")return console.log("opening $checkout"),this.payWithCard();var _={amount:t.need_to_pay_eur,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code,all_pre:t.confirmedInfo.all_pre||!1};this.showCurrencyWarning=!0,this.$store.dispatch("createStripe"+o,_).then(function(s){console.log(o,":"),console.log(s);var f=s.source_id,g=s.qr_code_url,u=s.url;console.log(g,u),g?t.confirmedInfo.qr_url=g:n.openSite(u);var k={channel:"stripe_".concat(o).toLowerCase(),id:f};t.waitForPayment(g,k)}).catch(function(s){console.log(s),t.$message({type:"error",message:s.response||s})}).finally(function(){t.confirming=!1})},payWithCard:function(){var o=this;return Object(O.a)(regeneratorRuntime.mark(function n(){var t,_,s,f;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o.confirming=!0,t=o,_={amount:t.need_to_pay_eur,auto_buy:t.confirmedInfo.selected_plan_id||t.confirmedInfo.plan_id,auto_buy_month:Number(t.confirmedInfo.buy_length),auto_buy_promo:t.confirmedInfo.promo_code,all_pre:t.confirmedInfo.all_pre||!1},u.prev=3,u.next=6,o.$store.dispatch("createStripeCheckoutSession",_);case 6:s=u.sent.data,f={channel:"stripe_card",id:s.id},o.waitForPayment(!1,f),o.openSite(s.url),o.confirming=!1,u.next=16;break;case 13:u.prev=13,u.t0=u.catch(3),o.$alert(u.t0.message).catch(function(){});case 16:case"end":return u.stop()}},n,null,[[3,13]])}))()},yabandPay:function(o){o=o.toLowerCase(),console.log("Yaband:",o),this.confirming=!0,this.showCurrencyWarning=!1;var n=this;this.currency="eur";var t={eur:n.confirmedInfo.eur_amount,rmb:n.confirmedInfo.rmb_amount,auto_buy:n.confirmedInfo.selected_plan_id||n.confirmedInfo.plan_id,auto_buy_month:Number(n.confirmedInfo.buy_length),auto_buy_promo:n.confirmedInfo.promo_code,all_pre:n.confirmedInfo.all_pre||!1};this.showCurrencyWarning=!0,this.$store.dispatch("createYaband",{channel:o,opt:t}).then(function(_){console.log(o,":"),console.log(_);var s=_.url,f=_.trade_id;n.confirmedInfo.qr_url=s;var g={channel:"yaband",id:f};n.waitForPayment(s,g)}).catch(function(_){console.log(_),n.$message({type:"error",message:"\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u5F00\u5C0F\u5DEE\u4E86\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5..."+(_.response||_)})}).finally(function(){n.confirming=!1})}}},a=G,d=i(1316),l=i(1318),c=i(51),b=Object(c.a)(a,r,p,!1,null,"77a5cba9",null),I=v.default=b.exports;installComponents(b,{BillingModal:i(1150).default})},1249:function(m,v,i){var r=i(1317);r.__esModule&&(r=r.default),typeof r=="string"&&(r=[[m.i,r,""]]),r.locals&&(m.exports=r.locals);var p=i(2).default,j=p("d0752a2a",r,!0,{sourceMap:!1})},1250:function(m,v,i){var r=i(1319);r.__esModule&&(r=r.default),typeof r=="string"&&(r=[[m.i,r,""]]),r.locals&&(m.exports=r.locals);var p=i(2).default,j=p("4b1a10ef",r,!0,{sourceMap:!1})},1316:function(m,v,i){"use strict";var r=i(1249),p=i.n(r)},1317:function(m,v,i){var r=i(1),p=r(!1);p.push([m.i,".checkout[data-v-77a5cba9]{margin-bottom:1rem}.buy-service-container[data-v-77a5cba9]{height:100vh;padding:.5rem .5rem 0;position:relative}.buy-service-container .round-margin[data-v-77a5cba9]{margin:.3rem}.buy-service-container .round-margin .el-form-item[data-v-77a5cba9],.buy-service-container .round-margin .el-form-item *[data-v-77a5cba9],.buy-service-container .round-margin h1[data-v-77a5cba9],.buy-service-container .round-margin h1 *[data-v-77a5cba9],.buy-service-container .round-margin h2[data-v-77a5cba9],.buy-service-container .round-margin h2 *[data-v-77a5cba9],.buy-service-container .round-margin h3[data-v-77a5cba9],.buy-service-container .round-margin h3 *[data-v-77a5cba9],.buy-service-container .round-margin h4[data-v-77a5cba9],.buy-service-container .round-margin h4 *[data-v-77a5cba9],.buy-service-container .round-margin h5[data-v-77a5cba9],.buy-service-container .round-margin h5 *[data-v-77a5cba9],.buy-service-container .round-margin input[data-v-77a5cba9],.buy-service-container .round-margin input *[data-v-77a5cba9],.buy-service-container .round-margin p[data-v-77a5cba9],.buy-service-container .round-margin p *[data-v-77a5cba9]{color:#f4f7fc}.buy-service-container .round-margin .small-text[data-v-77a5cba9]{font-size:1.2rem}.buy-service-container .round-margin .small-text .warning[data-v-77a5cba9]{background:#f4f7fc}.buy-service-container .round-margin .discount[data-v-77a5cba9]{margin-left:.5rem}.buy-service-container .round-margin .warning-div[data-v-77a5cba9]{border:1px solid #d35400;padding:.5rem;margin-top:0;margin-bottom:1rem;border-radius:5px}.buy-service-container .round-margin .el-radio-group[data-v-77a5cba9]{padding-top:.4rem}.buy-service-container .round-margin .dashboard-link[data-v-77a5cba9],.buy-service-container .round-margin .switch-service[data-v-77a5cba9]{position:fixed;bottom:.5rem;z-index:999}.buy-service-container .round-margin .dashboard-link[data-v-77a5cba9]{right:.5rem}.buy-service-container .round-margin .switch-service[data-v-77a5cba9]{left:.5rem}.buy-service-container .round-margin .checkout[data-v-77a5cba9]{margin-bottom:1rem}.buy-service-container .round-margin .cal-fee[data-v-77a5cba9]{margin-bottom:3rem}.buy-service-container .round-margin hr[data-v-77a5cba9]{margin-top:1rem;margin-bottom:1rem}.buy-service-container .round-margin hr.short[data-v-77a5cba9]{margin-left:5rem;margin-right:5rem}.buy-service-container .round-margin .el-radio[data-v-77a5cba9]{margin-left:1rem;display:block;margin-bottom:.5rem}.buy-service-container .round-margin .price[data-v-77a5cba9]{color:#34495e;padding:.2rem;font-size:1rem}.buy-service-container .round-margin .downgrade-warning span[data-v-77a5cba9],.buy-service-container .round-margin .price span[data-v-77a5cba9]{font-size:1rem}.buy-service-container .round-margin .service-cate-warning[data-v-77a5cba9]{margin-top:1rem}.buy-service-container .round-margin .plan-container.selected .select-plan-button[data-v-77a5cba9]{background:#67c23a;border-color:#67c23a}.buy-service-container .round-margin .plan-container.selected .desc[data-v-77a5cba9]{padding:.2rem 1rem}.buy-service-container .round-margin .plan-container.selected .select-plan-button[data-v-77a5cba9]{position:absolute;bottom:40px;left:0}.buy-service-container .round-margin .plan-container.selected .price[data-v-77a5cba9]{color:#f4f7fc;margin:.5rem 0}.buy-service-container .round-margin .plan-container.selected .feature[data-v-77a5cba9]{margin-top:0}.buy-service-container .round-margin .plan-container.selected .extra-feature[data-v-77a5cba9]{margin-top:1rem}.buy-service-container .round-margin .plan-container.selected .extra-feature h4[data-v-77a5cba9]{margin-bottom:1rem}.buy-service-container .round-margin .plan-container.selected .extra-feature h4 .el-col[data-v-77a5cba9]{margin-bottom:.1rem}.buy-service-container .round-margin .el-carousel .el-carousel__container[data-v-77a5cba9]{height:50vh}.buy-service-container .round-margin .el-carousel__item p[data-v-77a5cba9]{color:#f4f7fc}.billing-div[data-v-77a5cba9]{margin-top:2rem;margin-bottom:2rem}.billing-toggle[data-v-77a5cba9]{margin-top:2rem;margin-bottom:5rem}.billing-toggle .el-button[data-v-77a5cba9]{padding:1.2rem;font-size:1.2rem}",""]),m.exports=p},1318:function(m,v,i){"use strict";var r=i(1250),p=i.n(r)},1319:function(m,v,i){var r=i(1),p=r(!1);p.push([m.i,".hints[data-v-77a5cba9]{vertical-align:middle;text-align:center;margin-bottom:1rem;border-radius:1.625rem;transition:all .1s ease-out}.hints[data-v-77a5cba9]:hover{box-shadow:none}.hints a[data-v-77a5cba9]{display:block;padding:.2rem 0}",""]),m.exports=p}}]);