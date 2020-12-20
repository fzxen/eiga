<template>
  <view class="resetform-wrap container">
    <image
      class="arrow"
      src="../../../images/arrow_up.png"
      @tap="$emit('on-hide')"
    />

    <view class="title">
      <text>RESET PASSWORD</text>
    </view>

    <input type="text" placeholder="Email or Phone Number" />

    <EButton class="btn" @tap="$emit('on-hide')">RESET</EButton>
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "ResetForm",

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.resetform-wrap {
  display: flex;
  flex-direction: column;
  padding: 0 35px;
  .arrow {
    align-self: center;
    margin-top: 30px;
    width: 36px;
    height: 16px;
  }

  .title {
    margin-top: 113px;
    font-family: Montserrat-SemiBold;
    font-size: 24px;
    color: #3e5883;
    opacity: 0.87;
  }

  input {
    margin-top: 46px;
  }

  .btn {
    margin-top: 59px;
  }
}
</style>
