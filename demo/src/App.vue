<template>
  <div id="app">
    <!-- header 顶部区域 -->
 <mt-header fixed title="固定在顶部"></mt-header>
    <!-- 中间 router 区域 -->
    <transition class="ko">
    <router-view></router-view>
    </transition>

    <!-- footer 区域 -->
<van-tabbar v-model="active" route='true'>
  <van-tabbar-item icon="home-o" to='/home' >标签</van-tabbar-item>
  <van-tabbar-item icon="search"  to='/home2' >标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o"  to='/home3' info='0' >标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to='/home4' >标签</van-tabbar-item>
</van-tabbar>
  </div>
</template>
import hello  from 'components/'HelloWorld'
<script>
export default {
  name: 'App',
  data() {
    return {
     active:0
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 40px;
  overflow-x: hidden;
}
/* .v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
opacity: 0; 
  transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,.v-leave-active{
  opacity: 1;
  transition: all 2s;

  
} */
</style>
