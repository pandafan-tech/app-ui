(window.webpackJsonp=window.webpackJsonp||[]).push([[20,19],{1135:function(e,t,o){var i=o(1147);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,o(2).default)("2e689492",i,!0,{sourceMap:!1})},1136:function(e,t,o){"use strict";o.r(t);o(74);var i=o(6),n=(o(76),o(1145)),a={components:{VueMarkdown:o.n(n).a},props:{news:{type:Object,default:function(){return{}}}},data:function(){return{siteDomain:""}},computed:{content:function(){return this.news.content?this.news.content.replace(/{{siteDomain}}/g,this.siteDomain):""}},mounted:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getUserSiteURL");case 2:e.siteDomain=t.sent.replace("https://","");case 3:case"end":return t.stop()}}),t)})))()},methods:{dismiss:function(e,t){this.$parent.$options.parent.tempHideNews(e,t)}}},r=(o(1146),o(51)),s=Object(r.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"news-modal"},[o("div",{staticClass:"title yue"},[o("h2",[e._v(e._s(e.news.title))])]),o("div",{staticClass:"content yue"},[o("vue-markdown",{attrs:{source:e.content,postrender:e.transformLinks}})],1),o("div",{staticClass:"read-button"},[o("center",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.dismiss(e.news,!0)}}},[e._v("不再提示")]),o("el-button",{attrs:{type:"success"},on:{click:function(t){return e.dismiss(e.news)}}},[e._v("已了解")])],1)],1)])}),[],!1,null,null,null);t.default=s.exports},1140:function(e,t,o){var i=o(1174);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,o(2).default)("43a67bdc",i,!0,{sourceMap:!1})},1146:function(e,t,o){"use strict";o(1135)},1147:function(e,t,o){var i=o(1)(!1);i.push([e.i,'.yue{font:400 18px/1.62 -apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#444443}.yue ::-moz-selection{background-color:rgba(0,0,0,.2)}.yue ::selection{background-color:rgba(0,0,0,.2)}.yue h1,.yue h2,.yue h3,.yue h4,.yue h5,.yue h6{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#222223}.yue h1{font-size:1.8em;margin:.67em 0}.yue>h1{margin-top:0;font-size:2em}.yue h2{font-size:1.5em;margin:.83em 0}.yue h3{font-size:1.17em;margin:1em 0}.yue h4,.yue h5,.yue h6{font-size:1em;margin:1.6em 0 1em}.yue h6{font-weight:500}.yue p{margin-top:0;margin-bottom:1.24em}.yue a{color:#111;word-wrap:break-word;-webkit-text-decoration-color:rgba(0,0,0,.4);text-decoration-color:rgba(0,0,0,.4)}.yue a:hover{color:#555;-webkit-text-decoration-color:rgba(0,0,0,.6);text-decoration-color:rgba(0,0,0,.6)}.yue h1 a,.yue h2 a,.yue h3 a{text-decoration:none}.yue b,.yue strong{font-weight:700;color:#222223}.yue em,.yue i{font-style:italic;color:#222223}.yue img{max-width:100%;height:auto;margin:.2em 0}.yue a img{border:none}.yue figure{position:relative;clear:both;outline:0;margin:10px 0 30px;padding:0;min-height:100px}.yue figure img{display:block;max-width:100%;margin:auto auto 4px;box-sizing:border-box}.yue figure figcaption{position:relative;width:100%;text-align:center;left:0;margin-top:10px;font-weight:400;font-size:14px;color:#666665}.yue figure figcaption a{text-decoration:none;color:#666665}.yue hr{display:block;width:14%;margin:40px auto 34px;border:0;border-top:3px solid #dededc}.yue blockquote{margin:0 0 1.64em;border-left:3px solid #dadada;padding-left:12px;color:#666664}.yue blockquote a{color:#666664}.yue ol,.yue ul{margin:0 0 24px 6px;padding-left:16px}.yue ul{list-style-type:square}.yue ol{list-style-type:decimal}.yue li{margin-bottom:.2em}.yue li ol,.yue li ul{margin-top:0;margin-bottom:0;margin-left:14px}.yue li ul{list-style-type:disc}.yue li ul ul{list-style-type:circle}.yue li p{margin:.4em 0 .6em}.yue .unstyled{list-style-type:none;margin:0;padding:0}.yue code,.yue tt{color:grey;padding:1px 2px;border:1px solid #eee;border-radius:3px;word-wrap:break-word}.yue code,.yue pre,.yue tt{font-size:.96em;background-color:#f9f9f7;font-family:Menlo,Monaco,Consolas,"Courier New",monospace}.yue pre{margin:1.64em 0;border:none;border-left:3px solid #dadada;padding:7px 7px 7px 10px;overflow:auto;line-height:1.5;color:#4c4c4c}.yue pre code,.yue pre tt{color:#4c4c4c;border:none;background:none;padding:0}.yue table{width:100%;max-width:100%;border-collapse:collapse;border-spacing:0;margin-bottom:1.5em;font-size:.96em;box-sizing:border-box}.yue td,.yue th{text-align:left;padding:4px 8px 4px 10px;border:1px solid #dadada}.yue td{vertical-align:top}.yue tr:nth-child(2n){background-color:#efefee}.yue iframe{display:block;max-width:100%;margin-bottom:30px}.yue figure iframe{margin:auto}.yue table pre{margin:0;padding:0;border:none;background:none}@media (min-width:1100px){.yue blockquote{margin-left:-24px;padding-left:20px;border-width:4px}.yue blockquote blockquote{margin-left:0}}.news-modal .title{text-align:center}.news-modal .content{padding-top:3rem;padding-bottom:5rem}.news-modal .read-button{position:fixed;bottom:1rem;right:1rem}',""]),e.exports=i},1151:function(e,t,o){"use strict";o.r(t);var i={components:{NewsDisplay:o(1136).default},props:{news:{type:Object,default:function(){return{}}}},data:function(){return{displayNews:!1,tempHideList:{}}},computed:{updated_at:function(){return new Date(this.news.updated_at).toLocaleString()}},mounted:function(){this.news&&!this.tempHideList[this.news.id]&&this.news.extra&&this.news.extra.auto_show&&this.showNews()},methods:{showNews:function(){console.log(123123),this.displayNews=!0},tempHideNews:function(e,t){console.log(this.tempHideList),this.tempHideList[e.id]=!0,this.displayNews=!1,t&&this.$store.dispatch("newsRead",this.news)}}},n=(o(1173),o(51)),a=Object(n.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.tempHideList[e.news.id]?e._e():o("div",{staticClass:"panda-news"},[o("el-dialog",{attrs:{visible:e.displayNews,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"show-close":!1},on:{"update:visible":function(t){e.displayNews=t}}},[o("NewsDisplay",{attrs:{news:e.news}})],1),e.displayNews?e._e():o("div",{staticClass:"news-bar"},[o("el-row",{attrs:{gutter:20},nativeOn:{click:function(t){return e.showNews(e.news)}}},[o("el-col",{staticClass:"icon",attrs:{span:2}},[o("i",{staticClass:"el-icon-warning"})]),o("el-col",{staticClass:"content",attrs:{span:22}},[o("h3",[e._v(e._s(e.news.title))]),o("h5",[o("span",{staticClass:"left"},[e._v("通知更新于："+e._s(e.updated_at))]),o("span",{staticClass:"right"},[e._v("查看/关闭")])])])],1)],1)],1)}),[],!1,null,null,null);t.default=a.exports;installComponents(a,{NewsDisplay:o(1136).default})},1173:function(e,t,o){"use strict";o(1140)},1174:function(e,t,o){var i=o(1)(!1);i.push([e.i,'.yue{font:400 18px/1.62 -apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#444443}.yue ::-moz-selection{background-color:rgba(0,0,0,.2)}.yue ::selection{background-color:rgba(0,0,0,.2)}.yue h1,.yue h2,.yue h3,.yue h4,.yue h5,.yue h6{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Droid Sans","Helvetica Neue","PingFang SC","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;color:#222223}.yue h1{font-size:1.8em;margin:.67em 0}.yue>h1{margin-top:0;font-size:2em}.yue h2{font-size:1.5em;margin:.83em 0}.yue h3{font-size:1.17em;margin:1em 0}.yue h4,.yue h5,.yue h6{font-size:1em;margin:1.6em 0 1em}.yue h6{font-weight:500}.yue p{margin-top:0;margin-bottom:1.24em}.yue a{color:#111;word-wrap:break-word;-webkit-text-decoration-color:rgba(0,0,0,.4);text-decoration-color:rgba(0,0,0,.4)}.yue a:hover{color:#555;-webkit-text-decoration-color:rgba(0,0,0,.6);text-decoration-color:rgba(0,0,0,.6)}.yue h1 a,.yue h2 a,.yue h3 a{text-decoration:none}.yue b,.yue strong{font-weight:700;color:#222223}.yue em,.yue i{font-style:italic;color:#222223}.yue img{max-width:100%;height:auto;margin:.2em 0}.yue a img{border:none}.yue figure{position:relative;clear:both;outline:0;margin:10px 0 30px;padding:0;min-height:100px}.yue figure img{display:block;max-width:100%;margin:auto auto 4px;box-sizing:border-box}.yue figure figcaption{position:relative;width:100%;text-align:center;left:0;margin-top:10px;font-weight:400;font-size:14px;color:#666665}.yue figure figcaption a{text-decoration:none;color:#666665}.yue hr{display:block;width:14%;margin:40px auto 34px;border:0;border-top:3px solid #dededc}.yue blockquote{margin:0 0 1.64em;border-left:3px solid #dadada;padding-left:12px;color:#666664}.yue blockquote a{color:#666664}.yue ol,.yue ul{margin:0 0 24px 6px;padding-left:16px}.yue ul{list-style-type:square}.yue ol{list-style-type:decimal}.yue li{margin-bottom:.2em}.yue li ol,.yue li ul{margin-top:0;margin-bottom:0;margin-left:14px}.yue li ul{list-style-type:disc}.yue li ul ul{list-style-type:circle}.yue li p{margin:.4em 0 .6em}.yue .unstyled{list-style-type:none;margin:0;padding:0}.yue code,.yue tt{color:grey;padding:1px 2px;border:1px solid #eee;border-radius:3px;word-wrap:break-word}.yue code,.yue pre,.yue tt{font-size:.96em;background-color:#f9f9f7;font-family:Menlo,Monaco,Consolas,"Courier New",monospace}.yue pre{margin:1.64em 0;border:none;border-left:3px solid #dadada;padding:7px 7px 7px 10px;overflow:auto;line-height:1.5;color:#4c4c4c}.yue pre code,.yue pre tt{color:#4c4c4c;border:none;background:none;padding:0}.yue table{width:100%;max-width:100%;border-collapse:collapse;border-spacing:0;margin-bottom:1.5em;font-size:.96em;box-sizing:border-box}.yue td,.yue th{text-align:left;padding:4px 8px 4px 10px;border:1px solid #dadada}.yue td{vertical-align:top}.yue tr:nth-child(2n){background-color:#efefee}.yue iframe{display:block;max-width:100%;margin-bottom:30px}.yue figure iframe{margin:auto}.yue table pre{margin:0;padding:0;border:none;background:none}@media (min-width:1100px){.yue blockquote{margin-left:-24px;padding-left:20px;border-width:4px}.yue blockquote blockquote{margin-left:0}}.news-bar{z-index:9999;position:fixed;width:100%;background:#e67e22;color:#f4f7fc;padding:.25rem .5rem;box-shadow:0 10px 32px 5px rgba(0,0,0,.6)}.news-bar:hover{cursor:pointer}.news-bar .icon{padding:.1rem;font-size:2rem}.news-bar .content{padding-left:1rem!important}',""]),e.exports=i}}]);