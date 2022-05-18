<template>
  <div class="login">
    <v-card width="80%" class="pa-4">
      <template>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="form.mobile"
            label="Mobile"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.birth"
            label="Birth"
            required
          ></v-text-field>

          <div class="d-flex justify-center">
            <v-btn outlined @click="verify">verify</v-btn>
          </div>
        </v-form>
      </template>
    </v-card>
    <v-dialog v-model="dialog" width="80%">
      <v-card>
        <v-card-title class="justify-center error--text">
          驗證錯誤！
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn outlined small @click="dialog = false"> 關閉 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      mobile: "",
      birth: "",
    },
    dialog: false,
  }),

  methods: {
    verify() {
      if (this.form.mobile == 1111 && this.form.birth == 1111) {
        localStorage.setItem("verifyData", JSON.stringify(this.form));
        this.$router.push("/");
      } else {
        this.dialog = true;
      }
    },
  },
};
</script>

<style scoped>
.login {
  display: grid;
  place-items: center;
  height: 100vh;
}
</style>