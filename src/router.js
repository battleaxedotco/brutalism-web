import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("./views/API.vue")
  },
  {
    path: "/buttons/:parent?/:child?",
    name: 'buttons',
    component: () => import("./views/API.vue")
  },
  {
    path: "/inputs/:parent?/:child?",
    name: 'inputs',
    component: () => import("./views/API.vue")
  },
  {
    path: "/form/:parent?/:child?",
    name: 'form',
    component: () => import("./views/API.vue")
  },
  {
    path: "/basic",
    name: 'basic',
    component: () => import("./views/brutalism-basic.vue")
  },
  {
    path: "/router/:parent?",
    name: 'router',
    component: () => import("./views/brutalism-router.vue")
  },
  {
    path: "/vuex/:parent?",
    name: 'vuex',
    component: () => import("./views/brutalism-vuex.vue")
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
