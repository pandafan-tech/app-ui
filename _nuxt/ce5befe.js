(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1264:function(e,t,a){var r=a(1328);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(2).default)("3fe1cff2",r,!0,{sourceMap:!1})},1327:function(e,t,a){"use strict";a(1264)},1328:function(e,t,a){var r=a(1)(!1);r.push([e.i,".buy-premium-data-container{height:100vh;padding:1.5rem .5rem 0;position:relative}.buy-premium-data-container h1,.buy-premium-data-container h2,.buy-premium-data-container h3,.buy-premium-data-container h4,.buy-premium-data-container h5,.buy-premium-data-container p,.buy-premium-data-container span{color:#f4f7fc}.buy-premium-data-container .all-pre{display:flex;align:middle;justify:center;font-size:1rem;position:absolute;right:0}.buy-premium-data-container .all-pre span{margin-right:.5rem;display:inline-block}.buy-premium-data-container .selection .el-row{margin-bottom:2rem}.buy-premium-data-container .el-input{margin-top:2rem;width:100%;margin-bottom:1rem;border:none}.buy-premium-data-container .el-input input{text-align:center;border:none;border-bottom:1px solid #95a5a6;padding:1.5rem 0 2rem;border-radius:0;background:#fff;color:#fff;font-size:3rem;background:transparent}.buy-premium-data-container .el-input input:focus,.buy-premium-data-container .el-input input:hover{border-color:#1abc9c}.buy-premium-data-container .el-input input:focus:disabled,.buy-premium-data-container .el-input input:hover:disabled{background:transparent}.buy-premium-data-container .round-margin{margin:.3rem}.buy-premium-data-container .dashboard-link,.buy-premium-data-container .switch-service{position:fixed;bottom:.5rem;z-index:999}.buy-premium-data-container .dashboard-link{right:.5rem}.buy-premium-data-container hr{margin-top:1rem;margin-bottom:1rem}.buy-premium-data-container hr.short{margin-left:5rem;margin-right:5rem}",""]),e.exports=r},1474:function(e,t,a){"use strict";a.r(t);a(62),a(39),a(27),a(23),a(40),a(105),a(9),a(205);var r=a(18),n=a(52),i=a(1188);function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var u={components:{Payment:i.default},middleware:["load-rt-data","authenticated"],data:function(){return console.log("this:",undefined),{confirmed_extend_info:{fee:0},gbToBuy:10,confirming:!1,all_pre:!1,confirmedInfo:null,currency:"rmb"}},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({tableData:function(){return[{a:this.$t("buy_premium_data.price_table.a"),b:this.$t("buy_premium_data.price_table.b"),c:this.$t("buy_premium_data.price_table.c")}]}},Object(n.b)(["buyServiceResult"])),beforeMount:function(){this.$store.dispatch("setConfirmedInfo",{}),this.$store.dispatch("setBuyServiceResult",!1)},mounted:function(){console.log("buy-premium-data...")},methods:{confirmPrice:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!(this.gbToBuy<=0)){this.confirming=!0;var a=this,r={plan_id:"pre",buy_length:Number(this.gbToBuy),promocode:null,dry_run:t,all_pre:this.all_pre};console.log("opt:",r),this.$store.dispatch("confirmPrice",r).then((function(t){console.log("confirmPrice--\x3e:",t),a.$message({type:"success",message:"操作成功！您已购买 ".concat(e.gbToBuy,"GB 高级流量")})})).catch((function(t){var r,n,i,o;console.log("confirm failed:",t);var u="抱歉，服务器开小差了，请稍后再试..."+((null==t||null===(r=t.data)||void 0===r?void 0:r.message)||t);"not valid"===(null===(n=t.data)||void 0===n?void 0:n.message)&&(u="您已获得无限高级流量，无需购买"),null!==(i=t.data)&&void 0!==i&&null!==(o=i.message)&&void 0!==o&&o.startsWith("moneyNotEnough")?(t.data.selected_plan_id="pre",t.data.fee=t.data.eur_amount,console.log(Number(e.gbToBuy)),t.data.auto_buy_month=Number(e.gbToBuy),t.data.buy_length=Number(e.gbToBuy),console.log(t.data),e.$store.dispatch("setConfirmedInfo",t.data),e.$store.dispatch("setBuyServiceResult",!0),a.confirmed_extend_info=t.data,a.confirmedInfo=t.data):a.$message({type:"error",message:u})})).finally((function(){a.confirming=!1}))}}}},l=u,s=(a(1327),a(51)),c=Object(s.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"buy-premium-data-container"},[e.buyServiceResult?e._e():a("div",{staticClass:"selection"},[a("el-row",[a("h3",[e._v(e._s(e.$t("buy_premium_data.input_title")))]),a("el-input",{attrs:{type:"number",disabled:e.all_pre},model:{value:e.gbToBuy,callback:function(t){e.gbToBuy=e._n(t)},expression:"gbToBuy"}}),a("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:e.$t("buy_premium_data.all_pre_condition"),placement:"top"}},[a("p",{staticClass:"all-pre"},[a("span",[e._v(e._s(e.$t("buy_premium_data.all_pre_hint")))]),a("el-switch",{model:{value:e.all_pre,callback:function(t){e.all_pre=t},expression:"all_pre"}})],1)])],1),a("el-row",[a("el-button",{staticClass:"cal-fee full-width",attrs:{disabled:e.gbToBuy<=0,type:"success",loading:e.confirming},on:{click:function(t){return e.confirmPrice(!1)}}},[e._v(e._s(e.$t("billing.purchase")))])],1),a("el-row",[a("h5",[e._v("1. "+e._s(e.$t("buy_premium_data.explains.a")))]),a("h5",[e._v("2. "+e._s(e.$t("buy_premium_data.explains.b")))]),a("h5",[e._v("3. "+e._s(e.$t("buy_premium_data.explains.c")))]),a("h5",[e._v("4. "+e._s(e.$t("buy_premium_data.explains.d")))]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,fit:!0}},[a("el-table-column",{attrs:{prop:"a",label:""}}),a("el-table-column",{attrs:{prop:"b",label:e.$t("plan_names.2")}}),a("el-table-column",{attrs:{prop:"c",label:e.$t("plan_names.4")}})],1),a("br"),a("h4",{staticClass:"right warning"},[e._v(e._s(e.$t("buy_premium_data.all_pre_condition")))])],1)],1),e.buyServiceResult?a("div",{staticClass:"payment"},[a("Payment")],1):e._e(),e.buyServiceResult?e._e():a("nuxt-link",{staticClass:"dashboard-link smooth",attrs:{to:"/dashboard/"}},[e._v(e._s(e.$t("back")))])],1)}),[],!1,null,null,null);t.default=c.exports;installComponents(c,{Payment:a(1188).default})}}]);