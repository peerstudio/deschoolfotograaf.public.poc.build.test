import { b as attr, a as attr_class, c as store_get, e as ensure_array_like, s as stringify, u as unsubscribe_stores } from './index3-Bgvz3y0z.js';
import { a as getTranslation } from './index6-D7UTaxvw.js';
import { c as cart } from './cart.svelte-D1K0dzFV.js';
import { a as applyAction } from './client-CKgsowKo.js';
import { ag as run } from './context-CkPT-2Ks.js';
import { c as createCheckoutSchema, s as superForm, z as zod } from './4-BUNSVVmS.js';
import './index-B2LGyy1l.js';
import { e as escape_html } from './escaping-DLfpgM0J.js';
import './index2-0DGNOmlP.js';
import './state.svelte-BgEm5CNq.js';
import './false-BXiFmQv4.js';
import './index4-DEKoQdvY.js';
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
import './shared-server-hveoYw5P.js';
import './stores-BnOUshuu.js';
import './index5-eJ70mj8U.js';
import './app-VauxIOJt.js';
import './multisafepay-wdbAy_TM.js';
import './order-state-DMMS9wUC.js';

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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9961618e-0555-4b59-8205-bbe1cdb41803", e._sentryDebugIdIdentifier = "sentry-dbid-9961618e-0555-4b59-8205-bbe1cdb41803");
    })();
  } catch (e) {
  }
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const language = data.language;
    const checkoutSchema = createCheckoutSchema((key) => getTranslation(language, key));
    const { form, errors, submitting } = superForm(run(() => data.form), {
      dataType: "json",
      validators: zod(run(() => checkoutSchema)),
      applyAction: false,
      id: "checkout-form",
      onResult: async ({ result }) => {
        if (result.type === "redirect") {
          cart.clearStorage();
          await applyAction();
          cart.clear();
        }
      },
      onError: (error) => {
        console.error("Form submission error:", error);
        alert("There were errors in your submission. Please check the form and try again.");
      }
    });
    function t(key) {
      return getTranslation(language, key);
    }
    const filteredDeliveryOptions = data.deliveryOptions.filter((opt) => {
      if (cart.allDownloadable) {
        return opt.name === "Download only";
      } else {
        return opt.name !== "Download only";
      }
    });
    const filteredPaymentOptions = () => {
      if (!store_get($$store_subs ??= {}, "$form", form).deliveryOptionId) {
        return data.paymentOptions;
      }
      const linkedPaymentIds = data.deliveryPaymentLinks.filter((link) => link.deliveryOptionId === store_get($$store_subs ??= {}, "$form", form).deliveryOptionId).map((link) => link.paymentOptionId);
      if (linkedPaymentIds.length > 0) {
        return data.paymentOptions.filter((opt) => linkedPaymentIds.includes(opt.id));
      }
      return data.paymentOptions;
    };
    function formatPrice(price) {
      return `€${price.toFixed(2)}`;
    }
    $$renderer2.push(`<div class="min-h-screen bg-gray-50"><div class="max-w-7xl mx-auto p-3 sm:p-6"><div class="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6"><h1 class="text-xl sm:text-3xl font-bold text-gray-800">${escape_html(t("checkout"))}</h1> <p class="text-sm sm:text-base text-gray-600 mt-2">${escape_html(data.student.firstName)}
				${escape_html(data.student.lastName)}</p></div> <form method="POST"><input type="hidden" name="deliveryOptionId"${attr("value", store_get($$store_subs ??= {}, "$form", form).deliveryOptionId)}/> <input type="hidden" name="paymentOptionId"${attr("value", store_get($$store_subs ??= {}, "$form", form).paymentOptionId)}/> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-2"><div class="bg-white rounded-lg shadow-md p-6"><h2 class="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First name <span class="text-red-500">*</span></label> <input id="firstName" name="firstName" type="text"${attr("value", store_get($$store_subs ??= {}, "$form", form).firstName)}${attr("data-invalid", store_get($$store_subs ??= {}, "$errors", errors).firstName ? true : void 0)}${attr_class("w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", void 0, {
      "border-red-500": store_get($$store_subs ??= {}, "$errors", errors).firstName,
      "border-gray-300": !store_get($$store_subs ??= {}, "$errors", errors).firstName
    })}/> `);
    if (store_get($$store_subs ??= {}, "$errors", errors).firstName) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-red-500 text-sm mt-1">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).firstName)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div><label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last name <span class="text-red-500">*</span></label> <input id="lastName" name="lastName" type="text"${attr("value", store_get($$store_subs ??= {}, "$form", form).lastName)}${attr("data-invalid", store_get($$store_subs ??= {}, "$errors", errors).lastName ? true : void 0)}${attr_class("w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", void 0, {
      "border-red-500": store_get($$store_subs ??= {}, "$errors", errors).lastName,
      "border-gray-300": !store_get($$store_subs ??= {}, "$errors", errors).lastName
    })}/> `);
    if (store_get($$store_subs ??= {}, "$errors", errors).lastName) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-red-500 text-sm mt-1">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).lastName)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div><label for="language" class="block text-sm font-medium text-gray-700 mb-1">Language <span class="text-red-500">*</span></label> `);
    $$renderer2.select(
      {
        id: "language",
        name: "languageId",
        value: store_get($$store_subs ??= {}, "$form", form).languageId,
        "data-invalid": store_get($$store_subs ??= {}, "$errors", errors).languageId ? true : void 0,
        class: "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      },
      ($$renderer3) => {
        $$renderer3.option({ value: null }, ($$renderer4) => {
          $$renderer4.push(`Select a language`);
        });
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(data.languages);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let language2 = each_array[$$index];
          $$renderer3.option({ value: language2.id }, ($$renderer4) => {
            $$renderer4.push(`${escape_html(language2.name)}`);
          });
        }
        $$renderer3.push(`<!--]-->`);
      },
      void 0,
      {
        "border-red-500": store_get($$store_subs ??= {}, "$errors", errors).languageId,
        "border-gray-300": !store_get($$store_subs ??= {}, "$errors", errors).languageId
      }
    );
    $$renderer2.push(` `);
    if (store_get($$store_subs ??= {}, "$errors", errors).languageId) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-red-500 text-sm mt-1">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).languageId)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div><label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email address <span class="text-red-500">*</span></label> <input id="email" name="email" type="text"${attr("value", store_get($$store_subs ??= {}, "$form", form).email)}${attr("data-invalid", store_get($$store_subs ??= {}, "$errors", errors).email ? true : void 0)}${attr_class("w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", void 0, {
      "border-red-500": store_get($$store_subs ??= {}, "$errors", errors).email,
      "border-gray-300": !store_get($$store_subs ??= {}, "$errors", errors).email
    })}/> `);
    if (store_get($$store_subs ??= {}, "$errors", errors).email) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-red-500 text-sm mt-1">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).email)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (store_get($$store_subs ??= {}, "$form", form).isShippingRequired) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div><label for="street" class="block text-sm font-medium text-gray-700 mb-1">Street <span class="text-red-500">*</span></label> <input id="street" name="street" type="text"${attr("value", store_get($$store_subs ??= {}, "$form", form).street)}${attr("data-invalid", store_get($$store_subs ??= {}, "$errors", errors).street ? true : void 0)}${attr_class("w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", void 0, {
        "border-red-500": store_get($$store_subs ??= {}, "$errors", errors).street,
        "border-gray-300": !store_get($$store_subs ??= {}, "$errors", errors).street
      })}/> `);
      if (store_get($$store_subs ??= {}, "$errors", errors).street) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-red-500 text-sm mt-1">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).street)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div><label for="houseNumber" class="block text-sm font-medium text-gray-700 mb-1">House number <span class="text-red-500">*</span></label> <input id="houseNumber" name="houseNumber" type="text"${attr("value", store_get($$store_subs ??= {}, "$form", form).houseNumber)}${attr("data-invalid", store_get($$store_subs ??= {}, "$errors", errors).houseNumber ? true : void 0)}${attr_class("w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", void 0, {
        "border-red-500": store_get($$store_subs ??= {}, "$errors", errors).houseNumber,
        "border-gray-300": !store_get($$store_subs ??= {}, "$errors", errors).houseNumber
      })}/> `);
      if (store_get($$store_subs ??= {}, "$errors", errors).houseNumber) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-red-500 text-sm mt-1">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).houseNumber)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div><label for="city" class="block text-sm font-medium text-gray-700 mb-1">City <span class="text-red-500">*</span></label> <input id="city" name="city" type="text"${attr("value", store_get($$store_subs ??= {}, "$form", form).city)}${attr("data-invalid", store_get($$store_subs ??= {}, "$errors", errors).city ? true : void 0)}${attr_class("w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", void 0, {
        "border-red-500": store_get($$store_subs ??= {}, "$errors", errors).city,
        "border-gray-300": !store_get($$store_subs ??= {}, "$errors", errors).city
      })}/> `);
      if (store_get($$store_subs ??= {}, "$errors", errors).city) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-red-500 text-sm mt-1">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).city)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div><label for="postalCode" class="block text-sm font-medium text-gray-700 mb-1">Postal code <span class="text-red-500">*</span></label> <input id="postalCode" name="postalCode" type="text"${attr("value", store_get($$store_subs ??= {}, "$form", form).postalCode)}${attr("data-invalid", store_get($$store_subs ??= {}, "$errors", errors).postalCode ? true : void 0)}${attr_class("w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", void 0, {
        "border-red-500": store_get($$store_subs ??= {}, "$errors", errors).postalCode,
        "border-gray-300": !store_get($$store_subs ??= {}, "$errors", errors).postalCode
      })}/> `);
      if (store_get($$store_subs ??= {}, "$errors", errors).postalCode) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-red-500 text-sm mt-1">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).postalCode)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div><label for="box" class="block text-sm font-medium text-gray-700 mb-1">Box</label> <input id="box" type="text"${attr("value", store_get($$store_subs ??= {}, "$form", form).box)} class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/></div> <div class="md:col-span-2 mt-4"><button type="button"${attr("disabled", !store_get($$store_subs ??= {}, "$form", form).street || !store_get($$store_subs ??= {}, "$form", form).houseNumber || !store_get($$store_subs ??= {}, "$form", form).postalCode || !store_get($$store_subs ??= {}, "$form", form).city, true)} class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">`);
      {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Validate Address`);
      }
      $$renderer2.push(`<!--]--></button> `);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div${attr("data-invalid", store_get($$store_subs ??= {}, "$errors", errors).deliveryOptionId ? true : void 0)} class="bg-white rounded-lg shadow-md p-6 mt-6"><h2 class="text-xl font-semibold text-gray-800 mb-4">${escape_html(t("deliveryOptions"))}</h2> <p class="text-gray-600 mb-6">${escape_html(t("selectDelivery"))}</p> `);
    if (filteredDeliveryOptions.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-center py-12 text-gray-500"><p>No delivery options available at this time.</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="space-y-4"><!--[-->`);
      const each_array_2 = ensure_array_like(filteredDeliveryOptions);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let option = each_array_2[$$index_2];
        $$renderer2.push(`<button type="button"${attr_class("w-full border-2 rounded-lg p-4 transition-all hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500", void 0, {
          "border-blue-600": store_get($$store_subs ??= {}, "$form", form).deliveryOptionId === option.id,
          "bg-blue-50": store_get($$store_subs ??= {}, "$form", form).deliveryOptionId === option.id,
          "border-gray-300": store_get($$store_subs ??= {}, "$form", form).deliveryOptionId !== option.id,
          "border-red-500": store_get($$store_subs ??= {}, "$errors", errors).deliveryOptionId && store_get($$store_subs ??= {}, "$form", form).deliveryOptionId !== option.id
        })}><div class="flex items-center justify-between"><div class="flex items-center gap-4"><div${attr_class("w-6 h-6 rounded-full border-2 flex items-center justify-center", void 0, {
          "border-blue-600": store_get($$store_subs ??= {}, "$form", form).deliveryOptionId === option.id,
          "bg-blue-600": store_get($$store_subs ??= {}, "$form", form).deliveryOptionId === option.id,
          "border-gray-300": store_get($$store_subs ??= {}, "$form", form).deliveryOptionId !== option.id
        })}>`);
        if (store_get($$store_subs ??= {}, "$form", form).deliveryOptionId === option.id) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div> <div class="text-left"><h3 class="font-semibold text-gray-800">${escape_html(option.name)}</h3> `);
        if (option.isPreferred) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded mt-1 inline-block">Recommended</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></div> <div class="text-right"><p class="font-semibold text-gray-800">${escape_html(formatPrice(option.price))}</p></div></div></button>`);
      }
      $$renderer2.push(`<!--]--></div> `);
      if (store_get($$store_subs ??= {}, "$errors", errors).deliveryOptionId) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-red-500 text-sm mt-2">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).deliveryOptionId)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> <div${attr("data-invalid", store_get($$store_subs ??= {}, "$errors", errors).paymentOptionId ? true : void 0)} class="bg-white rounded-lg shadow-md p-6 mt-6"><h2 class="text-xl font-semibold text-gray-800 mb-4">${escape_html(t("paymentOptions"))}</h2> <p class="text-gray-600 mb-4">${escape_html(t("selectPayment"))}</p> `);
    if (filteredPaymentOptions().length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-gray-500 italic">No payment options available</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="space-y-3"><!--[-->`);
      const each_array_3 = ensure_array_like(filteredPaymentOptions());
      for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
        let option = each_array_3[$$index_3];
        $$renderer2.push(`<button type="button"${attr_class("w-full border-2 rounded-lg p-4 transition-all hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500", void 0, {
          "border-blue-600": store_get($$store_subs ??= {}, "$form", form).paymentOptionId === option.id,
          "bg-blue-50": store_get($$store_subs ??= {}, "$form", form).paymentOptionId === option.id,
          "border-gray-300": store_get($$store_subs ??= {}, "$form", form).paymentOptionId !== option.id,
          "border-red-500": store_get($$store_subs ??= {}, "$errors", errors).paymentOptionId && store_get($$store_subs ??= {}, "$form", form).paymentOptionId !== option.id
        })}><div class="flex items-center gap-4"><div${attr_class("w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0", void 0, {
          "border-blue-600": store_get($$store_subs ??= {}, "$form", form).paymentOptionId === option.id,
          "bg-blue-600": store_get($$store_subs ??= {}, "$form", form).paymentOptionId === option.id,
          "border-gray-300": store_get($$store_subs ??= {}, "$form", form).paymentOptionId !== option.id
        })}>`);
        if (store_get($$store_subs ??= {}, "$form", form).paymentOptionId === option.id) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div> `);
        if (option.image) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<i${attr_class(`${stringify(option.image)} text-2xl text-gray-700`)}></i>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="text-left flex-1"><h3 class="font-semibold text-gray-800">${escape_html(option.name)}</h3> `);
        if (option.isPreferred) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded mt-1 inline-block">Recommended</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></div></button>`);
      }
      $$renderer2.push(`<!--]--></div> `);
      if (store_get($$store_subs ??= {}, "$errors", errors).paymentOptionId) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-red-500 text-sm mt-2">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).paymentOptionId)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="lg:col-span-1"><div class="bg-white rounded-lg shadow-md p-6 sticky top-24"><h2 class="text-xl font-semibold text-gray-800 mb-4">${escape_html(t("shoppingCart"))}</h2> `);
    if (cart.isEmpty) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-gray-500 text-center py-4">${escape_html(t("cartEmpty"))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="space-y-3 mb-4"><!--[-->`);
      const each_array_4 = ensure_array_like(cart.items);
      for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
        let item = each_array_4[$$index_4];
        $$renderer2.push(`<div class="flex justify-between text-sm border-b pb-2"><div class="flex-1"><p class="font-medium text-gray-800">${escape_html(item.productName)}</p> `);
        if (item.studentName) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-xs text-gray-600 mt-1">${escape_html(item.studentName)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (item.className || item.schoolName) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-xs text-gray-500">`);
          if (item.className) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`${escape_html(item.className)}`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
          if (item.className && item.schoolName) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`,`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
          if (item.schoolName) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`${escape_html(item.schoolName)}`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (item.publicationYear) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-xs text-gray-500">${escape_html(item.publicationYear)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <p class="text-gray-500 mt-1">Qty: ${escape_html(item.quantity)}</p></div> <p class="font-medium text-gray-800">${escape_html(formatPrice(item.price * item.quantity))}</p></div>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="border-t pt-4 mb-4"><div class="flex justify-between items-center mb-2"><span class="text-gray-600">Subtotal:</span> <span class="font-semibold">${escape_html(formatPrice(cart.total))}</span></div> `);
      if (store_get($$store_subs ??= {}, "$form", form).deliveryOptionId) {
        $$renderer2.push("<!--[-->");
        const deliveryOption = filteredDeliveryOptions.find((opt) => opt.id === store_get($$store_subs ??= {}, "$form", form).deliveryOptionId);
        if (deliveryOption) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="flex justify-between items-center mb-2"><span class="text-gray-600">Delivery:</span> <span class="font-semibold">${escape_html(formatPrice(deliveryOption.price))}</span></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="border-t pt-2 mt-2"><div class="flex justify-between items-center"><span class="text-lg font-bold">${escape_html(t("total"))}:</span> <span class="text-xl font-bold text-blue-600">`);
      if (store_get($$store_subs ??= {}, "$form", form).deliveryOptionId) {
        $$renderer2.push("<!--[-->");
        const deliveryOption = filteredDeliveryOptions.find((opt) => opt.id === store_get($$store_subs ??= {}, "$form", form).deliveryOptionId);
        if (deliveryOption) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(formatPrice(cart.total + deliveryOption.price))}`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`${escape_html(formatPrice(cart.total))}`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`${escape_html(formatPrice(cart.total))}`);
      }
      $$renderer2.push(`<!--]--></span></div></div></div> <div class="space-y-3"><button type="submit"${attr("disabled", store_get($$store_subs ??= {}, "$submitting", submitting), true)} class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed">${escape_html(store_get($$store_subs ??= {}, "$submitting", submitting) ? "Processing..." : t("completeOrder"))}</button> <button type="button" class="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium">${escape_html(t("backToCatalogue"))}</button></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></form></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-GeTXLULN.js.map
