<template>
  <div class='topbar' v-show="!isPreview">
    <div class='logo'>
      Vue Resume
    </div>
    <div class="buttonbox" >
      <el-button type="primary" v-if="!isLoginSuccessed" @click="signUpToggle(),showDialog()">注册</el-button>
      <el-button type="primary" v-if="!isLoginSuccessed" @click="signInToggle(),showDialog()" plain>登录</el-button>
      <div id='username' v-if="isLoginSuccessed">Welcome,{{loginedUser}}</div>
      <el-button type="primary" v-if="isLoginSuccessed" @click="logOut()">登出</el-button>
      
    </div>
     
  </div>
</template>


<script>
  import Sign from './Sign'
  import AV from 'leancloud-storage'
  export default {
    components:{Sign},
    name: 'Topbar',
    computed:{
      activeType(){
        return this.$store.state.activeType
      },
      dialogStatus(){
        return this.$store.state.dialogStatus
      },
      isPreview(){
        return this.$store.state.isPreview
      },
      loginedUser(){
        return this.$store.state.loginedUser.attributes.username
      },
      isLoginSuccessed(){
        return this.$store.state.loginSuccess
      },
    },
    methods:{
      signUpToggle(){
        this.$store.commit('signUpToggle')
      },
      signInToggle(){
        this.$store.commit('signInToggle')
      },    
      showDialog(){
        this.$store.commit('showDialog')        
      },
      logOut(){
        this.$store.commit('userLogout')
        this.$store.commit("showSuccessMsg","登出成功!")
      }
    }
  
}
</script>

<style lang=scss>
  .topbar{
    display: flex;
    justify-content: space-between;
    align-items: center;/* 居中对齐弹性盒的各项 <div> 元素： */
    padding:20px 250px;
    box-shadow:0 0 5px 3px #999;
    .logo{
      /* font-family: "Helvetica Neue"; */
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color:#333;
      text-shadow: 
    /* Color 1 */
    1px 1px #61b4de, 2px 2px #61b4de, 3px 3px #61b4de, 4px 4px #61b4de, 5px 5px #61b4de,
    /* Color 2 */
    6px 6px #91c467, 7px 7px #91c467, 8px 8px #91c467, 9px 9px #91c467, 10px 10px #91c467,
    /* Color 3 */
    11px 11px #f3a14b, 12px 12px #f3a14b, 13px 13px #f3a14b, 14px 14px #f3a14b, 15px 15px #f3a14b;
      font-weight: 600;
      font-size:32px;
    }
    .buttonbox{
      display: flex;
      #username{
        line-height:40px;
        padding: 0 20px
      }
    }
  }
</style>
