(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1070:function(e,t,r){var content=r(1105);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(58).default)("0b05214c",content,!0,{sourceMap:!1})},1104:function(e,t,r){"use strict";r(1070)},1105:function(e,t,r){var o=r(57)((function(i){return i[1]}));o.push([e.i,".server-mode-selector-container{position:fixed;bottom:2rem;padding:.5rem;width:100%;background:#34495e}.server-mode-selector-container label{font-weight:500}.server-mode-selector-container .el-form-item__label{color:#f4f7fc}.server-mode-selector-container .el-select input{background:#2c3e50;border:1px solid #f4f7fc;color:#f4f7fc;border-radius:0}.server-mode-selector-container .el-select .el-input .el-input__inner{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.server-mode-selector-container .el-select .el-input.is-disabled .el-input__inner{background:transparent;color:#f4f7fc}.server-mode-selector-container .el-select .el-input.is-disabled .el-input__suffix{display:none}",""]),e.exports=o},1137:function(e,t,r){"use strict";r.r(t);var o=r(13),n={data:function(){return{}},computed:{show_access_mode:function(){return this.runTimeState.show_access_mode},show_smart_route:function(){return this.runTimeState.show_smart_route},server_mode_label:function(){return this.$t("settings_page.connect_protocol.title")},server_mode_str:function(){return{ssltide:"SSLTide",ss:"Shadowsocks(R)",v2:"V2Ray",trojan:"Trojan",auto:"自动"}[this.$store.state.runTimeState.server_mode]},coreSupportTrojan:function(){return this.versionNewerThan("1.8.3")>0},smart_route_str:function(){return""},servermode:{get:function(){return console.log("servermode------\x3e",this.runTimeState.servermode),this.runTimeState.servermode},set:function(e){this.$store.commit("runTimeState",{servermode:e})}},smart_route:{get:function(){return console.log("smart_route------\x3e",this.runTimeState.smart_route),this.runTimeState.smart_route},set:function(e){o.ipcRenderer.send("update-smart-route",e),this.$store.commit("runTimeState",{smart_route:e})}},workmode:{get:function(){return console.log("workmode------\x3e",this.runTimeState.workmode),this.runTimeState.workmode},set:function(e){this.$store.commit("runTimeState",{workmode:e})}}},methods:{}},l=(r(1104),r(44)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"server-mode-selector-container"},[e.show_smart_route?r("div",[r("el-form",{ref:"form",staticClass:"full-width no-margin",attrs:{"label-width":"60%",size:"small","label-position":"left"}},[r("el-form-item",{staticClass:"no-margin",attrs:{label:e.$t("settings_page.work_mode.title")}},[r("el-select",{staticClass:"full-width no-margin",attrs:{placeholder:"选择代理模式"},model:{value:e.smart_route,callback:function(t){e.smart_route=t},expression:"smart_route"}},[r("el-option",{attrs:{label:e.$tc("settings_page.work_mode.options",1),value:!0}}),r("el-option",{attrs:{label:e.$tc("settings_page.work_mode.options",2),value:!1}})],1)],1)],1)],1):e._e(),e.show_access_mode?r("div",[r("el-form",{ref:"form",staticClass:"full-width no-margin",attrs:{"label-width":"60%",size:"small","label-position":"left"}},[r("el-form-item",{staticClass:"no-margin",attrs:{label:e.server_mode_label}},[r("el-select",{staticClass:"full-width no-margin",attrs:{placeholder:"选择接入模式",disabled:"connected"==e.runTimeState.connect_state.status},model:{value:e.servermode,callback:function(t){e.servermode=t},expression:"servermode"}},[r("el-option",{attrs:{label:e.$t("auto"),value:"auto"}}),r("el-option",{attrs:{label:"SSLTide",value:"ssltide",disabled:!e.runTimeState.selected_line.ssltide}}),r("el-option",{attrs:{label:"Trojan",value:"trojan",disabled:!e.runTimeState.selected_line.trojan||!e.coreSupportTrojan}}),r("el-option",{attrs:{label:"V2Ray(VMESS)",value:"v2",disabled:!e.runTimeState.selected_line.v2}})],1)],1)],1)],1):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);