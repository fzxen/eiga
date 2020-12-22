<template>
  <view class="logobrand-wrap">
    <view class="brand flex-center">
      <image src="~_images/logo_a.png" />
    </view>
    <view class="text">
      <text class="top">EIGA</text>
      <text class="bottom">Ticket Book</text>
    </view>
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "LogoBrand",

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.logobrand-wrap {
  display: flex;
  max-width: 199px;
  height: 59px;

  .brand {
    width: 59px;
    height: 59px;
    background-color: #ffffff;
    border-radius: 12px;

    image {
      width: 37px;
      height: 33px;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    justify-content: space-between;

    .top {
      font-family: Montserrat-Bold;
      font-size: 24px;
      font-weight: 600;
      color: #607395;
    }
    .bottom {
      font-family: Montserrat-Medium;
      font-size: 16px;
      color: #607395;
    }
  }
}
</style>
