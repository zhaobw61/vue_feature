<template>
    <div class="nearby">
        <h3 class="nearby_title">附近店铺</h3>
        <div v-for="(item, index) in nearbyList" :key="index" class="nearby_item">
            <img
            :src="item.imgUrl"
            class="nearby_item_img"
            />
            <div class="nearby_content">
            <div class="nearby_content_title">{{item.name}}</div>
            <div class="nearby_content_tags">
                <span class="nearby_content_tag">月售：{{item.sales}}</span>
                <span class="nearby_content_tag">起送：{{item.expressLimit}}</span>
                <span class="nearby_content_tag">基础运费：{{item.expressPrice}}</span>
            </div>
            <p class="nearby_content_highlight">{{item.slogan}}</p>
            </div>
        </div>
    </div>
</template>

<script>
// import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { get } from '../../utils/request'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result.errno === 0 && result.data.length) {
      nearbyList.value = result.data
    }
    console.log(result.data)
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'nearby',
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.nearby {
  &_title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &_item {
    display: flex;
    padding-top: 0.12rem;
    &_img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &_content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-bgcolor;
    &_title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &_tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
    }
    &_tag {
      margin-right: 0.16rem;
    }
    &_highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>
