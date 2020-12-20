<template>
  <view class="login-wrap container">
    <LogoBrand class="logobrand" />

    <view class="switcher-btn">
      <text :class="{ actived: formType === 0 }" @tap="formType = 0"
        >LOGIN</text
      >
      <text :class="{ actived: formType === 1 }" @tap="formType = 1"
        >REGISTER</text
      >
    </view>

    <swiper class="swiper" @change="onFormChange" :current="formType">
      <swiper-item>
        <LoginForm class="form-inner" @on-show="showReset" />
      </swiper-item>
      <swiper-item>
        <RegisterForm class="form-inner" />
      </swiper-item>
    </swiper>

    <view class="divider">
      <text>Or with</text>
    </view>

    <view class="login-way">
      <view class="flex-center"><image src="../../images/facebook.png"/></view>
      <view class="flex-center"><image src="../../images/google.png"/></view>
      <view class="flex-center"><image src="../../images/bird.png"/></view>
    </view>

    <ResetForm :class="['reset-form', { show: isResetShow }]"  @on-hide="hideReset"/>
  </view>
</template>

<script lang="ts">
import { ref } from "vue";
import LogoBrand from "../../components/LogoBrand.vue";
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
import ResetForm from "./components/ResetForm.vue";

export default {
  name: "Login",

  components: { LogoBrand, LoginForm, RegisterForm, ResetForm },

  setup() {
    const formType = ref(0);
    const isResetShow = ref(false);

    const onFormChange = () => {};

    const showReset = () => (isResetShow.value = true);
    const hideReset = () => (isResetShow.value = false);
    return { formType, isResetShow, onFormChange, showReset, hideReset };
  }
};
</script>

<style lang="scss">
.login-wrap {
  display: flex;
  flex-direction: column;
  padding: 0 35px;
  overflow: hidden;
  .logobrand {
    margin-top: 30px;
  }

  .switcher-btn {
    margin-top: 50px;
    font-family: Montserrat-SemiBold;
    font-size: 14px;
    color: #607395;
    opacity: 0.54;

    text:nth-of-type(2) {
      margin-left: 41px;
    }

    .actived {
      font-size: 24px;
      color: #3e5883;
    }
  }
  .swiper {
    margin-top: 30px;
    height: 370px;
  }

  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    font-family: Montserrat-SemiBold;
    font-size: 16px;
    color: #607395;
    opacity: 0.87;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100px;
      height: 1px;
      background-color: rgba($color: #607395, $alpha: 0.18);
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  }

  .login-way {
    display: flex;
    justify-content: space-around;
    margin-top: 29px;
    view {
      width: 57px;
      height: 57px;
      border-radius: 50%;
      background-color: #ffffff;
      &:first-of-type image {
        width: 10px;
        height: 20px;
      }
      &:nth-of-type(2) image {
        width: 25px;
        height: 16px;
      }
      &:last-of-type image {
        width: 21px;
        height: 17px;
      }
    }
  }

  .reset-form {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translateY(100vh);
    transition: transform 0.3s ease-in;

    &.show {
      transform: translateY(0);
    }
  }
}
</style>
