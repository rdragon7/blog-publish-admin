import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('@/views/login')
const Layout = () => import('@/views/layout')
const Home = () => import('@/views/home')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      }
    ]
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 路由导航守卫
router.beforeEach((to,from,next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) {
    return next('/login')
  }
  next()
})

export default router