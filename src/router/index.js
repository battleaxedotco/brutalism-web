import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/buttons/:parent?/:child?",
    name: 'buttons',
    component: Home
  },
  {
    path: "/inputs/:parent?/:child?",
    name: 'inputs',
    component: Home
  },
  {
    path: "/form/:parent?/:child?",
    name: 'form',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
