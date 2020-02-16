import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import PhotoList from '.././pages/PhotoList.vue'
import Login from '.././pages/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PhotoList
  },
  {
    path: '/Login',
    name: 'About',
    component: Login
    
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  base: '/vuesplash/',
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
