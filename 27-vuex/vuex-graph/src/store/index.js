import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nums: [],
  },
  mutations: {
    append(state, num) {
      state.nums.push(num)
    },
    trim(state, keep=10) {
      if (state.nums.length > keep) {
        state.nums = state.nums.slice(-keep)
      }
    }
  },
  getters: {
    latest(state) {
      if (state.nums.length === 0) {
        return -1
      }
      return state.nums[state.nums.length - 1]
    }
  },
  actions: {
    record({commit}, {num, keep=10}) {
      commit('append', num)
      commit('trim', keep)
    }
  },
  modules: {
  }
})
