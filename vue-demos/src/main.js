import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/global.scss'

import {
  Button,
  Message,
  Form,
  FormItem,
  Input,
  Select,
  Option
} from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
