(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1339:function(e,t,o){"use strict";o.r(t);var r={props:{show:{type:Boolean,default:!1},"auto-close":{type:Boolean,default:!1}},data:function(){return{display:this.show}},computed:{autoclose:function(){return this["auto-close"]}},methods:{switchService:function(e){this.$store.dispatch("switchService",e),this.$store.dispatch("runTimeState",{selected_line:{}}),this.autoclose&&(this.display=!1)}}},n=o(42),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:"您要使用哪项服务？",visible:e.display,center:"",width:"90%","append-to-body":!0},on:{"update:visible":function(t){e.display=t}}},[o("center",[o("el-radio-group",{attrs:{size:"medium"},model:{value:e.current_service_cate,callback:function(t){e.current_service_cate=t},expression:"current_service_cate"}},[o("el-radio",{attrs:{border:"",label:"allplatform"},nativeOn:{click:function(t){return t.stopPropagation(),e.switchService("allplatform")}}},[e._v("云游服务")]),o("el-radio",{attrs:{border:"",label:"home"},nativeOn:{click:function(t){return t.stopPropagation(),e.switchService("home")}}},[e._v("回家服务")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);