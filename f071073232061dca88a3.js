(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1018:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){module.exports=e(t)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:this,(function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(t){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(t){for(var e={},i=0,r=t.length;i<r;i++)e[t.charAt(i)]=i;return e}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(t){if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?fromCharCode(192|e>>>6)+fromCharCode(128|63&e):fromCharCode(224|e>>>12&15)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return fromCharCode(240|e>>>18&7)+fromCharCode(128|e>>>12&63)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(u){return u.replace(re_utob,cb_utob)},cb_encode=function(t){var e=[0,2,1][t.length%3],r=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0);return[b64chars.charAt(r>>>18),b64chars.charAt(r>>>12&63),e>=2?"=":b64chars.charAt(r>>>6&63),e>=1?"=":b64chars.charAt(63&r)].join("")},btoa=global.btoa?function(b){return global.btoa(b)}:function(b){return b.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(u){return"[object Uint8Array]"===Object.prototype.toString.call(u)?u.toString("base64"):btoa(utob(String(u)))},encode=function(u,t){return t?_encode(String(u)).replace(/[+\/]/g,(function(t){return"+"==t?"-":"_"})).replace(/=/g,""):_encode(u)},encodeURI=function(u){return encode(u,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(t){switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return fromCharCode(55296+(e>>>10))+fromCharCode(56320+(1023&e));case 3:return fromCharCode((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return fromCharCode((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},btou=function(b){return b.replace(re_btou,cb_btou)},cb_decode=function(t){var e=t.length,r=e%4,o=(e>0?b64tab[t.charAt(0)]<<18:0)|(e>1?b64tab[t.charAt(1)]<<12:0)|(e>2?b64tab[t.charAt(2)]<<6:0)|(e>3?b64tab[t.charAt(3)]:0),n=[fromCharCode(o>>>16),fromCharCode(o>>>8&255),fromCharCode(255&o)];return n.length-=[0,0,2,1][r],n.join("")},_atob=global.atob?function(a){return global.atob(a)}:function(a){return a.replace(/\S{1,4}/g,cb_decode)},atob=function(a){return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(a){return(a.constructor===buffer.constructor?a:buffer.from(a,"base64")).toString()}:function(a){return(a.constructor===buffer.constructor?a:new buffer(a,"base64")).toString()}:function(a){return btou(_atob(a))},decode=function(a){return _decode(String(a).replace(/[-_]/g,(function(t){return"-"==t?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var t=global.Base64;return global.Base64=_Base64,t};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty){var noEnum=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(t){return encode(this,t)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}}return global.Meteor&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}}))},1021:function(t,e,r){var content=r(1206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("2bd199ac",content,!0,{sourceMap:!1})},1022:function(t,e,r){var content=r(1209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("d51dcc7c",content,!0,{sourceMap:!1})},1023:function(t,e,r){var content=r(1211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("069bc95c",content,!0,{sourceMap:!1})},1039:function(t,e,r){t.exports=r.p+"img/4e41885.jpg"},1040:function(t,e,r){t.exports=r.p+"img/0fc1f78.png"},1041:function(t,e,r){t.exports=r.p+"img/420ca1c.png"},1201:function(t,e,r){t.exports=r.p+"img/0157dcf.jpg"},1202:function(t,e,r){t.exports=r.p+"img/ce5fe9f.jpeg"},1203:function(t,e,r){t.exports=r.p+"img/c077935.png"},1204:function(t,e,r){t.exports=r.p+"img/3446810.png"},1205:function(t,e,r){"use strict";var o=r(1021);r.n(o).a},1206:function(t,e,r){(e=r(50)(!1)).push([t.i,"",""]),t.exports=e},1207:function(t,e,r){t.exports=r.p+"img/08b31fc.jpg"},1208:function(t,e,r){"use strict";var o=r(1022);r.n(o).a},1209:function(t,e,r){(e=r(50)(!1)).push([t.i,".checkbox-wrapper{margin:1rem .5rem 1rem 0}",""]),t.exports=e},1210:function(t,e,r){"use strict";var o=r(1023);r.n(o).a},1211:function(t,e,r){(e=r(50)(!1)).push([t.i,'.tutorial-container{min-height:100vh;max-width:100vw;padding-top:.8rem}.tutorial-container .back-link{position:fixed;right:.5rem;bottom:.5rem;text-decoration:none}.tutorial-container .back-link .el-tabs{padding:.8rem}.tutorial-container .back-link .el-tabs hr{display:block;margin-top:1rem;height:2px;background:#fff;width:100vw}.tutorial-container .back-link .el-tabs__item{font-size:1rem}.tutorial-container .back-link .el-tabs__header{box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.tutorial-container .back-link .el-input__inner{background:#34495e!important;border-color:#1abc9c;color:#f1c40f!important;font-size:.9rem}.tutorial-container .back-link .el-input__inner::-moz-selection{color:#e67e22;background:#000}.tutorial-container .back-link .el-input__inner::selection{color:#e67e22;background:#000}.tutorial-container .back-link ol{list-style:none;counter-reset:my-awesome-counter;padding:2rem 0 0}.tutorial-container .back-link ol li{counter-increment:my-awesome-counter;margin-bottom:2rem;font-size:1.2rem}.tutorial-container .back-link ol li p{margin-top:.5rem;margin-bottom:.5rem}.tutorial-container .back-link ol li p:before{content:counter(my-awesome-counter);background:#f4f7fc;width:3.5rem;height:3.5rem;border-radius:5px;box-shadow:0 5px 12px 0 rgba(0,0,0,.3);display:inline-block;line-height:3.5rem;color:#16a085;text-align:center;margin-right:1rem;font-size:2.3rem}.tutorial-container .back-link ol li ol li:before{background:#27ae60;font-size:1.5rem;width:2rem;height:2rem;line-height:2rem}.tutorial-container .back-link ol li ol li ol li:before{background:#1abc9c;font-size:1.5rem;width:2rem;height:2rem;line-height:2rem}.tutorial-container .back-link img{max-width:100%;max-height:100%;position:center}.tutorial-container .back-link img.portrait{height:80px;width:30px}.tutorial-container .back-link img.portrait.landscape{height:30px;width:80px}.tutorial-container .back-link img.portrait.square{height:75px;width:75px}.tutorial-container .back-link img.portrait.app-icon{height:144px;border-radius:20px}.tutorial-container .back-link img.portrait.screenshot{max-height:700px}.tutorial-container .back-link span.title{font-size:1.5rem;margin-top:-2.8rem;background:#f4f7fc;color:#34495e;border-radius:50px 15px 15px 50px;display:flex;justify-content:center;align-items:center;text-align:center;margin-bottom:2rem}.tutorial-container .back-link p.question{padding:.5rem 1rem 1rem;font-size:90%;border-left:5px solid #f1c40f;background:#4d4d4d;border-radius:0 5px 5px 0}.tutorial-container .back-link p.question:before{content:"?";font-size:1.8rem;padding-right:1rem;color:#f1c40f;font-weight:700}.tutorial-container .back-link p.question:before a{color:#f1c40f;text-decoration:none}.tutorial-container .back-link *{color:#f4f7fc}.tutorial-container .back-link a{font-size:110%;-webkit-text-decoration:underline #1abc9c;text-decoration:underline #1abc9c;color:#1abc9c}.tutorial-container .back-link code{background:#bdc3c7;color:#34495e;padding:.03rem .5rem .08rem;border-radius:5px;margin:0 .3rem}',""]),t.exports=e},1215:function(t,e,r){"use strict";r.r(e);r(95),r(27),r(23),r(13),r(80),r(94),r(127);var o=r(39),n=r(65),c=r(1018);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={middleware:["load-rt-data","authenticated"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({surge_config_link:function(){return console.log("--\x3e",this.current_service_cate),this.current_service?"https://".concat(this.staticFileDomain,"/surge/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""},sub_qrlink:function(){if(!this.current_service)return"";var t="https://".concat(this.staticFileDomain,"/apsr/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name),e="PandaFan User ".concat(this.current_service.user_id);return"sub://".concat(c.Base64.encode(t),"?remarks=").concat(encodeURI(e))},rule_qrlink:function(){return this.surge_config_link+"?ruleonly"}},Object(n.b)(["staticFileDomain"])),mounted:function(){console.log("[LOG] from shadowrocket.vue",this.current_service_cate)},methods:{}},d=(r(1205),r(38)),_=Object(d.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shadowrocket-container"},["zh"===t.$i18n.locale?o("div",[o("ol",[o("li",[o("span",{staticClass:"title"},[t._v("下载 Shadowrocket")]),o("p",[t._v("前往 App Store 下载 Shadowrocket"),o("br"),o("br"),o("center",[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[t._v("前往 AppStore")])],1),o("br"),o("el-row",{attrs:{gutter:20}},[o("center",[o("b",{staticClass:"small"},[t._v("目前AppStore存在众多山寨App，请认准正版")])]),o("el-col",{attrs:{span:12}},[o("center",[o("b",[t._v("真 👍🏻")]),o("br"),o("a",{on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[o("img",{staticClass:"app-icon",attrs:{src:r(1039)}})])])],1),o("el-col",{attrs:{span:12}},[o("center",[o("b",[t._v("假!!! 😡")]),o("br"),o("img",{staticClass:"app-icon",attrs:{src:r(1201)}})])],1)],1),o("br"),o("i",[t._v("Shadowrocket为第三方开发者发布的通用型客户端，目前为收费App")])],1)]),o("li",[o("span",{staticClass:"title"},[t._v("导入线路")]),t._m(0),o("h4",{staticClass:"warning"},[t._v("请确认使用最新版App，否则可能无法导入")]),t.sub_qrlink?o("center",[o("qrcode",{attrs:{value:t.sub_qrlink}}),o("p",[o("b",[t._v("线路二维码")])])],1):t._e(),o("br"),o("center",[o("img",{staticClass:"screenshot",attrs:{src:r(1202)}})]),o("p",[t._v("成功后，您可以看到首页已显示所有线路")]),t._m(1)],1),o("li",[o("span",{staticClass:"title"},[t._v("导入路由规则")]),t._m(2),t.rule_qrlink?o("center",[o("qrcode",{attrs:{value:t.rule_qrlink}}),o("p",[o("b",[t._v("路由规则二维码")])])],1):t._e(),o("br"),o("center",[o("img",{staticClass:"screenshot",attrs:{src:r(1040)}}),o("br"),o("img",{staticClass:"screenshot",attrs:{src:r(1041)}})])],1),o("li",[o("span",{staticClass:"title"},[t._v("连接线路")]),t._m(3),t._m(4),t._m(5),o("p",[t._v("请继续阅读本页剩余内容，了解其他注意事项")]),o("center",[o("img",{staticClass:"screenshot",attrs:{src:r(1203)}})])],1),o("li",[o("span",{staticClass:"title"},[t._v("注意事项")]),t._m(6),o("p",[t._v("Shadowrocket 非熊猫开发/提供，若有关于App本身的问题，请联系App开发者获取支持")]),o("p"),o("center",[o("img",{staticClass:"screenshot",attrs:{src:r(1204)}})])],1)])]):o("div",[o("ol",[o("li",[o("span",{staticClass:"title"},[t._v("Download Shadowrocket")]),o("p",[t._v("Download Shadowrocket from the App Store"),o("br"),o("br"),o("center",[o("a",{on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[o("img",{staticClass:"app-icon",attrs:{src:r(1039)}}),o("br"),o("br"),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[t._v("Download")])],1)]),o("br"),o("i",[t._v("Shadowrocket is a paid app developed by third-party")]),o("br"),o("i",[t._v("If you would like a ")]),o("b",[t._v("FREE ")]),o("i",[t._v("app with less features, use "),o("a",{on:{click:function(e){return t.switchGuideTab("apGuideTab","potatso_lite")}}},[t._v("Potatso Lite")])])],1)]),o("li",[o("span",{staticClass:"title"},[t._v("Import Servers")]),t._m(7),o("center",[o("qrcode",{attrs:{value:t.sub_qrlink}}),o("p",[o("b",[t._v("QR code for server list")])])],1),o("p",[t._v("When imported successfully, you will see the server list immediately.")]),t._m(8)],1),o("li",[o("span",{staticClass:"title"},[t._v("Import Routing Rules")]),t._m(9),o("center",[o("qrcode",{attrs:{value:t.rule_qrlink}}),o("p",[o("b",[t._v("QR code for routing rules")])])],1),o("br"),o("center",[o("img",{staticClass:"screenshot",attrs:{src:r(1040)}}),o("br"),o("img",{staticClass:"screenshot",attrs:{src:r(1041)}})])],1),o("li",[o("span",{staticClass:"title"},[t._v("Connect!")]),t._m(10),o("p",[t._v("You may choose different servers from the Home tab")]),t._m(11),o("ul",[t._m(12),o("p",[o("Code",[t._v("Direct")]),t._v("mode will send no data through our servers.")],1),t._m(13)])]),t._m(14)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("打开 Shadowrocket，在"),e("code",[this._v("首页")]),this._v("界面，点左上角的 扫码 图标")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"question"},[e("b",{staticClass:"larger"},[this._v("没有看到导入的线路？")]),e("br"),this._v("请尝试将Shadowrocket彻底关闭（从屏幕底部向上轻扫并在屏幕中间稍作停顿，在Shadowrocket App预览上向上轻扫来关闭），然后再重新打开Shadowrocket")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v(" 进入"),e("code",[this._v("配置")]),this._v("界面（必须先进入此界面），然后再点左上角的 扫码 图标"),e("br"),this._v("扫码完成后在"),e("code",[this._v("远程文件")]),this._v("下方将出现新的配置文件地址，点一下它，然后选择"),e("code",[this._v("使用配置 Use Config")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("回到"),e("code",[this._v("首页")]),this._v("界面，您可以在此自由选择要使用的线路，被选中的线路左侧会有橙色小点  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("p",[t._v("- 请确保"),r("code",[t._v("全局路由")]),t._v("选项已设为"),r("code",[t._v("配置")])]),r("p",[t._v("- 选择"),r("code",[t._v("直连")]),t._v("将无法使用服务")]),r("p",[t._v("- 选择"),r("code",[t._v("代理")]),t._v("则是全部流量都通过熊猫的服务器，适合在公共场合的 Wi-Fi 下加密流量保护隐私")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("打开最上方"),e("code",[this._v("未连接")]),this._v("右侧的开关便开始使用啦。首次连接会需要安装部分配置到系统，需要进行Face ID/Touch ID/密码验证")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("当您在熊猫的网站上修改了自定义代理列表，或者熊猫提供的线路发生变动时候，您需要更新您的配置"),e("br"),this._v("更新办法：重新导入线路配置即可")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Open Shadowrocket, at the "),e("code",[this._v("Home")]),this._v("tab, tap the scanner icon in the upper left corner")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"question"},[e("b",{staticClass:"larger"},[this._v("No Servers Appeared?")]),e("br"),this._v("Quit Shadowrocket and re-launch the app to see changes.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v(" Go to "),e("code",[this._v("Config")]),this._v("tab, tap the scanner icon in the upper left and scan the QR code below."),e("br"),this._v("Now a link should appear under the "),e("code",[this._v("REMOTE FILES")]),this._v("section. Tap the link and select"),e("code",[this._v("Use Config")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Back to the"),e("code",[this._v("Home")]),this._v("tab. Use the switch button at the top to turn on/off the VPN.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("Global Route")]),this._v("allows you to change the routing policy:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Config")]),this._v("should be the default option.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Proxy")]),this._v("mode will send everything through our servers, regardless if the site is blocked. This can be used to protect your privacy when using public Wi-Fi.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",{staticClass:"title"},[this._v("Additional Notes")]),e("p",[this._v("When you have modified the custom proxy list, or if the server provided by Panda has changes, you need to update your configuration.")]),e("p",[this._v("To update your configurations, simply tap the configuration file from Step 3, and select Update")])])}],!1,null,null,null).exports;function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={data:function(){return{dflags:{no_tls13:!1,no_v2:!1}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({surge_config_link:function(){if(console.log("--\x3e",this.current_service_cate),this.current_service){var t="https://".concat(this.staticFileDomain,"/surge/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name),e=[];for(var r in this.dflags)this.dflags[r]&&e.push(r);return e.length>0&&(t+="?".concat(e.join("&"))),t}return""},flags:{get:function(){return this.dflags},set:function(t){this.dflags=t}}},Object(n.b)(["staticFileDomain"])),mounted:function(){console.log("[LOG] from surge.vue",this.current_service_cate)},methods:{}};r(1208);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var k={middleware:["load-rt-data","authenticated"],components:{Shadowrocket:_,SurgeForiOS:Object(d.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"surge-container"},[o("ol",[o("li",[o("span",{staticClass:"title"},[t._v("下载 Surge 4")]),o("p",[t._v("前往 App Store 下载 Surge 4"),o("br"),t._m(0),o("br"),o("br"),o("center",[o("a",{on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/surge-3/id1442620678")}}},[o("img",{staticClass:"app-icon",attrs:{src:r(1207)}}),o("br"),o("br"),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/surge-3/id1442620678")}}},[t._v("前往 AppStore")])],1)]),o("br"),o("i",[t._v("Surge 为第三方开发者发布的通用型客户端，目前可以免费下载，但使用服务、开启其代理功能则需要付费内购。")])],1)]),o("li",[o("span",{staticClass:"title"},[t._v("导入线路配置")]),t._m(1),o("p",[t._v("在弹出的框中输入下面的配置文件地址，然后确定即可")]),o("p",{staticClass:"small"},[t._v("Surge 针对部分功能额外收费，如果您的Surge未订阅下列功能，请勾选以关闭对应功能，否则默认开启")]),t._l(t.flags,(function(e,r){return o("span",{staticClass:"checkbox-wrapper"},[o("el-checkbox",{attrs:{border:"",size:"medium"},model:{value:t.flags[r],callback:function(e){t.$set(t.flags,r,e)},expression:"flags[flagName]"}},[t._v(t._s(t.$t("guide."+r)))])],1)})),o("br"),o("br"),o("el-tooltip",{attrs:{content:t.surge_config_link,placement:"top",effect:"light"}},[o("el-input",{attrs:{type:"text",value:t.surge_config_link,readonly:""}})],1),o("i",{staticClass:"small"},[t._v("为防止漏输入内容，请将鼠标移动到地址上显示完整内容")]),o("br")],2),t._m(2),t._m(3),o("li",[o("span",{staticClass:"title"},[t._v("注意事项")]),o("p",[t._v("- 当有新的线路增加或者其它配置变更，Surge都会自动为您最新线路和规则，无需手动再次导入 :)")]),o("p",[t._v("- 请注意，APP 中的线路测速功能并不准确，由于 SSLTide 协议的特性，测得的延迟会是实际的3-4倍，请以实际使用情况为准")]),o("p",[t._v("- Surge 非熊猫开发/提供，若有关于App本身的问题，请联系App开发者获取支持")]),o("p",[t._v("补充阅读："),o("a",{on:{click:function(e){return t.openSite("https://medium.com/@scomper/surge-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-a1533c10e80b")}}},[t._v("Surge 新手使用指南")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"small"},[e("i",[this._v("请勿下载 Surge for Enterprise")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("打开 Surge，点左上角的 Default 进入"),e("code",[this._v("配置列表")]),this._v("，点 "),e("code",[this._v("从URL下载配置")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("调整软件设定")]),r("p",[t._v("回到 App 首页主界面，开启 Rewrite （开启该功能需要付费）")]),r("ul",[r("p",[t._v("- 请确保"),r("code",[t._v("出站模式")]),t._v("选项已设为"),r("code",[t._v("规则模式")])]),r("p",[t._v("- 选择"),r("code",[t._v("直接连接")]),t._v("将无法使用服务")]),r("p",[t._v("- 选择"),r("code",[t._v("全局代理")]),t._v("则是全部流量都通过熊猫的服务器，适合在公共场合的 Wi-Fi 下加密流量保护隐私")])]),r("p",[t._v("下面进入"),r("code",[t._v("策略组")]),t._v("界面选择您要是用的线路，其中："),r("br"),t._v("Auto 为自动选择线路"),r("br"),t._v("DIRECT 为不使用服务，等同于「出站模式」中的「直接连接」")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",{staticClass:"title"},[this._v("完成，开始使用")]),e("p",[this._v("选完线路，回到主界面，点右上角的"),e("code",[this._v("启动")]),this._v("便开始使用啦。首次连接会需要安装部分配置到系统，需要进行Face ID/Touch ID/密码验证。")]),e("p",[this._v("请继续阅读本页剩余内容，了解其他注意事项")])])}],!1,null,null,null).exports},data:function(){return{activeName:"shadowrocket",validTabNames:["shadowrocket","potatso_lite","surge"]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({guideKey:function(){return"allplatform"===this.current_service_cate?"apGuideTab":"homeGuideTab"},apGuideTab:{get:function(){return this.$store.state[this.guideKey]},set:function(t){return this.$store.dispatch("guideTab",{cate:this.guideKey,tabname:t})}}},Object(n.b)(["staticFileDomain","siteURL"])),mounted:function(){console.log("[LOG] from ap/ios.vue",this.current_service_cate),console.log("includes----\x3e",!this.validTabNames.includes(this.apGuideTab)),this.apGuideTab&&0!=this.apGuideTab&&this.validTabNames.includes(this.apGuideTab)||(this.apGuideTab="shadowrocket")},methods:{handleClick:function(){},openSiteUrl:function(t){this.openSite(this.siteURL+t)}}},C=(r(1210),Object(d.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tutorial-container"},[r("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.apGuideTab,callback:function(e){t.apGuideTab=e},expression:"apGuideTab"}},[r("p",[r("b",[t._v("\b在上方选择要使用的配置App")]),r("nuxt-link",{staticClass:"back-link right smooth",attrs:{to:"/dashboard/menu/"}},[t._v(t._s(t.$t("back")))])],1),r("hr"),r("center",[r("br"),r("h3",{staticClass:"warning"},[t._v("下载App前您需要准备【非中国区】Apple ID"),r("br"),r("a",{on:{click:function(e){return t.openSiteUrl("/knowledges/65")}}},[t._v("了解详情")])])]),r("hr"),r("el-tab-pane",{attrs:{label:"Shadowrocket",name:"shadowrocket"}},[r("Shadowrocket")],1),r("el-tab-pane",{attrs:{label:"Surge",name:"surge"}},[r("SurgeForiOS")],1)],1)],1)}),[],!1,null,null,null));e.default=C.exports}}]);