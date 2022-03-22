<template>
  <v-main class="align-center info_bg_1">
    <v-card
      class="mx-auto info_bg_1 pa-10"
      max-width="750"
      width="70%"
      elevation="0"
    >
      <v-img
        contain
        class="ms-5 mb-13"
        :lazy-src="require('@/assets/register-form-logo.png')"
        :src="require('@/assets/register-form-logo.png')"
        max-height="50"
      ></v-img>

      <v-card class="rounded-xl mt-2 pa-10">
        <div class="">
          <v-card-title class="d-flex justify-center">
            <p class="font_web1 text-center ma-0">
              สิ่งที่คุณต้องการเข้าร่วมในอินฟอร์เมต้า?
            </p>
            <p
              class="font_web2 font-weight-light text-center grey_info_2--text mt-3"
            >
              สร้างแบบสำรวจ ค้นหาผู้เข้าร่วมที่ใช่โดยใช้ตัวคัดกรองของเรา <br />
              และได้รับคำตอบที่มีคุณภาพกลับมาอย่างรวดเร็ว
            </p>
          </v-card-title>
        </div>
        <v-row>
          <v-col class="py-0">
            <p class="font_web1 mb-2">ชื่อ</p>
            <v-text-field
              class="font_web2 font-weight-light"
              color="primary_info"
              dense
              outlined
            ></v-text-field>
          </v-col>
           <v-col class="py-0">
            <p class="font_web1 mb-2">ชื่อกลาง (ถ้ามี)</p>
            <v-text-field
              class="font_web2 font-weight-light"
              color="primary_info"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col class="py-0">
            <p class="font_web1 mb-2">นามสกุล</p>
            <v-text-field
              class="font_web2 font-weight-light"
              color="primary_info"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0">
            <div class="d-flex align-center">
              <p class="font_web1 mb-2 mr-3">วันเกิด</p>
              <span class="font_web2 mb-2 grey_info_2--text">(วว-ดด-ปปปป)</span>
            </div>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  readonly
                  v-on="on"
                  dense
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                :active-picker.sync="activePicker"
                :max="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
                "
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" class="py-0">
            <div class="d-flex align-center">
              <p class="font_web1 mb-2 mr-3">ภาษา</p>
            </div>
            <v-select
              class="font_web2 font-weight-light"
              outlined
              menu-props="auto"
              hide-details
              dense
            ></v-select>
          </v-col>
          <v-col cols="12" class="py-0 mt-6">
            <div class="d-flex align-center">
              <p class="font_web1 mb-2 mr-3">อีเมล</p>
            </div>
            <v-text-field
              class="font_web2 font-weight-light"
              color="primary_info"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0">
            <div class="d-flex align-center">
              <p class="font_web1 mb-2 mr-3">รหัสผ่าน</p>
            </div>
            <v-text-field
              class="font_web2 font-weight-light"
              color="primary_info"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" class="py-0">
            <div class="d-flex align-center">
              <p class="font_web1 mb-2 mr-3">ยืนยันรหัสผ่าน</p>
            </div>
            <v-text-field
              class="font_web2 font-weight-light"
              color="primary_info"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" class="py-0 d-flex align-center">
            <v-checkbox class="font_web2 py-0 my-0 grey_info_2--text">
            </v-checkbox>
            <div class="d-flex align-center font_web2 grey_info_2--text">
              <p>ฉันอายุมากกว่า 18 ปี</p>
            </div>
          </v-col>
          <v-col cols="12" class="py-0 d-flex align-center">
            <v-checkbox class="font_web2 my-0 grey_info_2--text pa-0">
            </v-checkbox>
            <div class="d-flex align-center font_web2 grey_info_2--text">
              <p>
                อ่านและยอมรับข้อกำหนดและ
                <NuxtLink to="" class="primary_info--text pa-0 nr-3"
                  >เงื่อนไข
                </NuxtLink>
                &nbsp; และ<NuxtLink to="" class="primary_info--text pa-0 nr-3"
                  >นโยบายความเป็นส่วนตัว </NuxtLink
                >แล้ว
              </p>
            </div>
          </v-col>
          <v-col>
            <v-btn
              block
              depressed
              color="primary_info"
              class="white--text text-lowercase font_web1"
              >Sign up</v-btn
            >
          </v-col>
        </v-row>
        <div class="d-flex font_web1 justify-center align-center mt-8">
          <div class="mr-3 grey_info_2--text pa-0">มีบัญชีสมาชิกแล้ว?</div>
          <v-btn to="/login" text class="primary_info--text pa-0"
            >เข้าสู่ระบบ</v-btn
          >
        </div>
        <div class="d-flex font_web1 justify-center align-center">
          <div class="mr-3 grey_info_2--text pa-0">
            ไม่ต้องการเป็นผู้วิจัย??
          </div>
          <v-btn to="/register" text class="primary_info--text pa-0"
            >สมัครบัญชีเป็นผู้วิจัย</v-btn
          >
        </div>
      </v-card>
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
    activePicker: null,
    date: null,
    menu: false,
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
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}-${day}-${year}`;
    },
    save(date) {
      
      this.$refs.menu.save(date);

    },
  },
};
</script>
