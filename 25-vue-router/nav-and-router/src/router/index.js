import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import BetterUser from '../views/BetterUser.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user/:userID',
    name: 'user',
    component: User,
  },
  {
    path: '/better-user/:userID',
    name: 'better-user',
    component: BetterUser,
    props: route => ({ userID: `(Better) ${route.params.userID}` }),
  },
  {
    path: '/error/:code',
    component: Error,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => new Promise((resolve) => setTimeout(
      () => resolve(import(/* webpackChunkName: "about" */ '../views/About.vue')),
      3000,
    ))
  },
  {
    path: '*',
    component: Error,
    props: { code: 404 }
  }
]

const router = new VueRouter({
  routes
})

export default router
