import { createStore } from 'vuex'
import { data } from '../data.json'

export default createStore({
  state: {
    name: '',
    food: data,
    order: [],
    totalBill: 0,
    fbData: {}
  },
  mutations: {
    addQuantity (state, item) {
      const currIndex = state.order.findIndex(x => x.id === item.id)
      if (currIndex === -1) {
        item.quantity++
        state.order.push(item)
      } else {
        state.order[currIndex].quantity++
      }
    },
    deleteItem (state, id) {
      const currIndex = state.order.findIndex(x => x.id === id)
      if (state.order[currIndex].quantity === 1) {
        state.order[currIndex].quantity--
        state.order.splice(currIndex, 1)
      } else {
        state.order[currIndex].quantity--
      }
    },
    addName (state, name) {
      state.name = name
    },
    saveData (state, fbData) {
      state.fbData = fbData
    }
  },
  actions: {
  },
  modules: {
  }
})
