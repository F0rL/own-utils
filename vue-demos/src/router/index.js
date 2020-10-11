import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'
import AddRule from '../views/AddRule.vue'
import HandleValidator from '../views/HandleValidator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/addRule',
    name: 'Form',
    component: AddRule
  },
  {
    path: '/handle',
    name: 'HandleValidator',
    component: HandleValidator
  }
]

const router = new VueRouter({
  routes
})

export default router
