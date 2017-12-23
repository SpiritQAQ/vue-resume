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
               v-on:click= "removeForm()"></i>          
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
      removeForm(){

      }
    }
    ,mounted(){
      let _this = this
      this.paneHeight = this.$refs.editor.offsetHeight-6*41
      window.onresize = ()=>{    //监听浏览器窗口大小变化，更新高度
        _this.paneHeight = _this.$refs.editor.offsetHeight-6*41
        if(_this.paneHeight<300){
          _this.paneHeight=300
        }
      };        
    }

      
    
  }
</script> 
<style lang='scss'>
  .editor{
    // min-height:500px;
    // border:1px solid ;
    > .container {
      > li{
        // background-color: #409eff;
        > .edi-header{
          padding:5px ;
          margin:0 10px;
          border-bottom:1px solid #555;
          line-height:30px;
          height:30px;
          cursor:pointer;
          >i{margin-right:5px;}
          >i.active{
            transform:rotate(90deg);
            transition:0.3s ease-in-out
          }
        }
        > .panes{
          margin:0 10px;
          border-bottom:1px solid #555;
          display:none;
          overflow:auto;
          &.active{
            display:block;
          }
          > .form-container{
            padding:0 10px 10px 10px;
            margin:20px 10px;
            border-radius: 3px;
            box-shadow:0 0px 3px 1px #409eff;
            position: relative;
            > i{
              position: absolute;
              top:5px;
              right:5px;
              font-size:1.2em;
            }
          }
          > .el-button{
            margin-left:10px
          }  
        }
      }
    }

  }
</style>
