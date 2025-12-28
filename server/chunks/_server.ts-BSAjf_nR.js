import { r as redirect } from './index-B2LGyy1l.js';

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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b94fb2ee-5f79-46a1-94dd-d3ba3ad624df", e._sentryDebugIdIdentifier = "sentry-dbid-b94fb2ee-5f79-46a1-94dd-d3ba3ad624df");
    })();
  } catch (e) {
  }
}
const POST = async ({ cookies }) => {
  cookies.delete("studentCode", { path: "/" });
  redirect(303, "/");
};

export { POST };
//# sourceMappingURL=_server.ts-BSAjf_nR.js.map
