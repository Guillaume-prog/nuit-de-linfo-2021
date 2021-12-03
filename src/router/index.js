import Router from 'vue-router'
import Home from '../views/Home.vue'
import Vue from 'vue'

Vue.use(Router)

export default new Router({ routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wiki',
    name: 'Wiki',
    component: () => import('../views/Wiki.vue')
  }
]})
