(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1100:function(t,e,r){var n=r(295);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},1101:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},1102:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},1137:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(1100),o=r(1101),l=r(205),c=r(1102);function d(t){return n(t)||o(t)||l(t)||c()}},1160:function(t,e,r){var n=r(34);t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},1161:function(t,e,r){var content=r(1307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("4186d062",content,!0,{sourceMap:!1})},1303:function(t,e,r){"use strict";var strong=r(1304),n=r(1160);t.exports=r(1305)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(n(this,"Set"),t=0===t?0:t,t)}},strong)},1304:function(t,e,r){"use strict";var n=r(24).f,o=r(137),l=r(294),c=r(72),d=r(292),f=r(293),_=r(202),h=r(296),x=r(203),v=r(18),m=r(290).fastKey,y=r(1160),w=v?"_s":"size",k=function(t,e){var r,n=m(e);if("F"!==n)return t._i[n];for(r=t._f;r;r=r.n)if(r.k==e)return r};t.exports={getConstructor:function(t,e,r,_){var h=t((function(t,n){d(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[w]=0,null!=n&&f(n,r,t[_],t)}));return l(h.prototype,{clear:function(){for(var t=y(this,e),data=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete data[r.i];t._f=t._l=void 0,t[w]=0},delete:function(t){var r=y(this,e),n=k(r,t);if(n){var o=n.n,l=n.p;delete r._i[n.i],n.r=!0,l&&(l.n=o),o&&(o.p=l),r._f==n&&(r._f=o),r._l==n&&(r._l=l),r[w]--}return!!n},forEach:function(t){y(this,e);for(var r,n=c(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(n(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!k(y(this,e),t)}}),v&&n(h.prototype,"size",{get:function(){return y(this,e)[w]}}),h},def:function(t,e,r){var n,o,l=k(t,e);return l?l.v=r:(t._l=l={i:o=m(e,!0),k:e,v:r,p:n=t._l,n:void 0,r:!1},t._f||(t._f=l),n&&(n.n=l),t[w]++,"F"!==o&&(t._i[o]=l)),t},getEntry:k,setStrong:function(t,e,r){_(t,e,(function(t,r){this._t=y(t,e),this._k=r,this._l=void 0}),(function(){for(var t=this,e=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?h(0,"keys"==e?r.k:"values"==e?r.v:[r.k,r.v]):(t._t=void 0,h(1))}),r?"entries":"values",!r,!0),x(e)}}},1305:function(t,e,r){"use strict";var n=r(7),o=r(9),l=r(30),c=r(294),meta=r(290),d=r(293),f=r(292),_=r(34),h=r(25),x=r(201),v=r(104),m=r(204);t.exports=function(t,e,r,y,w,k){var $=n[t],M=$,D=w?"set":"add",S=M&&M.prototype,E={},L=function(t){var e=S[t];l(S,t,"delete"==t||"has"==t?function(a){return!(k&&!_(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return k&&!_(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof M&&(k||S.forEach&&!h((function(){(new M).entries().next()})))){var C=new M,F=C[D](k?{}:-0,1)!=C,T=h((function(){C.has(1)})),j=x((function(t){new M(t)})),R=!k&&h((function(){for(var t=new M,e=5;e--;)t[D](e,e);return!t.has(-0)}));j||((M=e((function(e,r){f(e,M,t);var n=m(new $,e,M);return null!=r&&d(r,w,n[D],n),n}))).prototype=S,S.constructor=M),(T||R)&&(L("delete"),L("has"),w&&L("get")),(R||F)&&L(D),k&&S.clear&&delete S.clear}else M=y.getConstructor(e,t,w,D),c(M.prototype,r),meta.NEED=!0;return v(M,t),E[t]=M,o(o.G+o.W+o.F*(M!=$),E),k||y.setStrong(M,t,w),M}},1306:function(t,e,r){"use strict";r(1161)},1307:function(t,e,r){var n=r(57)((function(i){return i[1]}));n.push([t.i,".proxy-rules-container{height:100vh;padding:2rem .5rem .5rem;position:relative;max-width:100vw;color:#f4f7fc}.proxy-rules-container ol{padding-left:0;margin-bottom:1rem}.proxy-rules-container ol li{margin-left:1rem}.proxy-rules-container ol li code{padding:.5rem;text-decoration:underline}.proxy-rules-container .el-button{margin-bottom:2rem}.proxy-rules-container h2{font-weight:500}.proxy-rules-container .el-row{margin-bottom:2rem}.proxy-rules-container .el-transfer{width:100%;margin:20px auto}.proxy-rules-container .el-transfer-panel{width:45%}.proxy-rules-container .el-transfer__buttons{width:10%}.proxy-rules-container .el-transfer__buttons .el-transfer__button{margin:10px auto}.proxy-rules-container .top-space{margin-top:1rem}.proxy-rules-container .info-content,.proxy-rules-container .info-header{color:#34495e;margin-bottom:.5rem;line-height:1.2}.proxy-rules-container .info-header{color:#7f8c8d}.proxy-rules-container .info-header h3{font-weight:400}.proxy-rules-container .large-button{font-size:1.5rem}.proxy-rules-container .dashboard-link,.proxy-rules-container .mode-switch{position:fixed;bottom:.5rem;z-index:999}.proxy-rules-container .dashboard-link{right:.5rem}.proxy-rules-container .mode-switch{left:.5rem}.proxy-rules-container .menu-link{font-size:2rem;text-decoration:none;width:100%;display:block;margin-top:.5rem;padding-left:.5rem}.proxy-rules-container .menu-link:hover{background:#1abc9c;color:#fff}",""]),t.exports=n},1339:function(t,e,r){"use strict";r.r(e);r(28),r(29),r(71);var n=r(5),o=(r(83),r(1137)),l=(r(39),r(20),r(8),r(38),r(1303),r(136),r(82),r(101),r(17),{middleware:["load-rt-data"],data:function(){return{rawlogs:{},user_include:null,user_exclude:null,editMode:"domain-mode",dirtyData:!1,hostnameReg:/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i}},computed:{proxyName:function(){return this.rawlogs.proxy},stdout:function(){return this.rawlogs.stdout},stderr:function(){return this.rawlogs.stderr},records:function(){return this.stderr?(console.log("filtering proxy domains..."),this.stderr.reduce((function(t,line){if(line.includes("<->")&&!line.includes("error in dial")){var e=line.trim().split(/\s+/),r=e[e.length-1],n=e[6].split(":")[0];"DIRECT"===r?t.direct.add(n):t.proxied.add(n)}return t}),{proxied:new Set,direct:new Set})):{}},proxiedDomainList:function(){return Array.from(this.records.proxied||[])},directDomainList:function(){return Array.from(this.records.direct||[])},user_exclude_str:{get:function(){var t;return null===(t=this.user_exclude)||void 0===t?void 0:t.join("\n")},set:function(t){this.dirtyData=!0,this.user_exclude=null==t?void 0:t.split("\n").reduce(this.textEditSetMangle,[])}},user_include_str:{get:function(){var t;return null===(t=this.user_include)||void 0===t?void 0:t.join("\n")},set:function(t){this.dirtyData=!0,this.user_include=null==t?void 0:t.split("\n").reduce(this.textEditSetMangle,[])}},proxyDomainListForTransfer:function(){var t,e,r=this,n=this.proxiedDomainList.reduce((function(t,e){return t.push({key:e,label:e,disabled:!1}),t}),[]),l=((null===(t=this.current_service)||void 0===t||null===(e=t.extra)||void 0===e?void 0:e.user_exclude)||"").split(",").reduce((function(t,e){return r.proxiedDomainList.includes(e)||t.push({key:e,label:e,disabled:!1}),t}),[]);return Object(o.a)(new Set(l.concat(n)))},directDomainListForTransfer:function(){var t,e,r=this,n=this.directDomainList.reduce((function(t,e){return t.push({key:e,label:e,disabled:!1}),t}),[]),l=((null===(t=this.current_service)||void 0===t||null===(e=t.extra)||void 0===e?void 0:e.user_include)||"").split(",").reduce((function(t,e){return r.directDomainList.includes(e)||t.push({key:e,label:e,disabled:!1}),t}),[]);return Object(o.a)(new Set(l.concat(n)))}},created:function(){console.log("proxy-rules created"),this.initUserList()},beforeDestroy:function(){},methods:{byteHelper:function(t){var e=Math.floor(Math.log(t)/Math.log(1024));return(t/Math.pow(1024,Math.floor(e))).toFixed(1)+" "+["b","kB","MB","GB","TB"][e]},renderContent:function(t,option){return t("span",{domProps:{title:option.label}},option.label)},initUserList:function(){var t,e,r,n,o,l;this.user_exclude=(null===(t=this.current_service)||void 0===t||null===(e=t.extra)||void 0===e||null===(r=e.user_exclude)||void 0===r?void 0:r.split(","))||[],this.user_include=(null===(n=this.current_service)||void 0===n||null===(o=n.extra)||void 0===o||null===(l=o.user_include)||void 0===l?void 0:l.split(","))||[],this.dirtyData=!1},switchEditMode:function(){var t=this;if(!this.dirtyData)return this.doEditModeSwitch();this.$confirm(this.$t("settings_page.proxy_list.mode-switch.dirtydata_warning.msg"),this.$t("settings_page.proxy_list.mode-switch.dirtydata_warning.title"),{confirmButtonText:this.$t("settings_page.proxy_list.mode-switch.dirtydata_warning.confirm_button"),cancelButtonText:this.$t("settings_page.proxy_list.mode-switch.dirtydata_warning.cancel_button"),type:"warning"}).then((function(){t.doEditModeSwitch()})).catch((function(){}))},doEditModeSwitch:function(){"rule-mode"===this.editMode?this.editMode="domain-mode":this.editMode="rule-mode",this.initUserList()},textEditSetMangle:function(t,line){return t.push(line.toLowerCase().replace(/^https?:\/\//g,"").replace(/(:|\/).*/g,"")),t},checkFormat:function(t,line){return line=line.toLowerCase().replace(/^https?:\/\//g,"").replace(/(:|\/).*/g,""),t.push(line),t},transferred:function(t,e,r){this.dirtyData=!0,console.log(arguments)},save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("eeee"),r={service_cate:t.current_service.cate,service_id:t.current_service.id,include:t.user_include_str.split("\n").filter((function(line){return line.length})).reduce(t.checkFormat,[]).join(","),exclude:t.user_exclude_str.split("\n").filter((function(line){return line.length})).reduce(t.checkFormat,[]).join(",")},console.log("opt---\x3e",r),e.prev=3,e.next=6,t.$store.dispatch("updateProxyDomainList",r);case 6:t.$message({message:t.$t("settings_page.proxy_list.success"),type:"success"}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0),t.$message({message:t.$t("settings_page.proxy_list.failed")+e.t0.message||e.t0.toString(),type:"error"});case 13:case"end":return e.stop()}}),e,null,[[3,9]])})))()}}}),c=(r(1306),r(44)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"proxy-rules-container"},[r("h2",[t._v(t._s(t.$t("settings_page.proxy_list.mode-switch."+t.editMode)))]),"domain-mode"==t.editMode?r("div",[r("el-row",[r("ol",[r("h2",[t._v(t._s(t.$t("settings_page.proxy_list.usage.title")))]),r("li",[t._v(t._s(t.$t("settings_page.proxy_list.usage.a")))]),r("li",[t._v(t._s(t.$t("settings_page.proxy_list.usage.b")))]),r("li",[t._v(t._s(t.$t("settings_page.proxy_list.usage.c.a"))),r("code",[t._v("foo.com")]),t._v(t._s(t.$t("settings_page.proxy_list.usage.c.b"))),r("code",[t._v("foo.com")]),t._v(","),r("code",[t._v("www.foo.com")]),t._v(","),r("code",[t._v("bar.www.foo.com")]),t._v(t._s(t.$t("settings_page.proxy_list.usage.c.c"))),r("code",[t._v("foo.com")]),t._v(t._s(t.$t("settings_page.proxy_list.usage.c.d")))]),r("li",[t._v(t._s(t.$t("settings_page.proxy_list.usage.d")))])])]),r("el-row",[r("h3",[t._v(t._s(t.$t("settings_page.proxy_list.exclude.right.title")))]),r("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:20},placeholder:t.$t("settings_page.proxy_list.exclude.right.title")},model:{value:t.user_exclude_str,callback:function(e){t.user_exclude_str=e},expression:"user_exclude_str"}})],1),r("el-row",[r("h3",[t._v(t._s(t.$t("settings_page.proxy_list.include.right.title")))]),r("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:20},placeholder:t.$t("settings_page.proxy_list.include.right.title")},model:{value:t.user_include_str,callback:function(e){t.user_include_str=e},expression:"user_include_str"}})],1),r("el-button",{staticClass:"full-width",attrs:{type:"primary"},nativeOn:{click:function(e){return t.save(e)}}},[t._v(t._s(t.$t("settings_page.proxy_list.save-button")))])],1):t._e(),"rule-mode"==t.editMode?r("div",["connected"==t.runTimeState.connect_state.status?r("div",[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-transfer",{attrs:{filterable:"","render-content":t.renderContent,data:t.proxyDomainListForTransfer,titles:[t.$t("settings_page.proxy_list.exclude.left.title"),t.$t("settings_page.proxy_list.exclude.right.title")]},on:{change:t.transferred},model:{value:t.user_exclude,callback:function(e){t.user_exclude=e},expression:"user_exclude"}})],1)],1),r("el-divider"),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-transfer",{attrs:{filterable:"","render-content":t.renderContent,data:t.directDomainListForTransfer,titles:[t.$t("settings_page.proxy_list.include.left.title"),t.$t("settings_page.proxy_list.include.right.title")]},on:{change:t.transferred},model:{value:t.user_include,callback:function(e){t.user_include=e},expression:"user_include"}})],1)],1)],1):r("div",[r("h2",[t._v("使用该模式编辑请先连接一条线路")])])]):t._e(),r("nuxt-link",{staticClass:"dashboard-link",attrs:{to:"/dashboard/settings/"}},[t._v(" "+t._s(t.$t("back")))])],1)}),[],!1,null,null,null);e.default=component.exports}}]);