<template>
    <div class="nearby">
        <h3 class="nearby_title">附近店铺</h3>
        <div v-for="(item, index) in nearbyList" :key="index" class="nearby_item">
            <img
            :src="item.src"
            class="nearby_item_img"
            />
            <div class="nearby_content">
            <div class="nearby_content_title">{{item.title}}</div>
            <div class="nearby_content_tags">
                <span v-for="(innerItem, innerIndex) in item.tags" :key="innerIndex" class="nearby_content_tag">{{innerItem}}</span>
            </div>
            <p class="nearby_content_highlight">{{item.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'nearby',
  setup () {
    const nearbyList = [
      {
        src: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售一万+', '起送￥0', '基础运费￥5'],
        desc: '自尊VIP高亮-自尊VIP高亮-自尊VIP高亮-自尊VIP高亮'
      }, {
        src: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售一万+', '起送￥0', '基础运费￥5'],
        desc: '自尊VIP高亮-自尊VIP高亮-自尊VIP高亮-自尊VIP高亮'
      }
    ]
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
