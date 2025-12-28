import { e as escape_html } from './escaping-lkkrOXOy.js';
import './state.svelte-5bC0ohOj.js';
import { s as stores } from './client-B7PN5QvR.js';
import { ab as getContext } from './context-4vQb68ky.js';
import './index2-SY8yx-Uw.js';
import './false-FDRW3Tff.js';

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
//# sourceMappingURL=error.svelte-Cc5E0boh.js.map
