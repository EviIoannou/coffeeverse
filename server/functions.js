import db from './firebaseApp';
import store from '../src/store';

let fetchDrinks = () => {
      //populate drinks array/data in vuex store
      let drinksData = []
      db.collection('drinks')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            drinksData.push({
              id: doc.id,
              name: doc.data().Name
            })
            console.log(doc.id, ' => ', doc.data())
          })
          return drinksData
        })
        .then(() => {
          store.commit('populate', {
            category: 'drinks',
            array: drinksData
          })
        })
        .then(() => {
          console.log(store.state.drinks)
        })
        .catch((error) => {
          console.log('Error getting documents: ', error)
        })
};

export default {fetchDrinks}
