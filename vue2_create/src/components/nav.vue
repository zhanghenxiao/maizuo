<template>
  <div class="nav" >
    <!-- 声明式导航 tag='div' active-class高亮显示 -->
      <router-link to="/film" active-class="myactive">
        <div>
          <i class="iconfont img"> &#xe679;</i>
          <span>电影</span> 
        </div>
      </router-link>
      <router-link to="/cinemas" active-class="myactive">
        <div>
          <i class="iconfont img">&#xe8c0;</i>
          <span>影院</span> 
        </div>
      </router-link>
      <router-link to="/center" active-class="myactive">
        <div>
          <i class="iconfont img">&#xe639;</i>
          <span>我的</span> 
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.myactive
  color red
.nav
  position fixed
  bottom 0px
  left 0px
  display flex
  width 100%
  justify-content space-around
  background #fff
  >span,i
    display block
  .img
    text-align center
    width 21px
    height 21px
    width 100%
</style>