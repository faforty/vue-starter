import { set } from 'vue'
import * as types from './mutation-types'

export default {
  [types.ADD_FILLING] (state, { data, type }) {
    state.productFilling[type] = Object.assign(state.productFilling[type], data)

    localStorage.setItem('productFilling', JSON.stringify(state.productFilling))
  },

  [types.RECEIVE_TP] (state, { response }) {
    state.receiveTp = response.status ? true : false
  },

  [types.RECEIVE_STEP] (state, { type, status = true }) {
    if (state[type]) {
      state.receiveStep[type] = status
    }
  },

  [types.SET_PRODUCT] (state, product) {
    state.productOptions = product
    localStorage.setItem('productOptions', JSON.stringify(state.productOptions))
  },

  [types.SET_STEP] (state, { fill, status }) {
    state.isStep[fill] = status
    localStorage.setItem('fillingStatus', JSON.stringify(state.isStep))
  }
}
