<template>
  <div>
    <!-- comingsoon -->
    <ul>
      <li v-for="item in this.$store.state.comingSoon" :key="item.filmId" @click="changePage(item.filmId)">
        <div class="all">
          <div class="nameimg">
            <img :src="item.poster" width="66px" height="97px" />
          </div>
          <div class="des">
            <div class="name">{{item.name}}</div>
            <div class="grade">观众评分{{item.grade}}</div>
            <div class="director">主演{{item.director}}</div>
            <div class="nation">{{item.nation}}{{item.runtime}}</div>
          </div>
        </div>
        <div class="buy">
          <button>购票</button>
        </div>
      </li>
    </ul>  
  </div>
</template>

<script>
export default {
  methods: {
    changePage(id) {
      // 通过点击事件传id 至路由,路由接受传入ID
      // console.log(id)
      this.$router.push(`/detail/${id}`) 
    },
  },
  mounted() {
    if(this.$store.state.comingSoon.length === 0){
      console.log('内容为空，需发起action异步请求')
      this.$store.dispatch('getComingSoonData')
    }else{
      console.log('使用vuex 中缓存数据');
    }
  }
}
</script>

<style lang="stylus" scoped>
li {
  height: 124px;
  position relative
}

.all {
  height: 94px;
  padding-left: 10px;
  display: flex;
  bottom: 30px;

  .nameimg {
    flex: 0, 0, 66px;
  }

  .des {
    padding-left: 10px;
    flex: 1;

    .name {
      font-size: 18px;
      padding-bottom: 8px;
    }

    .grade {
      color: #797d82;
      padding-bottom: 8px;
    }

    .director {
      color: #797d82;
      padding-bottom: 8px;
    }

    .nation {
      color: #797d82;
      padding-bottom: 8px;
    }
  }
}

.buy
  position absolute
  right 10px
  bottom 74px

</style>