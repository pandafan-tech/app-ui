(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1156:function(d,v,a){"use strict";a.d(v,"a",function(){return X});const c="3.7.2",f=c,w=typeof atob=="function",T=typeof btoa=="function",m=typeof Buffer=="function",B=typeof TextDecoder=="function"?new TextDecoder:void 0,E=typeof TextEncoder=="function"?new TextEncoder:void 0,$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",x=Array.prototype.slice.call($),b=(o=>{let r={};return o.forEach((i,l)=>r[i]=l),r})(x),U=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,_=String.fromCharCode.bind(String),g=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(o,r=i=>i)=>new Uint8Array(Array.prototype.slice.call(o,0).map(r)),A=o=>o.replace(/=/g,"").replace(/[+\/]/g,r=>r=="+"?"-":"_"),L=o=>o.replace(/[^A-Za-z0-9\+\/]/g,""),O=o=>{let r,i,l,h,p="";const R=o.length%3;for(let C=0;C<o.length;){if((i=o.charCodeAt(C++))>255||(l=o.charCodeAt(C++))>255||(h=o.charCodeAt(C++))>255)throw new TypeError("invalid character found");r=i<<16|l<<8|h,p+=x[r>>18&63]+x[r>>12&63]+x[r>>6&63]+x[r&63]}return R?p.slice(0,R-3)+"===".substring(R):p},j=T?o=>btoa(o):m?o=>Buffer.from(o,"binary").toString("base64"):O,P=m?o=>Buffer.from(o).toString("base64"):o=>{const r=4096;let i=[];for(let l=0,h=o.length;l<h;l+=r)i.push(_.apply(null,o.subarray(l,l+r)));return j(i.join(""))},y=(o,r=!1)=>r?A(P(o)):P(o),I=o=>{if(o.length<2){var r=o.charCodeAt(0);return r<128?o:r<2048?_(192|r>>>6)+_(128|r&63):_(224|r>>>12&15)+_(128|r>>>6&63)+_(128|r&63)}else{var r=65536+(o.charCodeAt(0)-55296)*1024+(o.charCodeAt(1)-56320);return _(240|r>>>18&7)+_(128|r>>>12&63)+_(128|r>>>6&63)+_(128|r&63)}},t=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,n=o=>o.replace(t,I),e=m?o=>Buffer.from(o,"utf8").toString("base64"):E?o=>P(E.encode(o)):o=>j(n(o)),s=(o,r=!1)=>r?A(e(o)):e(o),u=o=>s(o,!0),S=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,W=o=>{switch(o.length){case 4:var r=(7&o.charCodeAt(0))<<18|(63&o.charCodeAt(1))<<12|(63&o.charCodeAt(2))<<6|63&o.charCodeAt(3),i=r-65536;return _((i>>>10)+55296)+_((i&1023)+56320);case 3:return _((15&o.charCodeAt(0))<<12|(63&o.charCodeAt(1))<<6|63&o.charCodeAt(2));default:return _((31&o.charCodeAt(0))<<6|63&o.charCodeAt(1))}},k=o=>o.replace(S,W),M=o=>{if(o=o.replace(/\s+/g,""),!U.test(o))throw new TypeError("malformed base64.");o+="==".slice(2-(o.length&3));let r,i="",l,h;for(let p=0;p<o.length;)r=b[o.charAt(p++)]<<18|b[o.charAt(p++)]<<12|(l=b[o.charAt(p++)])<<6|(h=b[o.charAt(p++)]),i+=l===64?_(r>>16&255):h===64?_(r>>16&255,r>>8&255):_(r>>16&255,r>>8&255,r&255);return i},D=w?o=>atob(L(o)):m?o=>Buffer.from(o,"base64").toString("binary"):M,N=m?o=>g(Buffer.from(o,"base64")):o=>g(D(o),r=>r.charCodeAt(0)),G=o=>N(z(o)),H=m?o=>Buffer.from(o,"base64").toString("utf8"):B?o=>B.decode(N(o)):o=>k(D(o)),z=o=>L(o.replace(/[-_]/g,r=>r=="-"?"+":"/")),F=o=>H(z(o)),J=o=>{if(typeof o!="string")return!1;const r=o.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(r)||!/[^\s0-9a-zA-Z\-_]/.test(r)},Z=o=>({value:o,enumerable:!1,writable:!0,configurable:!0}),V=function(){const o=(r,i)=>Object.defineProperty(String.prototype,r,Z(i));o("fromBase64",function(){return F(this)}),o("toBase64",function(r){return s(this,r)}),o("toBase64URI",function(){return s(this,!0)}),o("toBase64URL",function(){return s(this,!0)}),o("toUint8Array",function(){return G(this)})},K=function(){const o=(r,i)=>Object.defineProperty(Uint8Array.prototype,r,Z(i));o("toBase64",function(r){return y(this,r)}),o("toBase64URI",function(){return y(this,!0)}),o("toBase64URL",function(){return y(this,!0)})},X={version:c,VERSION:f,atob:D,atobPolyfill:M,btoa:j,btoaPolyfill:O,fromBase64:F,toBase64:s,encode:s,encodeURI:u,encodeURL:u,utob:n,btou:k,decode:F,isValid:J,fromUint8Array:y,toUint8Array:G,extendString:V,extendUint8Array:K,extendBuiltins:()=>{V(),K()}}},1291:function(d,v,a){var c=a(1472);c.__esModule&&(c=c.default),typeof c=="string"&&(c=[[d.i,c,""]]),c.locals&&(d.exports=c.locals);var f=a(2).default,w=f("cc5cfd52",c,!0,{sourceMap:!1})},1470:function(d,v,a){d.exports=a.p+"img/potatso_lite.3707bc5.png"},1471:function(d,v,a){"use strict";var c=a(1291),f=a.n(c)},1472:function(d,v,a){var c=a(1),f=c(!1);f.push([d.i,".potatso-container .el-select{width:100%}.potatso-container .qr{margin-top:2rem}.potatso-container .qr canvas{width:60vw}.potatso-container .server-details,.potatso-container .server-details .el-row{margin-top:1rem}.potatso-container .server-details .el-row .el-input__inner{border:none}",""]),d.exports=f},1496:function(d,v,a){"use strict";a.r(v);var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"potatso-container"},[e("ol",[e("li",[e("span",{staticClass:"title"},[t._v("\u4E0B\u8F7D Potatso Lite")]),e("p",[t._v("\u524D\u5F80 App Store \u4E0B\u8F7D Potatso Lite"),e("br"),e("br"),e("center",[e("a",{on:{click:function(s){return t.openSite("https://itunes.apple.com/us/app/potatso-lite/id1239860606")}}},[e("img",{staticClass:"app-icon",attrs:{src:a(1470)}}),e("br"),e("br"),e("el-button",{attrs:{type:"primary"},on:{click:function(s){return t.openSite("https://itunes.apple.com/us/app/potatso-lite/id1239860606")}}},[t._v("\u524D\u5F80 AppStore")])],1)]),e("br"),e("br"),e("center",[e("h3",[t._v("Potatso Lite \u76EE\u524D\u5E76\u4E0D\u652F\u6301 VMess \u534F\u8BAE\uFF0C\u4EC5\u652F\u6301SSLTide\u548CShadowsocks\u534F\u8BAE")]),e("br")]),e("i",[t._v("Potatso Lite\u4E3A\u7B2C\u4E09\u65B9\u5F00\u53D1\u8005\u53D1\u5E03\u7684\u901A\u7528\u578B\u5BA2\u6237\u7AEF\uFF0C\u76EE\u524D\u4E3A\u514D\u8D39App\u3002")]),e("br"),e("i",[t._v("\u5982\u679C\u60A8\u9700\u8981\u529F\u80FD\u66F4\u5F3A\u5927\u3001\u65B9\u4FBF\u7684\u8F6F\u4EF6\uFF0C\u6211\u4EEC\u63A8\u8350\u60A8\u4F7F\u7528"),e("a",{on:{click:function(s){return t.switchGuideTab("apGuideTab","shadowrocket")}}},[t._v("Shadowrocket")])])],1),e("h4",[e("b",[t._v("\u8FD1\u671F\u6536\u5230\u8F83\u591A\u53CD\u9988Potatso Lite\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\u7684\u95EE\u9898\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4E0EPotatso Lite\u4F5C\u8005\u8FDB\u884C\u53CD\u9988\u3002")]),e("br"),t._v("\u5982\u679C\u60A8\u4E5F\u65E0\u6CD5\u901A\u8FC7Potatso Lite\u4F7F\u7528\u670D\u52A1\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u6362\u7528"),e("a",{on:{click:function(s){return t.switchGuideTab("apGuideTab","shadowrocket")}}},[t._v("Shadowrocket \u914D\u7F6E\u670D\u52A1")])]),e("p")]),e("li",[e("span",{staticClass:"title"},[t._v("\u5BFC\u5165\u7EBF\u8DEF")]),t._m(0),e("p",[t._v("\u5982\u679C\u5DF2\u7ECF\u6709\u6DFB\u52A0\u8FC7\u7EBF\u8DEF\uFF0C\u8BF7\u70B9\u51FB\u4E3B\u754C\u9762\u53F3\u4E0A\u89D2\u7684 + \u53F7\u518D\u9009\u62E9 Add \u6DFB\u52A0")]),t._m(1),t._m(2),e("p",[t._v("\u5176\u4F59\u90E8\u5206\u5404\u7EBF\u8DEF\u4E0D\u540C\uFF0C\u8BF7\u5728\u4E0B\u65B9\u9009\u62E9\u7EBF\u8DEF\uFF0C\u5E76\u6309\u7167\u5BF9\u5E94\u7EBF\u8DEF\u4FE1\u606F\u586B\u5199\uFF1A")]),e("br"),e("el-select",{attrs:{placeholder:"\u70B9\u6B64\u9009\u62E9\u7EBF\u8DEF"},model:{value:t.lineName,callback:function(s){t.lineName=s},expression:"lineName"}},t._l(t.sslServers,function(s){return e("el-option",{key:s.name,attrs:{label:s.name,value:s.name},nativeOn:{click:function(u){return t.changeGuideLine(s)}}})}),1),t.lineName?e("div",{staticClass:"server-details"},[e("el-row",[e("el-col",{attrs:{span:5}},[e("p",[t._v("Host")])]),e("el-col",{attrs:{span:19}},[e("el-input",{attrs:{type:"text",value:t.selectedLine.host,readonly:""}})],1)],1),e("el-row",[e("el-col",{attrs:{span:5}},[e("p",[t._v("Port")])]),e("el-col",{attrs:{span:19}},[e("el-input",{attrs:{type:"text",value:t.selectedLine.ssltide_port,readonly:""}})],1)],1),e("el-row",[e("el-col",{attrs:{span:5}},[e("p",[t._v("User")])]),e("el-col",{attrs:{span:19}},[e("el-input",{attrs:{type:"text",value:this.current_service.user_id,readonly:""}})],1)],1),e("el-row",[e("el-col",{attrs:{span:5}},[e("p",[t._v("Password")])]),e("el-col",{attrs:{span:19}},[e("el-input",{attrs:{type:"text",value:this.current_service.extra.sslpwd||this.current_service.extra.pac_name,readonly:""}})],1)],1),e("el-row",[e("el-col",{attrs:{span:5}},[e("p",[t._v("Remark")])]),e("el-col",{attrs:{span:19}},[e("el-input",{attrs:{type:"text",value:t.selectedLine.name,readonly:""}})],1)],1)],1):e("div",[e("center",[e("i",{staticClass:"small"},[t._v("\u8BF7\u5148\u9009\u62E9\u7EBF\u8DEF")])])],1),e("br"),e("br"),t._m(3),e("p",[t._v("\u4FDD\u5B58\u540E\u4F1A\u81EA\u52A8\u8DF3\u56DE\u5230\u8F6F\u4EF6\u4E3B\u754C\u9762\uFF0C\u518D\u6B21\u70B9\u51FB\u4E3B\u754C\u9762\u53F3\u4E0A\u89D2\u7684 + \u53F7\u53EF\u7EE7\u7EED\u6DFB\u52A0\u7EBF\u8DEF\uFF0C\u5EFA\u8BAE\u60A8\u5148\u6DFB\u52A0\u5B8C\u6240\u6709\u7EBF\u8DEF")])],1),t._m(4),t._m(5),t._m(6)])])},f=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("\u6253\u5F00 Potatso Lite\uFF0C\u70B9\u51FB\u5C4F\u5E55\u6700\u4E0B\u65B9\u7684"),e("code",[t._v("Add a Proxy")]),t._v("\u7136\u540E\u9009\u62E9Manual Input\u4E0B\u9762\u7684"),e("code",[t._v("Add")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("1. \u4FEE\u6539"),e("code",[t._v("Type")]),t._v("\u4E3A "),e("code",[t._v("HTTPS")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("2. \u4FEE\u6539"),e("code",[t._v("Authentication")]),t._v("\u4E3A"),e("code",[t._v("PASSWORD")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("\u586B\u5199\u5B8C\u6210\u540E\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684"),e("code",[t._v("Done")]),t._v("\u5373\u53EF\u4FDD\u5B58\u6B64\u7EBF\u8DEF")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("span",{staticClass:"title"},[t._v("\u8C03\u6574\u8F6F\u4EF6\u8BBE\u5B9A")]),e("p",[t._v("\u5728App\u6700\u4E0B\u65B9\u70B9\u51FB"),e("code",[t._v("Settings")]),t._v("\u8FDB\u5165\u8BBE\u7F6E\u9875\u9762\uFF0C\u5F00\u542F"),e("code",[t._v("\u667A\u80FD\u8DEF\u7531")])]),e("p",[t._v("\u5F00\u542F\u540E\u53EA\u6709\u5899\u5916\u6D41\u91CF\u4F1A\u6D41\u7ECFPandaFan\u7684\u670D\u52A1\u5668\uFF0C\u4E0D\u5F71\u54CD\u8BBF\u95EE\u56FD\u5185\u7684\u7AD9\u70B9")]),e("p",[t._v("\u5173\u95ED\u667A\u80FD\u8DEF\u7531\uFF0C\u5219\u6240\u6709\u6D41\u91CF\u90FD\u4F1A\u88AB\u52A0\u5BC6\u8F6C\u53D1\u7ED9PandaFan\u7684\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u5728\u516C\u5171\u7F51\u7EDC\u4E0B\u4FDD\u62A4\u60A8\u7684\u6570\u636E\u5B89\u5168\u548C\u4E2A\u4EBA\u9690\u79C1")]),e("p",{staticClass:"question"},[t._v("\u5F00\u542F\u667A\u80FD\u8DEF\u7531\u65F6\u51FA\u73B0\u9519\u8BEF\u4FE1\u606F\uFF1F\u5076\u5C14\u4F1A\u53D1\u751F\u8FD9\u6837\u7684\u60C5\u51B5\uFF0C\u5C5E\u4E8EPotatso Lite\u7684\u8F6F\u4EF6\u95EE\u9898\uFF0C\u60A8\u53EF\u4EE5\u65E0\u89C6\u6B64\u63D0\u793A\uFF0C\u6682\u65F6\u5173\u95EDSmart Routing\u4F7F\u7528\u5373\u53EF\u3002"),e("br"),t._v("\u82E5\u6301\u7EED\u51FA\u73B0\u6B64\u73B0\u8C61\uFF0C\u60A8\u53EF\u4EE5\u5411\u8F6F\u4EF6\u4F5C\u8005\u53CD\u9988\u3002")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("span",{staticClass:"title"},[t._v("\u5B8C\u6210\uFF0C\u5F00\u59CB\u4F7F\u7528")]),e("p",[t._v("\u5728\u4E3B\u754C\u9762\u4E2D\u70B9\u51FB\u6700\u4E0B\u65B9\u7684"),e("code",[t._v("\u5F00\u59CB")]),t._v("\u4FBF\u8FDE\u63A5\u4E0A\u670D\u52A1\u5566")]),e("p",[t._v("\u8BF7\u7EE7\u7EED\u9605\u8BFB\u672C\u9875\u5269\u4F59\u5185\u5BB9\uFF0C\u4E86\u89E3\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("span",{staticClass:"title"},[t._v("\u6CE8\u610F\u4E8B\u9879")]),e("p",[t._v("- Potatso Lite \u4E3A\u514D\u8D39\u8F6F\u4EF6\uFF0C\u7A33\u5B9A\u6027\u3001\u529F\u80FD\u4E0D\u5982\u5176\u4ED6App\u5F3A\u5927\uFF0C\u6709\u6761\u4EF6\u5EFA\u8BAE\u8D2D\u4E70 Shadowrocket")]),e("p",[t._v("\u5076\u5C14\u8F6F\u4EF6\u4F7F\u7528\u51FA\u73B0\u95EE\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u66F4\u6362\u7EBF\u8DEF\u548C\u5173\u95ED"),e("code",[t._v("\u667A\u80FD\u8DEF\u7531")])]),e("p",[t._v("- Potatso Lite \u975EPandaFan\u5F00\u53D1/\u63D0\u4F9B\uFF0C\u82E5\u6709\u5173\u4E8EApp\u672C\u8EAB\u7684\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFBApp\u5F00\u53D1\u8005\u83B7\u53D6\u652F\u6301")])])}],w=a(63),T=a(26),m=a(22),B=a(9),E=a(39),$=a(27),x=a(40),b=a(18),U=a(52),_=a(1156);function g(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),e.push.apply(e,s)}return e}function A(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?g(Object(e),!0).forEach(function(s){Object(b.a)(t,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))})}return t}var L={data:function(){return{selectedLine:{},lineName:""}},computed:A(A({},Object(U.b)(["staticFileDomain","siteURL"])),{},{ssSubLink:function(){return this.current_service?"https://".concat(this.staticFileDomain,"/ss-sub/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""},ssLink:function(){var n=this.current_service,e=n.extra,s="ss";n.is_ssr&&(s="ssr");var u="";s==="ss"?u="".concat(e.ss_method||"aes-256-cfb",":").concat(e.sspwd||e.pac_name,"@").concat(this.selectedLine.server,":").concat(e.ss_port):u="".concat(this.selectedLine.server,":").concat(e.ss_port,":").concat(e.ss_proto||"origin",":").concat(e.ss_method,":").concat(e.ss_obfs,":").concat(_.a.encode(e.sspwd||e.pac_name),"/?protoparam=").concat(_.a.encode(e.ss_proto_param),"&obfsparam=#{Base64.encode(e.ss_obfs_param)}&remarks=#{Base64.encode(").concat(this.siteURL,"+ ' | ' + this.selectedLine.pac_name.toUpperCase())}"),console.log(u);var S="".concat(s,"://").concat(_.a.encode(u));return console.log(S),S},sslServers:function(){return this.current_lines.filter(function(n){return n.ssltide})}}),mounted:function(){console.log("[LOG] from potatso.vue",this.current_service_cate)},methods:{changeGuideLine:function(n){this.lineName=n.name,this.selectedLine=n}}},O=L,j=a(1471),P=a(51),y=Object(P.a)(O,c,f,!1,null,null,null),I=v.default=y.exports}}]);
