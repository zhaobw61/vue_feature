<template>
  <div class="wrap">
     <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">
        &#xe6f2;
      </div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe62d;</span>
        <input
          class="search__content__input"
          placeholder="请输入商品名称"
        />
      </div>
    </div>
      <ShopInfo
      v-for="item in nearbyList"
      :key = "item._id"
      :item ="item"
      :hideBorder="true"
      ></ShopInfo>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import ShopInfo from '../../components/ShopInfo'
export default {
  name: 'Shop',
  components: {
    ShopInfo
  },
  setup () {
    const router = useRouter()
    const nearbyList = [{
      expressLimit: 0,
      expressPrice: 5,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      name: '沃尔玛',
      sales: 10000,
      slogan: 'VIP尊享满89元减4元运费券',
      _id: '1'
    }]
    const handleBackClick = () => {
      router.back()
    }
    return { nearbyList, handleBackClick }
  }
}
</script>

<style lang='scss' scope>
@import "../../style/variables.scss";
.wrap {
  padding: 0 0.18rem;
}
.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  &__back {
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
