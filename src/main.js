import Vue from 'vue'
import App from 'views/app'
import router from 'src/router'
import store from 'src/store'

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
