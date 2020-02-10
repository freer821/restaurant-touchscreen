import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import store from './store'
import router from './router'
import './registerServiceWorker'

import "@/assets/styles/variables.scss";


import './mock'

import enLocale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { enLocale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
