import './context-CgtWMbXp.js';
import { w as writable } from './index2-DHSIyfQi.js';
import './state.svelte-fWl1XcAQ.js';

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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fb0d9caa-7a24-4bd5-8492-bb8ee9738cea", e._sentryDebugIdIdentifier = "sentry-dbid-fb0d9caa-7a24-4bd5-8492-bb8ee9738cea");
    })();
  } catch (e) {
  }
}
function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
function invalidateAll() {
  {
    throw new Error("Cannot call invalidateAll() on the server");
  }
}
async function applyAction(result) {
  {
    throw new Error("Cannot call applyAction(...) on the server");
  }
}

export { applyAction as a, invalidateAll as i, stores as s };
//# sourceMappingURL=client-CTO_wtO5.js.map
