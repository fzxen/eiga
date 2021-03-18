<template>
  <view class="watched-wrap">
    <view class="card" v-for="i of 5" :key="i">
      <image class="image" src="~_images/poster2.png" />
      <text class="text">WONDER WOMAN</text>
    </view>
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "Watched",

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.watched-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 16px;
  .card {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    .image {
      width: 160px !important;
      height: 200px !important;
    }
    .text {
      margin-top: 17px;
      font-family: Montserrat-ExtraBold;
      font-size: 14px;
      color: #607395;
    }
  }
}
</style>
