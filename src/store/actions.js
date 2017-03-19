import * as api from 'src/api'
import * as types from './mutation-types'

/**
* Сохранение параметров и отправка на сервер
*/
export const saveToServer = ({ commit, state }) => {
  const products = state.products

  api.saveToServer(products, response => commit(types.RECEIVE_PRODUCT, {
    response
  }))
}
