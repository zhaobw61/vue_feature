<template>
  <div class="wrapper">
      <img class="wrapper_img" src="http://www.dell-lee.com/imgs/vue3/user.png">
      <div class="wrapper_input">
          <input type="text" class="wrapper_input_content" placeholder="请输入手机号">
      </div>
      <div class="wrapper_input">
          <input type="password" class="wrapper_input_content" placeholder="请输入密码">
      </div>
      <div class="wrapper_login_button" @click="handleLogin">登陆</div>
      <div class="wrapper_login_link">立即注册</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const handleLogin = () => {
      localStorage.isLogin = true
      router.push({ name: 'Home' })
    }
    return { handleLogin }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variables.scss";
.wrapper{
     position: absolute;
     top: 50%;
     left: 0;
     right: 0;
     transform: translateY(-50%);
     &_img {
         display: block;
         margin: 0 auto .4rem auto;
         width: .66rem;
         height: .66rem;
     }
     &_input {
         height: .48rem;
         margin: 0 .4rem .16rem .4rem;
         padding: 0 .16rem;
         background: #f9f9ff;
         border: 1px solid rgba(0,0,0,0.1);
         border-radius: 6px;
         &_content {
             line-height: 0.48rem;
             border: none;
             outline: none;
             width: 100%;
             background: none;
             font-size: 0.16rem;
             color: rgba(0,0,0,0.5);
             &::-moz-placeholder {
                 color: rgba(0,0,0,0.5);
             }
        }
     }
     &_login_button {
         margin: 0.32rem 0.4rem .16rem 0.4rem;
         height: .48rem;
         line-height: .48rem;
         text-align: center;
         background: #0091FF;
         box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145,255,0.32);
         border-radius: 0.04rem;
         color: #fff;
         font-size: 0.16rem;
     }
     &_login_link {
         text-align: center;
         font-size: 0.14rem;
         color: $content-notice-fontcolor;
     }
}
</style>
