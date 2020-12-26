<template>
  <view class="ticket-count-wrap">
    <image
      class="img"
      src="~_images/minus.png"
      @tap="$emit('update:modelValue', modelValue <= 0 ? 0 : modelValue - 1)"
    />

    <view class="text-info flex-center">
      <text class="type">{{ modelValue }} {{ type }}</text>
      <text class="sub">{{ sub }}</text>
      <text class="money">$ {{ price }}</text>
    </view>

    <image
      class="img"
      src="~_images/plus.png"
      @tap="$emit('update:modelValue', modelValue + 1)"
    />
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "TicketCount",

  props: {
    modelValue: {
      required: true,
      type: Number
    },
    type: {
      required: true,
      type: String
    },
    sub: String,
    price: Number
  },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.ticket-count-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .text-info {
    flex: 1;
    flex-direction: column;

    .type {
      font-family: Montserrat-ExtraBold;
      font-size: 20px;
      color: #607395;
    }
    .sub {
      margin-top: 4px;
      font-family: Montserrat-SemiBold;
      font-size: 14px;
      color: #000000;
      opacity: 0.54;
    }
    .money {
      margin-top: 6px;
      font-family: Montserrat-SemiBold;
      font-size: 16px;
      color: #607395;
    }
  }
}
</style>
