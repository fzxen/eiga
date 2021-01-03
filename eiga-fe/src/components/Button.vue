<template>
  <view
    :class="['button-wrap', 'flex-center', `${type}-btn`]"
    @tap.stop="$emit('tap')"
  >
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
      validator: (val: string) => ["primary", "text", "light"].indexOf(val) >= 0
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
  border-radius: 12px;
  font-family: Montserrat-Medium;
  font-size: 18px;
  &.primary-btn {
    background: linear-gradient(165deg, #00b3c6 0%, #5d84b4 100%),
      linear-gradient(#7292cb, #7292cb);
    background-blend-mode: normal, normal;

    color: #ffffff;
  }
  &.text-btn {
    color: #607395;
    opacity: 0.87;
  }

  &.light-btn {
    background: #ffffff;
    color: #607395;
    opacity: 0.54;
  }
}
</style>
