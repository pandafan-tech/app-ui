(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1165:function(t,e,n){var content=n(1315);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("8ae7d746",content,!0,{sourceMap:!1})},1314:function(t,e,n){"use strict";n(1165)},1315:function(t,e,n){var o=n(57)((function(i){return i[1]}));o.push([t.i,".update-container{height:100vh;padding:2rem .5rem .5rem;position:relative;color:#f4f7fc}.update-container h2{font-weight:500}.update-container h2 .top-space{margin-top:1rem}.update-container h2 .bottom-space{margin-bottom:1rem}.update-container h2 .info-content,.update-container h2 .info-header{color:#34495e;margin-bottom:.5rem;line-height:1.2}.update-container h2 .info-header{color:#7f8c8d}.update-container h2 .info-header h3{font-weight:400}.update-container h2 .large-button{font-size:1.5rem}.update-container h2 .dashboard-link{position:fixed;right:.5rem;bottom:.5rem}.update-container h2 .menu-link{font-size:2rem;text-decoration:none;width:100%;display:block;margin-top:.5rem;padding-left:.5rem}.update-container h2 .menu-link:hover{background:#1abc9c;color:#fff}",""]),t.exports=o},1343:function(t,e,n){"use strict";n.r(e);n(71);var o=n(5),r=n(1064),c={components:{VueMarkdown:n.n(r).a},middleware:["load-rt-data"],data:function(){return{versions:[],set_show_dyn:null}},computed:{},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getVersionHistory();case 2:t.versions=e.sent.data.reverse();case 3:case"end":return e.stop()}}),e)})))()},methods:{getVersionHistory:function(){return this.$axios.get("client/version-history")},collapse:function(t){return this.set_show_dyn===t.id?(this.set_show_dyn=null,!1):(this.set_show_dyn=t.id,!0)}}},d=(n(1314),n(44)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"update-container"},[t._l(t.versions,(function(e,o){return n("el-row",{key:e.id,staticClass:"top-space bottom-space"},[n("el-col",{attrs:{span:24}},[n("el-card",{staticClass:"set-item",attrs:{shadow:"always"}},[n("div",{on:{click:function(n){return t.collapse(e)}}},[n("a",[n("h2",[t._v(t._s(e.version)+" "+t._s(e.branch)+" "+t._s(e.created_at))]),n("i",{staticClass:"el-icon-arrow-down right",class:{open:t.set_show_dyn==e.id}})])]),n("el-collapse-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.set_show_dyn==e.id,expression:"set_show_dyn == version.id"}]},[n("div",{staticClass:"transition-box"},[n("vue-markdown",{attrs:{source:e.changelog,postrender:t.transformLinks}})],1)])])],1)],1)],1)})),n("nuxt-link",{staticClass:"dashboard-link",attrs:{to:"/dashboard/update/"}},[t._v(" "+t._s(t.$t("back")))])],2)}),[],!1,null,null,null);e.default=component.exports}}]);