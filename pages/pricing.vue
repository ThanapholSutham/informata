<template>
  <v-main>
    <no-ssr>
      <Mainmenu />
      <v-container class="mt-5 px-16 mb-15 pb-15">
        <h3
          class="text-center text-h4 font-weight-medium grey--text text--darken-2"
        >
          PRICING
        </h3>
        <v-row class="mt-5">
          <v-col cols="6">
            <v-card outlined height="100%" class="rounded-lg pa-8">
              <p class="caption grey--text text--darken-2">SURVEY COST</p>

              <div class="row">
                <div class="col-6">
                  <v-card outlined>
                    <v-row class="d-flex align-center pa-2">
                      <v-img
                        contain
                        class="ms-5"
                        :lazy-src="require('@/assets/icon/user-1.png')"
                        :src="require('@/assets/icon/user-1.png')"
                        max-height="35"
                        max-width="35"
                      ></v-img>

                      <v-col cols="10">
                        <div class="caption grey--text text--darken-2">
                          PARTICIPANTS
                        </div>
                        <div class="text-h6">100</div>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
                <div class="col-6">
                  <v-card outlined>
                    <v-row class="d-flex align-center pa-2">
                      <v-img
                        contain
                        class="ms-5"
                        :lazy-src="require('@/assets/icon/clock-1.png')"
                        :src="require('@/assets/icon/clock-1.png')"
                        max-height="35"
                        max-width="35"
                      ></v-img>

                      <v-col cols="10">
                        <div class="caption grey--text text--darken-2">
                          SURVEY DURATION
                        </div>
                        <div class="text-h6">10 minutes</div>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
              </div>
              <v-banner></v-banner>
              <div class="text-h6 mt-5">Cost</div>
              <v-row class="mt-8">
                <v-col
                  cols="6"
                  class="d-flex flex-column justify-center align-center"
                >
                  <div class="d-flex primary_info--text">
                    <span class="text-h6 font-weight-medium mr-1">฿</span>
                    <h3 class="text-h3 font-weight-bold">45.00</h3>
                  </div>
                  <div class="captin text-center grey--text">
                    per participant <br />(before VAT)
                  </div>
                </v-col>
                <v-col cols="6">
                  <v-col
                    cols="6"
                    class="d-flex flex-column justify-center align-center"
                  >
                    <div class="d-flex primary_info--text">
                      <span class="text-h6 font-weight-medium mr-1">฿</span>
                      <h3 class="text-h3 font-weight-bold">4,500.00</h3>
                    </div>
                    <div class="captin text-center grey--text">
                      total budget <br />(before VAT)
                    </div>
                  </v-col>
                </v-col>
              </v-row>
              <v-banner></v-banner>
              <div class="text-h5 mt-6 font-weight-medium">
                PROJECT COST SUMMARY
              </div>
              <p class="text-body-1 font-weight-medium mt-5">Payment summary</p>
              <v-row class="">
                <v-col cols="12" class="d-flex justify-space-between py-0">
                  <div>Total budget</div>
                  <div>4,500.00 THB</div>
                </v-col>
                <v-col cols="12" class="d-flex justify-space-between py-0">
                  <div>VAT (7%)</div>
                  <div>315.00 THB</div>
                </v-col>
              </v-row>
              <v-banner></v-banner>
              <v-row class="mt-5">
                <v-col cols="12" class="d-flex justify-space-between py-0">
                  <div>VAT (7%)</div>
                  <div>315.00 THB</div>
                </v-col>
              </v-row>
              <v-banner></v-banner>
              <p class="caption grey--text mt-5 mb-0">
                Your project will have 100 paticipants <br />Total expense
                (include VAT) is 48.15 THB per participant
              </p>
            </v-card>
          </v-col>
          <v-col cols="6 ps-14">
            <v-card outlined class="rounded-lg px-10 pt-2 pb-8" height="100%">
              <div class="text-h5 mt-5 font-weight-medium font_web1">
                <p class="font_web1 pa-0">อัตราค่าบริการผู้วิจัย</p>
                <p class="font_web2 font-weight-light">
                  เราถือว่าเวลาของผู้ตอบแบบสอบถามนั้นเป็นสิ่งที่มีค่าอย่างมากและผู้ตอบแบบสอบถามทุกคนควรได้รับค่าตอบแทนที่เหมาะสมกับความทุ่มเทใน
                  การทำงาน
                </p>
              </div>
              <v-row class="mt-3">
                <div class="col-12 rounded-lg primary_info mt-4">
                  <v-card-text
                    class="font_web2 text-center white--text font-weight-light"
                  >
                    สำหรับแบบสอบถามหรือโพล ที่ใช้เวลาในการตอบน้อยกว่า 10 นาที 45
                    บาท/ผู้ตอบแบบสำรวจ
                  </v-card-text>
                </div>
                <div class="col-12 rounded-lg primary_info mt-4">
                  <v-card-text
                    class="font_web2 text-center white--text font-weight-light"
                  >
                    สำหรับแบบสอบถามหรือโพล ที่ใช้เวลาในการตอบ 10-20 นาที 45
                    บาท/ผู้ตอบแบบสำรวจ + 4.5 บาท/นาที/ผู้ตอบแบบสอบถาม
                    (สูงสุดไม่เกิน 45+45 บาท/ผู้ตอบแบบสอบถาม)
                  </v-card-text>
                </div>
                <div class="col-12 rounded-lg primary_info mt-4">
                  <v-card-text
                    class="font_web2 text-center white--text font-weight-light"
                  >
                    สำหรับแบบสำรวจหรือโพล ที่ใช้เวลาในการตอบมากกว่า 20 นาที 90
                    บาท/ผู้ตอบแบบสำรวจ + 6 บาท/นาที/ผู้ตอบแบบสอบถาม
                  </v-card-text>
                </div>
                <p class="mt-5 font_web2 font-weight-light grey--text">
                  * ค่าบริการและค่าบำรุงรักษาทั้งหมดรวมอยู่ในราคานี้แล้ว <br />
                  *
                  เราไม่แนะนำการสร้างและใช้งานแบบสำรวจหรือโพลที่มีความยาวมากกว่า
                  30 นาที<br />
                  *
                  ทีมงานของเราจะทำการตรวจสอบและยืนยันระยะเวลาที่ผู้เข้าร่วมสำรวจแต่ละรายต้องใช้สำหรับการตอบแบบสำรวจหรือโพล
                  ภายในระยะเวลา 12 ชั่วโมง
                </p>
              </v-row>
              <v-banner></v-banner>
              <div class="mt-8">
                <h4 class="font_web1">ค่าดำเนินการและบำรุงรักษาระบบ</h4>
                <p class="font_web2 font-weight-light">
                  เราแบ่งเงินจากค่าบริการสำรวจไว้หนึ่งในสาม
                  เพื่อนำมาใช้ในการดำเนินการปรับปรุง การบริการ และบำรุงรักษาระบบ
                  INFORMATA โดยเงินจากค่าบริการสำรวจ อีกสองในสาม
                  จะจัดสรรเป็นค่าตอบแทนสำหรับผู้เข้าร่วมตอบคำถามสำรวจของคุณ
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <Footer />
    </no-ssr>
  </v-main>
</template>
<style lang="css">
@import "@/assets/css/home.css";
</style>
<script>
import Footer from "../components/Footer.vue";
export default {
  name: "PricingPage"
};
</script>
