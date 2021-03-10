<template>
  <div>
    <div class="wrapper">
      <div class="postion">
        <span class="iconfont postion_icon">&#xe619;</span>
        北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
        <span class="iconfont postion_notice">&#xe60b;</span>
      </div>
      <div class="search">
        <span class="iconfont postion_icon">&#xe62d;</span>
        <span class="search_text">搜索</span>
      </div>
      <div class="banner">
        <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
      </div>
      <div class="icons">
        <div class="icons_item" v-for="(item,index) of list" v-bind:key="index">
          <img class="icons_item_img" :src="item.src">
          <p class="icons_item_desc">{{item.desc}}</p>
        </div>
      </div>
      <div class="gap"></div>
      <div class="nearby">
        <h3 class="nearby_title">附近店铺</h3>
        <div class="nearby_item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/near.png"
            class="nearby_item_img"
          >
          <div class="nearby_content">
            <div class="nearby_content_title">沃尔玛</div>
            <div class="nearby_content_tags">
              <span class="nearby_content_tag">月售一万+</span>
              <span class="nearby_content_tag">月售一万+</span>
              <span class="nearby_content_tag">月售一万+</span>
            </div>
            <p class="nearby_content_highlight">自尊VIP高亮-自尊VIP高亮-自尊VIP高亮-自尊VIP高亮</p>
          </div>
        </div>
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
<script>
export default {
  data () {
    return {
      list: [
        {
          desc: '超时便利',
          src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
        }, {
          desc: '超时便利',
          src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
        }, {
          desc: '超时便利',
          src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
        }, {
          desc: '超时便利',
          src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
        }, {
          desc: '超时便利',
          src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
        }, {
          desc: '超时便利',
          src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
        }, {
          desc: '超时便利',
          src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
        }, {
          desc: '超时便利',
          src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./style/variables.scss";
@import "./style/mixins.scss";
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  // background: rgb(221,153,169);
  padding: 0 0.18rem .1rem;;
  overflow-y: auto;
}
.postion {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .postion_icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .postion_notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  .iconfont {
    display: inline-block;
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.1rem;
  }
  &_text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &_item {
    width: 20%;
    &_img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &_desc {
      margin: .06rem 0 .06rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: .1rem;
  background: $content-bgcolor;
}
.nearby {
  &_title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &_item {
    display: flex;
    padding-top: .12rem;
    &_img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &_content {
    flex: 1;
    padding-bottom: .12rem ;
    border-bottom: 1px solid  $content-bgcolor;
    &_title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &_tags {
      margin-top: 0.08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }
    &_tag {
      margin-right: 0.16rem;
    }
    &_highlight {
      margin: 0.08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #e93b3b;
    }
  }
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
  border-top: 0.01rem solid $content-bgcolor;
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
