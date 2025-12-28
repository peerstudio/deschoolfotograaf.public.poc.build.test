import { f as fail, r as redirect } from './index-B2LGyy1l.js';
import { g as getDb } from './index4-5m5U_tIY.js';
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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2288ee11-55b5-44d4-a74d-6c2ce9b90749", e._sentryDebugIdIdentifier = "sentry-dbid-2288ee11-55b5-44d4-a74d-6c2ce9b90749");
    })();
  } catch (e) {
  }
}
const load = async ({ cookies }) => {
  const studentCode = cookies.get("studentCode");
  if (studentCode) {
    redirect(303, "/catalogue");
  }
};
const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const code1 = data.get("code1")?.toString() || "";
    const code2 = data.get("code2")?.toString() || "";
    const code3 = data.get("code3")?.toString() || "";
    const sanitize = (str) => str.replace(/\D/g, "");
    const sanitizedCode1 = sanitize(code1);
    const sanitizedCode2 = sanitize(code2);
    const sanitizedCode3 = sanitize(code3);
    if (sanitizedCode1.length !== 3 || sanitizedCode2.length !== 4 || sanitizedCode3.length !== 3) {
      return fail(400, { error: "codeRequired" });
    }
    const fullCode = `${sanitizedCode1}${sanitizedCode2}${sanitizedCode3}`;
    try {
      const student = await getDb().userRegistration.findFirst({
        where: {
          code: fullCode
        }
      });
      if (!student) {
        return fail(400, { error: "invalidCode" });
      }
      cookies.set("studentCode", fullCode, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7
        // 1 week
      });
    } catch (err) {
      console.error("Login error:", err);
      return fail(500, { error: "invalidCode" });
    }
    redirect(303, "/catalogue");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D0GqZJpE.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.BI3Xv33Z.js","_app/immutable/chunks/7_wQ3_Ue.js","_app/immutable/chunks/CyQ2JImZ.js","_app/immutable/chunks/Y1KG8yBY.js","_app/immutable/chunks/DSqw3YzZ.js","_app/immutable/chunks/Bi5D_UGR.js","_app/immutable/chunks/Bq8cRlSv.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-DaxYrWCX.js.map
