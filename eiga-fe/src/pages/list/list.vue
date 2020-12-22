<template>
  <view class="list-wrap tab-container">
    <Switcher class="switcher" :btns="btns" v-model="tabValue" />

    <swiper class="swiper" :current="tabValue">
      <swiper-item>
        <CardList class="card-list" :data="cardData" @on-tap="onTap" />
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
import { navigateTo } from "@tarojs/taro";

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
        cover: require("_images/poster1.png"),
        title: "STAR WARS: THE LAST JEDI",
        release: "2 HR 32 MIN  PG13"
      },
      {
        cover: require("_images/poster2.png"),
        title: "JUSTICE LEAGUE",
        release: "1 HR 59 MIN  PG3"
      },
      {
        cover: require("_images/poster3.png"),
        title: "FERDINAND",
        release: "1 HR 47 MIN  PG"
      },
      {
        cover: require("_images/poster4.png"),
        title: "12 STRONG",
        release: "1 HR 47 MIN  PG"
      },
      {
        cover: require("_images/poster5.png"),
        title: "12 STRONG",
        release: "1 HR 47 MIN  PG"
      }
    ];
    const isInfoShow = ref(false);

    const tabValue = ref(0);

    const onTap = () => {
      navigateTo({ url: "../info/info" });
    };
    return { tabValue, btns, cardData, isInfoShow, onTap };
  }
};
</script>

<style lang="scss">
.list-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 0 16px;

  .switcher {
    margin-top: 40px;
    padding: 0 16px;
  }

  .swiper {
    margin-top: 31px;
    width: 100%;
    height: 85%;

    .card-list {
      // flex: 1;
      height: 100%;
    }
  }

  .movie-info {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translateY(100vh);
    transition: transform 0.3s ease-in;
    z-index: 2;

    &.show {
      transform: translateY(0);
    }
  }
}
</style>
