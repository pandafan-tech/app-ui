import VueLib from 'vue'
import merge from 'lodash.mergewith'
import * as Sentry from '@sentry/browser'
import { Dedupe, ExtraErrorData, ReportingObserver, RewriteFrames, Vue } from '@sentry/integrations'

export default function (ctx, inject) {
  /* eslint-disable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  const config = {
    dsn:"https:\u002F\u002Fe2a8f68bbd8343b596936819d76046c2@sentry.io\u002F1300564",
    environment:"development",
    release:"",
    ignoreErrors:["EPERM","getVersion","UNKNOWN","ChunkLoadError","Loading chunk","Can't install proxy helper","StripeCheckout is not defined","ENOENT","Failed to open","Cannot create property 'billing' on string","Module.c","Error processing argument at index"]
  }

  const runtimeConfigKey = "sentry"
  if (ctx.$config && runtimeConfigKey && ctx.$config[runtimeConfigKey]) {
    merge(config, ctx.$config[runtimeConfigKey].config, ctx.$config[runtimeConfigKey].clientConfig)
  }

  config.integrations = [
    new Dedupe({}),
    new ExtraErrorData({}),
    new ReportingObserver({}),
    new RewriteFrames({}),
    new Vue({ Vue: VueLib, ...{"attachProps":true,"logErrors":true}})
  ]

  /* eslint-enable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  Sentry.init(config)

  inject('sentry', Sentry)
  ctx.$sentry = Sentry
}
