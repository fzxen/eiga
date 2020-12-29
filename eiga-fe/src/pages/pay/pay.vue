<template>
  <view class="pay-wrap container">
    <view class="cover">
      <image src="~_images/poster1.png" />
    </view>

    <view class="info">
      <text class="normal">Reald 3D, 10 dec4:35pm</text>
      <text class="normal">Row 8, seats 5,6,7</text>
      <text class="exclaim">Total: $ 24</text>
    </view>

    <view class="promocode">
      <text>Use promocode?</text> <ESwitch v-model="usePromo" />
    </view>

    <view class="bankcard">
      <swiper class="swiper" previousMargin="100rpx" nextMargin="100rpx">
        <swiper-item class="swiper-item"><Bankcard /></swiper-item>
        <swiper-item class="swiper-item"><Bankcard /></swiper-item>
        <swiper-item class="swiper-item"><Bankcard /></swiper-item>
      </swiper>
    </view>

    <view class="btn">
      <EButton>Traditional Payment</EButton>
    </view>
  </view>
</template>

<script lang="ts">
import ESwitch from "../../components/Switch.vue";
import Bankcard from "../../components/Bankcard.vue";

import { ref } from "vue";

export default {
  name: "Pay",

  components: { ESwitch, Bankcard },

  setup() {
    const usePromo = ref(false);
    return { usePromo };
  }
};
</script>

<style lang="scss">
.pay-wrap {
  .cover {
    margin-top: 32px;
    padding: 0 17px;
    border-radius: 10px;
    height: 160px;
    overflow: hidden;
    text-align: center;
    filter: drop-shadow(0, 1px, 3px, crimson);
    image {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 0 34px;
    text {
      font-family: Montserrat-SemiBold;
      color: #607395;
    }
    .normal {
      margin-top: 11px;
      font-size: 16px;
    }
    .exclaim {
      margin-top: 25px;
      font-size: 22px;
    }
  }
  .promocode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 29px;
    padding: 0 34px;
    text {
      font-family: Montserrat-SemiBold;
      font-size: 16px;
      color: #607395;
    }
  }
  .bankcard {
    margin-top: 35px;
    padding: 0;
    .swiper {
      height: 160px;

      &-item {
        width: 280px !important;
      }
    }
  }
  .btn {
    margin-top: 47px;
    padding: 0 34px;
  }
}
</style>
