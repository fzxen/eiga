<template>
  <view :class="['seat-item-wrap', type]" @tap="onClick">
    <image :src="imgSrc" />
  </view>
</template>

<script lang="ts">
import { computed } from "vue";

enum SeatStatus {
  NORMAL_AVAILABLE,
  NORAML_TAKEN,
  NORMAL_SELECTED,
  CHAIR_AVAILABLE,
  CHAIR_TAKEN,
  CHAIR_SELECTED,
  DOUBLE_AVAILABLE,
  DOUBLE_TAKEN,
  DOUBLE_SELECTED
}

const imgSrcs = {
  [SeatStatus.NORMAL_AVAILABLE]: require("_images/seat_available.png"),
  [SeatStatus.NORAML_TAKEN]: require("_images/seat_taken.png"),
  [SeatStatus.NORMAL_SELECTED]: require("_images/seat_selected.png"),
  [SeatStatus.CHAIR_AVAILABLE]: require("_images/chairseat_available.png"),
  [SeatStatus.CHAIR_TAKEN]: require("_images/chairseat_taken.png"),
  [SeatStatus.CHAIR_SELECTED]: require("_images/chairseat_taken.png"),
  [SeatStatus.DOUBLE_AVAILABLE]: require("_images/doubleseat_available.png"),
  [SeatStatus.DOUBLE_TAKEN]: require("_images/doubleseat_taken.png"),
  [SeatStatus.DOUBLE_SELECTED]: require("_images/doubleseat_taken.png")
};

export default {
  name: "SeatItem",

  props: {
    id: {
      required: true,
      type: Number
    },
    status: {
      type: Number,
      validator: (val: number) => [0, 1, 2].indexOf(val) >= 0,
      default: 0
    },
    type: {
      type: String,
      default: "normal",
      validator: (val: string) =>
        ["normal", "chair", "double"].indexOf(val) >= 0
    }
  },

  setup(props, { emit }) {
    const imgSrc = computed(() => {
      switch (props.type) {
        case "normal":
          return imgSrcs[props.status];
        case "chair":
          return imgSrcs[props.status + 3];
        case "double":
          return imgSrcs[props.status + 6];
      }
    });

    const onClick = () => {
      const status = props.status === 0 ? 2 : props.status === 2 ? 0 : 1;
      emit("on-check", { id: props.id, status });
    };
    return { imgSrc, onClick };
  }
};
</script>

<style lang="scss">
.seat-item-wrap {
  display: inline-block;
  width: 20px;
  height: 20px;
  &.chair {
    width: 16px;
    height: 19px;
  }
  &.double {
    width: 38px;
    height: 24px;
  }

  image {
    width: 100%;
    height: 100%;
  }
}
</style>
