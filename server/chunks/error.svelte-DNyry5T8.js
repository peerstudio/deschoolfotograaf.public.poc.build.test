import { e as escape_html } from './escaping-B87DnxBH.js';
import './state.svelte-fWl1XcAQ.js';
import { s as stores } from './client-CTO_wtO5.js';
import { ab as getContext } from './context-CgtWMbXp.js';
import './index2-DHSIyfQi.js';
import './false-vIB0HdZP.js';

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
//# sourceMappingURL=error.svelte-DNyry5T8.js.map
