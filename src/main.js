import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import Print from 'vue-print-nb'
import VueHtmlToPaper from 'vue-html-to-paper';

import { BootstrapVue , IconsPlugin } from 'bootstrap-vue'

Vue.use(Print)
Vue.use(VueHtmlToPaper);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
