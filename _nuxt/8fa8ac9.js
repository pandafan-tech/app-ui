(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1156:function(a,u,n){"use strict";n.d(u,"a",function(){return J});const i="3.7.2",v=i,O=typeof atob=="function",R=typeof btoa=="function",h=typeof Buffer=="function",E=typeof TextDecoder=="function"?new TextDecoder:void 0,k=typeof TextEncoder=="function"?new TextEncoder:void 0,$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",m=Array.prototype.slice.call($),g=(r=>{let o={};return r.forEach((_,d)=>o[_]=d),o})(m),P=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,c=String.fromCharCode.bind(String),A=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(r,o=_=>_)=>new Uint8Array(Array.prototype.slice.call(r,0).map(o)),S=r=>r.replace(/=/g,"").replace(/[+\/]/g,o=>o=="+"?"-":"_"),j=r=>r.replace(/[^A-Za-z0-9\+\/]/g,""),U=r=>{let o,_,d,b,f="";const B=r.length%3;for(let w=0;w<r.length;){if((_=r.charCodeAt(w++))>255||(d=r.charCodeAt(w++))>255||(b=r.charCodeAt(w++))>255)throw new TypeError("invalid character found");o=_<<16|d<<8|b,f+=m[o>>18&63]+m[o>>12&63]+m[o>>6&63]+m[o&63]}return B?f.slice(0,B-3)+"===".substring(B):f},x=R?r=>btoa(r):h?r=>Buffer.from(r,"binary").toString("base64"):U,y=h?r=>Buffer.from(r).toString("base64"):r=>{const o=4096;let _=[];for(let d=0,b=r.length;d<b;d+=o)_.push(c.apply(null,r.subarray(d,d+o)));return x(_.join(""))},C=(r,o=!1)=>o?S(y(r)):y(r),e=r=>{if(r.length<2){var o=r.charCodeAt(0);return o<128?r:o<2048?c(192|o>>>6)+c(128|o&63):c(224|o>>>12&15)+c(128|o>>>6&63)+c(128|o&63)}else{var o=65536+(r.charCodeAt(0)-55296)*1024+(r.charCodeAt(1)-56320);return c(240|o>>>18&7)+c(128|o>>>12&63)+c(128|o>>>6&63)+c(128|o&63)}},s=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,t=r=>r.replace(s,e),l=h?r=>Buffer.from(r,"utf8").toString("base64"):k?r=>y(k.encode(r)):r=>x(t(r)),p=(r,o=!1)=>o?S(l(r)):l(r),T=r=>p(r,!0),V=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Q=r=>{switch(r.length){case 4:var o=(7&r.charCodeAt(0))<<18|(63&r.charCodeAt(1))<<12|(63&r.charCodeAt(2))<<6|63&r.charCodeAt(3),_=o-65536;return c((_>>>10)+55296)+c((_&1023)+56320);case 3:return c((15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2));default:return c((31&r.charCodeAt(0))<<6|63&r.charCodeAt(1))}},I=r=>r.replace(V,Q),L=r=>{if(r=r.replace(/\s+/g,""),!P.test(r))throw new TypeError("malformed base64.");r+="==".slice(2-(r.length&3));let o,_="",d,b;for(let f=0;f<r.length;)o=g[r.charAt(f++)]<<18|g[r.charAt(f++)]<<12|(d=g[r.charAt(f++)])<<6|(b=g[r.charAt(f++)]),_+=d===64?c(o>>16&255):b===64?c(o>>16&255,o>>8&255):c(o>>16&255,o>>8&255,o&255);return _},D=O?r=>atob(j(r)):h?r=>Buffer.from(r,"base64").toString("binary"):L,z=h?r=>A(Buffer.from(r,"base64")):r=>A(D(r),o=>o.charCodeAt(0)),M=r=>z(N(r)),H=h?r=>Buffer.from(r,"base64").toString("utf8"):E?r=>E.decode(z(r)):r=>I(D(r)),N=r=>j(r.replace(/[-_]/g,o=>o=="-"?"+":"/")),F=r=>H(N(r)),K=r=>{if(typeof r!="string")return!1;const o=r.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(o)||!/[^\s0-9a-zA-Z\-_]/.test(o)},W=r=>({value:r,enumerable:!1,writable:!0,configurable:!0}),Z=function(){const r=(o,_)=>Object.defineProperty(String.prototype,o,W(_));r("fromBase64",function(){return F(this)}),r("toBase64",function(o){return p(this,o)}),r("toBase64URI",function(){return p(this,!0)}),r("toBase64URL",function(){return p(this,!0)}),r("toUint8Array",function(){return M(this)})},G=function(){const r=(o,_)=>Object.defineProperty(Uint8Array.prototype,o,W(_));r("toBase64",function(o){return C(this,o)}),r("toBase64URI",function(){return C(this,!0)}),r("toBase64URL",function(){return C(this,!0)})},J={version:i,VERSION:v,atob:D,atobPolyfill:L,btoa:x,btoaPolyfill:U,fromBase64:F,toBase64:p,encode:p,encodeURI:T,encodeURL:T,utob:t,btou:I,decode:F,isValid:K,fromUint8Array:C,toUint8Array:M,extendString:Z,extendUint8Array:G,extendBuiltins:()=>{Z(),G()}}},1180:function(a,u,n){a.exports=n.p+"img/shadowrocket_real.3981b28.jpg"},1181:function(a,u,n){a.exports=n.p+"img/1.e146761.png"},1182:function(a,u,n){a.exports=n.p+"img/2.42fb77b.png"},1183:function(a,u,n){var i=n(1240);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var v=n(2).default,O=v("2655e102",i,!0,{sourceMap:!1})},1235:function(a,u,n){a.exports=n.p+"img/shadowrocket_fake.a8a3b4d.jpg"},1236:function(a,u,n){a.exports=n.p+"img/0.76312bf.jpeg"},1237:function(a,u,n){a.exports=n.p+"img/3.f31ec14.png"},1238:function(a,u,n){a.exports=n.p+"img/4.9bc02c1.png"},1239:function(a,u,n){"use strict";var i=n(1183),v=n.n(i)},1240:function(a,u,n){var i=n(1),v=i(!1);v.push([a.i,"",""]),a.exports=v},1303:function(a,u,n){"use strict";n.r(u);var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"shadowrocket-container"},[e.$i18n.locale==="zh"?t("div",[t("ol",[t("li",[t("span",{staticClass:"title"},[e._v("\u4E0B\u8F7D Shadowrocket")]),t("p",[e._v("\u524D\u5F80 App Store \u4E0B\u8F7D Shadowrocket"),t("br"),t("br"),t("center",[t("el-button",{attrs:{type:"primary"},on:{click:function(l){return e.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[e._v("\u524D\u5F80 AppStore")])],1),t("br"),t("el-row",{attrs:{gutter:20}},[t("center",[t("b",{staticClass:"small"},[e._v("\u76EE\u524DAppStore\u5B58\u5728\u4F17\u591A\u5C71\u5BE8App\uFF0C\u8BF7\u8BA4\u51C6\u6B63\u7248")])]),t("el-col",{attrs:{span:12}},[t("center",[t("b",[e._v("\u771F \u{1F44D}\u{1F3FB}")]),t("br"),t("a",{on:{click:function(l){return e.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[t("img",{staticClass:"app-icon",attrs:{src:n(1180)}})])])],1),t("el-col",{attrs:{span:12}},[t("center",[t("b",[e._v("\u5047!!! \u{1F621}")]),t("br"),t("img",{staticClass:"app-icon",attrs:{src:n(1235)}})])],1)],1),t("br"),t("i",[e._v("Shadowrocket\u4E3A\u7B2C\u4E09\u65B9\u5F00\u53D1\u8005\u53D1\u5E03\u7684\u901A\u7528\u578B\u5BA2\u6237\u7AEF\uFF0C\u76EE\u524D\u4E3A\u6536\u8D39App")])],1)]),t("li",[t("span",{staticClass:"title"},[e._v("\u5BFC\u5165\u7EBF\u8DEF")]),e._m(0),t("h4",{staticClass:"warning"},[e._v("\u8BF7\u786E\u8BA4\u4F7F\u7528\u6700\u65B0\u7248App\uFF0C\u5426\u5219\u53EF\u80FD\u65E0\u6CD5\u5BFC\u5165")]),e.sub_qrlink?t("center",[t("qrcode",{attrs:{value:e.sub_qrlink}}),t("p",[t("b",[e._v("\u7EBF\u8DEF\u4E8C\u7EF4\u7801")])])],1):e._e(),t("br"),t("center",[t("img",{staticClass:"screenshot",attrs:{src:n(1236)}})]),t("p",[e._v("\u6210\u529F\u540E\uFF0C\u60A8\u53EF\u4EE5\u770B\u5230\u9996\u9875\u5DF2\u663E\u793A\u6240\u6709\u7EBF\u8DEF")]),e._m(1)],1),t("li",[t("span",{staticClass:"title"},[e._v("\u5BFC\u5165\u8DEF\u7531\u89C4\u5219")]),e._m(2),e.rule_qrlink?t("center",[t("qrcode",{attrs:{value:e.rule_qrlink}}),t("p",[t("b",[e._v("\u8DEF\u7531\u89C4\u5219\u4E8C\u7EF4\u7801")])])],1):e._e(),t("br"),t("center",[t("img",{staticClass:"screenshot",attrs:{src:n(1181)}}),t("br"),t("img",{staticClass:"screenshot",attrs:{src:n(1182)}})])],1),t("li",[t("span",{staticClass:"title"},[e._v("\u8FDE\u63A5\u7EBF\u8DEF")]),e._m(3),e._m(4),e._m(5),t("p",[e._v("\u8BF7\u7EE7\u7EED\u9605\u8BFB\u672C\u9875\u5269\u4F59\u5185\u5BB9\uFF0C\u4E86\u89E3\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879")]),t("center",[t("img",{staticClass:"screenshot",attrs:{src:n(1237)}})])],1),t("li",[t("span",{staticClass:"title"},[e._v("\u6CE8\u610F\u4E8B\u9879")]),e._m(6),t("p",[e._v("Shadowrocket \u975EPandaFan\u5F00\u53D1/\u63D0\u4F9B\uFF0C\u82E5\u6709\u5173\u4E8EApp\u672C\u8EAB\u7684\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFBApp\u5F00\u53D1\u8005\u83B7\u53D6\u652F\u6301")]),t("p"),t("center",[t("img",{staticClass:"screenshot",attrs:{src:n(1238)}})])],1)])]):t("div",[t("ol",[t("li",[t("span",{staticClass:"title"},[e._v("Download Shadowrocket")]),t("p",[e._v("Download Shadowrocket from the App Store"),t("br"),t("br"),t("center",[t("a",{on:{click:function(l){return e.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[t("img",{staticClass:"app-icon",attrs:{src:n(1180)}}),t("br"),t("br"),t("el-button",{attrs:{type:"primary"},on:{click:function(l){return e.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[e._v("Download")])],1)]),t("br"),t("i",[e._v("Shadowrocket is a paid app developed by third-party")]),t("br"),t("i",[e._v("If you would like a ")]),t("b",[e._v("FREE ")]),t("i",[e._v("app with less features, use "),t("a",{on:{click:function(l){return e.switchGuideTab("apGuideTab","potatso_lite")}}},[e._v("Potatso Lite")])])],1)]),t("li",[t("span",{staticClass:"title"},[e._v("Import Servers")]),e._m(7),t("center",[t("qrcode",{attrs:{value:e.sub_qrlink}}),t("p",[t("b",[e._v("QR code for server list")])])],1),t("p",[e._v("When imported successfully, you will see the server list immediately.")]),e._m(8)],1),t("li",[t("span",{staticClass:"title"},[e._v("Import Routing Rules")]),e._m(9),t("center",[t("qrcode",{attrs:{value:e.rule_qrlink}}),t("p",[t("b",[e._v("QR code for routing rules")])])],1),t("br"),t("center",[t("img",{staticClass:"screenshot",attrs:{src:n(1181)}}),t("br"),t("img",{staticClass:"screenshot",attrs:{src:n(1182)}})])],1),t("li",[t("span",{staticClass:"title"},[e._v("Connect!")]),e._m(10),t("p",[e._v("You may choose different servers from the Home tab")]),e._m(11),t("ul",[e._m(12),t("p",[t("Code",[e._v("Direct")]),e._v("mode will send no data through our servers.")],1),e._m(13)])]),e._m(14)])])])},v=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("\u6253\u5F00 Shadowrocket\uFF0C\u5728"),t("code",[e._v("\u9996\u9875")]),e._v("\u754C\u9762\uFF0C\u70B9\u5DE6\u4E0A\u89D2\u7684 \u626B\u7801 \u56FE\u6807")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",{staticClass:"question"},[t("b",{staticClass:"larger"},[e._v("\u6CA1\u6709\u770B\u5230\u5BFC\u5165\u7684\u7EBF\u8DEF\uFF1F")]),t("br"),e._v("\u8BF7\u5C1D\u8BD5\u5C06Shadowrocket\u5F7B\u5E95\u5173\u95ED\uFF08\u4ECE\u5C4F\u5E55\u5E95\u90E8\u5411\u4E0A\u8F7B\u626B\u5E76\u5728\u5C4F\u5E55\u4E2D\u95F4\u7A0D\u4F5C\u505C\u987F\uFF0C\u5728Shadowrocket App\u9884\u89C8\u4E0A\u5411\u4E0A\u8F7B\u626B\u6765\u5173\u95ED\uFF09\uFF0C\u7136\u540E\u518D\u91CD\u65B0\u6253\u5F00Shadowrocket")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v(" \u8FDB\u5165"),t("code",[e._v("\u914D\u7F6E")]),e._v("\u754C\u9762\uFF08\u5FC5\u987B\u5148\u8FDB\u5165\u6B64\u754C\u9762\uFF09\uFF0C\u7136\u540E\u518D\u70B9\u5DE6\u4E0A\u89D2\u7684 \u626B\u7801 \u56FE\u6807"),t("br"),e._v("\u626B\u7801\u5B8C\u6210\u540E\u5728"),t("code",[e._v("\u8FDC\u7A0B\u6587\u4EF6")]),e._v("\u4E0B\u65B9\u5C06\u51FA\u73B0\u65B0\u7684\u914D\u7F6E\u6587\u4EF6\u5730\u5740\uFF0C\u70B9\u4E00\u4E0B\u5B83\uFF0C\u7136\u540E\u9009\u62E9"),t("code",[e._v("\u4F7F\u7528\u914D\u7F6E Use Config")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("\u56DE\u5230"),t("code",[e._v("\u9996\u9875")]),e._v("\u754C\u9762\uFF0C\u60A8\u53EF\u4EE5\u5728\u6B64\u81EA\u7531\u9009\u62E9\u8981\u4F7F\u7528\u7684\u7EBF\u8DEF\uFF0C\u88AB\u9009\u4E2D\u7684\u7EBF\u8DEF\u5DE6\u4FA7\u4F1A\u6709\u6A59\u8272\u5C0F\u70B9  ")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",[t("p",[e._v("- \u8BF7\u786E\u4FDD"),t("code",[e._v("\u5168\u5C40\u8DEF\u7531")]),e._v("\u9009\u9879\u5DF2\u8BBE\u4E3A"),t("code",[e._v("\u914D\u7F6E")])]),t("p",[e._v("- \u9009\u62E9"),t("code",[e._v("\u76F4\u8FDE")]),e._v("\u5C06\u65E0\u6CD5\u4F7F\u7528\u670D\u52A1")]),t("p",[e._v("- \u9009\u62E9"),t("code",[e._v("\u4EE3\u7406")]),e._v("\u5219\u662F\u5168\u90E8\u6D41\u91CF\u90FD\u901A\u8FC7PandaFan\u7684\u670D\u52A1\u5668\uFF0C\u9002\u5408\u5728\u516C\u5171\u573A\u5408\u7684 Wi-Fi \u4E0B\u52A0\u5BC6\u6D41\u91CF\u4FDD\u62A4\u9690\u79C1")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("\u6253\u5F00\u6700\u4E0A\u65B9"),t("code",[e._v("\u672A\u8FDE\u63A5")]),e._v("\u53F3\u4FA7\u7684\u5F00\u5173\u4FBF\u5F00\u59CB\u4F7F\u7528\u5566\u3002\u9996\u6B21\u8FDE\u63A5\u4F1A\u9700\u8981\u5B89\u88C5\u90E8\u5206\u914D\u7F6E\u5230\u7CFB\u7EDF\uFF0C\u9700\u8981\u8FDB\u884CFace ID/Touch ID/\u5BC6\u7801\u9A8C\u8BC1")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("\u5F53\u60A8\u5728PandaFan\u7684\u7F51\u7AD9\u4E0A\u4FEE\u6539\u4E86\u81EA\u5B9A\u4E49\u4EE3\u7406\u5217\u8868\uFF0C\u6216\u8005PandaFan\u63D0\u4F9B\u7684\u7EBF\u8DEF\u53D1\u751F\u53D8\u52A8\u65F6\u5019\uFF0C\u60A8\u9700\u8981\u66F4\u65B0\u60A8\u7684\u914D\u7F6E"),t("br"),e._v("\u66F4\u65B0\u529E\u6CD5\uFF1A\u91CD\u65B0\u5BFC\u5165\u7EBF\u8DEF\u914D\u7F6E\u5373\u53EF")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("Open Shadowrocket, at the "),t("code",[e._v("Home")]),e._v("tab, tap the scanner icon in the upper left corner")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",{staticClass:"question"},[t("b",{staticClass:"larger"},[e._v("No Servers Appeared?")]),t("br"),e._v("Quit Shadowrocket and re-launch the app to see changes.")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v(" Go to "),t("code",[e._v("Config")]),e._v("tab, tap the scanner icon in the upper left and scan the QR code below."),t("br"),e._v("Now a link should appear under the "),t("code",[e._v("REMOTE FILES")]),e._v("section. Tap the link and select"),t("code",[e._v("Use Config")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("Back to the"),t("code",[e._v("Home")]),e._v("tab. Use the switch button at the top to turn on/off the VPN.")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("The "),t("code",[e._v("Global Route")]),e._v("allows you to change the routing policy:")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[t("code",[e._v("Config")]),e._v("should be the default option.")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[t("code",[e._v("Proxy")]),e._v("mode will send everything through our servers, regardless if the site is blocked. This can be used to protect your privacy when using public Wi-Fi.")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("li",[t("span",{staticClass:"title"},[e._v("Additional Notes")]),t("p",[e._v("When you have modified the custom proxy list, or if the server provided by Panda has changes, you need to update your configuration.")]),t("p",[e._v("To update your configurations, simply tap the configuration file from Step 3, and select Update")])])}],O=n(63),R=n(40),h=n(26),E=n(22),k=n(9),$=n(39),m=n(18),g=n(52),P=n(1156);function c(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);s&&(l=l.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,l)}return t}function A(e){for(var s=1;s<arguments.length;s++){var t=arguments[s]!=null?arguments[s]:{};s%2?c(Object(t),!0).forEach(function(l){Object(m.a)(e,l,t[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))})}return e}var S={middleware:["load-rt-data","authenticated"],computed:A({surge_config_link:function(){return console.log("-->",this.current_service_cate),this.current_service?"https://".concat(this.staticFileDomain,"/surge/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""},sub_qrlink:function(){if(!this.current_service)return"";var s="https://".concat(this.staticFileDomain,"/apsr/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name),t="PandaFan User ".concat(this.current_service.user_id);return"sub://".concat(P.a.encode(s),"?remarks=").concat(encodeURI(t))},rule_qrlink:function(){return this.surge_config_link+"?ruleonly"}},Object(g.b)(["staticFileDomain"])),mounted:function(){console.log("[LOG] from shadowrocket.vue",this.current_service_cate)},methods:{}},j=S,U=n(1239),x=n(51),y=Object(x.a)(j,i,v,!1,null,null,null),C=u.default=y.exports}}]);
