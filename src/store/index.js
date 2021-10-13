import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import converter from './modules/converter'
import portfolio from './modules/portfolio'

const store = new Vuex.Store({
  modules: {
    converter,
    portfolio
  }
})

export default store;