import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {       
        resume:{
          '基本信息':[
            {姓名:''},{出生日期:''},{城市:''}
            ],
          '工作经历':[
            { 公司: 'AL', 工作内容: '我的第一份工作是' },
            { 公司: 'TX', 工作内容: '我的第二份工作是' },
          ],
          '教育经历':[
            { 学校: 'AL', 教育内容: '文字' },
            { 学校: 'TX', 教育内容: '文字'  },
          ],
          '项目经历':[
            { 项目: 'project A', 项目介绍: '文字' },
            { 项目: 'project B', 项目介绍: '文字' },
          ],
          '获奖情况':[
            { name: 'awards A', content: '文字' },
            { name: 'awards B', content: '文字' },
          ],
          '联系方式':[
            { 电话号码:'' },
            { 邮箱: ''},
            { QQ:''}
          ]
        }
    },
    mutations:{
      updateResume(state,{itemKey,key,idx,value}){
          state.resume[itemKey][idx][key] = value
      }
    }
})