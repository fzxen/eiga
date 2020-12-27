<template>
  <view class="seat-wrap container">
    <view class="screen">
      <image class="screen" src="~_images/poster1.png" />
    </view>

    <view class="seat-list">
      <SeatList />
    </view>

    <view class="tips">
      <image src="~_images/seat_available.png" />
      <text>AVAILABLE</text>
      <image src="~_images/seat_taken.png" />
      <text>TAKEN</text>
      <image src="~_images/seat_selected.png" />
      <text>SELECTED</text>
    </view>

    <EButton class="btn" @tap="onNext">PAY $43.50</EButton>
  </view>
</template>

<script lang="ts">
import {} from "vue";
import SeatList from "./components/SeatList.vue";

export default {
  name: "Seat",

  components: { SeatList },

  setup() {
    const onNext = () => {};
    return { onNext };
  }
};
</script>

<style lang="scss">
.seat-wrap {
  .screen {
    perspective-origin: top;
    perspective: 500px;
    image {
      display: block;
      margin: 20px auto 0 auto;
      width: 280px;
      height: 180px;
      border-radius: 10px;
      overflow: hidden;

      transform: rotateX(-45deg);
      box-shadow: 0px 7px 5px 0px rgba(#45c1e3, 0.2);
    }
  }

  .seat-list {
  }
  .tips {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    image {
      width: 20px;
      height: 20px;

      &:not(:first-of-type) {
        margin-left: 31px;
      }
    }

    text {
      margin-left: 7px;
      font-family: Montserrat-SemiBold;
      font-size: 10px;
      color: #607395;
    }
  }
  .btn {
    margin: 42px;
  }
}
</style>
