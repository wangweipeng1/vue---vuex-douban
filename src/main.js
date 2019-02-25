import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/index.css'
import { sync } from 'vuex-router-sync'
const unsync = sync(store, router)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
