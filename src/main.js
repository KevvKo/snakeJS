import Vue from 'vue'
import App from './App.vue'
import WebController from './classes/webController.js'


Vue.prototype.$WebController = new WebController()
Vue.config.productionTip = false


new Vue({
  render: h => h(App)
}).$mount('#app')
