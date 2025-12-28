import { b as private_env } from './shared-server-JEVtgS_4.js';

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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6c92ee8f-d783-426a-9ee6-8a37e6e5755f", e._sentryDebugIdIdentifier = "sentry-dbid-6c92ee8f-d783-426a-9ee6-8a37e6e5755f");
    })();
  } catch (e) {
  }
}
async function createMultiSafepayOrder(order) {
  const apiKey = private_env.MULTISAFEPAY_API_KEY;
  const apiUrl = private_env.MULTISAFEPAY_API_URL || "https://testapi.multisafepay.com/v1/json";
  if (!apiKey) {
    throw new Error("MultiSafepay API key not configured");
  }
  try {
    const response = await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey
      },
      body: JSON.stringify({
        type: "redirect",
        order_id: order.orderId,
        currency: "EUR",
        amount: order.amount,
        gateway: order.gatewayId,
        description: order.description,
        payment_options: {
          notification_method: "POST",
          notification_url: order.notificationUrl,
          redirect_url: order.successRedirectUrl,
          cancel_url: order.cancelRedirectUrl,
          close_window: false
        },
        customer: order.customer ? {
          locale: order.customer.locale,
          ip_address: "0.0.0.0",
          // Will be updated by MultiSafepay
          first_name: order.customer.firstName,
          last_name: order.customer.lastName,
          email: order.customer.email
        } : void 0
      })
    });
    const result = await response.json();
    if (!response.ok) {
      return {
        success: false,
        error: {
          code: result.error_code || "UNKNOWN_ERROR",
          message: result.error_info || "Payment initialization failed"
        }
      };
    }
    return {
      success: true,
      data: {
        order_id: result.data.order_id,
        payment_url: result.data.payment_url,
        transaction_id: result.data.transaction_id
      }
    };
  } catch (error) {
    console.error("MultiSafepay API error:", error);
    return {
      success: false,
      error: {
        code: "NETWORK_ERROR",
        message: error instanceof Error ? error.message : "Failed to connect to payment provider"
      }
    };
  }
}
async function getMultiSafepayOrderStatus(orderId) {
  const apiKey = private_env.MULTISAFEPAY_API_KEY;
  const apiUrl = private_env.MULTISAFEPAY_API_URL || "https://testapi.multisafepay.com/v1/json";
  if (!apiKey) {
    throw new Error("MultiSafepay API key not configured");
  }
  try {
    const response = await fetch(`${apiUrl}/orders/${orderId}`, {
      method: "GET",
      headers: {
        "api-key": apiKey
      }
    });
    if (!response.ok) {
      return null;
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("MultiSafepay status check error:", error);
    return null;
  }
}

export { createMultiSafepayOrder as c, getMultiSafepayOrderStatus as g };
//# sourceMappingURL=multisafepay-CFaQY1eJ.js.map
