(window.webpackJsonp=window.webpackJsonp||[]).push([[39,9,10],{1137:function(d,p,a){var s=a(1143);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[d.i,s,""]]),s.locals&&(d.exports=s.locals);var c=a(2).default,y=c("78a5912f",s,!0,{sourceMap:!1})},1138:function(d,p,a){"use strict";a.r(p);var s=function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.updating,expression:"updating"}],staticClass:"updatebilling-container"},[i("el-row",{attrs:{gutter:10}},[t.showHead?i("el-col",{attrs:{span:24}},[i("center",[i("h5",[i("i",{staticClass:"el-icon-question"}),i("span",[t._v(t._s(t.$t("update_billing.sub.a")))])])])],1):t._e(),i("el-form",{attrs:{"label-position":"right","label-width":"80px",model:t.newbilling},nativeOn:{submit:function(o){return o.preventDefault(),t.onSubmit.apply(null,arguments)}}},[i("el-col",{attrs:{span:12}},[i("p",[t._v(t._s(t.$t("update_billing.form.firstname"))+t._s(t.personalNameRequired))]),i("el-input",{attrs:{type:"text",placeholder:t.$t("update_billing.form.firstname")},model:{value:t.newbilling.firstname,callback:function(o){t.$set(t.newbilling,"firstname",o)},expression:"newbilling.firstname"}})],1),i("el-col",{attrs:{span:12}},[i("p",[t._v(t._s(t.$t("update_billing.form.lastname"))+t._s(t.personalNameRequired))]),i("el-input",{attrs:{type:"text",placeholder:t.$t("update_billing.form.lastname")},model:{value:t.newbilling.lastname,callback:function(o){t.$set(t.newbilling,"lastname",o)},expression:"newbilling.lastname"}})],1),i("el-col",{attrs:{span:24}},[i("p",[t._v(t._s(t.$t("update_billing.form.addr")))]),i("el-input",{attrs:{type:"text",placeholder:t.$t("update_billing.form.addr")},model:{value:t.newbilling.addr,callback:function(o){t.$set(t.newbilling,"addr",o)},expression:"newbilling.addr"}})],1),i("el-col",{attrs:{span:12}},[i("p",[t._v(t._s(t.$t("update_billing.form.city")))]),i("el-input",{attrs:{type:"text",placeholder:t.$t("update_billing.form.city")},model:{value:t.newbilling.city,callback:function(o){t.$set(t.newbilling,"city",o)},expression:"newbilling.city"}})],1),i("el-col",{attrs:{span:12}},[i("p",[t._v(t._s(t.$t("update_billing.form.state")))]),i("el-input",{attrs:{type:"text",placeholder:t.$t("update_billing.form.state")},model:{value:t.newbilling.state,callback:function(o){t.$set(t.newbilling,"state",o)},expression:"newbilling.state"}})],1),i("el-col",{attrs:{span:12}},[i("p",[t._v(t._s(t.$t("update_billing.form.zip")))]),i("el-input",{attrs:{type:"text",placeholder:t.$t("update_billing.form.zip")},model:{value:t.newbilling.zip,callback:function(o){t.$set(t.newbilling,"zip",o)},expression:"newbilling.zip"}})],1),i("el-col",{attrs:{span:12}},[i("p",[t._v(t._s(t.$t("update_billing.form.country")))]),i("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:t.$t("update_billing.form.country")},model:{value:t.newbilling.country,callback:function(o){t.$set(t.newbilling,"country",o)},expression:"newbilling.country"}},t._l(t.countryList,function(o){return i("el-option",{key:o,attrs:{label:o,value:o}})}),1)],1),t.newbilling.company_name||t.inputCompanyInfo?i("div",[i("el-col",{attrs:{span:24}},[i("p",[t._v(t._s(t.$t("update_billing.form.company_name"))+"*")]),i("el-input",{attrs:{type:"text",placeholder:t.$t("update_billing.form.company_name")},model:{value:t.newbilling.company_name,callback:function(o){t.$set(t.newbilling,"company_name",o)},expression:"newbilling.company_name"}})],1),i("el-col",{attrs:{span:24}},[i("p",[t._v(t._s(t.$t("update_billing.form.company_vat")))]),i("el-input",{attrs:{type:"text",placeholder:t.$t("update_billing.form.company_vat")},model:{value:t.newbilling.company_vat,callback:function(o){t.$set(t.newbilling,"company_vat",o)},expression:"newbilling.company_vat"}})],1)],1):t._e()],1)],1),t.vatRate?i("div",{staticClass:"eu-hint"},[i("h5",{staticClass:"warning"},[t._v(t._s(t.$t("billing.eu_hint")))])]):t._e(),i("el-button",{staticClass:"full-width save-button",attrs:{type:"success",size:"small"},on:{click:function(o){return t.updateBilling()}}},[t._v(t._s(t.$t("update_billing.save")))]),i("br"),i("el-row",{attrs:{justify:"space-between",align:"middle"}},[i("el-col",{attrs:{span:12,align:"start"}},[t.inputCompanyInfo||t.newbilling.company_name?t._e():i("el-link",{staticClass:"success",attrs:{plain:"",type:"success"},on:{click:function(o){t.inputCompanyInfo=!0}}},[t._v(t._s(t.$t("billing.input_company_info")))])],1),t.showDelete?i("el-col",{attrs:{span:12,align:"end"}},[i("el-link",{staticClass:"warning",attrs:{type:"warning"},on:{click:function(o){return t.delBilling()}}},[t._v(t._s(t.$t("update_billing.del")))])],1):t._e()],1),i("el-row",{staticClass:"explain"},[i("h5",[t._v("- "+t._s(t.$t("update_billing.sub.a")))]),i("h5",[t._v("- "+t._s(t.$t("update_billing.sub.b")))]),i("h5",[t._v("- "+t._s(t.$t("update_billing.sub.d")))]),i("br"),i("h5",[t._v(t._s(t.$t("update_billing.sub.e")))])])],1)},c=[],y=a(63),C=a(40),I=a(26),T=a(39),O=a(76),j=a(6),k=a(15),f=a(22),g=a(9),h=a(208),R=a(18),A=a(64),V=a(77),M=a(209),S=a(1141);function B(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(v){return Object.getOwnPropertyDescriptor(t,v).enumerable})),i.push.apply(i,o)}return i}function e(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?B(Object(i),!0).forEach(function(o){Object(R.a)(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}var l={middleware:["load-rt-data","authenticated"],props:{showHead:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},saved:{type:Function,default:null}},data:function(){return{newbilling:{firstname:"",lastname:"",addr:"",city:"",state:"",zip:"",country:"China",company_name:"",company_vat:""},euList:M,countryList:S,updating:!1,inputCompanyInfo:!1}},computed:{personalNameRequired:function(){return this.inputCompanyInfo?"":"*"},vatReverseCharge:function(){return!!(this.newbilling.company_vat&&this.newbilling.country!=="Netherlands")},vatRate:function(){var r=0;return this.euList.includes(this.newbilling.country)&&(r=.21,this.vatReverseCharge&&(r=0)),r}},mounted:function(){var r;if(document.addEventListener("keydown",this.escHandler,!1),(r=this.$store.state.user.billing)!==null&&r!==void 0&&r.country){console.log("Init billing address as user's billing.",this.user.billing);for(var i=e({},this.$store.state.user.billing),o=0,v=Object.entries(i);o<v.length;o++){var w=Object(k.a)(v[o],2),$=w[0],x=w[1];i[$]=unescape(x.trim())}this.newbilling=i,this.newbilling.country||(console.log("setting default country to China"),this.newbilling.country="China")}},beforeDestroy:function(){document.removeEventListener("keydown",this.escHandler)},methods:{updateBilling:function(){var r=this;return Object(j.a)(regeneratorRuntime.mark(function i(){var o,v,w,$,x,F,P,D,L,E;return regeneratorRuntime.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:o=["firstname","lastname","country","addr","city"],v=0,w=o;case 2:if(!(v<w.length)){m.next=11;break}if($=w[v],!(!r.newbilling[$]||!r.newbilling[$].trim())){m.next=8;break}if(!((x=r.newbilling.company_name)!==null&&x!==void 0&&x.trim()&&["firstname","lastname"].includes($))){m.next=7;break}return m.abrupt("continue",8);case 7:return m.abrupt("return",r.$message({message:r.$t("update_billing.incomplete"),type:"warning"}));case 8:v++,m.next=2;break;case 11:if(r.countryList.includes(r.newbilling.country)){m.next=13;break}return m.abrupt("return",r.$message({message:"\u65E0\u6CD5\u8BC6\u522B\u7684\u56FD\u5BB6\u540D\u79F0\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002",type:"warning"}));case 13:return m.prev=13,r.updating=!0,m.next=17,r.$store.dispatch("updateBilling",e({},r.newbilling));case 17:F=m.sent,console.log("ret:",F),r.$notify({title:r.$t("update_billing.saved"),type:"success"}),r.updating=!1,r.saved&&r.saved(),m.next=29;break;case 24:m.prev=24,m.t0=m.catch(13),console.log("failed:",(P=m.t0.response)===null||P===void 0||(D=P.data)===null||D===void 0?void 0:D.message),r.$notify({title:r.$t("update_billing.save_failed"),message:r.$t("billing.".concat((L=m.t0.response)===null||L===void 0||(E=L.data)===null||E===void 0?void 0:E.message)),type:"error"}),r.updating=!1;case 29:case"end":return m.stop()}},i,null,[[13,24]])}))()},delBilling:function(){var r=this;this.$confirm(this.$t("warning.confirm_delete"),this.$t("warning.title"),{confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("service_selector.cancel"),type:"warning"}).then(function(){r.updating=!0,r.$store.dispatch("updateBilling",{}).then(function(){r.$notify({title:r.$t("update_billing.deleted"),type:"success"}),r.newbilling={}}).catch(function(i){var o,v;r.$notify({title:r.$t("update_billing.delete_error"),message:r.$t("billing.".concat((o=i.response)===null||o===void 0||(v=o.data)===null||v===void 0?void 0:v.message)),type:"error"})}).finally(function(){r.updating=!1})}).catch(function(){})}}},n=l,_=a(1142),b=a(51),u=Object(b.a)(n,s,c,!1,null,null,null),z=p.default=u.exports},1139:function(d,p,a){var s=a(1151);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[d.i,s,""]]),s.locals&&(d.exports=s.locals);var c=a(2).default,y=c("c5990654",s,!0,{sourceMap:!1})},1140:function(d,p,a){var s=a(1153);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[d.i,s,""]]),s.locals&&(d.exports=s.locals);var c=a(2).default,y=c("7ab33336",s,!0,{sourceMap:!1})},1141:function(d){d.exports=JSON.parse(`["Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belgium","Belize","Benin","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Cook Islands","Costa Rica","C\xF4te d'Ivoire, Republic of","Croatia","Cura\xE7ao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Falkland Islands (Islas Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern and Antarctic Lands","Gabon","Gambia, The","Georgia","Germany","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guatemala","Guernsey","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Republic of","Kuwait","Kyrgyzstan","Laos","Latvia","Lesotho","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, Republic of","Madagascar","Malawi","Malaysia","Maldives","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Niue","Norfolk Island","Northern Mariana Islands","Norway","Papua New Guinea","Paraguay","Peru","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","R\xE9union","Romania","Rwanda","Saint Barth\xE9lemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","South Africa","South Georgia and South Sandwich Islands","Spain","Suriname","Swaziland","Sweden","Switzerland","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Turkmenistan","Turks and Caicos Islands","Tuvalu","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vietnam","Virgin Islands, British","Wallis and Futuna","Western Sahara","Zambia"]`)},1142:function(d,p,a){"use strict";var s=a(1137),c=a.n(s)},1143:function(d,p,a){var s=a(1),c=s(!1);c.push([d.i,".updatebilling-container{position:relative}.updatebilling-container p{margin-top:.5rem!important;font-weight:700!important}.updatebilling-container .el-input{padding-left:0!important;width:100%!important;margin-top:.1rem!important}.updatebilling-container .el-input input{text-align:left!important;border:1px solid #95a5a6;padding:.2rem!important;color:#4d4d4d;font-size:1rem!important}.updatebilling-container .el-input input:focus,.updatebilling-container .el-input input:hover{border-color:#1abc9c}.updatebilling-container .el-card{margin-bottom:.6rem;background:#34495e;border:none}.updatebilling-container .el-card .subtitle{color:#f4f7fc;font-weight:500}.updatebilling-container .el-card.set-item .el-icon-arrow-down{transform:rotate(0deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item .el-icon-arrow-down.open{transform:rotate(-180deg);transition:transform .15s linear}.updatebilling-container .el-card.set-item a i{padding-top:.3rem}.updatebilling-container .el-card.set-item a h2{color:#bdc3c7;margin-bottom:.1rem}.updatebilling-container .el-card.set-item .el-radio:not(.is-checked) .el-radio__label{color:#bdc3c7}.updatebilling-container .el-card__body{padding:1rem}.updatebilling-container .save-button{margin-bottom:1rem;margin-top:1rem;padding:1rem .5rem;font-size:1.1rem}.updatebilling-container .dashboard-link{position:fixed;right:.5rem;bottom:.5rem}.updatebilling-container .explain{margin-top:1rem}.updatebilling-container .el-link--success .el-link--inner{color:var(--logo-green)!important}.updatebilling-container .el-link--warning .el-link--inner{color:var(--warning-yellow)!important}.updatebilling-container .eu-hint{padding-top:1rem;text-align:right}",""]),d.exports=c},1150:function(d,p,a){"use strict";var s=a(1139),c=a.n(s)},1151:function(d,p,a){var s=a(1),c=s(!1);c.push([d.i,".billingModal[data-v-32c06148]{z-index:9999}",""]),d.exports=c},1152:function(d,p,a){"use strict";var s=a(1140),c=a.n(s)},1153:function(d,p,a){var s=a(1),c=s(!1);c.push([d.i,".billingModal .el-dialog__body{padding:15px;padding-top:0!important}.billingModal .el-dialog{padding-top:1.5rem!important}",""]),d.exports=c},1158:function(d,p,a){"use strict";a.r(p);var s=function(){var f=this,g=f.$createElement,h=f._self._c||g;return h("el-dialog",{staticClass:"serviceCateSelector billingModal",attrs:{title:f.$t("billing.modal.title"),visible:f.modalVisible,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"close-on-press-escape":!1,"show-close":!0},on:{close:f.updateParentSwitchVal}},[h("Billing",{attrs:{showDelete:f.showDelete,showHead:f.showHead,saved:f.updateParentSwitchVal}})],1)},c=[],y={name:"ServiceSelector",props:{modalVisible:{type:Boolean,default:!1},callback:{type:Function,default:null},showHead:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0}},watch:{modalVisible:function(g,h){console.log(g,h)}},beforeDestroy:function(){this.updateParentSwitchVal()},methods:{updateParentSwitchVal:function(){this.callback&&this.callback(),this.$emit("update:modalVisible",!1)},sendReturn:function(g){this.callback(g),this.updateParentSwitchVal()}}},C=y,I=a(1150),T=a(1152),O=a(51),j=Object(O.a)(C,s,c,!1,null,"32c06148",null),k=p.default=j.exports;installComponents(j,{Billing:a(1138).default})},1277:function(d,p,a){var s=a(1442);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[d.i,s,""]]),s.locals&&(d.exports=s.locals);var c=a(2).default,y=c("1b2e3e06",s,!0,{sourceMap:!1})},1441:function(d,p,a){"use strict";var s=a(1277),c=a.n(s)},1442:function(d,p,a){var s=a(1),c=s(!1);c.push([d.i,".menu-container{height:100vh;padding:2rem .5rem .5rem;position:relative}.menu-container .flag-icon{margin-right:.2rem}.menu-container .el-card{margin-bottom:1rem}.menu-container .app-info{background:#f4f7fc}.menu-container .account-info{background:#1abc9c;border-color:#1abc9c}.menu-container .account-info *{color:#f4f7fc}.menu-container .account-info hr{margin:1rem 0;border:0;height:1px;background:#f4f7fc}.menu-container .inlinebtn{border:1px solid #1abc9c;padding:.1rem .5rem .15rem;line-height:1.2rem;border-radius:4px}.menu-container .info-content,.menu-container .info-header{color:#34495e;margin-bottom:.5rem;line-height:1.2}.menu-container .info-header{color:#7f8c8d}.menu-container .info-header h3{font-weight:400}.menu-container .large-button{margin-top:.5rem;font-size:1.1rem}.menu-container .dashboard-link,.menu-container .debug-link,.menu-container .submitlog-link{position:fixed;right:.5rem;bottom:.5rem}.menu-container .debug-link,.menu-container .submitlog-link{left:.5rem}.menu-container .menu-link-container{margin-top:1rem}.menu-container .tutorial-link{font-size:1.4rem;text-decoration:none;text-align:center;padding-bottom:.15rem;display:block;width:100%;border-radius:4px;box-shadow:0 5px 12px 0 rgba(0,0,0,.15);background:#16a085}.menu-container .tutorial-link span{color:#f4f7fc}.menu-container .tutorial-link:hover{background:#1abc9c}.menu-container .menu-link{font-size:1.4rem;text-decoration:none;text-align:center;padding-bottom:.15rem;display:block;width:100%;border-radius:4px;box-shadow:0 5px 12px 0 rgba(0,0,0,.15)}.menu-container .menu-link.border .icon{padding-top:.35rem;padding-right:.5rem}.menu-container .menu-link.border.revert,.menu-container .menu-link.border:hover{background:#1abc9c;color:#fff}.menu-container .menu-link.border.revert:hover{background:#fff;color:#1abc9c}",""]),d.exports=c},1484:function(d,p,a){"use strict";a.r(p);var s=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("div",{staticClass:"menu-container"},[n("el-dialog",{attrs:{title:"\u60A8\u8981\u4F7F\u7528\u54EA\u9879\u670D\u52A1\uFF1F",visible:e.selectServiceDialogFormVisible,center:"",width:"90%","append-to-body":!0},on:{"update:visible":function(_){e.selectServiceDialogFormVisible=_}}},[n("el-radio-group",{attrs:{size:"medium"},model:{value:e.current_service_cate,callback:function(_){e.current_service_cate=_},expression:"current_service_cate"}},[n("el-radio",{attrs:{border:"",label:"allplatform"}},[e._v(e._s(e.$t("services.allplatform.name")))]),n("el-radio",{attrs:{border:"",label:"home"}},[e._v(e._s(e.$t("services.home.name")))])],1)],1),n("el-card",{staticClass:"account-info",attrs:{shadow:"always"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("h4",[n("span",[n("small",[e._v(e._s(e.$t("menu.id")))])]),n("span",[e._v("\xA0")]),n("span",{staticClass:"thin underline"},[e._v(e._s(e.user.id))])]),n("h4",[n("span",{staticClass:"thin underline"},[e._v(e._s(e.user.email))])]),e.current_service_cate?n("h4",[n("span",{staticClass:"underline pointer",on:{click:e.showServiceSwitcher}},[e._v(e._s(e.$t("services."+e.current_service_cate+".name")))]),n("span",[e._v("\xA0/")]),n("span",{staticClass:"larger"},[e._v(e._s(e.$t("plan_names."+e.current_plan.id)))])]):e._e()]),n("el-col",{attrs:{span:12}},[n("h4",[n("span",{staticClass:"right"},[n("a",{attrs:{loading:e.loading_user_data},on:{click:e.refreshData}},[n("i",{staticClass:"el-icon-refresh"}),e._v(`
`+e._s(e.$t("reload_data")))]),n("span",[n("br"),n("a",{on:{click:function(_){e.showBilling=!0}}},[n("i",{staticClass:"el-icon-edit-outline"}),e._v(`
`+e._s(e.$t("update_billing.header")))])]),Object.keys(e.service).length>1||e.current_service&&e.current_service.status!=="on"?n("span",[n("br"),n("a",{on:{click:function(_){e.selectServiceDialogFormVisible=!0}}},[n("i",{staticClass:"el-icon-sort"}),e._v(`
`+e._s(e.$t("switch_service")))])]):e._e()])])])],1),e.current_service_cate==="allplatform"&&e.user.web_login!==!1?n("div",[n("hr"),n("el-row",{staticClass:"info-header"},[n("h4",[n("span",{staticClass:"subheader"},[e._v(e._s(e.$t("menu.tutorial_for_phones")))])])]),n("el-row",{attrs:{gutter:10}},e._l(e.tutorial_links,function(_,b){return n("el-col",{key:_.path,attrs:{span:12,justify:"center",align:"center"}},[n("nuxt-link",{staticClass:"smooth tutorial-link",attrs:{to:_.path}},[n("span",[e._v(e._s(e.$t(_.text)))])])],1)}),1)],1):e._e(),n("hr"),e.current_service&&e.current_service.status!=="on"?n("el-row",[n("el-col",{attrs:{span:24}},[n("center",[n("h4",{staticClass:"warning label"},[e._v("\u60A8\u7684 "+e._s(e.cate_str)+" \u670D\u52A1\u5DF2\u5230\u671F/\u6D41\u91CF\u8017\u5C3D\uFF0C\u8BF7\u7EED\u8D39")])])],1)],1):e._e(),e.current_service&&e.current_service.status=="on"?n("el-row",[n("el-col",{attrs:{span:8}},[n("center",[n("h4",[e._v(e._s(e.left_quota))]),n("h5",[e._v(e._s(e.$t("used",{n:e.used})))])])],1),n("el-col",{staticClass:"info-border",attrs:{span:8}},[n("center",[n("h4",[e._v(e._s(e.$t("days_left",{n:e.serviceToEnd})))]),n("h5",[e._v(e._s(e.$t("expires_on",{t:e.duetime})))])])],1),e.current_service.cate=="home"?n("el-col",{attrs:{span:8}},[n("center",[n("h4",[e._v("\xA5"+e._s(e.user.money&&e.user.money.toFixed(2)))]),n("h5",[e._v(e._s(e.$t("account_balance")))])])],1):e._e(),e.current_service.cate=="allplatform"?n("el-col",{attrs:{span:8}},[n("center",[n("h4",[e._v(e._s(e.$t("premium")))]),n("h5",[e._v(e._s(e.$t("tr_left",{n:e.pre_left})))])])],1):e._e()],1):e._e(),n("el-row",[n("nuxt-link",{attrs:{to:e.buyServiceLink}},[n("el-button",{staticClass:"full-width large-button",attrs:{type:"success"}},[e._v(e._s(e.$t("renew_button")))])],1),e.current_service_cate==="allplatform"?n("nuxt-link",{attrs:{to:e.buyExtraPremiumDataLink}},[n("el-button",{staticClass:"full-width large-button",attrs:{type:"success"}},[e._v(e._s(e.$t("buy_premium_data.menu_entry")))])],1):e._e()],1)],1),n("el-card",{staticClass:"app-info",attrs:{shadow:"always"}},[n("el-row",[n("el-col",{staticClass:"info-header",attrs:{span:12}},[n("h3",[n("span",[e._v(e._s(e.$t("current_lang")))])])]),n("el-col",{staticClass:"info-content",attrs:{span:12}},[n("h3",[n("span",{staticClass:"subheader"},[n("flag",{attrs:{iso:e.localeISO,squared:!1}}),e._v(e._s(e.$t(e.$i18n.locale)))],1),n("a",{staticClass:"right inlinebtn",on:{click:e.switchLang}},[e._v(e._s(e.$t("change_lang_button")))])])])],1),n("el-row",{staticClass:"menu-link-container",attrs:{gutter:10}},[e._l(e.links,function(_,b){return n("el-col",{key:_.path,attrs:{span:12,justify:"center",align:"center"}},[n("nuxt-link",{staticClass:"smooth menu-link border",attrs:{to:_.path}},[n("span",{staticClass:"icon left",class:[_.icon]}),n("span",[e._v(e._s(e.$t(_.text)))])])],1)}),n("el-col",{attrs:{span:12,justify:"center",align:"center"}},[n("a",{staticClass:"smooth menu-link border",on:{click:e.openHelpWindow}},[n("span",{staticClass:"icon left el-icon-service"}),n("span",[e._v(e._s(e.$t("help_page.title")))])])])],2),n("br"),n("center",[n("a",{staticClass:"full-width smooth menu-link",on:{click:e.openWebsite}},[n("span",{staticClass:"icon left el-icon-info"}),n("span",[e._v(e._s(e.$t("official_site"))+" "+e._s(e.userSiteURL))])])])],1),n("el-row",[n("el-col",{staticClass:"info-content",attrs:{span:24}},[n("h3",[n("span",{staticClass:"subheader"},[e._v(e._s(e.$t("client_version.core"))+" "+e._s(e.appVersion))]),n("span",{staticClass:"subheader thin small round-margin"},[e._v("("+e._s(e.$t("client_version.ui"))+" "+e._s(e.buildVersion)+")")]),e.admin?n("span",{staticClass:"subheader thin small"},[n("br"),e._v("Electron "+e._s(e.electron_version))]):e._e(),e.admin?n("a",{on:{click:e.forceRefresh}},[n("br"),n("small",[e._v("Refresh")])]):e._e(),n("br"),e.session.admin?n("el-link",{attrs:{type:"primary"},on:{click:e.toggleAdmin}},[n("small",[e._v("\u5207\u6362\u7BA1\u7406\u5458\u89C6\u56FE")])]):e._e()],1)])],1),n("a",{staticClass:"submitlog-link smooth",on:{click:e.submitLog}},[e._v(e._s(e.$t("submit_log")))]),n("nuxt-link",{staticClass:"dashboard-link smooth",attrs:{to:"/dashboard/dashboard/"}},[e._v(e._s(e.$t("back")))]),n("BillingModal",{attrs:{modalVisible:e.showBilling},on:{"update:modalVisible":function(_){e.showBilling=_},"update:modal-visible":function(_){e.showBilling=_}}})],1)},c=[],y=a(76),C=a(6),I=a(22),T=a(9),O=a(39),j=a(64),k=a(77),f=a(65),g=a(28),h=a(53),R={middleware:["load-rt-data","authenticated"],data:function(){return{crisp_user_segments:["From APP ".concat(h.app.getVersion())],buyServiceLink:"/buy-service/",buyExtraPremiumDataLink:"/buy-service/",showBilling:!1,links:[{text:"settings",path:"/dashboard/settings/",icon:"el-icon-setting"}],selectServiceDialogFormVisible:!1,loading_user_data:!1,extend_info:{buy_length:"12"},appVersion:h.app.getVersion(),storePath:h.app.getPath("userData"),electron_version:h.process.versions.electron,userSiteURL:"https://pandafan.website",loadedUIURL:window.location.href.replace("/dashboard/menu/",""),screen,admin:!1,submiting:!1,lastLogSubmitted:0}},computed:{used:function(){return this.current_service.used.toFixed(2)+" GB"},left_quota:function(){return this.current_service?[-1,4].includes(this.current_service.plan_id)||this.current_service.quote===-1?this.$t("unlimited_nor_quota"):(this.current_service.quote-this.current_service.used).toFixed(2)+" GB":"-"},view_as:{get:function(){return this.$store.state.view_as},set:function(l){var n=parseInt(l);this.$store.dispatch("view_as",isNaN(n)?null:n)}},pre_left:function(){var l=this.current_service.pre_quota-this.current_service.pre_used;return l<0?0:l.toFixed(2)+" GB"},tutorial_links:function(){return[{text:"menu.ios",path:"/dashboard/tutorials/".concat(this.current_service_cate,"/ios/")},{text:"menu.android",path:"/dashboard/tutorials/".concat(this.current_service_cate,"/android/")}]}},watch:{current_service:function(){var l,n,_;this.buyServiceLink="/buy-service/?cate=".concat((l=this.current_service)===null||l===void 0?void 0:l.cate,"&plan=").concat((n=this.current_service)===null||n===void 0?void 0:n.plan_id,"&stage=1"),this.buyExtraPremiumDataLink+="?cate=".concat((_=this.current_service)===null||_===void 0?void 0:_.cate,"&time=0")}},mounted:function(){var l,n,_,b=this;this.buyServiceLink="/buy-service/?cate=".concat((l=this.current_service)===null||l===void 0?void 0:l.cate,"&plan=").concat((n=this.current_service)===null||n===void 0?void 0:n.plan_id,"&stage=1"),this.buyExtraPremiumDataLink+="?cate=".concat((_=this.current_service)===null||_===void 0?void 0:_.cate,"&time=0"),this.$store.dispatch("getUserSiteURL").then(function(u){b.userSiteURL=u,b.userSiteURLWithToken="".concat(u,"?sessionToken=").concat(b.session.jwt_token)}).catch(function(u){console.log("get siteurl from API failed:",u)}),this.admin=this.session.admin},methods:{openWebsite:function(){this.openSite(this.session.jwt_token?this.userSiteURLWithToken:this.userSiteURL)},forceRefresh:function(){location.reload(!0)},showServiceSwitcher:function(){(Object.keys(this.service).length>1||this.current_service&&this.current_service.status!=="on")&&(this.selectServiceDialogFormVisible=!0)},openCrispChat:function(){console.log("crisp!!"),window.$crisp.push(["do","chat:show"])},switchService:function(l){this.$store.dispatch("switchService",l),this.$store.dispatch("runTimeState",{selected_line:{}}),this.selectServiceDialogFormVisible=!1,g.ipcRenderer.send("user-info-update",{})},toggleDevTool:function(){h.getCurrentWindow().toggleDevTools()},submitLog:function(){var l=this;if(!this.log_submiting){if(+new Date-this.lastLogSubmitted<1e3*60*1){this.$notify({title:this.$t("log_submit.too_fast"),type:"error"});return}this.$confirm(this.$t("log_submit.confirm"),this.$t("warning.title"),{confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("service_selector.cancel"),type:"warning"}).then(function(){l.log_submiting=!0,l.$store.dispatch("updateBilling",{}).then(function(){g.ipcRenderer.send("log-history-submit"),g.ipcRenderer.once("log-submit-response",function(n,_){l.lastLogSubmitted=+new Date,console.log(_),_.error?l.$notify({title:l.$t("log_submit_failed"),type:"error"}):l.$notify({title:l.$t("log_submit_success"),type:"success"}),l.log_submiting=!1})}).catch(function(n){console.log(n),l.$notify({title:l.$t("log_submit_failed"),type:"error"})}).finally(function(){l.log_submiting=!1})}).catch(function(){})}},refreshData:function(){var l=this;return Object(C.a)(regeneratorRuntime.mark(function n(){var _;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!l.loading_user_data){u.next=2;break}return u.abrupt("return");case 2:return l.loading_user_data=!0,u.prev=3,u.next=6,l.reloadUserData({showMessage:!0});case 6:u.next=16;break;case 8:return u.prev=8,u.t0=u.catch(3),console.log("menu reloadUserData error",u.t0),console.log(((_=u.t0.data)===null||_===void 0?void 0:_.message)==="need log in"),u.t0==="found no valid service"&&l.$message({message:l.$t("select_service.suspend.time"),type:"error"}),u.t0==="service data suspended"&&l.$message({message:l.$t("select_service.suspend.data"),type:"error"}),u.t0==="no service purchased"&&l.$message({message:l.$t("select_service.suspend.empty"),type:"info"}),u.abrupt("return",l.$router.push({path:"/buy-service/"}));case 16:l.loading_user_data=!1;case 17:case"end":return u.stop()}},n,null,[[3,8]])}))()},showSentryReport:function(){console.log(this),this.$sentry.showReportDialog({eventId:new Date().getTime()})},openHelpWindow:function(){g.ipcRenderer.send("show-help-window")},toggleAdmin:function(){this.admin=!this.admin,console.log(this.admin)}}},A=R,V=a(1441),M=a(51),S=Object(M.a)(A,s,c,!1,null,null,null),B=p.default=S.exports;installComponents(S,{BillingModal:a(1158).default})}}]);