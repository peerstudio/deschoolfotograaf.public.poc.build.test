import { j as json } from './index-B2LGyy1l.js';

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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a292b908-cfae-4164-8ef0-0a391efe8dc8", e._sentryDebugIdIdentifier = "sentry-dbid-a292b908-cfae-4164-8ef0-0a391efe8dc8");
    })();
  } catch (e) {
  }
}
const POST = async ({ request, cookies }) => {
  const { language } = await request.json();
  cookies.set("language", language, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    // 1 year
    sameSite: "lax"
  });
  return json({ success: true });
};

export { POST };
//# sourceMappingURL=_server.ts-5NHiqx5L.js.map
