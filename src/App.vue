<template>
  <div>
    <div class="wrapper">
      <div class="postion">
          <span class="iconfont postion_icon">&#xe619;</span>
          北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
          <span class="iconfont postion_notice">&#xe60b;</span>
      </div>
    </div>
    <div class="docker">
      <span class="docker_item docker_item-active">
        <div class="iconfont">&#xe6f3;</div>
        <div class="docker_title">首页</div>
      </span>
      <span class="docker_item">
        <div class="iconfont">&#xe7e5;</div>
        <div class="docker_title">购物车</div>
      </span>
      <span class="docker_item">
        <div class="iconfont">&#xe61e;</div>
        <div class="docker_title">订单</div>
      </span>
      <span class="docker_item">
        <div class="iconfont">&#xe660;</div>
        <div class="docker_title">我的</div>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/variables.scss';
@import './style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom:0.5rem;
  right: 0;
  // background: rgb(221,153,169);
  padding: 0 0.18rem;
}
.postion {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .postion_icon {
    position: relative;
    top: 0.01rem;
    font-size: .2rem;
  }
  .postion_notice{
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
  color: $content-fontcolor;
}
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1ff;
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
