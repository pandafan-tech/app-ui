(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1149:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(141);var i=r(208),o=r(107);function s(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(i.a)(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1282:function(t,e,r){var n=r(33);t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},1283:function(t,e,r){var n=r(1443);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(2).default)("72863cc6",n,!0,{sourceMap:!1})},1439:function(t,e,r){"use strict";var n=r(1440),i=r(1282);t.exports=r(1441)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return n.def(i(this,"Set"),t=0===t?0:t,t)}},n)},1440:function(t,e,r){"use strict";var n=r(29).f,i=r(142),o=r(315),s=r(64),a=r(313),l=r(314),u=r(212),c=r(317),d=r(213),p=r(20),_=r(312).fastKey,f=r(1282),h=p?"_s":"size",g=function(t,e){var r,n=_(e);if("F"!==n)return t._i[n];for(r=t._f;r;r=r.n)if(r.k==e)return r};t.exports={getConstructor:function(t,e,r,u){var c=t((function(t,n){a(t,c,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[h]=0,null!=n&&l(n,r,t[u],t)}));return o(c.prototype,{clear:function(){for(var t=f(this,e),r=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete r[n.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var r=f(this,e),n=g(r,t);if(n){var i=n.n,o=n.p;delete r._i[n.i],n.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==n&&(r._f=i),r._l==n&&(r._l=o),r[h]--}return!!n},forEach:function(t){f(this,e);for(var r,n=s(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(n(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!g(f(this,e),t)}}),p&&n(c.prototype,"size",{get:function(){return f(this,e)[h]}}),c},def:function(t,e,r){var n,i,o=g(t,e);return o?o.v=r:(t._l=o={i:i=_(e,!0),k:e,v:r,p:n=t._l,n:void 0,r:!1},t._f||(t._f=o),n&&(n.n=o),t[h]++,"F"!==i&&(t._i[i]=o)),t},getEntry:g,setStrong:function(t,e,r){u(t,e,(function(t,r){this._t=f(t,e),this._k=r,this._l=void 0}),(function(){for(var t=this,e=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?c(0,"keys"==e?r.k:"values"==e?r.v:[r.k,r.v]):(t._t=void 0,c(1))}),r?"entries":"values",!r,!0),d(e)}}},1441:function(t,e,r){"use strict";var n=r(12),i=r(10),o=r(34),s=r(315),a=r(312),l=r(314),u=r(313),c=r(33),d=r(21),p=r(211),_=r(108),f=r(214);t.exports=function(t,e,r,h,g,v){var x=n[t],m=x,y=g?"set":"add",w=m&&m.prototype,b={},k=function(t){var e=w[t];o(w,t,"delete"==t||"has"==t?function(t){return!(v&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!c(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,r){return e.call(this,0===t?0:t,r),this})};if("function"==typeof m&&(v||w.forEach&&!d((function(){(new m).entries().next()})))){var $=new m,M=$[y](v?{}:-0,1)!=$,D=d((function(){$.has(1)})),S=p((function(t){new m(t)})),E=!v&&d((function(){for(var t=new m,e=5;e--;)t[y](e,e);return!t.has(-0)}));S||((m=e((function(e,r){u(e,m,t);var n=f(new x,e,m);return null!=r&&l(r,g,n[y],n),n}))).prototype=w,w.constructor=m),(D||E)&&(k("delete"),k("has"),g&&k("get")),(E||M)&&k(y),v&&w.clear&&delete w.clear}else m=h.getConstructor(e,t,g,y),s(m.prototype,r),a.NEED=!0;return _(m,t),b[t]=m,i(i.G+i.W+i.F*(m!=x),b),v||h.setStrong(m,t,g),m}},1442:function(t,e,r){"use strict";r(1283)},1443:function(t,e,r){var n=r(1)(!1);n.push([t.i,".proxy-rules-container{height:100vh;padding:2rem .5rem .5rem;position:relative;max-width:100vw;color:#f4f7fc}.proxy-rules-container ol{padding-left:0;margin-bottom:1rem}.proxy-rules-container ol li{margin-left:1rem}.proxy-rules-container ol li code{padding:.5rem;text-decoration:underline}.proxy-rules-container .el-button{margin-bottom:2rem}.proxy-rules-container h2{font-weight:500}.proxy-rules-container .el-row{margin-bottom:2rem}.proxy-rules-container .el-transfer{width:100%;margin:20px auto}.proxy-rules-container .el-transfer-panel{width:45%}.proxy-rules-container .el-transfer__buttons{width:10%}.proxy-rules-container .el-transfer__buttons .el-transfer__button{margin:10px auto}.proxy-rules-container .top-space{margin-top:1rem}.proxy-rules-container .info-content,.proxy-rules-container .info-header{color:#34495e;margin-bottom:.5rem;line-height:1.2}.proxy-rules-container .info-header{color:#7f8c8d}.proxy-rules-container .info-header h3{font-weight:400}.proxy-rules-container .large-button{font-size:1.5rem}.proxy-rules-container .dashboard-link,.proxy-rules-container .mode-switch{position:fixed;bottom:.5rem;z-index:999}.proxy-rules-container .dashboard-link{right:.5rem}.proxy-rules-container .mode-switch{left:.5rem}.proxy-rules-container .menu-link{font-size:2rem;text-decoration:none;width:100%;display:block;margin-top:.5rem;padding-left:.5rem}.proxy-rules-container .menu-link:hover{background:#1abc9c;color:#fff}",""]),t.exports=n},1479:function(t,e,r){"use strict";r.r(e);r(24),r(25),r(39),r(74);var n=r(6),i=(r(76),r(1149)),o=(r(47),r(23),r(9),r(48),r(1439),r(140),r(63),r(75),r(19),{middleware:["load-rt-data"],data:function(){return{rawlogs:{},user_include:null,user_exclude:null,editMode:"domain-mode",dirtyData:!1,hostnameReg:/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i}},computed:{proxyName:function(){return this.rawlogs.proxy},stdout:function(){return this.rawlogs.stdout},stderr:function(){return this.rawlogs.stderr},records:function(){return this.stderr?(console.log("filtering proxy domains..."),this.stderr.reduce((function(t,e){if(e.includes("<->")&&!e.includes("error in dial")){var r=e.trim().split(/\s+/),n=r[r.length-1],i=r[6].split(":")[0];"DIRECT"===n?t.direct.add(i):t.proxied.add(i)}return t}),{proxied:new Set,direct:new Set})):{}},proxiedDomainList:function(){return Array.from(this.records.proxied||[])},directDomainList:function(){return Array.from(this.records.direct||[])},user_exclude_str:{get:function(){var t;return null===(t=this.user_exclude)||void 0===t?void 0:t.join("\n")},set:function(t){this.dirtyData=!0,this.user_exclude=null==t?void 0:t.split("\n").reduce(this.textEditSetMangle,[])}},user_include_str:{get:function(){var t;return null===(t=this.user_include)||void 0===t?void 0:t.join("\n")},set:function(t){this.dirtyData=!0,this.user_include=null==t?void 0:t.split("\n").reduce(this.textEditSetMangle,[])}},proxyDomainListForTransfer:function(){var t,e,r=this,n=this.proxiedDomainList.reduce((function(t,e){return t.push({key:e,label:e,disabled:!1}),t}),[]),o=((null===(t=this.current_service)||void 0===t||null===(e=t.extra)||void 0===e?void 0:e.user_exclude)||"").split(",").reduce((function(t,e){return r.proxiedDomainList.includes(e)||t.push({key:e,label:e,disabled:!1}),t}),[]);return Object(i.a)(new Set(o.concat(n)))},directDomainListForTransfer:function(){var t,e,r=this,n=this.directDomainList.reduce((function(t,e){return t.push({key:e,label:e,disabled:!1}),t}),[]),o=((null===(t=this.current_service)||void 0===t||null===(e=t.extra)||void 0===e?void 0:e.user_include)||"").split(",").reduce((function(t,e){return r.directDomainList.includes(e)||t.push({key:e,label:e,disabled:!1}),t}),[]);return Object(i.a)(new Set(o.concat(n)))}},created:function(){console.log("proxy-rules created"),this.initUserList()},beforeDestroy:function(){},methods:{byteHelper:function(t){var e=Math.floor(Math.log(t)/Math.log(1024));return(t/Math.pow(1024,Math.floor(e))).toFixed(1)+" "+["b","kB","MB","GB","TB"][e]},renderContent:function(t,e){return t("span",{domProps:{title:e.label}},e.label)},initUserList:function(){var t,e,r,n,i,o;this.user_exclude=(null===(t=this.current_service)||void 0===t||null===(e=t.extra)||void 0===e||null===(r=e.user_exclude)||void 0===r?void 0:r.split(","))||[],this.user_include=(null===(n=this.current_service)||void 0===n||null===(i=n.extra)||void 0===i||null===(o=i.user_include)||void 0===o?void 0:o.split(","))||[],this.dirtyData=!1},switchEditMode:function(){var t=this;if(!this.dirtyData)return this.doEditModeSwitch();this.$confirm(this.$t("settings_page.proxy_list.mode-switch.dirtydata_warning.msg"),this.$t("settings_page.proxy_list.mode-switch.dirtydata_warning.title"),{confirmButtonText:this.$t("settings_page.proxy_list.mode-switch.dirtydata_warning.confirm_button"),cancelButtonText:this.$t("settings_page.proxy_list.mode-switch.dirtydata_warning.cancel_button"),type:"warning"}).then((function(){t.doEditModeSwitch()})).catch((function(){}))},doEditModeSwitch:function(){"rule-mode"===this.editMode?this.editMode="domain-mode":this.editMode="rule-mode",this.initUserList()},textEditSetMangle:function(t,e){return t.push(e.toLowerCase().replace(/^https?:\/\//g,"").replace(/(:|\/).*/g,"")),t},checkFormat:function(t,e){return e=e.toLowerCase().replace(/^https?:\/\//g,"").replace(/(:|\/).*/g,""),t.push(e),t},transferred:function(t,e,r){this.dirtyData=!0,console.log(arguments)},save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("eeee"),r={service_cate:t.current_service.cate,service_id:t.current_service.id,include:t.user_include_str.split("\n").filter((function(t){return t.length})).reduce(t.checkFormat,[]).join(","),exclude:t.user_exclude_str.split("\n").filter((function(t){return t.length})).reduce(t.checkFormat,[]).join(",")},console.log("opt---\x3e",r),e.prev=3,e.next=6,t.$store.dispatch("updateProxyDomainList",r);case 6:t.$message({message:t.$t("settings_page.proxy_list.success"),type:"success"}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0),t.$message({message:t.$t("settings_page.proxy_list.failed")+e.t0.message||e.t0.toString(),type:"error"});case 13:case"end":return e.stop()}}),e,null,[[3,9]])})))()}}}),s=o,a=(r(1442),r(51)),l=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"proxy-rules-container"},[r("h2",[t._v(t._s(t.$t("settings_page.proxy_list.mode-switch."+t.editMode)))]),"domain-mode"==t.editMode?r("div",[r("el-row",[r("ol",[r("h2",[t._v(t._s(t.$t("settings_page.proxy_list.usage.title")))]),r("li",[t._v(t._s(t.$t("settings_page.proxy_list.usage.a")))]),r("li",[t._v(t._s(t.$t("settings_page.proxy_list.usage.b")))]),r("li",[t._v(t._s(t.$t("settings_page.proxy_list.usage.c.a"))),r("code",[t._v("foo.com")]),t._v(t._s(t.$t("settings_page.proxy_list.usage.c.b"))),r("code",[t._v("foo.com")]),t._v(","),r("code",[t._v("www.foo.com")]),t._v(","),r("code",[t._v("bar.www.foo.com")]),t._v(t._s(t.$t("settings_page.proxy_list.usage.c.c"))),r("code",[t._v("foo.com")]),t._v(t._s(t.$t("settings_page.proxy_list.usage.c.d")))]),r("li",[t._v(t._s(t.$t("settings_page.proxy_list.usage.d")))])])]),r("el-row",[r("h3",[t._v(t._s(t.$t("settings_page.proxy_list.exclude.right.title")))]),r("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:20},placeholder:t.$t("settings_page.proxy_list.exclude.right.title")},model:{value:t.user_exclude_str,callback:function(e){t.user_exclude_str=e},expression:"user_exclude_str"}})],1),r("el-row",[r("h3",[t._v(t._s(t.$t("settings_page.proxy_list.include.right.title")))]),r("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:20},placeholder:t.$t("settings_page.proxy_list.include.right.title")},model:{value:t.user_include_str,callback:function(e){t.user_include_str=e},expression:"user_include_str"}})],1),r("el-button",{staticClass:"full-width",attrs:{type:"primary"},nativeOn:{click:function(e){return t.save.apply(null,arguments)}}},[t._v(t._s(t.$t("settings_page.proxy_list.save-button")))])],1):t._e(),"rule-mode"==t.editMode?r("div",["connected"==t.runTimeState.connect_state.status?r("div",[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-transfer",{attrs:{filterable:"","render-content":t.renderContent,data:t.proxyDomainListForTransfer,titles:[t.$t("settings_page.proxy_list.exclude.left.title"),t.$t("settings_page.proxy_list.exclude.right.title")]},on:{change:t.transferred},model:{value:t.user_exclude,callback:function(e){t.user_exclude=e},expression:"user_exclude"}})],1)],1),r("el-divider"),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-transfer",{attrs:{filterable:"","render-content":t.renderContent,data:t.directDomainListForTransfer,titles:[t.$t("settings_page.proxy_list.include.left.title"),t.$t("settings_page.proxy_list.include.right.title")]},on:{change:t.transferred},model:{value:t.user_include,callback:function(e){t.user_include=e},expression:"user_include"}})],1)],1)],1):r("div",[r("h2",[t._v("使用该模式编辑请先连接一条线路")])])]):t._e(),r("nuxt-link",{staticClass:"dashboard-link",attrs:{to:"/dashboard/settings/"}},[t._v(" "+t._s(t.$t("back")))])],1)}),[],!1,null,null,null);e.default=l.exports}}]);