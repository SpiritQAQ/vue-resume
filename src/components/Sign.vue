<template>
  <div class="dialog">
    <section id="sign">
      <div class="tab">
        <span class="tabList" v-model="activeType" v-bind:class="{active : activeType=='signIn'}" value="signIn">登录</span> · 
        <span class="tabList" v-model="activeType" v-bind:class="{active : activeType=='signUp'}" value="signUp">注册</span>  
      </div>
      <div class="signUp" v-if="activeType=='signUp'">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="70px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm2.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
          </el-form-item> 
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>              
      </div>
      <div class="signIn"  v-if="activeType=='signIn'">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="70px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm2.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
          </el-form-item>
        </el-form>              
      </div>    
    </section>
  </div>
</template>

<script>
  export default {
  name:"Sign",
    data() {
      
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          if (value.length<=6&&value.length>=18) {
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
        activeType:"signUp",
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
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
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  
  computed : {
    
  },
  methods : {
  }
}
</script>

<style lang="scss">
  $blue :rgba(64,158,255,1);
  .dialog{background:#f1f1f1;height:100%;}
  #sign{
    // height:500px;
    background: #fff;
    width:400px;
    border-radius:4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    margin:150px auto 0;
    // position: absolute;
    // top:0;
    // left:0;
    // bottom: 0;
    // right:0;
    padding:20px 30px;
  }
  .tab{
    width:150px;
    margin:20px auto;
    line-height:50px;
    font-size:20px;
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
    margin:40px 0;
    padding-right:20px;
    button{
      margin:20px 30px;
      width:80px;
    }
  }
  .signIn{
    margin:40px 0;
    padding-right:20px;
    button{
      width:100px;
      margin:20px 0px 10px 80px;  
    }
  }
</style>
