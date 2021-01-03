<template>
  <view class="myinfo-wrap">
    <text class="value">joanna_murphu@gmail.com</text>
    <text class="label m-t-10">email</text>
    <text class="value m-t-20">+1 684 733 123</text>
    <text class="label m-t-10">Number</text>
    <EButton class="btn m-t-35" @tap="$emit('profile-edit')">Edit</EButton>
  </view>

</template>

<script lang="ts">
import {} from "vue";


export default {
  name: "MyInfo",

  components: {  },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.myinfo-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  .value {
    font-family: Montserrat-SemiBold;
    font-size: 14px;
    color: #000000;
    opacity: 0.87;
  }
  .label {
    font-family: Montserrat-SemiBold;
    font-size: 14px;
    color: #000000;
    opacity: 0.44;
  }

  .m-t-10 {
    margin-top: 10px;
  }
  .m-t-20 {
    margin-top: 20px;
  }
  .m-t-35 {
    margin-top: 35px;
  }

  .btn {
    width: 100%;
  }
}
</style>
