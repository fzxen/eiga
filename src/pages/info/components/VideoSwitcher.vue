<template>
  <view class="video-switcher-wrap">
    <swiper
      class="swiper"
      :current="videoNum"
      @change="onChange"
      previousMargin="25px"
      nextMargin="25px"
    >
      <swiper-item class="swiper-item" v-for="i of 3" :key="i" :itemid="i">
        <video
          class="videos"
          src="http://vjs.zencdn.net/v/oceans.mp4"
          :muted="true"
          :controls="true"
        />
      </swiper-item>
    </swiper>

    <Indicator class="indicator" :count="3" v-model="videoNum" />
  </view>
</template>

<script lang="ts">
import { ref } from "vue";
import Indicator from "../../../components/Indicator.vue";

export default {
  name: "VideoSwitcher",

  components: { Indicator },

  setup() {
    const videoNum = ref(0);
    const onChange = e => {
      videoNum.value = e.detail.current;
    };
    return { videoNum, onChange };
  }
};
</script>

<style lang="scss">
.video-switcher-wrap {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .swiper {
    width: 100vw;
    height: 180px;

    &-item {
      display: flex;
      justify-content: center;
    }
  }
  .videos {
    width: 315px;
    height: 180px;
    border-radius: 10px;
    filter: drop-shadow(2px 5px 5px #cccccc);
  }
  .indicator {
    margin-top: 24px;
  }
}
</style>
