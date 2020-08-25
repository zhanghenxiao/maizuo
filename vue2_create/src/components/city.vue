<template>
  <div>
    <div class="close">
      <div class="offflex">
        <router-link to="./cinemas">
          <div class="off">x</div>
        </router-link>
        
        <div class="nowcity">当前城市</div>
      </div>
      <div class="search-wrapper">
        <div class="search">
          <input
            v-model="keyword"
            type="text"
            placeholder=" 输入城市名或拼音"
          />
          <ul>
            <li class="item" v-for="item in searchlist" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </div>
        <!-- <div class="cancel">取消</div> -->
      </div>
    </div>
    <div class="positioncity">
      <p>GPS定位你所在得城市</p>
      <div v-if="city">
        {{city}}
      </div>
      <div v-else>
        定位失败
      </div>
    </div>
    <ul>
      <h5 style="color=#797d82">热门城市</h5>
      <div v-for="item in urlcities" :key="item.name">
        <div class="container" @click="changecity(item.cityId)">
          <div v-show="item.isHot === 1">
            {{ item.name }}
          </div>
        </div>
      </div>
      <li class="item" v-for="item in urlcities" :key="item.cityId" @click="changecity(item.cityId)">
        {{item.name}}
      </li>
    </ul>
    <!-- <div class="text">hello</div> -->
  </div>
</template>

<script>
import citys from "@/assets/city.json";
import { showLoading, hideLoading } from './elloading';
import { Indicator } from 'mint-ui'
import getCurrentCityName from './positioning'
export default {
  data() {
    return {
      // cities: citys.data.cities,
      urlcities: "",
      keyword: "",
      searchlist: [],
      timer: null,
      city: '',
    };
  },
  beforeCreate() {
    // showLoading()
    Indicator.open({
    text: '正在定位...',
    spinnerType: 'fading-circle'
    });
  },
  created() {
    this.positionCity()
  },
  computed: {
    // generateSmall() {
    //   var ch_small = "a";
    //   var str_small = "";
    //   for (var i = 0; i < 26; i++) {
    //     str_small += String.fromCharCode(ch_small.charCodeAt(0) + i);
    //   }
    //   return str_small;
    // },
    // 获取字母表
    // test() {
    //   var arr = [];
    //   for (var i = 0; i < this.cities.length; i++) {
    //     const price = this.cities[i].pinyin[0];
    //     arr.push(price);
    //   }
    //   var hash = [];
    //   for (var i = 0; i < arr.length; i++) {
    //     for (var j = i + 1; j < arr.length; j++) {
    //       if (arr[i] === arr[j]) {
    //         ++i;
    //       }
    //     }
    //     hash.push(arr[i]);
    //   }
    //   return hash.sort();
    // },
  },
  // 监听keyword 的值,监听的值方法名必须与值名一致
  watch: {
    keyword() {
      // 节流函数 参考https://www.w3cschool.cn/fetch_api/fetch_api-oeh82vh7.html
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const reslut = [];
        this.urlcities.forEach((element) => {
          if (
            element.pinyin.indexOf(this.keyword) > -1 ||
            element.name.indexOf(this.keyword) > -1
          ) {
            reslut.push(element);
          }
        });
        this.searchlist = reslut;
      }, 100);
    },
      // this.timer = setTimeout(() => {
      //   const reslut = [];
        // for (let i in this.urlcities) {

        //   console.log(i); // 输出的是对象的键值,注意观察数据结构。。，键后面的键值是arrry
          // this.urlcities[i].forEach((element) => {
          //   if (
          //     element.pinyin.indexOf(this.keyword) > -1 ||
          //     element.name.indexOf(this.keyword) > -1
          //   ) {
          //     reslut.push(element);
          //   }
          // });
      //   }
      //   this.searchlist = reslut;
      // }, 100);
    // },
    urlcities() {},
  },
  mounted() {
    // 获取到的全是object 可能是存储格式问题，暂不采用城市列表存储至localStorage
    // if (localStorage.cities){
    //   console.log('localStorage中有cities');
    //   console.log(localStorage.cities);
    //   for(let i=0;i>localStorage.cities;i++){
    //     console.log(i.name);
    //   }
    // }else{
    //   this.getData()
    //   console.log('重新获取数据');
    // }
    // 均可从缓存中获取city值
    // console.log(localStorage.getItem('city'));
    // console.log(localStorage.city);
    //可修改缓存值
    // console.log(localStorage.setItem('city','北金'));
    // console.log(localStorage.city);

    this.getData();
    // console.log(this.cities);
  },
  methods: {
    positionCity() {
        getCurrentCityName().then((city) =>{
          console.log(city);
          this.city = city
        });
    },
    //  卖座电影 https://m.maizuo.com/v5/?co=mzmovie#/films/nowPlaying
    getData() {
      //  简写
      //  this.$http.get('/ajax/movieOnInfoList?token=').then(res =>{
      //    console.log(res.data)
      //  })
      this.$http({
        url: "https://m.maizuo.com/gateway?k=9910078",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889272153375844294689","bc":"310100"}',
          "X-Host": "mall.film-ticket.city.list",
        },
      }).then((res) => {
        const cities = res.data.data.cities;
        Indicator.close();
        // hideLoading()
        // const citylist = []
        // cities.forEach(element => {
        //   // console.log(element.name)
        //   citylist.push(element.pinyin)
        // }, console.log(citylist));
        // console.log(typeof(cities));
        // var arr=[1,8,4,12];
        // var arr = ['你好','啊', '不好']
        // console.log(arr.sort());
        this.urlcities = cities;
        // console.log(cities);
        // 传入数据cities数据至store中mutations 的changeCities中
        // this.$store.commit('changeCities',cities)
      });
    },
    changecity(id) {
      this.$store.commit('changecitymutations',id)
      this.$router.push(`/cinemas/${id}`)
      console.log(localStorage.localcity)
      // console.log(data);
     },
    },
};
</script>

<style lang="stylus" scoped>
// 伪类的使用场景一
.text
  &:after{content:'222'}
.container
  padding-left 10px
  margin 10px
  text-align center
  > div
    background  #f4f4f4
    width 99px
    height 30px
    line-height 30px 
.item 
  padding-top 10px
  border: 1px solid #e5e4e9
.positioncity
  padding-bottom 10px
.close
  .offflex
    padding-top 10px
    display flex
    font-size 20px
    .off
      flex 0,0,44px
      text-align center
      padding-left 10px
    .nowcity
      flex 1
      text-align center
  .search-wrapper
    margin-top 10px
    background  #f4f4f4
    height 49px
    width 100%
    text-align center
    .search
      text-align center
      margin-top 10px
      width 375px
      display inline-block
      background #fff
      color #2c3e50
      height 30px
      line-height 30px
      box-sizing border-box
      z-index 100
      .item
        z-index 100
        background yellow
        width 395px
        text-align left
        border-bottom : 1px solid #e5e4e9
    .cancel
      display inline-block
</style>
