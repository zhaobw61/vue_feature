import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Register from '../views/register/Register.vue'
import Login from '../views/login/Login.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/register',
  name: 'Register',
  component: Register,
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
  component: Login,
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
