(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1160:function(t,e,n){var content=n(1303);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("442c8bf9",content,!0,{sourceMap:!1})},1302:function(t,e,n){"use strict";n(1160)},1303:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,".about-container{height:100vh;padding:2rem .5rem .5rem;position:relative;color:#f4f7fc}.about-container p.thin{font-weight:400;color:#bdc3c7}.about-container p.thin .dashboard-link{position:fixed;right:.5rem;bottom:.5rem}.about-container p.thin .menu-link{font-size:3rem;text-decoration:none;width:100%;padding-right:4rem}.about-container p.thin .menu-link:before:hover{background:#95a5a6;padding-left:4rem;color:#fff}",""]),t.exports=r},1343:function(t,e,n){"use strict";n.r(e);n(59),n(23),n(20),n(8),n(45);var r=n(16),o=n(17),c=n(46);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={middleware:["load-rt-data","authenticated"],data:function(){return{crisp_user_segments:[],platform:o.remote.process.platform,links:[{text:"设置",path:"/dashboard/settings/"},{text:"关于",path:"/dashboard/about/"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["listening_link_event"])),mounted:function(){this.setChatServiceData()},methods:{setData:function(data,t){},setChatServiceData:function(){console.log(this.session),this.$intercom.boot({user_id:this.session.user_id,user_hash:this.session.user_hash,client_version:o.remote.app.getVersion(),hide_default_launcher:!0}),this.$intercom.hide()},openIntercom:function(){console.log("intercom..."),this.$intercom.show()}}},f=(n(1302),n(44)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-container"},[n("h4",[t._v("· 检查更新")]),n("p",{staticClass:"thin"},[t._v("回到「菜单」页面，点击「检查更新」。确认当前为最新版客户端")]),n("br"),n("h4",[t._v("· 禁用 Chrome/其他浏览器的所有插件")]),t._m(0),n("br"),n("h4",[t._v("· 尝试切换线路")]),n("p",{staticClass:"thin"},[t._v("不同地区、网络运营商均有不同程度的限制和干扰，我们建议您尝试不同的线路，\b推荐选择亚太地区的线路，它们均有非常优秀的表现。")]),n("br"),n("h4",[t._v("· 装了360、腾讯安全卫士之类的软件？")]),t._m(1),n("br"),n("h4",[t._v("· 退出客户端后无法联网？")]),n("p",{staticClass:"thin"},[t._v("这个情况一般只有 Windows 用户可能遇到。"),n("br"),t._v("解决方案 "),n("b",[n("a",{on:{click:function(e){return t.openSite("/knowledges/85")}}},[t._v("看这里")])])]),n("br"),this.user.extra.tk_suspend?t._e():n("center",[n("el-button",{attrs:{type:"primary"},on:{click:t.openIntercom}},[t._v(t._s(t.$t("help_page.chat_button")))]),n("p",{staticClass:"small thin success"},[t._v(t._s(t.$t("help_page.hint")))])],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"thin"},[t._v("请确认所有Chrome浏览器插件（或者其他任何浏览器的插件）都已经被禁用，部分浏览器插件会干扰系统网络设定，导致代理无法正常工作。若禁用后，服务工作正常，您可以再将插件一个个启用，排查出具体干扰项。Chrome地址栏输入"),n("a",[t._v("chrome://extensions")]),t._v("可进入插件管理页面。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"thin"},[t._v("部分安防类软件，尤其是国产的厂商，经常性会将部分程序静默阻止联网，或者改动一些系统设定造成一些疑难问题。"),n("br"),t._v("我们强烈建议您卸载删除这些国产安Líu防Máng软件。若卸载后依然无法正常使用，很可能您的系统已经一团糟，建议重装系统。新用户可向我们申请退款。"),n("br"),n("b",[t._v("并不是以前能用，以后也都能用。")]),t._v("这些软件行为无法预测，没人能解释为什么...")])}],!1,null,null,null);e.default=component.exports}}]);