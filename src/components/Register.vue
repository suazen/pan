<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-box">
    <el-row>
      <el-col :span="8">
        <el-form-item prop="username">
          <el-input placeholder="请输入账号" v-model="ruleForm.username">
            <template slot="prepend">账&emsp;&emsp;号</template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item prop="nickname">
          <el-input placeholder="请输入昵称" v-model="ruleForm.nickname">
            <template slot="prepend">昵&emsp;&emsp;称</template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" type="password" v-model="ruleForm.password" autocomplete="off">
            <template slot="prepend">密&emsp;&emsp;码</template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item prop="checkPass">
          <el-input placeholder="请再次输入密码" type="password" v-model="ruleForm.checkPass" autocomplete="off">
            <template slot="prepend">确认密码</template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
          <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">注册</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px;">
      <el-col :span="8">
        <a href="/login"><span class="login-span">立即登录</span></a>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  export default {
    name: "register",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          userName: "",
          password: "",
          nickName: "",
          checkPwd: ""
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          nickname: [
            {required: true, message: '请输入昵称', trigger: 'blur'}
          ]
        }
      }
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
      }
    }
  }
</script>

<style scoped>
</style>
