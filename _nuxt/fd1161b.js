(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1283:function(n,i,_){var o=_(1454);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var a=_(2).default,l=a("d058ea2c",o,!0,{sourceMap:!1})},1453:function(n,i,_){"use strict";var o=_(1283),a=_.n(o)},1454:function(n,i,_){var o=_(1),a=o(!1);a.push([n.i,".update-container{height:100vh;padding:2rem .5rem .5rem;position:relative;color:#f4f7fc}.update-container h2{font-weight:500}.update-container h2 .top-space{margin-top:1rem}.update-container h2 .bottom-space{margin-bottom:1rem}.update-container h2 .info-content,.update-container h2 .info-header{color:#34495e;margin-bottom:.5rem;line-height:1.2}.update-container h2 .info-header{color:#7f8c8d}.update-container h2 .info-header h3{font-weight:400}.update-container h2 .large-button{font-size:1.5rem}.update-container h2 .dashboard-link{position:fixed;right:.5rem;bottom:.5rem}.update-container h2 .menu-link{font-size:2rem;text-decoration:none;width:100%;display:block;margin-top:.5rem;padding-left:.5rem}.update-container h2 .menu-link:hover{background:#1abc9c;color:#fff}",""]),n.exports=a},1486:function(n,i,_){"use strict";_.r(i);var o=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"update-container"},[e._l(e.versions,function(t,d){return s("el-row",{key:t.id,staticClass:"top-space bottom-space"},[s("el-col",{attrs:{span:24}},[s("el-card",{staticClass:"set-item",attrs:{shadow:"always"}},[s("div",{on:{click:function(j){return e.collapse(t)}}},[s("a",[s("h2",[e._v(e._s(t.version)+" "+e._s(t.branch)+" "+e._s(t.created_at))]),s("i",{staticClass:"el-icon-arrow-down right",class:{open:e.set_show_dyn==t.id}})])]),s("el-collapse-transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.set_show_dyn==t.id,expression:"set_show_dyn == version.id"}]},[s("div",{staticClass:"transition-box"},[s("vue-markdown",{attrs:{source:t.changelog,postrender:e.transformLinks}})],1)])])],1)],1)],1)}),s("nuxt-link",{staticClass:"dashboard-link",attrs:{to:"/dashboard/update/"}},[e._v(" "+e._s(e.$t("back")))])],2)},a=[],l=_(75),c=_(6),u=_(1156),f=_.n(u),m={components:{VueMarkdown:f.a},middleware:["load-rt-data"],data:function(){return{versions:[],set_show_dyn:null}},computed:{},mounted:function(){var r=this;return Object(c.a)(regeneratorRuntime.mark(function s(){return regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,r.getVersionHistory();case 2:r.versions=d.sent.data.reverse();case 3:case"end":return d.stop()}},s)}))()},methods:{getVersionHistory:function(){return this.$axios.get("client/version-history")},collapse:function(r){return this.set_show_dyn===r.id?(this.set_show_dyn=null,!1):(this.set_show_dyn=r.id,!0)}}},h=m,y=_(1453),p=_(51),v=Object(p.a)(h,o,a,!1,null,null,null),g=i.default=v.exports}}]);
