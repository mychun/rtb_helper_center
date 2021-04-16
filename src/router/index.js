import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: {
      path: 'list/:id',
      params: {
        id: '01'
      }
    },
    children: [
      {
        path: 'list/:productCode/:categoryId?/:searchKey?',
        name: 'list',
        component: () => import('../views/list')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/search')
      },
      {
        path: 'detail/:documentId',
        name: 'detail',
        component: () => import('../views/detail')
      }
    ]
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('../views/errorPage/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
