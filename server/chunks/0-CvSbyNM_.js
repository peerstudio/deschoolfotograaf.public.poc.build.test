import { g as getDb } from './index4-BBd1z1D3.js';
import { g as getLanguageFromCookies } from './index6-C9DA7a_d.js';
import 'node:path';
import 'node:url';
import '@prisma/client/runtime/client';
import './_commonjsHelpers-Bi63GUIs.js';
import 'node:module';
import 'tty';
import 'util';
import 'os';
import 'events';
import 'timers';
import 'stream';
import 'crypto';
import 'tls';
import 'net';
import 'dns';
import 'constants';
import 'http';
import 'https';
import 'buffer';
import 'fs';
import 'path';
import 'assert';
import 'url';
import 'child_process';
import 'dgram';
import 'string_decoder';
import './shared-server-JEVtgS_4.js';

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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "df3d1141-54e8-4084-8b2e-ca2cabee9237", e._sentryDebugIdIdentifier = "sentry-dbid-df3d1141-54e8-4084-8b2e-ca2cabee9237");
    })();
  } catch (e) {
  }
}
const load = async ({ cookies }) => {
  const language = getLanguageFromCookies(cookies);
  const studentCode = cookies.get("studentCode");
  let student = null;
  if (studentCode) {
    const result = await getDb().userRegistration.findFirst({
      where: {
        code: studentCode
      }
    });
    if (result) {
      student = result;
    }
  }
  return {
    language,
    student
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-WUT4tI3o.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.u8Tv_0n7.js","_app/immutable/chunks/Cb9-xFu-.js","_app/immutable/chunks/B_USlTkE.js","_app/immutable/chunks/DNE-xu3M.js","_app/immutable/chunks/DP1B1_8k.js","_app/immutable/chunks/CMigFJ64.js","_app/immutable/chunks/BwxjV6UY.js"];
const stylesheets = ["_app/immutable/assets/0.U6qOREPM.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-CvSbyNM_.js.map
