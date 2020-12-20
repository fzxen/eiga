<template>
  <view class="indicator-wrap">
    <view
      :class="['dot', { actived: modelValue === i - 1 }]"
      v-for="i of count"
      :key="`dot-${i}`"
      @tap="onDotClick(i - 1)"
    ></view>
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "Indicator",

  props: {
    count: {
      required: true,
      type: Number
    },
    modelValue: {
      required: true,
      type: Number
    }
  },

  setup(props, { emit }) {
    const onDotClick = (count: number) => {
      emit("update:modelValue", count);
    };
    return {
      onDotClick
    };
  }
};
</script>

<style lang="scss">
.indicator-wrap {
  display: inline-flex;
  justify-content: space-between;

  .dot {
    margin-right: 7px;
    width: 7px;
    height: 7px;
    background-color: rgb(187, 198, 212);
    border-radius: 4px;
    opacity: 0.36;
    transition: width 0.3s linear;

    &.actived {
      width: 14px;
      background-color: rgb(115, 132, 162);
    }
  }
}
</style>
