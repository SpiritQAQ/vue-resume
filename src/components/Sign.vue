<template>
  <div class="dialog" v-show="dialogStatus">
    <section id="sign">
      <div class="tab">
        <span class="tabList" v-on:click="signInToggle() ,resetForm('ruleForm2')" v-bind:class="{active : activeType=='signIn'}" value="signIn">登录</span> · 
        <span class="tabList" v-on:click="signUpToggle() ,resetForm('loginForm')" v-bind:class="{active : activeType=='signUp'}" value="signUp">注册</span>  
      </div>
      <div class="signUp" v-show="activeType=='signUp'"> <!--v-if会使表单验证的promise报错，
      一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。-->
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="70px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm2.name" icon='user' ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
          </el-form-item> 
          <el-form-item>
            <el-button type="primary" @click="signUp(ruleForm2)">注册</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>              
      </div>
      <div class="signIn"  v-show="activeType=='signIn'"> 
        <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="70px" class="demo-ruleForm">
           <el-form-item label="用户名" prop="name">
            <el-input v-model="loginForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login(loginForm)">登陆</el-button>
          </el-form-item>
        </el-form>              
      </div>    
    </section>
  </div>
</template>

<script>
import AV from 'leancloud-storage'

  export default {
    name:"Sign",
    data() {
      
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          if (value.length<6||value.length>18) {
            callback(new Error('用户名长度要在6-18个字符'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validateLoginPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value.length<6||value.length>15){
            callback(new Error('密码长度要在6-15个字符'));
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        loginForm:{
          pass:'',
          name:''
        },
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        loginRules:{
          pass: [
            { validator: validateLoginPass, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]         
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        },
      };
    },
    methods: {
      // submitForm(formName) {
      //   this.$refs[formName].validate((valid) => {
      //     if (valid) {
      //       alert('submit!');
      //     } else {
      //       console.log('error submit!!');
      //       return false;
      //     }
      //   });
      // },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      signUp(obj){
        var user = new AV.User()
        user.setUsername(obj.name)
        user.setPassword(obj.pass)
        user.signUp().then((loginedUser)=>{
          this.$store.commit("showSuccessMsg","注册成功!")
          this.$store.commit('signInToggle')
          this.$data.loginForm.name = obj.name
          this.$data.loginForm.pass = obj.pass
        },(error)=>{
            switch(error.code){
              case 210 : 
                this.$store.commit("showErrorMsg",'用户名与密码不匹配')
              break;
              case 202 :
                this.$store.commit("showErrorMsg",'用户名已经被占用')
              break;
              case 201 :
                this.$store.commit("showErrorMsg",'没有提供密码，或者密码为空。')
              break;
              case 403 :
                this.$store.commit("showErrorMsg",'当应用在控制台中的相关服务选项未打开，如 Class 关闭了权限，或是 User 缺失了 session 信息等情况下，云端会统一地返回 403 错误码及不同的错误信息，代表当前请求因权限不够而被拒')
              break;
              case 401 :
                this.$store.commit("showErrorMsg",'未经授权的访问，没有提供 App id，或者 App id 和 App key 校验失败，请检查配置。')
              break;
              default:
               this.$store.commit("showErrorMsg",error)
              break;
            }
        })
      },
      login(obj){
        AV.User.logIn(obj.name,obj.pass).then((loginedUser)=>{
          this.$store.commit("showSuccessMsg","登陆成功!")
          this.$store.commit('loginSuccessed')
          this.$store.commit('updateLoginedUser',loginedUser)
          this.$store.commit('loadResume')
          this.closeDialog()
          // this.$store.commit('closeDialog')
        }, (error)=> {
              switch(error.code){
              case 210 : 
                this.$store.commit("showErrorMsg",'用户名与密码不匹配')
              break;
              case 201 :
                this.$store.commit("showErrorMsg",'没有提供密码，或者密码为空。')
              break;
              case 211 : 
                this.$store.commit("showErrorMsg",'找不到用户。')
              break;   
              case 217 : 
                this.$store.commit("showErrorMsg",'无效的用户名，不允许空白用户名。')
              break;                         
              case 403 :
                this.$store.commit("showErrorMsg",'当应用在控制台中的相关服务选项未打开，如 Class 关闭了权限，或是 User 缺失了 session 信息等情况下，云端会统一地返回 403 错误码及不同的错误信息，代表当前请求因权限不够而被拒')
              break;
              case 401 :
                this.$store.commit("showErrorMsg",'未经授权的访问，没有提供 App id，或者 App id 和 App key 校验失败，请检查配置。')
              break;
              default:
               this.$store.commit("showErrorMsg",error)
              break;
            }
      });
      },
      signUpToggle(){
        this.$store.commit('signUpToggle')
      },
      signInToggle(){
        this.$store.commit('signInToggle')
      },
      closeDialog(){
        this.$store.commit('closeDialog')
      }
    },
    computed:{
      activeType(){
        return this.$store.state.activeType
      },
      dialogStatus(){
        return this.$store.state.dialogStatus
      },
      isLogined(){
        return this.$store.state.loginSuccess
      },
    
    }    
}
</script>

<style lang="scss">
  // $blue :rgba(64,158,255,1);
  $blue :#31b1e5;
  .dialog{
    position: absolute;
    top:0;
    left:0;
    z-index:2;
    height:100%;
    width:100%;
    
  }
  .dialog:before{
    position: absolute;
    background:url('/dist/static/img/dialogWaller2.jpg');
    filter: blur(10px);
    z-index:3;
    background-size: cover;
    top:0;
    left:0;
    bottom: 0;
    right:0;
    content:'';
  }

  #sign{
    background: #fff;
    width:400px;
    border-radius:4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    vertical-align: middle;
    position:fixed;
    z-index:4;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%);
    // margin:150px auto 0;
    // position: absolute;
    // top:0;
    // left:0;
    // bottom: 0;
    // right:0;
    padding:20px 20px 5px 20px;
  }
  .tab{
    width:150px;
    margin:20px auto;
    line-height:50px;
    font-size:20px;
    position: relative;
    z-index: 5;
    .active{
      border-bottom:2px solid $blue;
      color:$blue;
    }
    .tabList{
      cursor: pointer;
      margin:0px;
      padding:10px 10px ;
      &:hover{
        border-bottom:2px solid $blue;
      }
    }
  
  }
  .signUp{
    position: relative;
    z-index:5;
    margin:40px 0;
    padding-right:20px;
    button{
      margin:20px 30px;
      width:80px;
    }
  }
  .signIn{
    position:relative;
    z-index:5;
    margin:40px 0;
    padding-right:20px;
    button{
      width:100px;
      margin:20px 0px 20px 80px;  
    }
  }
</style>
