import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProductListOne from '@/components/ProductListOne'
import ShopCart from '@/components/ShopCart'
import Main from '@/components/Bus/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShopCart',
      component: ShopCart
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/one',
      name: 'ProductListOne',
      component: ProductListOne
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ],
  mode: 'history'
})
