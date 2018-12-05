import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home' //重定向
    },
    {
      path: '/',
      component: resolve =>require(['../views/index.vue'],resolve),//懒加载
      meta: {title: '首页'},
      children:[
        {
          path: '/Home',
          name: 'Home',
          component: resolve =>require(['../components/index/Series.vue'],resolve),
          meta: {title:'首页'}
        },
        {
          path: '/Coding',
          name: 'Coding',
          component: resolve =>require(['../components/pages/Coding.vue'],resolve),
          meta: {title:'coding'}
        },
        {
          path: '/Longway',
          component: resolve => require(['../components/pages/Longway.vue'],resolve),
          meta: {title:'道阻且长'}
        },
        {
          path: '/Thinking',
          component: resolve => require(['../components/pages/Thinking.vue'],resolve),
          meta: {title:'受想行识'}
        },
        {
          path: '/Timeline',
          component: resolve => require(['../components/pages/Timeline.vue'],resolve),
          meta: {title: '时间轴'}
        },
        {
          path: '/Article',
          component: resolve => require(['../components/pages/ArticleDetail.vue'],resolve),
          meta: {title: '正文'}
        }
      ]
    },
    {
      path: '/Aboutme',
      component: resolve => require(['../views/Aboutme.vue'],resolve),
      mete: {title: '关于我'}
    },
    {
      path :'/404',
      component: resolve => require(['../views/404.vue'],resolve),
      meta: {title: '404'}
    },
    {//参数不对时自动去404
      path: '*',
      redirect: '/404'
    }

  ]
})
