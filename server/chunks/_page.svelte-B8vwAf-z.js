import { e as ensure_array_like } from './index3-Bgvz3y0z.js';
import './context-CkPT-2Ks.js';
import { e as escape_html } from './escaping-DLfpgM0J.js';
import './state.svelte-BgEm5CNq.js';
import './cart.svelte-D1K0dzFV.js';
import './false-BXiFmQv4.js';

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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b0ee06d3-82fe-4216-b25b-b0364fdd6379", e._sentryDebugIdIdentifier = "sentry-dbid-b0ee06d3-82fe-4216-b25b-b0364fdd6379");
    })();
  } catch (e) {
  }
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    function t(key) {
      return data.translations[key];
    }
    function formatPrice(price) {
      return `€${price.toFixed(2)}`;
    }
    function formatDate(date) {
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
    $$renderer2.push(`<div class="min-h-screen bg-gray-50 py-4 sm:py-8"><div class="max-w-4xl mx-auto px-3 sm:px-6"><div class="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6"><div class="flex items-center justify-center mb-4"><svg class="w-12 h-12 sm:w-16 sm:h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h1 class="text-xl sm:text-3xl font-bold text-gray-800 text-center mb-2">${escape_html(t("orderConfirmed"))}</h1> <p class="text-sm sm:text-base text-gray-600 text-center">${escape_html(t("thankYouOrder"))}</p></div> <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6"><h2 class="text-lg sm:text-2xl font-semibold text-gray-800 mb-4">${escape_html(t("orderDetails"))}</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"><div><p class="text-sm text-gray-600">${escape_html(t("orderNumber"))}</p> <p class="text-lg font-semibold text-gray-800">${escape_html(data.order.number)}</p></div> <div><p class="text-sm text-gray-600">${escape_html(t("orderDate"))}</p> <p class="text-lg font-semibold text-gray-800">${escape_html(formatDate(data.order.createdOn))}</p></div></div> <div class="border-t pt-4 mb-6"><h3 class="text-lg font-semibold text-gray-800 mb-3">${escape_html(t("customerInformation"))}</h3> `);
    if (data.user) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><p class="text-sm text-gray-600">${escape_html(t("name"))}</p> <p class="text-gray-800">${escape_html(data.user.firstName)} ${escape_html(data.user.lastName)}</p></div> <div><p class="text-sm text-gray-600">${escape_html(t("email"))}</p> <p class="text-gray-800">${escape_html(data.user.email)}</p></div> `);
      if (data.user.phone) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div><p class="text-sm text-gray-600">${escape_html(t("phone"))}</p> <p class="text-gray-800">${escape_html(data.user.phone)}</p></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.shippingAddress) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><p class="text-sm text-gray-600">${escape_html(t("shippingAddress"))}</p> <p class="text-gray-800">${escape_html(data.shippingAddress.street)}
								${escape_html(data.shippingAddress.number)} `);
      if (data.shippingAddress.box) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`${escape_html(data.shippingAddress.box)}`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--><br/> ${escape_html(data.shippingAddress.postalCode)}
								${escape_html(data.shippingAddress.city)}</p></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="border-t pt-4 mb-6"><h3 class="text-lg font-semibold text-gray-800 mb-3">${escape_html(t("orderItems"))}</h3> <div class="space-y-3"><!--[-->`);
    const each_array = ensure_array_like(data.orderLines);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let line = each_array[$$index];
      $$renderer2.push(`<div class="flex justify-between items-center py-2 border-b"><div class="flex-1"><p class="font-medium text-gray-800">${escape_html(line.productName)}</p> `);
      if (line.studentName) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-xs text-gray-600 mt-1">${escape_html(line.studentName)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (line.className || line.schoolName) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-xs text-gray-500">`);
        if (line.className) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(line.className)}`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
        if (line.className && line.schoolName) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`,`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
        if (line.schoolName) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(line.schoolName)}`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (line.publicationYear) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-xs text-gray-500">${escape_html(line.publicationYear)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (line.productPartNumber) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-sm text-gray-500 mt-1">${escape_html(t("partNumber"))}: ${escape_html(line.productPartNumber)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="flex items-center gap-4"><span class="text-gray-600">${escape_html(t("qty"))}: ${escape_html(line.orderQuantity)}</span> <span class="font-semibold text-gray-800 w-24 text-right">${escape_html(formatPrice(line.price * line.orderQuantity))}</span></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="border-t pt-4"><h3 class="text-lg font-semibold text-gray-800 mb-3">${escape_html(t("orderSummary"))}</h3> <div class="space-y-2"><div class="flex justify-between text-gray-600"><span>${escape_html(t("subtotal"))}:</span> <span>${escape_html(formatPrice(data.order.subTotal))}</span></div> `);
    if (data.deliveryOption) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex justify-between text-gray-600"><span>${escape_html(t("delivery"))} (${escape_html(data.deliveryOption.name)}):</span> <span>${escape_html(formatPrice(data.order.freight))}</span></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.paymentOption) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex justify-between text-gray-600"><span>${escape_html(t("payment"))} (${escape_html(data.paymentOption.name)}):</span> <span>${escape_html(formatPrice(data.order.transaction))}</span></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex justify-between text-gray-600"><span>${escape_html(t("vat"))}:</span> <span>${escape_html(formatPrice(data.order.vat))}</span></div> <div class="border-t pt-2 mt-2"><div class="flex justify-between items-center"><span class="text-xl font-bold text-gray-800">${escape_html(t("total"))}:</span> <span class="text-2xl font-bold text-blue-600">${escape_html(formatPrice(data.order.grandTotal))}</span></div></div></div></div></div> <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6"><h3 class="text-lg font-semibold text-gray-800 mb-2">${escape_html(t("whatsNext"))}</h3> `);
    if (data.paymentOption?.code === "BANKTRANSFER") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-white border border-blue-300 rounded-lg p-4 mb-4"><p class="text-gray-700 mb-4">${escape_html(t("bankTransferInstructions"))}</p> <div class="space-y-2 text-sm"><div class="flex justify-between py-2 border-b"><span class="font-semibold text-gray-700">${escape_html(t("amountToTransfer"))}</span> <span class="font-bold text-gray-900">${escape_html(formatPrice(data.order.grandTotal))}</span></div> <div class="flex justify-between py-2 border-b"><span class="font-semibold text-gray-700">${escape_html(t("freeDescription"))}</span> <span class="font-mono text-gray-900">${escape_html(data.order.number)}</span></div> <div class="flex justify-between py-2 border-b"><span class="font-semibold text-gray-700">${escape_html(t("bank"))}</span> <span class="text-gray-900">BNP Paribas Fortis</span></div> <div class="flex justify-between py-2 border-b"><span class="font-semibold text-gray-700">${escape_html(t("bankAccountBeneficiary"))}</span> <span class="font-mono text-gray-900">BE60 0018 2869 9570</span></div> <div class="flex justify-between py-2 border-b"><span class="font-semibold text-gray-700">${escape_html(t("bicBeneficiary"))}</span> <span class="font-mono text-gray-900">GEBABEBB</span></div> <div class="flex justify-between py-2 border-b"><span class="font-semibold text-gray-700">${escape_html(t("nameBeneficiary"))}</span> <span class="text-gray-900">Peer-Studio bv</span></div> <div class="flex justify-between py-2"><span class="font-semibold text-gray-700">${escape_html(t("addressBeneficiary"))}</span> <span class="text-gray-900">Sint-Rochusstraat 97, 1500 Halle</span></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <ul class="list-disc list-inside space-y-2 text-gray-700">`);
    if (data.user) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<li>${escape_html(t("confirmationEmail"))} ${escape_html(data.user.email)}</li>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.paymentOption?.code !== "BANKTRANSFER") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<li>${escape_html(t("processingTime"))}</li>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.deliveryOption?.name === "Download") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<li>${escape_html(t("downloadLinks"))}</li>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (data.deliveryOption?.name === "Mail") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<li>${escape_html(t("orderShipped"))}</li>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (data.deliveryOption?.name === "Pick up at school") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<li>${escape_html(t("pickUpSchool"))}</li>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div class="flex justify-center"><button class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">${escape_html(t("returnToCatalogue"))}</button></div></div></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-B8vwAf-z.js.map
