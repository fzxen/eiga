<template>
  <view class="showtime-wrap container">
    <view class="title flex-center">SHOWTIMES</view>

    <view class="date">
      <DateSelect />
    </view>

    <view class="time">
      <TimeCheck check-title="REALD 3D" v-model="checkTime" />
      <TimeCheck check-title="DIGITAL" v-model="checkTime2" />
    </view>

    <EButton class="button" @tap="onNext">NEXT</EButton>
  </view>
</template>

<script lang="ts">
import { ref } from "vue";
import DateSelect from "./components/DateSelect.vue";
import TimeCheck from "./components/TimeCheck.vue";
import { navigateTo } from '@tarojs/taro';

export default {
  name: "ShowTime",

  components: { DateSelect, TimeCheck },

  setup() {
    const checkTime = ref("2");
    const checkTime2 = ref("2");

    const onNext = () => {
      navigateTo({url: "../ticket-type/ticket-type"})
    }
    return { checkTime, checkTime2, onNext };
  }
};
</script>

<style lang="scss">
.showtime-wrap {
  display: flex;
  flex-direction: column;
  .title {
    padding-top: 19px;
    padding-bottom: 21px;
    font-family: Montserrat-Bold;
    font-size: 24px;
    color: #607395;
    background: #ffffff;
  }
  .date {
    // background: #ffffff;
  }
  .time {
    flex: 1;
    overflow: auto;
    .time-check-wrap {
      margin-top: 47px;
    }
  }
  .button {
    margin-top: 47px;
    margin: 20px 30px;
  }
}
</style>
