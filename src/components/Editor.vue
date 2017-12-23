<template>
  <div class='editor' ref='editor'>
    <ol class="container">
      <li v-for="(value,key,index) in resume">
        <div class='edi-header' v-on:click="currentTab = index ">
          <i class="el-icon-arrow-right" v-bind:class="{ active:currentTab===index }"></i>
          {{key}}
        </div>
        <div class="panes" v-bind:class="{ active:currentTab===index }" v-bind:style= "'height:'+paneHeight+'px'" > 
          <el-form v-for="item in value" class='form-container'>
            <!-- <hr> -->
            <el-form-item v-for="(value,key) in item" v-bind:label="key">
              <el-input v-model="item[key]"></el-input>             
            </el-form-item> 
            <i class="el-icon-error"  v-if="key=='工作经历'||key=='教育经历'||key=='项目经历'||key=='获奖情况'" 
               v-on:click= "removeForm(value,item)"></i>          
          </el-form>
          <el-button type="primary" v-on:click="addForm(key)"
                     v-if="key=='工作经历'||key=='教育经历'||key=='项目经历'||key=='获奖情况'">
            添加{{key}}</el-button>
        </div>        
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        currentTab :0 ,
        paneHeight:0,
        resume:{
          '基本信息':[
            {姓名:'',出生日期:'',城市:''}
            ],
          '工作经历':[
            { 公司: 'AL', 工作内容: '我的第二份工作是' },
            { 公司: 'TX', 工作内容: '我的第一份工作是' },
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
      }    
    }
    ,computed:{

    }
    ,methods:{
      addForm(key){
        const empty = {}
        Object.keys(this.resume[key][0]).map((key)=>{
          empty[key]=''
        })
        // console.log(Object.keys(this.resume[key][0]))
        // console.log(empty)
        this.resume[key].push(empty)
      },
      removeForm(value,item){
        value.splice(value.indexOf(item),1)        
        
      }
    }
    ,mounted(){
      let _this = this
      this.paneHeight = this.$refs.editor.offsetHeight-6*40
      window.onresize = ()=>{    //监听浏览器窗口大小变化，更新高度
        _this.paneHeight = _this.$refs.editor.offsetHeight-6*40
        if(_this.paneHeight<300){
          _this.paneHeight=300
        }
      };        
    }

      
    
  }
</script> 
<style lang='scss'>
  .editor{
    > .container {
      > li{       
        > .edi-header{
          padding:5px ;
          line-height:30px;
          height:30px;
          cursor:pointer;
          >i{margin-left:10px;margin-right:5px;}
          >i.active{
            transform:rotate(90deg);
            transition:0.3s ease-in-out         
          }
          // background: linear-gradient(to bottom, #409eff, #fff)         
          background: linear-gradient(to bottom, rgba(64,158,255,1), rgba(64,158,255,0.6));
        }
        > .panes{
          transition-duration: 0.5s;
          margin:0 10px;
          display:none;
          overflow:auto;
          &.active{
            display:block;
          }
          > .form-container{
            padding:0 10px 10px 10px;
            margin:20px 30px 20px 20px;;
            border-radius: 5px;
            box-shadow:0px 0px 5px 3px rgba(33,33,33,0.6);
            position: relative;
            background: linear-gradient(to left,rgba(111,111,111,0.2),rgba(55,55,111,0.6));
            > i{
              position:absolute;
              top:50%; 
              margin-top:-15px; 
              right:-15px;
              font-size:30px;
              cursor: pointer;
              color:rgb(43, 45, 46);
              background-color: #fff;
              border-radius: 15px;
              transition-duration: 0.3s;
              box-shadow:0 0 1px 2px  rgba(33,33,33,0.6);
              &:hover{
                transform:scale(1.3)
                
              }
            }
            > .el-form-item{
              > .el-form-item__label{
                color:black;
                
              }
            }
          }
          > .el-button{
            display: block;
            margin:0 auto;
            background-color: #666;
            border:1px solid #666;
            cursor: pointer;
            &:hover{
              opacity: 0.8
            }
          }  
        }
      }
    }

  }
</style>
