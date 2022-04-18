

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"messages":{"th":{"header":{"app":"Nuxt.js หลายภาษาด้วย i18n","link":{"page_1":"หน้าที่ 1","page_2":"หน้าที่ 2","page_3":"หน้าที่ 3"},"lang":"เปลี่ยนภาษา"},"footer":{"app":"ส่วนท้าย"},"index":{"title":"Nuxt.js หลายภาษาด้วย i18n","body":"ส่วนหน้าแรก มาทำ i18n หลายภาษากันเถอะ","footer":"ส่วนจบหน้าแรก"},"page_1":{"title":"Nuxt.js หลายภาษาด้วย i18n","body":"ส่วนหน้าหนึ่ง มาทำ i18n หลายภาษากันเถอะ !!!","footer":"ส่วนจบหน้าหนึ่ง"},"page_2":{"title":"Nuxt.js หลายภาษาด้วย i18n","body":"ส่วนหน้าสอง มาทำ i18n หลายภาษากันเถอะ !!!!!","footer":"ส่วนจบหน้าสอง"},"page_3":{"title":"Nuxt.js หลายภาษาด้วย i18n","body":"ส่วนหน้าสาม มาทำ i18n หลายภาษากันเถอะ !!!!!!!","footer":"ส่วนจบหน้าสาม"}},"en":{"header":{"app":"Nuxt.js multiple language with i18n","link":{"page_1":"page 1","page_2":"page 2","page_3":"page 3"},"lang":"language"},"footer":{"app":"footer"},"index":{"title":"Nuxt.js multiple language with i18n","body":"page index i18n multiple language","footer":"end page index"},"page_1":{"title":"Nuxt.js multiple language with i18n","body":"page 1 i18n multiple language !!!","footer":"end page one"},"page_2":{"title":"Nuxt.js multiple language with i18n","body":"page 2 i18n multiple language !!!!!","footer":"end page two"},"page_3":{"title":"Nuxt.js multiple language with i18n","body":"page 3 i18n multiple language !!!!!!!","footer":"end page three"}}}},
  vueI18nLoader: false,
  locales: [{"code":"en","iso":"en-US","name":"English"},{"code":"th","iso":"th-TH","name":"ไทย"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: false,
  pages: {"page1":{"th":"/หน้าที่หนึ่ง","en":"/pageone"},"path_lang":{"th":"/th","en":"/"},"page2":{"th":"/หน้าที่สอง","en":"/pagetwo"},"page3":{"th":"/หน้าที่สาม","en":"/pagetree"}},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  encodePaths: false,
  normalizedLocales: [{"code":"en","iso":"en-US","name":"English"},{"code":"th","iso":"th-TH","name":"ไทย"}],
  localeCodes: ["en","th"],
}

export const localeMessages = {}
