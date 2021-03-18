<template>
  <view class="ticket-type-wrap container">
    <view class="title flex-center">TICKET TYPE</view>
    <view class="counts">
      <TicketCount type="ADULT" sub="" :price="14.50" v-model="adult" />
      <TicketCount type="CHILD" sub="Age 2-12" :price="11.25" v-model="child" />
      <TicketCount type="SENIOR" sub="Age 60+" :price="12.50" v-model="senior" />
    </view>

    <view class="total-price flex-center">
      <text class="price">$ {{ totalPrice }}</text>
      <text class="total">Total</text>
    </view>

    <EButton class="button" @tap="onNext">NEXT</EButton>
  </view>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import TicketCount from "./components/TicketCount.vue";
import { navigateTo } from '@tarojs/taro';

export default {
  name: "TicketType",

  components: { TicketCount },

  setup() {
    const price = {
      adult: 14.5,
      child: 11.25,
      senior: 12.5
    };
    const adult = ref(1);
    const child = ref(1);
    const senior = ref(1);

    const totalPrice = computed(() => {
      const total =
        adult.value * price.adult +
        child.value * price.child +
        senior.value * price.senior;
      return total.toFixed(2);
    });

    const onNext = () => {
      navigateTo({url: "../seat/seat"})
    }
    return { adult, child, senior, totalPrice, onNext };
  }
};
</script>

<style lang="scss">
.ticket-type-wrap {
  .title {
    padding-top: 19px;
    padding-bottom: 21px;
    font-family: Montserrat-Bold;
    font-size: 24px;
    color: #607395;
    background: #ffffff;
  }
  .counts {
    padding: 39px 35px 47px 35px;
    background: #ffffff;
    border-radius: 0 0 25px 25px;

    .ticket-count-wrap:not(:first-of-type) {
      margin-top: 39px;
    }
  }
  .total-price {
    flex-direction: column;
    margin: 50px 0;
    .price {
      font-family: Montserrat-Medium;
      font-size: 44px;
      color: #607395;
    }
    .total {
      font-family: Montserrat-SemiBold;
      font-size: 16px;
      color: #000000;
      opacity: 0.54;
    }
  }
  .button {
    margin: 10px 35px;
  }
}
</style>
