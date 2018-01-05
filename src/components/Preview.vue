<template>
  <div class='preview'>
   
    <!-- {{resume.工作经历}} -->
    <section class="profile ">
      <h1 class='name'>{{resume.基本信息[0].姓名}}</h1>
      <div class="position">{{resume.基本信息[3].职位}}</div>
      <div class='birth'>{{resume.基本信息[2].城市}} | {{resume.基本信息[1].出生日期}}</div>
      <div class="information">
        <span>phone : {{resume.联系方式[0].电话号码}}</span>
        <span>e-mail : {{resume.联系方式[1].邮箱}}</span>


      </div>
    </section>
    <section class="work-history">
      <h3>工作经历</h3>
      <div class="container" v-for="item in resume.工作经历">
        <div class="date">{{item.时间}}</div>
        <div class='item-name'>{{item.公司}}</div>
        <p>{{item.详情}}</p>
      </div>
    </section>
    <section class="edu-history">
      <h3>教育经历</h3> 
      <div class="container" v-for="item in resume.教育经历">
        <div class="date">{{item.时间}}</div>
        <div class='item-name'>{{item.学校}}</div>
        <p>{{item.详情}}</p>
      </div>
    </section>  
    <section class="edu-history">
      <h3>项目经历</h3> 
      <div class="container" v-for="item in resume.项目经历">
        <div class="date">{{item.时间}}</div>
        <div class='item-name'>{{item.项目}}</div>
        <p>{{item.详情}}</p>
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
  $header-bgc:linear-gradient(to right, rgba(64,158,255,1),rgba(64,158,255,0.2));;
  .preview{
    padding:30px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6), 0 0 100px rgba(0, 0, 0, 0.1) inset;
    position: relative;
  }
  .clearfix::after{
    content:'';
    clear: both;
    display: block;
  }
  .layout-left{
    position: absolute;
    left:20%;
  }
  .profile{
    width:100%;
    height: 180px;
    overflow: hidden;
    > .name{
      font-size:3rem;
      margin-bottom: 10px;
    }
    > .birth,.position,.information{
      line-height: 30px;
    }
  } 
  .work-history,.edu-history{
    > h3{
      background:$header-bgc;
      padding:10px;
    }
    > .container{
      min-height:100px;
      padding:10px;
      >.date{
        float:left;
        height:100px;
        width:20%;
      }
    }
  }
  

</style>
