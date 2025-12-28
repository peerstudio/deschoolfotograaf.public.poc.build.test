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
//# sourceMappingURL=order-state-DMMS9wUC.js.map
