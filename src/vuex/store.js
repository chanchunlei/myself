import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
Vue.use(Vuex);
const state = {
    loading: true,
    classifyId: 1,
    pageAll: 10,
    pageNow:1,
    subClassifyId: 1,
    paping: false
}

export default new Vuex.Store({ //插件输出
  state,
  mutations,
  actions
})
