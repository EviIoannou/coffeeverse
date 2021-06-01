import db from './firebaseApp';

//import vuex store in order to access it from this js file:
import store from '../src/store';

//add item to cart
let addToCart = (id, type) => {
  store.commit('addItem', {
    id: id,
    type: type
  })
}

//add an order 
let addOrder = () => {
  store.commit('addOrder')
}

//discard item(s)
let discardItems = (cartId) => {
  store.commit('discardItems', cartId)
}

//populate drinks array/data in vuex store
let fetchDrinks = () => {
      let drinksData = []
      db.collection('drinks')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            drinksData.push({
              id: doc.id,
              name: doc.data().Name,
              image: doc.data().Image,
              rating: doc.data().Rating,
              votes: doc.data()["Ratings amount"],
              price: doc.data().Price,
              previousPrice: doc.data()["Previous price"],
              shop: doc.data().Shop,
              discount: doc.data().Discount,
              decaf: doc.data().Decaf,
              sweet: doc.data().Sweet,
              hot: doc.data().Hot,
              category: doc.data().Category,
              noMilk: doc.data()["No-milk"],
            })
            console.log(doc.id, ' => ', doc.data())
          })
          return drinksData
        })
        .then(() => {
          store.commit('populate', {
            category: 'drinks',
            items: drinksData
          })
        })
        .then(() => {
          console.log(store.state.drinks)
        })
        .catch((error) => {
          console.log('Error getting documents: ', error)
        })
}

//populate snacks array/data in vuex store
let fetchSnacks = () => {
  let snacksData = []
  db.collection('snacks')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        snacksData.push({
          id: doc.id,
          name: doc.data().Name,
          image: doc.data().Image,
          rating: doc.data().Rating,
          votes: doc.data()["Ratings amount"],
          price: doc.data().Price,
          previousPrice: doc.data()["Previous price"],
          shop: doc.data().Shop,
          discount: doc.data().Discount,
          sweet: doc.data().Sweet,
          vegan: doc.data().Vegan,
          vegetarian: doc.data().Vegetarian,
          ingredients: doc.data().Ingredients,
        })
        console.log(doc.id, ' => ', doc.data())
      })
      return snacksData
    })
    .then(() => {
      store.commit('populate', {
        category: 'snacks',
        items: snacksData
      })
    })
    .then(() => {
      console.log(store.state.snacks)
    })
    .catch((error) => {
      console.log('Error getting documents: ', error)
    })
}

export default {addOrder, addToCart, discardItems ,fetchDrinks, fetchSnacks}
