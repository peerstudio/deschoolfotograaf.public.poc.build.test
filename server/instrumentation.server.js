import * as Sentry from '@sentry/sveltekit';
import './chunks/_sentry-inject-global-values-file-DTYvZL-m.js';
import './chunks/_commonjsHelpers-Bi63GUIs.js';

!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e.SENTRY_RELEASE = { id: "99069e462683fde0ac533c0f9d57bdbde12d31be" };
  } catch (e2) {
  }
})();
{
  try {
    (function() {
      var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "801d423c-2519-4194-9c29-87fd04b9bad1", e._sentryDebugIdIdentifier = "sentry-dbid-801d423c-2519-4194-9c29-87fd04b9bad1");
    })();
  } catch (e) {
  }
}
const PUBLIC_SENTRY_DSN = "https://55315769caab23cac417fcf03cf73910@o4510602874978304.ingest.de.sentry.io/4510612600651856";
Sentry.init({
  dsn: PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1,
  // Enable logs to be sent to Sentry
  enableLogs: true
  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: import.meta.env.DEV,
});
//# sourceMappingURL=instrumentation.server.js.map
