<template>
  <view :class="['drawer-wrap', { show: modelValue, half }]">
    <image class="arrow" src="~_images/arrow_up.png" @tap="$emit('on-hide')" />
    <slot></slot>
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "Drawer",

  props: {
    modelValue: Boolean,
    half: Boolean
  },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.drawer-wrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translateY(-100vh);
  transition: transform 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
  padding: 0 35px;

  &.half {
    bottom: 30%
  }
  .arrow {
    align-self: center;
    margin-top: 30px;
    width: 36px;
    height: 16px;
  }

  &.show {
    transform: translateY(0);
  }
}
</style>
