import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/home.vue'
import Index from './pages/index.vue'

Vue.use(VueRouter)

/**
 * 编写路由规则注意点：
 * 1、不要忘记加 redirect
 * 2、children不要拼写错误
 * 3、children中的path前面不要加 /
 */
const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  redirect: '/index',
  children: [{
    path: '/index',
    name: 'index',
    component: Index
  }, {
    path: 'product',
    name: 'product',
    component: () => import('./pages/product.vue')
  }, {
    path: 'detail',
    name: 'detail',
    component: () => import('./pages/detail.vue')
  }]
}, {
  path: '/order',
  name: 'order',
  component: () => import('./pages/order.vue'),
  children: [{
    path: 'orderList/:id',
    name: 'order-list',
    props: true,
    component: () => import('./pages/orderList.vue')
  }, {
    path: 'orderConfirm',
    name: 'order-confirm',
    props: true,
    component: () => import('./pages/orderConfirm.vue')
  }, {
    path: 'orderPay',
    name: 'order-pay',
    component: () => import('./pages/orderPay.vue')
  }, {
    path: 'alipay',
    name: 'alipay',
    component: () => import('./pages/alipay.vue')
  }]
}, {
  path: '/cart',
  name: 'cart',
  component: () => import('./pages/cart.vue')
}, {
  path: '/login',
  name: 'login',
  component: () => import('./pages/login.vue')
}]

const router = new VueRouter({
  routes
})

export default router
