(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7],{1139:function(s,c,o){var t=o(1165);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);var _=o(2).default,h=_("8bfe1644",t,!0,{sourceMap:!1})},1164:function(s,c,o){"use strict";var t=o(1139),_=o.n(t)},1165:function(s,c,o){var t=o(1),_=t(!1);_.push([s.i,'.arrow[data-v-1d5e5f7a],.arrow[data-v-1d5e5f7a]:before{position:absolute}.arrow[data-v-1d5e5f7a]{top:70%;left:30%;margin:-20px 0 0 -20px;-webkit-transform:rotate(45deg);border-right:2px solid #fff;border-top:2px solid #fff}.arrow[data-v-1d5e5f7a],.arrow[data-v-1d5e5f7a]:before{width:20px;height:20px;border-left:none}.arrow[data-v-1d5e5f7a]:before{content:"";top:50%;margin:-10px 0 0 -10px;border-right:1px solid #fff;border-top:1px solid #fff;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:arrow-data-v-1d5e5f7a;animation-name:arrow-data-v-1d5e5f7a}@-webkit-keyframes arrow-data-v-1d5e5f7a{0%{opacity:0;transform:translate(-2px,2px)}50%{opacity:1}to{opacity:0;transform:translate(13px,-13px)}}@keyframes arrow-data-v-1d5e5f7a{0%{opacity:0;transform:translate(-2px,2px)}50%{opacity:1}to{opacity:0;transform:translate(13px,-13px)}}',""]),s.exports=_},1166:function(s,c,o){var t=o(1213);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);var _=o(2).default,h=_("f646c122",t,!0,{sourceMap:!1})},1185:function(s,c,o){"use strict";o.r(c);var t=function(){var v=this,x=v.$createElement,g=v._self._c||x;return g("div",{staticClass:"arrow"})},_=[],h=o(1164),y=o(51),j={},O=Object(y.a)(j,t,_,!1,null,"1d5e5f7a",null),b=c.default=O.exports},1212:function(s,c,o){"use strict";var t=o(1166),_=o.n(t)},1213:function(s,c,o){var t=o(1),_=t(!1);_.push([s.i,".connections-control{position:fixed!important;bottom:0;left:0;width:100%;height:3.2rem;padding:0}.connections-control .connect-button{border-radius:0;font-size:1.6rem;width:100%}",""]),s.exports=_},1239:function(s,c,o){"use strict";o.r(c);var t=function(){var r=this,e=r.$createElement,u=r._self._c||e;return u("el-row",{staticClass:"connections-control"},[u("el-button",{staticClass:"connect-button",attrs:{type:r.runTimeState.connect_state.status=="connected"?"warning":"success",loading:r.connectButtonLoading,disabled:r.connectButtonDisabled||r.connectButtonLoading},on:{click:r.connectAction}},[r._v(" "+r._s(r.connectButtonText))])],1)},_=[],h=o(9),y=o(63),j=o(76),O=o(28),b=o(75),v=o(6),x=o(106),g=o(1124),i=o(13),E=o(1185);window.onerror=function(r,e,u,l,m){console.log("Exception: ",m.message.startsWith("EPERM:"))};var w={components:{Arrow:E.default},data:function(){return{connectButtonLoading:!1,connectButtonDisabled:!1}},computed:{connectButtonText:function(){var e="";return this.connected?e=this.$t("disconnect"):e=this.$t("connect"),e}},methods:{connectAction:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark(function u(){var l,m,p,a,f,d;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.connectButtonLoading=!0,l=e.connected?"disconnect":"connect",i.remote.process.platform!=="darwin"){n.next=24;break}if(m="".concat(i.remote.app.getPath("userData"),"/ProxyConfig"),n.prev=4,p=i.remote.require("fs-extra"),a=p.fstatSync(p.openSync(m)),console.log("ProxyConfig perm is:",a),a.uid===0){n.next=19;break}return console.log("UID is not root. will force reinstall helper."),n.prev=10,n.next=13,p.remove(m);case 13:console.log("ProxyConfig deleted."),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(10),console.log("delete ProxyConfig failed:",n.t0);case 19:n.next=24;break;case 21:n.prev=21,n.t1=n.catch(4),console.log("ready perm of ProxyConfig failed",n.t1);case 24:if(console.log("performing action: "+l),l!=="connect"){n.next=29;break}if(!(!e.runTimeState.selected_line||!e.runTimeState.selected_line.name)){n.next=29;break}return e.connectButtonLoading=!1,n.abrupt("return",e.$message({message:e.$t("connect_info.select_line"),type:"error"}));case 29:return n.prev=29,n.next=32,e[l]();case 32:n.next=38;break;case 34:n.prev=34,n.t2=n.catch(29),console.log("--->>> action failed:",n.t2),["connect timeout","disconnect timeout"].includes(n.t2.message)?e.$message({message:e.$t("error.timeout"),type:"error"}):(f=e.shouldIgnoreError(n.t2),f.ignore?(console.log("will not report to sentry."),console.log("matched error:",f.matchedError)):e.$sentry.captureException(n.t2),d=e.errorMessageAssemble(n.t2),console.table(n.t2),f.matchedError==="EPERM"&&(d=d+"<br>".concat(e.$t("error.eperm"))),["ENOENT","UNKNOWN"].includes(f.matchedError)&&(i.remote.process.platform==="darwin"?d=d+"<br>".concat(e.$t("error.enoent")):i.remote.process.platform==="win32"&&(i.remote.process.arch==="ia32"?d=d+"<br>".concat(e.$t("error.clash")):d=d+"<br>".concat(e.$t("error.missing")))),f.matchedError==="Command failed"&&(d=d+"<br>".concat(e.$t("error.restart"))),e.$alert(d,e.$t("error.connect_failed"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}));case 38:e.connectButtonLoading=!1;case 39:case"end":return n.stop()}},u,null,[[4,21],[10,16],[29,34]])}))()},connect:function(){var e=this;return this.runTimeState.show_access_mode||this.$store.dispatch("runTimeState",{servermode:"auto"}),new Promise(function(u,l){var m=setTimeout(function(){l(new Error("connect timeout"))},8e3);i.ipcRenderer.once("connect-reply",function(p,a){if(console.log(a),Object(g.clearTimeout)(m),a.failed)console.log("connect failed:",a.reason),l(a.reason);else{var f={line:JSON.parse(JSON.stringify(e.runTimeState.selected_line)),servermode:e.runTimeState.servermode,status:"connected"};e.$store.dispatch("runTimeState",{connect_state:f}),i.ipcRenderer.send("user-info-update",4),u(a)}}),i.ipcRenderer.send("connect",e.runTimeState.selected_line.name)})},disconnect:function(){var e=this;return new Promise(function(u,l){var m=setTimeout(function(){l(new Error("disconnect timeout"))},5e3);i.ipcRenderer.once("disconnect-reply",function(p,a){if(console.log("dis reply-->>",a),Object(g.clearTimeout)(m),a.failed)return console.log("gonna trorw an error"),console.log("disconnect failed:",a.reason),l(a.reason);var f={line:{},servermode:e.runTimeState.servermode,status:"disconnected"};e.$store.dispatch("runTimeState",{connect_state:f}),i.ipcRenderer.send("user-info-update",5),u(a)}),i.ipcRenderer.send("disconnect",e.runTimeState.selected_line.name)})}}},C=w,S=o(1212),T=o(51),P=Object(T.a)(C,t,_,!1,null,null,null),R=c.default=P.exports}}]);
