// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false
// imoort 

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
import Vue from 'vue'
import App from './App'


import Axios from 'axios'
/*设置全局axios，设置后即可在其它vue中直接使用$axios */
Vue.prototype.$axios = Axios;



import router from './router/index.js'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// Vue.use(ElementUI)

/* eslint-disable no-new */
//runtime

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")