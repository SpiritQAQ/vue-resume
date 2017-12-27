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
          <el-button type="primary" v-on:click="addForm(key)" v-bind:title="'添加一项'+key"
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
        paneHeight:0,
        
      }    
    }
    ,computed:{
      resume(){
        return this.$store.state.resume
      },
      currentTab(){
        return this.$store.state.currentTab
      }
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
    > .container {
      > li{       
        > .edi-header{
          padding:5px ;
          line-height:30px;
          height:30px;
          cursor:pointer;
          box-shadow: 0 1px 3px #333;
          transition-duration: 0.5s;
          position: relative;
          z-index:2;
          >i{margin-left:10px;margin-right:5px;}
          >i.active{
            transform:rotate(90deg);
            transition:0.3s ease-in-out         
          }
          // background: linear-gradient(to bottom, #409eff, #fff)         
          background: linear-gradient(to bottom, rgba(64,158,255,1), rgba(64,158,255,0.6));
        }
        > .panes{
          // text-shadow: 0 -1px 1px #888;
          transition-duration: 0.5s;
          margin:5px 10px 0;
          display:none;
          overflow:auto;
          position: relative;
          z-index:1;
          &.active{
            display:block;
            animation: hideIndex 0.3s;
          }
          @keyframes hideIndex{
    
            0%{ opacity: 0; transform: translate(200px,0) }
            100%{opacity: 1; transform: translate(0, 0) }
          }
          > .form-container{
            padding:0 10px 10px 10px;
            margin:20px 30px 20px 20px;;
            border-bottom:1px solid rgba(34,34,34,0.6);
            border-radius: 5px;
            box-shadow:0px  -2px  3px rgba(34,34,34,0.6);//#222
            position: relative;
            // background: linear-gradient(to top,rgba(34,34,34,0.8),rgba(55,55,111,0.8));
            > i{
              position:absolute;
              top:0%; 
              margin-top:-8px; 
              right:-8px;
              font-size:20px;
              cursor: pointer;
              box-shadow:0 0 3px 1px #111;
              color:#fff;
              background: #111;
              z-index:3;
              border-radius: 10px;
              transition-duration: 0.3s;
              // box-shadow:0 0 1px 2px  rgba(33,33,33,0.6);
              &:hover{
                transform:scale(1.1)
                
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
            margin:20px auto;
            background-color: #666;
            border:0px;
            cursor: pointer;
            color: #fff;
            font-weight: bold;
            box-shadow: 0 1px 3px #999;
            text-shadow: 0 -1px 1px #222;
            border-bottom: 1px solid #222;

            &:hover{
              opacity: 0.8
            }
          }  
        }
      }
    }

  }
</style>
