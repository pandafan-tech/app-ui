(window.webpackJsonp=window.webpackJsonp||[]).push([[43,12],{1173:function(t,e,r){var n=r(1242);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(2).default)("97170dcc",n,!0,{sourceMap:!1})},1234:function(t,e,r){t.exports=r.p+"img/1.d0f1b86.png"},1235:function(t,e,r){t.exports=r.p+"img/2.e1c2cf7.png"},1236:function(t,e,r){t.exports=r.p+"img/3.234095b.png"},1237:function(t,e,r){t.exports=r.p+"img/4.441b011.png"},1238:function(t,e,r){t.exports=r.p+"img/5.5894d9d.png"},1239:function(t,e,r){t.exports=r.p+"img/6.57c4089.png"},1240:function(t,e,r){t.exports=r.p+"img/7.7b940f7.png"},1241:function(t,e,r){"use strict";r(1173)},1242:function(t,e,r){var n=r(1)(!1);n.push([t.i,".clash-ss-container .el-select{width:100%}.clash-ss-container .qr{margin-top:2rem}.clash-ss-container .qr canvas{width:60vw}",""]),t.exports=n},1288:function(t,e,r){var n=r(1453);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(2).default)("d5f2bcd4",n,!0,{sourceMap:!1})},1306:function(t,e,r){"use strict";r.r(e);r(62),r(39),r(27),r(23),r(9),r(40),r(28);var n=r(18),a=r(52);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var o={data:function(){return{androidGuideLine:{},lineName:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({apkDLLink:function(){return"https://".concat(this.staticFileDomain,"/apkdl/Clash_for_Android_2.0.16-universal.apk")},clash_config_link:function(){return console.log("--\x3e",this.current_service_cate),this.current_service?"https://".concat(this.staticFileDomain,"/clash/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""}},Object(a.b)(["staticFileDomain","siteURL"])),mounted:function(){console.log("[LOG] from shadowrocket.vue",this.current_service_cate)},methods:{changeGuideLine:function(t){this.lineName=t.name,this.androidGuideLine=t},updateSSMethod:function(){var t=this;return this.$axios.put("users/".concat(this.$store.state.view_as||this.$store.state.session.id,"/services/").concat(this.current_service.id,"/ss"),{ss_method:"aes-256-cfb"}).then((function(e){t.$message({type:"success",message:"更新成功，请按照教程配置设备"})})).catch((function(e){t.$message({type:"error",message:"更新失败"+e.message})}))}}},s=o,c=(r(1241),r(51)),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clash-ss-container"},[n("ol",[n("li",[n("span",{staticClass:"title"},[t._v("下载 Clash for Android")]),n("p",[t._v("前往 Play Store 搜索 Clash 下载最新版，如果您无法直接访问Play Store，我们为您准备了本地的下载地址"),n("br"),t._v("您可以下载到电脑上再导入至手机安装，或者在手机上输入地址直接下载安装"),n("br"),n("br"),n("span",{staticClass:"small"},[t._v("2.0.16 Universal 版本：")]),n("el-tooltip",{attrs:{content:t.apkDLLink,placement:"top",effect:"light"}},[n("el-input",{attrs:{type:"text",value:t.apkDLLink,readonly:""}})],1),n("i",{staticClass:"small"},[t._v("为防止漏输入内容，请将鼠标移动到地址上显示完整内容")]),n("center"),n("br"),n("i",[t._v("Clash for Android 为开源社区开发的的免费通用型客户端")]),n("br"),n("i",[t._v("基础配置外的功能请自行参考网络资料进行了解")])],1)]),n("li",[n("span",{staticClass:"title"},[t._v("导入配置文件")]),t._m(0),n("el-tooltip",{attrs:{content:t.clash_config_link,placement:"top",effect:"light"}},[n("el-input",{attrs:{type:"text",value:t.clash_config_link,readonly:""}})],1),n("i",{staticClass:"small"},[t._v("为防止漏输入内容，请将鼠标移动到地址上显示完整内容")]),n("br"),n("br"),n("el-row",{attrs:{type:"flex",align:"center",gutter:10}},[n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:r(1234)}}),n("span",{staticClass:"small"},[t._v("1. Profiles")])]),n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:r(1235)}}),n("span",{staticClass:"small"},[t._v("2. New Profile")])])],1),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:r(1236)}}),n("span",{staticClass:"small"},[t._v("3. URL")])]),n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:r(1237)}}),n("span",{staticClass:"small"},[t._v("4. 输入名称和配置文件地址")])])],1),n("br"),n("hr"),n("p",[t._v("导入成功后，点击刚导入的配置文件使其被选中，然后点左上角按钮返回主界面")]),n("el-row",[n("el-col",{attrs:{span:24,align:"center"}},[n("img",{attrs:{src:r(1238)}}),n("span",{staticClass:"small"},[t._v("5. 选中刚才导入的配置文件")])])],1)],1),n("li",[n("span",{staticClass:"title"},[t._v("完成，开始使用")]),t._m(1),t._m(2),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:r(1239)}}),n("span",{staticClass:"small"},[t._v("6. 连接")])]),n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:r(1240)}}),n("span",{staticClass:"small"},[t._v("7. 断开和其他")])])],1)],1),t._m(3),t._m(4)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("打开 Clash for Android，进入"),r("code",[t._v("Profiles")]),t._v("- "),r("code",[t._v("New Profile")]),t._v("-"),r("code",[t._v("URL")]),t._v("在 Name 栏目输入 PandaFan，然后在URL栏目输入下面的配置文件地址（为防输错，请复制粘贴）\n完成后请点右上角的 ✔️ 符号保存")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("回到主界面后点击最上面写着"),r("code",[t._v("Stopped")]),t._v("按钮即可连接，连接成功后显示"),r("code",[t._v("Running")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("连接成功后点击"),r("code",[t._v("Proxy")]),t._v("可进入线路选择界面，默认为自动选择线路，您可以手动选择想要使用的任意线路")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("注意事项")]),r("p",[t._v("- Clash for Android默认会按照配置规则自动分流，除此之外，您还可以在Settings - Proxy - Access Control 界面设置勾选完全不需要走代理的App等功能")]),r("p",[t._v("- 目前 Clash for Android 还处在积极开发状态，各项功能可能不是非常完善，若您遇到问题请及时向开发者反馈")]),r("p",[t._v("- Clash for Android 非PandaFan开发/提供")]),r("p",[t._v("- 更多关于 Clash for Android 的使用方法可以联系 App 作者获取支持")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("更新线路、配置")]),r("p",[t._v("- 当您在PandaFan的网站上修改了自定义代理列表，或者PandaFan提供的线路发生变动时候，您需要更新您的配置")]),r("p",[t._v("- 只需在步骤2最后的位置，点击配置文件右侧的按钮即可更新")])])}],!1,null,null,null);e.default=l.exports},1452:function(t,e,r){"use strict";r(1288)},1453:function(t,e,r){var n=r(1)(!1);n.push([t.i,'.tutorial-container{min-height:100vh;max-width:100vw;padding-top:.8rem}.tutorial-container .back-link{text-decoration:none;z-index:99}.tutorial-container .el-tabs{padding:.8rem}.tutorial-container .el-tabs hr{display:block;margin-top:1rem;height:3px;background:#f4f7fc;width:100vw}.tutorial-container .el-tabs__item{font-size:1rem}.tutorial-container .el-tabs__header{box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.tutorial-container .el-input__inner{background:#34495e!important;border-color:#1abc9c;color:#f4f7fc!important;font-size:1.1rem}.tutorial-container ol{list-style:none;counter-reset:my-awesome-counter;padding:2rem 0 0}.tutorial-container ol li{counter-increment:my-awesome-counter;margin-bottom:2rem;font-size:1.2rem}.tutorial-container ol li p{margin-top:.5rem;margin-bottom:.5rem}.tutorial-container ol li:before{content:counter(my-awesome-counter);background:#f4f7fc;width:3.5rem;height:3.5rem;border-radius:5px;box-shadow:0 5px 12px 0 rgba(0,0,0,.3);display:inline-block;line-height:3.5rem;color:#16a085;text-align:center;margin-right:1rem;font-size:2.3rem}.tutorial-container ol ol li{background:#27ae60;font-size:1.5rem;width:2rem;height:2rem;line-height:2rem}.tutorial-container ol ol ol li:before{background:#1abc9c;font-size:1.5rem;width:2rem;height:2rem;line-height:2rem}.tutorial-container img{max-width:100%;max-height:100%;position:center}.tutorial-container img.portrait{height:80px;width:30px}.tutorial-container img.landscape{height:30px;width:80px}.tutorial-container img.square{height:75px;width:75px}.tutorial-container img.app-icon{height:144px!important;border-radius:20px}.tutorial-container span.title{font-size:1.5rem;margin-top:-2.8rem;background:#f4f7fc;color:#34495e;border-radius:50px 15px 15px 50px;display:flex;justify-content:center;align-items:center;text-align:center;margin-bottom:2rem}.tutorial-container p.question{padding-left:1rem;font-size:90%;border-left:2px solid #f1c40f}.tutorial-container p.question:before{content:"?";font-size:1.5rem;padding-right:1rem;color:#f1c40f}.tutorial-container *{color:#f4f7fc}.tutorial-container a{font-size:110%;-webkit-text-decoration:underline #1abc9c;text-decoration:underline #1abc9c;color:#1abc9c}.tutorial-container code{background:#bdc3c7;color:#34495e;padding:.1rem .5rem;border-radius:5px;margin:0 .3rem}',""]),t.exports=n},1484:function(t,e,r){"use strict";r.r(e);r(62),r(39),r(27),r(23),r(9),r(40),r(63),r(75);var n=r(18),a=r(52);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s={components:{ClashForAndroid:r(1306).default},middleware:["load-rt-data","authenticated"],data:function(){return{activeName:"clash",tabs:["clash"]}},computed:o(o({},Object(a.b)(["staticFileDomain","apGuideTab"])),{},{guideKey:function(){return"allplatform"===this.current_service_cate?"apGuideTab":"homeGuideTab"},apGuideTab:{get:function(){return this.$store.state[this.guideKey]},set:function(t){return this.$store.dispatch("guideTab",{cate:this.guideKey,tabname:t})}}}),mounted:function(){console.log("[LOG] from ap/android.vue",this.current_service_cate),this.apGuideTab&&0!==this.apGuideTab&&this.tabs.includes(this.apGuideTab)||(this.apGuideTab="Clash")},methods:{handleClick:function(){}}},c=(r(1452),r(51)),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tutorial-container"},[r("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.apGuideTab,callback:function(e){t.apGuideTab=e},expression:"apGuideTab"}},[r("p",[r("nuxt-link",{staticClass:"back-link right smooth",attrs:{to:"/dashboard/menu/"}},[t._v(t._s(t.$t("back")))])],1),r("el-tab-pane",{attrs:{label:"Clash",name:"Clash"}},[r("ClashForAndroid")],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);