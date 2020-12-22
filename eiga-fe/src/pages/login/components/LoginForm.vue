<template>
  <view class="loginform-wrap">
    <view class="username">
      <input type="text" placeholder="Email" />
    </view>
    <view class="password">
      <input type="password" placeholder="Password" />
      <image src="~_images/eyes.png" />
    </view>
    <view class="forget">
      <text @tap="$emit('on-show')">Forget Password?</text>
    </view>
    <EButton class="e-btn" @tap="onLogin">LOGIN</EButton>
  </view>
</template>

<script lang="ts">
import {} from "vue";
import { navigateTo, switchTab } from "@tarojs/taro";

export default {
  name: "LoginForm",

  setup() {
    const onLogin = () => {
      switchTab({ url: "../list/list" });
    };
    return { onLogin };
  }
};
</script>

<style lang="scss">
.loginform-wrap {
  // padding-right: 20px;
  .password {
    margin-top: 20px;
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
  .forget {
    margin-top: 19px;
    text-align: right;
    font-family: Montserrat-SemiBold;
    font-size: 14px;
    color: #607395;
  }
  .e-btn {
    margin-top: 50px;
  }
}
</style>
