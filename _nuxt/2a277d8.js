(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1287:function(t,r,e){var _=e(1463);_.__esModule&&(_=_.default),typeof _=="string"&&(_=[[t.i,_,""]]),_.locals&&(t.exports=_.locals);var n=e(2).default,d=n("3c364401",_,!0,{sourceMap:!1})},1462:function(t,r,e){"use strict";var _=e(1287),n=e.n(_)},1463:function(t,r,e){var _=e(1),n=_(!1);n.push([t.i,".container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.container h1{color:#f4f7fc}",""]),t.exports=n},1492:function(t,r,e){"use strict";e.r(r);var _=function(){var s=this,o=s.$createElement,a=s._self._c||o;return s._m(0)},n=[function(){var s=this,o=s.$createElement,a=s._self._c||o;return a("div",{staticClass:"container"},[a("h1",[s._v("\u6B63\u5728\u52A0\u8F7D...")])])}],d=e(22),v=e(9),p=e(39),l=e(28),i={mounted:function(){console.log("[LOG] from index.vue");try{this.disableDragEvent(),Object.keys(this.$eStore.get("service",{})).length?(console.log("going to dashboard"),this.$router.push({path:"/dashboard/dashboard/"})):(console.log("back to login"),console.log("going to login..."),this.$router.push({path:"/login/"}))}catch(o){console.log(o);try{this.$sentry.captureException(o)}catch(a){console.log("capture error failed:",a)}confirm("Unexpected error, please login again. If the error persists, contact support at https://pandafan.website \u672A\u77E5\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u767B\u5165\u5BA2\u6237\u7AEF\u3002\u82E5\u9519\u8BEF\u6301\u7EED\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D\uFF1Ahttps://pandafan.website")&&l.ipcRenderer.send("reset")}},beforeDestroy:function(){window.removeEventListener("dragenter",this.disableDrag,!1),window.removeEventListener("dragover",this.disableDrag),window.removeEventListener("drop",this.disableDrag)},methods:{disableDragEvent:function(){window.addEventListener("dragenter",this.disableDrag,!1),window.addEventListener("dragover",this.disableDrag),window.addEventListener("drop",this.disableDrag)},disableDrag:function(o){o.preventDefault(),o.dataTransfer.effectAllowed="none",o.dataTransfer.dropEffect="none"}}},c=i,g=e(1462),f=e(51),u=Object(f.a)(c,_,n,!1,null,null,null),h=r.default=u.exports}}]);
