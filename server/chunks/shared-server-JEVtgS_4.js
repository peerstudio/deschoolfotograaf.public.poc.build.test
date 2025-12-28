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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "09dc5713-8623-43c9-a77a-a7daae171749", e._sentryDebugIdIdentifier = "sentry-dbid-09dc5713-8623-43c9-a77a-a7daae171749");
    })();
  } catch (e) {
  }
}
let private_env = {};
let public_env = {};
function set_private_env(environment) {
  private_env = environment;
}
function set_public_env(environment) {
  public_env = environment;
}

export { set_public_env as a, private_env as b, public_env as p, set_private_env as s };
//# sourceMappingURL=shared-server-JEVtgS_4.js.map
