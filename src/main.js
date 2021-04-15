import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/index.scss'
import store from './store/index'

// import http from '@/api/config'
// import './mock'

Vue.config.productionTip = false

// Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
