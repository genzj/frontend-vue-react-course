import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const app = new Vue({
  router,
  render: h => h(App),
  data: {
    loading: false,
  }
}).$mount('#app')

router.beforeEach((to, from, next) => {
  app.loading = true
  next()
})

router.afterEach((to, from, next) => {
  app.loading = false
  next()
})

