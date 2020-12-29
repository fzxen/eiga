<template>
  <view class="ticketcard-wrap">
    <view
      class="left"
      :style="{
        backgroundImage: `url(${require(`_images/poster${Math.floor(
          Math.random() * 8 + 1
        )}.png`)})`
      }"
    >
    </view>
    <view class="right">
      <text class="right__title">BLACK PANTHER</text>
      <view class="right__time">
        <text>2 HR 17 MIN</text>
        <text>28 Feb 2:15pm</text>
      </view>
    </view>

    <image class="more" src="~_images/more.png" />
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "TicketCard",

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.ticketcard-wrap {
  height: 135px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  position: relative;
  .left {
    flex-basis: 72px;
    height: 100%;
    overflow: hidden;
    background-position: center;
    border-radius: 8px;
  }
  .right {
    flex: 1;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-right: 30px;

    &__title {
      font-family: Montserrat-ExtraBold;
      font-size: 20px;
      color: #607395;
    }
    &__time {
      font-family: Montserrat-SemiBold;
      font-size: 14px;
      opacity: 0.54;
    }
  }
  .more {
    position: absolute;
    top: 31px;
    right: 28px;
    width: 4px;
    height: 18px;
  }
}
</style>
