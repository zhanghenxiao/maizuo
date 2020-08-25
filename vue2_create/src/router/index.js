import Vue from 'vue'
import VueRouter from 'vue-router'
import center from '@/components/center/center'
import cinemas from '@/components/cinemas/cinemas'
import film from '@/components/films/film'
import nowplaying from '@/components/films/nowPlaying'
import comingsoon from '@/components/films/comingSoon'
import detail from '@/components/detail'
import cinemasDateil from '@/components/cinemas/cinemasDetail'
import city from '@/components/city'
Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    name: 'film',
    component: film,
    // redirect: '/nowplaying',
    children:[
      {
        path: '/film/nowplaying',
        name: 'nowplaying',
        component: nowplaying
      },
      {
        path: '/film/comingsoon',
        name: 'comingsoon',
        component: comingsoon
      },
      // 路由重定向
      {
        path: '/film',
        redirect: 'nowplaying',
      },
    ]
  },
  {
    path: '/center',
    name: 'center',
    component: center
  },
  {
    path: '/cinemas',
    name: 'cinemas',
    component: cinemas
  },
  {
    path: '/cinemas/:myid',
    name: 'cinemas',
    component: cinemas
  },
  {
    // 动态路由 要加冒号 不然就是个死路劲，接收传入id
    path: '/detail/:myid',
    name: 'detail',
    component: detail
  },
  {
    // 动态路由 要加冒号 不然就是个死路劲，接收传入id
    path: '/cinemasDetail/:myid',
    name: 'cinemasDetail',
    component: cinemasDateil
  },
  {
    path: '/city',
    name: 'city',
    component: city
  },
  // {
  // path: '*',
  // redirect: '/film'
  // }
  {
  path: '*',
  redirect: '/city'
  }


  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
