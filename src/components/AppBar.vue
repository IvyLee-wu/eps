<template>
  <div>
    <v-app-bar elevation="4" color="blue" dark fixed>
      <v-icon @click="$router.go(-1)">chevron_left</v-icon>
      <!-- <v-text-field
        class="mx-2"
        placeholder="請輸入關鍵字"
        v-model="search"
        outlined
        hide-details
        rounded
        dense
        color="white"
        filled
      >
        <template #append>
          <div @click.stop.prevent="toSearch()">
            <v-icon>search</v-icon>
          </div>
        </template>
      </v-text-field> -->
      <span style="margin-right: auto; margin-left: auto">{{
        listPageType
      }}</span>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    // drawer: false,
    // search: "",
    // dialog: false,
  }),

  computed: {
    ...mapState(["listPageType"]),
  },
};
</script>

<style scoped>
.overflow {
  overflow: hidden !important;
}
</style>