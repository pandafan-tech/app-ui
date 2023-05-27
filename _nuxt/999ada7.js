(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1142:function(o,p,i){var r=i(1148);r.__esModule&&(r=r.default),typeof r=="string"&&(r=[[o.i,r,""]]),r.locals&&(o.exports=r.locals);var d=i(2).default,w=d("78a5912f",r,!0,{sourceMap:!1})},1143:function(o,p,i){"use strict";i.r(p);var r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.updating,expression:"updating"}],staticClass:"updatebilling-container"},[n("el-row",{attrs:{gutter:10}},[e.showHead?n("el-col",{attrs:{span:24}},[n("center",[n("h5",[n("i",{staticClass:"el-icon-question"}),n("span",[e._v(e._s(e.$t("update_billing.sub.a")))])])])],1):e._e(),n("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.newbilling},nativeOn:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[n("el-col",{attrs:{span:12}},[n("p",[e._v(e._s(e.$t("update_billing.form.firstname"))+e._s(e.personalNameRequired))]),n("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.firstname")},model:{value:e.newbilling.firstname,callback:function(t){e.$set(e.newbilling,"firstname",t)},expression:"newbilling.firstname"}})],1),n("el-col",{attrs:{span:12}},[n("p",[e._v(e._s(e.$t("update_billing.form.lastname"))+e._s(e.personalNameRequired))]),n("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.lastname")},model:{value:e.newbilling.lastname,callback:function(t){e.$set(e.newbilling,"lastname",t)},expression:"newbilling.lastname"}})],1),n("el-col",{attrs:{span:24}},[n("p",[e._v(e._s(e.$t("update_billing.form.addr")))]),n("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.addr")},model:{value:e.newbilling.addr,callback:function(t){e.$set(e.newbilling,"addr",t)},expression:"newbilling.addr"}})],1),n("el-col",{attrs:{span:12}},[n("p",[e._v(e._s(e.$t("update_billing.form.city")))]),n("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.city")},model:{value:e.newbilling.city,callback:function(t){e.$set(e.newbilling,"city",t)},expression:"newbilling.city"}})],1),n("el-col",{attrs:{span:12}},[n("p",[e._v(e._s(e.$t("update_billing.form.state")))]),n("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.state")},model:{value:e.newbilling.state,callback:function(t){e.$set(e.newbilling,"state",t)},expression:"newbilling.state"}})],1),n("el-col",{attrs:{span:12}},[n("p",[e._v(e._s(e.$t("update_billing.form.zip")))]),n("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.zip")},model:{value:e.newbilling.zip,callback:function(t){e.$set(e.newbilling,"zip",t)},expression:"newbilling.zip"}})],1),n("el-col",{attrs:{span:12}},[n("p",[e._v(e._s(e.$t("update_billing.form.country")))]),n("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:e.$t("update_billing.form.country")},model:{value:e.newbilling.country,callback:function(t){e.$set(e.newbilling,"country",t)},expression:"newbilling.country"}},e._l(e.countryList,function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),e.newbilling.company_name||e.inputCompanyInfo?n("div",[n("el-col",{attrs:{span:24}},[n("p",[e._v(e._s(e.$t("update_billing.form.company_name"))+"*")]),n("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.company_name")},model:{value:e.newbilling.company_name,callback:function(t){e.$set(e.newbilling,"company_name",t)},expression:"newbilling.company_name"}})],1),n("el-col",{attrs:{span:24}},[n("p",[e._v(e._s(e.$t("update_billing.form.company_vat")))]),n("el-input",{attrs:{type:"text",placeholder:e.$t("update_billing.form.company_vat")},model:{value:e.newbilling.company_vat,callback:function(t){e.$set(e.newbilling,"company_vat",t)},expression:"newbilling.company_vat"}})],1)],1):e._e()],1)],1),e.vatRate?n("div",{staticClass:"eu-hint"},[n("h5",{staticClass:"warning"},[e._v(e._s(e.$t("billing.eu_hint")))])]):e._e(),n("el-button",{staticClass:"full-width save-button",attrs:{type:"success",size:"small"},on:{click:function(t){return e.updateBilling()}}},[e._v(e._s(e.$t("update_billing.save")))]),n("br"),n("el-row",{attrs:{justify:"space-between",align:"middle"}},[n("el-col",{attrs:{span:12,align:"start"}},[e.inputCompanyInfo||e.newbilling.company_name?e._e():n("el-link",{staticClass:"success",attrs:{plain:"",type:"success"},on:{click:function(t){e.inputCompanyInfo=!0}}},[e._v(e._s(e.$t("billing.input_company_info")))])],1),e.showDelete?n("el-col",{attrs:{span:12,align:"end"}},[n("el-link",{staticClass:"warning",attrs:{type:"warning"},on:{click:function(t){return e.delBilling()}}},[e._v(e._s(e.$t("update_billing.del")))])],1):e._e()],1),n("el-row",{staticClass:"explain"},[n("h5",[e._v("- "+e._s(e.$t("update_billing.sub.a")))]),n("h5",[e._v("- "+e._s(e.$t("update_billing.sub.b")))]),n("h5",[e._v("- "+e._s(e.$t("update_billing.sub.d")))]),n("br"),n("h5",[e._v(e._s(e.$t("update_billing.sub.e")))])])],1)},d=[],w=i(63),k=i(40),R=i(26),P=i(39),L=i(76),$=i(6),j=i(15),T=i(22),N=i(9),z=i(208),C=i(18),D=i(64),E=i(77),S=i(209),O=i(1146);function v(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,t)}return n}function y(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?v(Object(n),!0).forEach(function(t){Object(C.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var B={middleware:["load-rt-data","authenticated"],props:{showHead:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},saved:{type:Function,default:null}},data:function(){return{newbilling:{firstname:"",lastname:"",addr:"",city:"",state:"",zip:"",country:"China",company_name:"",company_vat:""},euList:S,countryList:O,updating:!1,inputCompanyInfo:!1}},computed:{personalNameRequired:function(){return this.inputCompanyInfo?"":"*"},vatReverseCharge:function(){return!!(this.newbilling.company_vat&&this.newbilling.country!=="Netherlands")},vatRate:function(){var a=0;return this.euList.includes(this.newbilling.country)&&(a=.21,this.vatReverseCharge&&(a=0)),a}},mounted:function(){var a;if(document.addEventListener("keydown",this.escHandler,!1),(a=this.$store.state.user.billing)!==null&&a!==void 0&&a.country){console.log("Init billing address as user's billing.",this.user.billing);for(var n=y({},this.$store.state.user.billing),t=0,s=Object.entries(n);t<s.length;t++){var u=Object(j.a)(s[t],2),c=u[0],_=u[1];n[c]=unescape(_.trim())}this.newbilling=n,this.newbilling.country||(console.log("setting default country to China"),this.newbilling.country="China")}},beforeDestroy:function(){document.removeEventListener("keydown",this.escHandler)},methods:{updateBilling:function(){var a=this;return Object($.a)(regeneratorRuntime.mark(function n(){var t,s,u,c,_,h,g,m,b,f;return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:t=["firstname","lastname","country","addr","city"],s=0,u=t;case 2:if(!(s<u.length)){l.next=11;break}if(c=u[s],!(!a.newbilling[c]||!a.newbilling[c].trim())){l.next=8;break}if(!((_=a.newbilling.company_name)!==null&&_!==void 0&&_.trim()&&["firstname","lastname"].includes(c))){l.next=7;break}return l.abrupt("continue",8);case 7:return l.abrupt("return",a.$message({message:a.$t("update_billing.incomplete"),type:"warning"}));case 8:s++,l.next=2;break;case 11:if(a.countryList.includes(a.newbilling.country)){l.next=13;break}return l.abrupt("return",a.$message({message:"\u65E0\u6CD5\u8BC6\u522B\u7684\u56FD\u5BB6\u540D\u79F0\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002",type:"warning"}));case 13:return l.prev=13,a.updating=!0,l.next=17,a.$store.dispatch("updateBilling",y({},a.newbilling));case 17:h=l.sent,console.log("ret:",h),a.$notify({title:a.$t("update_billing.saved"),type:"success"}),a.updating=!1,a.saved&&a.saved(),l.next=29;break;case 24:l.prev=24,l.t0=l.catch(13),console.log("failed:",(g=l.t0.response)===null||g===void 0||(m=g.data)===null||m===void 0?void 0:m.message),a.$notify({title:a.$t("update_billing.save_failed"),message:a.$t("billing.".concat((b=l.t0.response)===null||b===void 0||(f=b.data)===null||f===void 0?void 0:f.message)),type:"error"}),a.updating=!1;case 29:case"end":return l.stop()}},n,null,[[13,24]])}))()},delBilling:function(){var a=this;this.$confirm(this.$t("warning.confirm_delete"),this.$t("warning.title"),{confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("service_selector.cancel"),type:"warning"}).then(function(){a.updating=!0,a.$store.dispatch("updateBilling",{}).then(function(){a.$notify({title:a.$t("update_billing.deleted"),type:"success"}),a.newbilling={}}).catch(function(n){var t,s;a.$notify({title:a.$t("update_billing.delete_error"),message:a.$t("billing.".concat((t=n.response)===null||t===void 0||(s=t.data)===null||s===void 0?void 0:s.message)),type:"error"})}).finally(function(){a.updating=!1})}).catch(function(){})}}},I=B,G=i(1147),x=i(51),M=Object(x.a)(I,r,d,!1,null,null,null),A=p.default=M.exports},1146:function(o){o.exports=JSON.parse(`["Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belgium","Belize","Benin","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Cook Islands","Costa Rica","C\xF4te d'Ivoire, Republic of","Croatia","Cura\xE7ao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Falkland Islands (Islas Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern and Antarctic Lands","Gabon","Gambia, The","Georgia","Germany","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guatemala","Guernsey","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Republic of","Kuwait","Kyrgyzstan","Laos","Latvia","Lesotho","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, Republic of","Madagascar","Malawi","Malaysia","Maldives","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Niue","Norfolk Island","Northern Mariana Islands","Norway","Papua New Guinea","Paraguay","Peru","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","R\xE9union","Romania","Rwanda","Saint Barth\xE9lemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","South Africa","South Georgia and South Sandwich Islands","Spain","Suriname","Swaziland","Sweden","Switzerland","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Turkmenistan","Turks and Caicos Islands","Tuvalu","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vietnam","Virgin Islands, British","Wallis and Futuna","Western Sahara","Zambia"]`)},1147:function(o,p,i){"use strict";var r=i(1142),d=i.n(r)},1148:function(o,p,i){var r=i(1),d=r(!1);d.push([o.i,".updatebilling-container{position:relative}.updatebilling-container p{margin-top:.5rem!important;font-weight:700!important}.updatebilling-container .el-input{padding-left:0!important;width:100%!important;margin-top:.1rem!important}.updatebilling-container .el-input input{text-align:left!important;border:1px solid #95a5a6;padding:.2rem!important;color:#4d4d4d;font-size:1rem!important}.updatebilling-container .el-input input:focus,.updatebilling-container .el-input input:hover{border-color:#1abc9c}.updatebilling-container .el-card{margin-bottom:.6rem;background:#34495e;border:none}.updatebilling-container .el-card .subtitle{color:#f4f7fc;font-weight:500}.updatebilling-container .el-card.set-item .el-icon-arrow-down{transform:rotate(0deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item .el-icon-arrow-down.open{transform:rotate(-180deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item a i{padding-top:.3rem}.updatebilling-container .el-card.set-item a h2{color:#bdc3c7;margin-bottom:.1rem}.updatebilling-container .el-card.set-item .el-radio:not(.is-checked) .el-radio__label{color:#bdc3c7}.updatebilling-container .el-card__body{padding:1rem}.updatebilling-container .save-button{margin-bottom:1rem;margin-top:1rem;padding:1rem .5rem;font-size:1.1rem}.updatebilling-container .dashboard-link{position:fixed;right:.5rem;bottom:.5rem}.updatebilling-container .explain{margin-top:1rem}.updatebilling-container .el-link--success .el-link--inner{color:var(--logo-green)!important}.updatebilling-container .el-link--warning .el-link--inner{color:var(--warning-yellow)!important}.updatebilling-container .eu-hint{padding-top:1rem;text-align:right}",""]),o.exports=d}}]);
