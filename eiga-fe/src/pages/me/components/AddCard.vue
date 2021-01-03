<template>
  <Drawer v-model="isShow" class="add-card-wrap" @on-hide="isShow = false" half>
    <view class="top-title">ADD A CARD</view>

    <view class="card">
      <input type="number" placeholder="XXXX XXXX XXXX XXXX" />

      <view class="info">
        <view>
          <label>MONTH/YEAR</label>
          <input class="info-input" type="text" placeholder="29/12" />
        </view>
        <view>
          <label>CVC2/CVV2</label>
          <input class="info-input" type="text" placeholder="XXX" />
        </view>
      </view>

      <input class="holder" type="text" placeholder="CARD HOLDER" />
    </view>

    <EButton class="btn" type="light" @tap="onConfirm">Confirm</EButton>
  </Drawer>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  name: "AddCard",

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

    const onConfirm = () => {
      isShow.value = false;
    };
    return { isShow, onConfirm };
  }
};
</script>

<style lang="scss">
.add-card-wrap {
  background-image: linear-gradient(165deg, #00b3c6 0%, #5d84b4 100%),
    linear-gradient(#7292cb, #7292cb);
  background-blend-mode: normal, normal;
  border-radius: 0 0 25px 25px;

  .top-title {
    font-family: Montserrat-SemiBold;
    font-size: 24px;
    color: #ffffff;
    margin: 30px auto;
  }
  .card {
    padding: 19px 27px;
    // width: 305px;
    // height: 180px;
    border-radius: 5px;
    border: solid 1px #ffffff;
    opacity: 0.2;

    input {
      border: none;
      height: 14px;
    }
    .input-placeholder {
      font-family: Montserrat-Medium;
      font-size: 16px;
      color: #ffffff;
      opacity: 1;
    }

    .info {
      display: flex;
      justify-content: space-between;
      margin-top: 27px;
      label {
        font-family: Montserrat-Medium;
        font-size: 9px;
        color: #ffffff;
      }
      &-input {
      }
    }

    .holder {
      margin-top: 20px;
      // width: 50%;
    }
  }

  .btn {
    margin-top: 43px;
  }
}
</style>
