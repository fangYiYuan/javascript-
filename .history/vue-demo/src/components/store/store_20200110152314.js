import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      {name: '马云', price: 200},
      {name: '马化腾', price: 140},
      {name: '马冬梅', price: 100},
      {name: '马蓉', price: 10}
    ]
  },
  getter: {
    name: 'alex',
    change: (state) => {
      let data = state.products.map(
        item => {
        return {
          name: '@' + item.name,
          price: item.price / 2
        }
      })
      return data
    }
  }
})