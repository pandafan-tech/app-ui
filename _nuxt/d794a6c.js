(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1149:function(v,p,a){"use strict";a.d(p,"a",function(){return Q});const c="3.7.2",u=c,B=typeof atob=="function",F=typeof btoa=="function",h=typeof Buffer=="function",U=typeof TextDecoder=="function"?new TextDecoder:void 0,E=typeof TextEncoder=="function"?new TextEncoder:void 0,G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",x=Array.prototype.slice.call(G),b=(e=>{let n={};return e.forEach((i,d)=>n[i]=d),n})(x),D=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,_=String.fromCharCode.bind(String),g=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(e,n=i=>i)=>new Uint8Array(Array.prototype.slice.call(e,0).map(n)),A=e=>e.replace(/=/g,"").replace(/[+\/]/g,n=>n=="+"?"-":"_"),j=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),S=e=>{let n,i,d,m,f="";const k=e.length%3;for(let P=0;P<e.length;){if((i=e.charCodeAt(P++))>255||(d=e.charCodeAt(P++))>255||(m=e.charCodeAt(P++))>255)throw new TypeError("invalid character found");n=i<<16|d<<8|m,f+=x[n>>18&63]+x[n>>12&63]+x[n>>6&63]+x[n&63]}return k?f.slice(0,k-3)+"===".substring(k):f},C=F?e=>btoa(e):h?e=>Buffer.from(e,"binary").toString("base64"):S,O=h?e=>Buffer.from(e).toString("base64"):e=>{const n=4096;let i=[];for(let d=0,m=e.length;d<m;d+=n)i.push(_.apply(null,e.subarray(d,d+n)));return C(i.join(""))},y=(e,n=!1)=>n?A(O(e)):O(e),I=e=>{if(e.length<2){var n=e.charCodeAt(0);return n<128?e:n<2048?_(192|n>>>6)+_(128|n&63):_(224|n>>>12&15)+_(128|n>>>6&63)+_(128|n&63)}else{var n=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return _(240|n>>>18&7)+_(128|n>>>12&63)+_(128|n>>>6&63)+_(128|n&63)}},o=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,s=e=>e.replace(o,I),t=h?e=>Buffer.from(e,"utf8").toString("base64"):E?e=>O(E.encode(e)):e=>C(s(e)),r=(e,n=!1)=>n?A(t(e)):t(e),l=e=>r(e,!0),w=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,K=e=>{switch(e.length){case 4:var n=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),i=n-65536;return _((i>>>10)+55296)+_((i&1023)+56320);case 3:return _((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return _((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},T=e=>e.replace(w,K),N=e=>{if(e=e.replace(/\s+/g,""),!D.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let n,i="",d,m;for(let f=0;f<e.length;)n=b[e.charAt(f++)]<<18|b[e.charAt(f++)]<<12|(d=b[e.charAt(f++)])<<6|(m=b[e.charAt(f++)]),i+=d===64?_(n>>16&255):m===64?_(n>>16&255,n>>8&255):_(n>>16&255,n>>8&255,n&255);return i},L=B?e=>atob(j(e)):h?e=>Buffer.from(e,"base64").toString("binary"):N,$=h?e=>g(Buffer.from(e,"base64")):e=>g(L(e),n=>n.charCodeAt(0)),z=e=>$(M(e)),J=h?e=>Buffer.from(e,"base64").toString("utf8"):U?e=>U.decode($(e)):e=>T(L(e)),M=e=>j(e.replace(/[-_]/g,n=>n=="-"?"+":"/")),R=e=>J(M(e)),W=e=>{if(typeof e!="string")return!1;const n=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(n)||!/[^\s0-9a-zA-Z\-_]/.test(n)},Z=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),V=function(){const e=(n,i)=>Object.defineProperty(String.prototype,n,Z(i));e("fromBase64",function(){return R(this)}),e("toBase64",function(n){return r(this,n)}),e("toBase64URI",function(){return r(this,!0)}),e("toBase64URL",function(){return r(this,!0)}),e("toUint8Array",function(){return z(this)})},H=function(){const e=(n,i)=>Object.defineProperty(Uint8Array.prototype,n,Z(i));e("toBase64",function(n){return y(this,n)}),e("toBase64URI",function(){return y(this,!0)}),e("toBase64URL",function(){return y(this,!0)})},Q={version:c,VERSION:u,atob:L,atobPolyfill:N,btoa:C,btoaPolyfill:S,fromBase64:R,toBase64:r,encode:r,encodeURI:l,encodeURL:l,utob:s,btou:T,decode:R,isValid:W,fromUint8Array:y,toUint8Array:z,extendString:V,extendUint8Array:H,extendBuiltins:()=>{V(),H()}}},1285:function(v,p,a){var c=a(1467);c.__esModule&&(c=c.default),typeof c=="string"&&(c=[[v.i,c,""]]),c.locals&&(v.exports=c.locals);var u=a(2).default,B=u("f9cd595e",c,!0,{sourceMap:!1})},1466:function(v,p,a){"use strict";var c=a(1285),u=a.n(c)},1467:function(v,p,a){var c=a(1),u=c(!1);u.push([v.i,".android-ss-container .el-select{width:100%}.android-ss-container .qr{margin-top:2rem}.android-ss-container .qr canvas{width:60vw}",""]),v.exports=u},1491:function(v,p,a){"use strict";a.r(p);var c=function(){var o=this,s=o.$createElement,t=o._self._c||s;return t("div",{staticClass:"android-ss-container"},[t("ol",[t("li",[t("span",{staticClass:"title"},[o._v("\u4E0B\u8F7D Shadowsocks")]),t("p",[o._v("\u524D\u5F80 GitHub \u4E0B\u8F7D\u6700\u65B0\u7248 Shadowsocks for Android"),t("br"),o._v("\u60A8\u53EF\u4EE5\u4E0B\u8F7D\u5230\u7535\u8111\u4E0A\u518D\u5BFC\u5165\u81F3\u624B\u673A\u5B89\u88C5\uFF0C\u6216\u8005\u5728\u624B\u673A\u4E0A\u8F93\u5165\u77ED\u94FE\u63A5\u5730\u5740\u76F4\u63A5\u4E0B\u8F7D\u5B89\u88C5"),t("br"),t("br"),t("span",{staticClass:"small"},[o._v("4.7.3 Universal \u7248\u672C \u77ED\u94FE\u63A5\uFF1A")]),t("el-input",{attrs:{type:"text",value:"https://mrw.so/4SRuiB",readonly:""}}),t("br"),t("br"),t("center",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return o.openSite("https://github.com/shadowsocks/shadowsocks-android/releases")}}},[o._v("\u524D\u5F80 GitHub \u4E0B\u8F7D")]),t("p",{staticClass:"small"},[t("i",[o._v("\u4E0D\u77E5\u9053\u9009\u54EA\u4E2A\u7248\u672C\uFF1F\u8BF7\u9009\u62E9\u6709 universal \u5B57\u6837\u7684\u5373\u53EF")])])],1),t("center"),t("br"),t("i",[o._v("Shadowsocks for Android \u4E3A\u5F00\u6E90\u793E\u533A\u5F00\u53D1\u7684\u7684\u514D\u8D39\u901A\u7528\u578B\u5BA2\u6237\u7AEF")]),t("br"),t("i",[o._v("\u57FA\u7840\u914D\u7F6E\u5916\u7684\u529F\u80FD\u8BF7\u81EA\u884C\u53C2\u8003\u7F51\u7EDC\u8D44\u6599\u8FDB\u884C\u4E86\u89E3")])],1)]),t("li",[t("span",{staticClass:"title"},[o._v("\u5BFC\u5165\u7EBF\u8DEF\u914D\u7F6E")]),t("p",[o._v("\u6253\u5F00 Shadowsocks\uFF0C\b\u60A8\u53EF\u80FD\u4F1A\u770B\u5230\u8F6F\u4EF6\u91CC\u5DF2\u7ECF\u6709\u4E00\u4E2A\u7EBF\u8DEF\uFF0C\u5730\u5740\u662F 198.xxxx \u3002\u6B64\u4E3A\u8F6F\u4EF6\u81EA\u5E26\u7684\u7EBF\u8DEF\uFF0C\u65E0\u6CD5\u4F7F\u7528\uFF0C\u8BF7\u65E0\u89C6\u6216\u8005\u5220\u9664\u5B83\u3002")]),o._m(0),t("br"),t("p",[o._v("\u8BF7\u5728\u4E0B\u65B9\u9009\u62E9\u9700\u8981\u5BFC\u5165\u7684\u7EBF\u8DEF")]),t("el-select",{attrs:{placeholder:"\u70B9\u6B64\u9009\u62E9\u7EBF\u8DEF"},model:{value:o.lineName,callback:function(r){o.lineName=r},expression:"lineName"}},o._l(o.ssServers,function(r){return t("el-option",{key:r.name,attrs:{label:r.name,value:r.name},nativeOn:{click:function(l){return o.changeGuideLine(r)}}})}),1),t("center",{staticClass:"qr"},[o.lineName?t("qrcode",{attrs:{value:o.ssLink}}):o._e()],1),t("br"),t("br"),t("p",{staticClass:"question"},[o._v("\u63D0\u793A\u9700\u8981Play\u6846\u67B6\uFF1F\u65E0\u6CD5\u626B\u63CF\u4E8C\u7EF4\u7801\uFF1F\u60A8\u53EF\u80FD\u662F\u56FD\u4EA7\u5B89\u5353\u7CFB\u7EDF\u7684\u53D7\u5BB3\u8005\uFF0C\u8BF7\u5148\u5C1D\u8BD5\u5B89\u88C5GitHub\u4E2D\u7684\u8001\u7248\u672C Shadowsocks\uFF084.1.5\u6216\u66F4\u8001\uFF09\u3002\u5982\u679C\u65E0\u6CD5\u89E3\u51B3\uFF0C\u5219\u5FC5\u9700\u5B89\u88C5Play\u6846\u67B6\u3002Play\u6846\u67B6\u5B89\u88C5\u65B9\u6CD5\u9700\u60A8\u81EA\u884C\u641C\u7D22\b\b\u5BF9\u5E94\u673A\u578B\uFF0C\u6211\u4EEC\u65E0\u6CD5\u63D0\u4F9B\u8FD9\u65B9\u9762\u7684\u7EC6\u8282\u534F\u52A9\u3002"),t("a",{on:{click:function(r){return o.openSite("https://www.baidu.com/s?wd=\u534E\u4E3AP20%20play\u6846\u67B6")}}},[o._v("\u70B9\u6B64\u641C\u7D22\u5BF9\u5E94\u673A\u578B\u5B89\u88C5\u529E\u6CD5")])]),t("br"),t("p",{staticClass:"question"},[o._v("\u4E0D\u65B9\u4FBF\u626B\u7801\uFF1F\u60A8\u8FD8\u53EF\u4EE5\u7528\u624B\u673A\u6253\u5F00PandaFan\u7684\u5B98\u7F51"),t("a",{on:{click:function(r){return o.openSite()}}},[o._v(o._s(o.siteURL))]),t("br"),o._v("\u767B\u5F55\u540E\u8FDB\u5165Android\u914D\u7F6E\u9875\u9762\uFF0C\u70B9\u51FB\u5BF9\u5E94\u7EBF\u8DEF\u7684\u5BFC\u5165\u94FE\u63A5\u5373\u53EF\u5BFC\u5165\u7EBF\u8DEF")])],1),o._m(1),o._m(2),o._m(3)])])},u=[function(){var o=this,s=o.$createElement,t=o._self._c||s;return t("p",[o._v("\u70B9\u51FB\u53F3\u4E0A\u65B9\u7684"),t("code",[o._v("+")]),o._v("\u53F7\u6309\u94AE\uFF0C\u7136\u540E\u9009\u62E9Scan QR code\uFF08\u626B\u63CF\u4E8C\u7EF4\u7801\uFF09\uFF0C\u626B\u4E00\u626B\u4E0B\u9762\u7684\u4E8C\u7EF4\u7801\u5373\u53EF\u5BFC\u5165\u5BF9\u5E94\u7684\u7EBF\u8DEF")])},function(){var o=this,s=o.$createElement,t=o._self._c||s;return t("li",[t("span",{staticClass:"title"},[o._v("\u8C03\u6574\u8F6F\u4EF6\u8BBE\u5B9A")]),t("p",[o._v("\u70B9\u51FB\u521A\u5BFC\u5165\u7684\u7EBF\u8DEF\u6700\u53F3\u4FA7 \u270E \u6837\u5F0F\u56FE\u6807\uFF0C\u8FDB\u5165\u7F16\u8F91\u754C\u9762\uFF08\u6BCF\u6761\u7EBF\u8DEF\u7684\u914D\u7F6E\u90FD\u72EC\u7ACB\uFF0C\u6240\u4EE5\u9700\u8981\u5BF9\u5404\u7EBF\u8DEF\u5355\u72EC\u4FEE\u6539\uFF09")]),t("p",[o._v("\u5173\u95ED"),t("code",[o._v("IPv6 \u8DEF\u7531")]),o._v("IPv6 Route\uFF0C\u5F00\u542F"),t("code",[o._v("DNS \u8F6C\u53D1")])])])},function(){var o=this,s=o.$createElement,t=o._self._c||s;return t("li",[t("span",{staticClass:"title"},[o._v("\u5B8C\u6210\uFF0C\u5F00\u59CB\u4F7F\u7528")]),t("p",[o._v("\u5728Shadowsocks\u4E3B\u754C\u9762\u9009\u4E2D\u60A8\u8981\u4F7F\u7528\u7684\u7EBF\u8DEF\uFF0C\u7136\u540E\u70B9\u51FB\u53F3\u4E0B\u65B9\u7684\u5C0F\u98DE\u673A\u6309\u94AE\u4FBF\u53EF\u4EE5\u5F00\u59CB\u4F7F\u7528\u4E86")]),t("p",[o._v("\u8BF7\u7EE7\u7EED\u9605\u8BFB\u672C\u9875\u5269\u4F59\u5185\u5BB9\uFF0C\u4E86\u89E3\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879")])])},function(){var o=this,s=o.$createElement,t=o._self._c||s;return t("li",[t("span",{staticClass:"title"},[o._v("\u6CE8\u610F\u4E8B\u9879")]),t("p",[o._v("- \u66F4\u591A\u5173\u4E8E Shadowsocks \u7684\u7528\u6CD5\u60A8\u53EF\u4EE5\u5728\u7F51\u4E0A Google\uFF0C\u53EF\u4EE5\u627E\u5230\u975E\u5E38\u591A\u7684\u914D\u7F6E\u6559\u7A0B")]),t("p",[o._v("- Shadowsocks for Android \u975EPandaFan\u5F00\u53D1/\u63D0\u4F9B\uFF0C\u82E5\u6709\u5173\u4E8EApp\u672C\u8EAB\u7684\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFBApp\u5F00\u53D1\u8005\u83B7\u53D6\u652F\u6301")])])}],B=a(62),F=a(27),h=a(23),U=a(9),E=a(39),G=a(28),x=a(40),b=a(19),D=a(52),_=a(1149);function g(o,s){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);s&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),t.push.apply(t,r)}return t}function A(o){for(var s=1;s<arguments.length;s++){var t=arguments[s]!=null?arguments[s]:{};s%2?g(Object(t),!0).forEach(function(r){Object(b.a)(o,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))})}return o}var j={data:function(){return{androidGuideLine:{},lineName:""}},computed:A(A({},Object(D.b)(["staticFileDomain","siteURL"])),{},{surge_config_link:function(){return console.log("-->",this.current_service_cate),this.current_service?"https://".concat(this.staticFileDomain,"/surge/").concat(this.current_service.id,"/").concat(this.current_service.extra.pac_name):""},ssLink:function(){var s=this.current_service,t=s.extra,r="ss";s.is_ssr&&(r="ssr");var l="";r==="ss"?l="".concat(t.ss_method||"aes-256-cfb",":").concat(t.sspwd||t.pac_name,"@").concat(this.androidGuideLine.server,":").concat(t.ss_port):l="".concat(this.androidGuideLine.server,":").concat(t.ss_port,":").concat(t.ss_proto||"origin",":").concat(t.ss_method,":").concat(t.ss_obfs,":").concat(_.a.encode(t.sspwd||t.pac_name),"/?protoparam=").concat(_.a.encode(t.ss_proto_param),"&obfsparam=#{Base64.encode(e.ss_obfs_param)}&remarks=#{Base64.encode(").concat(this.siteURL,"+ ' | ' + this.androidGuideLine.pac_name.toUpperCase())}"),console.log(l);var w="".concat(r,"://").concat(_.a.encode(l));return console.log(w),w},ssServers:function(){return this.current_lines.filter(function(s){return s.ss})}}),mounted:function(){console.log("[LOG] from shadowrocket.vue",this.current_service_cate)},methods:{changeGuideLine:function(s){this.lineName=s.name,this.androidGuideLine=s}}},S=j,C=a(1466),O=a(51),y=Object(O.a)(S,c,u,!1,null,null,null),I=p.default=y.exports}}]);
