webpackJsonp([1],{AFwm:function(e,t){},H0Jc:function(e,t){},IDB7:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=s("7+uW"),i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),s("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("Community Chat")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),s("br"),e._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("vue-router")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("vuex")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("vue-loader")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("awesome-vue")])])])}]},a=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(e){s("H0Jc")},"data-v-46dd4d42",null).exports,o=s("bOdI"),l=s.n(o),u=s("JnRc"),c=s.n(u),m={202:"用户名已被占用",207:"无效的用户名",unknown:"注册失败，请稍后再试"},v={name:"Sign",data:function(){var e=this,t=function(e,t,s){if(!t)return s(new Error("用户名不能为空"));setTimeout(function(){t.length<6||t.length>18?s(new Error("用户名长度要在6-18个字符")):t<18?s(new Error("必须年满18岁")):s()},1e3)};return{loginForm:{pass:"",name:""},ruleForm2:{pass:"",checkPass:"",name:""},loginRules:{pass:[{validator:function(e,t,s){""===t?s(new Error("请输入密码")):((t.length<6||t.length>15)&&s(new Error("密码长度要在6-15个字符")),s())},trigger:"blur"}],name:[{validator:t,trigger:"blur"}]},rules2:{pass:[{validator:function(t,s,r){""===s?r(new Error("请输入密码")):(""!==e.ruleForm2.checkPass&&e.$refs.ruleForm2.validateField("checkPass"),r(e.signUp()))},trigger:"blur"}],checkPass:[{validator:function(t,s,r){""===s?r(new Error("请再次输入密码")):s!==e.ruleForm2.pass?r(new Error("两次输入密码不一致!")):(r(),console.log("check"))},trigger:"blur"}],name:[{validator:t,trigger:"blur"}]},errorMessage:""}},methods:(r={submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()},signUp:function(){console.log(c.a);var e=new c.a.User;e.setUsername(this.ruleForm2.name),e.setPassword(this.ruleForm2.pass),e.signUp().then(function(e){console.log("loginedUser")},function(e){this.errorMessage=function(e){var t=e.code;return m[t]||m.unknown}(e)})},login:function(){c.a.User.logIn(this.loginForm.name,this.loginForm.pass).then(function(e){console.log(e)},function(e){alert("登陆失败")})}},l()(r,"signUp",function(){this.$store.commit("signUp")}),l()(r,"signIn",function(){this.$store.commit("signIn")}),l()(r,"closeDialog",function(){var e=this;(this.isLogined=!0)&&setTimeout(function(){e.$store.commit("closeDialog")},1e3)}),r),computed:{activeType:function(){return this.$store.state.activeType},dialogStatus:function(){return this.$store.state.dialogStatus},isLogined:function(){return this.$store.state.loginSuccess}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogStatus,expression:"dialogStatus"}],staticClass:"dialog"},[s("section",{attrs:{id:"sign"}},[s("div",{staticClass:"tab"},[s("span",{staticClass:"tabList",class:{active:"signIn"==e.activeType},attrs:{value:"signIn"},on:{click:function(t){e.signIn(),e.resetForm("ruleForm2")}}},[e._v("登录")]),e._v(" · \n      "),s("span",{staticClass:"tabList",class:{active:"signUp"==e.activeType},attrs:{value:"signUp"},on:{click:function(t){e.signUp(),e.resetForm("loginForm")}}},[e._v("注册")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"signUp"==e.activeType,expression:"activeType=='signUp'"}],staticClass:"signUp"},[s("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"70px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"name"}},[s("el-input",{attrs:{icon:"user"},model:{value:e.ruleForm2.name,callback:function(t){e.$set(e.ruleForm2,"name",t)},expression:"ruleForm2.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"pass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.pass,callback:function(t){e.$set(e.ruleForm2,"pass",t)},expression:"ruleForm2.pass"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm(e.ruleForm2)}}},[e._v("注册")]),e._v(" "),s("el-button",{on:{click:function(t){e.resetForm("ruleForm2")}}},[e._v("重置")]),e._v("\n          "+e._s(e.errorMessage)+"\n        ")],1)],1)],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"signIn"==e.activeType,expression:"activeType=='signIn'"}],staticClass:"signIn"},[s("el-form",{ref:"loginForm",staticClass:"demo-ruleForm",attrs:{model:e.loginForm,"status-icon":"",rules:e.loginRules,"label-width":"70px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"name"}},[s("el-input",{model:{value:e.loginForm.name,callback:function(t){e.$set(e.loginForm,"name",t)},expression:"loginForm.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"pass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.loginForm.pass,callback:function(t){e.$set(e.loginForm,"pass",t)},expression:"loginForm.pass"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.login(),e.closeDialog()}}},[e._v("登陆")])],1)],1)],1)])])},staticRenderFns:[]},d=s("VU/8")(v,p,!1,function(e){s("f1l7")},null,null).exports,f={components:{Sign:d},name:"Topbar",computed:{activeType:function(){return this.$store.state.activeType},dialogStatus:function(){return this.$store.state.dialogStatus},isPreview:function(){return this.$store.state.isPreview}},methods:{signUp:function(){this.$store.commit("signUp")},signIn:function(){this.$store.commit("signIn")},showDialog:function(){this.$store.commit("showDialog")}}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isPreview,expression:"!isPreview"}],staticClass:"topbar"},[s("div",{staticClass:"logo"},[e._v("\n    Vue Resume\n  ")]),e._v(" "),s("div",{staticClass:"buttonbox"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.signUp(),e.showDialog()}}},[e._v("注册")]),e._v(" "),s("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.signIn(),e.showDialog()}}},[e._v("登录")])],1)])},staticRenderFns:[]},g=s("VU/8")(f,_,!1,function(e){s("AFwm")},null,null).exports,h=s("fZjL"),b=s.n(h),k={data:function(){return{paneHeight:0,currentTab:0}},computed:{resume:function(){return this.$store.state.resume},isPreview:function(){return this.$store.state.isPreview}},methods:{resumeUpdate:function(e,t,s,r){this.$store.commit("updateResume",{itemKey:e,key:t,idx:s,val:r})},addForm:function(e){var t={};b()(this.resume[e][0]).map(function(e){t[e]=""}),this.resume[e].push(t)},removeForm:function(e,t){t.length>1?t.splice(t.indexOf(e),1):alert("不能再少了")}},mounted:function(){var e=this;this.paneHeight=this.$refs.editor.offsetHeight-246,window.onresize=function(){e.paneHeight=e.$refs.editor.offsetHeight-246,e.paneHeight<300&&(e.paneHeight=300)}}},w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isPreview,expression:"!isPreview"}],ref:"editor",staticClass:"editor"},[s("ol",{staticClass:"container"},e._l(e.resume,function(t,r,n){return s("li",[s("div",{staticClass:"edi-header",on:{click:function(t){e.currentTab=n}}},[s("i",{staticClass:"el-icon-arrow-right",class:{active:e.currentTab===n}}),e._v("\n        "+e._s(r)+"\n      ")]),e._v(" "),s("div",{staticClass:"panes",class:{active:e.currentTab===n},style:"height:"+e.paneHeight+"px"},[e._l(t,function(n,i){return"工作经历"===r||"教育经历"===r?s("el-form",{staticClass:"form-container"},[s("el-form-item",{attrs:{label:Object.keys(n)[0]}},[s("el-input",{attrs:{type:"text",value:n[Object.keys(n)[0]]},nativeOn:{input:function(t){e.resumeUpdate(r,Object.keys(n)[0],i,t.target.value)}}})],1),e._v(" "),s("el-form-item",{attrs:{label:Object.keys(n)[1]}},[s("el-input",{attrs:{type:"text",value:n[Object.keys(n)[1]]},nativeOn:{input:function(t){e.resumeUpdate(r,Object.keys(n)[1],i,t.target.value)}}})],1),e._v(" "),s("el-form-item",{attrs:{label:Object.keys(n)[2]}},[s("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:3},value:n[Object.keys(n)[2]]},nativeOn:{input:function(t){e.resumeUpdate(r,Object.keys(n)[2],i,t.target.value)}}})],1),e._v(" "),s("i",{staticClass:"el-icon-error",on:{click:function(s){e.removeForm(n,t)}}})],1):e._e()}),e._v(" "),e._l(t,function(n,i){return"项目经历"===r?s("el-form",{staticClass:"form-container"},[s("el-form-item",{attrs:{label:Object.keys(n)[0]}},[s("el-input",{attrs:{type:"text",value:n[Object.keys(n)[0]]},nativeOn:{input:function(t){e.resumeUpdate(r,Object.keys(n)[0],i,t.target.value)}}})],1),e._v(" "),s("el-form-item",{attrs:{label:Object.keys(n)[1]}},[s("el-input",{attrs:{type:"textarea",rows:2,value:n[Object.keys(n)[1]]},nativeOn:{input:function(t){e.resumeUpdate(r,Object.keys(n)[1],i,t.target.value)}}})],1),e._v(" "),s("i",{staticClass:"el-icon-error",on:{click:function(s){e.removeForm(n,t)}}})],1):e._e()}),e._v(" "),e._l(t,function(n,i){return"基本信息"===r||"联系方式"===r||"工作技能"===r?s("el-form",{staticClass:"form-container"},[e._l(n,function(t,n){return s("el-form-item",{attrs:{label:n}},[s("el-input",{attrs:{type:"text",value:t},nativeOn:{input:function(t){e.resumeUpdate(r,n,i,t.target.value)}}})],1)}),e._v(" "),"工作技能"===r?s("i",{staticClass:"el-icon-error",on:{click:function(s){e.removeForm(n,t)}}}):e._e()],2):e._e()}),e._v(" "),"工作经历"==r||"教育经历"==r||"项目经历"==r||"工作技能"==r?s("el-button",{attrs:{type:"primary",title:"添加一项"+r},on:{click:function(t){e.addForm(r)}}},[e._v("\n          添加"+e._s(r))]):e._e()],2)])}))])},staticRenderFns:[]},C=s("VU/8")(k,w,!1,function(e){s("rgmg")},null,null).exports,y={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"preview"},[s("section",{staticClass:"profile "},[s("h1",{staticClass:"name"},[e._v(e._s(e.resume.基本信息[0].姓名))]),e._v(" "),s("div",{staticClass:"position"},[e._v(e._s(e.resume.基本信息[0].职位))]),e._v(" "),s("div",{staticClass:"birth"},[e._v(e._s(e.resume.基本信息[0].城市)+" | "+e._s(e.resume.基本信息[0].出生日期))]),e._v(" "),s("div",{staticClass:"information"},[s("span",[e._v("Phone : "+e._s(e.resume.联系方式[0].电话号码))]),e._v(" "),s("span",[e._v("||")]),e._v(" "),s("span",[e._v("E-mail : "+e._s(e.resume.联系方式[1].邮箱))]),e._v(" "),s("span",[e._v("||")]),e._v(" "),s("span",[e._v("Github : "),s("a",{attrs:{href:"https://"+e.resume.联系方式[2].github}},[e._v(e._s(e.resume.联系方式[2].github))])])])]),e._v(" "),s("section",{staticClass:"edu-history"},[s("h3",[e._v("教育经历")]),e._v(" "),e._l(e.resume.教育经历,function(t){return s("div",{staticClass:"container"},[s("div",{staticClass:"date"},[e._v(e._s(t.时间))]),e._v(" "),s("div",{staticClass:"item-name"},[e._v(e._s(t.学校))]),e._v(" "),s("p",[e._v(e._s(t.详情))])])})],2),e._v(" "),s("section",{staticClass:"project"},[s("h3",[e._v("项目经历")]),e._v(" "),e._l(e.resume.项目经历,function(t){return s("div",{staticClass:"container"},[s("div",{staticClass:"item-name"},[e._v(e._s(t.项目))]),e._v(" "),s("p",[e._v(e._s(t.详情))])])})],2),e._v(" "),s("section",{staticClass:"skill"},[s("h3",[e._v("工作技能")]),e._v(" "),e._l(e.resume.工作技能,function(t){return s("div",{staticClass:"container"},[s("p",[e._v(e._s(t.内容))])])})],2),e._v(" "),s("section",{staticClass:"work-history"},[s("h3",[e._v("工作经历")]),e._v(" "),e._l(e.resume.工作经历,function(t){return s("div",{staticClass:"container"},[s("div",{staticClass:"date"},[e._v(e._s(t.时间))]),e._v(" "),s("div",{staticClass:"item-name"},[e._v(e._s(t.公司))]),e._v(" "),s("p",[e._v(e._s(t.详情))])])})],2)])},staticRenderFns:[]},F=s("VU/8")({computed:{resume:function(){return this.$store.state.resume}},methods:{}},y,!1,function(e){s("ng+S")},null,null).exports,U={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"btn"},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isPreview,expression:"isPreview"}],attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.togglePreview()}}},[e._v("编辑")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isPreview,expression:"!isPreview"}],attrs:{type:"primary",icon:"el-icon-picture"},on:{click:function(t){e.togglePreview()}}},[e._v("预览")]),e._v(" "),s("el-button",{attrs:{type:"primary",icon:"el-icon-document"}},[e._v("保存")])],1)},staticRenderFns:[]},j=s("VU/8")({name:"Btn",computed:{isPreview:function(){return this.$store.state.isPreview}},methods:{togglePreview:function(){this.$store.commit("togglePreview")}}},U,!1,function(e){s("IDB7")},null,null).exports,x=s("woOf"),D=s.n(x),$=s("mvHQ"),P=s.n($),A=s("NYxO");n.default.use(A.a);var O=new A.a.Store({state:{resume:{"基本信息":[{"姓名":"王铁锤","出生日期":"1900.01.01","城市":"山东威海","职位":"铁锤工程师"}],"工作经历":[{"公司":"这里是公司名","时间":"2007.6-2008.9","详情":"工作详情"}],"教育经历":[{"学校":"这里是学校名","时间":"2007.6-2008.9","详情":"详情"}],"项目经历":[{"项目":"project A","详情":"project1"},{"项目":"project B","详情":"project2"}],"工作技能":[{"内容":"javascript"},{"内容":"html5+css3"}],"联系方式":[{"电话号码":"1xxxxxxxxxx"},{"邮箱":"xxx@gamil.com"},{github:"github.com/SpiritQAQ"}]},activeType:"",dialogStatus:!1,loginSuccess:!0,isPreview:!1},mutations:{updateResume:function(e,t){var s=t.itemKey,r=t.key,n=t.idx,i=t.val;e.resume[s][n][r]=i,localStorage.setItem("state",P()(e))},initState:function(e,t){D()(e,t)},signUp:function(e){e.activeType="signUp"},signIn:function(e){e.activeType="signIn"},showDialog:function(e){e.dialogStatus=!0},closeDialog:function(e){e.dialogStatus=!1},togglePreview:function(e){e.isPreview=!e.isPreview}}}),T={name:"app",components:{HelloWorld:a,TopBar:g,Preview:F,Editor:C,Sign:d,AV:c.a,Btn:j},store:O,created:function(){var e=localStorage.getItem("state");e&&(e=JSON.parse(e)),this.$store.commit("initState",e)}},E={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("TopBar"),this._v(" "),t("main",[t("Editor"),this._v(" "),t("Preview")],1),this._v(" "),t("Sign"),this._v(" "),t("Btn")],1)},staticRenderFns:[]},I=s("VU/8")(T,E,!1,function(e){s("ctE/")},null,null).exports,S=s("zL8q"),R=s.n(S);s("tvR6");n.default.config.productionTip=!1,n.default.use(R.a),n.default.use(A.a);c.a.init({appId:"C5AXdInI1BOzXz0VCfBrsVfD-gzGzoHsz",appKey:"NgYXXvT9d48vLOgDpr6CLPVc"}),new n.default({el:"#app",template:"<App/>",components:{App:I}})},"ctE/":function(e,t){},f1l7:function(e,t){throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve './dist/static/img/dialogWaller2.jpg' in 'C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\src\\components'\n    at factoryCallback (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\webpack\\lib\\Compilation.js:276:40)\n    at factory (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\webpack\\lib\\NormalModuleFactory.js:235:20)\n    at resolver (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\webpack\\lib\\NormalModuleFactory.js:60:20)\n    at asyncLib.parallel (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\webpack\\lib\\NormalModuleFactory.js:127:20)\n    at C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\async\\dist\\async.js:3874:9\n    at C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\async\\dist\\async.js:473:16\n    at iteratorCallback (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\async\\dist\\async.js:1048:13)\n    at C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\async\\dist\\async.js:958:16\n    at C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\async\\dist\\async.js:3871:13\n    at resolvers.normal.resolve (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\webpack\\lib\\NormalModuleFactory.js:119:22)\n    at onError (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\enhanced-resolve\\lib\\Resolver.js:65:10)\n    at loggingCallbackWrapper (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\tapable\\lib\\Tapable.js:252:11)\n    at C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\enhanced-resolve\\lib\\UnsafeCachePlugin.js:40:4\n    at loggingCallbackWrapper (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at runAfter (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\enhanced-resolve\\lib\\Resolver.js:158:4)\n    at innerCallback (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\enhanced-resolve\\lib\\Resolver.js:146:3)\n    at loggingCallbackWrapper (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at next (C:\\Users\\Administrator\\Desktop\\b\\vue-resume\\node_modules\\tapable\\lib\\Tapable.js:252:11)")},"ng+S":function(e,t){},rgmg:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.31930efd271d3ad63bae.js.map