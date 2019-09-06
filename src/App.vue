<template>
  <div id="app">
    <el-scrollbar style="height:100%;" :class="{homeScroll:$route.path=='/'}">
      <!-- <keep-alive> -->
      <router-view></router-view>
      <!-- </keep-alive> -->
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "style/index.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
