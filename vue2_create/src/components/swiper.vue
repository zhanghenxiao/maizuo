<template>
    <div class='swiper-container'>  
        <div class='swiper-wrapper'>
          <slot></slot>
        </div>
        <!-- 这是分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
    </div>
</template>

<script>
import Swiper from 'swiper' //js文件
// 注意导入文件swiper 的路劲在node_modules中。。。
import 'swiper/css/swiper.min.css'  //css文件
export default {
  // 接受父组件传过来的值一定要加''
  props: ['Perview','myclass'],
  mounted() {
  //  new Swiper('.swiper-container', {
    new Swiper('.'+ this.myclass, { 
     autoplay: true,    //自动播放
    //  loop: true,        //循环播放
    //  delay: 500,       //每张图间隔秒
      //分页器
      // pagination: {
      //   el: ".swiper-pagination"
      // },
      slidesPerView: this.Perview, //展示个数
      spaceBetween: 10, //间隔距离
    });
  }, 
}
</script>


<style lang='stylus' scoped>

// .swiper-container {
//   height: 300px;
//   display:flex;
// }  
// .swiper-slide img{
//   width: 100%;
//   height: 100%;
// }
</style>