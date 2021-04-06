import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ff5ed806 = () => interopDefault(import('../pages/buy-service.vue' /* webpackChunkName: "pages/buy-service" */))
const _c57e5e90 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0bd38061 = () => interopDefault(import('../pages/dashboard/about.vue' /* webpackChunkName: "pages/dashboard/about" */))
const _544efbba = () => interopDefault(import('../pages/dashboard/buy-premium-data.vue' /* webpackChunkName: "pages/dashboard/buy-premium-data" */))
const _427dade8 = () => interopDefault(import('../pages/dashboard/dashboard.vue' /* webpackChunkName: "pages/dashboard/dashboard" */))
const _37548dc6 = () => interopDefault(import('../pages/dashboard/help.vue' /* webpackChunkName: "pages/dashboard/help" */))
const _699b75d3 = () => interopDefault(import('../pages/dashboard/legacy_update.vue' /* webpackChunkName: "pages/dashboard/legacy_update" */))
const _21287f8a = () => interopDefault(import('../pages/dashboard/menu.vue' /* webpackChunkName: "pages/dashboard/menu" */))
const _0b695f2c = () => interopDefault(import('../pages/dashboard/proxy-rules.vue' /* webpackChunkName: "pages/dashboard/proxy-rules" */))
const _5d14e2ff = () => interopDefault(import('../pages/dashboard/settings.vue' /* webpackChunkName: "pages/dashboard/settings" */))
const _0a543da5 = () => interopDefault(import('../pages/dashboard/update.vue' /* webpackChunkName: "pages/dashboard/update" */))
const _0d57abe1 = () => interopDefault(import('../pages/dashboard/update_billing.vue' /* webpackChunkName: "pages/dashboard/update_billing" */))
const _15af551a = () => interopDefault(import('../pages/dashboard/version-history.vue' /* webpackChunkName: "pages/dashboard/version-history" */))
const _69d07a8e = () => interopDefault(import('../pages/dashboard/tutorials/allplatform/android.vue' /* webpackChunkName: "pages/dashboard/tutorials/allplatform/android" */))
const _5d990ea8 = () => interopDefault(import('../pages/dashboard/tutorials/allplatform/ios.vue' /* webpackChunkName: "pages/dashboard/tutorials/allplatform/ios" */))
const _58cda4be = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/buy-service",
    component: _ff5ed806,
    alias: "/buy-service/index.html",
    name: "buy-service"
  }, {
    path: "/login",
    component: _c57e5e90,
    alias: "/login/index.html",
    name: "login"
  }, {
    path: "/dashboard/about",
    component: _0bd38061,
    alias: "/dashboard/about/index.html",
    name: "dashboard-about"
  }, {
    path: "/dashboard/buy-premium-data",
    component: _544efbba,
    alias: "/dashboard/buy-premium-data/index.html",
    name: "dashboard-buy-premium-data"
  }, {
    path: "/dashboard/dashboard",
    component: _427dade8,
    alias: "/dashboard/dashboard/index.html",
    name: "dashboard-dashboard"
  }, {
    path: "/dashboard/help",
    component: _37548dc6,
    alias: "/dashboard/help/index.html",
    name: "dashboard-help"
  }, {
    path: "/dashboard/legacy_update",
    component: _699b75d3,
    alias: "/dashboard/legacy_update/index.html",
    name: "dashboard-legacy_update"
  }, {
    path: "/dashboard/menu",
    component: _21287f8a,
    alias: "/dashboard/menu/index.html",
    name: "dashboard-menu"
  }, {
    path: "/dashboard/proxy-rules",
    component: _0b695f2c,
    alias: "/dashboard/proxy-rules/index.html",
    name: "dashboard-proxy-rules"
  }, {
    path: "/dashboard/settings",
    component: _5d14e2ff,
    alias: "/dashboard/settings/index.html",
    name: "dashboard-settings"
  }, {
    path: "/dashboard/update",
    component: _0a543da5,
    alias: "/dashboard/update/index.html",
    name: "dashboard-update"
  }, {
    path: "/dashboard/update_billing",
    component: _0d57abe1,
    alias: "/dashboard/update_billing/index.html",
    name: "dashboard-update_billing"
  }, {
    path: "/dashboard/version-history",
    component: _15af551a,
    alias: "/dashboard/version-history/index.html",
    name: "dashboard-version-history"
  }, {
    path: "/dashboard/tutorials/allplatform/android",
    component: _69d07a8e,
    alias: "/dashboard/tutorials/allplatform/android/index.html",
    name: "dashboard-tutorials-allplatform-android"
  }, {
    path: "/dashboard/tutorials/allplatform/ios",
    component: _5d990ea8,
    alias: "/dashboard/tutorials/allplatform/ios/index.html",
    name: "dashboard-tutorials-allplatform-ios"
  }, {
    path: "/",
    component: _58cda4be,
    alias: "/index.html",
    name: "index"
  }, {
    path: "*",
    component: _58cda4be,
    name: "404_fix"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
