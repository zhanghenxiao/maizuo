<template>
  <div class="topnav1">
    <router-link to="/film/nowplaying" active-class="myactive">
      <span>正在热映</span>
    </router-link>
    <router-link to="/film/comingsoon" active-class="myactive">
      <span>即将上映</span>
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
.topnav1
  display: flex
  justify-content: space-around
  height: 49px
  width: 100%
  line-height: 49px;
</style>