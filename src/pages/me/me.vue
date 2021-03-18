<template>
  <view class="me-wrap tab-container">
    <image class="avatar-bg" :src="avatarBg" />
    <image
      class="settings pointer"
      src="~_images/setting.png"
      @tap="goToSetting"
    />
    <view class="me-inner">
      <view class="me-name">
        <text class="name">JOANNA MURPHY</text>
        <text class="address">New York, NY</text>
      </view>
      <view class="switcher-wrap-out flex-center">
        <Switcher class="switcher" :btns="menus" v-model="activedMenu" />
      </view>

      <!-- <swiper class="swiper" :current="activedMenu">
        <swiper-item> <Watched /> </swiper-item>
        <swiper-item>
          <MyInfo @profile-edit="showEditProfile = true" />
        </swiper-item>
        <swiper-item> <PayCard /> </swiper-item>
      </swiper> -->
      <view class="element">
        <component
          :is="activedMenu"
          @profile-edit="showEditProfile = true"
          @card-add="showAddCard = true"
        />
      </view>
    </view>
    <ETabBar />
  </view>
  <EditProfile v-model="showEditProfile" :style="{zIndex: 2}" />
  <AddCard v-model="showAddCard" :style="{zIndex: 2}" />
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import avatarBg from "_images/photo_bg.png";
import Switcher from "../../components/Switcher.vue";

import MyInfo from "./components/MyInfo.vue";
import Watched from "./components/Watched.vue";
import PayCard from "./components/PayCard.vue";

import EditProfile from "./components/EditProfile.vue";
import AddCard from "./components/AddCard.vue";
import { navigateTo } from "@tarojs/taro";

export default {
  name: "Me",

  components: { Switcher, MyInfo, Watched, PayCard, EditProfile, AddCard },

  setup() {
    const menus = reactive([
      {
        id: "Watched",
        text: "WATCHED"
      },
      {
        id: "MyInfo",
        text: "MY INFO"
      },
      {
        id: "PayCard",
        text: "PAY CARD"
      }
    ]);
    const activedMenu = ref("Watched");

    const showEditProfile = ref(false);
    const showAddCard = ref(false);

    const goToSetting = () => {
      navigateTo({ url: "../setting/setting" });
    };
    return {
      avatarBg,
      menus,
      activedMenu,
      showEditProfile,
      showAddCard,
      goToSetting
    };
  }
};
</script>

<style lang="scss">
.me-wrap {
  // display: flex;
  // flex-direction: column;
  background-repeat: no-repeat;
  background-position: 0 -18px;

  .avatar-bg {
    position: fixed;
    top: -18px;
    left: 0;
    width: 100%;
    height: 57vh;
    z-index: 0;
  }

  // & > *:not(.avatar-bg) {
  //   z-index: 2;
  // }

  .settings {
    position: fixed;
    top: 30px;
    right: 35px;
    width: 24px;
    height: 24px;
  }

  .me-inner {
    position: relative;
    margin-top: 40vh;
    background: linear-gradient(
      to bottom,
      transparent 0,
      transparent 30px,
      rgba(238, 242, 245, 1) 70px,
      rgba(238, 242, 245, 1) 100%
    );
    z-index: 2;
  }
  .me-name {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .switcher {
      display: block;
      text-align: center;
    }
  }

  .swiper {
    // height: auto;
    min-height: 225px;
    // min-height: 1005px;
  }
}
</style>
