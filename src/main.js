import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import qs from 'qs'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.css'

Vue.use(VueI18n);
Vue.use(ElementUI);
Vue.use(qs);

//引入axios
import './axios'

import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
