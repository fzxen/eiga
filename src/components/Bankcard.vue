<template>
  <view class="bankcard-wrap">
    <view class="ab top left logo">
      <image class="image" src="~_images/bankcard_logo.png" />
    </view>
    <view class="ab top right number">
      ******7889
    </view>
    <view class="ab bottom right"></view>
    <view class="ab center confirm flex-center">
      <image class="image" src="~_images/face.png" />
      <text class="text">TOUCH TO CONFIRM</text>
    </view>
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "Bankcard",

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.bankcard-wrap {
  width: 270px;
  height: 160px;
  background-image: linear-gradient(-23deg, #1e262e 0%, #272f37 100%),
    linear-gradient(#e0e2ea, #e0e2ea);
  background-blend-mode: normal, normal;
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 2px 3px 3px #cccccc;
  .ab {
    position: absolute;
  }
  .top {
    top: 18px;
  }
  .left {
    left: 25px;
  }
  .right {
    right: 25px;
  }
  .bottom {
    bottom: 18px;
  }
  .center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .logo {
    .image {
      width: 32px;
      height: 20px;
    }
  }
  .number {
    font-family: Montserrat-SemiBold;
    font-size: 14px;
    color: #ffffff;
  }
  .confirm {
    flex-direction: column;
    .image {
      width: 48px;
      height: 48px;
    }
    .text {
      margin-top: 22px;
      text-align: center;
      white-space: nowrap;
      font-family: Montserrat-SemiBold;
      font-size: 14px;
      color: #ffffff;
    }
  }
}
</style>
