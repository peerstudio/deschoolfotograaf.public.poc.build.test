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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "328d64b1-3ee1-466d-8f16-a177385271cd", e._sentryDebugIdIdentifier = "sentry-dbid-328d64b1-3ee1-466d-8f16-a177385271cd");
    })();
  } catch (e) {
  }
}
var OrderState = /* @__PURE__ */ ((OrderState2) => {
  OrderState2[OrderState2["Cancelled"] = -1] = "Cancelled";
  OrderState2[OrderState2["InProgress"] = 0] = "InProgress";
  OrderState2[OrderState2["Processed"] = 1] = "Processed";
  return OrderState2;
})(OrderState || {});

export { OrderState as O };
//# sourceMappingURL=order-state-A0iNAU9R.js.map
