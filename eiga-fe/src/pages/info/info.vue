<template>
  <view class="info-wrap">
    <video
      class="videos"
      src="_videos/movie.mp4"
      :autoplay="true"
      :muted="true"
      :controls="true"
    />
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "Info",

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.info-wrap {
  display: flex;
  flex-direction: column;

  align-items: center;

  .videos {
    width: 315px;
    height: 180px;
  }
}
</style>
