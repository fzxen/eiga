<template>
  <view class="ad-wrap">
    <view class="ad-inner" :style="{ transform: `translateX(-${num * 100}%)` }">
      <view class="list" v-for="i of count" :key="`li-${i}`">
        <image class="onboarding" src="../../../images/icon_onboarding.png" />
        <text class="main-title">ONBOARDING{{ i }}</text>
        <text class="sub-description"
          >Choose movies, watch trailers, take tickets.</text
        >
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "Ad",

  props: {
    count: {
      required: true,
      type: Number
    },
    num: {
      required: true,
      type: Number
    }
  },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.ad-wrap {
  width: 100%;
  overflow: hidden;
  .ad-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;

    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      flex-shrink: 0;

      .onboarding {
        width: 258px;
        height: 247px;
        margin-top: 40px;
        margin-right: -10px;
      }

      .main-title {
        margin-top: 20px;
        font-family: Montserrat-ExtraBold;
        font-size: 20px;
        font-weight: 600;
        color: #607395;
      }
      .sub-description {
        margin-top: 19px;
        padding: 0 79px;
        font-family: Montserrat-SemiBold;
        font-size: 14px;
        text-align: center;
        color: #000000;
        opacity: 0.87;
      }
    }
  }
}
</style>
