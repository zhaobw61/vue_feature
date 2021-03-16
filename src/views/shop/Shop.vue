<template>
  <div class="wrap">
      <ShopInfo
      v-for="item in nearbyList"
      :key = "item._id"
      :item ="item"
      :hideBorder="true"
      ></ShopInfo>
  </div>
</template>

<script>
import ShopInfo from '../../components/ShopInfo'
export default {
  name: 'Shop',
  components: {
    ShopInfo
  },
  setup () {
    const nearbyList = [{
      expressLimit: 0,
      expressPrice: 5,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      name: '沃尔玛',
      sales: 10000,
      slogan: 'VIP尊享满89元减4元运费券',
      _id: '1'
    }]
    return { nearbyList }
  },
  methods: {

  }
}
</script>

<style  scope lang='scss'>
.wrap {
padding: 0 0.18rem;
}
</style>
