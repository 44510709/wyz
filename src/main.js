import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import 'wyz-ui/css/card.css'
import 'wyz-ui/css/demo.css'
import MUI from 'wyz-ui'
Vue.use(MUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
