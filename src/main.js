import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import WebController from './assets/js/webController.js'

Vue.use(Vuex)
Vue.prototype.$WebController = new WebController()
Vue.config.productionTip = false


new Vue({
  render: h => h(App)
}).$mount('#app')
