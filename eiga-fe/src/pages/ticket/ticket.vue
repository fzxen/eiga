<template>
  <view class="ticket-wrap tab-container">
    <view class="title">MY TICKETS</view>
    <scroll-view class="card-list" :scrollY="true">
      <TicketCard class="card" v-for="i of 10" :key="i" />
    </scroll-view>
    <ETabBar />
  </view>
</template>

<script lang="ts">
import {} from "vue";
import TicketCard from "./components/TicketCard.vue";

export default {
  name: "Ticket",

  components: { TicketCard },

  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.ticket-wrap {
  .title {
    margin-top: 15px;
    text-align: center;
    font-family: Montserrat-Bold;
    font-size: 24px;
    color: #607395;
  }
  .card-list {
    width: 100%;
    height: 565px;
    box-sizing: border-box;

    .card {
      margin: 16px;
    }
  }
}
</style>
