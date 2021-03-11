<template>
  <div>
    <Home v-if="false"></Home>
    <Login></Login>
  </div>
</template>

<script>
import Home from './views/home/Home.vue'
import Login from './views/login/Login.vue'
export default {
  name: 'App',
  components: {
    Home,
    Login
  }
}
</script>
