
import animate from 'animate.css' //使用动画

import Vue from 'vue'
import App from './App'
import router from './router/router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex) //使用vuex
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
