webpackJsonp([1],{"2woP":function(e,t){},"8KO2":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("7+uW"),i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),s("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("Community Chat")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),s("br"),e._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("vue-router")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("vuex")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("vue-loader")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("awesome-vue")])])])}]},n=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(e){s("gu2T")},"data-v-4241e014",null).exports,o=s("JnRc"),a=s.n(o),c={name:"Sign",data:function(){var e=this,t=function(e,t,s){if(!t)return s(new Error("用户名不能为空"));setTimeout(function(){t.length<6||t.length>18?s(new Error("用户名长度要在6-18个字符")):t<18?s(new Error("必须年满18岁")):s()},1e3)};return{loginForm:{pass:"",name:""},ruleForm2:{pass:"",checkPass:"",name:""},loginRules:{pass:[{validator:function(e,t,s){""===t?s(new Error("请输入密码")):((t.length<6||t.length>15)&&s(new Error("密码长度要在6-15个字符")),s())},trigger:"blur"}],name:[{validator:t,trigger:"blur"}]},rules2:{pass:[{validator:function(t,s,r){""===s?r(new Error("请输入密码")):(""!==e.ruleForm2.checkPass&&e.$refs.ruleForm2.validateField("checkPass"),r())},trigger:"blur"}],checkPass:[{validator:function(t,s,r){""===s?r(new Error("请再次输入密码")):s!==e.ruleForm2.pass?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}],name:[{validator:t,trigger:"blur"}]}}},methods:{resetForm:function(e){this.$refs[e].resetFields()},signUp:function(e){var t=this,s=new a.a.User;s.setUsername(e.name),s.setPassword(e.pass),s.signUp().then(function(s){t.$store.commit("showSuccessMsg","注册成功!"),t.$store.commit("signInToggle"),t.$data.loginForm.name=e.name,t.$data.loginForm.pass=e.pass},function(e){switch(e.code){case 210:t.$store.commit("showErrorMsg","用户名与密码不匹配");break;case 202:t.$store.commit("showErrorMsg","用户名已经被占用");break;case 201:t.$store.commit("showErrorMsg","没有提供密码，或者密码为空。");break;case 403:t.$store.commit("showErrorMsg","当应用在控制台中的相关服务选项未打开，如 Class 关闭了权限，或是 User 缺失了 session 信息等情况下，云端会统一地返回 403 错误码及不同的错误信息，代表当前请求因权限不够而被拒");break;case 401:t.$store.commit("showErrorMsg","未经授权的访问，没有提供 App id，或者 App id 和 App key 校验失败，请检查配置。");break;default:t.$store.commit("showErrorMsg",e)}})},login:function(e){var t=this;a.a.User.logIn(e.name,e.pass).then(function(e){t.$store.commit("showSuccessMsg","登陆成功!"),t.$store.commit("loginSuccessed"),t.$store.commit("updateLoginedUser",e),t.$store.commit("loadResume"),t.closeDialog()},function(e){switch(e.code){case 210:t.$store.commit("showErrorMsg","用户名与密码不匹配");break;case 201:t.$store.commit("showErrorMsg","没有提供密码，或者密码为空。");break;case 211:t.$store.commit("showErrorMsg","找不到用户。");break;case 217:t.$store.commit("showErrorMsg","无效的用户名，不允许空白用户名。");break;case 403:t.$store.commit("showErrorMsg","当应用在控制台中的相关服务选项未打开，如 Class 关闭了权限，或是 User 缺失了 session 信息等情况下，云端会统一地返回 403 错误码及不同的错误信息，代表当前请求因权限不够而被拒");break;case 401:t.$store.commit("showErrorMsg","未经授权的访问，没有提供 App id，或者 App id 和 App key 校验失败，请检查配置。");break;default:t.$store.commit("showErrorMsg",e)}})},signUpToggle:function(){this.$store.commit("signUpToggle")},signInToggle:function(){this.$store.commit("signInToggle")},closeDialog:function(){this.$store.commit("closeDialog")}},computed:{activeType:function(){return this.$store.state.activeType},dialogStatus:function(){return this.$store.state.dialogStatus},isLogined:function(){return this.$store.state.loginSuccess}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogStatus,expression:"dialogStatus"}],staticClass:"dialog"},[s("section",{attrs:{id:"sign"}},[s("div",{staticClass:"tab"},[s("span",{staticClass:"tabList",class:{active:"signIn"==e.activeType},attrs:{value:"signIn"},on:{click:function(t){e.signInToggle(),e.resetForm("ruleForm2")}}},[e._v("登录")]),e._v(" · \n      "),s("span",{staticClass:"tabList",class:{active:"signUp"==e.activeType},attrs:{value:"signUp"},on:{click:function(t){e.signUpToggle(),e.resetForm("loginForm")}}},[e._v("注册")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"signUp"==e.activeType,expression:"activeType=='signUp'"}],staticClass:"signUp"},[s("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"70px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"name"}},[s("el-input",{attrs:{icon:"user"},model:{value:e.ruleForm2.name,callback:function(t){e.$set(e.ruleForm2,"name",t)},expression:"ruleForm2.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"pass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.pass,callback:function(t){e.$set(e.ruleForm2,"pass",t)},expression:"ruleForm2.pass"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.signUp(e.ruleForm2)}}},[e._v("注册")]),e._v(" "),s("el-button",{on:{click:function(t){e.resetForm("ruleForm2")}}},[e._v("重置")])],1)],1)],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"signIn"==e.activeType,expression:"activeType=='signIn'"}],staticClass:"signIn"},[s("el-form",{ref:"loginForm",staticClass:"demo-ruleForm",attrs:{model:e.loginForm,"status-icon":"",rules:e.loginRules,"label-width":"70px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"name"}},[s("el-input",{model:{value:e.loginForm.name,callback:function(t){e.$set(e.loginForm,"name",t)},expression:"loginForm.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"pass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.loginForm.pass,callback:function(t){e.$set(e.loginForm,"pass",t)},expression:"loginForm.pass"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.login(e.loginForm)}}},[e._v("登陆")])],1)],1)],1)])])},staticRenderFns:[]},u=s("VU/8")(c,l,!1,function(e){s("xEgb")},null,null).exports,m={components:{Sign:u},name:"Topbar",computed:{activeType:function(){return this.$store.state.activeType},dialogStatus:function(){return this.$store.state.dialogStatus},isPreview:function(){return this.$store.state.isPreview},loginedUser:function(){return this.$store.state.loginedUser.attributes.username},isLoginSuccessed:function(){return this.$store.state.loginSuccess}},methods:{signUpToggle:function(){this.$store.commit("signUpToggle")},signInToggle:function(){this.$store.commit("signInToggle")},showDialog:function(){this.$store.commit("showDialog")},logOut:function(){this.$store.commit("userLogout"),this.$store.commit("showSuccessMsg","登出成功!")}}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isPreview,expression:"!isPreview"}],staticClass:"topbar"},[s("div",{staticClass:"logo"},[e._v("\n    Vue Resume\n  ")]),e._v(" "),s("div",{staticClass:"buttonbox"},[e.isLoginSuccessed?e._e():s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.signUpToggle(),e.showDialog()}}},[e._v("注册")]),e._v(" "),e.isLoginSuccessed?e._e():s("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.signInToggle(),e.showDialog()}}},[e._v("登录")]),e._v(" "),e.isLoginSuccessed?s("div",{attrs:{id:"username"}},[e._v("Welcome,"+e._s(e.loginedUser))]):e._e(),e._v(" "),e.isLoginSuccessed?s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.logOut()}}},[e._v("登出")]):e._e()],1)])},staticRenderFns:[]},g=s("VU/8")(m,v,!1,function(e){s("8KO2")},null,null).exports,p=s("fZjL"),f=s.n(p),d={data:function(){return{paneHeight:0,currentTab:0}},computed:{resume:function(){return this.$store.state.resume},isPreview:function(){return this.$store.state.isPreview}},methods:{resumeUpdate:function(e,t,s,r){this.$store.commit("updateResume",{itemKey:e,key:t,idx:s,val:r})},addForm:function(e){var t={};f()(this.resume[e][0]).map(function(e){t[e]=""}),this.resume[e].push(t)},removeForm:function(e,t){t.length>1?t.splice(t.indexOf(e),1):this.$store.commit("showErrorMsg","不能再少了")}},mounted:function(){var e=this;this.paneHeight=this.$refs.editor.offsetHeight-246,window.onresize=function(){e.paneHeight=e.$refs.editor.offsetHeight-246,e.paneHeight<300&&(e.paneHeight=300)}}},h={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isPreview,expression:"!isPreview"}],ref:"editor",staticClass:"editor"},[s("ol",{staticClass:"container"},e._l(e.resume,function(t,r,i){return s("li",[s("div",{staticClass:"edi-header",on:{click:function(t){e.currentTab=i}}},[s("i",{staticClass:"el-icon-arrow-right",class:{active:e.currentTab===i}}),e._v("\n        "+e._s(r)+"\n      ")]),e._v(" "),s("div",{staticClass:"panes",class:{active:e.currentTab===i},style:"height:"+e.paneHeight+"px"},[e._l(t,function(i,n){return"工作经历"===r||"教育经历"===r?s("el-form",{staticClass:"form-container"},[s("el-form-item",{attrs:{label:Object.keys(i)[0]}},[s("el-input",{attrs:{type:"text",value:i[Object.keys(i)[0]]},nativeOn:{input:function(t){e.resumeUpdate(r,Object.keys(i)[0],n,t.target.value)}}})],1),e._v(" "),s("el-form-item",{attrs:{label:Object.keys(i)[1]}},[s("el-input",{attrs:{type:"text",value:i[Object.keys(i)[1]]},nativeOn:{input:function(t){e.resumeUpdate(r,Object.keys(i)[1],n,t.target.value)}}})],1),e._v(" "),s("el-form-item",{attrs:{label:Object.keys(i)[2]}},[s("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:3},value:i[Object.keys(i)[2]]},nativeOn:{input:function(t){e.resumeUpdate(r,Object.keys(i)[2],n,t.target.value)}}})],1),e._v(" "),s("i",{staticClass:"el-icon-error",on:{click:function(s){e.removeForm(i,t)}}})],1):e._e()}),e._v(" "),e._l(t,function(i,n){return"项目经历"===r?s("el-form",{staticClass:"form-container"},[s("el-form-item",{attrs:{label:Object.keys(i)[0]}},[s("el-input",{attrs:{type:"text",value:i[Object.keys(i)[0]]},nativeOn:{input:function(t){e.resumeUpdate(r,Object.keys(i)[0],n,t.target.value)}}})],1),e._v(" "),s("el-form-item",{attrs:{label:Object.keys(i)[1]}},[s("el-input",{attrs:{type:"textarea",rows:2,value:i[Object.keys(i)[1]]},nativeOn:{input:function(t){e.resumeUpdate(r,Object.keys(i)[1],n,t.target.value)}}})],1),e._v(" "),s("i",{staticClass:"el-icon-error",on:{click:function(s){e.removeForm(i,t)}}})],1):e._e()}),e._v(" "),e._l(t,function(i,n){return"基本信息"===r||"联系方式"===r||"工作技能"===r?s("el-form",{staticClass:"form-container"},[e._l(i,function(t,i){return s("el-form-item",{attrs:{label:i}},[s("el-input",{attrs:{type:"text",value:t},nativeOn:{input:function(t){e.resumeUpdate(r,i,n,t.target.value)}}})],1)}),e._v(" "),"工作技能"===r?s("i",{staticClass:"el-icon-error",on:{click:function(s){e.removeForm(i,t)}}}):e._e()],2):e._e()}),e._v(" "),"工作经历"==r||"教育经历"==r||"项目经历"==r||"工作技能"==r?s("el-button",{attrs:{type:"primary",title:"添加一项"+r},on:{click:function(t){e.addForm(r)}}},[e._v("\n          添加"+e._s(r))]):e._e()],2)])}))])},staticRenderFns:[]},_=s("VU/8")(d,h,!1,function(e){s("oiP+")},null,null).exports,w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"preview"},[s("section",{staticClass:"profile "},[s("h1",{staticClass:"name"},[e._v(e._s(e.resume.基本信息[0].姓名))]),e._v(" "),s("div",{staticClass:"position"},[e._v(e._s(e.resume.基本信息[0].职位))]),e._v(" "),s("div",{staticClass:"birth"},[e._v(e._s(e.resume.基本信息[0].城市)+" | "+e._s(e.resume.基本信息[0].出生日期))]),e._v(" "),s("div",{staticClass:"information"},[s("span",[e._v("Phone : "+e._s(e.resume.联系方式[0].电话号码))]),e._v(" "),s("span",[e._v("||")]),e._v(" "),s("span",[e._v("E-mail : "+e._s(e.resume.联系方式[1].邮箱))]),e._v(" "),s("span",[e._v("||")]),e._v(" "),s("span",[e._v("Github : "),s("a",{attrs:{href:"https://"+e.resume.联系方式[2].github}},[e._v(e._s(e.resume.联系方式[2].github))])])])]),e._v(" "),s("section",{staticClass:"edu-history"},[s("h3",[e._v("教育经历")]),e._v(" "),e._l(e.resume.教育经历,function(t){return s("div",{staticClass:"container"},[s("div",{staticClass:"date"},[e._v(e._s(t.时间))]),e._v(" "),s("div",{staticClass:"item-name"},[e._v(e._s(t.学校))]),e._v(" "),s("p",[e._v(e._s(t.详情))])])})],2),e._v(" "),s("section",{staticClass:"project"},[s("h3",[e._v("项目经历")]),e._v(" "),e._l(e.resume.项目经历,function(t){return s("div",{staticClass:"container"},[s("div",{staticClass:"item-name"},[e._v(e._s(t.项目))]),e._v(" "),s("p",[e._v(e._s(t.详情))])])})],2),e._v(" "),s("section",{staticClass:"skill"},[s("h3",[e._v("工作技能")]),e._v(" "),e._l(e.resume.工作技能,function(t){return s("div",{staticClass:"container"},[s("p",[e._v(e._s(t.内容))])])})],2),e._v(" "),s("section",{staticClass:"work-history"},[s("h3",[e._v("工作经历")]),e._v(" "),e._l(e.resume.工作经历,function(t){return s("div",{staticClass:"container"},[s("div",{staticClass:"date"},[e._v(e._s(t.时间))]),e._v(" "),s("div",{staticClass:"item-name"},[e._v(e._s(t.公司))]),e._v(" "),s("p",[e._v(e._s(t.详情))])])})],2)])},staticRenderFns:[]},b=s("VU/8")({computed:{resume:function(){return this.$store.state.resume}},methods:{}},w,!1,function(e){s("ng+S")},null,null).exports,k={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"btn"},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isPreview,expression:"isPreview"}],attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.togglePreview()}}},[e._v("编辑")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isPreview,expression:"!isPreview"}],attrs:{type:"primary",icon:"el-icon-picture"},on:{click:function(t){e.togglePreview()}}},[e._v("预览")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isLogined,expression:"isLogined"}],attrs:{type:"primary",icon:"el-icon-document"},on:{click:function(t){e.saveResume()}}},[e._v("保存")])],1)},staticRenderFns:[]},y=s("VU/8")({name:"Btn",computed:{isPreview:function(){return this.$store.state.isPreview},isLogined:function(){return this.$store.state.loginSuccess}},methods:{togglePreview:function(){this.$store.commit("togglePreview")},saveResume:function(){this.$store.commit("saveResume"),this.$store.commit("showSuccessMsg","已保存到云端")}}},k,!1,function(e){s("d9en")},null,null).exports,$={render:function(){var e=this.$createElement,t=this._self._c||e;return 0==this.msgCount?t("div",{attrs:{id:"msg-dependencies"}}):this._e()},staticRenderFns:[]},C=s("VU/8")({name:"AlertMsg",data:function(){return{}},computed:{msgCount:function(){var e=this.$store.state.msg.type,t=this.$store.state.msg.content;if(""!==t){var s={type:e,message:t};this.$message(s)}return this.$store.state.msg.count}}},$,!1,null,null,null).exports,F=s("NYxO");a.a.init({appId:"C5AXdInI1BOzXz0VCfBrsVfD-gzGzoHsz",appKey:"NgYXXvT9d48vLOgDpr6CLPVc"}),r.default.use(F.a);var U={name:"app",components:{HelloWorld:n,TopBar:g,Preview:b,Editor:_,Sign:u,Btn:y,AlertMsg:C},store:new F.a.Store({state:{resume:{"基本信息":[{"姓名":"我的姓名","出生日期":"1900.01.01","城市":"我的城市","职位":"我的职位"}],"工作经历":[{"公司":"这里是公司名","时间":"2007.6-2008.9","详情":"工作详情"}],"教育经历":[{"学校":"这里是学校名","时间":"2007.6-2008.9","详情":"详情"}],"项目经历":[{"项目":"project A","详情":"project1"},{"项目":"project B","详情":"project2"}],"工作技能":[{"内容":"javascript"},{"内容":"html5+css3"}],"联系方式":[{"电话号码":"1xxxxxxxxxx"},{"邮箱":"xxx@gmail.com"},{github:"github.com/SpiritQAQ"}]},activeType:"",dialogStatus:!1,loginSuccess:!1,isPreview:!1,msg:{type:"success",content:"",count:0},loginedUser:{}},mutations:{updateResume:function(e,t){var s=t.itemKey,r=t.key,i=t.idx,n=t.val;e.resume[s][i][r]=n},signUpToggle:function(e){e.activeType="signUp"},signInToggle:function(e){e.activeType="signIn"},showDialog:function(e){e.dialogStatus=!0},closeDialog:function(e){e.dialogStatus=!1},togglePreview:function(e){e.isPreview=!e.isPreview},loginSuccessed:function(e){e.loginSuccess=!0},showErrorMsg:function(e,t){e.msg.type="error",e.msg.content=t,e.msg.count=e.msg.count+1},showSuccessMsg:function(e,t){e.msg.type="success",e.msg.content=t,e.msg.count=e.msg.count+1},updateLoginedUser:function(e,t){e.loginedUser=a.a.User.current()},userLogout:function(e){a.a.User.logOut();for(var t in e.loginedUser)delete e.loginedUser[t];setTimeout(function(){location.reload()},1e3)},saveResume:function(e){var t=new a.a.ACL,s=a.a.User.current();t.setReadAccess(a.a.User.current(),!0),t.setWriteAccess(a.a.User.current(),!0),s.set("userResume",e.resume),s.save()},loadResume:function(e){var t=a.a.User.current();console.log("已经登陆的用户是"),null===t?e.loginSuccess=!1:(e.loginSuccess=!0,console.log(t.attributes.username),t.attributes.userResume["基本信息"]?(console.log(t.attributes.userResume),console.log("loading resume"),e.resume=t.attributes.userResume,e.loginedUser=t):(e.loginedUser=t,console.log(1)))},isLoginedStatus:function(e){console.log(a.a.User.current())}}}),created:function(){this.$store.commit("loadResume")}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("TopBar"),this._v(" "),t("main",[t("Editor"),this._v(" "),t("Preview")],1),this._v(" "),t("Sign"),this._v(" "),t("Btn"),this._v(" "),t("AlertMsg")],1)},staticRenderFns:[]},T=s("VU/8")(U,x,!1,function(e){s("2woP")},null,null).exports,E=s("zL8q"),P=s.n(E);s("tvR6");r.default.config.productionTip=!1,r.default.use(P.a),r.default.use(F.a),new r.default({el:"#app",template:"<App/>",components:{App:T}})},d9en:function(e,t){},gu2T:function(e,t){},"ng+S":function(e,t){},"oiP+":function(e,t){},tvR6:function(e,t){},xEgb:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9baa4d398fe577c5ff3b.js.map