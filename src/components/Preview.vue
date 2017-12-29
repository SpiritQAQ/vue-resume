<template>
  <div class='preview'>
   
    {{resume.工作经历}}
    <section class="profile">
      <h1>{{resume.基本信息[0].姓名}}</h1>
      <p>{{resume.基本信息[2].城市}}|{{resume.基本信息[1].出生日期}}</p>
    </section>
    <section class="workHistory">
      <h2>工作经历</h2>
      <div class="container" v-for="item in resume.工作经历">
        <h3>{{item.公司}}</h3>
        <p>{{item.工作内容}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // props:['resume']  
  computed : {
    resume(){
      return this.$store.state.resume
    }
  },
  methods : {
  }
}
</script>
<style lang='scss'>
  .preview{
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6), 0 0 100px rgba(0, 0, 0, 0.1) inset;
  }

</style>
