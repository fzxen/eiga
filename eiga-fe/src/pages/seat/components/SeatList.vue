<template>
  <view class="seat-list-wrap">
    <view
      :class="['line', `${line.type}-line`]"
      v-for="[num, line] of Object.entries(seatData)"
      :key="num"
    >
      <SeatItem
        :type="line.type"
        v-for="(i, index) of line.data"
        :key="i"
        :status="i"
        :id="index"
        @on-check="onCheck(num, $event)"
      />
    </view>
  </view>
</template>

<script lang="ts">
import { computed, reactive } from "vue";
import SeatItem from "./SeatItem.vue";

const MAX_COUNT = 5;

export default {
  name: "SeatList",

  components: { SeatItem },

  setup() {
    const seatData = reactive({
      line1: {
        type: "normal",
        data: new Array(6).fill(0)
      },
      line2: {
        type: "normal",
        data: new Array(8).fill(1)
      },
      line3: {
        type: "normal",
        data: new Array(10).fill(0)
      },
      line4: {
        type: "normal",
        data: new Array(10).fill(0)
      },
      line5: {
        type: "chair",
        data: new Array(9).fill(0)
      },
      line6: {
        type: "normal",
        data: new Array(10).fill(0)
      },
      line7: {
        type: "normal",
        data: new Array(10).fill(0)
      },
      line8: {
        type: "normal",
        data: new Array(10).fill(0)
      },
      line9: {
        type: "normal",
        data: new Array(8).fill(0)
      },
      line10: {
        type: "double",
        data: new Array(5).fill(0)
      }
    });
    const selectedCount = computed(() => {
      let count = 0;
      Object.values(seatData)
        .map(item => item.data)
        .forEach(arr => {
          for (const item of arr) item === 2 && count++;
        });

      return count;
    });
    const onCheck = (num: string, data: { id: number; status: number }) => {
      if (selectedCount.value >= MAX_COUNT && data.status === 2) return;

      seatData[num].data[data.id] = data.status;
    };
    return { seatData, onCheck };
  }
};
</script>

<style lang="scss">
.seat-list-wrap {
  overflow-y: hidden;
  overflow-x: auto;
  .line {
    display: flex;
    justify-content: center;

    &:not(:first-of-type) {
      margin-top: 8px;
    }

    .seat-item-wrap:not(:first-of-type) {
      flex-shrink: 0;
      margin-left: 10px;
    }

    &.chair-line {
      margin: 20px 0;
    }
    &.double-line {
      margin-top: 22px;
    }
  }
}
</style>
