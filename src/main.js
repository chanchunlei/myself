
import VueLazyComponent from '@xunlei/vue-lazy-component' //使用迅雷懒加载组件
import animate from 'animate.css' //使用动画
import Vue from 'vue'
import App from './App'
import router from './router/router'//路由
import store from './vuex/store'//把store的实例注入到所有的子组件中
import VueAwesomeSwiper from 'vue-awesome-swiper' //引入swiper
import 'swiper/dist/css/swiper.css'
import axios from "axios/index";

Vue.config.productionTip = false
Vue.use(VueLazyComponent)//使用懒加载插件
Vue.use(VueAwesomeSwiper)//使用滚动插件


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //console.log(config);
  store.commit('nav',true);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  store.commit('nav',false);
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});




/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
