(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1177:function(x,L,r){"use strict";r.d(L,"a",function(){return M});var c=r(143);function _(b){if(Array.isArray(b))return Object(c.a)(b)}var $=r(208),T=r(109);function O(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(b){return _(b)||Object($.a)(b)||Object(T.a)(b)||O()}},1272:function(x,L,r){var c=r(33);x.exports=function(_,$){if(!c(_)||_._t!==$)throw TypeError("Incompatible receiver, "+$+" required!");return _}},1273:function(x,L,r){var c=r(1442);c.__esModule&&(c=c.default),typeof c=="string"&&(c=[[x.i,c,""]]),c.locals&&(x.exports=c.locals);var _=r(2).default,$=_("e8542948",c,!0,{sourceMap:!1})},1438:function(x,L,r){"use strict";var c=r(1439),_=r(1272),$="Set";x.exports=r(1440)($,function(T){return function(){return T(this,arguments.length>0?arguments[0]:void 0)}},{add:function(O){return c.def(_(this,$),O=O===0?0:O,O)}},c)},1439:function(x,L,r){"use strict";var c=r(29).f,_=r(142),$=r(316),T=r(64),O=r(314),M=r(315),b=r(212),C=r(318),S=r(213),z=r(20),B=r(313).fastKey,R=r(1272),j=z?"_s":"size",F=function(g,v){var m=B(v),a;if(m!=="F")return g._i[m];for(a=g._f;a;a=a.n)if(a.k==v)return a};x.exports={getConstructor:function(g,v,m,a){var h=g(function(s,u){O(s,h,v,"_i"),s._t=v,s._i=_(null),s._f=void 0,s._l=void 0,s[j]=0,u!=null&&M(u,m,s[a],s)});return $(h.prototype,{clear:function(){for(var u=R(this,v),p=u._i,d=u._f;d;d=d.n)d.r=!0,d.p&&(d.p=d.p.n=void 0),delete p[d.i];u._f=u._l=void 0,u[j]=0},delete:function(s){var u=R(this,v),p=F(u,s);if(p){var d=p.n,w=p.p;delete u._i[p.i],p.r=!0,w&&(w.n=d),d&&(d.p=w),u._f==p&&(u._f=d),u._l==p&&(u._l=w),u[j]--}return!!p},forEach:function(u){R(this,v);for(var p=T(u,arguments.length>1?arguments[1]:void 0,3),d;d=d?d.n:this._f;)for(p(d.v,d.k,this);d&&d.r;)d=d.p},has:function(u){return!!F(R(this,v),u)}}),z&&c(h.prototype,"size",{get:function(){return R(this,v)[j]}}),h},def:function(g,v,m){var a=F(g,v),h,s;return a?a.v=m:(g._l=a={i:s=B(v,!0),k:v,v:m,p:h=g._l,n:void 0,r:!1},g._f||(g._f=a),h&&(h.n=a),g[j]++,s!=="F"&&(g._i[s]=a)),g},getEntry:F,setStrong:function(g,v,m){b(g,v,function(a,h){this._t=R(a,v),this._k=h,this._l=void 0},function(){for(var a=this,h=a._k,s=a._l;s&&s.r;)s=s.p;return!a._t||!(a._l=s=s?s.n:a._t._f)?(a._t=void 0,C(1)):h=="keys"?C(0,s.k):h=="values"?C(0,s.v):C(0,[s.k,s.v])},m?"entries":"values",!m,!0),S(v)}}},1440:function(x,L,r){"use strict";var c=r(12),_=r(10),$=r(34),T=r(316),O=r(313),M=r(315),b=r(314),C=r(33),S=r(21),z=r(211),B=r(108),R=r(215);x.exports=function(j,F,g,v,m,a){var h=c[j],s=h,u=m?"set":"add",p=s&&s.prototype,d={},w=function(i){var o=p[i];$(p,i,i=="delete"?function(f){return a&&!C(f)?!1:o.call(this,f===0?0:f)}:i=="has"?function(D){return a&&!C(D)?!1:o.call(this,D===0?0:D)}:i=="get"?function(D){return a&&!C(D)?void 0:o.call(this,D===0?0:D)}:i=="add"?function(D){return o.call(this,D===0?0:D),this}:function(D,E){return o.call(this,D===0?0:D,E),this})};if(typeof s!="function"||!(a||p.forEach&&!S(function(){new s().entries().next()})))s=v.getConstructor(F,j,m,u),T(s.prototype,g),O.NEED=!0;else{var e=new s,n=e[u](a?{}:-0,1)!=e,t=S(function(){e.has(1)}),l=z(function(i){new s(i)}),y=!a&&S(function(){for(var i=new s,o=5;o--;)i[u](o,o);return!i.has(-0)});l||(s=F(function(i,o){b(i,s,j);var f=R(new h,i,s);return o!=null&&M(o,m,f[u],f),f}),s.prototype=p,p.constructor=s),(t||y)&&(w("delete"),w("has"),m&&w("get")),(y||n)&&w(u),a&&p.clear&&delete p.clear}return B(s,j),d[j]=s,_(_.G+_.W+_.F*(s!=h),d),a||v.setStrong(s,j,m),s}},1441:function(x,L,r){"use strict";var c=r(1273),_=r.n(c)},1442:function(x,L,r){var c=r(1),_=c(!1);_.push([x.i,".proxy-rules-container{height:100vh;padding:2rem .5rem .5rem;position:relative;max-width:100vw;color:#f4f7fc}.proxy-rules-container ol{padding-left:0;margin-bottom:1rem}.proxy-rules-container ol li{margin-left:1rem}.proxy-rules-container ol li code{padding:.5rem;text-decoration:underline}.proxy-rules-container .el-button{margin-bottom:2rem}.proxy-rules-container h2{font-weight:500}.proxy-rules-container .el-row{margin-bottom:2rem}.proxy-rules-container .el-transfer{width:100%;margin:20px auto}.proxy-rules-container .el-transfer-panel{width:45%}.proxy-rules-container .el-transfer__buttons{width:10%}.proxy-rules-container .el-transfer__buttons .el-transfer__button{margin:10px auto}.proxy-rules-container .top-space{margin-top:1rem}.proxy-rules-container .info-content,.proxy-rules-container .info-header{color:#34495e;margin-bottom:.5rem;line-height:1.2}.proxy-rules-container .info-header{color:#7f8c8d}.proxy-rules-container .info-header h3{font-weight:400}.proxy-rules-container .large-button{font-size:1.5rem}.proxy-rules-container .dashboard-link,.proxy-rules-container .mode-switch{position:fixed;bottom:.5rem;z-index:999}.proxy-rules-container .dashboard-link{right:.5rem}.proxy-rules-container .mode-switch{left:.5rem}.proxy-rules-container .menu-link{font-size:2rem;text-decoration:none;width:100%;display:block;margin-top:.5rem;padding-left:.5rem}.proxy-rules-container .menu-link:hover{background:#1abc9c;color:#fff}",""]),x.exports=_},1479:function(x,L,r){"use strict";r.r(L);var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"proxy-rules-container"},[t("h2",[e._v(e._s(e.$t("settings_page.proxy_list.mode-switch."+e.editMode)))]),e.editMode=="domain-mode"?t("div",[t("el-row",[t("ol",[t("h2",[e._v(e._s(e.$t("settings_page.proxy_list.usage.title")))]),t("li",[e._v(e._s(e.$t("settings_page.proxy_list.usage.a")))]),t("li",[e._v(e._s(e.$t("settings_page.proxy_list.usage.b")))]),t("li",[e._v(e._s(e.$t("settings_page.proxy_list.usage.c.a"))),t("code",[e._v("foo.com")]),e._v(e._s(e.$t("settings_page.proxy_list.usage.c.b"))),t("code",[e._v("foo.com")]),e._v(","),t("code",[e._v("www.foo.com")]),e._v(","),t("code",[e._v("bar.www.foo.com")]),e._v(e._s(e.$t("settings_page.proxy_list.usage.c.c"))),t("code",[e._v("foo.com")]),e._v(e._s(e.$t("settings_page.proxy_list.usage.c.d")))]),t("li",[e._v(e._s(e.$t("settings_page.proxy_list.usage.d")))])])]),t("el-row",[t("h3",[e._v(e._s(e.$t("settings_page.proxy_list.exclude.right.title")))]),t("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:20},placeholder:e.$t("settings_page.proxy_list.exclude.right.title")},model:{value:e.user_exclude_str,callback:function(l){e.user_exclude_str=l},expression:"user_exclude_str"}})],1),t("el-row",[t("h3",[e._v(e._s(e.$t("settings_page.proxy_list.include.right.title")))]),t("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:20},placeholder:e.$t("settings_page.proxy_list.include.right.title")},model:{value:e.user_include_str,callback:function(l){e.user_include_str=l},expression:"user_include_str"}})],1),t("el-button",{staticClass:"full-width",attrs:{type:"primary"},nativeOn:{click:function(l){return e.save.apply(null,arguments)}}},[e._v(e._s(e.$t("settings_page.proxy_list.save-button")))])],1):e._e(),e.editMode=="rule-mode"?t("div",[e.runTimeState.connect_state.status=="connected"?t("div",[t("el-row",[t("el-col",{attrs:{span:24}},[t("el-transfer",{attrs:{filterable:"","render-content":e.renderContent,data:e.proxyDomainListForTransfer,titles:[e.$t("settings_page.proxy_list.exclude.left.title"),e.$t("settings_page.proxy_list.exclude.right.title")]},on:{change:e.transferred},model:{value:e.user_exclude,callback:function(l){e.user_exclude=l},expression:"user_exclude"}})],1)],1),t("el-divider"),t("el-row",[t("el-col",{attrs:{span:24}},[t("el-transfer",{attrs:{filterable:"","render-content":e.renderContent,data:e.directDomainListForTransfer,titles:[e.$t("settings_page.proxy_list.include.left.title"),e.$t("settings_page.proxy_list.include.right.title")]},on:{change:e.transferred},model:{value:e.user_include,callback:function(l){e.user_include=l},expression:"user_include"}})],1)],1)],1):t("div",[t("h2",[e._v("\u4F7F\u7528\u8BE5\u6A21\u5F0F\u7F16\u8F91\u8BF7\u5148\u8FDE\u63A5\u4E00\u6761\u7EBF\u8DEF")])])]):e._e(),t("nuxt-link",{staticClass:"dashboard-link",attrs:{to:"/dashboard/settings/"}},[e._v(" "+e._s(e.$t("back")))])],1)},_=[],$=r(24),T=r(25),O=r(40),M=r(74),b=r(6),C=r(76),S=r(1177),z=r(47),B=r(23),R=r(9),j=r(48),F=r(1438),g=r(141),v=r(63),m=r(75),a=r(13),h={middleware:["load-rt-data"],data:function(){return{rawlogs:{},user_include:null,user_exclude:null,editMode:"domain-mode",dirtyData:!1,hostnameReg:/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i}},computed:{proxyName:function(){return this.rawlogs.proxy},stdout:function(){return this.rawlogs.stdout},stderr:function(){return this.rawlogs.stderr},records:function(){if(!this.stderr)return{};console.log("filtering proxy domains...");var n=this.stderr.reduce(function(t,l){if(l.includes("<->")&&!l.includes("error in dial")){var y=l.trim().split(/\s+/),i=y[y.length-1],o=y[6].split(":")[0];i==="DIRECT"?t.direct.add(o):t.proxied.add(o)}return t},{proxied:new Set,direct:new Set});return n},proxiedDomainList:function(){return Array.from(this.records.proxied||[])},directDomainList:function(){return Array.from(this.records.direct||[])},user_exclude_str:{get:function(){var n;return(n=this.user_exclude)===null||n===void 0?void 0:n.join(`
`)},set:function(n){this.dirtyData=!0,this.user_exclude=n==null?void 0:n.split(`
`).reduce(this.textEditSetMangle,[])}},user_include_str:{get:function(){var n;return(n=this.user_include)===null||n===void 0?void 0:n.join(`
`)},set:function(n){this.dirtyData=!0,this.user_include=n==null?void 0:n.split(`
`).reduce(this.textEditSetMangle,[])}},proxyDomainListForTransfer:function(){var n,t,l=this,y=this.proxiedDomainList.reduce(function(o,f){return o.push({key:f,label:f,disabled:!1}),o},[]),i=(((n=this.current_service)===null||n===void 0||(t=n.extra)===null||t===void 0?void 0:t.user_exclude)||"").split(",").reduce(function(o,f){return l.proxiedDomainList.includes(f)||o.push({key:f,label:f,disabled:!1}),o},[]);return Object(S.a)(new Set(i.concat(y)))},directDomainListForTransfer:function(){var n,t,l=this,y=this.directDomainList.reduce(function(o,f){return o.push({key:f,label:f,disabled:!1}),o},[]),i=(((n=this.current_service)===null||n===void 0||(t=n.extra)===null||t===void 0?void 0:t.user_include)||"").split(",").reduce(function(o,f){return l.directDomainList.includes(f)||o.push({key:f,label:f,disabled:!1}),o},[]);return Object(S.a)(new Set(i.concat(y)))}},created:function(){console.log("proxy-rules created"),this.initUserList()},beforeDestroy:function(){},methods:{byteHelper:function(n){var t=["b","kB","MB","GB","TB"],l=Math.floor(Math.log(n)/Math.log(1024));return(n/Math.pow(1024,Math.floor(l))).toFixed(1)+" "+t[l]},renderContent:function(n,t){return n("span",{domProps:{title:t.label}},t.label)},initUserList:function(){var n,t,l,y,i,o;this.user_exclude=((n=this.current_service)===null||n===void 0||(t=n.extra)===null||t===void 0||(l=t.user_exclude)===null||l===void 0?void 0:l.split(","))||[],this.user_include=((y=this.current_service)===null||y===void 0||(i=y.extra)===null||i===void 0||(o=i.user_include)===null||o===void 0?void 0:o.split(","))||[],this.dirtyData=!1},switchEditMode:function(){var n=this;if(!this.dirtyData)return this.doEditModeSwitch();this.$confirm(this.$t("settings_page.proxy_list.mode-switch.dirtydata_warning.msg"),this.$t("settings_page.proxy_list.mode-switch.dirtydata_warning.title"),{confirmButtonText:this.$t("settings_page.proxy_list.mode-switch.dirtydata_warning.confirm_button"),cancelButtonText:this.$t("settings_page.proxy_list.mode-switch.dirtydata_warning.cancel_button"),type:"warning"}).then(function(){n.doEditModeSwitch()}).catch(function(){})},doEditModeSwitch:function(){this.editMode==="rule-mode"?this.editMode="domain-mode":this.editMode="rule-mode",this.initUserList()},textEditSetMangle:function(n,t){return n.push(t.toLowerCase().replace(/^https?:\/\//g,"").replace(/(:|\/).*/g,"")),n},checkFormat:function(n,t){return t=t.toLowerCase().replace(/^https?:\/\//g,"").replace(/(:|\/).*/g,""),n.push(t),n},transferred:function(n,t,l){this.dirtyData=!0,console.log(arguments)},save:function(){var n=this;return Object(b.a)(regeneratorRuntime.mark(function t(){var l;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("eeee"),l={service_cate:n.current_service.cate,service_id:n.current_service.id,include:n.user_include_str.split(`
`).filter(function(o){return o.length}).reduce(n.checkFormat,[]).join(","),exclude:n.user_exclude_str.split(`
`).filter(function(o){return o.length}).reduce(n.checkFormat,[]).join(",")},console.log("opt--->",l),i.prev=3,i.next=6,n.$store.dispatch("updateProxyDomainList",l);case 6:n.$message({message:n.$t("settings_page.proxy_list.success"),type:"success"}),i.next=13;break;case 9:i.prev=9,i.t0=i.catch(3),console.log(i.t0),n.$message({message:n.$t("settings_page.proxy_list.failed")+i.t0.message||i.t0.toString(),type:"error"});case 13:case"end":return i.stop()}},t,null,[[3,9]])}))()}}},s=h,u=r(1441),p=r(51),d=Object(p.a)(s,c,_,!1,null,null,null),w=L.default=d.exports}}]);
