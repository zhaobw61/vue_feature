<template>
  <div>
    <div class="wrapper">
      <StaticPart></StaticPart>
      <Nearby></Nearby>
    </div>
    <Docker></Docker>
  </div>
</template>
<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
import Docker from './Docker.vue'
export default {
  name: 'home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>

<style lang="scss">
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.1rem;
  overflow-y: auto;
}
</style>
