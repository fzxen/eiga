<template>
  <view class="welcome-landing container">
    <image class="logo" src="../../images/EIGA_logo.png" />
  </view>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { navigateTo } from "@tarojs/taro";

export default {
  name: "WelcomeLanding",

  setup() {
    onMounted(() => {
      setTimeout(() => {
        navigateTo({ url: "../campaign/campaign" });
      }, 3000);
    });
  }
};
</script>

<style lang="scss">
.welcome-landing {
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    width: 204px;
    height: 60px;
  }
}
</style>
