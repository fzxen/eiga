<template>
  <view class="drop-down-wrap">
    <view class="drop-item" v-for="d of data" :key="d.label">{{
      d.label
    }}</view>
  </view>
</template>

<script lang="ts">
import {} from "vue";

export default {
  name: "DropDown",

  props: {
    data: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type:
    }
  },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.drop-down-wrap {
}
</style>
