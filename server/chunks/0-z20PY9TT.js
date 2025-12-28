import { g as getDb } from './index4-5m5U_tIY.js';
import { g as getLanguageFromCookies } from './index6-DwXL8VEN.js';
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
import './shared-server-Bskssk4F.js';

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
const component = async () => component_cache ??= (await import('./_layout.svelte-BTenIlB3.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.Dqqc5XEl.js","_app/immutable/chunks/7_wQ3_Ue.js","_app/immutable/chunks/CyQ2JImZ.js","_app/immutable/chunks/Y1KG8yBY.js","_app/immutable/chunks/DksHhPlh.js","_app/immutable/chunks/Bi5D_UGR.js","_app/immutable/chunks/JiB20DbD.js"];
const stylesheets = ["_app/immutable/assets/0.U6qOREPM.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-z20PY9TT.js.map
