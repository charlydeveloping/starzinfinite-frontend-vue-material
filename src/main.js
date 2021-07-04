import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

import { i18n } from './plugins/i18n'
import './plugins/vee-validate'
import './plugins/vue-notification'
import './components'

Vue.config.productionTip = false


new Vue({
  vuetify,
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
