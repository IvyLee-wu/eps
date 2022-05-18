<template>
  <div class="mt-15">
    <app-bar />
    <v-card
      outlined
      tile
      class="d-flex"
      v-for="(item, index) in shop"
      :key="index"
      @click="$router.push('/schedule-list')"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="100px"
        width="100px"
      ></v-img>
      <v-card-text>
        {{ item.name }}
        <br />
        {{ item.address }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import AppBar from "../components/AppBar";

export default {
  components: {
    AppBar,
  },

  data: () => ({
    shop: [
      { name: "ＪＪ虹吸咖啡", address: "臺南市中西區國華街３段２６號Ａ８" },
      {
        name: "龍鳳東大門韓國料理",
        address: "臺南市新營區大宏里中正路１２號１樓",
      },
      {
        name: "龍鳳北平烤鴨",
        address: "臺南市中西區南廠里金華路３段５１號１樓",
      },
      {
        name: "龍門燄餐廳",
        address: "臺南市永康區崑山里崑大路１５５巷３１號１樓",
      },
      {
        name: "龍洋餐飲",
        address: "臺南市新市區新和里００３鄰中正路２９號１樓",
      },
      { name: "龍泉岩土雞莊", address: "臺南市關廟區花園里中正路５５號" },
      { name: "龍元齋美食商行", address: "臺南市官田區隆本里勝利路１６６號" },
    ],
  }),
};
</script>