import Vue from 'vue'
import App from './App.vue'
import WebController from './assets/js/webController.js'


Vue.prototype.$WebController = new WebController()
Vue.config.productionTip = false

Vue.component(WebController)

new Vue({
  render: h => h(App)
}).$mount('#app')
