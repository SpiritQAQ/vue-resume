import Vuex from 'vuex'
import Vue from 'vue'
import AV from 'leancloud-storage'

var APP_ID = 'C5AXdInI1BOzXz0VCfBrsVfD-gzGzoHsz';
var APP_KEY = 'NgYXXvT9d48vLOgDpr6CLPVc';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});



Vue.use(Vuex)

export default new Vuex.Store({
    state : {       
        resume:{
          '基本信息':[{
            姓名:'我的姓名',出生日期:'1900.01.01',城市:'我的城市',职位:'我的职位'
          }],
          '工作经历':[
            { 公司: '这里是公司名',时间:'2007.6-2008.9', 详情: '工作详情' },
            // { 公司: '' ,时间:'', 详情: ''},
          ],
          '教育经历':[
            { 学校: '这里是学校名',时间:'2007.6-2008.9', 详情: '详情' },
            // { 学校: '',时间:'', 详情: ''  },
          ],
          '项目经历':[
            { 项目: 'project A', 详情: 'project1' },
            { 项目: 'project B', 详情: 'project2' },
          ],
          '工作技能':[
            { 内容: 'javascript'},
            { 内容: 'html5+css3'},
          ],
          '联系方式':[
             {电话号码:'1xxxxxxxxxx'} ,
             {邮箱: 'xxx@gamil.com'},
             {github:'github.com/SpiritQAQ'}
            
          ]
        },
        activeType:"",
        dialogStatus:false,
        loginSuccess:false,
        isPreview:false,
        msg:{type:"success", content:"", count:0},
        loginedUser :{}
    },
    mutations:{
      updateResume(state,{itemKey,key,idx,val}){
          state.resume[itemKey][idx][key] = val
      },
      // initState(state,payload){
      //   Object.assign(state,payload) //新打开的页面state替换为localStorage储存的state
      // },
      signUpToggle(state){
        state.activeType="signUp"
      },
      signInToggle(state){
        state.activeType="signIn"
      },
      showDialog(state){
        state.dialogStatus=true
      },
      closeDialog(state){
        state.dialogStatus=false
      },
      togglePreview(state){
        state.isPreview = !state.isPreview
      },
      loginSuccessed(state){
        state.loginSuccess=true
      },
      showErrorMsg(state, content){//elemeUI的alert
        state.msg.type = "error";
        state.msg.content = content;
        state.msg.count = state.msg.count + 1;
      },
      showSuccessMsg(state,content){
        state.msg.type = "success";
        state.msg.content = content;
        state.msg.count = state.msg.count + 1;        
      },
      updateLoginedUser(state,user){
        state.loginedUser = AV.User.current()
      },
      userLogout(state){
        AV.User.logOut()
        for(let key in state.loginedUser){
          delete state.loginedUser[key]
        }
        setTimeout(()=>{
          // state.loginSuccess =  false
          location.reload()
        },1000)
      },
      saveResume(state){
        let acl = new AV.ACL()
        let currentUser = AV.User.current()
        acl.setReadAccess(AV.User.current(),true) 
        acl.setWriteAccess(AV.User.current(),true)
        currentUser.set('userResume' , state.resume)
        currentUser.save()
      },
      loadResume(state){  
        let currentUser = AV.User.current()
        console.log('已经登陆的用户是')
        
        if(currentUser===null){
          state.loginSuccess = false
          return 
        }else{
          state.loginSuccess = true
          console.log(currentUser.attributes.username)
          if(currentUser.attributes.userResume === {}){
            return 
          }else{
            console.log('loading resume')
            state.resume = currentUser.attributes.userResume
            state.loginedUser = currentUser
          }
        }

      },
      isLoginedStatus(state){
        console.log(AV.User.current())
        // if(AV.User.current()==null){
        //   this.state.loginSuccess = false
        // }else{
        //   this.state.loginSuccess = true
        // }
      }
 
    

    }
})