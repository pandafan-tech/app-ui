(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1285:function(e,t,o){var s=o(1447);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,o(2).default)("6cfe2572",s,!0,{sourceMap:!1})},1446:function(e,t,o){"use strict";o(1285)},1447:function(e,t,o){var s=o(1)(!1);s.push([e.i,".update-container{height:100vh;padding:2rem .5rem .5rem;position:relative;color:#f4f7fc}.update-container h2{font-weight:500}.update-container .top-space{margin-top:1rem}.update-container .bottom-space{margin-bottom:1rem}.update-container .info-content,.update-container .info-header{color:#34495e;margin-bottom:.5rem;line-height:1.2}.update-container .info-header{color:#7f8c8d}.update-container .info-header h3{font-weight:400}.update-container .large-button{font-size:1.5rem}.update-container .dashboard-link{position:fixed;right:.5rem;bottom:.5rem}.update-container .version-history-link{position:fixed;left:.5rem;bottom:.5rem}.update-container .menu-link{font-size:2rem;text-decoration:none;width:100%;display:block;margin-top:.5rem;padding-left:.5rem}.update-container .menu-link:hover{background:#1abc9c;color:#fff}",""]),e.exports=s},1481:function(e,t,o){"use strict";o.r(t);o(205),o(63),o(75),o(9);var s=o(19),r=o(1145),n={components:{VueMarkdown:o.n(r).a},middleware:["load-rt-data"],data:function(){return{appPath:s.remote.app.getAppPath(),updating:!1,appVersion:s.remote.app.getVersion(),restart_prompt:!1,updateFailed:!1,failReason:null,version_confirm:!1,showBetaVersion:!0,unzip_prompt:!1,dlProgress:{progress:0},showBranch:null,sysInfo:s.remote.process,latestVersion:{stable:"",beta:"-"}}},computed:{mustRedownload:function(){return!(!this.showBranch||!this.latestVersion[this.showBranch])&&(!!this.latestVersion[this.showBranch].redownload&&!(this.versionCompare(this.latestVersion[this.showBranch].redownload,this.appVersion)<1))}},created:function(){var e=this,t=this;this.$nextTick((function(){e.$nuxt.$loading.start(),s.ipcRenderer.send("check-update"),s.ipcRenderer.once("update-info",(function(e,o){if(console.log(o),!o)return t.$alert("获取版本更新信息失败。大概是网络或者PandaFan的服务器抽了一下，不要担心，稍后再来吧。","请稍后重试",{center:!0}).then((function(){}),(function(e){})).catch((function(){})).finally((function(){t.$router.go(-1)}));t.latestVersion=o,t.$nuxt.$loading.finish(),t.versionCompare(o.stable.version,o.beta.version)<0?t.showBetaVersion=!0:t.showBetaVersion=!1}))}))},beforeDestroy:function(){s.ipcRenderer.removeAllListeners("download-progress"),s.ipcRenderer.removeAllListeners("update-info")},mounted:function(){s.remote.process.execPath.includes("Temp")&&(this.zip_prompt=!0)},methods:{update:function(e,t){var o=this;this.dlProgress={progress:0},s.ipcRenderer.send("disconnect");var r=this;if(!t&&r.versionCompare(e.version,r.appVersion)<1)return r.version_confirm=!0;r.updating=!0,s.ipcRenderer.removeAllListeners("download-progress"),s.ipcRenderer.on("download-progress",(function(e,t){t&&(console.log(e,t),t.progress=Number(t.progress.toFixed(1)),(t.progress-r.dlProgress.progress>1||100===t.progress)&&(console.log("progress:",t),r.dlProgress=t))})),s.ipcRenderer.on("update-completed",(function(e,t){if(r.updating=!1,console.log("update-completed"),console.log(e,t),t){var s=r.$root.$t("check_for_update.update_fail")+"<br>"+o.errorMessageAssemble(t);r.$alert(s,"Error",{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch((function(){})),r.updateFailed=!0,r.failReason=t}else r.restart_prompt=!0})),s.ipcRenderer.send("do-update",{version_info:e})},restart:function(){s.ipcRenderer.send("restart")},dlLink:function(e){var t;return"win32"===this.sysInfo.platform&&(t="win/PandaFan-".concat(this.sysInfo.platform,"-").concat(e,".exe")),"darwin"===this.sysInfo.platform&&(t="mac/PandaFan-".concat(e,".dmg"),"arm64"===this.sysInfo.arch&&(t="mac/PandaFan-arm64-".concat(e,".dmg"))),"https://xconf.oss-accelerate.aliyuncs.com/panda/dl/client/".concat(t)},openDir:function(e){s.shell.showItemInFolder(e)},byteHelper:function(e){var t=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,Math.floor(t))).toFixed(1)+" "+["b","kB","MB","GB","TB"][t]}}},a=(o(1446),o(51)),c=Object(a.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"update-container"},[o("center",[o("h1",[e._v(e._s(e.$t("check_for_update.page_title")))])]),o("br"),o("el-row",[o("el-col",{attrs:{span:12}},[o("h2",[e._v(e._s(e.$t("check_for_update.current_core")))])]),o("el-col",{attrs:{span:12}},[o("h2",[e._v(e._s(e.appVersion))])])],1),o("el-row",[o("el-col",{attrs:{span:12}},[o("h2",{staticClass:"thin"},[e._v(e._s(e.$t("check_for_update.latest_core")))])]),o("el-col",{attrs:{span:12}},[o("h2",{staticClass:"succes",on:{click:function(t){e.showBranch="stable"}}},[o("a",{staticClass:"success"},[e._v(e._s(e.latestVersion.stable.version)+" "+e._s(e.$t("check_for_update.download.stable")))])]),e.showBetaVersion?o("h2",{staticClass:"warning",on:{click:function(t){e.showBranch="beta"}}},[o("a",{staticClass:"warning"},[e._v(e._s(e.latestVersion.beta.version)+" "+e._s(e.$t("check_for_update.download.beta")))])]):e._e()])],1),e.showBranch?e._e():o("el-row",{staticClass:"top-space"},[o("center",[o("h2",[e._v(e._s(e.$t("check_for_update.select_version")))])])],1),e.dlProgress.progress?o("el-row",{staticClass:"top-space"},[o("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:e.dlProgress.progress,status:"success"}}),o("p",[o("span",{staticClass:"left"},[e._v(e._s(e.byteHelper(e.dlProgress.downloaded))+"/"+e._s(e.byteHelper(e.dlProgress.total)))]),e.dlProgress.progress<100?o("span",{staticClass:"right"},[e._v(e._s(e.byteHelper(e.dlProgress.speed))+"/s")]):e._e()])],1):e._e(),e.showBranch?o("el-row",{staticClass:"top-space bottom-space"},[e.mustRedownload?e._e():o("el-col",{staticClass:"bottom-space",attrs:{span:24}},[o("center",[o("el-button",{attrs:{type:"beta"==e.showBranch?"warning":"primary",loading:e.updating},on:{click:function(t){return e.update(e.latestVersion[e.showBranch])}}},[e._v(e._s(e.$t("check_for_update.install")))])],1)],1),o("el-col",{attrs:{span:24}},[o("h3",[o("b",[e._v(e._s(e.latestVersion[e.showBranch].version)+" "+e._s(e.$t("check_for_update.changelog")))])]),o("vue-markdown",{attrs:{source:e.latestVersion[e.showBranch].changelog,postrender:e.transformLinks}})],1),e.failReason?o("el-col",{staticClass:"top-space",attrs:{span:24}},[o("p",[e._v("Error: "+e._s(e.failReason.message))])]):e._e()],1):e._e(),o("el-dialog",{attrs:{visible:e.version_confirm,width:"80%",center:""},on:{"update:visible":function(t){e.version_confirm=t}}},[o("center",[o("h3",[o("b",[e._v(e._s(e.$t("check_for_update.version_confirm")))])])]),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("center",[o("el-button",{attrs:{type:"success"},on:{click:function(t){e.version_confirm=!1}}},[e._v(e._s(e.$t("check_for_update.cancel")))]),o("el-button",{attrs:{type:"secondary"},on:{click:function(t){e.version_confirm=!1,e.update(e.latestVersion[e.showBranch],!0)}}},[e._v(e._s(e.$t("check_for_update.confirm")))])],1)],1)],1),o("el-dialog",{attrs:{visible:e.restart_prompt,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"80%",center:""},on:{"update:visible":function(t){e.restart_prompt=t}}},[o("center",[o("h3",[o("b",[e._v(e._s(e.$t("check_for_update.restart_hint")))])])]),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("center",[o("el-button",{attrs:{type:"success"},on:{click:e.restart}},[e._v(e._s(e.$t("check_for_update.restart")))])],1)],1)],1),o("el-dialog",{attrs:{visible:e.unzip_prompt,width:"80%",center:""},on:{"update:visible":function(t){e.unzip_prompt=t}}},[o("center",[o("h3",[o("b",[e._v(e._s(e.$t("check_for_update.unzip_prompt")))])])]),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("center",[o("el-button",{attrs:{type:"success"},on:{click:function(t){e.unzip_prompt=!1}}},[e._v(e._s(e.$t("check_for_update.okay")))])],1)],1)],1),e.mustRedownload||e.updateFailed?o("div",[o("br"),o("hr"),o("br"),o("center",[e.mustRedownload?o("h2",[e._v(e._s(e.$t("check_for_update.redownload")))]):e._e(),e.mustRedownload?e._e():o("h3",[e._v(e._s(e.$t("check_for_update.manually")))]),o("br")]),"darwin"==e.sysInfo.platform?o("el-row",[o("center",[o("el-button",{attrs:{type:"success"},on:{click:function(t){e.openSite(e.dlLink(e.latestVersion[e.showBranch].version))}}},[e._v(e._s(e.$t("check_for_update.click_to_download")))]),o("br"),o("br")],1),o("p",[e._v(e._s(e.$t("check_for_update.mac.a"))),o("a",{on:{click:function(t){return e.openDir("/Applications/")}}},[e._v(e._s(e.$t("check_for_update.mac.b")))]),e._v(e._s(e.$t("check_for_update.mac.c")))])],1):e._e(),"win32"==e.sysInfo.platform?o("el-row",[o("center",[o("el-button",{attrs:{type:"success"},on:{click:function(t){e.openSite(e.dlLink(e.latestVersion[e.showBranch].version))}}},[e._v(e._s(e.$t("check_for_update.click_to_download")))]),o("br"),o("br")],1),o("p",[e._v(e._s(e.$t("check_for_update.win.del.a")))]),o("p",[e._v(e._s(e.$t("check_for_update.win.del.b")))]),o("br"),o("p",[e._v(e._s(e.$t("check_for_update.win.f")))]),o("a",{on:{click:function(t){return e.openDir(e.appPath)}}},[e._v(e._s(e.appPath))])],1):e._e()],1):e._e(),o("nuxt-link",{staticClass:"dashboard-link",attrs:{to:"/dashboard/dashboard/"}},[e._v(" "+e._s(e.$t("back")))])],1)}),[],!1,null,null,null);t.default=c.exports}}]);