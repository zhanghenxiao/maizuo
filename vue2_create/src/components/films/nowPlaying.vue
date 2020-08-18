<template>
  <div>
    <ul>
      <li v-for="item in films" :key="item.filmId" @click="changePage(item.filmId)">
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
  data() {
    return {
      films: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    changePage(id) {
      // 通过点击事件传id 至路由,路由接受传入ID
      // console.log(id)
      this.$router.push(`/detail/${id}`) 
    },
    //  卖座电影 https://m.maizuo.com/v5/?co=mzmovie#/films/nowPlaying
    getData() {
      //  简写
      //  this.$http.get('/ajax/movieOnInfoList?token=').then(res =>{
      //    console.log(res.data)
      //  })
      this.$http({
        url:
          "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2402857",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889272153375844294689","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        // console.log(res.data);
        const films = res.data.data.films;
        // console.log(films);
        this.films = films;
      });
    },
  },
};
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
      color: #ffb232;
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
  color: #ffb232

</style>