<template>
  <div id="app">
    <TopBar/>
    <main>
      <Editor/>
      <Preview/>
    </main>
    <Sign/>
    <Btn/>
    <AlertMsg/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TopBar from './components/TopBar'
import Editor from './components/Editor'
import Sign from './components/Sign'
import Preview from './components/Preview'
import Btn from './components/Btn'
import AlertMsg from './components/AlertMsg'

import store from './store/index'
import AV from 'leancloud-storage'



export default {
  name: 'app',
  components: {
    HelloWorld,
    TopBar,Preview,Editor,Sign,Btn,AlertMsg
  },
  store,
  created(){
    // let state = localStorage.getItem('state')
    // if(state){
    //   state = JSON.parse(state)
    // }
    // this.$store.commit('initState',state)
    //以上是localStorage
    // this.$store.commit('isLoginedStatus')    
    this.$store.commit('loadResume')
  }
}
</script>

<style lang='scss'>
  *{margin:0;padding:0;list-style:none;}
  html,body,#app{height:100%}
  a{color:inherit}
  #app{
    display: flex;
    flex-direction: column;
    height:100vh;
  }
  .topbar{
    position: relative;z-index:1;//让顶部位于主页面上面
  }
  main{
    height:100%;
    flex:1;
    display: flex;
    background: #eee;
    justify-content:center;
    padding:0 250px;
    .editor{
      margin:20px 25px 20px 0px;    
      width:450px;
      box-shadow:0 1px 5px #111;
      border-radius:5px;
      overflow:hidden;
      background:white;
    }
    .preview{
      margin:20px 0px 20px 25px;
      overflow:auto;
      // border-radius:5px;
      flex:1
    }

  }
</style>
