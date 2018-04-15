import Vue from 'vue'
import Vuex from 'vuex'
import facebook from './facebook'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    facebook
  }
})
