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
            姓名:'王铁锤',出生日期:'1900.01.01',城市:'山东威海',职位:'铁锤工程师'
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
        
    },
    mutations:{
      updateResume(state,{itemKey,key,idx,val}){
          state.resume[itemKey][idx][key] = val
          localStorage.setItem('state', JSON.stringify(state))
      },
      initState(state,payload){
        Object.assign(state,payload) //新打开的页面state替换为localStorage储存的state
      },
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
      showErrorMsg(state, content){//elemeUI的alert
        state.msg.type = "error";
        state.msg.content = content;
        state.msg.count = state.msg.count + 1;
      },
      showSuccessMsg(state,content){
        state.msg.type = "success";
        state.msg.content = content;
        state.msg.count = state.msg.count + 1;        
      }

    }
})