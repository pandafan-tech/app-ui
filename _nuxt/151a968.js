(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1077:function(e,t,r){var content=r(1125);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("dcbd39ec",content,!0,{sourceMap:!1})},1123:function(e,t,r){e.exports=r.p+"img/surge_for_ios.af1e142.jpg"},1124:function(e,t,r){"use strict";r(1077)},1125:function(e,t,r){var n=r(55)((function(i){return i[1]}));n.push([e.i,".checkbox-wrapper{margin:1rem .5rem 1rem 0}",""]),e.exports=n},1170:function(e,t,r){"use strict";r.r(t);r(57),r(21),r(19),r(8),r(43);var n=r(15),c=r(44);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={data:function(){return{dflags:{no_tls13:!1,no_v2:!1}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({surge_config_link:function(){if(console.log("--\x3e",this.current_service_cate),this.current_service){var e="https://".concat(this.staticFileDomain,"/surge/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name),t=[];for(var r in this.dflags)this.dflags[r]&&t.push(r);return t.length>0&&(e+="?".concat(t.join("&"))),e}return""},flags:{get:function(){return this.dflags},set:function(e){this.dflags=e}}},Object(c.b)(["staticFileDomain"])),mounted:function(){console.log("[LOG] from surge.vue",this.current_service_cate)},methods:{}},_=(r(1124),r(42)),component=Object(_.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"surge-container"},[n("ol",[n("li",[n("span",{staticClass:"title"},[e._v("下载 Surge 4")]),n("p",[e._v("前往 App Store 下载 Surge 4"),n("br"),e._m(0),n("br"),n("br"),n("center",[n("a",{on:{click:function(t){return e.openSite("https://itunes.apple.com/us/app/surge-3/id1442620678")}}},[n("img",{staticClass:"app-icon",attrs:{src:r(1123)}}),n("br"),n("br"),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.openSite("https://itunes.apple.com/us/app/surge-3/id1442620678")}}},[e._v("前往 AppStore")])],1)]),n("br"),n("i",[e._v("Surge 为第三方开发者发布的通用型客户端，目前可以免费下载，但使用服务、开启其代理功能则需要付费内购。")])],1)]),n("li",[n("span",{staticClass:"title"},[e._v("导入线路配置")]),e._m(1),n("p",[e._v("在弹出的框中输入下面的配置文件地址，然后确定即可")]),n("p",{staticClass:"small"},[e._v("Surge 针对部分功能额外收费，如果您的Surge未订阅下列功能，请勾选以关闭对应功能，否则默认开启")]),e._l(e.flags,(function(t,r){return n("span",{staticClass:"checkbox-wrapper"},[n("el-checkbox",{attrs:{border:"",size:"medium"},model:{value:e.flags[r],callback:function(t){e.$set(e.flags,r,t)},expression:"flags[flagName]"}},[e._v(e._s(e.$t("guide."+r)))])],1)})),n("br"),n("br"),n("el-tooltip",{attrs:{content:e.surge_config_link,placement:"top",effect:"light"}},[n("el-input",{attrs:{type:"text",value:e.surge_config_link,readonly:""}})],1),n("i",{staticClass:"small"},[e._v("为防止漏输入内容，请将鼠标移动到地址上显示完整内容")]),n("br")],2),e._m(2),e._m(3),n("li",[n("span",{staticClass:"title"},[e._v("注意事项")]),n("p",[e._v("- 当有新的线路增加或者其它配置变更，Surge都会自动为您最新线路和规则，无需手动再次导入 :)")]),n("p",[e._v("- 请注意，APP 中的线路测速功能并不准确，由于 SSLTide 协议的特性，测得的延迟会是实际的3-4倍，请以实际使用情况为准")]),n("p",[e._v("- Surge 非PandaFan开发/提供，若有关于App本身的问题，请联系App开发者获取支持")]),n("p",[e._v("补充阅读："),n("a",{on:{click:function(t){return e.openSite("https://medium.com/@scomper/surge-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-a1533c10e80b")}}},[e._v("Surge 新手使用指南")])])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"small"},[r("i",[e._v("请勿下载 Surge for Enterprise")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("打开 Surge，点左上角的 Default 进入"),r("code",[e._v("配置列表")]),e._v("，点 "),r("code",[e._v("从URL下载配置")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",{staticClass:"title"},[e._v("调整软件设定")]),r("p",[e._v("回到 App 首页主界面，开启 Rewrite （开启该功能需要付费）")]),r("ul",[r("p",[e._v("- 请确保"),r("code",[e._v("出站模式")]),e._v("选项已设为"),r("code",[e._v("规则模式")])]),r("p",[e._v("- 选择"),r("code",[e._v("直接连接")]),e._v("将无法使用服务")]),r("p",[e._v("- 选择"),r("code",[e._v("全局代理")]),e._v("则是全部流量都通过PandaFan的服务器，适合在公共场合的 Wi-Fi 下加密流量保护隐私")])]),r("p",[e._v("下面进入"),r("code",[e._v("策略组")]),e._v("界面选择您要是用的线路，其中："),r("br"),e._v("Auto 为自动选择线路"),r("br"),e._v("DIRECT 为不使用服务，等同于「出站模式」中的「直接连接」")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("span",{staticClass:"title"},[e._v("完成，开始使用")]),r("p",[e._v("选完线路，回到主界面，点右上角的"),r("code",[e._v("启动")]),e._v("便开始使用啦。首次连接会需要安装部分配置到系统，需要进行Face ID/Touch ID/密码验证。")]),r("p",[e._v("请继续阅读本页剩余内容，了解其他注意事项")])])}],!1,null,null,null);t.default=component.exports}}]);