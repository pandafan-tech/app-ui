(window.webpackJsonp=window.webpackJsonp||[]).push([[35,13,15],{1053:function(t,e,r){"use strict";r.d(e,"a",(function(){return Q}));const n="3.6.0",o="function"==typeof atob,c="function"==typeof btoa,l="function"==typeof Buffer,d="function"==typeof TextDecoder?new TextDecoder:void 0,f="function"==typeof TextEncoder?new TextEncoder:void 0,h=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],_=(a=>{let t={};return a.forEach(((e,i)=>t[e]=i)),t})(h),v=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,m=String.fromCharCode.bind(String),k="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,e=(t=>t))=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),y=t=>t.replace(/[+\/]/g,(t=>"+"==t?"-":"_")).replace(/=+$/m,""),w=s=>s.replace(/[^A-Za-z0-9\+\/]/g,""),x=t=>{let e,r,n,o,c="";const l=t.length%3;for(let i=0;i<t.length;){if((r=t.charCodeAt(i++))>255||(n=t.charCodeAt(i++))>255||(o=t.charCodeAt(i++))>255)throw new TypeError("invalid character found");e=r<<16|n<<8|o,c+=h[e>>18&63]+h[e>>12&63]+h[e>>6&63]+h[63&e]}return l?c.slice(0,l-3)+"===".substring(l):c},C=c?t=>btoa(t):l?t=>Buffer.from(t,"binary").toString("base64"):x,O=l?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let i=0,r=t.length;i<r;i+=4096)e.push(m.apply(null,t.subarray(i,i+4096)));return C(e.join(""))},S=(t,e=!1)=>e?y(O(t)):O(t),A=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?m(192|e>>>6)+m(128|63&e):m(224|e>>>12&15)+m(128|e>>>6&63)+m(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return m(240|e>>>18&7)+m(128|e>>>12&63)+m(128|e>>>6&63)+m(128|63&e)},j=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,E=u=>u.replace(j,A),P=l?s=>Buffer.from(s,"utf8").toString("base64"):f?s=>O(f.encode(s)):s=>C(E(s)),D=(t,e=!1)=>e?y(P(t)):P(t),F=t=>D(t,!0),T=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,$=t=>{switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return m(55296+(e>>>10))+m(56320+(1023&e));case 3:return m((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return m((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},B=b=>b.replace(T,$),U=t=>{if(t=t.replace(/\s+/g,""),!v.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));let e,r,n,o="";for(let i=0;i<t.length;)e=_[t.charAt(i++)]<<18|_[t.charAt(i++)]<<12|(r=_[t.charAt(i++)])<<6|(n=_[t.charAt(i++)]),o+=64===r?m(e>>16&255):64===n?m(e>>16&255,e>>8&255):m(e>>16&255,e>>8&255,255&e);return o},R=o?t=>atob(w(t)):l?t=>Buffer.from(t,"base64").toString("binary"):U,z=l?a=>k(Buffer.from(a,"base64")):a=>k(R(a),(t=>t.charCodeAt(0))),G=a=>z(L(a)),I=l?a=>Buffer.from(a,"base64").toString("utf8"):d?a=>d.decode(z(a)):a=>B(R(a)),L=a=>w(a.replace(/[-_]/g,(t=>"-"==t?"+":"/"))),N=t=>I(L(t)),Z=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),W=function(){const t=(t,body)=>Object.defineProperty(String.prototype,t,Z(body));t("fromBase64",(function(){return N(this)})),t("toBase64",(function(t){return D(this,t)})),t("toBase64URI",(function(){return D(this,!0)})),t("toBase64URL",(function(){return D(this,!0)})),t("toUint8Array",(function(){return G(this)}))},M=function(){const t=(t,body)=>Object.defineProperty(Uint8Array.prototype,t,Z(body));t("toBase64",(function(t){return S(this,t)})),t("toBase64URI",(function(){return S(this,!0)})),t("toBase64URL",(function(){return S(this,!0)}))},Q={version:n,VERSION:"3.6.0",atob:R,atobPolyfill:U,btoa:C,btoaPolyfill:x,fromBase64:N,toBase64:D,encode:D,encodeURI:F,encodeURL:F,utob:E,btou:B,decode:N,isValid:t=>{if("string"!=typeof t)return!1;const s=t.replace(/\s+/g,"").replace(/=+$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(s)||!/[^\s0-9a-zA-Z\-_]/.test(s)},fromUint8Array:S,toUint8Array:G,extendString:W,extendUint8Array:M,extendBuiltins:()=>{W(),M()}}},1081:function(t,e,r){t.exports=r.p+"img/shadowrocket_real.3981b28.jpg"},1082:function(t,e,r){t.exports=r.p+"img/1.e146761.png"},1083:function(t,e,r){t.exports=r.p+"img/2.42fb77b.png"},1084:function(t,e,r){var content=r(1132);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("c94b6b1c",content,!0,{sourceMap:!1})},1085:function(t,e,r){var content=r(1135);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("dcbd39ec",content,!0,{sourceMap:!1})},1127:function(t,e,r){t.exports=r.p+"img/shadowrocket_fake.a8a3b4d.jpg"},1128:function(t,e,r){t.exports=r.p+"img/0.76312bf.jpeg"},1129:function(t,e,r){t.exports=r.p+"img/3.f31ec14.png"},1130:function(t,e,r){t.exports=r.p+"img/4.9bc02c1.png"},1131:function(t,e,r){"use strict";r(1084)},1132:function(t,e,r){var n=r(57)((function(i){return i[1]}));n.push([t.i,"",""]),t.exports=n},1133:function(t,e,r){t.exports=r.p+"img/surge_for_ios.af1e142.jpg"},1134:function(t,e,r){"use strict";r(1085)},1135:function(t,e,r){var n=r(57)((function(i){return i[1]}));n.push([t.i,".checkbox-wrapper{margin:1rem .5rem 1rem 0}",""]),t.exports=n},1170:function(t,e,r){var content=r(1324);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("91bb9078",content,!0,{sourceMap:!1})},1182:function(t,e,r){"use strict";r.r(e);r(59),r(23),r(20),r(8),r(45);var n=r(16),o=r(46),c=r(1053);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={middleware:["load-rt-data","authenticated"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({surge_config_link:function(){return console.log("--\x3e",this.current_service_cate),this.current_service?"https://".concat(this.staticFileDomain,"/surge/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""},sub_qrlink:function(){if(!this.current_service)return"";var t="https://".concat(this.staticFileDomain,"/apsr/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name),e="PandaFan User ".concat(this.current_service.user_id);return"sub://".concat(c.a.encode(t),"?remarks=").concat(encodeURI(e))},rule_qrlink:function(){return this.surge_config_link+"?ruleonly"}},Object(o.b)(["staticFileDomain"])),mounted:function(){console.log("[LOG] from shadowrocket.vue",this.current_service_cate)},methods:{}},f=(r(1131),r(44)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shadowrocket-container"},["zh"===t.$i18n.locale?n("div",[n("ol",[n("li",[n("span",{staticClass:"title"},[t._v("下载 Shadowrocket")]),n("p",[t._v("前往 App Store 下载 Shadowrocket"),n("br"),n("br"),n("center",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[t._v("前往 AppStore")])],1),n("br"),n("el-row",{attrs:{gutter:20}},[n("center",[n("b",{staticClass:"small"},[t._v("目前AppStore存在众多山寨App，请认准正版")])]),n("el-col",{attrs:{span:12}},[n("center",[n("b",[t._v("真 👍🏻")]),n("br"),n("a",{on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[n("img",{staticClass:"app-icon",attrs:{src:r(1081)}})])])],1),n("el-col",{attrs:{span:12}},[n("center",[n("b",[t._v("假!!! 😡")]),n("br"),n("img",{staticClass:"app-icon",attrs:{src:r(1127)}})])],1)],1),n("br"),n("i",[t._v("Shadowrocket为第三方开发者发布的通用型客户端，目前为收费App")])],1)]),n("li",[n("span",{staticClass:"title"},[t._v("导入线路")]),t._m(0),n("h4",{staticClass:"warning"},[t._v("请确认使用最新版App，否则可能无法导入")]),t.sub_qrlink?n("center",[n("qrcode",{attrs:{value:t.sub_qrlink}}),n("p",[n("b",[t._v("线路二维码")])])],1):t._e(),n("br"),n("center",[n("img",{staticClass:"screenshot",attrs:{src:r(1128)}})]),n("p",[t._v("成功后，您可以看到首页已显示所有线路")]),t._m(1)],1),n("li",[n("span",{staticClass:"title"},[t._v("导入路由规则")]),t._m(2),t.rule_qrlink?n("center",[n("qrcode",{attrs:{value:t.rule_qrlink}}),n("p",[n("b",[t._v("路由规则二维码")])])],1):t._e(),n("br"),n("center",[n("img",{staticClass:"screenshot",attrs:{src:r(1082)}}),n("br"),n("img",{staticClass:"screenshot",attrs:{src:r(1083)}})])],1),n("li",[n("span",{staticClass:"title"},[t._v("连接线路")]),t._m(3),t._m(4),t._m(5),n("p",[t._v("请继续阅读本页剩余内容，了解其他注意事项")]),n("center",[n("img",{staticClass:"screenshot",attrs:{src:r(1129)}})])],1),n("li",[n("span",{staticClass:"title"},[t._v("注意事项")]),t._m(6),n("p",[t._v("Shadowrocket 非PandaFan开发/提供，若有关于App本身的问题，请联系App开发者获取支持")]),n("p"),n("center",[n("img",{staticClass:"screenshot",attrs:{src:r(1130)}})])],1)])]):n("div",[n("ol",[n("li",[n("span",{staticClass:"title"},[t._v("Download Shadowrocket")]),n("p",[t._v("Download Shadowrocket from the App Store"),n("br"),n("br"),n("center",[n("a",{on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[n("img",{staticClass:"app-icon",attrs:{src:r(1081)}}),n("br"),n("br"),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[t._v("Download")])],1)]),n("br"),n("i",[t._v("Shadowrocket is a paid app developed by third-party")]),n("br"),n("i",[t._v("If you would like a ")]),n("b",[t._v("FREE ")]),n("i",[t._v("app with less features, use "),n("a",{on:{click:function(e){return t.switchGuideTab("apGuideTab","potatso_lite")}}},[t._v("Potatso Lite")])])],1)]),n("li",[n("span",{staticClass:"title"},[t._v("Import Servers")]),t._m(7),n("center",[n("qrcode",{attrs:{value:t.sub_qrlink}}),n("p",[n("b",[t._v("QR code for server list")])])],1),n("p",[t._v("When imported successfully, you will see the server list immediately.")]),t._m(8)],1),n("li",[n("span",{staticClass:"title"},[t._v("Import Routing Rules")]),t._m(9),n("center",[n("qrcode",{attrs:{value:t.rule_qrlink}}),n("p",[n("b",[t._v("QR code for routing rules")])])],1),n("br"),n("center",[n("img",{staticClass:"screenshot",attrs:{src:r(1082)}}),n("br"),n("img",{staticClass:"screenshot",attrs:{src:r(1083)}})])],1),n("li",[n("span",{staticClass:"title"},[t._v("Connect!")]),t._m(10),n("p",[t._v("You may choose different servers from the Home tab")]),t._m(11),n("ul",[t._m(12),n("p",[n("Code",[t._v("Direct")]),t._v("mode will send no data through our servers.")],1),t._m(13)])]),t._m(14)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("打开 Shadowrocket，在"),r("code",[t._v("首页")]),t._v("界面，点左上角的 扫码 图标")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"question"},[r("b",{staticClass:"larger"},[t._v("没有看到导入的线路？")]),r("br"),t._v("请尝试将Shadowrocket彻底关闭（从屏幕底部向上轻扫并在屏幕中间稍作停顿，在Shadowrocket App预览上向上轻扫来关闭），然后再重新打开Shadowrocket")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" 进入"),r("code",[t._v("配置")]),t._v("界面（必须先进入此界面），然后再点左上角的 扫码 图标"),r("br"),t._v("扫码完成后在"),r("code",[t._v("远程文件")]),t._v("下方将出现新的配置文件地址，点一下它，然后选择"),r("code",[t._v("使用配置 Use Config")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("回到"),r("code",[t._v("首页")]),t._v("界面，您可以在此自由选择要使用的线路，被选中的线路左侧会有橙色小点  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("p",[t._v("- 请确保"),r("code",[t._v("全局路由")]),t._v("选项已设为"),r("code",[t._v("配置")])]),r("p",[t._v("- 选择"),r("code",[t._v("直连")]),t._v("将无法使用服务")]),r("p",[t._v("- 选择"),r("code",[t._v("代理")]),t._v("则是全部流量都通过PandaFan的服务器，适合在公共场合的 Wi-Fi 下加密流量保护隐私")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("打开最上方"),r("code",[t._v("未连接")]),t._v("右侧的开关便开始使用啦。首次连接会需要安装部分配置到系统，需要进行Face ID/Touch ID/密码验证")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("当您在PandaFan的网站上修改了自定义代理列表，或者PandaFan提供的线路发生变动时候，您需要更新您的配置"),r("br"),t._v("更新办法：重新导入线路配置即可")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Open Shadowrocket, at the "),r("code",[t._v("Home")]),t._v("tab, tap the scanner icon in the upper left corner")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"question"},[r("b",{staticClass:"larger"},[t._v("No Servers Appeared?")]),r("br"),t._v("Quit Shadowrocket and re-launch the app to see changes.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Go to "),r("code",[t._v("Config")]),t._v("tab, tap the scanner icon in the upper left and scan the QR code below."),r("br"),t._v("Now a link should appear under the "),r("code",[t._v("REMOTE FILES")]),t._v("section. Tap the link and select"),r("code",[t._v("Use Config")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Back to the"),r("code",[t._v("Home")]),t._v("tab. Use the switch button at the top to turn on/off the VPN.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("The "),r("code",[t._v("Global Route")]),t._v("allows you to change the routing policy:")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("code",[t._v("Config")]),t._v("should be the default option.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("code",[t._v("Proxy")]),t._v("mode will send everything through our servers, regardless if the site is blocked. This can be used to protect your privacy when using public Wi-Fi.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("Additional Notes")]),r("p",[t._v("When you have modified the custom proxy list, or if the server provided by Panda has changes, you need to update your configuration.")]),r("p",[t._v("To update your configurations, simply tap the configuration file from Step 3, and select Update")])])}],!1,null,null,null);e.default=component.exports},1183:function(t,e,r){"use strict";r.r(e);r(59),r(23),r(20),r(8),r(45);var n=r(16),o=r(46);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{dflags:{no_tls13:!1,no_v2:!1}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({surge_config_link:function(){if(console.log("--\x3e",this.current_service_cate),this.current_service){var t="https://".concat(this.staticFileDomain,"/surge/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name),e=[];for(var r in this.dflags)this.dflags[r]&&e.push(r);return e.length>0&&(t+="?".concat(e.join("&"))),t}return""},flags:{get:function(){return this.dflags},set:function(t){this.dflags=t}}},Object(o.b)(["staticFileDomain"])),mounted:function(){console.log("[LOG] from surge.vue",this.current_service_cate)},methods:{}},d=(r(1134),r(44)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"surge-container"},[n("ol",[n("li",[n("span",{staticClass:"title"},[t._v("下载 Surge 4")]),n("p",[t._v("前往 App Store 下载 Surge 4"),n("br"),t._m(0),n("br"),n("br"),n("center",[n("a",{on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/surge-3/id1442620678")}}},[n("img",{staticClass:"app-icon",attrs:{src:r(1133)}}),n("br"),n("br"),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/surge-3/id1442620678")}}},[t._v("前往 AppStore")])],1)]),n("br"),n("i",[t._v("Surge 为第三方开发者发布的通用型客户端，目前可以免费下载，但使用服务、开启其代理功能则需要付费内购。")])],1)]),n("li",[n("span",{staticClass:"title"},[t._v("导入线路配置")]),t._m(1),n("p",[t._v("在弹出的框中输入下面的配置文件地址，然后确定即可")]),n("p",{staticClass:"small"},[t._v("Surge 针对部分功能额外收费，如果您的Surge未订阅下列功能，请勾选以关闭对应功能，否则默认开启")]),t._l(t.flags,(function(e,r){return n("span",{staticClass:"checkbox-wrapper"},[n("el-checkbox",{attrs:{border:"",size:"medium"},model:{value:t.flags[r],callback:function(e){t.$set(t.flags,r,e)},expression:"flags[flagName]"}},[t._v(t._s(t.$t("guide."+r)))])],1)})),n("br"),n("br"),n("el-tooltip",{attrs:{content:t.surge_config_link,placement:"top",effect:"light"}},[n("el-input",{attrs:{type:"text",value:t.surge_config_link,readonly:""}})],1),n("i",{staticClass:"small"},[t._v("为防止漏输入内容，请将鼠标移动到地址上显示完整内容")]),n("br")],2),t._m(2),t._m(3),n("li",[n("span",{staticClass:"title"},[t._v("注意事项")]),n("p",[t._v("- 当有新的线路增加或者其它配置变更，Surge都会自动为您最新线路和规则，无需手动再次导入 :)")]),n("p",[t._v("- 请注意，APP 中的线路测速功能并不准确，由于 SSLTide 协议的特性，测得的延迟会是实际的3-4倍，请以实际使用情况为准")]),n("p",[t._v("- Surge 非PandaFan开发/提供，若有关于App本身的问题，请联系App开发者获取支持")]),n("p",[t._v("补充阅读："),n("a",{on:{click:function(e){return t.openSite("https://medium.com/@scomper/surge-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-a1533c10e80b")}}},[t._v("Surge 新手使用指南")])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"small"},[r("i",[t._v("请勿下载 Surge for Enterprise")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("打开 Surge，点左上角的 Default 进入"),r("code",[t._v("配置列表")]),t._v("，点 "),r("code",[t._v("从URL下载配置")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("调整软件设定")]),r("p",[t._v("回到 App 首页主界面，开启 Rewrite （开启该功能需要付费）")]),r("ul",[r("p",[t._v("- 请确保"),r("code",[t._v("出站模式")]),t._v("选项已设为"),r("code",[t._v("规则模式")])]),r("p",[t._v("- 选择"),r("code",[t._v("直接连接")]),t._v("将无法使用服务")]),r("p",[t._v("- 选择"),r("code",[t._v("全局代理")]),t._v("则是全部流量都通过PandaFan的服务器，适合在公共场合的 Wi-Fi 下加密流量保护隐私")])]),r("p",[t._v("下面进入"),r("code",[t._v("策略组")]),t._v("界面选择您要是用的线路，其中："),r("br"),t._v("Auto 为自动选择线路"),r("br"),t._v("DIRECT 为不使用服务，等同于「出站模式」中的「直接连接」")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("完成，开始使用")]),r("p",[t._v("选完线路，回到主界面，点右上角的"),r("code",[t._v("启动")]),t._v("便开始使用啦。首次连接会需要安装部分配置到系统，需要进行Face ID/Touch ID/密码验证。")]),r("p",[t._v("请继续阅读本页剩余内容，了解其他注意事项")])])}],!1,null,null,null);e.default=component.exports},1323:function(t,e,r){"use strict";r(1170)},1324:function(t,e,r){var n=r(57)((function(i){return i[1]}));n.push([t.i,'.tutorial-container{min-height:100vh;max-width:100vw;padding-top:.8rem}.tutorial-container .back-link{position:fixed;right:.5rem;bottom:.5rem;text-decoration:none}.tutorial-container .back-link .el-tabs{padding:.8rem}.tutorial-container .back-link .el-tabs hr{display:block;margin-top:1rem;height:2px;background:#fff;width:100vw}.tutorial-container .back-link .el-tabs__item{font-size:1rem}.tutorial-container .back-link .el-tabs__header{box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.tutorial-container .back-link .el-input__inner{background:#34495e!important;border-color:#1abc9c;color:#f1c40f!important;font-size:.9rem}.tutorial-container .back-link .el-input__inner::-moz-selection{color:#e67e22;background:#000}.tutorial-container .back-link .el-input__inner::selection{color:#e67e22;background:#000}.tutorial-container .back-link ol{list-style:none;counter-reset:my-awesome-counter;padding:2rem 0 0}.tutorial-container .back-link ol li{counter-increment:my-awesome-counter;margin-bottom:2rem;font-size:1.2rem}.tutorial-container .back-link ol li p{margin-top:.5rem;margin-bottom:.5rem}.tutorial-container .back-link ol li p:before{content:counter(my-awesome-counter);background:#f4f7fc;width:3.5rem;height:3.5rem;border-radius:5px;box-shadow:0 5px 12px 0 rgba(0,0,0,.3);display:inline-block;line-height:3.5rem;color:#16a085;text-align:center;margin-right:1rem;font-size:2.3rem}.tutorial-container .back-link ol li ol li:before{background:#27ae60;font-size:1.5rem;width:2rem;height:2rem;line-height:2rem}.tutorial-container .back-link ol li ol li ol li:before{background:#1abc9c;font-size:1.5rem;width:2rem;height:2rem;line-height:2rem}.tutorial-container .back-link img{max-width:100%;max-height:100%;position:center}.tutorial-container .back-link img.portrait{height:80px;width:30px}.tutorial-container .back-link img.portrait.landscape{height:30px;width:80px}.tutorial-container .back-link img.portrait.square{height:75px;width:75px}.tutorial-container .back-link img.portrait.app-icon{height:144px;border-radius:20px}.tutorial-container .back-link img.portrait.screenshot{max-height:700px}.tutorial-container .back-link span.title{font-size:1.5rem;margin-top:-2.8rem;background:#f4f7fc;color:#34495e;border-radius:50px 15px 15px 50px;display:flex;justify-content:center;align-items:center;text-align:center;margin-bottom:2rem}.tutorial-container .back-link p.question{padding:.5rem 1rem 1rem;font-size:90%;border-left:5px solid #f1c40f;background:#4d4d4d;border-radius:0 5px 5px 0}.tutorial-container .back-link p.question:before{content:"?";font-size:1.8rem;padding-right:1rem;color:#f1c40f;font-weight:700}.tutorial-container .back-link p.question:before a{color:#f1c40f;text-decoration:none}.tutorial-container .back-link *{color:#f4f7fc}.tutorial-container .back-link a{font-size:110%;-webkit-text-decoration:underline #1abc9c;text-decoration:underline #1abc9c;color:#1abc9c}.tutorial-container .back-link code{background:#bdc3c7;color:#34495e;padding:.03rem .5rem .08rem;border-radius:5px;margin:0 .3rem}',""]),t.exports=n},1352:function(t,e,r){"use strict";r.r(e);r(59),r(23),r(20),r(8),r(45),r(82),r(101);var n=r(16),o=r(46),c=r(1182),l=r(1183);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={components:{Shadowrocket:c.default,SurgeForiOS:l.default},middleware:["load-rt-data","authenticated"],data:function(){return{activeName:"shadowrocket",validTabNames:["shadowrocket","potatso_lite","surge"]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({guideKey:function(){return"allplatform"===this.current_service_cate?"apGuideTab":"homeGuideTab"},apGuideTab:{get:function(){return this.$store.state[this.guideKey]},set:function(t){return this.$store.dispatch("guideTab",{cate:this.guideKey,tabname:t})}}},Object(o.b)(["staticFileDomain","siteURL"])),mounted:function(){console.log("[LOG] from ap/ios.vue",this.current_service_cate),console.log("includes----\x3e",!this.validTabNames.includes(this.apGuideTab)),this.apGuideTab&&0!==this.apGuideTab&&this.validTabNames.includes(this.apGuideTab)||(this.apGuideTab="shadowrocket")},methods:{handleClick:function(){},openSiteUrl:function(t){this.openSite(this.siteURL+t)}}},h=(r(1323),r(44)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tutorial-container"},[r("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.apGuideTab,callback:function(e){t.apGuideTab=e},expression:"apGuideTab"}},[r("p",[r("b",[t._v("\b在上方选择要使用的配置App")]),r("nuxt-link",{staticClass:"back-link right smooth",attrs:{to:"/dashboard/menu/"}},[t._v(t._s(t.$t("back")))])],1),r("hr"),r("center",[r("br"),r("h3",{staticClass:"warning"},[t._v("下载App前您需要准备【非中国区】Apple ID"),r("br"),r("a",{on:{click:function(e){return t.openSiteUrl("/knowledges/65")}}},[t._v("了解详情")])])]),r("hr"),r("el-tab-pane",{attrs:{label:"Shadowrocket",name:"shadowrocket"}},[r("Shadowrocket")],1),r("el-tab-pane",{attrs:{label:"Surge",name:"surge"}},[r("SurgeForiOS")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);