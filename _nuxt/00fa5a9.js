(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1270:function(c,i,o){var _=o(1435);_.__esModule&&(_=_.default),typeof _=="string"&&(_=[[c.i,_,""]]),_.locals&&(c.exports=_.locals);var l=o(2).default,d=l("f5215aac",_,!0,{sourceMap:!1})},1434:function(c,i,o){"use strict";var _=o(1270),l=o.n(_)},1435:function(c,i,o){var _=o(1),l=_(!1);l.push([c.i,".update-container{height:100vh;padding:2rem .5rem .5rem;position:relative;color:#f4f7fc}.update-container h2{font-weight:500}.update-container .top-space{margin-top:1rem}.update-container .info-content,.update-container .info-header{color:#34495e;margin-bottom:.5rem;line-height:1.2}.update-container .info-header{color:#7f8c8d}.update-container .info-header h3{font-weight:400}.update-container .large-button{font-size:1.5rem}.update-container .dashboard-link{position:absolute;right:.5rem;bottom:.5rem}.update-container .menu-link{font-size:2rem;text-decoration:none;width:100%;display:block;margin-top:.5rem;padding-left:.5rem}.update-container .menu-link:hover{background:#1abc9c;color:#fff}",""]),c.exports=l},1477:function(c,i,o){"use strict";o.r(i);var _=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"update-container"},[t("center",[t("h1",[e._v(e._s(e.$t("check_for_update.page_title")))])]),t("br"),t("el-row",[t("el-col",{attrs:{span:12}},[t("h2",[e._v(e._s(e.$t("check_for_update.current_sys_info")))])]),t("el-col",{attrs:{span:12}},[t("h2",[e._v(e._s(e.sysInfo.platform)+" "+e._s(e.sysInfo.arch))])])],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("h2",[e._v(e._s(e.$t("check_for_update.current_core")))])]),t("el-col",{attrs:{span:12}},[t("h2",[e._v(e._s(e.appVersion))])])],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("h2",{staticClass:"thin"},[e._v(e._s(e.$t("check_for_update.latest_core")))])]),t("el-col",{attrs:{span:12}},[t("h2",{staticClass:"succes",on:{click:function(n){e.openSite(e.dlLink(e.latestVersion.stable))}}},[t("a",{staticClass:"success"},[e._v(e._s(e.latestVersion.stable)+" "+e._s(e.$t("check_for_update.download.stable")))])]),e.latestVersion.beta!=="-"?t("h2",{staticClass:"warning",on:{click:function(n){e.openSite(e.dlLink(e.latestVersion.beta))}}},[t("a",{staticClass:"warning"},[e._v(e._s(e.latestVersion.beta)+" "+e._s(e.$t("check_for_update.download.beta")))])]):e._e()])],1),t("div",[t("br"),t("hr"),t("br"),t("center",[t("h2",[e._v(e._s(e.$t("check_for_update.manual_only"))),t("br"),t("small",[e._v(e._s(e.$t("check_for_update.auto_after_update")))])]),t("br")]),e.sysInfo.platform=="darwin"?t("el-row",[t("p",[t("a",{on:{click:function(n){e.openSite(e.dlLink(e.latestVersion[e.showBranch||"stable"]))}}},[e._v(e._s(e.$t("check_for_update.click_to_download")))])]),t("p",[e._v(e._s(e.$t("check_for_update.mac.a"))),t("a",{on:{click:function(n){return e.openDir("/Applications/")}}},[e._v(e._s(e.$t("check_for_update.mac.b")))]),e._v(e._s(e.$t("check_for_update.mac.c")))])]):e._e(),e.sysInfo.platform=="win32"?t("el-row",[t("p",[t("a",{on:{click:function(n){e.openSite(e.dlLink(e.latestVersion[e.showBranch||"stable"]))}}},[e._v(e._s(e.$t("check_for_update.click_to_download")))])]),t("p",[e._v(e._s(e.$t("check_for_update.win.a")))]),t("p",[e._v(e._s(e.$t("check_for_update.win.b")))]),t("br"),t("h4",[e._v(e._s(e.$t("check_for_update.win.c")))]),t("p",[e._v(e._s(e.$t("check_for_update.win.d")))]),t("br"),t("p",[e._v(e._s(e.$t("check_for_update.win.e")))]),t("br"),t("p",[e._v(e._s(e.$t("check_for_update.win.f")))]),t("a",{on:{click:function(n){return e.openDir(e.appPath)}}},[e._v(e._s(e.appPath))])]):e._e()],1),t("a",{staticClass:"dashboard-link",on:{click:function(n){return e.$router.go(-1)}}},[e._v(" "+e._s(e.$t("back")))])],1)},l=[],d=o(205),g=o(9),s=o(13),p=o(1146),u=o.n(p),f={components:{VueMarkdown:u.a},data:function(){var a=o(107),t=s.remote.app.getAppPath(),n=s.remote.app.getVersion();return{appPath:t,updating:!1,appVersion:n,restart_prompt:!1,updateFailed:!1,dlProgress:{progress:0},showBranch:null,sysInfo:s.remote.process,latestVersion:{stable:"",beta:"-"}}},computed:{},created:function(){var a=this,t=this;this.$nextTick(function(){a.$nuxt.$loading.start(),a.$axios.get("funstuff/client_version").then(function(n){t.latestVersion=n.data}).catch(function(n){t.$alert("\u8BF7\u8FD4\u56DE\u7A0D\u540E\u91CD\u8BD5","\u83B7\u53D6\u7248\u672C\u4FE1\u606F\u5931\u8D25",{center:!0}).catch(function(r){})}).finally(function(){t.$nuxt.$loading.finish()})})},beforeDestroy:function(){s.ipcRenderer.removeAllListeners("download-progress"),s.ipcRenderer.removeAllListeners("update-info")},methods:{update:function(a){var t=this;this.updating=!0,s.ipcRenderer.removeAllListeners("download-progress"),s.ipcRenderer.on("download-progress",function(n,r){console.log("progress:",r),r.progress=Number(r.progress.toFixed(1)),t.dlProgress=r}),s.ipcRenderer.on("update-completed",function(n,r){t.updating=!1,console.log(r),r?(t.$message({message:"\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u5C1D\u8BD5\u624B\u52A8\u66F4\u65B0: "+r.message,type:"warning"}),t.updateFailed=!0):t.restart_prompt=!0}),s.ipcRenderer.send("do-update",{version_info:a})},restart:function(){s.ipcRenderer.send("restart")},dlLink:function(a){var t;return this.sysInfo.platform==="win32"&&(t="win/PandaFan-".concat(this.sysInfo.platform,"-").concat(this.sysInfo.arch,"-").concat(a,".zip")),this.sysInfo.platform==="darwin"&&(t="mac/PandaFan-".concat(a,".dmg")),"https://xconf.oss-accelerate.aliyuncs.com/panda/dl/client/".concat(t)},openDir:function(a){s.shell.showItemInFolder(a)},byteHelper:function(a){var t=["b","kB","MB","GB","TB"],n=Math.floor(Math.log(a)/Math.log(1024));return(a/Math.pow(1024,Math.floor(n))).toFixed(1)+" "+t[n]}}},h=f,b=o(1434),v=o(51),m=Object(v.a)(h,_,l,!1,null,null,null),k=i.default=m.exports}}]);
