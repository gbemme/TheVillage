import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageView from '../views/HomePageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePageView
  },
  {
    path: '/login',
    name: 'LoginView',
    component:  () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')

  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import('../views/RegisterView')
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
