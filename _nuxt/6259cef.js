(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1172:function(t,e,s){var n=s(1239);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(2).default)("97170dcc",n,!0,{sourceMap:!1})},1231:function(t,e,s){t.exports=s.p+"img/1.d0f1b86.png"},1232:function(t,e,s){t.exports=s.p+"img/2.e1c2cf7.png"},1233:function(t,e,s){t.exports=s.p+"img/3.234095b.png"},1234:function(t,e,s){t.exports=s.p+"img/4.441b011.png"},1235:function(t,e,s){t.exports=s.p+"img/5.5894d9d.png"},1236:function(t,e,s){t.exports=s.p+"img/6.57c4089.png"},1237:function(t,e,s){t.exports=s.p+"img/7.7b940f7.png"},1238:function(t,e,s){"use strict";s(1172)},1239:function(t,e,s){var n=s(1)(!1);n.push([t.i,".clash-ss-container .el-select{width:100%}.clash-ss-container .qr{margin-top:2rem}.clash-ss-container .qr canvas{width:60vw}",""]),t.exports=n},1303:function(t,e,s){"use strict";s.r(e);s(62),s(39),s(27),s(23),s(9),s(40),s(28);var n=s(18),a=s(52);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}var i={data:function(){return{androidGuideLine:{},lineName:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){Object(n.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({apkDLLink:function(){return"https://".concat(this.staticFileDomain,"/apkdl/Clash_for_Android_2.0.16-universal.apk")},clash_config_link:function(){return console.log("--\x3e",this.current_service_cate),this.current_service?"https://".concat(this.staticFileDomain,"/clash/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""}},Object(a.b)(["staticFileDomain","siteURL"])),mounted:function(){console.log("[LOG] from shadowrocket.vue",this.current_service_cate)},methods:{changeGuideLine:function(t){this.lineName=t.name,this.androidGuideLine=t},updateSSMethod:function(){var t=this;return this.$axios.put("users/".concat(this.$store.state.view_as||this.$store.state.session.id,"/services/").concat(this.current_service.id,"/ss"),{ss_method:"aes-256-cfb"}).then((function(e){t.$message({type:"success",message:"更新成功，请按照教程配置设备"})})).catch((function(e){t.$message({type:"error",message:"更新失败"+e.message})}))}}},c=i,l=(s(1238),s(51)),o=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clash-ss-container"},[n("ol",[n("li",[n("span",{staticClass:"title"},[t._v("下载 Clash for Android")]),n("p",[t._v("前往 Play Store 搜索 Clash 下载最新版，如果您无法直接访问Play Store，我们为您准备了本地的下载地址"),n("br"),t._v("您可以下载到电脑上再导入至手机安装，或者在手机上输入地址直接下载安装"),n("br"),n("br"),n("span",{staticClass:"small"},[t._v("2.0.16 Universal 版本：")]),n("el-tooltip",{attrs:{content:t.apkDLLink,placement:"top",effect:"light"}},[n("el-input",{attrs:{type:"text",value:t.apkDLLink,readonly:""}})],1),n("i",{staticClass:"small"},[t._v("为防止漏输入内容，请将鼠标移动到地址上显示完整内容")]),n("center"),n("br"),n("i",[t._v("Clash for Android 为开源社区开发的的免费通用型客户端")]),n("br"),n("i",[t._v("基础配置外的功能请自行参考网络资料进行了解")])],1)]),n("li",[n("span",{staticClass:"title"},[t._v("导入配置文件")]),t._m(0),n("el-tooltip",{attrs:{content:t.clash_config_link,placement:"top",effect:"light"}},[n("el-input",{attrs:{type:"text",value:t.clash_config_link,readonly:""}})],1),n("i",{staticClass:"small"},[t._v("为防止漏输入内容，请将鼠标移动到地址上显示完整内容")]),n("br"),n("br"),n("el-row",{attrs:{type:"flex",align:"center",gutter:10}},[n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:s(1231)}}),n("span",{staticClass:"small"},[t._v("1. Profiles")])]),n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:s(1232)}}),n("span",{staticClass:"small"},[t._v("2. New Profile")])])],1),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:s(1233)}}),n("span",{staticClass:"small"},[t._v("3. URL")])]),n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:s(1234)}}),n("span",{staticClass:"small"},[t._v("4. 输入名称和配置文件地址")])])],1),n("br"),n("hr"),n("p",[t._v("导入成功后，点击刚导入的配置文件使其被选中，然后点左上角按钮返回主界面")]),n("el-row",[n("el-col",{attrs:{span:24,align:"center"}},[n("img",{attrs:{src:s(1235)}}),n("span",{staticClass:"small"},[t._v("5. 选中刚才导入的配置文件")])])],1)],1),n("li",[n("span",{staticClass:"title"},[t._v("完成，开始使用")]),t._m(1),t._m(2),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:s(1236)}}),n("span",{staticClass:"small"},[t._v("6. 连接")])]),n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:s(1237)}}),n("span",{staticClass:"small"},[t._v("7. 断开和其他")])])],1)],1),t._m(3),t._m(4)])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("打开 Clash for Android，进入"),s("code",[t._v("Profiles")]),t._v("- "),s("code",[t._v("New Profile")]),t._v("-"),s("code",[t._v("URL")]),t._v("在 Name 栏目输入 PandaFan，然后在URL栏目输入下面的配置文件地址（为防输错，请复制粘贴）\n完成后请点右上角的 ✔️ 符号保存")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("回到主界面后点击最上面写着"),s("code",[t._v("Stopped")]),t._v("按钮即可连接，连接成功后显示"),s("code",[t._v("Running")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("连接成功后点击"),s("code",[t._v("Proxy")]),t._v("可进入线路选择界面，默认为自动选择线路，您可以手动选择想要使用的任意线路")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"title"},[t._v("注意事项")]),s("p",[t._v("- Clash for Android默认会按照配置规则自动分流，除此之外，您还可以在Settings - Proxy - Access Control 界面设置勾选完全不需要走代理的App等功能")]),s("p",[t._v("- 目前 Clash for Android 还处在积极开发状态，各项功能可能不是非常完善，若您遇到问题请及时向开发者反馈")]),s("p",[t._v("- Clash for Android 非PandaFan开发/提供")]),s("p",[t._v("- 更多关于 Clash for Android 的使用方法可以联系 App 作者获取支持")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"title"},[t._v("更新线路、配置")]),s("p",[t._v("- 当您在PandaFan的网站上修改了自定义代理列表，或者PandaFan提供的线路发生变动时候，您需要更新您的配置")]),s("p",[t._v("- 只需在步骤2最后的位置，点击配置文件右侧的按钮即可更新")])])}],!1,null,null,null);e.default=o.exports}}]);