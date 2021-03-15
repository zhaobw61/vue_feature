import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('../views/home/Home.vue')
}, {
  path: '/shop',
  name: 'Shop',
  component: () => import('../views/shop/Shop.vue')
},
{
  path: '/register',
  name: 'Register',
  component: () => import('../views/register/Register.vue'),
  beforeEnter: (to, from, next) => {
    const isLogin = localStorage.isLogin
    if (isLogin) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
},
{
  path: '/login',
  name: 'Login',
  component: () => import('../views/login/Login.vue'),
  beforeEnter: (to, from, next) => {
    const isLogin = localStorage.isLogin
    if (isLogin) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  const isLoginOrRegister = (to.name === 'Login' || to.name === 'Register')
  if (isLogin || isLoginOrRegister) {
    next()
  } else {
    next({ name: 'Login' })
  }
  next({ name: 'Login' })
})

export default router
