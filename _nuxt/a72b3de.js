(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1252:function(a,l,n){var i=n(1323);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var r=n(2).default,u=r("508d592f",i,!0,{sourceMap:!1})},1322:function(a,l,n){"use strict";var i=n(1252),r=n.n(i)},1323:function(a,l,n){var i=n(1),r=i(!1);r.push([a.i,".login-container{height:100vh;width:100vw;padding:6rem 1rem 1rem}.login-container .lang{position:fixed;bottom:1rem;right:1rem}.login-container .reset{position:fixed;bottom:1rem;left:1rem}.login-container .reg{margin-top:2.5rem;text-align:center;color:#95a5a6}.login-container .reg *{color:#f4f7fc}.login-container .title{color:#f4f7fc;display:block;font-size:2.5rem}.login-container .subtitle{color:#f4f7fc;font-size:1.5rem}.login-container .el-form{display:block;margin-top:3rem}.login-container .el-form input{background:transparent;color:#f4f7fc;text-align:center;border:none;border-bottom:1px solid #95a5a6;border-radius:0;padding:2rem;font-size:1.2rem}.login-container .el-form input:focus,.login-container .el-form input:hover{border-color:#1abc9c}.login-container .el-form .el-button{margin-top:2rem;font-size:1rem;padding:.5rem 3rem;border-radius:50px}.login-container .el-form .el-button[type=success]{background:#1abc9c;border:none}.login-container .el-form a{margin-top:1rem}.login-container .token-text{margin-top:1.5rem}.login-container .token-text a{padding-bottom:0}",""]),a.exports=r},1472:function(a,l,n){"use strict";n.r(l);var i=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"login-container"},[t("el-row",{attrs:{type:"flex",justify:"center",align:"center"}},[t("center",[t("h1",{staticClass:"title"},[e._v(e._s(e.$t("login.title")))])])],1),t("el-row",[t("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.loginInfo},nativeOn:{submit:function(s){return s.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("el-input",{attrs:{type:"email",placeholder:e.$t("login.email"),"prefix-icon":"el-icon-caret-right"},model:{value:e.loginInfo.email,callback:function(s){e.$set(e.loginInfo,"email",s)},expression:"loginInfo.email"}}),t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.state!=="reset",expression:"state !== 'reset'"}],attrs:{type:"password",placeholder:e.$t("login.password"),"prefix-icon":"el-icon-caret-right"},model:{value:e.loginInfo.password,callback:function(s){e.$set(e.loginInfo,"password",s)},expression:"loginInfo.password"}}),t("el-input",{directives:[{name:"show",rawName:"v-show",value:e.state=="signup",expression:"state == 'signup'"}],attrs:{type:"text",placeholder:e.$t("login.ref"),"prefix-icon":"el-icon-caret-right"},model:{value:e.loginInfo.ref,callback:function(s){e.$set(e.loginInfo,"ref",s)},expression:"loginInfo.ref"}}),t("center",[t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.state=="login",expression:"state == 'login'"}],attrs:{round:"","native-type":"submit",type:"primary",loading:e.logging_in}},[e._v(e._s(e.$t("login.button")))]),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.state=="reset",expression:"state == 'reset'"}],attrs:{round:"","native-type":"submit",type:"warning",loading:e.logging_in}},[e._v(e._s(e.$t("login.reset.button")))]),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.state=="signup",expression:"state == 'signup'"}],attrs:{round:"","native-type":"submit",type:"primary",loading:e.logging_in}},[e._v(e._s(e.$t("login.signup_button")))])],1)],1),t("el-card",{directives:[{name:"show",rawName:"v-show",value:e.state=="reset"&&e.email_token,expression:"state == 'reset' && email_token"}],staticClass:"token-text"},[t("center",[t("h4",[e._v("\u91CD\u7F6E\u5BC6\u7801\u7684\u90AE\u4EF6\u5DF2\u53D1\u5F80\u60A8\u7684\u90AE\u7BB1")]),t("br")]),t("h5",[e._v("\u82E5\u6536\u4E0D\u5230\u91CD\u7F6E\u90AE\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u572830\u5206\u949F\u5185\u901A\u8FC7\u60A8\u7684\u90AE\u7BB1\u53D1\u9001"),t("b",[e._v("\u6807\u9898")]),e._v("\u4E3A"),t("code",[e._v(e._s(e.email_token)+":")]),e._v("\xA0+  "),t("code",[e._v("\u60A8\u7684\u65B0\u5BC6\u7801")]),e._v("\u7684\u90AE\u4EF6\u5230"),t("br"),t("center",[t("a",{attrs:{href:e.mail_link}},[e._v("passwordchange@mg.1s.life")])]),t("br"),e._v("\u4F8B\u5982\uFF0C\u53D1\u9001\u90AE\u4EF6\u6807\u9898\u4E3A"),t("code",[e._v(e._s(e.email_token)+":123123")]),e._v("\u5C06\u4F1A\u4FEE\u6539\u60A8\u7684\u8D26\u53F7\u5BC6\u7801\u4E3A"),t("code",[e._v("123123")]),t("br"),e._v("\u90AE\u4EF6\u5185\u5BB9\u53EF\u4EFB\u610F\u6216\u7559\u7A7A")],1)],1)],1),t("p",{staticClass:"reg"},[t("a",{directives:[{name:"show",rawName:"v-show",value:e.state=="login",expression:"state == 'login'"}],on:{click:function(s){e.state="signup"}}},[e._v(e._s(e.$t("login.signup_hint")))]),t("a",{directives:[{name:"show",rawName:"v-show",value:e.state=="signup",expression:"state == 'signup'"}],on:{click:function(s){e.state="login"}}},[e._v(e._s(e.$t("login.text")))])]),t("el-row",[t("a",{staticClass:"lang",on:{click:e.switchLang}},[e._v(e._s(e.$t("change_lang_button")))]),t("a",{directives:[{name:"show",rawName:"v-show",value:e.state=="login",expression:"state == 'login'"}],staticClass:"reset",on:{click:function(s){e.state="reset"}}},[e._v(e._s(e.$t("login.reset.text")))]),t("a",{directives:[{name:"show",rawName:"v-show",value:e.state=="reset",expression:"state == 'reset'"}],staticClass:"reset",on:{click:function(s){e.state="login"}}},[e._v(e._s(e.$t("login.text")))])]),t("el-dialog",{attrs:{visible:e.zip_prompt,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"80%",center:""},on:{"update:visible":function(s){e.zip_prompt=s}}},[t("center",[t("h1",{staticClass:"warning"},[t("b",[e._v("\u8BF7\u52FF\u4ECE\u538B\u7F29\u5305\u91CC\u76F4\u63A5\u8FD0\u884C")])]),t("br"),t("h4",[t("b",[e._v("\u770B\u8D77\u6765\u60A8\u76F4\u63A5\u4ECE\u538B\u7F29\u5305\u91CC\u8FD0\u884C\u7740\u5BA2\u6237\u7AEF\uFF0C\u8BF7\u5148\u5C06\u6240\u6709\u6587\u4EF6\u89E3\u538B\u5230\u7535\u8111\u91CC\uFF0C\u7136\u540E\u8FD0\u884C\u89E3\u538B\u51FA\u6765\u7684\u5BA2\u6237\u7AEF")])])]),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("center",[t("el-button",{attrs:{type:"success"},on:{click:e.exit}},[e._v("\u9000\u51FA")])],1)],1)],1)],1)},r=[],u=n(9),m=n(63),p=n(76),_=n(13),c={middleware:["load-rt-data"],data:function(){return console.log(this),console.log("log from login_app..."),console.log(this.$eStore),console.log(this.$store),{logging_in:!1,state:"login",zip_prompt:!1,loginInfo:{email:"",password:"",ref:""},email_token:null}},computed:{mail_link:function(){return"mailto:passwordchange@mg.1s.life?subject=".concat(this.email_token,":\u60A8\u7684\u65B0\u5BC6\u7801")}},created:function(){},mounted:function(){try{_.remote.process.execPath.includes("Temp")&&(this.zip_prompt=!0)}catch(o){console.log(o);try{this.$sentry.captureException(o)}catch(t){console.log("capture error failed:",t)}confirm("Unexpected error, please login again. If the error persists, contact support at https://pandafan.website \u672A\u77E5\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u767B\u5165\u5BA2\u6237\u7AEF\u3002\u82E5\u9519\u8BEF\u6301\u7EED\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D\uFF1Ahttps://pandafan.website")&&_.ipcRenderer.send("reset")}},methods:{requestPasswordReset:function(){var o=this;if(!this.loginInfo.email)return this.$message({message:"\u8BF7\u586B\u5199\u6CE8\u518C\u90AE\u7BB1",type:"error"}),this.logging_in=!1;this.$store.dispatch("requestPasswordReset",{email:this.loginInfo.email}).then(function(t){console.log(t),alert(`\u90AE\u4EF6\u6B63\u5728\u53D1\u9001\u81F3\u8BE5\u90AE\u7BB1\uFF0C\u8BF7\u70B9\u51FB\u90AE\u4EF6\u5185\u94FE\u63A5\u83B7\u53D6\u65B0\u5BC6\u7801\u3002
\u82E5*30\u5206\u949F*\u4F9D\u7136\u672A\u6536\u5230\u90AE\u4EF6\uFF0C\u8BF7\u4E0E\u7F51\u7AD9\u5BA2\u670D\u8054\u7CFB`),o.email_token=t.email_token},function(t){var s;return t=t.data,((s=t)===null||s===void 0?void 0:s.message)==="illegal email"||t.message==="not found"?o.$message({message:"\u672A\u627E\u5230\u6B64\u90AE\u7BB1\u5730\u5740\u3002\u82E5\u60A8\u786E\u8BA4\u4EE5\u6B64\u90AE\u7BB1\u6CE8\u518C\uFF0C\u8BF7\u8054\u7CFB\u7F51\u7AD9\u5BA2\u670D\u3002",type:"error"}):o.$message({message:"\u670D\u52A1\u5668\u5904\u7406\u51FA\u9519\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5:"+t.message,type:"error"})}).finally(function(){o.logging_in=!1})},signUp:function(){var o=this;if(console.log(this.loginInfo),!this.loginInfo.email||!this.loginInfo.password)return this.$message({message:"\u8BF7\u586B\u5199\u6CE8\u518C\u90AE\u7BB1\u548C\u5BC6\u7801",type:"error"}),this.logging_in=!1;this.$store.dispatch("signUp",this.loginInfo).then(function(t){return console.log("new user:",t),o.logIn()}).catch(function(t){console.log(t.data);var s="\u672A\u77E5\u9519\u8BEF\uFF0C\u53EF\u80FD\u670D\u52A1\u5668\u62BD\u98CE\u4E86\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5 ".concat(t.data);return t.data&&t.data.message==="already exists"&&(s="\u8BE5\u8D26\u53F7\u5DF2\u6CE8\u518C\uFF0C\u8BF7\u76F4\u63A5\u767B\u5F55"),o.$message({message:s,type:"error"})}).finally(function(){o.logging_in=!1})},logIn:function(){var o=this;if(!this.loginInfo.email||!this.loginInfo.password)return this.$message({message:"\u8BF7\u586B\u5199\u6CE8\u518C\u90AE\u7BB1\u548C\u5BC6\u7801",type:"error"}),this.logging_in=!1;this.$store.dispatch("login",this.loginInfo).then(function(t){console.log("sessions_body",t),o.$message({message:"\u767B\u5F55\u6210\u529F\uFF0C\u6B63\u5728\u52A0\u8F7D\u670D\u52A1\u4FE1\u606F...",type:"success"}),o.$store.dispatch("getUserAndService").then(function(s){console.log("got data."),console.log(s),o.loading_data=!1,o.logging_in=!1,o.$router.push({path:"/dashboard/dashboard/"})}).catch(function(s){console.log("get user&service e----->",s),o.logging_in=!1;var w="failed..."+s;return s==="found no valid service"&&o.$message({message:o.$t("select_service.suspend.time"),type:"error"}),s==="service data suspended"&&o.$message({message:o.$t("select_service.suspend.data"),type:"error"}),s==="no service purchased"&&o.$message({message:o.$t("select_service.suspend.empty"),type:"info"}),o.$router.push({path:"/buy-service/"})})}).catch(function(t){o.logging_in=!1,console.log("e-->>",t);var s="\u672A\u77E5\u9519\u8BEF\uFF0C\u53EF\u80FD\u670D\u52A1\u5668\u62BD\u98CE\u4E86\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5 ".concat(t);return t.data&&t.data.message==="no such user"&&(s="\u672A\u627E\u5230\u8BE5\u8D26\u53F7"),t.data&&t.data.message==="email/password not match"&&(s="\u8D26\u53F7/\u5BC6\u7801\u9519\u8BEF"),o.$message({message:s,type:"error"})})},onSubmit:function(){return this.logging_in=!0,this.state==="reset"?this.requestPasswordReset():this.state==="signup"?this.signUp():this.logIn()},exit:function(){_.remote.app.quit()}}},g=c,v=n(1322),d=n(51),f=Object(d.a)(g,i,r,!1,null,null,null),h=l.default=f.exports}}]);
