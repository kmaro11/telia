import Vue from 'vue'
import VueRouter from 'vue-router'
import Brands from '../views/BrandsList'
import Phones from '../views/PhoneList'
import Error from '../views/Error'

Vue.use(VueRouter)

const routes = [
  {
    path: '/phones',
    name: 'Brands',
    component: Brands
  },
  {
    path: '/phones/:brand',
    name: 'phones',
    component: Phones
  },
  {
    path: '/error',
    name: 'error',
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router
