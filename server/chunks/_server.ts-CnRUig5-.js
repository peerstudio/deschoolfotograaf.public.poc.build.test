import { r as redirect } from './index-B2LGyy1l.js';

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
//# sourceMappingURL=_server.ts-CnRUig5-.js.map
