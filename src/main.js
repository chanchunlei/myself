
import VueLazyComponent from '@xunlei/vue-lazy-component' //使用迅雷懒加载组件
import animate from 'animate.css' //使用动画
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'//使用滚动插件
import Vue from 'vue'
import App from './App'
import router from './router/router'//路由
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex) //使用vuex
Vue.use(VueFullpage)
Vue.use(VueLazyComponent)
Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
