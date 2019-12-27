import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Category from '@/components/Category'
import Cart from '@/components/Cart'
import SearchPage from '@/components/SearchPage'
import Mine from '@/components/Mine'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import GoodsDetail from '@/components/GoodsDetail'
// import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name:'Home',
      component: Home
    },
    {
      path: '/catgory',
      component: Category
  }, {
      path: '/cart',
      component: Cart
  }, {
      path: '/search',
      component: SearchPage
  }, {
      path: '/mine',
      component: Mine
  }, {
      path: '/login',
      component: Login
  }, {
      path: '/register',
      component: Reg
  }, {
      path: '/catgory/:id',
      component: Category
  }, {
      path: '/detail/:id',
      component: GoodsDetail
  },
  {
    path: '/cart/',
    component: Cart
}
  ]
})
