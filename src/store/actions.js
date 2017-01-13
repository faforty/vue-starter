import * as api from 'src/api'
import * as types from './mutation-types'

export const addFilling = ({ commit, state }, data) => {
  let keys = Object.keys(data)
  //
  // keys.forEach(key => {
  //   if (state.productFilling[key]) {
  //     commit(types.ADD_FILLING, {
  //       data: data[key],
  //       type: key
  //     })
  //
  //     if (!state.stepIsSet[key]) {
  //       // commit('INCREMENT')
  //       // commit('ADD_STEP', key)
  //     }
  //   }
  // })
}

export const setStep = ({ commit }, step) => {
  commit(types.SET_STEP, step)
}

export const setProduct = ({ commit }, product) => {
  commit(types.SET_PRODUCT, product)
}

export const receiveStep = ({ commit }, obj) => {
  commit(types.RECEIVE_STEP, {
    status: obj.status || true,
    type: obj.type // company || product etc...
  })
}

/**
* Сохранение параметров и отправка на сервер
*/
export const saveToServer = ({ commit, state }) => {
  const filling = state.productFilling

  api.saveToServer(filling, response => commit(types.RECEIVE_TP, {
    response
  }))
}
