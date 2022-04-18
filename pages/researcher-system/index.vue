<template>
  <div>
    <Researchersystem />
    <div class="v-main main">
      <v-container class="py-8 px-6" fluid>
        <v-row class="mt-5">
          <v-col cols="12" class="mt-15">
            <div class="content-con pa-12">
              <v-row>
                <v-col class="content-name">
                  MY FOLDERS <span>(21 folders)</span>
                  <div class="select-cuttom-con">
                    <v-select
                      class="mt-3 select-cuttom"
                      max-width="21px"
                      label="Latest Added"
                      solo
                      dense
                    ></v-select>
                  </div>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="d-flex justify-end">
                  <v-btn depressed x-large class="pa-10 add-folder-con">
                    <div class="add-folder-text mr-3">New Folder</div>
                    <div class="add-folder d-flex align-center">
                      <v-icon large color="white"> mdi-plus </v-icon>
                    </div>
                  </v-btn>
                </v-col>
              </v-row>

              <div class="d-flex flex-wrap">
                <div v-for="index in 20" :key="index" class="folder-con d-flex align-center flex-column pa-3 mb-5">
                  <v-badge
                    class="folder-badge"
                    :content=index
                    offset-x="23"
                    offset-y="47"
                  >
                    <v-img
                      class=""
                      contain
                      :lazy-src="require('@/assets/icon/icon-5.png')"
                      max-width="58"
                      :src="require('@/assets/icon/icon-5.png')"
                    ></v-img>
                  </v-badge>
                  <div class="folder-name mt-2">Project title catergories</div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style>
.folder-name {
  text-align: center;
  max-width: 100px;
  line-height: 120%;
  font-weight: 700;
  font-size: 14px;
  color: #454456;
}
.folder-con {
  width: fit-content;

  border-radius: 18px;
  cursor: pointer;
}
.folder-badge .v-badge__badge.primary {
  background-color: #ffffff00 !important;

}
.folder-con:hover {
  background: rgba(50, 117, 252, 0.1);
}
.add-folder-text {
  font-weight: 800;
  font-size: 14px;
  color: #5b5b6b;
}
.add-folder-con {
  border-radius: 16px !important;
}
.add-folder {
  background: #22a85b;
  box-shadow: 1px 3px 11px 3px rgba(0, 0, 0, 0.1);
  width: 38px;
  height: 38px;
  border-radius: 50%;
}
.select-cuttom-con {
  max-width: 165px !important;
}
.select-cuttom .v-input__control .v-input__slot {
  box-shadow: unset !important;
  background: #f8f8f8 !important;
  border-radius: 4px !important;
}

.select-cuttom .v-select__selections {
  color: #5b5b6b !important;
}
.content-name {
  font-weight: 800;
  font-size: 14px;
  color: #454456;
}
.content-name span {
  font-weight: 600;
  font-size: 12px;
  color: #b7b9b8;
}
.content-con {
  background: #ffffff;
  /* Blue Shadow (48 Blur) */

  box-shadow: 6px 15px 48px rgba(0, 31, 112, 0.04);
  border-radius: 18px;
}
.main {
  min-height: 100vh;
  padding: 0px 0px 0px 256px;
  background-color: #f4f4f4 !important;
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
