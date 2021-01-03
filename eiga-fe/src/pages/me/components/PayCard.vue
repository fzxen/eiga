<template>
  <view class="pay-card-wrap">
    <swiper class="swiper" previousMargin="100rpx" nextMargin="100rpx">
      <swiper-item class="swiper-item">
        <view class="add card flex-center" @tap="$emit('card-add')">Add a card</view>
      </swiper-item>
      <swiper-item class="swiper-item"><Bankcard class="card"/></swiper-item>
      <swiper-item class="swiper-item"><Bankcard class="card"/></swiper-item>
      <swiper-item class="swiper-item"><Bankcard class="card"/></swiper-item>
    </swiper>
  </view>
</template>

<script lang="ts">
import {} from "vue";
import Bankcard from "../../../components/Bankcard.vue";

export default {
  name: "PayCard",

  components: { Bankcard },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.pay-card-wrap {
  .swiper {
    height: 200px;
  }
  .card {
    // width: 305px;
    height: 181px;

    &.add {
      width: 270px;
      border-radius: 5px;
      background-image: linear-gradient(165deg, #00b3c6 0%, #5d84b4 100%),
        linear-gradient(#7292cb, #7292cb);
      background-blend-mode: normal, normal;

      font-family: Montserrat-SemiBold;
      font-size: 20px;
      color: #ffffff;
    }
  }
}
</style>
