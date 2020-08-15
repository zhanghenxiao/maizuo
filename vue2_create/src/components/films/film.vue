<template>
  <div>
    <div class="scorll"></div>
    <div class="topnav">
      <router-link to="/film/nowplaying">
        <span>正在热映</span>
      </router-link>
      <router-link to="/film/comingsoon">
        <span>即将上映</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="stylus" scoped>
.topnav
  display flex
  justify-content space-around
  height 49px
  width 100%
  line-height 49px
  
</style>