<template>
  <view class="registerform-wrap">
    <view class="username">
      <input type="text" placeholder="Name" />
    </view>
    <view class="username">
      <input type="digital" placeholder="Phone Number" />
    </view>
    <view class="username">
      <input type="text" placeholder="Email" />
    </view>
    <view class="password">
      <input type="password" placeholder="Password" />
      <image src="../../../images/eyes.png" />
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
  & > view:not(:first-of-type) {
    margin-top: 20px;
  }
  .password {
    position: relative;

    input {
      padding-right: 25px;
    }

    image {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 21px;
      height: 14px;
    }
  }
}
</style>
