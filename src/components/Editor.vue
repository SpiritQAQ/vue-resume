<template>
  <div class='editor' ref='editor'>
    <ol class="container">
      <li v-for="i in [0,1,2,3,4,5]">
        <div class='edi-header' v-on:click="currentTab = i ,setHeight()"><i class="el-icon-arrow-right" v-bind:class="{ active:currentTab===i }"></i>{{header[i]}}</div>
        <div class="panes" v-bind:class="{ active:currentTab===i }" v-bind:style= "'height:'+paneHeight+'px'" >hahaha</div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isClicked:false,
        currentTab :0 ,
        header:['基本信息','教育经历','3','4','5','6'],
        paneHeight:0
      }    
    },mounted(){
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
          border-bottom:1px solid #ccc;
          line-height:30px;
          height:30px;
          cursor:pointer;
          >i{margin-right:5px;}
          >i.active{
            transform:rotate(90deg);
            transition:0.3s ease-in-out,
            
          }

          
        }
        > .panes{
          margin:0 10px;
          border-bottom:1px solid #ccc;
          display:none;
          &.active{
            display:block;
            
          }
        }
      }
    }

  }
</style>
