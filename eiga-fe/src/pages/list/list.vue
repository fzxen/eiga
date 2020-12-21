<template>
  <view class="list-wrap tab-container">
    <Switcher class="switcher" :btns="btns" v-model="tabValue" />

    <swiper class="swiper" :current="tabValue">
      <swiper-item>
        <CardList class="card-list" :data="cardData" />
      </swiper-item>
      <swiper-item>
        <CardList class="card-list" type="grid" :data="cardData" />
      </swiper-item>
    </swiper>

    <ETabBar />
  </view>
</template>

<script lang="ts">
import { ref } from "vue";
import Switcher from "../../components/Switcher.vue";
import CardList from "./components/CardList.vue";

export default {
  name: "List",

  components: { Switcher, CardList },

  setup() {
    const btns = [
      {
        id: 0,
        text: "IN THEATERS"
      },
      {
        id: 1,
        text: "COMING SOON"
      }
    ];

    const cardData = [
      {
        cover: require("../../images/poster1.png"),
        title: "12 STRONG",
        release: "OPENING JAN 19"
      },
      {
        cover: require("../../images/poster2.png"),
        title: "12 STRONG",
        release: "OPENING JAN 19"
      },
      {
        cover: require("../../images/poster3.png"),
        title: "12 STRONG",
        release: "OPENING JAN 19"
      },
      {
        cover: require("../../images/poster4.png"),
        title: "12 STRONG",
        release: "OPENING JAN 19"
      },
      {
        cover: require("../../images/poster5.png"),
        title: "12 STRONG",
        release: "OPENING JAN 19"
      }
    ];

    const tabValue = ref(0);
    return { tabValue, btns, cardData };
  }
};
</script>

<style lang="scss">
.list-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;

  .switcher {
    margin-top: 40px;
  }

  .swiper {
    margin-top: 31px;
    width: 100%;
    height: 83%;

    .card-list {
      // flex: 1;
      height: 100%;
    }
  }
}
</style>
