<template>
  <div class="mt-15">
    <app-bar />
    <v-card
      outlined
      tile
      class="d-flex"
      v-for="(item, index) in favList"
      :key="index"
      @click="
        dialog = true;
        setDialog(item);
      "
    >
      <v-card-text>
        {{ item.name }}
      </v-card-text>
    </v-card>
    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ dialogData.name }}</span>
            </v-card-title>
            <v-card-text>
              {{ dialogData.date }}
              <p>{{ dialogData.name }}</p>
              <p>{{ dialogData.detail }}</p>
              {{ dialogData.phone }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="info darken-1" text @click="dialog = false">
                關閉
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>

<script>
import AppBar from "../components/AppBar";
// import { mapState } from "vuex";

export default {
  components: {
    AppBar,
  },

  data: () => ({
    favList: [],
    dialogData: {},
    dialog: false,
  }),

  computed: {
    // ...mapState(["favList"]),
  },

  mounted() {
    this.favList = JSON.parse(localStorage.getItem("favList"));
  },

  methods: {
    setDialog(item) {
      this.dialogData = item;
    },
  },
};
</script>