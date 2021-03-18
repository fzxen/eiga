<template>
  <view class="movieinfo-wrap container">
    <image
      class="arrow"
      src="~_images/arrow_up.png"
      @tap="$emit('on-hide')"
    />
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "MovieInfo",

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.movieinfo-wrap {
  .arrow {
    align-self: center;
    margin-top: 30px;
    width: 36px;
    height: 16px;
  }
}
</style>
