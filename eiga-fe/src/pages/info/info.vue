<template>
  <view class="info-wrap container">
    <!-- <BackArrow class="back-arrow" /> -->

    <VideoSwitcher />

    <view class="info-box">
      <text class="title">STAR WARS: THE LAST JEDI</text>
      <text class="release">2 HR 32 MIN PG13</text>
      <text class="category">Adventure</text>
      <text class="description"
        >In Lucasfilm’s Star Wars: The Last Jedi, the Skywalker saga continues
        as the heroes of The Force Awakens join the galactic legends in an epic
        adventure that unlocks age-old mysteries of the Force and shocking
        revelations of the past.</text
      >
      <view class="directory">
        <view class="d-title">Director:</view>Rian Johnson
      </view>
      <view class="actor">
        <view class="a-title">Actor:</view>Mark Hamill, Daisy Ridley, Adam
        Driver Carrie Fisher, Domhnall Gleeson, Benicio Del Toro, John Boyega,
        Laura Dern.
      </view>
    </view>
    <view class="btn-wrap">
      <EButton class="btn">Get Tickets</EButton>
    </view>
  </view>
</template>

<script lang="ts">
import { ref } from "vue";
import VideoSwitcher from "./components/VideoSwitcher.vue";
import BackArrow from "../../components/BackArrow.vue";

export default {
  name: "Info",

  components: { VideoSwitcher, BackArrow },

  setup() {
    const videoNum = ref(0);
    return { videoNum };
  }
};
</script>

<style lang="scss">
.info-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .back-arrow {
    position: absolute;
    top: 5px;
    left: 5px;
  }

  .info-box {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 35px;
    margin-top: 32px;
    padding-bottom: 100px;

    .title {
      font-family: Montserrat-ExtraBold;
      font-size: 24px;
      color: #607395;
    }

    .release {
      margin-top: 23px;
      font-family: Montserrat-SemiBold;
      font-size: 14px;
      color: #000000;
      opacity: 0.87;
    }

    .category {
      margin-top: 14px;
      font-family: Montserrat-SemiBold;
      font-size: 14px;
      color: #000000;
      opacity: 0.54;
    }

    .description {
      margin-top: 26px;
      font-family: Montserrat-Medium;
      font-size: 14px;
      line-height: 23px;
      color: #010101;
      opacity: 0.54;
    }

    .directory {
      margin-top: 25px;
      font-size: 14px;
      font-family: Montserrat-Medium;
      color: #000000;
      opacity: 0.54;

      .d-title {
        font-family: Montserrat-SemiBold;
        opacity: 0.87;
      }
    }
    .actor {
      margin-top: 25px;
      font-size: 14px;
      font-family: Montserrat-Medium;
      color: #000000;
      opacity: 0.54;
      line-height: 23px;

      .a-title {
        font-family: Montserrat-SemiBold;
        opacity: 0.87;
      }
    }
  }

  .btn-wrap {
    position: fixed;
    bottom: 0;
    left: 50%;
    width: 100vw;
    padding: 10px 0 20px 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(#cccccc, 0.5),
      rgba(#cccccc, 0.1)
    );
    transform: translateX(-50%);
    .btn {
      width: 80%;
      margin: 0 auto;
    }
  }
}
</style>
