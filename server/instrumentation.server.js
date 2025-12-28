import * as Sentry from '@sentry/sveltekit';
import { d as dev } from './chunks/index5-eJ70mj8U.js';
import './chunks/_sentry-inject-global-values-file-BKkFlDaj.js';
import './chunks/false-BXiFmQv4.js';
import './chunks/_commonjsHelpers-Bi63GUIs.js';

!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e.SENTRY_RELEASE = { id: "c60a69e04ed3d2b7e30fad6c7faf609a8c3ddb8b" };
  } catch (e2) {
  }
})();
{
  try {
    (function() {
      var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "70584171-1956-4b32-928d-60fb403b54a7", e._sentryDebugIdIdentifier = "sentry-dbid-70584171-1956-4b32-928d-60fb403b54a7");
    })();
  } catch (e) {
  }
}
Sentry.init({
  dsn: process.env.PUBLIC_SENTRY_DSN,
  // i can not use $env/dynamic public vars here because they are stripped away it seems
  environment: process.env.PUBLIC_SENTRY_ENVIRONMENT,
  enabled: !dev,
  tracesSampleRate: 1,
  // Enable logs to be sent to Sentry
  enableLogs: true
  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: import.meta.env.DEV,
});
//# sourceMappingURL=instrumentation.server.js.map
