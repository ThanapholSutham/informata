<template>

  <v-main class="align-center info_bg_1">
    
    <v-card
      class="mx-auto rounded-xl login_card pa-10"
      max-width="500"
      width="70%"
    >
      <v-img
        contain
        class="ms-5"
        :lazy-src="require('@/assets/login-form-logo.png')"
        :src="require('@/assets/login-form-logo.png')"
        max-height="80"
      ></v-img>

      <v-tabs class="mt-15" color="primary_info" fixed-tabs>
        <v-tab href="#mobile-tabs-5-1" class="font_web1"> ผู้วิจัย </v-tab>
        <v-tab href="#mobile-tabs-5-2" class="font_web1"> ผู้เข้าร่วม </v-tab>
      </v-tabs>
      <div class="mt-8">
        <v-text-field
          class="font_web2 font-weight-light"
          color="primary_info"
          dense
          label="อีเมล"
          outlined
          :rules="emailRules"
          required
        ></v-text-field>
      </div>
      <div class="">
        <v-text-field
          :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
          class="font_web2 font-weight-light input-group--focused"
          color="primary_info"
          dense
          label="รหัสผ่าน"
          outlined
          required
          :type="show3 ? 'text' : 'password'"
          @click:append="show3 = !show3"
        ></v-text-field>
      </div>
      <div>
        <v-btn
          block
          depressed
          color="primary_info"
          class="white--text text-lowercase font_web1"
          >Login</v-btn
        >
      </div>
      <div class="d-flex font_web1 align-center mt-5 justify-space-between">
        <div class="d-flex align-center">
          <div class="mr-3 grey_info_2--text pa-0">ยังไม่มีบัญชีสมาชิก?</div>
          <v-btn to="/register" text class="primary_info--text pa-0"
            >สร้างบัญชีใหม่</v-btn
          >
        </div>
        <v-btn to="/forgot-password" text class="primary_info--text pa-0"
          >เปลี่ยนรหัสผ่าน</v-btn
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
.v-text-field--outlined fieldset{
border-color:  #CBCED5  !important;
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
