(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7],{1146:function(s,d,o){var t=o(1172);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);var _=o(2).default,y=_("8bfe1644",t,!0,{sourceMap:!1})},1171:function(s,d,o){"use strict";var t=o(1146),_=o.n(t)},1172:function(s,d,o){var t=o(1),_=t(!1);_.push([s.i,'.arrow[data-v-1d5e5f7a],.arrow[data-v-1d5e5f7a]:before{position:absolute}.arrow[data-v-1d5e5f7a]{top:70%;left:30%;margin:-20px 0 0 -20px;-webkit-transform:rotate(45deg);border-right:2px solid #fff;border-top:2px solid #fff}.arrow[data-v-1d5e5f7a],.arrow[data-v-1d5e5f7a]:before{width:20px;height:20px;border-left:none}.arrow[data-v-1d5e5f7a]:before{content:"";top:50%;margin:-10px 0 0 -10px;border-right:1px solid #fff;border-top:1px solid #fff;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:arrow-data-v-1d5e5f7a;animation-name:arrow-data-v-1d5e5f7a}@-webkit-keyframes arrow-data-v-1d5e5f7a{0%{opacity:0;transform:translate(-2px,2px)}50%{opacity:1}to{opacity:0;transform:translate(13px,-13px)}}@keyframes arrow-data-v-1d5e5f7a{0%{opacity:0;transform:translate(-2px,2px)}50%{opacity:1}to{opacity:0;transform:translate(13px,-13px)}}',""]),s.exports=_},1173:function(s,d,o){var t=o(1220);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);var _=o(2).default,y=_("f646c122",t,!0,{sourceMap:!1})},1192:function(s,d,o){"use strict";o.r(d);var t=function(){var g=this,b=g.$createElement,h=g._self._c||b;return h("div",{staticClass:"arrow"})},_=[],y=o(1171),j=o(51),O={},x=Object(j.a)(O,t,_,!1,null,"1d5e5f7a",null),E=d.default=x.exports},1219:function(s,d,o){"use strict";var t=o(1173),_=o.n(t)},1220:function(s,d,o){var t=o(1),_=t(!1);_.push([s.i,".connections-control{position:fixed!important;bottom:0;left:0;width:100%;height:3.2rem;padding:0}.connections-control .connect-button{border-radius:0;font-size:1.6rem;width:100%}",""]),s.exports=_},1246:function(s,d,o){"use strict";o.r(d);var t=function(){var r=this,e=r.$createElement,f=r._self._c||e;return f("el-row",{staticClass:"connections-control"},[f("el-button",{staticClass:"connect-button",attrs:{type:r.runTimeState.connect_state.status=="connected"?"warning":"success",loading:r.connectButtonLoading,disabled:r.connectButtonDisabled||r.connectButtonLoading},on:{click:r.connectAction}},[r._v(" "+r._s(r.connectButtonText))])],1)},_=[],y=o(9),j=o(64),O=o(77),x=o(27),E=o(76),g=o(6),b=o(107),h=o(1131),m=o(28),p=o(53),w=o(1192);window.onerror=function(r,e,f,c,u){console.log("Exception: ",u.message.startsWith("EPERM:"))};var C={components:{Arrow:w.default},data:function(){return{connectButtonLoading:!1,connectButtonDisabled:!1}},computed:{connectButtonText:function(){var e="";return this.connected?e=this.$t("disconnect"):e=this.$t("connect"),e}},methods:{connectAction:function(){var e=this;return Object(g.a)(regeneratorRuntime.mark(function f(){var c,u,v,a,l,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.connectButtonLoading=!0,c=e.connected?"disconnect":"connect",p.process.platform!=="darwin"){n.next=24;break}if(u="".concat(p.app.getPath("userData"),"/ProxyConfig"),n.prev=4,v=p.require("fs-extra"),a=v.fstatSync(v.openSync(u)),console.log("ProxyConfig perm is:",a),a.uid===0){n.next=19;break}return console.log("UID is not root. will force reinstall helper."),n.prev=10,n.next=13,v.remove(u);case 13:console.log("ProxyConfig deleted."),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(10),console.log("delete ProxyConfig failed:",n.t0);case 19:n.next=24;break;case 21:n.prev=21,n.t1=n.catch(4),console.log("ready perm of ProxyConfig failed",n.t1);case 24:if(console.log("performing action: "+c),c!=="connect"){n.next=29;break}if(!(!e.runTimeState.selected_line||!e.runTimeState.selected_line.name)){n.next=29;break}return e.connectButtonLoading=!1,n.abrupt("return",e.$message({message:e.$t("connect_info.select_line"),type:"error"}));case 29:return n.prev=29,n.next=32,e[c]();case 32:n.next=38;break;case 34:n.prev=34,n.t2=n.catch(29),console.log("--->>> action failed:",n.t2),["connect timeout","disconnect timeout"].includes(n.t2.message)?e.$message({message:e.$t("error.timeout"),type:"error"}):(l=e.shouldIgnoreError(n.t2),l.ignore?(console.log("will not report to sentry."),console.log("matched error:",l.matchedError)):e.$sentry.captureException(n.t2),i=e.errorMessageAssemble(n.t2),console.table(n.t2),l.matchedError==="EPERM"&&(i=i+"<br>".concat(e.$t("error.eperm"))),["ENOENT","UNKNOWN"].includes(l.matchedError)&&(p.process.platform==="darwin"?i=i+"<br>".concat(e.$t("error.enoent")):p.process.platform==="win32"&&(p.process.arch==="ia32"?i=i+"<br>".concat(e.$t("error.clash")):i=i+"<br>".concat(e.$t("error.missing")))),l.matchedError==="Command failed"&&(i=i+"<br>".concat(e.$t("error.restart"))),e.$alert(i,e.$t("error.connect_failed"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}));case 38:e.connectButtonLoading=!1;case 39:case"end":return n.stop()}},f,null,[[4,21],[10,16],[29,34]])}))()},connect:function(){var e=this;return this.runTimeState.show_access_mode||this.$store.dispatch("runTimeState",{servermode:"auto"}),new Promise(function(f,c){var u=setTimeout(function(){c(new Error("connect timeout"))},8e3);m.ipcRenderer.once("connect-reply",function(v,a){if(console.log(a),Object(h.clearTimeout)(u),a.failed)console.log("connect failed:",a.reason),c(a.reason);else{var l={line:JSON.parse(JSON.stringify(e.runTimeState.selected_line)),servermode:e.runTimeState.servermode,status:"connected"};e.$store.dispatch("runTimeState",{connect_state:l}),m.ipcRenderer.send("user-info-update",4),f(a)}}),m.ipcRenderer.send("connect",e.runTimeState.selected_line.name)})},disconnect:function(){var e=this;return new Promise(function(f,c){var u=setTimeout(function(){c(new Error("disconnect timeout"))},5e3);m.ipcRenderer.once("disconnect-reply",function(v,a){if(console.log("dis reply-->>",a),Object(h.clearTimeout)(u),a.failed)return console.log("gonna trorw an error"),console.log("disconnect failed:",a.reason),c(a.reason);var l={line:{},servermode:e.runTimeState.servermode,status:"disconnected"};e.$store.dispatch("runTimeState",{connect_state:l}),m.ipcRenderer.send("user-info-update",5),f(a)}),m.ipcRenderer.send("disconnect",e.runTimeState.selected_line.name)})}}},T=C,R=o(1219),P=o(51),S=Object(P.a)(T,t,_,!1,null,null,null),A=d.default=S.exports}}]);
