<template>
  <div class='editor' ref='editor'>
    <ol class="container">
      <li v-for="i in [0,1,2,3,4,5]">
        <div class='edi-header' v-on:click="currentTab = i ,setHeight()">{{header[i]}}</div>
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
      this.paneHeight = this.$refs.editor.offsetHeight-6*30
      window.onresize = function temp() {
        _this.paneHeight = _this.$refs.editor.offsetHeight-6*30
        //监听浏览器窗口大小变化，更新高度
      };
          
    }

      
    
  }
</script> 
<style lang='scss'>
  .editor{
    // min-height:500px;
    // border:1px solid ;
    > .container {
      display:flex;
      flex-direction: column;
      > li{
        flex-grow:1;
        > .edi-header{
          line-height:30px;
          height:30px;
          background-color: #409eff;
        }
        > .panes{
          // height: 400px;
          flex-grow:1;
          display:none;
          &.active{
            display:block;
          }
        }
      }
    }

  }
</style>
