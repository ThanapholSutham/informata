<template>
  <v-main>
    <Mainmenu />
    <div class="px-10 mb-15">
      <v-row class="d-flex justify-end mt-15">
        <v-col cols="3" class="">
          <v-text-field
            dense
            outlined
            label="Start find something..."
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-card
        width="auto"
        height="100px"
        color="#48B775"
        elevation="0"
        class="pa-0 infor tab_cu rounded-xl d-flex align-center"
      >
        <div class="ima_cu 1">
          <img
            class="img1"
            :src="require('@/assets/blog-ob-1.png')"
            alt=""
            width=""
          />
        </div>

        <div class="ima_cu2">
          <img
            class="img2"
            :src="require('@/assets/blog-ob-2.png')"
            alt=""
            width=""
          />
        </div>
        <v-card-text class="text-center text-uppercase white--text text-h5">
          Read the latest NEWS from Informata
        </v-card-text>
      </v-card>
      <div class="d-flex justify-space-between mt-8 mb-3">
        <div>
          <v-card
            elevation="0"
            color="yello_info_2"
            class="font-italic white--text pa-1 px-6"
            >NEW</v-card
          >
        </div>
        <div>
          <v-btn text class="text-capitalize primary_info--text">
            See more></v-btn
          >
        </div>
      </div>

      <v-row class="mb-5">
        <v-col cols="3">
          <v-card elevation="0" class="ma-0">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              height="270"
              src="https://via.placeholder.com/270x200.png"
            ></v-img>
            <v-card-text class="pa-0 mt-8">
              <div class="text_cutton_1--text font_web2">
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
                <v-btn to="/blog/slug-url-blog" text class="text-capitalize primary_info--text pa-0">
                  See more></v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card elevation="0" class="ma-0">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              height="270"
              src="https://via.placeholder.com/270x200.png"
            ></v-img>
            <v-card-text class="pa-0 mt-8">
              <div class="text_cutton_1--text font_web2">
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
                <v-btn to="/blog/slug-url-blog" text class="text-capitalize primary_info--text pa-0">
                  See more></v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card elevation="0" class="ma-0">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              height="270"
              src="https://via.placeholder.com/270x200.png"
            ></v-img>
            <v-card-text class="pa-0 mt-8">
              <div class="text_cutton_1--text font_web2">
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
                <v-btn to="/blog/slug-url-blog" text class="text-capitalize primary_info--text pa-0">
                  See more></v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card elevation="0" class="ma-0">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              height="270"
              src="https://via.placeholder.com/270x200.png"
            ></v-img>
            <v-card-text class="pa-0 mt-8">
              <div class="text_cutton_1--text font_web2">
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
                <v-btn to="/blog/slug-url-blog" text class="text-capitalize primary_info--text pa-0">
                  See more></v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-card
        width="auto"
        height="100px"
        color="#115BA5"
        elevation="0"
        class="pa-0 infor tab_cu rounded-xl d-flex align-center mt-15"
      >
        <div class="ima_cu_3 1">
          <img
            class="img1"
            :src="require('@/assets/blog-ob-3.png')"
            alt=""
            width=""
          />
        </div>

        <div class="ima_cu2">
          <img
            class="img2"
            :src="require('@/assets/blog-ob-4.png')"
            alt=""
            width=""
          />
        </div>
        <v-card-text class="text-center text-uppercase white--text text-h5">
          Read the latest Knowledge from Informata
        </v-card-text>
      </v-card>
      <div class="d-flex justify-space-between mt-8 mb-3">
        <div>
          <v-card
            elevation="0"
            color="green_info_1"
            class="font-italic white--text pa-1 px-6"
            >KNOWLEDGE</v-card
          >
        </div>
        <div>
          <v-btn text class="text-capitalize primary_info--text">
            See more></v-btn
          >
        </div>
      </div>
      <v-row class="mb-5">
        <v-col cols="3">
          <v-card elevation="0" class="ma-0">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              height="270"
              src="https://via.placeholder.com/270x200.png"
            ></v-img>
            <v-card-text class="pa-0 mt-8">
              <div class="text_cutton_1--text font_web2">
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
                <v-btn to="/blog/slug-url-blog" text class="text-capitalize primary_info--text pa-0">
                  See more></v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card elevation="0" class="ma-0">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              height="270"
              src="https://via.placeholder.com/270x200.png"
            ></v-img>
            <v-card-text class="pa-0 mt-8">
              <div class="text_cutton_1--text font_web2">
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
                <v-btn to="/blog/slug-url-blog" text class="text-capitalize primary_info--text pa-0">
                  See more></v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card elevation="0" class="ma-0">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              height="270"
              src="https://via.placeholder.com/270x200.png"
            ></v-img>
            <v-card-text class="pa-0 mt-8">
              <div class="text_cutton_1--text font_web2">
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
                <v-btn to="/blog/slug-url-blog" text class="text-capitalize primary_info--text pa-0">
                  See more></v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card elevation="0" class="ma-0">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              height="270"
              src="https://via.placeholder.com/270x200.png"
            ></v-img>
            <v-card-text class="pa-0 mt-8">
              <div class="text_cutton_1--text font_web2">
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
                <v-btn to="/blog/slug-url-blog" text class="text-capitalize primary_info--text pa-0">
                  See more></v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <Footer />
  </v-main>
</template>
<style lang="css">
@import "@/assets/css/home.css";
.infor.tab_cu {
  position: relative;
}
.infor.tab_cu .ima_cu {
  top: 0px;
  position: absolute;
  left: 0px;
  z-index: 30;
}
.infor.tab_cu .ima_cu2 {
  top: 0px;
  position: absolute;
  right: 0px;
  z-index: 30;
}

.infor .ima_cu_3 {
  position: absolute;
  left: 0px;
  bottom: -7px;
  z-index: 30;
}

.infor.tab_cu .ima_cu .img1 {
  height: 112px;
}
.infor.tab_cu .ima_cu2 .img2 {
  height: 100px;
}
.infor.tab_cu .ima_cu_3 img {
  height: 119.5px;
}
</style>
<script>
export default {
  name: "BlogsPage",
};
</script>
