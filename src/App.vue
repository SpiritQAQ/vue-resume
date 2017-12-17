<template>
  <div id="app">
    <TopBar/>
    <main>
      <Editor/>
      <Preview/>
    </main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TopBar from './components/TopBar'
import Editor from './components/Editor'
import Preview from './components/Preview'
export default {
  name: 'app',
  components: {
    HelloWorld,
    TopBar,Preview,Editor 
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
    .editor{
      margin:20px 20px 20px 60px;    
      width:400px;
      box-shadow:0 0 5px #111;
      border-radius:5px;
      overflow:hidden;
    }
    .preview{

      flex:1
    }
  }
</style>
