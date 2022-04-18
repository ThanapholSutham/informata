<template>
  <div>
    <div class="haeder py-4">
      <v-container class="py-0 fill-height">
        <v-row class="d-flex justify-space-between">
          <v-col>
            <v-img
              :lazy-src="require('@/assets/icon/main-logo.png')"
              max-width="230"
              :src="require('@/assets/icon/main-logo.png')"
            ></v-img>
          </v-col>
          <v-col>
            <v-text-field
              class="search-cutton ma-0"
              outlined
              label="Start find something..."
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
          <v-col class="d-flex">
            <v-badge
              offset-x="20"
              offset-y="15"
              color="error"
              avatar
              bordered
              overlap
              class="noti-cuttom"
            >
              <v-btn elevation="0" fab>
                <v-img
                  class=""
                  :lazy-src="require('@/assets/icon/icon-1.png')"
                  max-width="26"
                  max-height="36"
                  :src="require('@/assets/icon/icon-1.png')"
                ></v-img
              ></v-btn>
            </v-badge>

            <v-btn outlined x-large class="wallet con pa-3 ml-3 mr-3">
              <v-btn class="btn-cuttom a" elevation="0" fab>
                <v-img
                  class=""
                  contain
                  :lazy-src="require('@/assets/icon/icon-2.png')"
                  max-width="26"
                  max-height="36"
                  :src="require('@/assets/icon/icon-2.png')"
                ></v-img>
              </v-btn>
              <div class="wallet coin ml-2">590.00</div>
            </v-btn>
            <v-menu
              class="ml-3"
              v-model="menu"
              :close-on-content-click="false"
              :nudge-width="200"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="btn-profile"
                  x-large
                  depressed
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-btn class="profile pa-3" elevation="0" fab>
                    <v-img
                      class=""
                      contain
                      :lazy-src="require('@/assets/icon/icon-10.png')"
                      max-width="26"
                      max-height="36"
                      :src="require('@/assets/icon/icon-10.png')"
                    ></v-img>
                  </v-btn>
                  <div class="profileShow float-left ml-3">
                    <p class="fullname ma-0 text-capitalize">William Hasson</p>
                    <p class="status ma-0 text-capitalize">Student</p>
                  </div>
                  <v-img
                    class="ml-3"
                    contain
                    :lazy-src="require('@/assets/icon/icon-11.png')"
                    max-width="11"
                    max-height="11"
                    :src="require('@/assets/icon/icon-11.png')"
                  ></v-img>
                </v-btn>
              </template>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-navigation-drawer v-model="drawer" app class="">
      <v-list class="mt-15 pa-7">
        <div class="nav-fuc active mt-15 pa-4 d-flex align-center">
          <div class="ic-con d-flex align-center">
            <v-img
              class="ml-3"
              contain
              :lazy-src="require('@/assets/icon/icon-3.png')"
              max-width="21"
              max-height="21"
              :src="require('@/assets/icon/icon-3.png')"
            ></v-img>
          </div>
          <div class="ml-3">
            <div class="nav-text-1 pa-0">My folders</div>
            <div class="nav-text-2 pa-0">
              View All <i class="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>

        <div class="nav-fuc mt-5 pa-4 d-flex align-center">
          <div class="ic-con d-flex align-center">
            <v-img
              class="ml-3"
              contain
              :lazy-src="require('@/assets/icon/icon-4.png')"
              max-width="21"
              max-height="21"
              :src="require('@/assets/icon/icon-4.png')"
            ></v-img>
          </div>
          <div class="ml-3">
            <div class="nav-text-1 pa-0">Shared With Me</div>
            <div class="nav-text-2 pa-0">
              View All <i class="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      </v-list>
      <div class="nav-line mt-15"></div>
      <div class="pa-7">
        <div class="nav-wallet pa-4">
          <div class="nav-text-3">Balance</div>
          <div class="nav-text-4">590.00</div>
          <div class="nav-wallet-action pa-3 d-flex align-center">
            <div class="icon d-flex align-center">
              <v-img
                class="ml-3"
                contain
                :lazy-src="require('@/assets/icon/icon-2.png')"
                max-width="21"
                max-height="21"
                :src="require('@/assets/icon/icon-2.png')"
              ></v-img>
            </div>
            <div class="ml-3 nav-text-5">Top Up</div>
          </div>
        </div>
      </div>
       <div class="nav-line mt-15"></div>
       <div class="pa-7">
            <div class="nav-text-6">© Informata 2020</div>
            <div class="nav-text-7 mt-2">Informatar is Online Surveys Suite account with the appropriate permission is required.</div>
       </div>
    </v-navigation-drawer>
  </div>
</template>
<style>
.nav-text-7 {
font-weight: 400;
font-size: 11px;
color: #121F3E;
opacity: 0.4;
}
.nav-text-6 {
 font-weight: 700;
font-size: 12px;
color: #121F3E;
}
.nav-text-5 {
  font-weight: 800;
  font-size: 16px;
  color: #ffffff;
}
.nav-text-4 {
  font-weight: 600;
  font-size: 24px;
  color: #22a85b;
}
.nav-text-3 {
  font-weight: 800;
  font-size: 12px;
  color: #464646;
}
.nav-wallet-action {
  background: #22a85b;
  border-radius: 14px;
}
.nav-wallet-action .icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.99);
  box-shadow: 1px 3px 11px 3px rgba(0, 0, 0, 0.1);
}
.nav-wallet {
  background: rgba(34, 168, 91, 0.15);
  border-radius: 14px;
}
.nav-line {
  height: 0px;
  border: 1px solid #efefef;
}
.nav-fuc.active {
  background: #3275fc;
}
.nav-fuc.active .ic-con {
  background: #ffffff;
}

.nav-fuc.active .nav-text-1,
.nav-fuc.active .nav-text-2 {
  color: #ffffff;
}
.nav-text-1 {
  font-weight: 700;
  font-size: 12px;
  color: #121f3e;
}

.nav-text-2 {
  font-weight: 400;
  font-size: 12px;
  color: #5b5b6b;
}
.nav-fuc {
  cursor: pointer;
  background: #f9f9f9;
  border-radius: 16px;
}
.ic-con {
  background: #efefef;
  border-radius: 12px;
  width: 42.21px;
  height: 42px;
}
.main {
  background-color: #f4f4f4 !important;
}
.haeder {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 30;
  background-color: #ffff;
  border-bottom: 1px solid #f8f8f8;
}
.profileShow {
  text-align: left;
}
.profileShow .fullname {
  color: #5b5b6b;
  font-weight: 700;
  font-size: 14px;
}

.profileShow .status {
  font-weight: 700;
  font-size: 12px;
  color: #3275fc;
}
.search-cutton fieldset {
  border: 1px solid #f7f8fa !important;
  border-radius: 12px;
}
.search-cutton label {
  color: #b7b9b8 !important;
}
.search-cutton i {
  color: #b7b9b8 !important;
}
.search-cutton .v-text-field__details {
  display: none;
}
.profile,
.btn-cuttom,
.noti-cuttom button {
  height: 45px !important;
  width: 45px !important;
}
.profile {
  background-color: #3275fc !important;
}
.btn-cuttom.a {
  background-color: rgba(34, 168, 91, 0.2) !important;
}
.wallet.con {
  border: 1px solid rgba(34, 168, 91, 0.2);
  border-radius: 12px;
}
.btn-profile {
  border-radius: 12px;
}
.wallet.coin {
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #22a85b;
}
body {
  background-color: #e5e5e5;
}
</style>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    cards: ["Today", "Yesterday"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
  }),
};
</script>
