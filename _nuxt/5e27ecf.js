(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1148:function(t,e,r){"use strict";r.d(e,"a",(function(){return G}));const n="3.7.2",o="function"==typeof atob,a="function"==typeof btoa,s="function"==typeof Buffer,c="function"==typeof TextDecoder?new TextDecoder:void 0,i="function"==typeof TextEncoder?new TextEncoder:void 0,l=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),p=(t=>{let e={};return t.forEach(((t,r)=>e[t]=r)),e})(l),u=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,d=String.fromCharCode.bind(String),f="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,e=(t=>t))=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),_=t=>t.replace(/=/g,"").replace(/[+\/]/g,(t=>"+"==t?"-":"_")),v=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),h=t=>{let e,r,n,o,a="";const s=t.length%3;for(let s=0;s<t.length;){if((r=t.charCodeAt(s++))>255||(n=t.charCodeAt(s++))>255||(o=t.charCodeAt(s++))>255)throw new TypeError("invalid character found");e=r<<16|n<<8|o,a+=l[e>>18&63]+l[e>>12&63]+l[e>>6&63]+l[63&e]}return s?a.slice(0,s-3)+"===".substring(s):a},b=a?t=>btoa(t):s?t=>Buffer.from(t,"binary").toString("base64"):h,m=s?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let r=0,n=t.length;r<n;r+=4096)e.push(d.apply(null,t.subarray(r,r+4096)));return b(e.join(""))},y=(t,e=!1)=>e?_(m(t)):m(t),A=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?d(192|e>>>6)+d(128|63&e):d(224|e>>>12&15)+d(128|e>>>6&63)+d(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return d(240|e>>>18&7)+d(128|e>>>12&63)+d(128|e>>>6&63)+d(128|63&e)},g=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,w=t=>t.replace(g,A),x=s?t=>Buffer.from(t,"utf8").toString("base64"):i?t=>m(i.encode(t)):t=>b(w(t)),C=(t,e=!1)=>e?_(x(t)):x(t),P=t=>C(t,!0),L=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,S=t=>{switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return d(55296+(e>>>10))+d(56320+(1023&e));case 3:return d((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return d((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},O=t=>t.replace(L,S),B=t=>{if(t=t.replace(/\s+/g,""),!u.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));let e,r,n,o="";for(let a=0;a<t.length;)e=p[t.charAt(a++)]<<18|p[t.charAt(a++)]<<12|(r=p[t.charAt(a++)])<<6|(n=p[t.charAt(a++)]),o+=64===r?d(e>>16&255):64===n?d(e>>16&255,e>>8&255):d(e>>16&255,e>>8&255,255&e);return o},k=o?t=>atob(v(t)):s?t=>Buffer.from(t,"base64").toString("binary"):B,F=s?t=>f(Buffer.from(t,"base64")):t=>f(k(t),(t=>t.charCodeAt(0))),U=t=>F(j(t)),E=s?t=>Buffer.from(t,"base64").toString("utf8"):c?t=>c.decode(F(t)):t=>O(k(t)),j=t=>v(t.replace(/[-_]/g,(t=>"-"==t?"+":"/"))),D=t=>E(j(t)),T=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),R=function(){const t=(t,e)=>Object.defineProperty(String.prototype,t,T(e));t("fromBase64",(function(){return D(this)})),t("toBase64",(function(t){return C(this,t)})),t("toBase64URI",(function(){return C(this,!0)})),t("toBase64URL",(function(){return C(this,!0)})),t("toUint8Array",(function(){return U(this)}))},$=function(){const t=(t,e)=>Object.defineProperty(Uint8Array.prototype,t,T(e));t("toBase64",(function(t){return y(this,t)})),t("toBase64URI",(function(){return y(this,!0)})),t("toBase64URL",(function(){return y(this,!0)}))},G={version:n,VERSION:"3.7.2",atob:k,atobPolyfill:B,btoa:b,btoaPolyfill:h,fromBase64:D,toBase64:C,encode:C,encodeURI:P,encodeURL:P,utob:w,btou:O,decode:D,isValid:t=>{if("string"!=typeof t)return!1;const e=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},fromUint8Array:y,toUint8Array:U,extendString:R,extendUint8Array:$,extendBuiltins:()=>{R(),$()}}},1294:function(t,e,r){var n=r(1466);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(2).default)("92582950",n,!0,{sourceMap:!1})},1464:function(t,e,r){t.exports=r.p+"img/potatso_lite.3707bc5.png"},1465:function(t,e,r){"use strict";r(1294)},1466:function(t,e,r){var n=r(1)(!1);n.push([t.i,".potatso-container .el-select{width:100%}.potatso-container .qr{margin-top:2rem}.potatso-container .qr canvas{width:60vw}.potatso-container .server-details,.potatso-container .server-details .el-row{margin-top:1rem}.potatso-container .server-details .el-row .el-input__inner{border:none}",""]),t.exports=n},1490:function(t,e,r){"use strict";r.r(e);r(62),r(27),r(23),r(9),r(40),r(28),r(39);var n=r(18),o=r(52),a=r(1148);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var i={data:function(){return{selectedLine:{},lineName:""}},computed:c(c({},Object(o.b)(["staticFileDomain","siteURL"])),{},{ssSubLink:function(){return this.current_service?"https://".concat(this.staticFileDomain,"/ss-sub/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""},ssLink:function(){var t=this.current_service,e=t.extra,r="ss";t.is_ssr&&(r="ssr");var n="";n="ss"===r?"".concat(e.ss_method||"aes-256-cfb",":").concat(e.sspwd||e.pac_name,"@").concat(this.selectedLine.server,":").concat(e.ss_port):"".concat(this.selectedLine.server,":").concat(e.ss_port,":").concat(e.ss_proto||"origin",":").concat(e.ss_method,":").concat(e.ss_obfs,":").concat(a.a.encode(e.sspwd||e.pac_name),"/?protoparam=").concat(a.a.encode(e.ss_proto_param),"&obfsparam=#{Base64.encode(e.ss_obfs_param)}&remarks=#{Base64.encode(").concat(this.siteURL,"+ ' | ' + this.selectedLine.pac_name.toUpperCase())}"),console.log(n);var o="".concat(r,"://").concat(a.a.encode(n));return console.log(o),o},sslServers:function(){return this.current_lines.filter((function(t){return t.ssltide}))}}),mounted:function(){console.log("[LOG] from potatso.vue",this.current_service_cate)},methods:{changeGuideLine:function(t){this.lineName=t.name,this.selectedLine=t}}},l=(r(1465),r(51)),p=Object(l.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"potatso-container"},[n("ol",[n("li",[n("span",{staticClass:"title"},[t._v("下载 Potatso Lite")]),n("p",[t._v("前往 App Store 下载 Potatso Lite"),n("br"),n("br"),n("center",[n("a",{on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/potatso-lite/id1239860606")}}},[n("img",{staticClass:"app-icon",attrs:{src:r(1464)}}),n("br"),n("br"),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openSite("https://itunes.apple.com/us/app/potatso-lite/id1239860606")}}},[t._v("前往 AppStore")])],1)]),n("br"),n("br"),n("center",[n("h3",[t._v("Potatso Lite 目前并不支持 VMess 协议，仅支持SSLTide和Shadowsocks协议")]),n("br")]),n("i",[t._v("Potatso Lite为第三方开发者发布的通用型客户端，目前为免费App。")]),n("br"),n("i",[t._v("如果您需要功能更强大、方便的软件，我们推荐您使用"),n("a",{on:{click:function(e){return t.switchGuideTab("apGuideTab","shadowrocket")}}},[t._v("Shadowrocket")])])],1),n("h4",[n("b",[t._v("近期收到较多反馈Potatso Lite无法正常使用的问题，我们已经与Potatso Lite作者进行反馈。")]),n("br"),t._v("如果您也无法通过Potatso Lite使用服务，我们建议您换用"),n("a",{on:{click:function(e){return t.switchGuideTab("apGuideTab","shadowrocket")}}},[t._v("Shadowrocket 配置服务")])]),n("p")]),n("li",[n("span",{staticClass:"title"},[t._v("导入线路")]),t._m(0),n("p",[t._v("如果已经有添加过线路，请点击主界面右上角的 + 号再选择 Add 添加")]),t._m(1),t._m(2),n("p",[t._v("其余部分各线路不同，请在下方选择线路，并按照对应线路信息填写：")]),n("br"),n("el-select",{attrs:{placeholder:"点此选择线路"},model:{value:t.lineName,callback:function(e){t.lineName=e},expression:"lineName"}},t._l(t.sslServers,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name},nativeOn:{click:function(r){return t.changeGuideLine(e)}}})})),1),t.lineName?n("div",{staticClass:"server-details"},[n("el-row",[n("el-col",{attrs:{span:5}},[n("p",[t._v("Host")])]),n("el-col",{attrs:{span:19}},[n("el-input",{attrs:{type:"text",value:t.selectedLine.host,readonly:""}})],1)],1),n("el-row",[n("el-col",{attrs:{span:5}},[n("p",[t._v("Port")])]),n("el-col",{attrs:{span:19}},[n("el-input",{attrs:{type:"text",value:t.selectedLine.ssltide_port,readonly:""}})],1)],1),n("el-row",[n("el-col",{attrs:{span:5}},[n("p",[t._v("User")])]),n("el-col",{attrs:{span:19}},[n("el-input",{attrs:{type:"text",value:this.current_service.user_id,readonly:""}})],1)],1),n("el-row",[n("el-col",{attrs:{span:5}},[n("p",[t._v("Password")])]),n("el-col",{attrs:{span:19}},[n("el-input",{attrs:{type:"text",value:this.current_service.extra.sslpwd||this.current_service.extra.pac_name,readonly:""}})],1)],1),n("el-row",[n("el-col",{attrs:{span:5}},[n("p",[t._v("Remark")])]),n("el-col",{attrs:{span:19}},[n("el-input",{attrs:{type:"text",value:t.selectedLine.name,readonly:""}})],1)],1)],1):n("div",[n("center",[n("i",{staticClass:"small"},[t._v("请先选择线路")])])],1),n("br"),n("br"),t._m(3),n("p",[t._v("保存后会自动跳回到软件主界面，再次点击主界面右上角的 + 号可继续添加线路，建议您先添加完所有线路")])],1),t._m(4),t._m(5),t._m(6)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("打开 Potatso Lite，点击屏幕最下方的"),r("code",[t._v("Add a Proxy")]),t._v("然后选择Manual Input下面的"),r("code",[t._v("Add")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("1. 修改"),r("code",[t._v("Type")]),t._v("为 "),r("code",[t._v("HTTPS")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("2. 修改"),r("code",[t._v("Authentication")]),t._v("为"),r("code",[t._v("PASSWORD")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("填写完成后点击右上角的"),r("code",[t._v("Done")]),t._v("即可保存此线路")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("调整软件设定")]),r("p",[t._v("在App最下方点击"),r("code",[t._v("Settings")]),t._v("进入设置页面，开启"),r("code",[t._v("智能路由")])]),r("p",[t._v("开启后只有墙外流量会流经PandaFan的服务器，不影响访问国内的站点")]),r("p",[t._v("关闭智能路由，则所有流量都会被加密转发给PandaFan的服务器，可以在公共网络下保护您的数据安全和个人隐私")]),r("p",{staticClass:"question"},[t._v("开启智能路由时出现错误信息？偶尔会发生这样的情况，属于Potatso Lite的软件问题，您可以无视此提示，暂时关闭Smart Routing使用即可。"),r("br"),t._v("若持续出现此现象，您可以向软件作者反馈。")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("完成，开始使用")]),r("p",[t._v("在主界面中点击最下方的"),r("code",[t._v("开始")]),t._v("便连接上服务啦")]),r("p",[t._v("请继续阅读本页剩余内容，了解其他注意事项")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"title"},[t._v("注意事项")]),r("p",[t._v("- Potatso Lite 为免费软件，稳定性、功能不如其他App强大，有条件建议购买 Shadowrocket")]),r("p",[t._v("偶尔软件使用出现问题，请尝试更换线路和关闭"),r("code",[t._v("智能路由")])]),r("p",[t._v("- Potatso Lite 非PandaFan开发/提供，若有关于App本身的问题，请联系App开发者获取支持")])])}],!1,null,null,null);e.default=p.exports}}]);