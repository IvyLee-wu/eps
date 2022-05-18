<template>
  <div>
    <v-app-bar elevation="4" color="blue" dark fixed>
      <v-icon @click="drawer = true">menu</v-icon>
      <v-text-field
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
      </v-text-field>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-card outlined class="pa-2 d-flex" style="height: auto">
        <v-icon size="80">account_circle</v-icon>
        <div class="ml-2">
          <div>王小明</div>
          <div>xxxxxxxx</div>
          <v-btn outlined small class="mt-1" @click="dialog = true"
            >顯示員工卡片</v-btn
          >
        </div>
      </v-card>
      <v-list nav dense>
        <!-- <v-subheader>
          <router-link class="mx-1 text-decoration-none" to="/">
            回首頁
          </router-link>
        </v-subheader> -->
        <v-list-item-group active-class="blue--text text--accent-4">
          <v-list-item v-for="(item, i) in list" :key="i">
            <v-list-item-title
              @click="$store.commit('setListPageType', { title: item.text })"
            >
              <router-link
                class="mx-1 text-decoration-none"
                :to="item.to"
                style="display: block"
              >
                {{ item.text }}
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-dialog v-model="dialog" width="80%" content-class="overflow">
      <v-card class="pt-6">
        <v-card-text class="d-flex">
          <v-icon size="110" style="margin-left: -10px">person</v-icon>
          <div>
            <p>xxxxxxxx</p>
            <p>王小明</p>
            <p>oo課</p>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: false,
    search: "",
    dialog: false,
  }),

  computed: {
    ...mapState(["list"]),
  },
};
</script>

<style scoped>
.overflow {
  overflow: hidden !important;
}
</style>