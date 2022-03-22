<template>
  <v-main class="align-center info_bg_1">
    <v-card
      class="mx-auto info_bg_1 pa-10"
      max-width="600"
      width="70%"
      elevation="0"
    >
      <v-img
        contain
        class="ms-5"
        :lazy-src="require('@/assets/register-form-logo.png')"
        :src="require('@/assets/register-form-logo.png')"
        max-height="50"
      ></v-img>
      <v-card-title class="d-flex justify-center mt-10">
        <p class="font_web1 text-center ma-0">
          สิ่งที่คุณต้องการเข้าร่วมในอินฟอร์เมต้า?
        </p>
      </v-card-title>
      <v-hover class="mb-6 jc jccard " v-slot="{ hover }">
        <v-card
          to="/register/form"
          :elevation="hover ? 0 : 2"
          :class="{ 'on-hover': hover }"
          class="rounded-xl mt-2 pa-5"
        >
          <div class="d-flex align-center">
            <v-img
              contain
              class="ms-5 mr-9"
              :lazy-src="require('@/assets/checket-ob-1.png')"
              :src="require('@/assets/checket-ob-1.png')"
              max-width="90"
            ></v-img>
            <div>
              <p class="font_web1 ma-0 mb-1">สร้างงานวิจัย</p>
              <p class="font_web2 font-weight-light">
                สร้างแบบสำรวจ ค้นหาผู้เข้าร่วมที่ใช่โดยใช้ตัวคัดกรอง ของเรา
                และได้รับคำตอบที่มีคุณภาพกลับมาอย่างรวดเร็ว
              </p>
            </div>
          </div>
        </v-card>
      </v-hover>

      <v-hover class="jc jccard" v-slot="{ hover }">
        <v-card
          to="/register/form"
          :elevation="hover ? 0 : 2"
          :class="{ 'on-hover': hover }"
          class="rounded-xl mt-2 pa-5"
        >
          <div class="d-flex align-center">
            <v-img
              contain
              class="ms-5 mr-9"
              :lazy-src="require('@/assets/book-1.png')"
              :src="require('@/assets/book-1.png')"
              max-width="90"
            ></v-img>
            <div>
              <p class="font_web1 ma-0 mb-1">ตอบแบบสอบถาม</p>
              <p class="font_web2 font-weight-light">
                เริ่มต้นกับเราอย่างง่าย เพียงลงทะเบียน ตอบคำถาม คัดกรอง
                เข้าร่วมการสำรวจที่น่าสนใจ และรับค่าตอบแทน
              </p>
            </div>
          </div>
        </v-card>
      </v-hover>
       <div class="d-flex font_web1 justify-center align-center mt-12">
         <div  class="mr-3 grey_info_2--text pa-0">มีบัญชีสมาชิกแล้ว?</div> <v-btn to="/login" text class="primary_info--text pa-0">เข้าสู่ระบบ</v-btn>
       </div>
    </v-card>
  </v-main>
</template>
<style>
@import "@/assets/css/home.css";
.login_card {
  box-shadow: 6px 15px 48px rgba(0, 31, 112, 0.04) !important;
}

.jc.jccard {
  border: 1.5px solid #ffffff !important;
  transition: 0.3s;
}

.jc.jccard p {
  transition: 0.3s;
}
.jc.jccard:hover {
  border: 1.5px solid #3275fc !important;
}
.on-hover .font_web1 {
  color: #3275fc;
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
