import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  isStep: JSON.parse(localStorage.getItem('fillingStatus')) || {},
  productOptions: JSON.parse(localStorage.getItem('productOptions')) || {},
  productFilling: JSON.parse(localStorage.getItem('productFilling')) || {
    company: {},
    product: {},
    purchase: {},
    need: {},
    place: {},
    cost: {},
    payment: {},
    garant: {},
    disbursement: {},
    comments: {},
    quality: {},
    unfit: {},
    refund: {},
    packaging: {},
    docs: {},
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
})
