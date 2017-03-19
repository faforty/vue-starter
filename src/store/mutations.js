import { set } from 'vue'
import * as types from './mutation-types'

export default {
  [types.RECEIVE_PRODUCT] (state, { response }) {
    state.receive = response.status ? true : false
  }
}
