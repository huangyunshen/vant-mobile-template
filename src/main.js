import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'amfe-flexible'

import {
  Button,
  Tabbar,
  TabbarItem
} from 'vant'

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
