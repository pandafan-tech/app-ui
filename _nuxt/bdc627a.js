(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1293:function(c,d,o){var a=o(1455);a.__esModule&&(a=a.default),typeof a=="string"&&(a=[[c.i,a,""]]),a.locals&&(c.exports=a.locals);var l=o(2).default,f=l("45a849c6",a,!0,{sourceMap:!1})},1454:function(c,d,o){"use strict";var a=o(1293),l=o.n(a)},1455:function(c,d,o){var a=o(1),l=a(!1);l.push([c.i,".update-container{height:100vh;padding:2rem .5rem .5rem;position:relative;color:#f4f7fc}.update-container h2{font-weight:500}.update-container .top-space{margin-top:1rem}.update-container .bottom-space{margin-bottom:1rem}.update-container .info-content,.update-container .info-header{color:#34495e;margin-bottom:.5rem;line-height:1.2}.update-container .info-header{color:#7f8c8d}.update-container .info-header h3{font-weight:400}.update-container .large-button{font-size:1.5rem}.update-container .dashboard-link{position:fixed;right:.5rem;bottom:.5rem}.update-container .version-history-link{position:fixed;left:.5rem;bottom:.5rem}.update-container .menu-link{font-size:2rem;text-decoration:none;width:100%;display:block;margin-top:.5rem;padding-left:.5rem}.update-container .menu-link:hover{background:#1abc9c;color:#fff}",""]),c.exports=l},1489:function(c,d,o){"use strict";o.r(d);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"update-container"},[t("center",[t("h1",[e._v(e._s(e.$t("check_for_update.page_title")))])]),t("br"),t("el-row",[t("el-col",{attrs:{span:12}},[t("h2",[e._v(e._s(e.$t("check_for_update.current_core")))])]),t("el-col",{attrs:{span:12}},[t("h2",[e._v(e._s(e.appVersion))])])],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("h2",{staticClass:"thin"},[e._v(e._s(e.$t("check_for_update.latest_core")))])]),t("el-col",{attrs:{span:12}},[t("h2",{staticClass:"succes",on:{click:function(s){e.showBranch="stable"}}},[t("a",{staticClass:"success"},[e._v(e._s(e.latestVersion.stable.version)+" "+e._s(e.$t("check_for_update.download.stable")))])]),e.showBetaVersion?t("h2",{staticClass:"warning",on:{click:function(s){e.showBranch="beta"}}},[t("a",{staticClass:"warning"},[e._v(e._s(e.latestVersion.beta.version)+" "+e._s(e.$t("check_for_update.download.beta")))])]):e._e()])],1),e.showBranch?e._e():t("el-row",{staticClass:"top-space"},[t("center",[t("h2",[e._v(e._s(e.$t("check_for_update.select_version")))])])],1),e.dlProgress.progress?t("el-row",{staticClass:"top-space"},[t("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:e.dlProgress.progress,status:"success"}}),t("p",[t("span",{staticClass:"left"},[e._v(e._s(e.byteHelper(e.dlProgress.downloaded))+"/"+e._s(e.byteHelper(e.dlProgress.total)))]),e.dlProgress.progress<100?t("span",{staticClass:"right"},[e._v(e._s(e.byteHelper(e.dlProgress.speed))+"/s")]):e._e()])],1):e._e(),e.showBranch?t("el-row",{staticClass:"top-space bottom-space"},[e.mustRedownload?e._e():t("el-col",{staticClass:"bottom-space",attrs:{span:24}},[t("center",[t("el-button",{attrs:{type:e.showBranch=="beta"?"warning":"primary",loading:e.updating},on:{click:function(s){return e.update(e.latestVersion[e.showBranch])}}},[e._v(e._s(e.$t("check_for_update.install")))])],1)],1),t("el-col",{attrs:{span:24}},[t("h3",[t("b",[e._v(e._s(e.latestVersion[e.showBranch].version)+" "+e._s(e.$t("check_for_update.changelog")))])]),t("vue-markdown",{attrs:{source:e.latestVersion[e.showBranch].changelog,postrender:e.transformLinks}})],1),e.failReason?t("el-col",{staticClass:"top-space",attrs:{span:24}},[t("p",[e._v("Error: "+e._s(e.failReason.message))])]):e._e()],1):e._e(),t("el-dialog",{attrs:{visible:e.version_confirm,width:"80%",center:""},on:{"update:visible":function(s){e.version_confirm=s}}},[t("center",[t("h3",[t("b",[e._v(e._s(e.$t("check_for_update.version_confirm")))])])]),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("center",[t("el-button",{attrs:{type:"success"},on:{click:function(s){e.version_confirm=!1}}},[e._v(e._s(e.$t("check_for_update.cancel")))]),t("el-button",{attrs:{type:"secondary"},on:{click:function(s){e.version_confirm=!1,e.update(e.latestVersion[e.showBranch],!0)}}},[e._v(e._s(e.$t("check_for_update.confirm")))])],1)],1)],1),t("el-dialog",{attrs:{visible:e.restart_prompt,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"80%",center:""},on:{"update:visible":function(s){e.restart_prompt=s}}},[t("center",[t("h3",[t("b",[e._v(e._s(e.$t("check_for_update.restart_hint")))])])]),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("center",[t("el-button",{attrs:{type:"success"},on:{click:e.restart}},[e._v(e._s(e.$t("check_for_update.restart")))])],1)],1)],1),t("el-dialog",{attrs:{visible:e.unzip_prompt,width:"80%",center:""},on:{"update:visible":function(s){e.unzip_prompt=s}}},[t("center",[t("h3",[t("b",[e._v(e._s(e.$t("check_for_update.unzip_prompt")))])])]),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("center",[t("el-button",{attrs:{type:"success"},on:{click:function(s){e.unzip_prompt=!1}}},[e._v(e._s(e.$t("check_for_update.okay")))])],1)],1)],1),e.mustRedownload||e.updateFailed?t("div",[t("br"),t("hr"),t("br"),t("center",[e.mustRedownload?t("h2",[e._v(e._s(e.$t("check_for_update.redownload")))]):e._e(),e.mustRedownload?e._e():t("h3",[e._v(e._s(e.$t("check_for_update.manually")))]),t("br")]),e.sysInfo.platform=="darwin"?t("el-row",[t("center",[t("el-button",{attrs:{type:"success"},on:{click:function(s){e.openSite(e.dlLink(e.latestVersion[e.showBranch].version))}}},[e._v(e._s(e.$t("check_for_update.click_to_download")))]),t("br"),t("br")],1),t("p",[e._v(e._s(e.$t("check_for_update.mac.a"))),t("a",{on:{click:function(s){return e.openDir("/Applications/")}}},[e._v(e._s(e.$t("check_for_update.mac.b")))]),e._v(e._s(e.$t("check_for_update.mac.c")))])],1):e._e(),e.sysInfo.platform=="win32"?t("el-row",[t("center",[t("el-button",{attrs:{type:"success"},on:{click:function(s){e.openSite(e.dlLink(e.latestVersion[e.showBranch].version))}}},[e._v(e._s(e.$t("check_for_update.click_to_download")))]),t("br"),t("br")],1),t("p",[e._v(e._s(e.$t("check_for_update.win.del.a")))]),t("p",[e._v(e._s(e.$t("check_for_update.win.del.b")))]),t("br"),t("p",[e._v(e._s(e.$t("check_for_update.win.f")))]),t("a",{on:{click:function(s){return e.openDir(e.appPath)}}},[e._v(e._s(e.appPath))])],1):e._e()],1):e._e(),t("nuxt-link",{staticClass:"dashboard-link",attrs:{to:"/dashboard/dashboard/"}},[e._v(" "+e._s(e.$t("back")))])],1)},l=[],f=o(206),$=o(64),y=o(76),x=o(9),i=o(46),p=o(53),h=o(1153),v=o.n(h),m={components:{VueMarkdown:v.a},middleware:["load-rt-data"],data:function(){var n=p.app.getAppPath(),t=p.app.getVersion();return{appPath:n,updating:!1,appVersion:t,restart_prompt:!1,updateFailed:!1,failReason:null,version_confirm:!1,showBetaVersion:!0,unzip_prompt:!1,dlProgress:{progress:0},showBranch:null,sysInfo:p.process,latestVersion:{stable:"",beta:"-"}}},computed:{mustRedownload:function(){return!(!this.showBranch||!this.latestVersion[this.showBranch]||!this.latestVersion[this.showBranch].redownload||this.versionCompare(this.latestVersion[this.showBranch].redownload,this.appVersion)<1)}},created:function(){var n=this,t=this;this.$nextTick(function(){n.$nuxt.$loading.start(),i.ipcRenderer.send("check-update"),i.ipcRenderer.once("update-info",function(s,r){if(console.log(r),!r)return t.$alert("\u83B7\u53D6\u7248\u672C\u66F4\u65B0\u4FE1\u606F\u5931\u8D25\u3002\u5927\u6982\u662F\u7F51\u7EDC\u6216\u8005PandaFan\u7684\u670D\u52A1\u5668\u62BD\u4E86\u4E00\u4E0B\uFF0C\u4E0D\u8981\u62C5\u5FC3\uFF0C\u7A0D\u540E\u518D\u6765\u5427\u3002","\u8BF7\u7A0D\u540E\u91CD\u8BD5",{center:!0}).then(function(){},function(u){}).catch(function(){}).finally(function(){t.$router.go(-1)});t.latestVersion=r,t.$nuxt.$loading.finish(),t.versionCompare(r.stable.version,r.beta.version)<0?t.showBetaVersion=!0:t.showBetaVersion=!1})})},beforeDestroy:function(){i.ipcRenderer.removeAllListeners("download-progress"),i.ipcRenderer.removeAllListeners("update-info")},mounted:function(){p.process.execPath.includes("Temp")&&(this.zip_prompt=!0)},methods:{update:function(n,t){var s=this;this.dlProgress={progress:0},i.ipcRenderer.send("disconnect");var r=this;if(!t&&r.versionCompare(n.version,r.appVersion)<1)return r.version_confirm=!0;r.updating=!0,i.ipcRenderer.removeAllListeners("download-progress"),i.ipcRenderer.on("download-progress",function(u,_){!_||(console.log(u,_),_.progress=Number(_.progress.toFixed(1)),(_.progress-r.dlProgress.progress>1||_.progress===100)&&(console.log("progress:",_),r.dlProgress=_))}),i.ipcRenderer.on("update-completed",function(u,_){if(r.updating=!1,console.log("update-completed"),console.log(u,_),_){var k=r.$root.$t("check_for_update.update_fail")+"<br>"+s.errorMessageAssemble(_);r.$alert(k,"Error",{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}),r.updateFailed=!0,r.failReason=_}else r.restart_prompt=!0}),i.ipcRenderer.send("do-update",{version_info:n})},restart:function(){i.ipcRenderer.send("restart")},dlLink:function(n){var t;return this.sysInfo.platform==="win32"&&(t="win/PandaFan-".concat(this.sysInfo.platform,"-").concat(n,".exe")),this.sysInfo.platform==="darwin"&&(t="mac/PandaFan-".concat(n,".dmg"),this.sysInfo.arch==="arm64"&&(t="mac/PandaFan-arm64-".concat(n,".dmg"))),"https://xconf.oss-accelerate.aliyuncs.com/panda/dl/client/".concat(t)},openDir:function(n){i.shell.showItemInFolder(n)},byteHelper:function(n){var t=["b","kB","MB","GB","TB"],s=Math.floor(Math.log(n)/Math.log(1024));return(n/Math.pow(1024,Math.floor(s))).toFixed(1)+" "+t[s]}}},g=m,P=o(1454),b=o(51),w=Object(b.a)(g,a,l,!1,null,null,null),B=d.default=w.exports}}]);
