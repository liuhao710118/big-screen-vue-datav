import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
  path: '/',
  name: 'index',
  component: () => import('../views/index.vue')
},
// ������ҳ
{
  path: "/home",
  name: "home",
  component: () => import("../views/home.vue"),
},
]
const router = new VueRouter({
  routes
})

export default router