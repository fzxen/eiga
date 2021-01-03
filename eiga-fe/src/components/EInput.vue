<template>
  <view class="e-input-wrap">
    <label v-if="label">{{ label }}</label>
    <input :type="type" />
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "EInput",

  props: {
    label: String,
    type: {
      type: String,
      default: "text"
    }
  },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.e-input-wrap {
  label {
    font-family: Montserrat-Bold;
    font-size: 14px;
    color: #607395;
    opacity: 0.54;
  }
  input {
    height: 30px;
    border-bottom: 2px solid rgba($color: #607395, $alpha: 0.54);
  }
  .input-placeholder {
    font-family: Montserrat-SemiBold;
    font-size: 16px;
    letter-spacing: 1px;
    color: #607395;
  }
}
</style>
