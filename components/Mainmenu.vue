<template>
  <v-toolbar class="pa-10" elevation="0" dense fixed>
    <v-toolbar-title>
      <NuxtLink to="/">
        <v-img
          class="mx-2"
          contain
          :lazy-src="require('@/assets/logo.png')"
          :src="require('@/assets/logo.png')"
          max-height="70"
          max-width="70"
        ></v-img>
      </NuxtLink>
    </v-toolbar-title>
    <v-toolbar-items>
      <div class="ml-5 d-flex">
        <div v-for="link in links" :key="link.menu_name">
          <v-btn :to="`${link.url}`" color="primary_info" text>
            {{ link.menu_name }}
          </v-btn>
        </div>
      </div>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <div>
        <!-- <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          >{{ locale.name }}</NuxtLink
        > -->

      

        <v-btn :to="`/login`" outlined color="#939393" class="mr-3">
          LOG IN   
        </v-btn>
        <v-btn to="register" depressed color="primary_info" class="white--text"
          >SIGN UP</v-btn
        >
      </div>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
 
  data: () => ({
   
    links: [
      {
        menu_name: "HOW WE WORK",
        url: "#",
      },
      {
        menu_name: "PRICNG",
        url: "/pricing",
      },
      {
        menu_name: "ABOUT US",
        url: "#",
      },
      {
        menu_name: "BLOG",
        url: "/blog",
      },
      {
        menu_name: "STAT101",
        url: "#",
      },
      {
        menu_name: "FAQ",
        url: "#",
      },
    ],
  }),
  computed: {
    text() {
      return this.$t("page_1");
    },
    header() {
      return this.$t("header");
    },

    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
    path_local() {
      let local_data =  this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
      console.log(local_data)
    },
  },
};
</script>
