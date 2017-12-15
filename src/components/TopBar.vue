<template>
  <div class='topbar'>
    <div class='logo'>
      Vue Resume
    </div>
    <div class="buttonbox">
      <el-button type="primary">注册</el-button>
      <el-button type="primary" plain>登录</el-button>
    </div>
  </div>
</template>


<script>
  export default {
  name: 'Topbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang=scss>
  .topbar{
    display: flex;
    justify-content: space-between;
    align-items: center;/* 居中对齐弹性盒的各项 <div> 元素： */
    padding:20px 40px;
    box-shadow:0 0 5px #999;
    .logo{
      font-family: "Helvetica Neue",Helvetica,"PingFang SC",
      "Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      font-size:18px;
    }
  }
</style>
