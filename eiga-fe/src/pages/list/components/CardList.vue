<template>
  <scroll-view :scrollY="true" class="card-list">
    <view :class="['card-wrap', type]">
      <view class="card" v-for="c of data" :key="c.cover">
        <view
          class="img-container"
          :style="{ 'background-image': `url(${c.cover})` }"
        />
        <text class="title">{{ c.title }}</text>
        <text class="release">{{ c.release }}</text>
      </view>
    </view>
  </scroll-view>
</template>

<script lang="ts">
import {} from "vue";
import {} from "@tarojs/taro";

export default {
  name: "CardList",

  components: {},

  props: {
    type: {
      type: String,
      default: "line",
      validator: (val: string) => ["line", "grid"].indexOf(val) >= 0
    },
    data: {
      required: true,
      type: Array
    }
  },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.card-wrap {
  padding: 0 16px;
  &.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 23px;
    .card {
      height: 200px;
      padding-bottom: 48px;

      .title {
        left: 5px;
        bottom: 18px;

        font-family: Montserrat-ExtraBold;
        font-size: 14px;
        color: #607395;
      }
      .release {
        left: 5px;
        bottom: 0;

        font-family: Montserrat-SemiBold;
        font-size: 12px;
        color: #000000;
        opacity: 0.54;
      }
    }
  }
  &.line {
    .card {
      margin-bottom: 16px;
    }
  }
  .card {
    position: relative;
    height: 160px;

    .img-container {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 10px;
      box-shadow: 1px 5px 5px #cccccc;
    }

    .title,
    .release {
      position: absolute;
      left: 20px;
      overflow: hidden;
      display: inline-block;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .title {
      bottom: 40px;

      font-family: Montserrat-ExtraBold;
      font-size: 20px;
      color: #fefefe;
    }
    .release {
      bottom: 20px;

      font-family: Montserrat-SemiBold;
      font-size: 12px;
      color: #ffffff;
    }
  }
}
</style>
