<template>
  <view class="custom-tabbar-wrap">
    <view class="inner" v-for="data of list" :key="data.pagePath">
      <image
        class="icon"
        :src="select === data.pagePath ? data.selectedIconPath : data.iconPath"
        @tap="onRoute(data.pagePath)"
      />
      <view v-if="data.text">{{ data.text }}</view>
    </view>
  </view>
</template>

<script lang="ts">
import { onMounted, reactive, ref } from "vue";
import { switchTab, getCurrentInstance } from "@tarojs/taro";

export default {
  name: "CustomTabbar",

  setup() {
    const select = ref();
    const list = reactive([
      {
        pagePath: "/pages/list/list",
        iconPath: require("_images/movie.png"),
        selectedIconPath: require("_images/movie_active.png")
      },
      {
        pagePath: "/pages/ticket/ticket",
        iconPath: require("_images/ticket.png"),
        selectedIconPath: require("_images/ticket_active.png")
      },
      {
        pagePath: "/pages/me/me",
        iconPath: require("_images/user.png"),
        selectedIconPath: require("_images/user_active.png")
      }
    ]);

    onMounted(() => {
      const path = getCurrentInstance().router?.path;
      console.log(path);

      select.value = path;
    });

    const onRoute = url => {
      switchTab({ url });
    };

    return {
      list,
      select,

      onRoute
    };
  }
};
</script>

<style lang="scss">
.custom-tabbar-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100vw;
  height: 70px;
  background-color: #ffffff;
  border-radius: 25px 25px 0 0;
  // opacity: 0.1;

  .inner {
  }

  .icon {
    width: 22px;
    height: 22px;
    padding: 20px;
  }
}
</style>
