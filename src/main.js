import Vue from 'vue'
import App from './App.vue'
import GameController from './assets/js/gameController.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let gamecontroller = new GameController()
gamecontroller.run()