import { r as redirect } from './index-B2LGyy1l.js';

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
//# sourceMappingURL=_server.ts-C-fXq4nF.js.map
