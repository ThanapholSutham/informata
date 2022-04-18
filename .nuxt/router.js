import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _91d3f6fa = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _5ac6e9d0 = () => interopDefault(import('..\\pages\\forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _1869846d = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _c19e3788 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _009cafa5 = () => interopDefault(import('..\\pages\\new-password.vue' /* webpackChunkName: "pages/new-password" */))
const _3805494e = () => interopDefault(import('..\\pages\\pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _10969562 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _f26fa88a = () => interopDefault(import('..\\pages\\researcher-system\\index.vue' /* webpackChunkName: "pages/researcher-system/index" */))
const _54ed7db6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7804c920 = () => interopDefault(import('..\\pages\\blog\\detail.vue' /* webpackChunkName: "pages/blog/detail" */))
const _7929e938 = () => interopDefault(import('..\\pages\\register\\form.vue' /* webpackChunkName: "pages/register/form" */))
const _2e706c42 = () => interopDefault(import('..\\pages\\register\\participant\\index.vue' /* webpackChunkName: "pages/register/participant/index" */))
const _0432d347 = () => interopDefault(import('..\\pages\\register\\participant\\form.vue' /* webpackChunkName: "pages/register/participant/form" */))
const _9541398a = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _91d3f6fa,
    name: "blog___en"
  }, {
    path: "/forgot-password",
    component: _5ac6e9d0,
    name: "forgot-password___en"
  }, {
    path: "/inspire",
    component: _1869846d,
    name: "inspire___en"
  }, {
    path: "/login",
    component: _c19e3788,
    name: "login___en"
  }, {
    path: "/new-password",
    component: _009cafa5,
    name: "new-password___en"
  }, {
    path: "/pricing",
    component: _3805494e,
    name: "pricing___en"
  }, {
    path: "/register",
    component: _10969562,
    name: "register___en"
  }, {
    path: "/researcher-system",
    component: _f26fa88a,
    name: "researcher-system___en"
  }, {
    path: "/th",
    component: _54ed7db6,
    name: "index___th"
  }, {
    path: "/blog/detail",
    component: _7804c920,
    name: "blog-detail___en"
  }, {
    path: "/register/form",
    component: _7929e938,
    name: "register-form___en"
  }, {
    path: "/register/participant",
    component: _2e706c42,
    name: "register-participant___en"
  }, {
    path: "/th/blog",
    component: _91d3f6fa,
    name: "blog___th"
  }, {
    path: "/th/forgot-password",
    component: _5ac6e9d0,
    name: "forgot-password___th"
  }, {
    path: "/th/inspire",
    component: _1869846d,
    name: "inspire___th"
  }, {
    path: "/th/login",
    component: _c19e3788,
    name: "login___th"
  }, {
    path: "/th/new-password",
    component: _009cafa5,
    name: "new-password___th"
  }, {
    path: "/th/pricing",
    component: _3805494e,
    name: "pricing___th"
  }, {
    path: "/th/register",
    component: _10969562,
    name: "register___th"
  }, {
    path: "/th/researcher-system",
    component: _f26fa88a,
    name: "researcher-system___th"
  }, {
    path: "/register/participant/form",
    component: _0432d347,
    name: "register-participant-form___en"
  }, {
    path: "/th/blog/detail",
    component: _7804c920,
    name: "blog-detail___th"
  }, {
    path: "/th/register/form",
    component: _7929e938,
    name: "register-form___th"
  }, {
    path: "/th/register/participant",
    component: _2e706c42,
    name: "register-participant___th"
  }, {
    path: "/th/register/participant/form",
    component: _0432d347,
    name: "register-participant-form___th"
  }, {
    path: "/th/blog/:slug",
    component: _9541398a,
    name: "blog-slug___th"
  }, {
    path: "/blog/:slug",
    component: _9541398a,
    name: "blog-slug___en"
  }, {
    path: "/",
    component: _54ed7db6,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
