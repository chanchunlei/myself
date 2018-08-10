import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',//去掉#号
  routes: [
    {
      path: '/',
      redirect: '/Home' //重定向
    },
    {
      path: '/Home',
      name: 'Home',
      component: resolve =>require(['../views/index.vue'],resolve),
      meta: {title: '首页'}
    }
  ]
})
