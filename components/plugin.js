import Vue from 'vue'

const components = {
  Arrow: () => import('../../components/Arrow.vue' /* webpackChunkName: "components/arrow" */).then(c => c.default || c),
  BigNews: () => import('../../components/BigNews.vue' /* webpackChunkName: "components/big-news" */).then(c => c.default || c),
  Billing: () => import('../../components/Billing.vue' /* webpackChunkName: "components/billing" */).then(c => c.default || c),
  BillingModal: () => import('../../components/BillingModal.vue' /* webpackChunkName: "components/billing-modal" */).then(c => c.default || c),
  ConnectionControl: () => import('../../components/ConnectionControl.vue' /* webpackChunkName: "components/connection-control" */).then(c => c.default || c),
  ConnectionStatus: () => import('../../components/ConnectionStatus.vue' /* webpackChunkName: "components/connection-status" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  ModeSelection: () => import('../../components/ModeSelection.vue' /* webpackChunkName: "components/mode-selection" */).then(c => c.default || c),
  NewsDisplay: () => import('../../components/NewsDisplay.vue' /* webpackChunkName: "components/news-display" */).then(c => c.default || c),
  PandaNews: () => import('../../components/PandaNews.vue' /* webpackChunkName: "components/panda-news" */).then(c => c.default || c),
  Payment: () => import('../../components/Payment.vue' /* webpackChunkName: "components/payment" */).then(c => c.default || c),
  ProxyModeSelect: () => import('../../components/ProxyModeSelect.vue' /* webpackChunkName: "components/proxy-mode-select" */).then(c => c.default || c),
  ServerList: () => import('../../components/ServerList.vue' /* webpackChunkName: "components/server-list" */).then(c => c.default || c),
  ServiceSelect: () => import('../../components/ServiceSelect.vue' /* webpackChunkName: "components/service-select" */).then(c => c.default || c),
  ServiceSelector: () => import('../../components/ServiceSelector.vue' /* webpackChunkName: "components/service-selector" */).then(c => c.default || c),
  Loading: () => import('../../components/loading.vue' /* webpackChunkName: "components/loading" */).then(c => c.default || c),
  GuidesClashForAndroid: () => import('../../components/guides/ClashForAndroid.vue' /* webpackChunkName: "components/guides-clash-for-android" */).then(c => c.default || c),
  GuidesPotatsoLite: () => import('../../components/guides/PotatsoLite.vue' /* webpackChunkName: "components/guides-potatso-lite" */).then(c => c.default || c),
  GuidesShadowrocket: () => import('../../components/guides/Shadowrocket.vue' /* webpackChunkName: "components/guides-shadowrocket" */).then(c => c.default || c),
  GuidesShadowsocks: () => import('../../components/guides/Shadowsocks.vue' /* webpackChunkName: "components/guides-shadowsocks" */).then(c => c.default || c),
  GuidesSurgeForiOS: () => import('../../components/guides/SurgeForiOS.vue' /* webpackChunkName: "components/guides-surge-fori-os" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
