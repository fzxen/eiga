<template>
  <view class="campaign-wrap container">
    <LogoBrand class="logobrand" />

    <AdBanner :count="count" :num="nextNum" />

    <Indicator class="indicator" :count="count" v-model="nextNum" />

    <EButton class="top-btn" @tap="onNext">NEXT</EButton>
    <EButton
      v-show="nextNum < count - 1"
      class="bottom-btn"
      type="text"
      @tap="goToLogin"
      >SKIP</EButton
    >
  </view>
</template>

<script lang="ts">
import { ref } from "vue";
import LogoBrand from "../../components/LogoBrand.vue";
import Indicator from "../../components/Indicator.vue";
import AdBanner from "./components/AdBanner.vue";
import { navigateTo } from "@tarojs/taro";

export default {
  name: "Campaign",

  components: { LogoBrand, Indicator, AdBanner },

  setup() {
    const nextNum = ref(0);
    const count = 4;

    const goToLogin = () => {
      navigateTo({ url: "../login/login" });
    };
    const onNext = () => {
      if (nextNum.value < count - 1) nextNum.value++;
      else goToLogin();
    };

    return { nextNum, count, onNext, goToLogin };
  }
};
</script>

<style lang="scss">
.campaign-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  .logobrand {
    align-self: flex-start;
    margin: 30px 0 0 35px;
  }

  .indicator {
    margin-top: 32px;
  }
  .top-btn {
    width: 80%;
    margin-top: 30px;
  }
  .bottom-btn {
    width: 80%;
    margin-top: 10px;
  }
}
</style>
