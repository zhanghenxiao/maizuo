<template>
  <div>
    <!-- 采用动态绑定（需先定义isfixed）+ 三目运算 -->
    <div :class="isfixed ? 'header': '' ">
      <div ref="title" :class="isfixed ? 'fixed': '' ">
        <div class='des' v-show='show'>
          <div class="city">上海</div>
          <div class="film">电影</div>
        </div>
        <toplink></toplink>
      </div>
    </div>


    
   <router-view></router-view>
  </div>
  <!-- <div class="film">
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
  </div> -->
  
</template>

<script>
import toplink from '../toplink'
export default {
  data() {
    return {
      show: false,
      sure: true,
      isfixed: ''
    }
  },
  components: {toplink},
  mounted() {
    // 监听滚动事件,使用完之后需解绑，这是全局事件,
    window.onscroll = this.userOnscroll;
    // window.addEventListener("scroll",this.userOnscroll); 
  },
  methods: {
    userOnscroll() {
      // 输出用户距离顶部的滚动值
      const top = document.documentElement.scrollTop;
      // 动态获取顶部值
      const titleheight = this.$refs.title.offsetHeight
      // console.log(titleheight);
      // console.log(top)
      if (top >= titleheight) {
        this.show = true
        this.isfixed = true
        // console.log(this.isfixed);
      }
      else{
        this.show = false
        this.isfixed = false
      }
    },
  },
  destroyed() {
    // console.log('destroyed');
    // 在这个页面销毁后，取绑全局监听事件
    window.onscroll = null
  }
};
</script>

<style lang="stylus" scoped>
.header
  height 93px
  background-color pink
.fixed
  position fixed
  left 0px
  top 0px
  width 100%
  background-color #ffffff
  z-index 100
.des
  padding-top 10px
  display flex
  text-align center
  .city
    flex 0, 0, 44px
  .film
    flex 1
    font-size 18px
    font-weight 20px 
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