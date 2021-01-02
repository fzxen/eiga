<template>
  <view :class="['button-wrap', 'flex-center', `${type}-btn`]">
    <slot>{{ text }}</slot>
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "EButton",

  emits: ["tap"],

  props: {
    text: String,
    type: {
      type: String,
      default: "primary",
      validator: (val: string) => ["primary", "text"].indexOf(val) >= 0
    }
  },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.button-wrap {
  // width: 305px;
  height: 61px;
  &.primary-btn {
    background-image: linear-gradient(165deg, #00b3c6 0%, #5d84b4 100%),
      linear-gradient(#7292cb, #7292cb);
    background-blend-mode: normal, normal;
    border-radius: 12px;

    font-family: Montserrat-Medium;
    font-size: 18px;
    color: #ffffff;
  }
  &.text-btn {
    font-family: Montserrat-SemiBold;
    font-size: 18px;
    color: #607395;
    opacity: 0.87;
  }
}
</style>
