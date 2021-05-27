import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    drinks: [],
    snacks: []
  },
  mutations: {
    addItem(state, data) {
      let item = state.cart.find(p => p.id === data.id);
      if(!item) {
        state.cart.push({ 
          id: data.id, 
          category: data.category,
          amount: 1, 
          // Random id with 10 digits: https://gist.github.com/lpf23/9762508
          cartId: parseInt(Math.random().toFixed(10).replace("0.","")) })
      } else {item.amount+=1}
    },

    discardItems(state, cartId) {
      if(cartId) {
        let index = state.cart.findIndex(p => p.cartId === cartId);
        state.cart.splice(index, 1)
      }
      else {state.cart.length = 0}
    },
    
    populate(state, data) {
      if (data.category == 'drinks') {
        state.drinks = data.items
      } state.snacks = data.items
    }
  },
  actions: {},
  modules: {},
});
