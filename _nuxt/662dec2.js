(window.webpackJsonp=window.webpackJsonp||[]).push([[2,17,20],{1070:function(e,t,r){var content=r(1104);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("0b05214c",content,!0,{sourceMap:!1})},1071:function(e,t,r){var content=r(1106);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("3698d0cc",content,!0,{sourceMap:!1})},1100:function(e,t,r){var n=r(295);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},1101:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},1102:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},1103:function(e,t,r){"use strict";r(1070)},1104:function(e,t,r){var n=r(57)((function(i){return i[1]}));n.push([e.i,".server-mode-selector-container{position:fixed;bottom:2rem;padding:.5rem;width:100%;background:#34495e}.server-mode-selector-container label{font-weight:500}.server-mode-selector-container .el-form-item__label{color:#f4f7fc}.server-mode-selector-container .el-select input{background:#2c3e50;border:1px solid #f4f7fc;color:#f4f7fc;border-radius:0}.server-mode-selector-container .el-select .el-input .el-input__inner{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.server-mode-selector-container .el-select .el-input.is-disabled .el-input__inner{background:transparent;color:#f4f7fc}.server-mode-selector-container .el-select .el-input.is-disabled .el-input__suffix{display:none}",""]),e.exports=n},1105:function(e,t,r){"use strict";r(1071)},1106:function(e,t,r){var n=r(57)((function(i){return i[1]}));n.push([e.i,".oroxy-mode-selector-container{position:fixed;bottom:2rem;padding:.5rem;width:100%}.oroxy-mode-selector-container .el-form-item__label{color:#f4f7fc}.oroxy-mode-selector-container .el-select input{background:#2c3e50;border:1px solid #f4f7fc;color:#f4f7fc;border-radius:0}.oroxy-mode-selector-container label{font-weight:500}",""]),e.exports=n},1134:function(e,t,r){"use strict";r.r(t);var n=r(17),o={data:function(){return{}},computed:{show_access_mode:function(){return this.runTimeState.show_access_mode},show_smart_route:function(){return this.runTimeState.show_smart_route},server_mode_label:function(){return this.$t("settings_page.connect_protocol.title")},server_mode_str:function(){return{ssltide:"SSLTide",ss:"Shadowsocks(R)",v2:"V2Ray",auto:"自动"}[this.$store.state.runTimeState.server_mode]},smart_route_str:function(){return""},servermode:{get:function(){return console.log("servermode------\x3e",this.runTimeState.servermode),this.runTimeState.servermode},set:function(e){this.$store.commit("runTimeState",{servermode:e})}},smart_route:{get:function(){return console.log("smart_route------\x3e",this.runTimeState.smart_route),this.runTimeState.smart_route},set:function(e){n.ipcRenderer.send("update-smart-route",e),this.$store.commit("runTimeState",{smart_route:e})}},workmode:{get:function(){return console.log("workmode------\x3e",this.runTimeState.workmode),this.runTimeState.workmode},set:function(e){this.$store.commit("runTimeState",{workmode:e})}}},methods:{}},l=(r(1103),r(44)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"server-mode-selector-container"},[e.show_smart_route?r("div",[r("el-form",{ref:"form",staticClass:"full-width no-margin",attrs:{"label-width":"60%",size:"small","label-position":"left"}},[r("el-form-item",{staticClass:"no-margin",attrs:{label:e.$t("settings_page.work_mode.title")}},[r("el-select",{staticClass:"full-width no-margin",attrs:{placeholder:"选择代理模式"},model:{value:e.smart_route,callback:function(t){e.smart_route=t},expression:"smart_route"}},[r("el-option",{attrs:{label:e.$tc("settings_page.work_mode.options",1),value:!0}}),r("el-option",{attrs:{label:e.$tc("settings_page.work_mode.options",2),value:!1}})],1)],1)],1)],1):e._e(),e.show_access_mode?r("div",[r("el-form",{ref:"form",staticClass:"full-width no-margin",attrs:{"label-width":"60%",size:"small","label-position":"left"}},[r("el-form-item",{staticClass:"no-margin",attrs:{label:e.server_mode_label}},[r("el-select",{staticClass:"full-width no-margin",attrs:{placeholder:"选择接入模式",disabled:"connected"==e.runTimeState.connect_state.status},model:{value:e.servermode,callback:function(t){e.servermode=t},expression:"servermode"}},[r("el-option",{attrs:{label:e.$t("auto"),value:"auto"}}),r("el-option",{attrs:{label:"SSLTide",value:"ssltide",disabled:!e.runTimeState.selected_line.ssltide}}),r("el-option",{attrs:{label:"Shadowsocks(R)",value:"ss",disabled:!e.runTimeState.selected_line.ss}}),r("el-option",{attrs:{label:"V2Ray(VMESS)",value:"v2",disabled:!e.runTimeState.selected_line.v2}})],1)],1)],1)],1):e._e()])}),[],!1,null,null,null);t.default=component.exports},1137:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(1100),o=r(1101),l=r(205),c=r(1102);function d(e){return n(e)||o(e)||l(e)||c()}},1144:function(e,t,r){var content=r(1195);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("36ffc860",content,!0,{sourceMap:!1})},1174:function(e,t,r){"use strict";r.r(t);r(59),r(23),r(20),r(8),r(45),r(83),r(289),r(82),r(136),r(27);var n=r(1137),o=r(16),l=r(46),c=r(17),d=r(1134),m=r(1175);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var h={components:{ModeSelection:d.default,ProxyModeSelect:m.default},data:function(){return{card_style:{"padding-top":0},selected_line:{},actualServerUsedByClash:null}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({sortedLines:function(){var e=this,t=["cn1","gb","jp2","sg2"],r=["tw1","tw2","tw3","hk2","la3","la2","la1"];return Object(n.a)(this.current_lines).sort((function(a,b){if(e.getLatencyResult(a)&&e.getLatencyResult(b))return e.getLatencyResult(a)-e.getLatencyResult(b);if(!a.name||!b.name)return 0;var n=a.name.split(" ")[0].toLowerCase(),o=b.name.split(" ")[0].toLowerCase();return t.includes(n)?1:r.includes(n)?-1:n>o?1:-1}))},sortedLinesWithAuto:function(){return this.coreIsClash?[this.auto_server].concat(Object(n.a)(this.sortedLines)):this.sortedLines},show_access_mode:function(){return this.runTimeState.show_access_mode},show_smart_route:function(){return this.runTimeState.show_smart_route},listStyle:function(){var base=3.2;return console.log(this.show_access_mode),console.log(this.show_smart_route),this.show_access_mode&&(base+=2.8),this.show_smart_route&&(base+=2.8),console.log(base),{bottom:base+"rem"}},pre_left:function(){return this.current_service.pre_quota>=1e3?"∞":(Number(this.current_service.pre_quota)-Number(this.current_service.pre_used)).toFixed(1)},pre_left_str:function(){return isNaN(Number(this.pre_left))?this.pre_left:"".concat(this.pre_left,"GB")},pre_used_str:function(){return this.current_service.pre_used.toFixed(1)+"GB"},auto_server:function(){return{is_auto:!0,name:this.$t("auto_server.name"),description:this.$t("auto_server.description")}},workmode:{get:function(){return console.log("workmode------\x3e",this.runTimeState.workmode),this.runTimeState.workmode},set:function(e){this.$store.commit("runTimeState",{workmode:e})}}},Object(l.b)(["speedTestResults"])),created:function(){var e=this;c.ipcRenderer.removeAllListeners("run-time-state-change"),c.ipcRenderer.removeAllListeners("selected_line-change"),c.ipcRenderer.on("selected_line-change",(function(t,r){e.changeSelectedLine(r)})),c.ipcRenderer.removeAllListeners("tcp-ping-reply"),c.ipcRenderer.on("tcp-ping-reply",(function(t,r){e.speedTestReply(r)})),this.coreIsClash&&(c.ipcRenderer.removeAllListeners("clash-speed-test-reply"),c.ipcRenderer.on("clash-speed-test-reply",(function(t,r){e.clashSpeedTestReply(r)})),c.ipcRenderer.removeAllListeners("clash-auto-server-change"),c.ipcRenderer.on("clash-auto-server-change",(function(t,r){console.log("clash auto server changed:",r),e.$notify({title:e.$t("new_server_selected")+r,type:"success",offset:20,duration:2500})})))},mounted:function(){var e=this;this.runTimeState.selected_line&&this.runTimeState.selected_line.name||(console.log("set default line.",this.sortedLines[0]),this.sortedLines[0]&&(this.changeSelectedLine(this.sortedLines[0]),this.sortedLines[0]||setTimeout((function(){e.changeSelectedLine(e.sortedLines[0])}),1e3)))},methods:{getFlagISO:function(line){if(!line.name)return"";var e=line.name.split(" ")[0].replace(/\d/g,"").toLowerCase();return{la:"us",ft:"us",sjc:"us"}[e]||e},getLatencyResult:function(line){return this.speedTestResults?this.speedTestResults[line.name]||this.speedTestResults[line.server]:(console.log("no speed result."),null)},changeSelectedLine:function(e){var t=this;if(e){if(console.log("ssl port:",e.ssltide_port),this.connected&&!this.coreIsClash)return console.log("Connected and not using Clash, ignoring.");if(e.premium&&this.pre_left<=0)return this.$confirm(this.$t("buy_premium_data.line_change_warning")).then((function(e){t.$router.push({path:"/dashboard/buy-premium-data/"})})).catch((function(e){}));if(this.$store.dispatch("runTimeState",{selected_line:e}),this.workmode=e.is_auto?"auto":"manual",this.connected&&this.coreIsClash)if(this.runTimeState.connect_state.line.name===e.name)console.log("same server, click ignored.");else{e.is_auto?c.ipcRenderer.send("clash",{action:"switchToAutoServer"}):c.ipcRenderer.send("clash",{action:"setProxy",arg:e.name});var r={line:JSON.parse(JSON.stringify(e)),servermode:this.runTimeState.servermode,status:"connected"};this.$store.dispatch("runTimeState",{connect_state:r}),c.ipcRenderer.send("user-info-update",4)}e.is_auto||"auto"===this.runTimeState.servermode||e[this.runTimeState.servermode]||(console.log("changing servermode..."),this.$store.dispatch("runTimeState",{servermode:"auto"}))}},performLatencyTest:function(){return this.coreIsClash&&this.connected?this.clashSpeedTest():this.tcpSpeedTest()},tcpSpeedTest:function(){var e=this;this.$message(this.$t("speed_test.notify")),this.sortedLines.forEach((function(element){var t=443;"home"===e.runTimeState.current_service_cate&&(t=8443);var r=element.ssltide_port||t;c.ipcRenderer.send("tcp-ping",{name:element.name,server:element.server,port:r,opt:{}})}))},clashSpeedTest:function(){var e=this;this.$message(this.$t("speed_test.notify")),this.sortedLines.forEach((function(element){c.ipcRenderer.send("clash-speed-test",{arg:{serverName:element.name,url:e.runTimeState.checkwebsite||"http://www.gstatic.com/generate_204",timeout:5e3}})}))},speedTestReply:function(e){console.log(e),this.$store.dispatch("speedTestResult",e)},clashSpeedTestReply:function(e){this.$store.dispatch("clashSpeedTestResult",e)},goBuyPremiumData:function(){var e=this;if(console.log("yay"),this.pre_left<=0)return this.$router.push({path:"/dashboard/buy-premium-data/"});this.$confirm(this.$t("buy_premium_data.redirect_confirm")).then((function(t){e.$router.push({path:"/dashboard/buy-premium-data/"})})).catch((function(e){}))}}},v=(r(1194),r(44)),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"server-list-container"},[r("div",{staticClass:"kept-space"}),r("div",{staticClass:"server-list",style:e.listStyle},[e._l(e.sortedLinesWithAuto,(function(line,t){return r("el-card",{key:line.name,staticClass:"line-container",class:{selected:e.runTimeState.selected_line.name==line.name,connected:"connected"==e.runTimeState.connect_state.status&&e.runTimeState.connect_state.line.name==line.name},attrs:{"body-style":e.card_style},nativeOn:{click:function(t){return e.changeSelectedLine(line)}}},[r("el-row",{staticClass:"line-content"},[r("h1",{staticClass:"title smooth"},[e.runTimeState.no_flag||line.is_auto?e._e():r("flag",{attrs:{iso:e.getFlagISO(line),squared:!1}}),r("span",[e._v(e._s(line.name))]),line.ratio>1?r("a",{staticClass:"label"},[r("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"将以实际使用量 x"+line.ratio+" 计入账号"}},[r("span",{attrs:{slot:"reference"},slot:"reference"},[e._v("x"+e._s(line.ratio))])])],1):e._e(),r("span",{directives:[{name:"show",rawName:"v-show",value:"connected"==e.runTimeState.connect_state.status&&e.runTimeState.connect_state.line.name==line.name,expression:"runTimeState.connect_state.status == 'connected' && runTimeState.connect_state.line.name == line.name"}],staticClass:"right"},[r("i",{staticClass:"right el-icon-success"})]),e.getLatencyResult(line)?r("span",{staticClass:"right label round success super-badge test-result"},[e.getLatencyResult(line)<5001?r("span",[e._v(e._s(e.getLatencyResult(line))),r("span",{staticClass:"small"},[e._v("ms")])]):e._e(),e.getLatencyResult(line)>5e3?r("span",[r("span",{staticClass:"small"},[e._v(e._s(e.$t("timeout")))])]):e._e()]):e._e(),line.perm&&"allplatform"==e.runTimeState.current_service_cate&&-1==line.perm.indexOf(2)?r("span",{staticClass:"right label round super-badge"},[e._v(e._s(e.$t("pro_only")))]):e._e(),line.premium?r("span",{staticClass:"right label round super-badge premium-badge"},[r("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"该线路消耗高级流量，本月已使用高级流量"+e.pre_used_str+" ，剩余"+e.pre_left_str},nativeOn:{click:function(t){return e.goBuyPremiumData(t)}}},[r("span",{attrs:{slot:"reference"},slot:"reference"},["∞"==e.pre_left_str?r("span",[e._v(e._s(e.pre_left_str)+e._s(e.$t("premium")))]):e._e(),e.pre_left>0?r("span",[e._v(e._s(e.$t("premium"))+" "+e._s(e.pre_left_str))]):e._e(),e.pre_left<=0?r("span",[e._v(e._s(e.$t("buy_premium_data.badge_hint")))]):e._e()])])],1):e._e()],1),r("h5",{staticClass:"description"},[r("span",[e._v(e._s(line.description))])])])],1)})),r("el-card",{staticClass:"utils"},[r("el-button",{attrs:{type:"primary"},on:{click:e.performLatencyTest}},[e._v(e._s(e.$t("speed_test.btn")))]),r("br"),r("br"),r("p",{staticClass:"small"},[e._v(e._s(e.$t("speed_test.desc")))])],1)],2),r("div",[r("ModeSelection")],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ModeSelection:r(1134).default})},1175:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{}},computed:{show_access_mode:function(){return this.runTimeState.show_access_mode},server_mode_str:function(){return{ssltide:"SSLTide",ss:"Shadowsocks(R)",v2:"V2Ray",auto:"自动"}[this.$store.state.runTimeState.server_mode]},servermode:{get:function(){return console.log("smode------\x3e",this.runTimeState.servermode),this.runTimeState.servermode},set:function(e){this.$store.commit("runTimeState",{servermode:e})}}},methods:{}},o=(r(1105),r(44)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"oroxy-mode-selector-container"},["manual"==e.runTimeState.workmode&&e.runTimeState.selected_line.server?r("div",[r("el-form",{ref:"form",staticClass:"full-width no-margin",attrs:{"label-width":"60%",size:"small","label-position":"left"}},[r("el-form-item",{staticClass:"no-margin",attrs:{label:"已选择 "+e.runTimeState.selected_line.name+"，接入模式："}},[r("el-select",{staticClass:"full-width no-margin",attrs:{placeholder:"选择接入模式"},model:{value:e.servermode,callback:function(t){e.servermode=t},expression:"servermode"}},[r("el-option",{attrs:{label:"自动（推荐）",value:"auto"}}),r("el-option",{attrs:{label:"SSLTide",value:"ssltide",disabled:!e.runTimeState.selected_line.ssltide}}),r("el-option",{attrs:{label:"Shadowsocks(R)",value:"ss",disabled:!e.runTimeState.selected_line.ss}}),r("el-option",{attrs:{label:"V2Ray(VMESS)",value:"v2",disabled:!e.runTimeState.selected_line.v2}})],1)],1)],1)],1):e._e()])}),[],!1,null,null,null);t.default=component.exports},1194:function(e,t,r){"use strict";r(1144)},1195:function(e,t,r){var n=r(57)((function(i){return i[1]}));n.push([e.i,".server-list-container{position:fixed;bottom:6.2rem;height:100vh}.server-list-container .utils{background:#2c3e50;text-align:center;border:none;border-radius:0}.server-list-container .utils *{color:#f9f9f9}.server-list-container .utils a{color:#1abc9c!important}.server-list-container .utils .el-button{background:transparent}.server-list-container .kept-space{position:fixed;top:0;left:0;height:1.5rem}.server-list-container .server-list{top:1.5rem;overflow-x:overlay;overflow-y:overlay;position:fixed}.server-list-container .server-list .el-card:hover{box-shadow:0 2px 12px 0 rgba(0,0,0,.2)}.server-list-container .server-list:hover::-webkit-scrollbar{width:2px;background-color:#2c3e50}.server-list-container .server-list::-webkit-scrollbar{width:0}.server-list-container .server-list::-webkit-scrollbar-track,.server-list-container .server-list::-webkit-scrollbar-track-piece{display:none}.server-list-container .server-list::-webkit-scrollbar-thumb{background:grey}.server-list-container .server-list .line-container{cursor:default;margin-bottom:1px;position:relative;border:none;border-radius:0;width:100vw;background:#2c3e50}.server-list-container .server-list .line-container .line-content{border:none;width:100%;padding-top:1rem}.server-list-container .server-list .line-container .line-content .super-badge{margin:0 .1rem 0 .5rem;color:#f9f9f9!important;background:#8e44ad}.server-list-container .server-list .line-container .line-content .super-badge.premium-badge{cursor:pointer}.server-list-container .server-list .line-container .line-content .super-badge.premium-badge .test-result{margin:0 1rem;background:#7f8c8d!important}.server-list-container .server-list .line-container .line-content .line-number{display:none;font-size:1rem;color:#95a5a6}.server-list-container .server-list .line-container .line-content .label{margin-left:1rem;font-size:.8rem}.server-list-container .server-list .line-container .line-content .title{font-size:1.3rem;font-weight:500;color:#bdc3c7}.server-list-container .server-list .line-container .line-content .title .flag-icon{margin-right:1rem}.server-list-container .server-list .line-container .line-content .description{margin-top:.5rem;font-weight:500;font-size:.8rem;color:#95a5a6}.server-list-container .server-list .line-container.connected{background:#16a085}.server-list-container .server-list .line-container.connected *{color:#fff!important}.server-list-container .server-list .line-container.selected{position:-webkit-sticky;position:sticky;top:0;bottom:0;z-index:999999;box-shadow:0 0 12px 5px rgba(0,0,0,.3)}.server-list-container .server-list .line-container.selected:not(.connected){background:#16a085}.server-list-container .server-list .line-container.selected:not(.connected) *{color:#fff}.server-list-container .server-list .line-container:hover .line-number{display:inline}.server-list-container .server-list .line-container:hover .line-number .title{padding-left:.5rem}.server-list-container .server-list .line-container:hover:not(.connected):not(.selected){background:#34495e}.server-list-container .server-list .line-container:hover:not(.connected):not(.selected) *{color:#bdc3c7}",""]),e.exports=n}}]);