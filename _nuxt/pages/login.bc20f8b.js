(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1053:function(e,t,n){"use strict";var o=n(993);n.n(o).a},1054:function(e,t,n){(t=n(51)(!1)).push([e.i,".login-container{height:100vh;width:100vw;padding:6rem 1rem 1rem}.login-container .lang{position:fixed;bottom:1rem;right:1rem}.login-container .reset{position:fixed;bottom:1rem;left:1rem}.login-container .reg{margin-top:2.5rem;text-align:center;color:#95a5a6}.login-container .reg *{color:#f4f7fc}.login-container .title{color:#f4f7fc;display:block;font-size:2.5rem}.login-container .subtitle{color:#f4f7fc;font-size:1.5rem}.login-container .el-form{display:block;margin-top:3rem}.login-container .el-form input{background:transparent;color:#f4f7fc;text-align:center;border:none;border-bottom:1px solid #95a5a6;border-radius:0;padding:2rem;font-size:1.2rem}.login-container .el-form input:focus,.login-container .el-form input:hover{border-color:#1abc9c}.login-container .el-form .el-button{margin-top:2rem;font-size:1rem;padding:.5rem 3rem;border-radius:50px}.login-container .el-form .el-button[type=success]{background:#1abc9c;border:none}.login-container .el-form a{margin-top:1rem}.login-container .token-text{margin-top:1.5rem}.login-container .token-text a{padding-bottom:0}",""]),e.exports=t},1223:function(e,t,n){"use strict";n.r(t);n(16),n(66);var o,r,l,c,m,d=n(4),f=(n(95),n(128),n(17)),h={middleware:["load-rt-data"],data:function(){return console.log(this),console.log("log from login_app..."),console.log(this.$eStore),console.log(this.$store),{logging_in:!1,state:"login",zip_prompt:!1,loginInfo:{email:"",password:"",ref:""},email_token:null}},computed:{mail_link:function(){return"mailto:passwordchange@mg.1s.life?subject=".concat(this.email_token,":您的新密码")}},created:function(){},mounted:function(){f.remote.process.execPath.includes("Temp")&&(this.zip_prompt=!0)},methods:{requestPasswordReset:(m=Object(d.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.loginInfo.email){e.next=3;break}return this.$message({message:"请填写注册邮箱",type:"error"}),e.abrupt("return",this.logging_in=!1);case 3:this.$store.dispatch("requestPasswordReset",{email:this.loginInfo.email}).then((function(body){console.log(body),alert("邮件正在发送至该邮箱，请点击邮件内链接获取新密码。\n若*30分钟*依然未收到邮件，请与网站客服联系"),t.email_token=body.email_token}),(function(e){var n;return"illegal email"==(null===(n=e=e.data)||void 0===n?void 0:n.message)||"not found"==e.message?t.$message({message:"未找到此邮箱地址。若您确认以此邮箱注册，请联系网站客服。",type:"error"}):t.$message({message:"服务器处理出错，请稍后重试:"+e.message,type:"error"})})).finally((function(){t.logging_in=!1}));case 4:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)}),signUp:(c=Object(d.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(this.loginInfo),this.loginInfo.email&&this.loginInfo.password){e.next=4;break}return this.$message({message:"请填写注册邮箱和密码",type:"error"}),e.abrupt("return",this.logging_in=!1);case 4:this.$store.dispatch("signUp",this.loginInfo).then((function(body){return console.log("new user:",body),t.logIn()})).catch((function(e){console.log(e.data);var n="未知错误，可能服务器抽风了，请稍后再试 ".concat(e.data);return e.data&&"already exists"==e.data.message&&(n="该账号已注册，请直接登录"),t.$message({message:n,type:"error"})})).finally((function(){t.logging_in=!1}));case 5:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),logIn:(l=Object(d.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.loginInfo.email&&this.loginInfo.password){e.next=3;break}return this.$message({message:"请填写注册邮箱和密码",type:"error"}),e.abrupt("return",this.logging_in=!1);case 3:this.$store.dispatch("login",this.loginInfo).then((function(body){console.log("sessions_body",body),t.$message({message:"登录成功，正在加载服务信息...",type:"success"}),t.$store.dispatch("getUserAndService").then((function(e){console.log("got data."),console.log(e),t.loading_data=!1,t.logging_in=!1,t.$router.push({path:"/dashboard/dashboard/"})})).catch((function(e){return console.log("get user&service e-----\x3e",e),t.logging_in=!1,"found no valid service"==e&&t.$message({message:t.$t("select_service.suspend.time"),type:"error"}),"service data suspended"==e&&t.$message({message:t.$t("select_service.suspend.data"),type:"error"}),"no service purchased"==e&&t.$message({message:t.$t("select_service.suspend.empty"),type:"info"}),t.$router.push({path:"/buy-service/"})}))})).catch((function(e){t.logging_in=!1,console.log("e--\x3e>",e);var n="未知错误，可能服务器抽风了，请稍后再试 ".concat(e);return e.data&&"no such user"==e.data.message&&(n="未找到该账号"),e.data&&"email/password not match"==e.data.message&&(n="账号/密码错误"),t.$message({message:n,type:"error"})}));case 4:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)}),onSubmit:(r=Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.logging_in=!0,"reset"!=this.state){e.next=3;break}return e.abrupt("return",this.requestPasswordReset());case 3:if("signup"!=this.state){e.next=5;break}return e.abrupt("return",this.signUp());case 5:return e.abrupt("return",this.logIn());case 6:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),exit:(o=Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.remote.app.quit();case 1:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)})}},v=(n(1053),n(38)),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-row",{attrs:{type:"flex",justify:"center",align:"center"}},[n("center",[n("h1",{staticClass:"title"},[e._v(e._s(e.$t("login.title")))])])],1),n("el-row",[n("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.loginInfo},nativeOn:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("el-input",{attrs:{type:"email",placeholder:e.$t("login.email"),"prefix-icon":"el-icon-caret-right"},model:{value:e.loginInfo.email,callback:function(t){e.$set(e.loginInfo,"email",t)},expression:"loginInfo.email"}}),n("el-input",{directives:[{name:"show",rawName:"v-show",value:"reset"!==e.state,expression:"state !== 'reset'"}],attrs:{type:"password",placeholder:e.$t("login.password"),"prefix-icon":"el-icon-caret-right"},model:{value:e.loginInfo.password,callback:function(t){e.$set(e.loginInfo,"password",t)},expression:"loginInfo.password"}}),n("el-input",{directives:[{name:"show",rawName:"v-show",value:"signup"==e.state,expression:"state == 'signup'"}],attrs:{type:"text",placeholder:e.$t("login.ref"),"prefix-icon":"el-icon-caret-right"},model:{value:e.loginInfo.ref,callback:function(t){e.$set(e.loginInfo,"ref",t)},expression:"loginInfo.ref"}}),n("center",[n("el-button",{directives:[{name:"show",rawName:"v-show",value:"login"==e.state,expression:"state == 'login'"}],attrs:{round:"","native-type":"submit",type:"primary",loading:e.logging_in}},[e._v(e._s(e.$t("login.button")))]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:"reset"==e.state,expression:"state == 'reset'"}],attrs:{round:"","native-type":"submit",type:"warning",loading:e.logging_in}},[e._v(e._s(e.$t("login.reset.button")))]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:"signup"==e.state,expression:"state == 'signup'"}],attrs:{round:"","native-type":"submit",type:"primary",loading:e.logging_in}},[e._v(e._s(e.$t("login.signup_button")))])],1)],1),n("el-card",{directives:[{name:"show",rawName:"v-show",value:"reset"==e.state&&e.email_token,expression:"state == 'reset' && email_token"}],staticClass:"token-text"},[n("center",[n("h4",[e._v("重置密码的邮件已发往您的邮箱")]),n("br")]),n("h5",[e._v("若收不到重置邮件，您可以在30分钟内通过您的邮箱发送"),n("b",[e._v("标题")]),e._v("为"),n("code",[e._v(e._s(e.email_token)+":")]),e._v(" +  "),n("code",[e._v("您的新密码")]),e._v("的邮件到"),n("br"),n("center",[n("a",{attrs:{href:e.mail_link}},[e._v("passwordchange@mg.1s.life")])]),n("br"),e._v("例如，发送邮件标题为"),n("code",[e._v(e._s(e.email_token)+":123123")]),e._v("将会修改您的账号密码为"),n("code",[e._v("123123")]),n("br"),e._v("邮件内容可任意或留空")],1)],1)],1),n("p",{staticClass:"reg"},[n("a",{directives:[{name:"show",rawName:"v-show",value:"login"==e.state,expression:"state == 'login'"}],on:{click:function(t){e.state="signup"}}},[e._v(e._s(e.$t("login.signup_hint")))]),n("a",{directives:[{name:"show",rawName:"v-show",value:"signup"==e.state,expression:"state == 'signup'"}],on:{click:function(t){e.state="login"}}},[e._v(e._s(e.$t("login.text")))])]),n("el-row",[n("a",{staticClass:"lang",on:{click:e.switchLang}},[e._v(e._s(e.$t("change_lang_button")))]),n("a",{directives:[{name:"show",rawName:"v-show",value:"login"==e.state,expression:"state == 'login'"}],staticClass:"reset",on:{click:function(t){e.state="reset"}}},[e._v(e._s(e.$t("login.reset.text")))]),n("a",{directives:[{name:"show",rawName:"v-show",value:"reset"==e.state,expression:"state == 'reset'"}],staticClass:"reset",on:{click:function(t){e.state="login"}}},[e._v(e._s(e.$t("login.text")))])]),n("el-dialog",{attrs:{visible:e.zip_prompt,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"80%",center:""},on:{"update:visible":function(t){e.zip_prompt=t}}},[n("center",[n("h1",{staticClass:"warning"},[n("b",[e._v("请勿从压缩包里直接运行")])]),n("br"),n("h4",[n("b",[e._v("看起来您直接从压缩包里运行着客户端，请先将所有文件解压到电脑里，然后运行解压出来的客户端")])])]),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("center",[n("el-button",{attrs:{type:"success"},on:{click:e.exit}},[e._v("退出")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},993:function(e,t,n){var content=n(1054);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(52).default)("172edb0a",content,!0,{sourceMap:!1})}}]);