import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const modA = {
  state: {
    name: 'jack',
    sex: 'male'
  }
}
export default new Vuex.Store({
  modules: {
    module1: modA
  },
  state: {
    num: 1,
    server: '/api',
    list: [
      {id: 1, name: 'jecky', sex: 0},
      {id: 2, name: 'harry', sex: 0},
      {id: 3, name: 'jerry', sex: 1}
    ],
    notices: []
  },
  getters: {
    getBoy: state => {
      return state.list.filter(item => item.sex === 0)
    }
  },
  mutations: {
    tst (state, args) {
      state.num += args.num
      console.log(state.num)
    },
    updateNotices (state, payload) {
      state.notices = payload || []
    }
  },
  actions: {
    tst (context) {
      context.commit('tst', {num: 11})
    },
    tsta ({commit}, prod) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('tst', prod)
          resolve()
        }, 1000)
      })
    },
    getNotices ({commit}) {
      console.log(Vue.$ajax)
      Vue.ajax({
        url: '/notice/notice/list',
        params: {
          page_num: 1,
          page_size: 10
        },
        done: (data = {}) => {
          commit('updateNotices', data)
        }
      })
    }
  }
})
