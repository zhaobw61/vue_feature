<template>
  <div class="docker">
      <span v-for="(item, index) in dockerList" v-bind:key="index" :class="{'docker_item': true, 'docker_item-active': index === 0}">
        <div class="iconfont" v-html="item.icon"></div>
        <div class="docker_title">{{item.text}}</div>
      </span>
    </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe6f3;', text: '首页' },
      { icon: '&#xe7e5;', text: '购物车' },
      { icon: '&#xe61e;', text: '订单' },
      { icon: '&#xe660;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  &_item {
    text-align: center;
    flex: 1;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &_title {
      font-size: 0.2rem;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }
    &-active {
      color: #1fa4fc;
    }
  }
}
</style>
