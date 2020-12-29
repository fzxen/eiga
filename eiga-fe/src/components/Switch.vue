<template>
  <view
    :class="['switch-wrap', { active: modelValue }]"
    @tap="$emit('update:modelValue', !modelValue)"
  >
    <view class="track"></view>
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "Switch",

  props: {
    modelValue: {
      required: true,
      type: Boolean
    }
  },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.switch-wrap {
  display: inline-block;
  position: relative;
  padding: 0 5px;
  width: 60px;
  height: 30px;
  background-color: #d2d8e1;
  box-shadow: inset 0px 3px 7px 0px rgba(195, 220, 229, 0.35);
  border-radius: 15px;
  opacity: 0.5;

  .track {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
  }

  &.active {
    background: #5d84b4;
    .track {
      left: 60%;
    }
  }
}
</style>
