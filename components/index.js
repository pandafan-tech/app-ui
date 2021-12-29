export { default as Arrow } from '../../components/Arrow.vue'
export { default as BigNews } from '../../components/BigNews.vue'
export { default as Billing } from '../../components/Billing.vue'
export { default as BillingModal } from '../../components/BillingModal.vue'
export { default as ConnectionControl } from '../../components/ConnectionControl.vue'
export { default as ConnectionStatus } from '../../components/ConnectionStatus.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as ModeSelection } from '../../components/ModeSelection.vue'
export { default as NewsDisplay } from '../../components/NewsDisplay.vue'
export { default as PandaNews } from '../../components/PandaNews.vue'
export { default as Payment } from '../../components/Payment.vue'
export { default as PricingPageAgreements } from '../../components/PricingPageAgreements.vue'
export { default as PricingPageCateOptions } from '../../components/PricingPageCateOptions.vue'
export { default as PricingPageFeeBreakdown } from '../../components/PricingPageFeeBreakdown.vue'
export { default as PricingPagePaymentOptions } from '../../components/PricingPagePaymentOptions.vue'
export { default as PricingPagePlanOptions } from '../../components/PricingPagePlanOptions.vue'
export { default as PricingPagePremiumData } from '../../components/PricingPagePremiumData.vue'
export { default as PricingPageTimeOptions } from '../../components/PricingPageTimeOptions.vue'
export { default as PricingPageTopUp } from '../../components/PricingPageTopUp.vue'
export { default as ProxyModeSelect } from '../../components/ProxyModeSelect.vue'
export { default as ServerDescription } from '../../components/ServerDescription.vue'
export { default as ServerList } from '../../components/ServerList.vue'
export { default as ServerName } from '../../components/ServerName.vue'
export { default as ServiceSelect } from '../../components/ServiceSelect.vue'
export { default as ServiceSelector } from '../../components/ServiceSelector.vue'
export { default as Loading } from '../../components/loading.vue'
export { default as GuidesClashForAndroid } from '../../components/guides/ClashForAndroid.vue'
export { default as GuidesPotatsoLite } from '../../components/guides/PotatsoLite.vue'
export { default as GuidesShadowrocket } from '../../components/guides/Shadowrocket.vue'
export { default as GuidesShadowsocks } from '../../components/guides/Shadowsocks.vue'
export { default as GuidesSurgeForiOS } from '../../components/guides/SurgeForiOS.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
