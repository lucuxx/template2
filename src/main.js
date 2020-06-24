import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import http from './http'
import directive from './directive'
import * as filters from './filters'

// 注册全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.use(http)
Vue.use(directive)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
