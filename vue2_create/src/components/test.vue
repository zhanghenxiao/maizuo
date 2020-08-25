<template>
  <div>
    <div id="box" v-show="false"></div>
  </div>
</template>

<script>
// import getCurrentCityName from './a';
export default{
    mounted(){
      this.test()
    },
    methods: {
      test() {
        getCurrentCityName().then((city) =>{
          console.log(city);
        });
      }
    }
}
</script>

<style lang="stylus" scoped>

</style>