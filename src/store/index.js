import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {       
        resume:{
          '基本信息':[
            {姓名:'王铁锤'},{出生日期:'1900.01.01'},{城市:'山东威海'},{职位:'铁锤工程师'}
            ],
          '工作经历':[
            { 公司: '这里是公司名', 详情: '工作详情',时间:'2007.6-2008.9' },
            { 公司: '', 详情: '' ,时间:''},
          ],
          '教育经历':[
            { 学校: '这里是学校名', 详情: '详情',时间:'2007.6-2008.9' },
            { 学校: '', 详情: '',时间:''  },
          ],
          '项目经历':[
            { 项目: 'project A', 项目介绍: 'project1' },
            { 项目: 'project B', 项目介绍: 'project2' },
          ],
          '工作技能':[
            { name: 'javascript', content: '' },
            { name: 'html5+css3', content: 'award2' },
          ],
          '联系方式':[
            { 电话号码:'1xxxxxxxxxx' },
            { 邮箱: 'xxx@gamil.com'},
            
          ]
        }
    },
    mutations:{
      updateResume(state,{itemKey,key,idx,value}){
          state.resume[itemKey][idx][key] = value
      }
    }
})