import { j as json } from './index-B2LGyy1l.js';
import { s as sendEmail } from './email-CjOG0v8_.js';
import { g as getDb } from './index4-BBd1z1D3.js';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { b as private_env } from './shared-server-JEVtgS_4.js';
import { d as dev } from './index5-HYMG9U_q.js';
import 'nodemailer';
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
import 'assert';
import 'url';
import 'child_process';
import 'dgram';
import 'string_decoder';
import './false-FDRW3Tff.js';

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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bc211f27-2363-471f-b6e5-5eb8a9634bc7", e._sentryDebugIdIdentifier = "sentry-dbid-bc211f27-2363-471f-b6e5-5eb8a9634bc7");
    })();
  } catch (e) {
  }
}
const GET = async () => {
  const results = {
    processed: 0,
    sent: 0,
    failed: 0,
    errors: []
  };
  try {
    const pendingEmails = await getDb().emailMessage.findMany({
      where: {
        sentAttemp: {
          lt: 3
        },
        deactivatedOn: null,
        sentOn: null
      }
    });
    if (pendingEmails.length === 0) {
      return json({
        success: true,
        message: "No pending emails to process",
        ...results
      });
    }
    const logoPath = dev ? join(process.cwd(), "static", "logo_small.jpg") : join(process.cwd(), "client", "logo_small.jpg");
    let logoBuffer;
    try {
      logoBuffer = await readFile(logoPath);
    } catch (error) {
      console.error("Failed to load logo file from:", logoPath, error);
      return json(
        {
          success: false,
          error: "Logo file not found",
          ...results
        },
        { status: 500 }
      );
    }
    for (const emailMessage of pendingEmails) {
      results.processed++;
      try {
        await getDb().emailMessage.update({
          where: { id: emailMessage.id },
          data: {
            sentAttemp: emailMessage.sentAttemp + 1
          }
        });
        const to = emailMessage.to.split(";").filter(Boolean);
        const cc = emailMessage.cc?.split(";").filter(Boolean) || void 0;
        const bcc = emailMessage.bcc?.split(";").filter(Boolean) || void 0;
        const catchAllEmail = private_env.EMAIL_CATCHALL;
        const actualTo = catchAllEmail || (to.length === 1 ? to[0] : to);
        const emailResult = await sendEmail({
          to: actualTo,
          subject: emailMessage.subject,
          html: emailMessage.body,
          cc: cc && cc.length > 0 ? cc.length === 1 ? cc[0] : cc : void 0,
          bcc: bcc && bcc.length > 0 ? bcc.length === 1 ? bcc[0] : bcc : void 0,
          attachments: [
            {
              filename: "logo_small.jpg",
              content: logoBuffer,
              cid: "logo"
              // Content-ID for embedding in HTML
            }
          ]
        });
        if (emailResult.success) {
          await getDb().emailMessage.update({
            where: { id: emailMessage.id },
            data: {
              sentOn: /* @__PURE__ */ new Date()
            }
          });
          results.sent++;
          console.log(`Email ${emailMessage.id} sent successfully`);
        } else {
          results.failed++;
          results.errors.push({
            id: emailMessage.id,
            error: emailResult.error || "Unknown error"
          });
          console.error(`Failed to send email ${emailMessage.id}:`, emailResult.error);
        }
      } catch (error) {
        results.failed++;
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        results.errors.push({
          id: emailMessage.id,
          error: errorMessage
        });
        console.error(`Error processing email ${emailMessage.id}:`, error);
      }
    }
    return json({
      success: true,
      message: `Processed ${results.processed} emails: ${results.sent} sent, ${results.failed} failed`,
      ...results
    });
  } catch (error) {
    console.error("Error in send-mails endpoint:", error);
    return json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to process emails",
        ...results
      },
      { status: 500 }
    );
  }
};

export { GET };
//# sourceMappingURL=_server.ts-D222DzhW.js.map
