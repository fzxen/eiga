<template>
  <view class="registerform-wrap">
    <view class="input-outter username">
      <EInput type="text" placeholder="Name" />
    </view>
    <view class="input-outter username">
      <EInput type="digital" placeholder="Phone Number" />
    </view>
    <view class="input-outter username">
      <EInput type="text" placeholder="Email" />
    </view>
    <view class="input-outter password">
      <EInput type="password" placeholder="Password" />
      <image class="image" src="~_images/eyes.png" />
    </view>
    <EButton class="e-btn">REGISTER</EButton>
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "RegisterForm",

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.registerform-wrap {
  // padding-right: 20px;
  & > .input-outter:not(:first-of-type) {
    margin-top: 20px;
  }
  .password {
    position: relative;

    .image {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 21px;
      height: 14px;
    }
  }
  .e-btn {
    margin-top: 55px;
  }
}
</style>
