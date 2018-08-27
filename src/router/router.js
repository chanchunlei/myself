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
      path: '/',
      name: 'Home',
      component: resolve =>require(['../views/index.vue'],resolve),
      meta: {title: '首页'},
      children:[
        {
          path: '/Home',
          component: resolve =>require(['../components/Series.vue'],resolve),
          meta: {title:'首页'}
        },
        {
          path: '/Codding',
          component: resolve =>require(['../components/Codding.vue'],resolve),
          meta: {title:'codding'}
        },
        {
          path: '/Longway',
          component: resolve => require(['../components/Longway.vue'],resolve),
          meta: {title:'道阻且长'}
        },
        {
          path: '/Thinking',
          component: resolve => require(['../components/Thinking.vue'],resolve),
          meta: {title:'受想行识'}
        }
      ]
    }

  ]
})
