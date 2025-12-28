import * as Sentry from '@sentry/sveltekit';
import { p as public_env } from './chunks/shared-server-Bskssk4F.js';
import './chunks/_sentry-inject-global-values-file-xAwdszk6.js';
import './chunks/_commonjsHelpers-Bi63GUIs.js';

!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e.SENTRY_RELEASE = { id: "8a555e7f1a2aff28713c57fe6955c74723dfdd47" };
  } catch (e2) {
  }
})();
{
  try {
    (function() {
      var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2b2b9c65-4380-4cb4-a81b-8c32867ea2be", e._sentryDebugIdIdentifier = "sentry-dbid-2b2b9c65-4380-4cb4-a81b-8c32867ea2be");
    })();
  } catch (e) {
  }
}
Sentry.init({
  dsn: public_env.PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1,
  // Enable logs to be sent to Sentry
  enableLogs: true
  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: import.meta.env.DEV,
});
//# sourceMappingURL=instrumentation.server.js.map
