import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    count: 1
  },
  mutations:{//mutations 内封装对状态值改变的函数

  }
})
export default store
