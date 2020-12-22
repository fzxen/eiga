<template>
  <view class="back-arrow-wrap">
    <image src="~_images/arrow_up.png" />
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "BackArrow",

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.back-arrow-wrap {
  padding: 5px 8px;
  background: #ffffff;
  border-radius: 50%;
  image {
    width: 16px;
    height: 10px;
    transform: rotate(-90deg);
  }
}
</style>
