import { h as head, e as ensure_array_like, a as attr_class, b as attr, s as stringify } from './index3-By4ka_mn.js';
import { b as availableLanguages, a as getTranslation } from './index6-DwXL8VEN.js';
import './context-CgtWMbXp.js';
import './state.svelte-fWl1XcAQ.js';
import { c as cart } from './cart.svelte-Bf5wDeb0.js';
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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6eb827f5-88ad-4959-9bc7-cccc0a1581d2", e._sentryDebugIdIdentifier = "sentry-dbid-6eb827f5-88ad-4959-9bc7-cccc0a1581d2");
    })();
  } catch (e) {
  }
}
const favicon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, data } = $$props;
    let language = data.language;
    function t(key) {
      return getTranslation(language, key);
    }
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="icon"${attr("href", favicon)}/>`);
    });
    if (data.student) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<header class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"><div class="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4"><div class="flex flex-col gap-3 sm:hidden"><div><a href="/catalogue" class="block hover:text-blue-600 transition-colors"><h1 class="text-base font-semibold text-gray-800">${escape_html(data.student.firstName)}
							${escape_html(data.student.lastName)}</h1></a></div> <div class="flex items-center justify-between gap-2"><div class="flex gap-1"><!--[-->`);
      const each_array = ensure_array_like(availableLanguages);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let lang = each_array[$$index];
        $$renderer2.push(`<button${attr_class("px-2 py-1 rounded text-xs font-medium uppercase hover:bg-blue-500 hover:text-white transition-colors", void 0, {
          "bg-blue-600": language === lang,
          "text-white": language === lang,
          "bg-gray-100": language !== lang,
          "text-gray-700": language !== lang
        })}>${escape_html(lang)}</button>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="flex items-center gap-2"><button class="relative px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> `);
      if (cart.totalItems > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">${escape_html(cart.totalItems)}</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></button> <form method="POST" action="/logout"><button class="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">${escape_html(t("logout"))}</button></form></div></div></div> <div class="hidden sm:flex justify-between items-center"><div><a href="/catalogue" class="block hover:text-blue-600 transition-colors"><h1 class="text-lg font-semibold text-gray-800">${escape_html(data.student.firstName)}
							${escape_html(data.student.lastName)}</h1></a></div> <div class="flex items-center gap-4"><div class="flex gap-2"><!--[-->`);
      const each_array_1 = ensure_array_like(availableLanguages);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let lang = each_array_1[$$index_1];
        $$renderer2.push(`<button${attr_class("px-3 py-1.5 rounded text-sm font-medium uppercase hover:bg-blue-500 hover:text-white transition-colors", void 0, {
          "bg-blue-600": language === lang,
          "text-white": language === lang,
          "bg-gray-100": language !== lang,
          "text-gray-700": language !== lang
        })}>${escape_html(lang)}</button>`);
      }
      $$renderer2.push(`<!--]--></div> <button class="relative px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> <span class="hidden sm:inline">${escape_html(t("cart"))}</span> `);
      if (cart.totalItems > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">${escape_html(cart.totalItems)}</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></button> <form method="POST" action="/logout"><button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">${escape_html(t("logout"))}</button></form></div></div></div></header>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (cart.isOpen) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="fixed inset-0 bg-gray-900/30 backdrop-blur-sm z-50" role="button" tabindex="0" aria-label="Close cart"><div class="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl overflow-hidden" role="dialog" aria-label="Shopping cart" tabindex="-1"><div class="p-4 sm:p-6 h-full flex flex-col"><div class="flex justify-between items-center mb-4 sm:mb-6 flex-shrink-0"><h2 class="text-xl sm:text-2xl font-bold">${escape_html(t("shoppingCart"))}</h2> <button class="text-gray-500 hover:text-gray-700" aria-label="Close cart"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> `);
      if (cart.isEmpty) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex-1 flex items-center justify-center text-gray-500"><div class="text-center"><svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> <p>${escape_html(t("cartEmpty"))}</p></div></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="flex-1 overflow-y-auto mb-4"><!--[-->`);
        const each_array_2 = ensure_array_like(cart.items);
        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
          let item = each_array_2[$$index_2];
          $$renderer2.push(`<div class="border-b border-gray-200 py-4"><div class="flex justify-between items-start mb-2"><div class="flex-1"><h3 class="font-medium text-gray-800">${escape_html(item.productName)}</h3> `);
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
          $$renderer2.push(`<!--]--> <p class="text-sm text-gray-600 mt-1">€${escape_html(item.price.toFixed(2))}</p></div> <button class="text-red-500 hover:text-red-700"${attr("aria-label", `Remove ${stringify(item.productName)} from cart`)}><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div> <div class="flex items-center gap-2"><button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button> <input type="number"${attr("value", item.quantity)} class="w-16 text-center border border-gray-300 rounded px-2 py-1" min="1"/> <button class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button> <span class="ml-auto font-medium">€${escape_html((item.price * item.quantity).toFixed(2))}</span></div></div>`);
        }
        $$renderer2.push(`<!--]--></div> <div class="border-t border-gray-200 pt-4 flex-shrink-0 bg-white"><div class="flex justify-between items-center mb-4"><span class="text-base sm:text-lg font-bold">${escape_html(t("total"))}:</span> <span class="text-xl sm:text-2xl font-bold text-blue-600">€${escape_html(cart.total.toFixed(2))}</span></div> <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">${escape_html(t("checkout"))}</button></div>`);
      }
      $$renderer2.push(`<!--]--></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    children($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BTenIlB3.js.map
