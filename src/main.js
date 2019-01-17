import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faEnvelope, faPhoneSquare} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faPhoneSquare);

Vue.component ('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

window.App = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
