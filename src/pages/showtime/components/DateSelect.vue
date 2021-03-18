<template>
  <view class="date-select-wrap">
    <view class="top">
      <text class="date-title">DATE</text>
      <view class="date-select">
        <picker
          mode="selector"
          :value="checkMonth"
          :range="monthSelectRange"
          @change="e => (checkMonth = e.detail.value)"
        >
          <text class="date-select-title">{{ monthName }}</text>
          <image class="icon-arrow-down" src="~_images/arrow_down.png" />
        </picker>
      </view>
    </view>

    <view class="day-select">
      <view
        :class="['day', 'flex-center', { active: i === checkDay }]"
        v-for="i of 31"
        :key="i"
        @tap="checkDay = i"
      >
        <text class="day-num">{{ i }}</text>
        <text class="week">SUN</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, ref } from "vue";

const month = [
  {
    label: "JANUARY",
    value: 1
  },
  {
    label: "FEBRUARY",
    value: 2
  },
  {
    label: "MARCH",
    value: 3
  },
  {
    label: "APRIL",
    value: 4
  },
  {
    label: "MAY",
    value: 5
  },
  {
    label: "JUNE",
    value: 6
  },
  {
    label: "JULY",
    value: 7
  },
  {
    label: "AUGUST",
    value: 8
  },
  {
    label: "SEPTEMPER",
    value: 9
  },
  {
    label: "OCTOBER",
    value: 10
  },
  {
    label: "NOVERMBER",
    value: 11
  },
  {
    label: "DECEMBER",
    value: 12
  }
];

export default {
  name: "DateSelect",

  components: {},

  props: {
    // modelValue: {
    //   required: true,
    //   type: String
    // }
  },

  setup() {
    const monthSelectRange = month.map(m => m.label);
    const checkMonth = ref(new Date().getMonth());

    const monthName = computed(() => monthSelectRange[checkMonth.value]);

    const checkDay = ref(3);
    return { monthSelectRange, checkMonth, monthName, checkDay };
  }
};
</script>

<style lang="scss">
.date-select-wrap {
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: #ffffff;

  .date-title {
    font-family: Montserrat-ExtraBold;
    font-size: 16px;
    color: #607395;
  }

  .date-select {
    &-title {
      font-family: Montserrat-SemiBold;
      font-size: 14px;
      color: #607395;
    }

    .icon-arrow-down {
      padding-left: 8px;
      width: 14px;
      height: 8px;
    }
  }

  .dropdown {
    display: none;
  }
}

.day-select {
  display: flex;
  overflow-x: auto;
  padding: 24px 0;
  border-radius: 0 0 25px 25px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba($color: #cccccc, $alpha: 0.3);

  .day {
    flex-direction: column;
    flex-shrink: 0;
    width: 60px;
    height: 60px;

    background-blend-mode: normal, normal;
    border-radius: 12px;

    margin: 0 5px;
    .day-num {
      font-family: Montserrat-Regular;
      font-size: 24px;
      color: rgba($color: #607395, $alpha: 0.87);
    }
    .week {
      font-family: Montserrat-SemiBold;
      font-size: 10px;
      color: rgba($color: #607395, $alpha: 0.54);
    }

    &.active {
      background-image: linear-gradient(165deg, #00b3c6 0%, #5d84b4 100%),
        linear-gradient(#7292cb, #7292cb);
      .day-num,
      .week {
        color: #ffffff;
      }
    }
  }
}
</style>
