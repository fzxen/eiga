<template>
  <view class="setting-wrap container">
    <view class="title">SETTINGS</view>
    <view class="setting-menu">
      <label>Notification</label>
      <ESwitch v-model="isNotification" @tap.stop />
    </view>
    <view class="setting-menu">
      <label>Notification Sounds</label>
      <ESwitch v-model="isNotificationSound" @tap.stop />
    </view>
    <view class="setting-menu">
      <label>Terms of Services</label>
    </view>
    <view class="setting-menu">
      <label>Privasy Policy</label>
    </view>
    <view class="setting-menu">
      <label>FAQ</label>
    </view>
    <view class="setting-menu">
      <label class="red">Log Out</label>
    </view>
  </view>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Setting",

  setup() {
    const isNotification = ref(false);
    const isNotificationSound = ref(false);
    return { isNotification, isNotificationSound };
  }
};
</script>

<style lang="scss">
.setting-wrap {
  display: flex;
  flex-direction: column;
  .title {
    margin: 30px auto;
    font-family: Montserrat-Bold;
    font-size: 24px;
    color: #607395;
  }
  .setting-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 34px;
    height: 60px;
    cursor: pointer;

    label {
      font-family: Montserrat-SemiBold;
      font-size: 16px;
      color: #607395;
    }

    .red {
      color: #ff7272;
    }
  }
}
</style>
