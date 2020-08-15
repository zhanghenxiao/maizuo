<template>
  <div id="app">
    <!-- 路由容器  可放入多个-->
    <router-view></router-view>
    <usernav v-if="isShow"></usernav>
  </div>
</template>

<script>
import nav from './components/nav'
import {mapState} from 'vuex'
// 需求电影页面顶部实现，监听(window)用户滑动获取顶部距离()，后解绑beforeDestroy
// 需求电影详情页实现，封装swiper,利用插槽及父传子动态选择轮播数量，及传入不同名class
// 需求影院页实现， 利用better-scroll 平滑实现滚动，及时渲染 nexttick 注意better得结构，及底部导航得兼容显示
// 需求nav 电影页切换至电影详情页显示与隐藏实现 ===>
// （套路一；触发方法名会导致代码错乱）bus总线模块化开发 新建再导入各组件 bus.$emit('test'{})  bus.$on('test'{data})及监听与订阅得优先级再生命周期中实现
// （套路二：vuex同步状态/异步状态管理）
// 使用mutations来修改，二种写法...maPstate, getters(可取部分数据)
// 异步,先请求数据 存在至action 再放入state中可缓存数据 只要浏览器不刷新
// 定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
export default {
  components: {
    usernav:nav
  },
  computed: {
    // 展开合并运算符（这个蛮有意思的，合并二个列表），获取isShow变量状态,控制nav的显示与隐藏
    ...mapState(['isShow'])
  }
};
</script>

<style lang="stylus" scoped>
#app
  // height 3000px
  
</style>
