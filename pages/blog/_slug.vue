<template>
  <v-main>
    <Mainmenu />
    <v-container class="mt-10 px-10">
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
      <div class="d-flex justify-space-between mb-5 mb-3">
        <div>
          <v-card
            elevation="0"
            color="green_info_1"
            class="font-italic white--text pa-1 px-6"
            >KNOWLEDGE</v-card
          >
        </div>
      </div>
      <h1 class="text-h4 grey_info_3--text">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
      </h1>
      <div class="caption mt-5 grey--text">2 Mar 2022, 20:07</div>
      <div class="mt-15">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          height="100%"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>

        <p class="mt-15">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        <br /><br />

        <span> All the Lorem Ipsum generators on the Internet tend to: </span
        ><br />

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Repeat predefined chunks as necessary, making
          this the first true generator on the Internet. It uses a dictionary of
          over 200 Latin words, combined with a handful of model sentence
          structures, to generate Lorem Ipsum which looks reasonable.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;The generated Lorem Ipsum is therefore always
          free from repetition, injected humour, or non-characteristic words
          etc.
        </p>
        <br />

        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham. Contrary to popular belief: "Neque porro
        quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit..." "There is no one who loves pain itself, who seeks
        after it and wants to have it, simply because it is pain..." Reference:
        1914 translation by H. Rackham Section 1.10.33 of "de Finibus Bonorum et
        Malorum", written by Cicero in 45 BC English versions from the 1914
        translation by H. Rackham
        <div class="d-flex justify-center mt-15 mb-15">
          <div>
            <v-btn depressed class="mx-2" fab dark color="cu_fb_btn">
              <v-icon fab>mdi-facebook </v-icon>
            </v-btn>
            <v-btn depressed class="mx-2" fab dark color="cu_tw_btn">
              <v-icon fab>mdi-twitter </v-icon>
            </v-btn>
            <v-btn depressed class="mx-2" fab dark color="cu_link_btn">
              <v-icon fab>mdi-link-variant </v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <v-banner class="mb-15" ></v-banner>
       <h1 class="text-h4 grey_info_3--text mb-7">
        Previous Knowledge
      </h1>
      <v-row class="mb-5 mb-15">
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
                <v-btn
                
                  text
                  class="text-capitalize primary_info--text pa-0"
                >
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
                <v-btn
                
                  text
                  class="text-capitalize primary_info--text pa-0"
                >
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
                <v-btn
                
                  text
                  class="text-capitalize primary_info--text pa-0"
                >
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
                <v-btn
                
                  text
                  class="text-capitalize primary_info--text pa-0"
                >
                  See more></v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
