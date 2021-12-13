(window.webpackJsonp=window.webpackJsonp||[]).push([[46,8],{1128:function(e,n,t){var a=t(1134);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(2).default)("3d8352dc",a,!0,{sourceMap:!1})},1129:function(e,n,t){"use strict";t.r(n);t(62),t(39),t(27),t(40),t(74);var a=t(6),i=t(14),l=(t(23),t(9),t(206),t(18)),r=(t(63),t(75),t(207)),o=t(1132);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u={middleware:["load-rt-data","authenticated"],props:{showHead:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},saved:{type:Function,default:null}},data:function(){return{newbilling:{},euList:r,countryList:o,updating:!1,inputCompanyInfo:!1}},computed:{personalNameRequired:function(){return this.inputCompanyInfo?"":"*"},vatReverseCharge:function(){return!(!this.newbilling.company_vat||"Netherlands"===this.newbilling.country)},vatRate:function(){var e=0;return this.euList.includes(this.newbilling.country)&&(e=.21,this.vatReverseCharge&&(e=0)),e}},mounted:function(){document.addEventListener("keydown",this.escHandler,!1);for(var e=c({},this.$store.state.user.billing),n=0,t=Object.entries(e);n<t.length;n++){var a=Object(i.a)(t[n],2),l=a[0],r=a[1];e[l]=unescape(r.trim())}this.newbilling=e,this.newbilling.country||(console.log("setting default country to China"),this.newbilling.country="China")},beforeDestroy:function(){document.removeEventListener("keydown",this.escHandler)},methods:{updateBilling:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var t,a,i,l,r,o,s,u,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=0,a=["firstname","lastname","country","addr","city"];case 2:if(!(t<a.length)){n.next=11;break}if(i=a[t],e.newbilling[i]&&e.newbilling[i].trim()){n.next=8;break}if(null===(l=e.newbilling.company_name)||void 0===l||!l.trim()||!["firstname","lastname"].includes(i)){n.next=7;break}return n.abrupt("continue",8);case 7:return n.abrupt("return",e.$message({message:e.$t("update_billing.incomplete"),type:"warning"}));case 8:t++,n.next=2;break;case 11:if(e.countryList.includes(e.newbilling.country)){n.next=13;break}return n.abrupt("return",e.$message({message:"无法识别的国家名称，请重新选择。",type:"warning"}));case 13:return n.prev=13,e.updating=!0,n.next=17,e.$store.dispatch("updateBilling",c({},e.newbilling));case 17:r=n.sent,console.log("ret:",r),e.$notify({title:e.$t("update_billing.saved"),type:"success"}),e.updating=!1,e.saved&&e.saved(),n.next=29;break;case 24:n.prev=24,n.t0=n.catch(13),console.log("failed:",null===(o=n.t0.response)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.message),e.$notify({title:e.$t("update_billing.save_failed"),message:e.$t("billing.".concat(null===(u=n.t0.response)||void 0===u||null===(d=u.data)||void 0===d?void 0:d.message)),type:"error"}),e.updating=!1;case 29:case"end":return n.stop()}}),n,null,[[13,24]])})))()},delBilling:function(){var e=this;this.$confirm(this.$t("warning.confirm_delete"),this.$t("warning.title"),{confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("service_selector.cancel"),type:"warning"}).then((function(){e.updating=!0,e.$store.dispatch("updateBilling",{}).then((function(){e.$notify({title:e.$t("update_billing.deleted"),type:"success"}),e.newbilling={}})).catch((function(n){var t,a;e.$notify({title:e.$t("update_billing.delete_error"),message:e.$t("billing.".concat(null===(t=n.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)),type:"error"})})).finally((function(){e.updating=!1}))})).catch((function(){}))}}},d=(t(1133),t(51)),p=Object(d.a)(u,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.updating,expression:"updating"}],staticClass:"updatebilling-container"},[t("el-row",{attrs:{gutter:10}},[e.showHead?t("el-col",{attrs:{span:24}},[t("center",[t("h5",[t("i",{staticClass:"el-icon-question"}),t("span",[e._v(e._s(e.$t("update_billing.sub.a")))])])])],1):e._e(),t("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.newbilling},nativeOn:{submit:function(n){return n.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.firstname"))+e._s(e.personalNameRequired))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.firstname")},model:{value:e.newbilling.firstname,callback:function(n){e.$set(e.newbilling,"firstname",n)},expression:"newbilling.firstname"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.lastname"))+e._s(e.personalNameRequired))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.lastname")},model:{value:e.newbilling.lastname,callback:function(n){e.$set(e.newbilling,"lastname",n)},expression:"newbilling.lastname"}})],1),t("el-col",{attrs:{span:24}},[t("p",[e._v(e._s(e.$t("update_billing.form.addr")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.addr")},model:{value:e.newbilling.addr,callback:function(n){e.$set(e.newbilling,"addr",n)},expression:"newbilling.addr"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.city")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.city")},model:{value:e.newbilling.city,callback:function(n){e.$set(e.newbilling,"city",n)},expression:"newbilling.city"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.state")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.state")},model:{value:e.newbilling.state,callback:function(n){e.$set(e.newbilling,"state",n)},expression:"newbilling.state"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.zip")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.zip")},model:{value:e.newbilling.zip,callback:function(n){e.$set(e.newbilling,"zip",n)},expression:"newbilling.zip"}})],1),t("el-col",{attrs:{span:12}},[t("p",[e._v(e._s(e.$t("update_billing.form.country")))]),t("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:e.$t("update_billing.form.country")},model:{value:e.newbilling.country,callback:function(n){e.$set(e.newbilling,"country",n)},expression:"newbilling.country"}},e._l(e.countryList,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e.newbilling.company_name||e.inputCompanyInfo?t("div",[t("el-col",{attrs:{span:24}},[t("p",[e._v(e._s(e.$t("update_billing.form.company_name"))+"*")]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.company_name")},model:{value:e.newbilling.company_name,callback:function(n){e.$set(e.newbilling,"company_name",n)},expression:"newbilling.company_name"}})],1),t("el-col",{attrs:{span:24}},[t("p",[e._v(e._s(e.$t("update_billing.form.company_vat")))]),t("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.company_vat")},model:{value:e.newbilling.company_vat,callback:function(n){e.$set(e.newbilling,"company_vat",n)},expression:"newbilling.company_vat"}})],1)],1):e._e()],1)],1),e.vatRate?t("div",[t("h4",{staticClass:"warning"},[e._v(e._s(e.$t("billing.eu_hint")))])]):e._e(),t("el-button",{staticClass:"full-width save-button",attrs:{type:"success",size:"small"},on:{click:function(n){return e.updateBilling()}}},[e._v(e._s(e.$t("update_billing.save")))]),t("br"),t("el-row",{attrs:{justify:"space-between",align:"middle"}},[t("el-col",{attrs:{span:12,align:"start"}},[e.inputCompanyInfo||e.newbilling.company_name?e._e():t("el-link",{staticClass:"success",attrs:{plain:"",type:"success"},on:{click:function(n){e.inputCompanyInfo=!0}}},[e._v(e._s(e.$t("billing.input_company_info")))])],1),e.showDelete?t("el-col",{attrs:{span:12,align:"end"}},[t("el-link",{staticClass:"warning",attrs:{type:"warning"},on:{click:function(n){return e.delBilling()}}},[e._v(e._s(e.$t("update_billing.del")))])],1):e._e()],1),t("el-row",{staticClass:"explain"},[t("h5",[e._v("- "+e._s(e.$t("update_billing.sub.a")))]),t("h5",[e._v("- "+e._s(e.$t("update_billing.sub.b")))]),t("h5",[e._v("- "+e._s(e.$t("update_billing.sub.d")))]),t("br"),t("h5",[e._v(e._s(e.$t("update_billing.sub.e")))])])],1)}),[],!1,null,null,null);n.default=p.exports},1132:function(e){e.exports=JSON.parse('["Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Cook Islands","Costa Rica","Côte d\'Ivoire, Republic of","Croatia","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands (Islas Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern and Antarctic Lands","Gabon","Gambia, The","Georgia","Germany","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Republic of","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, Republic of","Madagascar","Malawi","Malaysia","Maldives","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Palau","Papua New Guinea","Paraguay","Peru","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","South Africa","South Georgia and South Sandwich Islands","Spain","Sri Lanka","Suriname","Swaziland","Sweden","Switzerland","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vietnam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Zambia"]')},1133:function(e,n,t){"use strict";t(1128)},1134:function(e,n,t){var a=t(1)(!1);a.push([e.i,".updatebilling-container{position:relative}.updatebilling-container p{margin-top:.5rem!important;font-weight:700!important}.updatebilling-container .el-input{padding-left:0!important;width:100%!important;margin-top:.1rem!important}.updatebilling-container .el-input input{text-align:left!important;border:1px solid #95a5a6;padding:.2rem!important;color:#4d4d4d;font-size:1rem!important}.updatebilling-container .el-input input:focus,.updatebilling-container .el-input input:hover{border-color:#1abc9c}.updatebilling-container .el-card{margin-bottom:.6rem;background:#34495e;border:none}.updatebilling-container .el-card .subtitle{color:#f4f7fc;font-weight:500}.updatebilling-container .el-card.set-item .el-icon-arrow-down{transform:rotate(0deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item .el-icon-arrow-down.open{transform:rotate(-180deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item a i{padding-top:.3rem}.updatebilling-container .el-card.set-item a h2{color:#bdc3c7;margin-bottom:.1rem}.updatebilling-container .el-card.set-item .el-radio:not(.is-checked) .el-radio__label{color:#bdc3c7}.updatebilling-container .el-card__body{padding:1rem}.updatebilling-container .save-button{margin-bottom:1rem;margin-top:1rem;padding:1rem .5rem;font-size:1.1rem}.updatebilling-container .dashboard-link{position:fixed;right:.5rem;bottom:.5rem}.updatebilling-container .explain{margin-top:1rem}.updatebilling-container .el-link--success .el-link--inner{color:var(--logo-green)!important}.updatebilling-container .el-link--warning .el-link--inner{color:var(--warning-yellow)!important}",""]),e.exports=a},1286:function(e,n,t){var a=t(1449);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(2).default)("4927e7c7",a,!0,{sourceMap:!1})},1448:function(e,n,t){"use strict";t(1286)},1449:function(e,n,t){var a=t(1)(!1);a.push([e.i,".updatebilling-container{padding:1rem .5rem .5rem;position:relative}.updatebilling-container h1,.updatebilling-container h2,.updatebilling-container h3,.updatebilling-container h4,.updatebilling-container h5,.updatebilling-container p{color:#bdc3c7}.updatebilling-container .el-col{margin-top:10px}.updatebilling-container .el-card{margin-bottom:.6rem;margin-top:.6rem;background:#34495e;border:none}.updatebilling-container .el-card .subtitle{color:#f4f7fc;font-weight:500}.updatebilling-container .el-card.set-item .el-icon-arrow-down{transform:rotate(0deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item .el-icon-arrow-down.open{transform:rotate(-180deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item a i{padding-top:.3rem}.updatebilling-container .el-card.set-item a h2{color:#bdc3c7;margin-bottom:.1rem}.updatebilling-container .el-card.set-item .el-radio:not(.is-checked) .el-radio__label{color:#bdc3c7}.updatebilling-container .el-card__body{padding:1rem}.updatebilling-container .back-button{margin-bottom:1rem;margin-top:1rem}.updatebilling-container .dashboard-link{position:fixed;right:.5rem;bottom:.5rem}",""]),e.exports=a},1482:function(e,n,t){"use strict";t.r(n);var a={components:{Billing:t(1129).default},middleware:["load-rt-data","authenticated"],data:function(){return{newbilling:{}}},mounted:function(){document.addEventListener("keydown",this.escHandler,!1),this.newbilling=JSON.parse(JSON.stringify(this.$store.state.user.billing))},beforeDestroy:function(){document.removeEventListener("keydown",this.escHandler)},methods:{delBilling:function(){var e=this;this.$confirm(this.$t("warning.confirm_delete"),this.$t("warning.title"),{confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("service_selector.cancel"),type:"warning"}).then((function(){e.newbilling={},e.$store.dispatch("updateBilling",{}).then((function(){e.$notify({title:e.$t("update_billing.deleted"),type:"success"}),window.location.reload()})).catch((function(n){e.$notify({title:e.$t("update_billing.delete_error"),message:n,type:"error"})}))})).catch((function(){}))}}},i=(t(1448),t(51)),l=Object(i.a)(a,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"updatebilling-container"},[t("Billing",{attrs:{showHead:!1,showDelete:!1}}),t("br"),t("h5",[e._v("- "+e._s(e.$t("update_billing.sub.a")))]),t("h5",[e._v("- "+e._s(e.$t("update_billing.sub.b")))]),t("h5",[e._v("- "+e._s(e.$t("update_billing.sub.d")))]),t("br"),t("h5",[e._v(e._s(e.$t("update_billing.sub.e")))]),t("br"),t("el-link",{attrs:{type:"warning"},on:{click:function(n){return e.delBilling()}}},[e._v(e._s(e.$t("update_billing.del")))]),t("a",{staticClass:"dashboard-link smooth",on:{click:function(n){return e.$router.go(-1)}}},[e._v(e._s(e.$t("back")))])],1)}),[],!1,null,null,null);n.default=l.exports;installComponents(l,{Billing:t(1129).default})}}]);