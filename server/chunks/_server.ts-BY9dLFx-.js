import { j as json } from './index-B2LGyy1l.js';
import { g as getMultiSafepayOrderStatus } from './multisafepay-wdbAy_TM.js';
import { g as getDb } from './index4-DEKoQdvY.js';
import { O as OrderState } from './order-state-DMMS9wUC.js';
import './shared-server-hveoYw5P.js';
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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "417459a2-139f-42a7-b9e3-199b357771eb", e._sentryDebugIdIdentifier = "sentry-dbid-417459a2-139f-42a7-b9e3-199b357771eb");
    })();
  } catch (e) {
  }
}
const POST = async ({ request }) => {
  try {
    const body = await request.text();
    console.log("=== MultiSafepay Notification Received ===");
    console.log("Raw body:", body);
    const notification = JSON.parse(body);
    const orderNumber = notification.order_id;
    if (!orderNumber) {
      console.error("No order_id in notification");
      return json({ error: "No order_id provided" }, { status: 400 });
    }
    console.log("Order ID from notification:", orderNumber);
    const orderStatus = await getMultiSafepayOrderStatus(orderNumber);
    if (!orderStatus) {
      console.error("Failed to retrieve order status from MultiSafepay API");
      return json({ error: "Failed to verify order status" }, { status: 500 });
    }
    console.log("Verified status from MultiSafepay:", orderStatus.status);
    console.log("Transaction ID:", orderStatus.transaction_id);
    const paymentStatus = orderStatus.status;
    const order = await getDb().order.findFirst({
      where: { number: orderNumber }
    });
    if (!order) {
      console.error(`Order ${orderNumber} not found in database`);
      return json({ error: "Order not found" }, { status: 404 });
    }
    console.log(`Order ${orderNumber} current state: ${order.orderState}`);
    let newOrderState = order.orderState;
    switch (paymentStatus) {
      case "completed":
        newOrderState = OrderState.Processed;
        break;
      case "cancelled":
      case "void":
      case "declined":
      case "expired":
        newOrderState = OrderState.Cancelled;
        break;
      case "initialized":
      case "uncleared":
        newOrderState = OrderState.InProgress;
        break;
    }
    if (newOrderState !== order.orderState) {
      await getDb().order.update({
        where: { id: order.id },
        data: {
          orderState: newOrderState,
          paidOn: newOrderState === OrderState.Processed ? /* @__PURE__ */ new Date() : order.paidOn
        }
      });
      console.log(
        `Order ${orderNumber} updated from state ${order.orderState} to ${newOrderState}`
      );
    } else {
      console.log(`Order ${orderNumber} already in state ${newOrderState}, no update needed`);
    }
    return json({ ok: true });
  } catch (error) {
    console.error("Error processing MultiSafepay notification:", error);
    return json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
};
const GET = async () => {
  console.log("MultiSafepay notification endpoint accessed via GET");
  return json({ message: "MultiSafepay notification endpoint is active" });
};

export { GET, POST };
//# sourceMappingURL=_server.ts-BY9dLFx-.js.map
