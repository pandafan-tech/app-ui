(window.webpackJsonp=window.webpackJsonp||[]).push([[3,18,29,30],{1150:function(i,c,t){"use strict";t.d(c,"a",function(){return g});var s=t(142);function a(m){if(Array.isArray(m))return Object(s.a)(m)}var v=t(208),y=t(108);function f(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(m){return a(m)||Object(v.a)(m)||Object(y.a)(m)||f()}},1167:function(i,c,t){var s=t(1223);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);var a=t(2).default,v=a("ccd943a2",s,!0,{sourceMap:!1})},1168:function(i,c,t){var s=t(1225);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);var a=t(2).default,v=a("7bb8e643",s,!0,{sourceMap:!1})},1169:function(i,c,t){var s=t(1227);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);var a=t(2).default,v=a("f6804874",s,!0,{sourceMap:!1})},1222:function(i,c,t){"use strict";var s=t(1167),a=t.n(s)},1223:function(i,c,t){var s=t(1),a=s(!1);a.push([i.i,".server-mode-selector-container{position:fixed;bottom:2rem;padding:.5rem;width:100%;background:#34495e}.server-mode-selector-container label{font-weight:500}.server-mode-selector-container .el-form-item__label{color:#f4f7fc}.server-mode-selector-container .el-select input{background:#2c3e50;border:1px solid #f4f7fc;color:#f4f7fc;border-radius:0}.server-mode-selector-container .el-select .el-input .el-input__inner{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.server-mode-selector-container .el-select .el-input.is-disabled .el-input__inner{background:transparent;color:#f4f7fc}.server-mode-selector-container .el-select .el-input.is-disabled .el-input__suffix{display:none}",""]),i.exports=a},1224:function(i,c,t){"use strict";var s=t(1168),a=t.n(s)},1225:function(i,c,t){var s=t(1),a=s(!1);a.push([i.i,".left-space[data-v-54224be0]{margin-left:1rem}",""]),i.exports=a},1226:function(i,c,t){"use strict";var s=t(1169),a=t.n(s)},1227:function(i,c,t){var s=t(1),a=s(!1);a.push([i.i,".left-space[data-v-5610ec63]{margin-left:1rem}",""]),i.exports=a},1254:function(i,c,t){"use strict";t.r(c);var s=function(){var _=this,l=_.$createElement,d=_._self._c||l;return d("div",{staticClass:"server-mode-selector-container"},[_.show_smart_route?d("div",[d("el-form",{ref:"form",staticClass:"full-width no-margin",attrs:{"label-width":"60%",size:"small","label-position":"left"}},[d("el-form-item",{staticClass:"no-margin",attrs:{label:_.$t("settings_page.work_mode.title")}},[d("el-select",{staticClass:"full-width no-margin",attrs:{placeholder:"\u9009\u62E9\u4EE3\u7406\u6A21\u5F0F"},model:{value:_.smart_route,callback:function(p){_.smart_route=p},expression:"smart_route"}},[d("el-option",{attrs:{label:_.$tc("settings_page.work_mode.options",1),value:!0}}),d("el-option",{attrs:{label:_.$tc("settings_page.work_mode.options",2),value:!1}})],1)],1)],1)],1):_._e(),_.show_access_mode?d("div",[d("el-form",{ref:"form",staticClass:"full-width no-margin",attrs:{"label-width":"60%",size:"small","label-position":"left"}},[d("el-form-item",{staticClass:"no-margin",attrs:{label:_.server_mode_label}},[d("el-select",{staticClass:"full-width no-margin",attrs:{placeholder:"\u9009\u62E9\u63A5\u5165\u6A21\u5F0F",disabled:_.runTimeState.connect_state.status=="connected"},model:{value:_.servermode,callback:function(p){_.servermode=p},expression:"servermode"}},[d("el-option",{attrs:{label:_.$t("auto"),value:"auto"}}),d("el-option",{attrs:{label:"SSLTide",value:"ssltide",disabled:!_.runTimeState.selected_line.ssltide}}),d("el-option",{attrs:{label:"Trojan",value:"trojan",disabled:!_.runTimeState.selected_line.trojan||!_.coreSupportTrojan}}),d("el-option",{attrs:{label:"V2Ray(VMESS)",value:"v2",disabled:!_.runTimeState.selected_line.v2}})],1)],1)],1)],1):_._e()])},a=[],v=t(19),y={data:function(){return{}},computed:{show_access_mode:function(){return this.runTimeState.show_access_mode},show_smart_route:function(){return this.runTimeState.show_smart_route},server_mode_label:function(){return this.$t("settings_page.connect_protocol.title")},server_mode_str:function(){return{ssltide:"SSLTide",ss:"Shadowsocks(R)",v2:"V2Ray",trojan:"Trojan",auto:"\u81EA\u52A8"}[this.$store.state.runTimeState.server_mode]},coreSupportTrojan:function(){var l=this.versionNewerThan("1.8.3");return l>0},smart_route_str:function(){return""},servermode:{get:function(){return console.log("servermode------>",this.runTimeState.servermode),this.runTimeState.servermode},set:function(l){this.$store.commit("runTimeState",{servermode:l})}},smart_route:{get:function(){return console.log("smart_route------>",this.runTimeState.smart_route),this.runTimeState.smart_route},set:function(l){v.ipcRenderer.send("update-smart-route",l),this.$store.commit("runTimeState",{smart_route:l})}},workmode:{get:function(){return console.log("workmode------>",this.runTimeState.workmode),this.runTimeState.workmode},set:function(l){this.$store.commit("runTimeState",{workmode:l})}}},methods:{}},f=y,g=t(1222),m=t(51),S=Object(m.a)(f,s,a,!1,null,null,null),j=c.default=S.exports},1266:function(i,c,t){var s=t(1331);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);var a=t(2).default,v=a("1d92baf5",s,!0,{sourceMap:!1})},1304:function(i,c,t){"use strict";t.r(c);var s=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"server-list-container"},[r("div",{staticClass:"kept-space"}),r("div",{staticClass:"server-list",style:e.listStyle},[e._l(e.sortedLinesWithAuto,function(o,h){return r("el-card",{key:o.name,staticClass:"line-container",class:{selected:e.runTimeState.selected_line.name==o.name,connected:e.runTimeState.connect_state.status=="connected"&&e.runTimeState.connect_state.line.name==o.name},attrs:{"body-style":e.card_style},nativeOn:{click:function(b){return e.changeSelectedLine(o)}}},[r("el-row",{staticClass:"line-content"},[r("h1",{staticClass:"title smooth"},[!e.runTimeState.no_flag&&!o.is_auto?r("flag",{attrs:{iso:e.getFlagISO(o),squared:!1}}):e._e(),r("ServerName",{attrs:{server:o}}),o.ratio>1?r("a",{staticClass:"label"},[r("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"\u5C06\u4EE5\u5B9E\u9645\u4F7F\u7528\u91CF x"+o.ratio+" \u8BA1\u5165\u8D26\u53F7"}},[r("span",{attrs:{slot:"reference"},slot:"reference"},[e._v("x"+e._s(o.ratio))])])],1):e._e(),r("span",{directives:[{name:"show",rawName:"v-show",value:e.runTimeState.connect_state.status=="connected"&&e.runTimeState.connect_state.line.name==o.name,expression:"runTimeState.connect_state.status == 'connected' && runTimeState.connect_state.line.name == line.name"}],staticClass:"right"},[r("i",{staticClass:"right el-icon-success"})]),e.getLatencyResult(o)?r("span",{staticClass:"right label round success super-badge test-result"},[e.getLatencyResult(o)<5001?r("span",[e._v(e._s(e.getLatencyResult(o))),r("span",{staticClass:"small"},[e._v("ms")])]):e._e(),e.getLatencyResult(o)>5e3?r("span",[r("span",{staticClass:"small"},[e._v(e._s(e.$t("timeout")))])]):e._e()]):e._e(),o.perm&&e.runTimeState.current_service_cate=="allplatform"&&o.perm.indexOf(2)==-1?r("span",{staticClass:"right label round super-badge"},[e._v(e._s(e.$t("pro_only")))]):e._e(),o.premium?r("span",{staticClass:"right label round super-badge premium-badge"},[r("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:e.$tc("buy_premium_data.premium_cost_hint",e.pre_left_str)},nativeOn:{click:function(b){return e.goBuyPremiumData.apply(null,arguments)}}},[r("span",{attrs:{slot:"reference"},slot:"reference"},[e.pre_left_str=="\u221E"?r("span",[e._v(e._s(e.pre_left_str)+e._s(e.$t("premium")))]):e._e(),e.pre_left>0?r("span",[e._v(e._s(e.$t("premium"))+" "+e._s(e.pre_left_str))]):e._e(),e.pre_left<=0?r("span",[e._v(e._s(e.$t("buy_premium_data.badge_hint")))]):e._e()])])],1):e._e()],1),r("h5",{staticClass:"description"},[r("ServerDescription",{attrs:{server:o}})],1)])],1)}),r("el-card",{staticClass:"utils"},[r("el-button",{attrs:{type:"primary"},on:{click:e.performLatencyTest}},[e._v(e._s(e.$t("speed_test.btn")))]),r("br"),r("br"),r("p",{staticClass:"small"},[e._v(e._s(e.$t("speed_test.desc")))])],1)],2),r("div",[r("ModeSelection")],1)])},a=[],v=t(62),y=t(39),f=t(27),g=t(23),m=t(9),S=t(40),j=t(76),_=t(205),l=t(63),d=t(141),p=t(28),T=t(1150),C=t(18),w=t(52),u=t(19),P=t(1254);function L(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(h){return Object.getOwnPropertyDescriptor(e,h).enumerable})),r.push.apply(r,o)}return r}function E(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?L(Object(r),!0).forEach(function(o){Object(C.a)(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}var $={components:{ModeSelection:P.default},data:function(){return{card_style:{"padding-top":0},selected_line:{},actualServerUsedByClash:null}},computed:E({sortedLines:function(){var n=this,r=["cn1","gb","jp2","sg2","au"],o=["tw1","tw2","tw3","hk2","la3","la2","la1"],h=Object(T.a)(this.current_lines).sort(function(b,O){if(n.getLatencyResult(b)&&n.getLatencyResult(O))return n.getLatencyResult(b)-n.getLatencyResult(O);if(!b.name||!O.name)return 0;var x=b.name.split(" ")[0].toLowerCase(),A=O.name.split(" ")[0].toLowerCase();return r.includes(x)?1:o.includes(x)?-1:x>A?1:-1});return h},sortedLinesWithAuto:function(){return this.coreIsClash?[this.auto_server].concat(Object(T.a)(this.sortedLines)):this.sortedLines},show_access_mode:function(){return this.runTimeState.show_access_mode},show_smart_route:function(){return this.runTimeState.show_smart_route},listStyle:function(){var n=3.2;return console.log(this.show_access_mode),console.log(this.show_smart_route),this.show_access_mode&&(n+=2.8),this.show_smart_route&&(n+=2.8),console.log(n),{bottom:n+"rem"}},pre_left:function(){return this.current_service.pre_quota>=1e3?"\u221E":(Number(this.current_service.pre_quota)-Number(this.current_service.pre_used)).toFixed(1)},pre_left_str:function(){return isNaN(Number(this.pre_left))?this.pre_left:"".concat(this.pre_left,"GB")},pre_used_str:function(){return this.current_service.pre_used.toFixed(1)+"GB"},auto_server:function(){return{is_auto:!0,name:this.$t("auto_server.name"),description:this.$t("auto_server.description")}},workmode:{get:function(){return console.log("workmode------>",this.runTimeState.workmode),this.runTimeState.workmode},set:function(n){this.$store.commit("runTimeState",{workmode:n})}}},Object(w.b)(["speedTestResults"])),created:function(){var n=this;u.ipcRenderer.removeAllListeners("run-time-state-change"),u.ipcRenderer.removeAllListeners("selected_line-change"),u.ipcRenderer.on("selected_line-change",function(r,o){n.changeSelectedLine(o)}),u.ipcRenderer.removeAllListeners("tcp-ping-reply"),u.ipcRenderer.on("tcp-ping-reply",function(r,o){n.speedTestReply(o)}),this.coreIsClash&&(u.ipcRenderer.removeAllListeners("clash-speed-test-reply"),u.ipcRenderer.on("clash-speed-test-reply",function(r,o){n.clashSpeedTestReply(o)}),u.ipcRenderer.removeAllListeners("clash-auto-server-change"),u.ipcRenderer.on("clash-auto-server-change",function(r,o){console.log("clash auto server changed:",o),n.$notify({title:n.$t("new_server_selected")+o,type:"success",offset:20,duration:2500})}))},mounted:function(){var n=this;(!this.runTimeState.selected_line||!this.runTimeState.selected_line.name)&&(console.log("set default line.",this.sortedLines[0]),this.sortedLines[0]&&(this.changeSelectedLine(this.sortedLines[0]),this.sortedLines[0]||setTimeout(function(){n.changeSelectedLine(n.sortedLines[0])},1e3)))},methods:{getFlagISO:function(n){if(!n.name)return"";var r=n.name.split(" ")[0].replace(/\d/g,"").toLowerCase(),o={la:"us",ft:"us",sjc:"us"};return o[r]||r},getLatencyResult:function(n){return this.speedTestResults?this.speedTestResults[n.name]||this.speedTestResults[n.server]:(console.log("no speed result."),null)},changeSelectedLine:function(n){var r=this;if(!!n){if(console.log("ssl port:",n.ssltide_port),this.connected&&!this.coreIsClash)return console.log("Connected and not using Clash, ignoring.");if(n.premium&&this.pre_left<=0)return this.$confirm(this.$t("buy_premium_data.line_change_warning")).then(function(h){r.$router.push({path:"/dashboard/buy-premium-data/"})}).catch(function(h){});if(this.$store.dispatch("runTimeState",{selected_line:n}),this.workmode=n.is_auto?"auto":"manual",this.connected&&this.coreIsClash)if(this.runTimeState.connect_state.line.name===n.name)console.log("same server, click ignored.");else{n.is_auto?u.ipcRenderer.send("clash",{action:"switchToAutoServer"}):u.ipcRenderer.send("clash",{action:"setProxy",arg:n.name});var o={line:JSON.parse(JSON.stringify(n)),servermode:this.runTimeState.servermode,status:"connected"};this.$store.dispatch("runTimeState",{connect_state:o}),u.ipcRenderer.send("user-info-update",4)}!n.is_auto&&this.runTimeState.servermode!=="auto"&&!n[this.runTimeState.servermode]&&(console.log("changing servermode..."),this.$store.dispatch("runTimeState",{servermode:"auto"}))}},performLatencyTest:function(){return this.coreIsClash?this.connected?this.clashSpeedTest():this.tcpSpeedTest():this.tcpSpeedTest()},tcpSpeedTest:function(){var n=this;this.$message(this.$t("speed_test.notify")),this.sortedLines.forEach(function(r){var o=443;n.runTimeState.current_service_cate==="home"&&(o=8443);var h=r.ssltide_port||o;u.ipcRenderer.send("tcp-ping",{name:r.name,server:r.server,port:h,opt:{}})})},clashSpeedTest:function(){var n=this;this.$message(this.$t("speed_test.notify")),this.sortedLines.forEach(function(r){u.ipcRenderer.send("clash-speed-test",{arg:{serverName:r.name,url:n.runTimeState.checkwebsite||"http://www.gstatic.com/generate_204",timeout:5e3}})})},speedTestReply:function(n){console.log(n),this.$store.dispatch("speedTestResult",n)},clashSpeedTestReply:function(n){this.$store.dispatch("clashSpeedTestResult",n)},goBuyPremiumData:function(){var n=this;console.log("yay");var r="/buy-service/?cate=allplatform&time=0";if(this.pre_left<=0)return this.$router.push({path:r});this.$confirm(this.$t("buy_premium_data.redirect_confirm")).then(function(o){n.$router.push({path:r})}).catch(function(o){})}}},D=$,I=t(1330),M=t(51),R=Object(M.a)(D,s,a,!1,null,null,null),N=c.default=R.exports;installComponents(R,{ServerName:t(1305).default,ServerDescription:t(1306).default,ModeSelection:t(1254).default})},1305:function(i,c,t){"use strict";t.r(c);var s=function(){var l=this,d=l.$createElement,p=l._self._c||d;return p("span",[l._v(l._s(l.name))])},a=[],v=t(141),y=t(28),f={name:"ServerName",props:{server:{type:Object,default:function(){}}},computed:{name:function(){return this.$i18n.locale==="zh"?this.server.name:this.server.name.split(" ")[0]}}},g=f,m=t(1224),S=t(51),j=Object(S.a)(g,s,a,!1,null,"54224be0",null),_=c.default=j.exports},1306:function(i,c,t){"use strict";t.r(c);var s=function(){var l=this,d=l.$createElement,p=l._self._c||d;return p("span",[l._v(l._s(l.description))])},a=[],v=t(28),y=t(106),f={name:"ServerDescription",props:{server:{type:Object,default:function(){}}},computed:{description:function(){return this.$i18n.locale==="zh"||this.server.name.startsWith("AUTO")?this.server.description:this.server.name.startsWith("CN")?"Specially optimized for access from China.":""}}},g=f,m=t(1226),S=t(51),j=Object(S.a)(g,s,a,!1,null,"5610ec63",null),_=c.default=j.exports},1330:function(i,c,t){"use strict";var s=t(1266),a=t.n(s)},1331:function(i,c,t){var s=t(1),a=s(!1);a.push([i.i,".server-list-container{position:fixed;bottom:6.2rem;height:100vh}.server-list-container .utils{background:#2c3e50;text-align:center;border:none;border-radius:0}.server-list-container .utils *{color:#f9f9f9}.server-list-container .utils a{color:#1abc9c!important}.server-list-container .utils .el-button{background:transparent}.server-list-container .kept-space{position:fixed;top:0;left:0;height:1.5rem}.server-list-container .server-list{top:1.5rem;overflow-x:overlay;overflow-y:overlay;position:fixed}.server-list-container .server-list .el-card:hover{box-shadow:0 2px 12px 0 rgba(0,0,0,.2)}.server-list-container .server-list:hover::-webkit-scrollbar{width:2px;background-color:#2c3e50}.server-list-container .server-list::-webkit-scrollbar{width:0}.server-list-container .server-list::-webkit-scrollbar-track,.server-list-container .server-list::-webkit-scrollbar-track-piece{display:none}.server-list-container .server-list::-webkit-scrollbar-thumb{background:grey}.server-list-container .server-list .line-container{cursor:default;margin-bottom:1px;position:relative;border:none;border-radius:0!important;width:100vw;background:#2c3e50}.server-list-container .server-list .line-container .line-content{border:none;width:100%;padding-top:1rem}.server-list-container .server-list .line-container .line-content .super-badge{margin:0 .1rem 0 .5rem;color:#f9f9f9!important;background:#8e44ad}.server-list-container .server-list .line-container .line-content .super-badge.premium-badge{cursor:pointer}.server-list-container .server-list .line-container .line-content .super-badge.premium-badge .test-result{margin:0 1rem;background:#7f8c8d!important}.server-list-container .server-list .line-container .line-content .line-number{display:none;font-size:1rem;color:#95a5a6}.server-list-container .server-list .line-container .line-content .label{margin-left:1rem;font-size:.8rem}.server-list-container .server-list .line-container .line-content .title{font-size:1.3rem;font-weight:500;color:#bdc3c7}.server-list-container .server-list .line-container .line-content .title .flag-icon{margin-right:1rem}.server-list-container .server-list .line-container .line-content .description{margin-top:.5rem;font-weight:500;font-size:.8rem;color:#95a5a6}.server-list-container .server-list .line-container.connected{background:#16a085}.server-list-container .server-list .line-container.connected *{color:#fff!important}.server-list-container .server-list .line-container.selected{position:-webkit-sticky;position:sticky;top:0;bottom:0;z-index:999999;box-shadow:0 0 12px 5px rgba(0,0,0,.3)}.server-list-container .server-list .line-container.selected:not(.connected){background:#16a085}.server-list-container .server-list .line-container.selected:not(.connected) *{color:#fff}.server-list-container .server-list .line-container:hover .line-number{display:inline}.server-list-container .server-list .line-container:hover .line-number .title{padding-left:.5rem}.server-list-container .server-list .line-container:hover:not(.connected):not(.selected){background:#34495e}.server-list-container .server-list .line-container:hover:not(.connected):not(.selected) *{color:#bdc3c7}",""]),i.exports=a}}]);
