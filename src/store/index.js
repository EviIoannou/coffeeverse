import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drinks: [],
    snacks: []
  },
  mutations: {
    populate(state, data) {
      if (data.category == 'drinks') {
        state.drinks = data.array
      } state.snacks = data.array
    }
  },
  actions: {},
  modules: {},
});
