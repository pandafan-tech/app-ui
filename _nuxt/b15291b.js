(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1097:function(e,t,n){"use strict";var r=n(9),o=n(1098)(5),c="find",l=!0;c in[]&&Array(1).find((function(){l=!1})),r(r.P+r.F*l,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(200)(c)},1098:function(e,t,n){var r=n(72),o=n(199),c=n(73),l=n(47),d=n(1099);e.exports=function(e,t){var n=1==e,_=2==e,h=3==e,m=4==e,f=6==e,v=5==e||f,w=t||d;return function(t,d,k){for(var x,$,C=c(t),y=o(C),S=r(d,k,3),R=l(y.length),D=0,U=n?w(t,R):_?w(t,0):void 0;R>D;D++)if((v||D in y)&&($=S(x=y[D],D,C),e))if(n)U[D]=$;else if($)switch(e){case 3:return!0;case 5:return x;case 6:return D;case 2:U.push(x)}else if(m)return!1;return f?-1:h||m?m:U}}},1099:function(e,t,n){var r=n(1100);e.exports=function(e,t){return new(r(e))(t)}},1100:function(e,t,n){var r=n(34),o=n(291),c=n(6)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&null===(t=t[c])&&(t=void 0)),void 0===t?Array:t}},1162:function(e,t,n){var content=n(1307);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(58).default)("15375fb9",content,!0,{sourceMap:!1})},1306:function(e,t,n){"use strict";n(1162)},1307:function(e,t,n){var r=n(57)((function(i){return i[1]}));r.push([e.i,".menu-container{height:100vh;padding:2rem .5rem .5rem;position:relative}.menu-container .flag-icon{margin-right:.2rem}.menu-container .el-card{margin-bottom:1rem}.menu-container .app-info{background:#f4f7fc}.menu-container .account-info{background:#1abc9c;border-color:#1abc9c}.menu-container .account-info *{color:#f4f7fc}.menu-container .account-info hr{margin:1rem 0;border:0;height:1px;background:#f4f7fc}.menu-container .inlinebtn{border:1px solid #1abc9c;padding:.1rem .5rem .15rem;line-height:1.2rem;border-radius:4px}.menu-container .info-content,.menu-container .info-header{color:#34495e;margin-bottom:.5rem;line-height:1.2}.menu-container .info-header{color:#7f8c8d}.menu-container .info-header h3{font-weight:400}.menu-container .large-button{margin-top:.5rem;font-size:1.1rem}.menu-container .dashboard-link,.menu-container .debug-link{position:fixed;right:.5rem;bottom:.5rem}.menu-container .debug-link{left:.5rem}.menu-container .menu-link-container{margin-top:1rem}.menu-container .tutorial-link{font-size:1.4rem;text-decoration:none;text-align:center;padding-bottom:.15rem;display:block;width:100%;border-radius:4px;box-shadow:0 5px 12px 0 rgba(0,0,0,.15);background:#16a085}.menu-container .tutorial-link span{color:#f4f7fc}.menu-container .tutorial-link:hover{background:#1abc9c}.menu-container .menu-link{font-size:1.4rem;text-decoration:none;text-align:center;padding-bottom:.15rem;display:block;width:100%;border-radius:4px;box-shadow:0 5px 12px 0 rgba(0,0,0,.15)}.menu-container .menu-link.border .icon{padding-top:.35rem;padding-right:.5rem}.menu-container .menu-link.border.revert,.menu-container .menu-link.border:hover{background:#1abc9c;color:#fff}.menu-container .menu-link.border.revert:hover{background:#fff;color:#1abc9c}",""]),e.exports=r},1345:function(e,t,n){"use strict";n.r(t);n(27),n(1097),n(20),n(8),n(45),n(82),n(101),n(83);var r=n(17),o={middleware:["load-rt-data","authenticated"],data:function(){return{crisp_user_segments:["From APP ".concat(r.remote.app.getVersion())],links:[{text:"settings",path:"/dashboard/settings/",icon:"el-icon-setting"},{text:"about",path:"/dashboard/about/",icon:"el-icon-more"}],selectServiceDialogFormVisible:!1,loading_user_data:!1,extend_info:{buy_length:"12"},appVersion:r.remote.app.getVersion(),storePath:r.remote.app.getPath("userData"),electron_version:r.remote.process.versions.electron,userSiteURL:"https://pandafan.pub",loadedUIURL:window.location.href.replace("/dashboard/menu/",""),screen:screen,admin:!1}},computed:{used:function(){return this.current_service.used.toFixed(2)+" GB"},left_quota:function(){return this.current_service?[-1,4].includes(this.current_service.plan_id)||-1===this.current_service.quote?this.$t("unlimited_nor_quota"):(this.current_service.quote-this.current_service.used).toFixed(2)+" GB":"-"},view_as:{get:function(){return this.$store.state.view_as},set:function(e){var t=parseInt(e);this.$store.dispatch("view_as",isNaN(t)?null:t)}},pre_left:function(){var e=this.current_service.pre_quota-this.current_service.pre_used;return e<0?0:e.toFixed(2)+" GB"},tutorial_links:function(){return[{text:"menu.ios",path:"/dashboard/tutorials/".concat(this.current_service_cate,"/ios/")},{text:"menu.android",path:"/dashboard/tutorials/".concat(this.current_service_cate,"/android/")}]}},mounted:function(){var e=this;this.$store.dispatch("getUserSiteURL").then((function(u){e.userSiteURL=u,e.userSiteURLWithToken="".concat(u,"?sessionToken=").concat(e.session.jwt_token)})).catch((function(e){console.log("get siteurl from API failed:",e)})),this.admin=this.session.admin},methods:{openWebsite:function(){this.openSite(this.session.jwt_token?this.userSiteURLWithToken:this.userSiteURL)},forceRefresh:function(){location.reload(!0)},showServiceSwitcher:function(){(Object.keys(this.service).length>1||this.current_service&&"on"!==this.current_service.status)&&(this.selectServiceDialogFormVisible=!0)},openCrispChat:function(){console.log("crisp!!"),window.$crisp.push(["do","chat:show"])},switchService:function(e){this.$store.dispatch("switchService",e),this.$store.dispatch("runTimeState",{selected_line:{}}),this.selectServiceDialogFormVisible=!1,r.ipcRenderer.send("user-info-update",{})},toggleDevTool:function(){r.remote.getCurrentWindow().toggleDevTools()},reloadUserData:function(){var e=this;if(!this.loading_user_data){this.$message({message:"正在刷新账号、服务信息...",type:"info"}),this.loading_user_data=!0;var t=null;try{t=this.current_lines.find((function(line){return line.name===e.runTimeState.selected_line.name}))}catch(e){console.log("current lineS not found. skipping...")}this.$store.dispatch("getUserAndService").then((function(n){console.log("got data."),console.log(n),e.loading_user_data=!1,t?e.$store.dispatch("runTimeState",{selected_line:t}):e.$store.dispatch("runTimeState",{selected_line:{}}),e.$message({message:"账户、服务信息已刷新",type:"success"}),r.ipcRenderer.send("user-info-update",{})})).catch((function(t){return console.log("get user&service e-----\x3e",t),e.loading_user_data=!1,e.$message({message:"failed...",type:"error"})}))}},showSentryReport:function(){console.log(this),this.$sentry.showReportDialog({eventId:(new Date).getTime()})},update:function(){var e=n(103);e.mkdir(),e.readdir(r.remote.app.getAppPath(),(function(e,t){console.log(e),console.log(t)}))},openHelpWindow:function(){r.ipcRenderer.send("show-help-window")},toggleAdmin:function(){this.admin=!this.admin,console.log(this.admin)}}},c=(n(1306),n(44)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-container"},[n("el-dialog",{attrs:{title:"您要使用哪项服务？",visible:e.selectServiceDialogFormVisible,center:"",width:"90%","append-to-body":!0},on:{"update:visible":function(t){e.selectServiceDialogFormVisible=t}}},[n("el-radio-group",{attrs:{size:"medium"},model:{value:e.current_service_cate,callback:function(t){e.current_service_cate=t},expression:"current_service_cate"}},[n("el-radio",{attrs:{border:"",label:"allplatform"}},[e._v(e._s(e.$t("services.allplatform.name")))]),n("el-radio",{attrs:{border:"",label:"home"}},[e._v(e._s(e.$t("services.home.name")))])],1)],1),n("el-card",{staticClass:"account-info",attrs:{shadow:"always"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("h4",[n("span",[n("small",[e._v(e._s(e.$t("menu.id")))])]),n("span",[e._v(" ")]),n("span",{staticClass:"thin underline"},[e._v(e._s(e.user.id))])]),n("h4",[n("span",{staticClass:"thin underline"},[e._v(e._s(e.user.email))])]),n("h4",[n("span",{staticClass:"underline pointer",on:{click:e.showServiceSwitcher}},[e._v(e._s(e.$t("services."+e.current_service_cate+".name")))]),n("span",[e._v(" /")]),n("span",{staticClass:"larger"},[e._v(e._s(e.$t("plan_names."+e.current_plan.id)))])])]),n("el-col",{attrs:{span:12}},[n("h4",[n("span",{staticClass:"right"},[n("a",{attrs:{loading:e.loading_user_data},on:{click:e.reloadUserData}},[n("i",{staticClass:"el-icon-refresh"}),e._v("\n"+e._s(e.$t("reload_data")))]),n("span",[n("br"),n("nuxt-link",{attrs:{to:"/dashboard/update_billing/"}},[n("i",{staticClass:"el-icon-edit-outline"}),e._v("\n"+e._s(e.$t("update_billing.header")))])],1),Object.keys(e.service).length>1||e.current_service&&"on"!==e.current_service.status?n("span",[n("br"),n("a",{on:{click:function(t){e.selectServiceDialogFormVisible=!0}}},[n("i",{staticClass:"el-icon-sort"}),e._v("\n"+e._s(e.$t("switch_service")))])]):e._e()])])])],1),"allplatform"===e.current_service_cate&&!1!==e.user.web_login?n("div",[n("hr"),n("el-row",{staticClass:"info-header"},[n("h4",[n("span",{staticClass:"subheader"},[e._v(e._s(e.$t("menu.tutorial_for_phones")))])])]),n("el-row",{attrs:{gutter:10}},e._l(e.tutorial_links,(function(link,t){return n("el-col",{key:link.path,attrs:{span:12,justify:"center",align:"center"}},[n("nuxt-link",{staticClass:"smooth tutorial-link",attrs:{to:link.path}},[n("span",[e._v(e._s(e.$t(link.text)))])])],1)})),1)],1):e._e(),n("hr"),e.current_service&&"on"!==e.current_service.status?n("el-row",[n("el-col",{attrs:{span:24}},[n("center",[n("h4",{staticClass:"warning label"},[e._v("您的 "+e._s(e.cate_str)+" 服务已到期/流量耗尽，请续费")])])],1)],1):e._e(),e.current_service&&"on"==e.current_service.status?n("el-row",[n("el-col",{attrs:{span:8}},[n("center",[n("h4",[e._v(e._s(e.left_quota))]),n("h5",[e._v(e._s(e.$t("used",{n:e.used})))])])],1),n("el-col",{staticClass:"info-border",attrs:{span:8}},[n("center",[n("h4",[e._v(e._s(e.$t("days_left",{n:e.serviceToEnd})))]),n("h5",[e._v(e._s(e.$t("expires_on",{t:e.duetime})))])])],1),"home"==e.current_service.cate?n("el-col",{attrs:{span:8}},[n("center",[n("h4",[e._v("¥"+e._s(e.user.money&&e.user.money.toFixed(2)))]),n("h5",[e._v(e._s(e.$t("account_balance")))])])],1):e._e(),"allplatform"==e.current_service.cate?n("el-col",{attrs:{span:8}},[n("center",[n("h4",[e._v(e._s(e.$t("premium")))]),n("h5",[e._v(e._s(e.$t("tr_left",{n:e.pre_left})))])])],1):e._e()],1):e._e(),n("el-row",[n("nuxt-link",{attrs:{to:"/buy-service/"}},[n("el-button",{staticClass:"full-width large-button",attrs:{type:"success"}},[e._v(e._s(e.$t("renew_button")))])],1),"allplatform"===e.current_service_cate?n("nuxt-link",{attrs:{to:"/dashboard/buy-premium-data/"}},[n("el-button",{staticClass:"full-width large-button",attrs:{type:"success"}},[e._v(e._s(e.$t("buy_premium_data.menu_entry")))])],1):e._e()],1)],1),n("el-card",{staticClass:"app-info",attrs:{shadow:"always"}},[n("el-row",[n("el-col",{staticClass:"info-header",attrs:{span:12}},[n("h3",[n("span",[e._v(e._s(e.$t("current_lang")))])])]),n("el-col",{staticClass:"info-content",attrs:{span:12}},[n("h3",[n("span",{staticClass:"subheader"},[n("flag",{attrs:{iso:e.localeISO,squared:!1}}),e._v(e._s(e.$t(e.$i18n.locale)))],1),n("a",{staticClass:"right inlinebtn",on:{click:e.switchLang}},[e._v(e._s(e.$t("change_lang_button")))])])])],1),n("el-row",{staticClass:"menu-link-container",attrs:{gutter:10}},[e._l(e.links,(function(link,t){return n("el-col",{key:link.path,attrs:{span:8,justify:"center",align:"center"}},[n("nuxt-link",{staticClass:"smooth menu-link border",attrs:{to:link.path}},[n("span",{staticClass:"icon left",class:[link.icon]}),n("span",[e._v(e._s(e.$t(link.text)))])])],1)})),n("el-col",{attrs:{span:8,justify:"center",align:"center"}},[n("a",{staticClass:"smooth menu-link border",on:{click:e.openHelpWindow}},[n("span",{staticClass:"icon left el-icon-service"}),n("span",[e._v(e._s(e.$t("help_page.title")))])])])],2),n("br"),n("center",[n("a",{staticClass:"full-width smooth menu-link",on:{click:e.openWebsite}},[n("span",{staticClass:"icon left el-icon-info"}),n("span",[e._v(e._s(e.$t("official_site"))+" "+e._s(e.userSiteURL))])])])],1),n("el-row",[n("el-col",{staticClass:"info-header",attrs:{span:8}},[n("h3",[n("span",[e._v(e._s(e.$t("client_version.title")))])])]),n("el-col",{staticClass:"info-content",attrs:{span:16}},[n("h3",[n("span",{staticClass:"subheader"},[e._v(e._s(e.$t("client_version.core"))+" "+e._s(e.appVersion))]),n("span",{staticClass:"subheader thin small round-margin"},[e._v("("+e._s(e.$t("client_version.ui"))+" "+e._s(e.buildVersion)+")")]),e.admin?n("span",{staticClass:"subheader thin small"},[n("br"),e._v("Electron "+e._s(e.electron_version))]):e._e(),e.admin?n("a",{on:{click:e.forceRefresh}},[n("br"),n("small",[e._v("Refresh")])]):e._e(),n("br")])])],1),e.admin?n("el-card",{staticClass:"admin"},[n("el-form",{ref:"form",attrs:{"label-width":"85px",size:"mini"}},[n("el-form-item",{attrs:{label:"加载用户ID"}},[n("el-input",{attrs:{type:"number"},model:{value:e.view_as,callback:function(t){e.view_as=t},expression:"view_as"}})],1)],1)],1):e._e(),e.session.admin?n("el-button",{staticClass:"tiny right",attrs:{type:"info"},on:{click:e.toggleAdmin}},[e._v("管理员视图")]):e._e(),e.admin?n("a",{staticClass:"debug-link smooth",on:{click:e.toggleDevTool}},[e._v("调试")]):e._e(),n("nuxt-link",{staticClass:"dashboard-link smooth",attrs:{to:"/dashboard/dashboard/"}},[e._v(e._s(e.$t("back")))])],1)}),[],!1,null,null,null);t.default=component.exports}}]);