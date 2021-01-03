<template>
  <view class="switcher-wrap">
    <text
      v-for="btn of btns"
      :key="btn.id"
      :class="{ actived: modelValue === btn.id }"
      @tap="$emit('update:modelValue', btn.id)"
      >{{ btn.text }}</text
    >
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "Switcher",

  props: {
    btns: {
      required: true,
      type: Array
    },
    modelValue: {
      required: true,
      type: Number
    }
  },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.switcher-wrap {
  display: inline-block;
  font-family: Montserrat-SemiBold;
  font-size: 14px;
  color: #607395;
  opacity: 0.54;

  text:not(:first-of-type) {
    margin-left: 41px;
  }

  .actived {
    font-size: 24px;
    color: #3e5883;
    opacity: 1;
  }
}
</style>
