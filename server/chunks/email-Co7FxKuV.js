import nodemailer from 'nodemailer';
import { b as private_env } from './shared-server-Bskssk4F.js';

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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5ecd26f2-87f7-4c0c-839c-250d3f570fc7", e._sentryDebugIdIdentifier = "sentry-dbid-5ecd26f2-87f7-4c0c-839c-250d3f570fc7");
    })();
  } catch (e) {
  }
}
let transporter = null;
function getTransporter() {
  if (transporter) {
    return transporter;
  }
  const emailHost = private_env.EMAIL_HOST;
  const emailPort = private_env.EMAIL_PORT ? parseInt(private_env.EMAIL_PORT) : 587;
  const emailUser = private_env.EMAIL_USER;
  const emailPassword = private_env.EMAIL_PASSWORD;
  const emailSecure = private_env.EMAIL_SECURE === "true";
  if (!emailHost || !emailUser || !emailPassword) {
    throw new Error(
      "Email configuration missing. Please set EMAIL_HOST, EMAIL_USER, and EMAIL_PASSWORD environment variables."
    );
  }
  transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: emailSecure,
    // true for 465, false for other ports
    auth: {
      user: emailUser,
      pass: emailPassword
    }
  });
  return transporter;
}
async function sendEmail(options) {
  try {
    const transport = getTransporter();
    const defaultFrom = private_env.EMAIL_FROM || private_env.EMAIL_USER;
    const mailOptions = {
      from: options.from || defaultFrom,
      to: Array.isArray(options.to) ? options.to.join(", ") : options.to,
      cc: options.cc ? Array.isArray(options.cc) ? options.cc.join(", ") : options.cc : void 0,
      bcc: options.bcc ? Array.isArray(options.bcc) ? options.bcc.join(", ") : options.bcc : void 0,
      subject: options.subject,
      text: options.text,
      html: options.html,
      attachments: options.attachments
    };
    const info = await transport.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return {
      success: true,
      messageId: info.messageId
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email"
    };
  }
}

export { sendEmail as s };
//# sourceMappingURL=email-Co7FxKuV.js.map
