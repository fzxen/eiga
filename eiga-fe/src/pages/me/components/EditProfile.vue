<template>
  <Drawer
    v-model="isShow"
    class="edit-profile-wrap container"
    :style="{ backgroundImage: `url(${avatarBg})` }"
    @on-hide="isShow = false"
  >
    <view class="edit-avatar flex-center">
      <image src="~_images/camera.png" />
    </view>

    <view class="form">
      <EInput label="Name" />
      <EInput label="City" />
      <EInput label="Your Name" />
      <EInput label="Number" />

      <EButton class="btn" @tap="onSave">SAVE</EButton>
    </view>
  </Drawer>
</template>

<script lang="ts">
import { computed } from "vue";
import avatarBg from "_images/photo_bg.png";

export default {
  name: "EditProfile",

  props: {
    modelValue: {
      required: true,
      type: Boolean
    }
  },

  setup(props, { emit }) {
    const isShow = computed({
      get() {
        return props.modelValue;
      },
      set(val: boolean) {
        emit("update:modelValue", val);
      }
    });

    const onSave = () => {
      isShow.value = false;
    };
    return { avatarBg, isShow, onSave };
  }
};
</script>

<style lang="scss">
.edit-profile-wrap {
  // position: relative;
  background-repeat: no-repeat;
  background-position: 0 -18px;

  &::after {
    content: "";
    position: absolute;
    bottom: 46%;
    left: 0;
    // transform: translateY(15%);
    display: block;
    width: 100vw;
    height: 150px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(238, 242, 245, 1) 50% rgba(238, 242, 245, 1) 100%
    );
  }

  .edit-avatar {
    margin: 50px auto;
    width: 80px;
    height: 81px;
    background-image: linear-gradient(165deg, #00b3c6 0%, #5d84b4 100%),
      linear-gradient(#f2f5f7, #f2f5f7);
    background-blend-mode: normal, normal;
    opacity: 0.7;
    border-radius: 50%;
    image {
      width: 40px;
      height: 33px;
    }
  }

  .form {
    margin-top: 30px;
    z-index: 2;

    .e-input-wrap:not(:first-of-type) {
      margin-top: 35px;
    }
    .btn {
      margin-top: 34px;
    }
  }
}
</style>
