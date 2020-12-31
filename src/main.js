import Vue from 'vue'
import App from './App.vue'
// Import tailwindcss
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
