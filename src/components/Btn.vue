<template>
  <div class="btn">
    <el-button type="primary" icon="el-icon-edit" v-show="isPreview" @click="togglePreview()">编辑</el-button>
    <el-button type="primary" icon="el-icon-picture" v-show="!isPreview" @click="togglePreview()">预览</el-button>
    <el-button type="primary" icon="el-icon-document" v-show="isLogined" @click="saveResume()">保存</el-button>
  </div>
</template>

<script>
  export default {
    name : 'Btn',
    computed:{
      isPreview(){
        return this.$store.state.isPreview
      },
      isLogined(){
        return this.$store.state.loginSuccess
      }
    },
    methods:{
      togglePreview(){
        this.$store.commit('togglePreview')
      },
      saveResume(){
        this.$store.commit('saveResume')
        this.$store.commit("showSuccessMsg","已保存到云端")
        
      }
      
    }
  }
</script>

<style lang='scss'>
  .btn{
    position: fixed;
    bottom:5%;
    display: flex;
    flex-direction: column;
    right:3%;
    > button{
      margin:10px;
    }
  }
   
</style>
