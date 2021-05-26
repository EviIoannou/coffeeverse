import db from './firebaseApp';

//import vuex store in order to access it from this js file:
import store from '../src/store';
let addToCart = (id, category) => {
  store.commit('addItem', {
    id: id,
    category: category
  })
}

let fetchDrinks = () => {
      //populate drinks array/data in vuex store
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
};

export default {addToCart, fetchDrinks}
