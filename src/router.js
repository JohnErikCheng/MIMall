import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  redirect: '/index',
  chidren: [{
    path: '/index',
    name: 'index',
    component: () => import('./pages/index.vue')
  }, {
    path: '/product',
    name: 'product',
    component: () => import('./pages/product.vue')
  }, {
    path: '/detail',
    name: 'detail',
    component: () => import('./pages/detail.vue')
  }]
}, {
  path: '/order',
  name: 'order',
  component: () => import('./pages/order.vue'),
  chidren: [{
    path: '/orderList/:id',
    name: 'orderList',
    props: true,
    component: () => import('./pages/orderList.vue')
  }, {
    path: '/orderConfirm',
    name: 'orderConfirm',
    props: true,
    component: () => import('./pages/orderConfirm.vue')
  }, {
    path: '/orderPay',
    name: 'orderPay',
    component: () => import('./pages/orderPay.vue')
  }]
}, {
  path: '/cart',
  name: 'cart',
  component: () => import('./pages/cart.vue')
}, {
  path: '/alipay',
  name: 'alipay',
  component: () => import('./pages/alipay.vue')
}, {
  path: '/login',
  name: 'login',
  component: () => import('./pages/login.vue')
}]

const router = new VueRouter({
  routes
})

export default router
