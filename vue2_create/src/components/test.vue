<template>
  <div class="try">
    <ul>
      <li v-for="item in list" :key="item">
        <div>1</div>
        <div>2</div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      list: 10
    }
  },
  mounted() {
    new BScroll(".try")
  },
}
</script>

<style lang="stylus" scoped>
div
  height 300px
  overflow hidden
li
  height 50px
  width 100%
  background red
</style>