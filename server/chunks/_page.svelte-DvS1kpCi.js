import { c as store_get, e as ensure_array_like, b as attr, a as attr_class, s as stringify, u as unsubscribe_stores } from './index3-By4ka_mn.js';
import { a as getTranslation } from './index6-DwXL8VEN.js';
import './cart.svelte-Bf5wDeb0.js';
import './context-CgtWMbXp.js';
import './state.svelte-fWl1XcAQ.js';
import { p as page } from './stores-_U0bHmSU.js';
import { e as escape_html } from './escaping-B87DnxBH.js';
import './false-vIB0HdZP.js';

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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "262f428f-6a94-4075-8bbd-bf881a593fd4", e._sentryDebugIdIdentifier = "sentry-dbid-262f428f-6a94-4075-8bbd-bf881a593fd4");
    })();
  } catch (e) {
  }
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    let language = data.language;
    const paymentCancelled = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("payment_cancelled");
    function t(key) {
      return getTranslation(language, key);
    }
    let switchingStudent = false;
    let studentCode = "";
    let selectedPhotoId = null;
    $$renderer2.push(`<div class="min-h-screen bg-gray-50"><div class="max-w-7xl mx-auto p-3 sm:p-6"><div class="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6"><h1 class="text-xl sm:text-3xl font-bold text-gray-800">${escape_html(t("welcome"))}, ${escape_html(data.student.firstName)}
				${escape_html(data.student.lastName)}!</h1> <p class="text-sm sm:text-base text-gray-600 mt-2">${escape_html(t("personalCatalogue"))}</p></div> `);
    if (paymentCancelled) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4 sm:mb-6"><div class="flex items-start gap-3"><svg class="w-6 h-6 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div><p class="font-medium text-yellow-800">Payment Cancelled</p> <p class="text-sm text-yellow-700 mt-1">Your payment for order ${escape_html(paymentCancelled)} was cancelled. You can add items to your cart
							and try again.</p></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.siblings && data.siblings.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6"><h2 class="text-base sm:text-lg font-semibold text-gray-800 mb-3">${escape_html(t("switchToSibling"))}</h2> <div class="flex flex-wrap gap-2"><!--[-->`);
      const each_array = ensure_array_like(data.siblings);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let sibling = each_array[$$index];
        $$renderer2.push(`<form method="POST" action="?/switchStudent"><input type="hidden" name="studentId"${attr("value", sibling.id)}/> <button type="submit"${attr("disabled", switchingStudent, true)} class="px-4 py-2 rounded-lg font-medium transition-colors bg-purple-100 text-purple-700 hover:bg-purple-200 disabled:opacity-50 disabled:cursor-not-allowed">${escape_html(sibling.firstName)}
								${escape_html(sibling.lastName)}</button></form>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.availableYears && data.availableYears.length > 1) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6"><h2 class="text-base sm:text-lg font-semibold text-gray-800 mb-3">${escape_html(t("selectYear"))}</h2> <div class="flex flex-wrap gap-2"><!--[-->`);
      const each_array_1 = ensure_array_like(data.availableYears);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let year = each_array_1[$$index_1];
        $$renderer2.push(`<a${attr("href", `?year=${stringify(year)}`)}${attr_class(`px-4 py-2 rounded-lg font-medium transition-colors ${stringify(data.selectedYear === year ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")}`)}>${escape_html(year)}</a>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6"><h2 class="text-base sm:text-lg font-semibold text-gray-800 mb-3">${escape_html(t("addAnotherStudent"))}</h2> <form method="POST" action="?/addStudentByCode"><div class="flex flex-col sm:flex-row gap-2"><input type="text" name="code"${attr("value", studentCode)}${attr("placeholder", t("enterStudentCode"))} class="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm sm:text-base"/> <button type="submit"${attr("disabled", studentCode.replace(/\D/g, "").length !== 10, true)} class="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base">${escape_html(t("addStudent"))}</button></div></form></div> <div class="bg-white rounded-lg shadow-md p-3 sm:p-6 mb-4 sm:mb-6"><h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-4">${escape_html(t("yourPhotos"))}</h2> `);
    if (data.photos.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-center py-12 text-gray-500"><svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <p>${escape_html(t("noPhotos"))}</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"><!--[-->`);
      const each_array_2 = ensure_array_like(data.photos);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let photo = each_array_2[$$index_2];
        $$renderer2.push(`<button type="button"${attr_class("border rounded-lg overflow-hidden hover:shadow-lg transition-all relative group cursor-pointer", void 0, {
          "ring-4": selectedPhotoId === photo.id,
          "ring-blue-500": selectedPhotoId === photo.id
        })}><div class="absolute top-2 right-2 z-10"><div${attr_class("w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors", void 0, {
          "bg-blue-600": selectedPhotoId === photo.id,
          "border-blue-600": selectedPhotoId === photo.id,
          "bg-white": selectedPhotoId !== photo.id,
          "border-gray-300": selectedPhotoId !== photo.id,
          "group-hover:border-blue-400": selectedPhotoId !== photo.id
        })}>`);
        if (selectedPhotoId === photo.id) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><path d="M20 6L9 17l-5-5"></path></svg>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></div> <div class="aspect-square bg-gray-200 flex items-center justify-center"><img${attr("src", photo.path)}${attr("alt", photo.name)} class="w-full h-full object-cover"/></div> <div class="p-2 bg-white"><p class="text-sm text-gray-700 text-center truncate">${escape_html(photo.name)}</p></div></button>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="bg-white rounded-lg shadow-md p-3 sm:p-6"><h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-4">${escape_html(t("products"))}</h2> `);
    if (!data.products || data.products.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-center py-12 text-gray-500"><svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> <p>${escape_html(t("noProducts"))}</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="text-center py-12 text-blue-600"><svg class="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <p class="text-lg font-medium">${escape_html(t("selectPhotoToViewProducts"))}</p></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DvS1kpCi.js.map
