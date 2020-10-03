import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'

Vue.use(Vuex)
Vue.use(router)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
