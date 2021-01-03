<template>
  <view class="ticketcard-wrap" @tap="showInfo = true">
    <view class="ticket-top">
      <view class="left">
        <image :src="cover" />
      </view>
      <view class="right">
        <text class="right__title">BLACK PANTHER</text>
        <view class="right__time">
          <text>2 HR 17 MIN</text>
          <text>28 Feb 2:15pm</text>
        </view>
      </view>

      <image
        class="more pointer"
        src="~_images/more.png"
        @tap.stop="showInfo = !showInfo"
      />
    </view>
    <transition name="slide-up">
      <view class="ticket-info" v-show="showInfo">
        <view class="date-time">
          <text class="day number">10</text>
          <view class="month-week letter">
            <text class="month">December</text>
            <text class="week light">Sunday</text>
          </view>
          <view class="time">
            <text class="number time-text">4:35</text>
            <text class="letter half">pm</text>
          </view>
        </view>

        <view class="category letter">Reald 3D, cinema parc, NY</view>
        <view class="hall letter">Hall Reald 3D №4</view>

        <view class="site">
          <view class="row">
            <text class="letter">Row</text>
            <text class="number">8</text>
          </view>
          <view class="col">
            <text class="letter">Seats</text>
            <text class="number">6,7,8</text>
          </view>
        </view>

        <view class="divider">
          <view class="inner"></view>
        </view>

        <view class="id-price">
          <view class="id">
            <text class="light letter">Ticket ID</text>
            <text class="letter">4434 7866 4148 9843</text>
          </view>
          <view class="price">
            <text class="light letter">Price</text>
            <text class="letter">24</text>
          </view>
        </view>
        <view class="code">
          <image src="~_images/barcode.png" />
        </view>
      </view>
    </transition>
  </view>
</template>

<script lang="ts">
import { ref } from "vue";
// import { navigateTo } from "@tarojs/taro";

export default {
  name: "TicketCard",

  setup() {
    const showInfo = ref(false);
    const cover = require(`_images/poster${Math.floor(
      Math.random() * 8 + 1
    )}.png`);
    const onInfo = () => {
      // navigateTo({ url: "../ticket-info/ticket-info" });
      showInfo.value = !showInfo.value;
    };
    return { onInfo, showInfo, cover };
  }
};
</script>

<style lang="scss">
.ticketcard-wrap {
  background-color: #ffffff;
  border-radius: 10px;
  .ticket-top {
    height: 135px;
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

  .ticket-info {
    overflow: auto;
    & > view:not(.divider) {
      padding: 0 24px;
    }
    .number {
      font-family: Montserrat-Medium;
      color: #000000;
      opacity: 0.87;
      font-size: 44px;
    }
    .letter {
      font-family: Montserrat-SemiBold;
      color: #000000;
      opacity: 0.87;
      font-size: 14px;
    }
    .light {
      color: #000000;
      opacity: 0.54;
    }
    .date-time {
      display: flex;
      align-items: center;
      .day {
        font-size: 44px;
      }
      .month-week {
        display: flex;
        flex-direction: column;
        margin-left: 7px;
        font-size: 14px;
      }
      .time {
        display: flex;
        align-items: flex-start;
        margin-left: auto;
        &-text {
          font-size: 44px;
        }
        .half {
          margin-top: 5px;
          font-size: 14px;
        }
      }
    }
    .category,
    .hall {
      margin-top: 11px;
      font-size: 14px;
    }

    .site {
      display: flex;
      margin-top: 31px;
      .row,
      .col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .col {
        margin-left: 42px;
      }
    }

    .divider {
      position: relative;
      margin: 30px 0;
      padding: 0 24px;
      .inner {
        height: 1px;
        background-color: #000000;
        opacity: 0.05;
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: rgb(235, 239, 244);
      }

      &::before {
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &::after {
        right: 0;
        top: 50%;
        transform: translate(50%, -50%);
      }
    }
    .id-price {
      display: flex;
      justify-content: space-between;
      .id,
      .price {
        display: flex;
        flex-direction: column;
      }
    }
    .code {
      margin-top: 19px;
      margin-bottom: 23px;
      image {
        height: 67px;
        width: 100%;
      }
    }
  }
}
</style>
