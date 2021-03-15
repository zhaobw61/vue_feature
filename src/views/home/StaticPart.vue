<template>
    <div>
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
            <img
            class="banner__img"
            src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
            />
        </div>
        <div class="icons">
            <div class="icons_item" v-for="(item, index) of iconsList" v-bind:key="index">
            <img class="icons_item_img" :src="item.src" />
            <p class="icons_item_desc">{{ item.desc }}</p>
            </div>
        </div>
        <div class="gap"></div>
    </div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      {
        desc: '超时便利',
        src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
      },
      {
        desc: '超时便利',
        src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
      },
      {
        desc: '超时便利',
        src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
      },
      {
        desc: '超时便利',
        src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
      },
      {
        desc: '超时便利',
        src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
      },
      {
        desc: '超时便利',
        src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
      },
      {
        desc: '超时便利',
        src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
      },
      {
        desc: '超时便利',
        src: 'http://www.dell-lee.com/imgs/vue3/超市.png'
      }
    ]
    return { iconsList }
  }
}
</script>
<style scoped lang="scss">
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
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
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &_desc {
      margin: 0.06rem 0 0.06rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bgColor;
}
</style>
