(window.webpackJsonp=window.webpackJsonp||[]).push([[44,15,17],{1149:function(c,d,n){"use strict";n.d(d,"a",function(){return X});const i="3.7.2",u=i,E=typeof atob=="function",T=typeof btoa=="function",b=typeof Buffer=="function",D=typeof TextDecoder=="function"?new TextDecoder:void 0,F=typeof TextEncoder=="function"?new TextEncoder:void 0,R="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",g=Array.prototype.slice.call(R),x=(o=>{let a={};return o.forEach((v,h)=>a[v]=h),a})(g),j=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,f=String.fromCharCode.bind(String),S=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(o,a=v=>v)=>new Uint8Array(Array.prototype.slice.call(o,0).map(a)),k=o=>o.replace(/=/g,"").replace(/[+\/]/g,a=>a=="+"?"-":"_"),C=o=>o.replace(/[^A-Za-z0-9\+\/]/g,""),P=o=>{let a,v,h,w,O="";const L=o.length%3;for(let U=0;U<o.length;){if((v=o.charCodeAt(U++))>255||(h=o.charCodeAt(U++))>255||(w=o.charCodeAt(U++))>255)throw new TypeError("invalid character found");a=v<<16|h<<8|w,O+=g[a>>18&63]+g[a>>12&63]+g[a>>6&63]+g[a&63]}return L?O.slice(0,L-3)+"===".substring(L):O},y=T?o=>btoa(o):b?o=>Buffer.from(o,"binary").toString("base64"):P,A=b?o=>Buffer.from(o).toString("base64"):o=>{const a=4096;let v=[];for(let h=0,w=o.length;h<w;h+=a)v.push(f.apply(null,o.subarray(h,h+a)));return y(v.join(""))},s=(o,a=!1)=>a?k(A(o)):A(o),e=o=>{if(o.length<2){var a=o.charCodeAt(0);return a<128?o:a<2048?f(192|a>>>6)+f(128|a&63):f(224|a>>>12&15)+f(128|a>>>6&63)+f(128|a&63)}else{var a=65536+(o.charCodeAt(0)-55296)*1024+(o.charCodeAt(1)-56320);return f(240|a>>>18&7)+f(128|a>>>12&63)+f(128|a>>>6&63)+f(128|a&63)}},r=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,t=o=>o.replace(r,e),_=b?o=>Buffer.from(o,"utf8").toString("base64"):F?o=>A(F.encode(o)):o=>y(t(o)),p=(o,a=!1)=>a?k(_(o)):_(o),l=o=>p(o,!0),m=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,$=o=>{switch(o.length){case 4:var a=(7&o.charCodeAt(0))<<18|(63&o.charCodeAt(1))<<12|(63&o.charCodeAt(2))<<6|63&o.charCodeAt(3),v=a-65536;return f((v>>>10)+55296)+f((v&1023)+56320);case 3:return f((15&o.charCodeAt(0))<<12|(63&o.charCodeAt(1))<<6|63&o.charCodeAt(2));default:return f((31&o.charCodeAt(0))<<6|63&o.charCodeAt(1))}},z=o=>o.replace(m,$),M=o=>{if(o=o.replace(/\s+/g,""),!j.test(o))throw new TypeError("malformed base64.");o+="==".slice(2-(o.length&3));let a,v="",h,w;for(let O=0;O<o.length;)a=x[o.charAt(O++)]<<18|x[o.charAt(O++)]<<12|(h=x[o.charAt(O++)])<<6|(w=x[o.charAt(O++)]),v+=h===64?f(a>>16&255):w===64?f(a>>16&255,a>>8&255):f(a>>16&255,a>>8&255,a&255);return v},B=E?o=>atob(C(o)):b?o=>Buffer.from(o,"base64").toString("binary"):M,G=b?o=>S(Buffer.from(o,"base64")):o=>S(B(o),a=>a.charCodeAt(0)),K=o=>G(N(o)),Q=b?o=>Buffer.from(o,"base64").toString("utf8"):D?o=>D.decode(G(o)):o=>z(B(o)),N=o=>C(o.replace(/[-_]/g,a=>a=="-"?"+":"/")),I=o=>Q(N(o)),H=o=>{if(typeof o!="string")return!1;const a=o.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(a)||!/[^\s0-9a-zA-Z\-_]/.test(a)},W=o=>({value:o,enumerable:!1,writable:!0,configurable:!0}),V=function(){const o=(a,v)=>Object.defineProperty(String.prototype,a,W(v));o("fromBase64",function(){return I(this)}),o("toBase64",function(a){return p(this,a)}),o("toBase64URI",function(){return p(this,!0)}),o("toBase64URL",function(){return p(this,!0)}),o("toUint8Array",function(){return K(this)})},Z=function(){const o=(a,v)=>Object.defineProperty(Uint8Array.prototype,a,W(v));o("toBase64",function(a){return s(this,a)}),o("toBase64URI",function(){return s(this,!0)}),o("toBase64URL",function(){return s(this,!0)})},X={version:i,VERSION:u,atob:B,atobPolyfill:M,btoa:y,btoaPolyfill:P,fromBase64:I,toBase64:p,encode:p,encodeURI:l,encodeURL:l,utob:t,btou:z,decode:I,isValid:H,fromUint8Array:s,toUint8Array:K,extendString:V,extendUint8Array:Z,extendBuiltins:()=>{V(),Z()}}},1172:function(c,d,n){c.exports=n.p+"img/shadowrocket_real.3981b28.jpg"},1173:function(c,d,n){c.exports=n.p+"img/1.e146761.png"},1174:function(c,d,n){c.exports=n.p+"img/2.42fb77b.png"},1175:function(c,d,n){var i=n(1233);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[c.i,i,""]]),i.locals&&(c.exports=i.locals);var u=n(2).default,E=u("2655e102",i,!0,{sourceMap:!1})},1176:function(c,d,n){var i=n(1236);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[c.i,i,""]]),i.locals&&(c.exports=i.locals);var u=n(2).default,E=u("7d340757",i,!0,{sourceMap:!1})},1228:function(c,d,n){c.exports=n.p+"img/shadowrocket_fake.a8a3b4d.jpg"},1229:function(c,d,n){c.exports=n.p+"img/0.76312bf.jpeg"},1230:function(c,d,n){c.exports=n.p+"img/3.f31ec14.png"},1231:function(c,d,n){c.exports=n.p+"img/4.9bc02c1.png"},1232:function(c,d,n){"use strict";var i=n(1175),u=n.n(i)},1233:function(c,d,n){var i=n(1),u=i(!1);u.push([c.i,"",""]),c.exports=u},1234:function(c,d,n){c.exports=n.p+"img/surge_for_ios.af1e142.jpg"},1235:function(c,d,n){"use strict";var i=n(1176),u=n.n(i)},1236:function(c,d,n){var i=n(1),u=i(!1);u.push([c.i,".checkbox-wrapper{margin:1rem .5rem 1rem 0}",""]),c.exports=u},1279:function(c,d,n){var i=n(1454);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[c.i,i,""]]),i.locals&&(c.exports=i.locals);var u=n(2).default,E=u("92f2f05e",i,!0,{sourceMap:!1})},1296:function(c,d,n){"use strict";n.r(d);var i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"shadowrocket-container"},[e.$i18n.locale==="zh"?t("div",[t("ol",[t("li",[t("span",{staticClass:"title"},[e._v("\u4E0B\u8F7D Shadowrocket")]),t("p",[e._v("\u524D\u5F80 App Store \u4E0B\u8F7D Shadowrocket"),t("br"),t("br"),t("center",[t("el-button",{attrs:{type:"primary"},on:{click:function(_){return e.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[e._v("\u524D\u5F80 AppStore")])],1),t("br"),t("el-row",{attrs:{gutter:20}},[t("center",[t("b",{staticClass:"small"},[e._v("\u76EE\u524DAppStore\u5B58\u5728\u4F17\u591A\u5C71\u5BE8App\uFF0C\u8BF7\u8BA4\u51C6\u6B63\u7248")])]),t("el-col",{attrs:{span:12}},[t("center",[t("b",[e._v("\u771F \u{1F44D}\u{1F3FB}")]),t("br"),t("a",{on:{click:function(_){return e.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[t("img",{staticClass:"app-icon",attrs:{src:n(1172)}})])])],1),t("el-col",{attrs:{span:12}},[t("center",[t("b",[e._v("\u5047!!! \u{1F621}")]),t("br"),t("img",{staticClass:"app-icon",attrs:{src:n(1228)}})])],1)],1),t("br"),t("i",[e._v("Shadowrocket\u4E3A\u7B2C\u4E09\u65B9\u5F00\u53D1\u8005\u53D1\u5E03\u7684\u901A\u7528\u578B\u5BA2\u6237\u7AEF\uFF0C\u76EE\u524D\u4E3A\u6536\u8D39App")])],1)]),t("li",[t("span",{staticClass:"title"},[e._v("\u5BFC\u5165\u7EBF\u8DEF")]),e._m(0),t("h4",{staticClass:"warning"},[e._v("\u8BF7\u786E\u8BA4\u4F7F\u7528\u6700\u65B0\u7248App\uFF0C\u5426\u5219\u53EF\u80FD\u65E0\u6CD5\u5BFC\u5165")]),e.sub_qrlink?t("center",[t("qrcode",{attrs:{value:e.sub_qrlink}}),t("p",[t("b",[e._v("\u7EBF\u8DEF\u4E8C\u7EF4\u7801")])])],1):e._e(),t("br"),t("center",[t("img",{staticClass:"screenshot",attrs:{src:n(1229)}})]),t("p",[e._v("\u6210\u529F\u540E\uFF0C\u60A8\u53EF\u4EE5\u770B\u5230\u9996\u9875\u5DF2\u663E\u793A\u6240\u6709\u7EBF\u8DEF")]),e._m(1)],1),t("li",[t("span",{staticClass:"title"},[e._v("\u5BFC\u5165\u8DEF\u7531\u89C4\u5219")]),e._m(2),e.rule_qrlink?t("center",[t("qrcode",{attrs:{value:e.rule_qrlink}}),t("p",[t("b",[e._v("\u8DEF\u7531\u89C4\u5219\u4E8C\u7EF4\u7801")])])],1):e._e(),t("br"),t("center",[t("img",{staticClass:"screenshot",attrs:{src:n(1173)}}),t("br"),t("img",{staticClass:"screenshot",attrs:{src:n(1174)}})])],1),t("li",[t("span",{staticClass:"title"},[e._v("\u8FDE\u63A5\u7EBF\u8DEF")]),e._m(3),e._m(4),e._m(5),t("p",[e._v("\u8BF7\u7EE7\u7EED\u9605\u8BFB\u672C\u9875\u5269\u4F59\u5185\u5BB9\uFF0C\u4E86\u89E3\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879")]),t("center",[t("img",{staticClass:"screenshot",attrs:{src:n(1230)}})])],1),t("li",[t("span",{staticClass:"title"},[e._v("\u6CE8\u610F\u4E8B\u9879")]),e._m(6),t("p",[e._v("Shadowrocket \u975EPandaFan\u5F00\u53D1/\u63D0\u4F9B\uFF0C\u82E5\u6709\u5173\u4E8EApp\u672C\u8EAB\u7684\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFBApp\u5F00\u53D1\u8005\u83B7\u53D6\u652F\u6301")]),t("p"),t("center",[t("img",{staticClass:"screenshot",attrs:{src:n(1231)}})])],1)])]):t("div",[t("ol",[t("li",[t("span",{staticClass:"title"},[e._v("Download Shadowrocket")]),t("p",[e._v("Download Shadowrocket from the App Store"),t("br"),t("br"),t("center",[t("a",{on:{click:function(_){return e.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[t("img",{staticClass:"app-icon",attrs:{src:n(1172)}}),t("br"),t("br"),t("el-button",{attrs:{type:"primary"},on:{click:function(_){return e.openSite("https://itunes.apple.com/us/app/shadowrocket/id932747118")}}},[e._v("Download")])],1)]),t("br"),t("i",[e._v("Shadowrocket is a paid app developed by third-party")]),t("br"),t("i",[e._v("If you would like a ")]),t("b",[e._v("FREE ")]),t("i",[e._v("app with less features, use "),t("a",{on:{click:function(_){return e.switchGuideTab("apGuideTab","potatso_lite")}}},[e._v("Potatso Lite")])])],1)]),t("li",[t("span",{staticClass:"title"},[e._v("Import Servers")]),e._m(7),t("center",[t("qrcode",{attrs:{value:e.sub_qrlink}}),t("p",[t("b",[e._v("QR code for server list")])])],1),t("p",[e._v("When imported successfully, you will see the server list immediately.")]),e._m(8)],1),t("li",[t("span",{staticClass:"title"},[e._v("Import Routing Rules")]),e._m(9),t("center",[t("qrcode",{attrs:{value:e.rule_qrlink}}),t("p",[t("b",[e._v("QR code for routing rules")])])],1),t("br"),t("center",[t("img",{staticClass:"screenshot",attrs:{src:n(1173)}}),t("br"),t("img",{staticClass:"screenshot",attrs:{src:n(1174)}})])],1),t("li",[t("span",{staticClass:"title"},[e._v("Connect!")]),e._m(10),t("p",[e._v("You may choose different servers from the Home tab")]),e._m(11),t("ul",[e._m(12),t("p",[t("Code",[e._v("Direct")]),e._v("mode will send no data through our servers.")],1),e._m(13)])]),e._m(14)])])])},u=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\u6253\u5F00 Shadowrocket\uFF0C\u5728"),t("code",[e._v("\u9996\u9875")]),e._v("\u754C\u9762\uFF0C\u70B9\u5DE6\u4E0A\u89D2\u7684 \u626B\u7801 \u56FE\u6807")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",{staticClass:"question"},[t("b",{staticClass:"larger"},[e._v("\u6CA1\u6709\u770B\u5230\u5BFC\u5165\u7684\u7EBF\u8DEF\uFF1F")]),t("br"),e._v("\u8BF7\u5C1D\u8BD5\u5C06Shadowrocket\u5F7B\u5E95\u5173\u95ED\uFF08\u4ECE\u5C4F\u5E55\u5E95\u90E8\u5411\u4E0A\u8F7B\u626B\u5E76\u5728\u5C4F\u5E55\u4E2D\u95F4\u7A0D\u4F5C\u505C\u987F\uFF0C\u5728Shadowrocket App\u9884\u89C8\u4E0A\u5411\u4E0A\u8F7B\u626B\u6765\u5173\u95ED\uFF09\uFF0C\u7136\u540E\u518D\u91CD\u65B0\u6253\u5F00Shadowrocket")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v(" \u8FDB\u5165"),t("code",[e._v("\u914D\u7F6E")]),e._v("\u754C\u9762\uFF08\u5FC5\u987B\u5148\u8FDB\u5165\u6B64\u754C\u9762\uFF09\uFF0C\u7136\u540E\u518D\u70B9\u5DE6\u4E0A\u89D2\u7684 \u626B\u7801 \u56FE\u6807"),t("br"),e._v("\u626B\u7801\u5B8C\u6210\u540E\u5728"),t("code",[e._v("\u8FDC\u7A0B\u6587\u4EF6")]),e._v("\u4E0B\u65B9\u5C06\u51FA\u73B0\u65B0\u7684\u914D\u7F6E\u6587\u4EF6\u5730\u5740\uFF0C\u70B9\u4E00\u4E0B\u5B83\uFF0C\u7136\u540E\u9009\u62E9"),t("code",[e._v("\u4F7F\u7528\u914D\u7F6E Use Config")])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\u56DE\u5230"),t("code",[e._v("\u9996\u9875")]),e._v("\u754C\u9762\uFF0C\u60A8\u53EF\u4EE5\u5728\u6B64\u81EA\u7531\u9009\u62E9\u8981\u4F7F\u7528\u7684\u7EBF\u8DEF\uFF0C\u88AB\u9009\u4E2D\u7684\u7EBF\u8DEF\u5DE6\u4FA7\u4F1A\u6709\u6A59\u8272\u5C0F\u70B9  ")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ul",[t("p",[e._v("- \u8BF7\u786E\u4FDD"),t("code",[e._v("\u5168\u5C40\u8DEF\u7531")]),e._v("\u9009\u9879\u5DF2\u8BBE\u4E3A"),t("code",[e._v("\u914D\u7F6E")])]),t("p",[e._v("- \u9009\u62E9"),t("code",[e._v("\u76F4\u8FDE")]),e._v("\u5C06\u65E0\u6CD5\u4F7F\u7528\u670D\u52A1")]),t("p",[e._v("- \u9009\u62E9"),t("code",[e._v("\u4EE3\u7406")]),e._v("\u5219\u662F\u5168\u90E8\u6D41\u91CF\u90FD\u901A\u8FC7PandaFan\u7684\u670D\u52A1\u5668\uFF0C\u9002\u5408\u5728\u516C\u5171\u573A\u5408\u7684 Wi-Fi \u4E0B\u52A0\u5BC6\u6D41\u91CF\u4FDD\u62A4\u9690\u79C1")])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\u6253\u5F00\u6700\u4E0A\u65B9"),t("code",[e._v("\u672A\u8FDE\u63A5")]),e._v("\u53F3\u4FA7\u7684\u5F00\u5173\u4FBF\u5F00\u59CB\u4F7F\u7528\u5566\u3002\u9996\u6B21\u8FDE\u63A5\u4F1A\u9700\u8981\u5B89\u88C5\u90E8\u5206\u914D\u7F6E\u5230\u7CFB\u7EDF\uFF0C\u9700\u8981\u8FDB\u884CFace ID/Touch ID/\u5BC6\u7801\u9A8C\u8BC1")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\u5F53\u60A8\u5728PandaFan\u7684\u7F51\u7AD9\u4E0A\u4FEE\u6539\u4E86\u81EA\u5B9A\u4E49\u4EE3\u7406\u5217\u8868\uFF0C\u6216\u8005PandaFan\u63D0\u4F9B\u7684\u7EBF\u8DEF\u53D1\u751F\u53D8\u52A8\u65F6\u5019\uFF0C\u60A8\u9700\u8981\u66F4\u65B0\u60A8\u7684\u914D\u7F6E"),t("br"),e._v("\u66F4\u65B0\u529E\u6CD5\uFF1A\u91CD\u65B0\u5BFC\u5165\u7EBF\u8DEF\u914D\u7F6E\u5373\u53EF")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("Open Shadowrocket, at the "),t("code",[e._v("Home")]),e._v("tab, tap the scanner icon in the upper left corner")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",{staticClass:"question"},[t("b",{staticClass:"larger"},[e._v("No Servers Appeared?")]),t("br"),e._v("Quit Shadowrocket and re-launch the app to see changes.")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v(" Go to "),t("code",[e._v("Config")]),e._v("tab, tap the scanner icon in the upper left and scan the QR code below."),t("br"),e._v("Now a link should appear under the "),t("code",[e._v("REMOTE FILES")]),e._v("section. Tap the link and select"),t("code",[e._v("Use Config")])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("Back to the"),t("code",[e._v("Home")]),e._v("tab. Use the switch button at the top to turn on/off the VPN.")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("The "),t("code",[e._v("Global Route")]),e._v("allows you to change the routing policy:")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[t("code",[e._v("Config")]),e._v("should be the default option.")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[t("code",[e._v("Proxy")]),e._v("mode will send everything through our servers, regardless if the site is blocked. This can be used to protect your privacy when using public Wi-Fi.")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("li",[t("span",{staticClass:"title"},[e._v("Additional Notes")]),t("p",[e._v("When you have modified the custom proxy list, or if the server provided by Panda has changes, you need to update your configuration.")]),t("p",[e._v("To update your configurations, simply tap the configuration file from Step 3, and select Update")])])}],E=n(62),T=n(40),b=n(27),D=n(23),F=n(9),R=n(39),g=n(19),x=n(52),j=n(1149);function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);r&&(_=_.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,_)}return t}function S(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?f(Object(t),!0).forEach(function(_){Object(g.a)(e,_,t[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))})}return e}var k={middleware:["load-rt-data","authenticated"],computed:S({surge_config_link:function(){return console.log("-->",this.current_service_cate),this.current_service?"https://".concat(this.staticFileDomain,"/surge/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""},sub_qrlink:function(){if(!this.current_service)return"";var r="https://".concat(this.staticFileDomain,"/apsr/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name),t="PandaFan User ".concat(this.current_service.user_id);return"sub://".concat(j.a.encode(r),"?remarks=").concat(encodeURI(t))},rule_qrlink:function(){return this.surge_config_link+"?ruleonly"}},Object(x.b)(["staticFileDomain"])),mounted:function(){console.log("[LOG] from shadowrocket.vue",this.current_service_cate)},methods:{}},C=k,P=n(1232),y=n(51),A=Object(y.a)(C,i,u,!1,null,null,null),s=d.default=A.exports},1297:function(c,d,n){"use strict";n.r(d);var i=function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{staticClass:"surge-container"},[r("ol",[r("li",[r("span",{staticClass:"title"},[s._v("\u4E0B\u8F7D Surge 4")]),r("p",[s._v("\u524D\u5F80 App Store \u4E0B\u8F7D Surge 4"),r("br"),s._m(0),r("br"),r("br"),r("center",[r("a",{on:{click:function(t){return s.openSite("https://itunes.apple.com/us/app/surge-3/id1442620678")}}},[r("img",{staticClass:"app-icon",attrs:{src:n(1234)}}),r("br"),r("br"),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return s.openSite("https://itunes.apple.com/us/app/surge-3/id1442620678")}}},[s._v("\u524D\u5F80 AppStore")])],1)]),r("br"),r("i",[s._v("Surge \u4E3A\u7B2C\u4E09\u65B9\u5F00\u53D1\u8005\u53D1\u5E03\u7684\u901A\u7528\u578B\u5BA2\u6237\u7AEF\uFF0C\u76EE\u524D\u53EF\u4EE5\u514D\u8D39\u4E0B\u8F7D\uFF0C\u4F46\u4F7F\u7528\u670D\u52A1\u3001\u5F00\u542F\u5176\u4EE3\u7406\u529F\u80FD\u5219\u9700\u8981\u4ED8\u8D39\u5185\u8D2D\u3002")])],1)]),r("li",[r("span",{staticClass:"title"},[s._v("\u5BFC\u5165\u7EBF\u8DEF\u914D\u7F6E")]),s._m(1),r("p",[s._v("\u5728\u5F39\u51FA\u7684\u6846\u4E2D\u8F93\u5165\u4E0B\u9762\u7684\u914D\u7F6E\u6587\u4EF6\u5730\u5740\uFF0C\u7136\u540E\u786E\u5B9A\u5373\u53EF")]),r("p",{staticClass:"small"},[s._v("Surge \u9488\u5BF9\u90E8\u5206\u529F\u80FD\u989D\u5916\u6536\u8D39\uFF0C\u5982\u679C\u60A8\u7684Surge\u672A\u8BA2\u9605\u4E0B\u5217\u529F\u80FD\uFF0C\u8BF7\u52FE\u9009\u4EE5\u5173\u95ED\u5BF9\u5E94\u529F\u80FD\uFF0C\u5426\u5219\u9ED8\u8BA4\u5F00\u542F")]),s._l(s.flags,function(t,_){return r("span",{staticClass:"checkbox-wrapper"},[r("el-checkbox",{attrs:{border:"",size:"medium"},model:{value:s.flags[_],callback:function(p){s.$set(s.flags,_,p)},expression:"flags[flagName]"}},[s._v(s._s(s.$t("guide."+_)))])],1)}),r("br"),r("br"),r("el-tooltip",{attrs:{content:s.surge_config_link,placement:"top",effect:"light"}},[r("el-input",{attrs:{type:"text",value:s.surge_config_link,readonly:""}})],1),r("i",{staticClass:"small"},[s._v("\u4E3A\u9632\u6B62\u6F0F\u8F93\u5165\u5185\u5BB9\uFF0C\u8BF7\u5C06\u9F20\u6807\u79FB\u52A8\u5230\u5730\u5740\u4E0A\u663E\u793A\u5B8C\u6574\u5185\u5BB9")]),r("br")],2),s._m(2),s._m(3),r("li",[r("span",{staticClass:"title"},[s._v("\u6CE8\u610F\u4E8B\u9879")]),r("p",[s._v("- \u5F53\u6709\u65B0\u7684\u7EBF\u8DEF\u589E\u52A0\u6216\u8005\u5176\u5B83\u914D\u7F6E\u53D8\u66F4\uFF0CSurge\u90FD\u4F1A\u81EA\u52A8\u4E3A\u60A8\u6700\u65B0\u7EBF\u8DEF\u548C\u89C4\u5219\uFF0C\u65E0\u9700\u624B\u52A8\u518D\u6B21\u5BFC\u5165 :)")]),r("p",[s._v("- \u8BF7\u6CE8\u610F\uFF0CAPP \u4E2D\u7684\u7EBF\u8DEF\u6D4B\u901F\u529F\u80FD\u5E76\u4E0D\u51C6\u786E\uFF0C\u7531\u4E8E SSLTide \u534F\u8BAE\u7684\u7279\u6027\uFF0C\u6D4B\u5F97\u7684\u5EF6\u8FDF\u4F1A\u662F\u5B9E\u9645\u76843-4\u500D\uFF0C\u8BF7\u4EE5\u5B9E\u9645\u4F7F\u7528\u60C5\u51B5\u4E3A\u51C6")]),r("p",[s._v("- Surge \u975EPandaFan\u5F00\u53D1/\u63D0\u4F9B\uFF0C\u82E5\u6709\u5173\u4E8EApp\u672C\u8EAB\u7684\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFBApp\u5F00\u53D1\u8005\u83B7\u53D6\u652F\u6301")]),r("p",[s._v("\u8865\u5145\u9605\u8BFB\uFF1A"),r("a",{on:{click:function(t){return s.openSite("https://medium.com/@scomper/surge-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-a1533c10e80b")}}},[s._v("Surge \u65B0\u624B\u4F7F\u7528\u6307\u5357")])])])])])},u=[function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("span",{staticClass:"small"},[r("i",[s._v("\u8BF7\u52FF\u4E0B\u8F7D Surge for Enterprise")])])},function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("p",[s._v("\u6253\u5F00 Surge\uFF0C\u70B9\u5DE6\u4E0A\u89D2\u7684 Default \u8FDB\u5165"),r("code",[s._v("\u914D\u7F6E\u5217\u8868")]),s._v("\uFF0C\u70B9 "),r("code",[s._v("\u4ECEURL\u4E0B\u8F7D\u914D\u7F6E")])])},function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("li",[r("span",{staticClass:"title"},[s._v("\u8C03\u6574\u8F6F\u4EF6\u8BBE\u5B9A")]),r("p",[s._v("\u56DE\u5230 App \u9996\u9875\u4E3B\u754C\u9762\uFF0C\u5F00\u542F Rewrite \uFF08\u5F00\u542F\u8BE5\u529F\u80FD\u9700\u8981\u4ED8\u8D39\uFF09")]),r("ul",[r("p",[s._v("- \u8BF7\u786E\u4FDD"),r("code",[s._v("\u51FA\u7AD9\u6A21\u5F0F")]),s._v("\u9009\u9879\u5DF2\u8BBE\u4E3A"),r("code",[s._v("\u89C4\u5219\u6A21\u5F0F")])]),r("p",[s._v("- \u9009\u62E9"),r("code",[s._v("\u76F4\u63A5\u8FDE\u63A5")]),s._v("\u5C06\u65E0\u6CD5\u4F7F\u7528\u670D\u52A1")]),r("p",[s._v("- \u9009\u62E9"),r("code",[s._v("\u5168\u5C40\u4EE3\u7406")]),s._v("\u5219\u662F\u5168\u90E8\u6D41\u91CF\u90FD\u901A\u8FC7PandaFan\u7684\u670D\u52A1\u5668\uFF0C\u9002\u5408\u5728\u516C\u5171\u573A\u5408\u7684 Wi-Fi \u4E0B\u52A0\u5BC6\u6D41\u91CF\u4FDD\u62A4\u9690\u79C1")])]),r("p",[s._v("\u4E0B\u9762\u8FDB\u5165"),r("code",[s._v("\u7B56\u7565\u7EC4")]),s._v("\u754C\u9762\u9009\u62E9\u60A8\u8981\u662F\u7528\u7684\u7EBF\u8DEF\uFF0C\u5176\u4E2D\uFF1A"),r("br"),s._v("Auto \u4E3A\u81EA\u52A8\u9009\u62E9\u7EBF\u8DEF"),r("br"),s._v("DIRECT \u4E3A\u4E0D\u4F7F\u7528\u670D\u52A1\uFF0C\u7B49\u540C\u4E8E\u300C\u51FA\u7AD9\u6A21\u5F0F\u300D\u4E2D\u7684\u300C\u76F4\u63A5\u8FDE\u63A5\u300D")])])},function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("li",[r("span",{staticClass:"title"},[s._v("\u5B8C\u6210\uFF0C\u5F00\u59CB\u4F7F\u7528")]),r("p",[s._v("\u9009\u5B8C\u7EBF\u8DEF\uFF0C\u56DE\u5230\u4E3B\u754C\u9762\uFF0C\u70B9\u53F3\u4E0A\u89D2\u7684"),r("code",[s._v("\u542F\u52A8")]),s._v("\u4FBF\u5F00\u59CB\u4F7F\u7528\u5566\u3002\u9996\u6B21\u8FDE\u63A5\u4F1A\u9700\u8981\u5B89\u88C5\u90E8\u5206\u914D\u7F6E\u5230\u7CFB\u7EDF\uFF0C\u9700\u8981\u8FDB\u884CFace ID/Touch ID/\u5BC6\u7801\u9A8C\u8BC1\u3002")]),r("p",[s._v("\u8BF7\u7EE7\u7EED\u9605\u8BFB\u672C\u9875\u5269\u4F59\u5185\u5BB9\uFF0C\u4E86\u89E3\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879")])])}],E=n(62),T=n(40),b=n(27),D=n(23),F=n(9),R=n(39),g=n(19),x=n(52);function j(s,e){var r=Object.keys(s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);e&&(t=t.filter(function(_){return Object.getOwnPropertyDescriptor(s,_).enumerable})),r.push.apply(r,t)}return r}function f(s){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?j(Object(r),!0).forEach(function(t){Object(g.a)(s,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(t){Object.defineProperty(s,t,Object.getOwnPropertyDescriptor(r,t))})}return s}var S={data:function(){return{dflags:{no_tls13:!1,no_v2:!1}}},computed:f({surge_config_link:function(){if(console.log("-->",this.current_service_cate),this.current_service){var e="https://".concat(this.staticFileDomain,"/surge/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name),r=[];for(var t in this.dflags)this.dflags[t]&&r.push(t);return r.length>0&&(e+="?".concat(r.join("&"))),e}return""},flags:{get:function(){return this.dflags},set:function(e){this.dflags=e}}},Object(x.b)(["staticFileDomain"])),mounted:function(){console.log("[LOG] from surge.vue",this.current_service_cate)},methods:{}},k=S,C=n(1235),P=n(51),y=Object(P.a)(k,i,u,!1,null,null,null),A=d.default=y.exports},1453:function(c,d,n){"use strict";var i=n(1279),u=n.n(i)},1454:function(c,d,n){var i=n(1),u=i(!1);u.push([c.i,'.tutorial-container{min-height:100vh;max-width:100vw;padding-top:.8rem}.tutorial-container .back-link{position:fixed;right:.5rem;bottom:.5rem;text-decoration:none}.tutorial-container .back-link .el-tabs{padding:.8rem}.tutorial-container .back-link .el-tabs hr{display:block;margin-top:1rem;height:2px;background:#fff;width:100vw}.tutorial-container .back-link .el-tabs__item{font-size:1rem}.tutorial-container .back-link .el-tabs__header{box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.tutorial-container .back-link .el-input__inner{background:#34495e!important;border-color:#1abc9c;color:#f1c40f!important;font-size:.9rem}.tutorial-container .back-link .el-input__inner::-moz-selection{color:#e67e22;background:#000}.tutorial-container .back-link .el-input__inner::selection{color:#e67e22;background:#000}.tutorial-container .back-link ol{list-style:none;counter-reset:my-awesome-counter;padding:2rem 0 0}.tutorial-container .back-link ol li{counter-increment:my-awesome-counter;margin-bottom:2rem;font-size:1.2rem}.tutorial-container .back-link ol li p{margin-top:.5rem;margin-bottom:.5rem}.tutorial-container .back-link ol li p:before{content:counter(my-awesome-counter);background:#f4f7fc;width:3.5rem;height:3.5rem;border-radius:5px;box-shadow:0 5px 12px 0 rgba(0,0,0,.3);display:inline-block;line-height:3.5rem;color:#16a085;text-align:center;margin-right:1rem;font-size:2.3rem}.tutorial-container .back-link ol li ol li:before{background:#27ae60;font-size:1.5rem;width:2rem;height:2rem;line-height:2rem}.tutorial-container .back-link ol li ol li ol li:before{background:#1abc9c;font-size:1.5rem;width:2rem;height:2rem;line-height:2rem}.tutorial-container .back-link img{max-width:100%;max-height:100%;position:center}.tutorial-container .back-link img.portrait{height:80px;width:30px}.tutorial-container .back-link img.portrait.landscape{height:30px;width:80px}.tutorial-container .back-link img.portrait.square{height:75px;width:75px}.tutorial-container .back-link img.portrait.app-icon{height:144px;border-radius:20px}.tutorial-container .back-link img.portrait.screenshot{max-height:700px}.tutorial-container .back-link span.title{font-size:1.5rem;margin-top:-2.8rem;background:#f4f7fc;color:#34495e;border-radius:50px 15px 15px 50px;display:flex;justify-content:center;align-items:center;text-align:center;margin-bottom:2rem}.tutorial-container .back-link p.question{padding:.5rem 1rem 1rem;font-size:90%;border-left:5px solid #f1c40f;background:#4d4d4d;border-radius:0 5px 5px 0}.tutorial-container .back-link p.question:before{content:"?";font-size:1.8rem;padding-right:1rem;color:#f1c40f;font-weight:700}.tutorial-container .back-link p.question:before a{color:#f1c40f;text-decoration:none}.tutorial-container .back-link *{color:#f4f7fc}.tutorial-container .back-link a{font-size:110%;-webkit-text-decoration:underline #1abc9c;text-decoration:underline #1abc9c;color:#1abc9c}.tutorial-container .back-link code{background:#bdc3c7;color:#34495e;padding:.03rem .5rem .08rem;border-radius:5px;margin:0 .3rem}',""]),c.exports=u},1485:function(c,d,n){"use strict";n.r(d);var i=function(){var _=this,p=_.$createElement,l=_._self._c||p;return l("div",{staticClass:"tutorial-container"},[l("el-tabs",{on:{"tab-click":_.handleClick},model:{value:_.apGuideTab,callback:function(m){_.apGuideTab=m},expression:"apGuideTab"}},[l("p",[l("b",[_._v("\b\u5728\u4E0A\u65B9\u9009\u62E9\u8981\u4F7F\u7528\u7684\u914D\u7F6EApp")]),l("nuxt-link",{staticClass:"back-link right smooth",attrs:{to:"/dashboard/menu/"}},[_._v(_._s(_.$t("back")))])],1),l("hr"),l("center",[l("br"),l("h3",{staticClass:"warning"},[_._v("\u4E0B\u8F7DApp\u524D\u60A8\u9700\u8981\u51C6\u5907\u3010\u975E\u4E2D\u56FD\u533A\u3011Apple ID"),l("br"),l("a",{on:{click:function(m){return _.openSiteUrl("/knowledges/65")}}},[_._v("\u4E86\u89E3\u8BE6\u60C5")])])]),l("hr"),l("el-tab-pane",{attrs:{label:"Shadowrocket",name:"shadowrocket"}},[l("Shadowrocket")],1),l("el-tab-pane",{attrs:{label:"Surge",name:"surge"}},[l("SurgeForiOS")],1)],1)],1)},u=[],E=n(62),T=n(40),b=n(27),D=n(23),F=n(9),R=n(39),g=n(63),x=n(76),j=n(19),f=n(52),S=n(1296),k=n(1297);function C(_,p){var l=Object.keys(_);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(_);p&&(m=m.filter(function($){return Object.getOwnPropertyDescriptor(_,$).enumerable})),l.push.apply(l,m)}return l}function P(_){for(var p=1;p<arguments.length;p++){var l=arguments[p]!=null?arguments[p]:{};p%2?C(Object(l),!0).forEach(function(m){Object(j.a)(_,m,l[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(l)):C(Object(l)).forEach(function(m){Object.defineProperty(_,m,Object.getOwnPropertyDescriptor(l,m))})}return _}var y={components:{Shadowrocket:S.default,SurgeForiOS:k.default},middleware:["load-rt-data","authenticated"],data:function(){return{activeName:"shadowrocket",validTabNames:["shadowrocket","potatso_lite","surge"]}},computed:P({guideKey:function(){return this.current_service_cate==="allplatform"?"apGuideTab":"homeGuideTab"},apGuideTab:{get:function(){return this.$store.state[this.guideKey]},set:function(p){return this.$store.dispatch("guideTab",{cate:this.guideKey,tabname:p})}}},Object(f.b)(["staticFileDomain","siteURL"])),mounted:function(){console.log("[LOG] from ap/ios.vue",this.current_service_cate),console.log("includes---->",!this.validTabNames.includes(this.apGuideTab)),(!this.apGuideTab||this.apGuideTab===0||!this.validTabNames.includes(this.apGuideTab))&&(this.apGuideTab="shadowrocket")},methods:{handleClick:function(){},openSiteUrl:function(p){this.openSite(this.siteURL+p)}}},A=y,s=n(1453),e=n(51),r=Object(e.a)(A,i,u,!1,null,null,null),t=d.default=r.exports}}]);
