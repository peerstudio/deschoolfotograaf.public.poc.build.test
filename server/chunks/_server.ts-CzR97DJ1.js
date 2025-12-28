import { j as json } from './index-B2LGyy1l.js';
import { s as sendEmail } from './email-Co7FxKuV.js';
import 'nodemailer';
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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "638f42ee-83e7-46dd-b6ce-393ceee55101", e._sentryDebugIdIdentifier = "sentry-dbid-638f42ee-83e7-46dd-b6ce-393ceee55101");
    })();
  } catch (e) {
  }
}
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body.to) {
      return json({ success: false, error: "Recipient email (to) is required" }, { status: 400 });
    }
    if (!body.subject) {
      return json({ success: false, error: "Email subject is required" }, { status: 400 });
    }
    if (!body.text && !body.html) {
      return json(
        { success: false, error: "Either text or html content is required" },
        { status: 400 }
      );
    }
    const result = await sendEmail({
      to: body.to,
      subject: body.subject,
      text: body.text,
      html: body.html,
      from: body.from,
      cc: body.cc,
      bcc: body.bcc
    });
    if (result.success) {
      return json({
        success: true,
        messageId: result.messageId
      });
    } else {
      return json(
        {
          success: false,
          error: result.error
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in send-email endpoint:", error);
    return json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send email"
      },
      { status: 500 }
    );
  }
};

export { POST };
//# sourceMappingURL=_server.ts-CzR97DJ1.js.map
