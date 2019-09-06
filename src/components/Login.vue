<template>
  <div class="login-box" >
    <el-row>
      <el-col :span="8">
        <el-input id="name"  v-model="username" placeholder="请输入账号">
          <template slot="prepend">账号</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
          <template slot="prepend">密码</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button id="login" v-on:click="check" style="width:100%" type="primary">登录</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <a href="/register"><span class="login-span">立即注册</span></a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "Login",
      data() {
        return {
          username:'',
          password:''
        }
      },
      methods: {
        check(){
          this.$toaster.info('提示','用户名：'+this.username+',密码：'+this.password);
        }
      }
    }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
