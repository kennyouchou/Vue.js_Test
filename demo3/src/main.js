import Vue from 'vue'
import App from './d5.vue'



Vue.config.productionTip = false
import Pannel from './components/pnnel_1.vue'

Vue.component("PannelG",Pannel)
new Vue({
  render: h => h(App),
}).$mount('#app')
