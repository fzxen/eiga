<template>
  <view
    class="me-wrap tab-container"
    :style="{ backgroundImage: `url(${avatarBg})` }"
  >
    <view class="me-name">
      <text class="name">JOANNA MURPHY</text>
      <text class="address">New York, NY</text>
    </view>
    <view class="switcher-wrap-out flex-center">
      <Switcher class="switcher" :btns="menus" v-model="activedMenu" />
    </view>

    <swiper class="swiper" :current="activedMenu">
      <swiper-item> <Watched /> </swiper-item>
      <swiper-item> <MyInfo @profile-edit="showEditProfile = true"/> </swiper-item>
      <swiper-item> <PayCard /> </swiper-item>
    </swiper>
    <ETabBar />

    <EditProfile v-model="showEditProfile" />
  </view>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import avatarBg from "_images/photo_bg.png";
import Switcher from "../../components/Switcher.vue";

import MyInfo from "./components/MyInfo.vue";
import Watched from "./components/Watched.vue";
import PayCard from "./components/PayCard.vue";

import EditProfile from "./components/EditProfile.vue";

export default {
  name: "Me",

  components: { Switcher, MyInfo, Watched, PayCard, EditProfile },

  setup() {
    const menus = reactive([
      {
        id: 0,
        text: "WATCHED"
      },
      {
        id: 1,
        text: "MY INFO"
      },
      {
        id: 2,
        text: "PAY CARD"
      }
    ]);
    const activedMenu = ref(1);

    const showEditProfile = ref(false);
    return { avatarBg, menus, activedMenu, showEditProfile };
  }
};
</script>

<style lang="scss">
.me-wrap {
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: 0 -18px;

  .me-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40vh;
    // background-image: linear-gradient(
    //   to bottom,
    //   transparent 0%,
    //   rgba(238, 242, 245, 0.8) 70%,
    //   rgba(238, 242, 245, 1) 100%
    // );
    .name {
      font-family: Montserrat-Bold;
      font-size: 24px;
      color: #607395;
    }
    .address {
      margin-top: 11px;
      font-family: Montserrat-SemiBold;
      font-size: 14px;
      color: #000000;
      opacity: 0.54;
    }
  }
  .switcher-wrap-out {
    height: 80px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(238, 242, 245, 1) 50% rgba(238, 242, 245, 1) 100%
    );
    .switcher {
      display: block;
      text-align: center;
    }
  }

  .swiper {
    flex: 1;
  }
}
</style>
