import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    drinks: [],
    orders: [],
    snacks: []
  },
  mutations: {
    addItem(state, data) {
      let item = state.cart.find(p => p.id === data.id);
      if(!item) {
        state.cart.push({ 
          id: data.id, 
          type: data.type,
          amount: 1, 
          // Random id with 10 digits: https://gist.github.com/lpf23/9762508
          cartId: parseInt(Math.random().toFixed(10).replace("0.","")) })
      } else {item.amount+=1}
    },

    addOrder(state) {
      state.orders.push({
        orderId: parseInt(Math.random().toFixed(10).replace("0.","")),
        countdown: '30:00',
        items: state.cart.map((i) =>( {id: i.id, type: i.type, amount: i.amount }))
       })
    },

    discardItem(state, cartId) {
        let index = state.cart.findIndex(p => p.cartId === cartId);
        state.cart.splice(index, 1)
    },

    discardItems(state) {
      Vue.set(state.cart=[])

    },
    populate(state, data) {
      if (data.category == 'drinks') {
        state.drinks = data.items
      } state.snacks = data.items
    }
  },

  getters:{
    itemsInCart: (state) => () => {
      if(state.cart.length > 0) {
        let items = state.cart.map((p) => p.amount).reduce((a, b) => a + b)
        return items
      } return 0
    } 
  },
  plugins: [new VuexPersistence().plugin] 

});
