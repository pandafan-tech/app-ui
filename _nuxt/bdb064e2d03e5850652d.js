(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1018:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){module.exports=e(t)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:this,(function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(t){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(t){for(var e={},i=0,r=t.length;i<r;i++)e[t.charAt(i)]=i;return e}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(t){if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?fromCharCode(192|e>>>6)+fromCharCode(128|63&e):fromCharCode(224|e>>>12&15)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return fromCharCode(240|e>>>18&7)+fromCharCode(128|e>>>12&63)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(u){return u.replace(re_utob,cb_utob)},cb_encode=function(t){var e=[0,2,1][t.length%3],r=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0);return[b64chars.charAt(r>>>18),b64chars.charAt(r>>>12&63),e>=2?"=":b64chars.charAt(r>>>6&63),e>=1?"=":b64chars.charAt(63&r)].join("")},btoa=global.btoa?function(b){return global.btoa(b)}:function(b){return b.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(u){return"[object Uint8Array]"===Object.prototype.toString.call(u)?u.toString("base64"):btoa(utob(String(u)))},encode=function(u,t){return t?_encode(String(u)).replace(/[+\/]/g,(function(t){return"+"==t?"-":"_"})).replace(/=/g,""):_encode(u)},encodeURI=function(u){return encode(u,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(t){switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return fromCharCode(55296+(e>>>10))+fromCharCode(56320+(1023&e));case 3:return fromCharCode((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return fromCharCode((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},btou=function(b){return b.replace(re_btou,cb_btou)},cb_decode=function(t){var e=t.length,r=e%4,n=(e>0?b64tab[t.charAt(0)]<<18:0)|(e>1?b64tab[t.charAt(1)]<<12:0)|(e>2?b64tab[t.charAt(2)]<<6:0)|(e>3?b64tab[t.charAt(3)]:0),o=[fromCharCode(n>>>16),fromCharCode(n>>>8&255),fromCharCode(255&n)];return o.length-=[0,0,2,1][r],o.join("")},_atob=global.atob?function(a){return global.atob(a)}:function(a){return a.replace(/\S{1,4}/g,cb_decode)},atob=function(a){return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(a){return(a.constructor===buffer.constructor?a:buffer.from(a,"base64")).toString()}:function(a){return(a.constructor===buffer.constructor?a:new buffer(a,"base64")).toString()}:function(a){return btou(_atob(a))},decode=function(a){return _decode(String(a).replace(/[-_]/g,(function(t){return"-"==t?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var t=global.Base64;return global.Base64=_Base64,t};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty){var noEnum=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(t){return encode(this,t)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}}return global.Meteor&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}}))},1019:function(t,e,r){var content=r(1198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("22dd1784",content,!0,{sourceMap:!1})},1020:function(t,e,r){var content=r(1200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("a5e4f7c0",content,!0,{sourceMap:!1})},1190:function(t,e,r){t.exports=r.p+"img/a1539f2.png"},1191:function(t,e,r){t.exports=r.p+"img/cf9cf74.png"},1192:function(t,e,r){t.exports=r.p+"img/89bc8d7.png"},1193:function(t,e,r){t.exports=r.p+"img/645f5a2.png"},1194:function(t,e,r){t.exports=r.p+"img/ea34083.png"},1195:function(t,e,r){t.exports=r.p+"img/be862ce.png"},1196:function(t,e,r){t.exports=r.p+"img/0e7695e.png"},1197:function(t,e,r){"use strict";var n=r(1019);r.n(n).a},1198:function(t,e,r){(e=r(50)(!1)).push([t.i,".clash-ss-container .el-select{width:100%}.clash-ss-container .qr{margin-top:2rem}.clash-ss-container .qr canvas{width:60vw}",""]),t.exports=e},1199:function(t,e,r){"use strict";var n=r(1020);r.n(n).a},1200:function(t,e,r){(e=r(50)(!1)).push([t.i,'.tutorial-container{min-height:100vh;max-width:100vw;padding-top:.8rem}.tutorial-container .back-link{text-decoration:none}.tutorial-container .el-tabs{padding:.8rem}.tutorial-container .el-tabs hr{display:block;margin-top:1rem;height:3px;background:#f4f7fc;width:100vw}.tutorial-container .el-tabs__item{font-size:1rem}.tutorial-container .el-tabs__header{box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.tutorial-container .el-input__inner{background:#34495e!important;border-color:#1abc9c;color:#f4f7fc!important;font-size:1.1rem}.tutorial-container ol{list-style:none;counter-reset:my-awesome-counter;padding:2rem 0 0}.tutorial-container ol li{counter-increment:my-awesome-counter;margin-bottom:2rem;font-size:1.2rem}.tutorial-container ol li p{margin-top:.5rem;margin-bottom:.5rem}.tutorial-container ol li:before{content:counter(my-awesome-counter);background:#f4f7fc;width:3.5rem;height:3.5rem;border-radius:5px;box-shadow:0 5px 12px 0 rgba(0,0,0,.3);display:inline-block;line-height:3.5rem;color:#16a085;text-align:center;margin-right:1rem;font-size:2.3rem}.tutorial-container ol ol li{background:#27ae60;font-size:1.5rem;width:2rem;height:2rem;line-height:2rem}.tutorial-container ol ol ol li:before{background:#1abc9c;font-size:1.5rem;width:2rem;height:2rem;line-height:2rem}.tutorial-container img{max-width:100%;max-height:100%;position:center}.tutorial-container img.portrait{height:80px;width:30px}.tutorial-container img.landscape{height:30px;width:80px}.tutorial-container img.square{height:75px;width:75px}.tutorial-container img.app-icon{height:144px!important;border-radius:20px}.tutorial-container span.title{font-size:1.5rem;margin-top:-2.8rem;background:#f4f7fc;color:#34495e;border-radius:50px 15px 15px 50px;display:flex;justify-content:center;align-items:center;text-align:center;margin-bottom:2rem}.tutorial-container p.question{padding-left:1rem;font-size:90%;border-left:2px solid #f1c40f}.tutorial-container p.question:before{content:"?";font-size:1.5rem;padding-right:1rem;color:#f1c40f}.tutorial-container *{color:#f4f7fc}.tutorial-container a{font-size:110%;-webkit-text-decoration:underline #1abc9c;text-decoration:underline #1abc9c;color:#1abc9c}.tutorial-container code{background:#bdc3c7;color:#34495e;padding:.1rem .5rem;border-radius:5px;margin:0 .3rem}',""]),t.exports=e},1216:function(t,e,r){"use strict";r.r(e);r(95),r(27),r(23),r(13),r(80),r(94),r(127);var n=r(39),o=r(65);r(28),r(1018);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{androidGuideLine:{},lineName:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({apkDLLink:function(){return"https://".concat(this.staticFileDomain,"/apkdl/Clash_for_Android_1.2.14-universal.apk")},clash_config_link:function(){return console.log("--\x3e",this.current_service_cate),this.current_service?"https://".concat(this.staticFileDomain,"/clash/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""}},Object(o.b)(["staticFileDomain","siteURL"])),mounted:function(){console.log("[LOG] from shadowrocket.vue",this.current_service_cate)},methods:{changeGuideLine:function(line){this.lineName=line.name,this.androidGuideLine=line},updateSSMethod:function(){var t=this;return this.$axios.put("users/".concat(this.$store.state.view_as||this.$store.state.session.id,"/services/").concat(this.current_service.id,"/ss"),{ss_method:"aes-256-cfb"}).then((function(e){t.$message({type:"success",message:"更新成功，请按照教程配置设备"})})).catch((function(e){t.$message({type:"error",message:"更新失败"+e.message})}))}}},d=(r(1197),r(38));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={middleware:["load-rt-data","authenticated"],components:{ClashForAndroid:Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clash-ss-container"},["CHACHA20"==this.current_service.extra.ss_method.toUpperCase()?n("center",[n("h1",{staticClass:"warning"},[t._v("您的Shadowsocks加密方式还是较老的 CHACHA20，我们需要将您的加密方式更新为 AES-256-CFB"),n("br"),t._v("如果您有其他使用Shadowsocks配置的设备，请在跟新加密方式后，按照官网教程重新配置一次其他设备。"),n("br"),t._v("否则其他设备将无法使用Shadowsocks接入服务"),n("br"),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.updateSSMethod()}}},[t._v("更新加密方式")])],1)]):t._e(),n("ol",[n("li",[n("span",{staticClass:"title"},[t._v("下载 Clash for Android")]),n("p",[t._v("前往 Play Store 搜索 Clash 下载最新版，如果您无法直接访问Play Store，我们为您准备了本地的下载地址"),n("br"),t._v("您可以下载到电脑上再导入至手机安装，或者在手机上输入地址直接下载安装"),n("br"),n("br"),n("span",{staticClass:"small"},[t._v("1.2.14 Universal 版本：")]),n("el-tooltip",{attrs:{content:t.apkDLLink,placement:"top",effect:"light"}},[n("el-input",{attrs:{type:"text",value:t.apkDLLink,readonly:""}})],1),n("i",{staticClass:"small"},[t._v("为防止漏输入内容，请将鼠标移动到地址上显示完整内容")]),n("center"),n("br"),n("i",[t._v("Clash for Android 为开源社区开发的的免费通用型客户端")]),n("br"),n("i",[t._v("基础配置外的功能请自行参考网络资料进行了解")])],1)]),n("li",[n("span",{staticClass:"title"},[t._v("导入配置文件")]),t._m(0),n("el-tooltip",{attrs:{content:t.clash_config_link,placement:"top",effect:"light"}},[n("el-input",{attrs:{type:"text",value:t.clash_config_link,readonly:""}})],1),n("i",{staticClass:"small"},[t._v("为防止漏输入内容，请将鼠标移动到地址上显示完整内容")]),n("br"),n("br"),n("el-row",{attrs:{type:"flex",align:"center",gutter:10}},[n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:r(1190)}}),n("span",{staticClass:"small"},[t._v("1. Profiles")])]),n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:r(1191)}}),n("span",{staticClass:"small"},[t._v("2. New Profile")])])],1),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:r(1192)}}),n("span",{staticClass:"small"},[t._v("3. URL")])]),n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:r(1193)}}),n("span",{staticClass:"small"},[t._v("4. 输入名称和配置文件地址")])])],1),n("br"),n("hr"),n("p",[t._v("导入成功后，点击刚导入的配置文件使其被选中，然后点左上角按钮返回主界面")]),n("el-row",[n("el-col",{attrs:{span:24,align:"center"}},[n("img",{attrs:{src:r(1194)}}),n("span",{staticClass:"small"},[t._v("5. 选中刚才导入的配置文件")])])],1)],1),n("li",[n("span",{staticClass:"title"},[t._v("完成，开始使用")]),t._m(1),t._m(2),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:r(1195)}}),n("span",{staticClass:"small"},[t._v("6. 连接")])]),n("el-col",{attrs:{span:12,align:"center"}},[n("img",{attrs:{src:r(1196)}}),n("span",{staticClass:"small"},[t._v("7. 断开和其他")])])],1)],1),t._m(3),t._m(4)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("打开 Clash for Android，进入"),e("code",[this._v("Profiles")]),this._v("- "),e("code",[this._v("New Profile")]),this._v("-"),e("code",[this._v("URL")]),this._v("在 Name 栏目输入 PandaFan，然后在URL栏目输入下面的配置文件地址（为防输错，请复制粘贴）\n完成后请点右上角的 ✔️ 符号保存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("回到主界面后点击最上面写着"),e("code",[this._v("Stopped")]),this._v("按钮即可连接，连接成功后显示"),e("code",[this._v("Running")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("连接成功后点击"),e("code",[this._v("Proxy")]),this._v("可进入线路选择界面，默认为自动选择线路，您可以手动选择想要使用的任意线路")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",{staticClass:"title"},[this._v("注意事项")]),e("p",[this._v("- Clash for Android默认会按照配置规则自动分流，除此之外，您还可以在Settings - Proxy - Access Control 界面设置勾选完全不需要走代理的App等功能")]),e("p",[this._v("- 目前 Clash for Android 还处在积极开发状态，各项功能可能不是非常完善，若您遇到问题请及时向开发者反馈")]),e("p",[this._v("- Clash for Android 非熊猫开发/提供")]),e("p",[this._v("- 更多关于 Clash for Android 的使用方法可以联系 App 作者获取支持")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",{staticClass:"title"},[this._v("更新线路、配置")]),e("p",[this._v("- 当您在熊猫的网站上修改了自定义代理列表，或者熊猫提供的线路发生变动时候，您需要更新您的配置")]),e("p",[this._v("- 只需在步骤2最后的位置，点击配置文件右侧的按钮即可更新")])])}],!1,null,null,null).exports},data:function(){return{activeName:"clash",tabs:["clash"]}},computed:h(h({},Object(o.b)(["staticFileDomain","apGuideTab"])),{},{guideKey:function(){return"allplatform"===this.current_service_cate?"apGuideTab":"homeGuideTab"},apGuideTab:{get:function(){return this.$store.state[this.guideKey]},set:function(t){return this.$store.dispatch("guideTab",{cate:this.guideKey,tabname:t})}}}),mounted:function(){console.log("[LOG] from ap/android.vue",this.current_service_cate),this.apGuideTab&&0!=this.apGuideTab&&this.tabs.includes(this.apGuideTab)||(this.apGuideTab="Clash")},methods:{handleClick:function(){}}},_=(r(1199),Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tutorial-container"},[r("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.apGuideTab,callback:function(e){t.apGuideTab=e},expression:"apGuideTab"}},[r("p",[r("nuxt-link",{staticClass:"back-link right smooth",attrs:{to:"/dashboard/menu/"}},[t._v(t._s(t.$t("back")))])],1),r("el-tab-pane",{attrs:{label:"Clash",name:"Clash"}},[r("ClashForAndroid")],1)],1)],1)}),[],!1,null,null,null));e.default=_.exports}}]);