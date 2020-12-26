<template>
  <view class="time-check-wrap">
    <view class="check-title">{{ checkTitle }}</view>

    <view class="check-list">
      <view
        :class="[
          'check-item',
          'flex-center',
          { active: t.value === modelValue }
        ]"
        v-for="t of data"
        :key="t.value"
        @tap="$emit('update:modelValue', t.value)"
      >
        {{ t.label }}
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "TimeCheck",

  props: {
    checkTitle: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: () => [
        {
          label: "1:51AM",
          value: "1"
        },
        {
          label: "1:51AM",
          value: "2"
        },
        {
          label: "1:51AM",
          value: "3"
        },
        {
          label: "1:51AM",
          value: "4"
        }
      ]
    },
    modelValue: {
      required: true,
      type: String
    }
  },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.time-check-wrap {
  padding: 0 30px;
  .check-title {
    font-family: Montserrat-ExtraBold;
    font-size: 16px;
    color: #607395;
  }
  .check-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 18px;
    margin-left: -6px;

    .check-item {
      margin: 6px;
      width: 95px;
      height: 57px;
      background-color: #ffffff;
      border-radius: 4px;
      box-shadow: 0 1px 15px 3px rgba($color: #cccccc, $alpha: 0.3);

      font-family: Montserrat-SemiBold;
      font-size: 16px;
      color: #607395;

      cursor: pointer;

      &.active {
        background-image: linear-gradient(165deg, #00b3c6 0%, #5d84b4 100%),
          linear-gradient(#7292cb, #7292cb);
        color: #ffffff;
      }
    }
  }
}
</style>
