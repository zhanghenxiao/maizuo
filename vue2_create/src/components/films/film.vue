<template>
  <div class="film">
    <div class="topnav1" v-show="sure">
      <router-link to="/film/nowplaying" active-class="myactive">
        <span>正在热映</span>
      </router-link>
      <router-link to="/film/comingsoon" active-class="myactive">
        <span>即将上映</span>
      </router-link>
    </div>
    <div  class="show" v-show="show">
      <div class="scorll">电影</div>
      <div class="topnav2">
        <router-link to="/film/nowplaying" active-class="myactive">
          <span>正在热映</span>
        </router-link>
        <router-link to="/film/comingsoon" active-class="myactive">
          <span>即将上映</span>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      sure: true
    }
  },
  mounted() {
    // 监听滚动事件,使用完之后需解绑，这是全局事件,
    window.onscroll = this.userOnscroll;
    // window.addEventListener("scroll",this.userOnscroll); 
  },
  methods: {
    userOnscroll() {
      // 输出距离顶部的滚动值
      const top = document.documentElement.scrollTop;
      console.log(top)
      if (top >= 79) {
        this.show = true
        this.sure = false
      }
      else{
        this.show = false
        this.sure = true
      }
    },
  },
  destroyed() {
    console.log('destroyed');
    window.onscroll = null
  }
};
</script>

<style lang="stylus" scoped>
.myactive
  color red
.scorll {
  text-align: center;
  font-size: 18px;
  font-weight:800
  padding-top: 5px;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  color #000
}

.topnav1
  display: flex
  justify-content: space-around
  height: 49px
  width: 100%
  line-height: 49px;
.show
  position fixed
  width 100%
  .topnav2
    display: flex
    justify-content: space-around
    height: 49px
    width: 100%
    line-height: 49px;
</style>