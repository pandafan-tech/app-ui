(window.webpackJsonp=window.webpackJsonp||[]).push([[34,32],{1160:function(v,P,s){var i=s(1205);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[v.i,i,""]]),i.locals&&(v.exports=i.locals);var m=s(2).default,L=m("26195cac",i,!0,{sourceMap:!1})},1204:function(v,P,s){"use strict";var i=s(1160),m=s.n(i)},1205:function(v,P,s){var i=s(1),m=i(!1);m.push([v.i,".serviceCateSelector[data-v-b67b8fee]{z-index:9999}",""]),v.exports=m},1237:function(v,P,s){"use strict";s.r(P);var i=function(){var o=this,C=o.$createElement,u=o._self._c||C;return u("el-dialog",{staticClass:"serviceCateSelector",attrs:{title:o.$t("select_service.title"),visible:o.modalVisible,center:"",width:"100%","append-to-body":!0,fullscreen:!0,"close-on-press-escape":!1,"show-close":!1},on:{close:o.updateParentSwitchVal}},[u("el-card",{nativeOn:{click:function(W){return o.sendReturn("allplatform")}}},[u("center",[u("h1",[o._v(o._s(o.$t("services.allplatform.name")))]),u("h3",{staticClass:"subheader"},[o._v(o._s(o.$t("services.allplatform.desc")))])])],1),u("el-card",{nativeOn:{click:function(W){return o.sendReturn("home")}}},[u("center",[u("h1",[o._v(o._s(o.$t("services.home.name")))]),u("h3",{staticClass:"subheader"},[o._v(o._s(o.$t("services.home.desc")))])])],1),u("center",[u("p",{staticClass:"subheader"},[o._v(o._s(o.$t("select_service.hint",{place:o.$t("select_service.bottom_left")}))+" ")]),u("br"),u("p",[o._v(o._s(o.$t("login.email"))+" "),u("span",{staticClass:"underline"},[o._v(o._s(o.user.email))]),u("br"),o._v(o._s(o.$t("menu.id"))+" "),u("span",{staticClass:"underline"},[o._v(o._s(o.user.id))])])])],1)},m=[],L={name:"ServiceSelector",props:{modalVisible:{type:Boolean,default:!1},callback:{type:Function,default:function(){return function(){}}}},watch:{modalVisible:function(C,u){console.log(C,u)}},beforeDestroy:function(){this.updateParentSwitchVal()},methods:{updateParentSwitchVal:function(){this.$emit("update:modalVisible",!1)},sendReturn:function(C){this.callback(C),this.updateParentSwitchVal()}}},I=L,M=s(1204),U=s(51),z=Object(U.a)(I,i,m,!1,null,"b67b8fee",null),K=P.default=z.exports},1251:function(v,P,s){var i=s(1321);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[v.i,i,""]]),i.locals&&(v.exports=i.locals);var m=s(2).default,L=m("58f240ab",i,!0,{sourceMap:!1})},1315:function(v,P){var s=4,i=.001,m=1e-7,L=10,I=11,M=1/(I-1),U=typeof Float32Array=="function";function z(d,l){return 1-3*l+3*d}function K(d,l){return 3*l-6*d}function o(d){return 3*d}function C(d,l,p){return((z(l,p)*d+K(l,p))*d+o(l))*d}function u(d,l,p){return 3*z(l,p)*d*d+2*K(l,p)*d+o(l)}function W(d,l,p,S,D){var h,x,F=0;do x=l+(p-l)/2,h=C(x,S,D)-d,h>0?p=x:l=x;while(Math.abs(h)>m&&++F<L);return x}function ce(d,l,p,S){for(var D=0;D<s;++D){var h=u(l,p,S);if(h===0)return l;var x=C(l,p,S)-d;l-=x/h}return l}function _e(d){return d}v.exports=function(l,p,S,D){if(!(0<=l&&l<=1&&0<=S&&S<=1))throw new Error("bezier x values must be in [0, 1] range");if(l===p&&S===D)return _e;for(var h=U?new Float32Array(I):new Array(I),x=0;x<I;++x)h[x]=C(x*M,l,S);function F(T){for(var O=0,E=1,q=I-1;E!==q&&h[E]<=T;++E)O+=M;--E;var J=(T-h[E])/(h[E+1]-h[E]),V=O+J*M,B=u(V,l,S);return B>=i?ce(T,V,l,S):B===0?V:W(T,O,O+M,l,S)}return function(O){return O===0?0:O===1?1:C(F(O),p,D)}}},1320:function(v,P,s){"use strict";var i=s(1251),m=s.n(i)},1321:function(v,P,s){var i=s(1),m=i(!1);m.push([v.i,".buy-service-container{height:100vh;padding:.5rem .5rem 2rem;position:relative}.buy-service-container .el-form-item,.buy-service-container .el-form-item *,.buy-service-container h1,.buy-service-container h1 *,.buy-service-container h2,.buy-service-container h2 *,.buy-service-container h3,.buy-service-container h3 *,.buy-service-container h4,.buy-service-container h4 *,.buy-service-container h5,.buy-service-container h5 *,.buy-service-container input,.buy-service-container input *,.buy-service-container p,.buy-service-container p *{color:#f4f7fc}.buy-service-container .round-margin{margin:.3rem}.buy-service-container .small-text{font-size:1.2rem}.buy-service-container .small-text .warning{background:#f4f7fc}.buy-service-container .discount{margin-left:.5rem}.buy-service-container .warning-div{border:1px solid #d35400;padding:.5rem;margin-top:0;margin-bottom:1rem;border-radius:5px}.buy-service-container .el-radio-group{padding-top:.4rem}.buy-service-container .dashboard-link,.buy-service-container .switch-service{position:fixed;bottom:.5rem;z-index:999}.buy-service-container .dashboard-link{right:.5rem}.buy-service-container .switch-service{left:.5rem}.buy-service-container .checkout{margin-bottom:1rem}.buy-service-container .cal-fee{margin-bottom:3rem}.buy-service-container hr{margin-top:1rem;margin-bottom:1rem}.buy-service-container hr.short{margin-left:5rem;margin-right:5rem}.buy-service-container .el-radio{margin-left:1rem;display:block;margin-bottom:.5rem}.buy-service-container .price{color:#34495e;padding:.2rem;font-size:1rem}.buy-service-container .downgrade-warning span,.buy-service-container .price span{font-size:1rem}.buy-service-container .service-cate-warning{margin-top:1rem}.buy-service-container .plan-container.selected .select-plan-button{background:#67c23a;border-color:#67c23a}.buy-service-container .plan-container.selected .desc{padding:.2rem 1rem}.buy-service-container .plan-container.selected .select-plan-button{position:absolute;bottom:40px;left:0}.buy-service-container .plan-container.selected .price{color:#f4f7fc;margin:.5rem 0}.buy-service-container .plan-container.selected .feature{margin-top:0}.buy-service-container .plan-container.selected .extra-feature{margin-top:1rem}.buy-service-container .plan-container.selected .extra-feature h4{margin-bottom:1rem}.buy-service-container .plan-container.selected .extra-feature h4 .el-col{margin-bottom:.1rem}.buy-service-container .el-carousel .el-carousel__container{height:50vh}.buy-service-container .el-carousel__item p{color:#f4f7fc}",""]),v.exports=m},1470:function(v,P,s){"use strict";s.r(P);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"buy-service-container"},[e.buyServiceResult?e._e():t("el-row",[t("el-carousel",{ref:"carousel",attrs:{autoplay:!1,trigger:"hover",arrow:"always","indicator-position":"none"}},e._l(e.plans[e.service_cate_to_buy],function(r,_){return t("el-carousel-item",{key:r.id,staticClass:"plan-container",class:{selected:r.id==e.selectedPlanId},attrs:{name:r.name}},[t("center",[t("h1",{staticClass:"name"},[e._v(e._s(e.$t("plan_names."+r.id)))]),t("h1",{staticClass:"price"},[e._v("\u20AC"+e._s(r.full_price)),t("span",[e._v("/"+e._s(e.$t("plan_desc.month")))])]),r.quota?t("el-row",{staticClass:"feature"},[t("el-col",{staticClass:"title",attrs:{span:12}},[t("center",[t("h4",[e._v(e._s(e.$t("plan_desc.quota")))])])],1),t("el-col",{staticClass:"content",attrs:{span:12}},[t("center",[t("h4",[e._v(e._s(e.$t(r.quota))+" "),r.quota>0?t("span",[e._v("GB")]):e._e()])])],1)],1):e._e(),r.pre_quota?t("el-row",{staticClass:"feature"},[t("el-col",{staticClass:"title",attrs:{span:12}},[t("center",[t("h4",[e._v(e._s(e.$t("plan_desc.pre_quota")))])])],1),t("el-col",{staticClass:"content",attrs:{span:12}},[t("center",[t("h4",[e._v(e._s(e.$t(r.pre_quota))+" "),t("span",[e._v("GB")])])])],1)],1):e._e(),r.device_limit?t("el-row",{staticClass:"feature"},[t("el-col",{staticClass:"title",attrs:{span:12}},[t("center",[t("h4",[e._v(e._s(e.$t("plan_desc.device_limit")))])])],1),t("el-col",{staticClass:"content",attrs:{span:12}},[t("center",[t("h4",[e._v(e._s(e.$t(r.device_limit))+" ")])])],1)],1):e._e(),r.extra?t("el-row",{staticClass:"extra-feature"},[t("h4",{staticClass:"underline"},[e._v(e._s(e.$t("plan_desc.extras")))]),e._l(r.extra,function(a){return t("div",{staticClass:"extra-feature-row"},[t("el-col",{attrs:{span:24}},[t("h5",[t("i",{staticClass:"el-icon-check"}),e._v(` 
`+e._s(e.$t("plan_desc."+a)))])])],1)})],2):e._e()],1)],1)}),1),t("el-form",{ref:"form",attrs:{"label-width":"80px",size:"mini"},nativeOn:{submit:function(r){return r.preventDefault(),e.confirmPrice(!0)}}},[t("el-form-item",{attrs:{label:e.$t("plan_names.title")}},[t("el-radio-group",{attrs:{size:"medium"},model:{value:e.selectedPlanId,callback:function(r){e.selectedPlanId=r},expression:"selectedPlanId"}},e._l(e.plans[e.service_cate_to_buy],function(r,_){return t("el-radio",{key:r.id,attrs:{label:r.id},nativeOn:{click:function(a){return e.selectPlan(r,!0)}}},[e._v(e._s(e.$t("plan_names."+r.id))),e.service_to_buy&&r.id==e.service_to_buy.plan_id?t("span",{staticClass:"label success small round round-margin"},[e._v(e._s(e.$t("current_plan")))]):e._e()])}),1)],1),e.rebuyHint?t("div",{staticClass:"warning-div"},[t("center",[t("h2",[t("span",{staticClass:"warning"},[e._v("\u8BF7\u6CE8\u610F")])]),t("p",[e._v("\u60A8\u672C\u6708\u7684\u6D41\u91CF\u5DF2\u8017\u5C3D\uFF0C"),t("b",{staticClass:"underline"},[e._v("\u5982\u9700\u7ACB\u5373\u6062\u590D\u670D\u52A1")]),e._v(" \u8BF7\u8D2D\u4E70\u5347\u7EA7\u81F3 "),t("b",{staticClass:"underline"},[e._v("\u8D85\u80FD\u718A\u732B")]),e._v("\uFF0C\u6216\u8005\u7B49\u5F85\u81F3\u6B21\u67081\u65E5\u81EA\u52A8\u6062\u590D\u6D41\u91CF"),t("span",{staticClass:"subheader"}),t("br"),e._v("\u7CFB\u7EDF\u4F1A\u4E00\u5E76\u5347\u7EA7\u60A8\u672C\u6708\u4EE5\u53CA\u4F59\u4E0B\u6708\u6570\u7684\u670D\u52A1\u5E76\u8BA1\u7B97\u5DEE\u4EF7"),t("br")]),t("p",[e._v("\u8D2D\u4E70\u5B66\u672F\u718A\u732B\u5C06\u4F1A "),t("b",{staticClass:"underline"},[e._v("\u4F5C\u4E3A\u7EED\u8D39\u5904\u7406")]),t("br"),e._v("\u5EF6\u957F\u5230\u671F\u65F6\u95F4\u4F46\u4E0D\u4F1A\u7ACB\u5373\u542F\u7528\u5F53\u524D\u670D\u52A1\uFF0C\u60A8\u4ECD\u9700\u7B49\u5F85\u81F3 "),t("b",{staticClass:"underline"},[e._v("\u6B21\u67081\u65E5")]),e._v(" \u81EA\u52A8\u6062\u590D\u6D41\u91CF")])])],1):e._e(),!e.service_to_buy||e.service_to_buy.status=="off"||e.selectedPlanId==e.service_to_buy.plan_id?t("div",[t("el-form-item",{attrs:{label:e.$t("buy_length.title")}},[t("el-radio-group",{attrs:{size:"medium"},model:{value:e.extend_info.buy_length,callback:function(r){e.$set(e.extend_info,"buy_length",r)},expression:"extend_info.buy_length"}},[t("el-radio",{attrs:{label:"12"}},[e._v(e._s(e.$tc("buy_length.12"))),t("span",{staticClass:"label success round discount"},[e._v(e._s(e.$t("discount",{n:17})))])]),t("el-radio",{attrs:{label:"6"}},[e._v(e._s(e.$tc("buy_length.6"))),t("span",{staticClass:"label success round discount"},[e._v(e._s(e.$t("discount",{n:9})))])]),t("el-radio",{attrs:{label:"1"}},[e._v(e._s(e.$tc("buy_length.1")))])],1)],1)],1):e._e(),e.buyServiceResult?e._e():t("el-row",[t("el-button",{staticClass:"cal-fee full-width",attrs:{type:"success",loading:e.confirming},on:{click:function(r){return e.confirmPrice(!0)}}},[e._v(e._s(e.$t("check_price")))])],1)],1)],1),e.buyServiceResult?t("div",[t("Payment")],1):e._e(),e.buyServiceResult?e._e():t("a",{staticClass:"switch-service smooth",on:{click:function(r){e.selectServiceDialogFormVisible=!e.selectServiceDialogFormVisible}}},[e._v(e._s(e.$t("switch_service")))]),e.buyServiceResult?e._e():t("nuxt-link",{staticClass:"dashboard-link smooth",attrs:{to:"/dashboard/dashboard/"}},[e._v(e._s(e.$t("back")))]),t("ServiceSelector",{attrs:{callback:e.setServiceCateToBuy,modalVisible:e.selectServiceDialogFormVisible},on:{"update:modalVisible":function(r){e.selectServiceDialogFormVisible=r},"update:modal-visible":function(r){e.selectServiceDialogFormVisible=r}}})],1)},m=[],L=s(49),I=s(48),M=s(47),U=s(24),z=s(25),K=s(41),o=s(62),C=s(40),u=s(27),W=s(23),ce=s(39),_e=s(9),d=s(205),l=s(28),p=s(214),S=s(4),D=s(102),h=s.n(D),x=s(75),F=s(6),T=s(19),O=s(1124),E=s(13),q=s(1315),J=s.n(q),V={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]};let B=!1;try{let e=Object.defineProperty({},"passive",{get:function(){B=!0}});window.addEventListener("test",null,e)}catch(e){}var A={$(e){return typeof e!="string"?e:document.querySelector(e)},on(e,n,t,r={passive:!1}){n instanceof Array||(n=[n]);for(let _=0;_<n.length;_++)e.addEventListener(n[_],t,B?r:!1)},off(e,n,t){n instanceof Array||(n=[n]);for(let r=0;r<n.length;r++)e.removeEventListener(n[r],t)},cumulativeOffset(e){let n=0,t=0;do n+=e.offsetTop||0,t+=e.offsetLeft||0,e=e.offsetParent;while(e);return{top:n,left:t}}};const ue=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"];let g={container:"body",duration:500,lazy:!0,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function Ue(e){g=Object.assign({},g,e)}const de=()=>{let e,n,t,r,_,a,j,$,w,f,N,Q,Z,te,re,G,X,ne,se,R,oe,ae,ie,ye=y=>{!$||(ie=y,R=!0)},pe,k,le,H;function Ae(y){let b=y.scrollTop;return y.tagName.toLowerCase()==="body"&&(b=b||document.documentElement.scrollTop),b}function ze(y){let b=y.scrollLeft;return y.tagName.toLowerCase()==="body"&&(b=b||document.documentElement.scrollLeft),b}function be(){oe=A.cumulativeOffset(n),ae=A.cumulativeOffset(e),Q&&(re=ae.left-oe.left+a,ne=re-te),Z&&(X=ae.top-oe.top+a,se=X-G)}function he(y){if(R)return ge();k||(k=y),_||be(),le=y-k,H=Math.min(le/t,1),H=pe(H),Se(n,G+se*H,te+ne*H),le<t?window.requestAnimationFrame(he):ge()}function ge(){R||Se(n,X,re),k=!1,A.off(n,ue,ye),R&&N&&N(ie,e),!R&&f&&f(e)}function Se(y,b,c){Z&&(y.scrollTop=b),Q&&(y.scrollLeft=c),y.tagName.toLowerCase()==="body"&&(Z&&(document.documentElement.scrollTop=b),Q&&(document.documentElement.scrollLeft=c))}function Fe(y,b,c={}){if(typeof b=="object"?c=b:typeof b=="number"&&(c.duration=b),e=A.$(y),!e)return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+y);if(n=A.$(c.container||g.container),t=c.hasOwnProperty("duration")?c.duration:g.duration,_=c.hasOwnProperty("lazy")?c.lazy:g.lazy,r=c.easing||g.easing,a=c.hasOwnProperty("offset")?c.offset:g.offset,j=c.hasOwnProperty("force")?c.force!==!1:g.force,$=c.hasOwnProperty("cancelable")?c.cancelable!==!1:g.cancelable,w=c.onStart||g.onStart,f=c.onDone||g.onDone,N=c.onCancel||g.onCancel,Q=c.x===void 0?g.x:c.x,Z=c.y===void 0?g.y:c.y,typeof a=="function"&&(a=a(e,n)),te=ze(n),G=Ae(n),be(),R=!1,!j){const Be=n.tagName.toLowerCase()==="body"?document.documentElement.clientHeight||window.innerHeight:n.offsetHeight,xe=G,Ne=xe+Be,Oe=X-a,He=Oe+e.offsetHeight;if(Oe>=xe&&He<=Ne){f&&f(e);return}}if(w&&w(e),!se&&!ne){f&&f(e);return}return typeof r=="string"&&(r=V[r]||V.ease),pe=J.a.apply(J.a,r),A.on(n,ue,ye,{passive:!0}),window.requestAnimationFrame(he),()=>{ie=null,R=!0}}return Fe};var We=de(),Pe=s(52),je=s(22),Y=s.n(je),$e=s(209),Ce=s.n($e),we=s(210),De=s.n(we),Ee=s(1184),Ie=s(1237);function ee(e,n){var t=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Te(e))||n&&e&&typeof e.length=="number"){t&&(e=t);var r=0,_=function(){};return{s:_,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(f){throw f},f:_}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,j=!1,$;return{s:function(){t=t.call(e)},n:function(){var f=t.next();return a=f.done,f},e:function(f){j=!0,$=f},f:function(){try{!a&&t.return!=null&&t.return()}finally{if(j)throw $}}}}function Te(e,n){if(!!e){if(typeof e=="string")return fe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fe(e,n)}}function fe(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ve(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable})),t.push.apply(t,r)}return t}function Re(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ve(Object(t),!0).forEach(function(r){Object(T.a)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ve(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}Y.a.extend(Ce.a),Y.a.extend(De.a);var Le={components:{Payment:Ee.default,ServiceSelector:Ie.default},middleware:["load-rt-data","authenticated"],data:function(){return{extend_info:{buy_length:"12"},confirmed_extend_info:{fee:0},showCurrencyWarning:!1,confirming:!1,currency:"rmb",selectedPlanId:null,selectServiceDialogFormVisible:!1,service_cate_to_buy:"",raw_service_data:null,paymentPoll:null,expireTimeout:null,expired:!1}},computed:Re({need_to_pay:function(){return Math.ceil(this.confirmed_extend_info.fee-this.confirmed_extend_info.user_balance)},need_to_pay_usd:function(){return this.confirmed_extend_info.usd_amount},need_to_pay_eur:function(){return this.confirmed_extend_info.eur_amount},selectedPlan:function(){var n=ee(this.plans[this.service_cate_to_buy]),t;try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.id===this.selectedPlanId)return r}}catch(_){n.e(_)}finally{n.f()}return{}},rebuyHint:function(){if(console.log(1),this.selectedPlanId!==2||(console.log(2),!this.rawServiceData))return!1;console.log(3);var n=ee(this.rawServiceData),t;try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.cate==="allplatform")return console.log(4),r.status==="on"||(console.log(5),r.plan_id!==2)||(console.log(6),r.extra.buy_length===1)||(console.log(7),!Y()().tz("Asia/Shanghai").isSame(Y()(r.extra.buy_time).tz("Asia/Shanghai"),"month"))?!1:(console.log(8),!0)}}catch(_){n.e(_)}finally{n.f()}return!1}},Object(Pe.b)(["buyServiceResult","rawServiceData"])),beforeMount:function(){this.$store.dispatch("setConfirmedInfo",{}),this.$store.dispatch("setBuyServiceResult",!1)},mounted:function(){var n=this;return Object(F.a)(regeneratorRuntime.mark(function t(){var r,_,a,j,$;return regeneratorRuntime.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return console.log("buy-service..."),console.log("current service in use is:",n.current_service_cate),n.current_service&&(console.log("set service_cate_to_buy to:",n.current_service_cate),n.service_cate_to_buy=n.current_service_cate),_=h.a.service({text:"\u5237\u65B0\u670D\u52A1\u4FE1\u606F..."}),f.next=6,n.refreshData(!((r=n.$store.state.rawServiceData)!==null&&r!==void 0&&r.length));case 6:if(_.close(),console.log(1),n.service_to_buy){console.log(2),a=ee(n.plans[n.service_cate_to_buy]);try{for(a.s();!(j=a.n()).done;)$=j.value,$.id===n.service_to_buy.plan_id&&n.selectPlan($)}catch(N){a.e(N)}finally{a.f()}}else console.log(3),n.service_cate_to_buy&&n.selectPlan(n.plans[n.service_cate_to_buy][0]);case 9:case"end":return f.stop()}},t)}))()},beforeDestroy:function(){this.paymentPoll&&Object(O.clearInterval)(this.paymentPoll),this.expireTimeout&&Object(O.clearTimeout)(this.expireTimeout)},methods:{setServiceCateToBuy:function(n){this.service_cate_to_buy=n,this.selectPlan(this.plans[this.service_cate_to_buy][0])},reset:function(){this.paymentPoll&&Object(O.clearInterval)(this.paymentPoll),this.expireTimeout&&Object(O.clearTimeout)(this.expireTimeout),this.$store.dispatch("setBuyServiceResult",!1),this.expired=!1},selectPlan:function(n,t){if(this.selectedPlanId=n.id,this.selectedPlan.name&&this.$refs.carousel&&this.$refs.carousel.setActiveItem(this.selectedPlan.name),t){var r=de();r(".cal-fee")}},switchService:function(n){console.log(n),this.service_cate_to_buy=n,this.selectServiceDialogFormVisible=!this.selectServiceDialogFormVisible},refreshData:function(n){var t=this;return this.$store.dispatch("getUserAndService").then(function(r){console.log("got data."),console.log(r[1]),t.raw_service_data=r[1],t.$store.dispatch("runTimeState",{selected_line:{}}),E.ipcRenderer.send("user-info-update",2),r[1].raw.length===1?t.service_cate_to_buy=r[1].raw[0].cate:n&&(console.log("please choose which cate of service to buy"),t.selectServiceDialogFormVisible=!0)}).catch(function(r){return console.log("get user&service e----->",r),r==="found no valid service"?(t.$alert(t.$t("select_service.suspend.time"),t.$t("select_service.suspend.title"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}),t.selectServiceDialogFormVisible=!0):r==="service data suspended"?(t.$alert(t.$t("select_service.suspend.data"),t.$t("select_service.suspend.title"),{confirmButtonText:"OK",dangerouslyUseHTMLString:!0}).catch(function(){}),t.selectServiceDialogFormVisible=!0):r==="no service purchased"?t.selectServiceDialogFormVisible=!0:t.$message({message:"\u5237\u65B0\u670D\u52A1\u4FE1\u606F\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5...",type:"error"})})},confirmPrice:function(n){var t=this;this.confirming=!0;var r=this,_={plan_id:this.selectedPlanId,buy_length:Number(r.extend_info.buy_length),promocode:r.extend_info.promo_code,dry_run:n};console.log(_),this.$store.dispatch("confirmPrice",_).then(function(a){if(console.log("confirmPrice:",a),n)return a.selected_plan_id=t.selectedPlanId,a.promo_code=t.extend_info.promo_code,a.rmb_amount=Math.ceil(a.rmb_amount-a.user_balance),a.service_cate_to_buy=t.service_cate_to_buy,t.$store.dispatch("setConfirmedInfo",a),t.$store.dispatch("setBuyServiceResult",!0),r.confirmed_extend_info=a;r.$message({type:"success",message:"\u64CD\u4F5C\u6210\u529F\uFF01"}),r.refreshData()}).catch(function(a){var j;console.log(a);var $="\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u5F00\u5C0F\u5DEE\u4E86\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5..."+((a==null||(j=a.data)===null||j===void 0?void 0:j.message)||a);a.data&&a.data.message==="invalidPromo"&&($="\u4F18\u60E0\u7801\u65E0\u6548"),r.$message({type:"error",message:$})}).finally(function(){r.confirming=!1})}}},Me=Le,Je=s(1320),Ve=s(51),me=Object(Ve.a)(Me,i,m,!1,null,null,null),Ye=P.default=me.exports;installComponents(me,{Payment:s(1184).default,ServiceSelector:s(1237).default})}}]);
