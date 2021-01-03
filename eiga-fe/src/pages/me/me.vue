<template>
  <view
    class="me-wrap tab-container"
    :style="{ backgroundImage: `url(${avatarBg})` }"
  >
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

    <EditProfile v-model="showEditProfile" />
    <AddCard v-model="showAddCard" />
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
import AddCard from "./components/AddCard.vue";

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
    return { avatarBg, menus, activedMenu, showEditProfile, showAddCard };
  }
};
</script>

<style lang="scss">
.me-wrap {
  // display: flex;
  // flex-direction: column;
  background-repeat: no-repeat;
  background-position: 0 -18px;

  .me-inner {
    background: linear-gradient(
      to bottom,
      transparent 0,
      transparent 60px,
      rgba(238, 242, 245, 1) 100px,
      rgba(238, 242, 245, 1) 100%
    );
  }
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
