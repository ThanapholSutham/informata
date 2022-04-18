<template>
  <v-main class="align-center info_bg_1">
    <v-card
      class="mx-auto rounded-xl login_card pa-10"
      max-width="500"
      width="70%"
    >
      <v-img
        contain
        class="mb-7"
        :lazy-src="require('@/assets/login-form-logo.png')"
        :src="require('@/assets/login-form-logo.png')"
        max-height="80"
      ></v-img>
      <p class="font_web1 mb-2 text-center">RESET PASSWORD</p>

      <div class="mt-8">
        <p class="font_web1 mb-2">Your registeration email:</p>
        <v-text-field
          class="font_web2 font-weight-light"
          color="primary_info"
          dense
          label="Email"
          outlined
          :rules="emailRules"
          required
        ></v-text-field>
      </div>

      <div>
        <v-btn
          to="/new-password"
          block
          depressed
          color="primary_info"
          class="white--text text-lowercase font_web1"
          >SEND</v-btn
        >
      </div>
    </v-card>
  </v-main>
</template>
<style>
@import "@/assets/css/home.css";
.login_card {
  box-shadow: 6px 15px 48px rgba(0, 31, 112, 0.04) !important;
}
.v-text-field--outlined fieldset {
  border-color: #cbced5 !important;
  border-radius: 10px !important;
}
</style>
<script>
export default {
  name: "LoginPage",
  data: () => ({
    show3: false,
    tab: null,
    valid: false,
    firstname: "",
    lastname: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>
