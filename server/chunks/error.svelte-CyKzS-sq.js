import { e as escape_html } from './escaping-DLfpgM0J.js';
import './state.svelte-BgEm5CNq.js';
import { s as stores } from './client-CKgsowKo.js';
import { ab as getContext } from './context-CkPT-2Ks.js';
import './index2-0DGNOmlP.js';
import './false-BXiFmQv4.js';

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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3e08aad4-c1b5-4ed4-adb2-b4c82acfa51a", e._sentryDebugIdIdentifier = "sentry-dbid-3e08aad4-c1b5-4ed4-adb2-b4c82acfa51a");
    })();
  } catch (e) {
  }
}
({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
  });
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-CyKzS-sq.js.map
