import Vue from 'vue'
import App from './App.vue'
import webController from './assets/js/webController.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let webcontroller = new webController()
webcontroller.addRenderingImprovements()