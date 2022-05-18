<template>
  <div class="mt-15">
    <home-bar />
    <v-row>
      <v-col cols="6" v-for="(item, index) in list" :key="index">
        <v-card
          class="pa-2"
          outlined
          tile
          @click="$store.commit('setListPageType', { title: item.text })"
        >
          <router-link class="mx-1 text-decoration-none d-block" :to="item.to">
            {{ item.text }}
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HomeBar from "../components/HomeBar";
import { mapState } from "vuex";

export default {
  name: "Home",

  components: {
    HomeBar,
  },

  created() {
    if (!localStorage.getItem("verifyData")) {
      this.$router.push("/login");
    }
  },

  data: () => ({
    //
  }),

  computed: {
    ...mapState(["list"]),
  },

  methods: {
    toSearch() {},
  },
};
</script>
