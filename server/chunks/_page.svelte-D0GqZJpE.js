import { b as attr, s as stringify } from './index3-By4ka_mn.js';
import './context-CgtWMbXp.js';
import './state.svelte-fWl1XcAQ.js';
import { a as getTranslation } from './index6-DwXL8VEN.js';
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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a8ca7b90-46e0-4ab2-9041-6b19efdc7e6f", e._sentryDebugIdIdentifier = "sentry-dbid-a8ca7b90-46e0-4ab2-9041-6b19efdc7e6f");
    })();
  } catch (e) {
  }
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, form } = $$props;
    let language = data.language;
    let code1 = "";
    let code2 = "";
    let code3 = "";
    function t(key) {
      return getTranslation(language, key);
    }
    $$renderer2.push(`<div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4"><div class="w-full max-w-md"><div class="bg-white rounded-lg shadow-lg p-8"><div class="mb-6 text-center"><h1 class="text-2xl font-bold text-gray-800 mb-2">DeSchoolfotograaf.be</h1></div> <p class="text-center text-gray-600 mb-6">${escape_html(t("enterCode"))}</p> <form method="POST" action="?/login" class="space-y-6"><div class="flex gap-3 justify-center"><input type="text" inputmode="numeric" name="code1"${attr("value", code1)} maxlength="3" class="w-20 h-20 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder=""/> <span class="text-3xl text-gray-400 flex items-center">-</span> <input type="text" inputmode="numeric" name="code2"${attr("value", code2)} maxlength="4" class="w-24 h-20 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder=""/> <span class="text-3xl text-gray-400 flex items-center">-</span> <input type="text" inputmode="numeric" name="code3"${attr("value", code3)} maxlength="3" class="w-20 h-20 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder=""/></div> `);
    if (form?.error) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-red-600 text-sm text-center">${escape_html(t(form.error))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">${escape_html(t("continue"))}</button></form> <div class="mt-8 text-center text-sm text-gray-600 space-y-2"><p>${escape_html(t("loginProblems"))} <a${attr("href", `mailto:${stringify(t("contact"))}`)} class="text-blue-600 hover:underline">${escape_html(t("contact"))}</a></p> <p><a href="/terms" class="text-blue-600 hover:underline">${escape_html(t("termsOfSale"))}</a></p> <p class="text-xs text-gray-500 mt-4">${escape_html(t("copyright"))} - DeSchoolfotograaf.be</p></div></div></div></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D0GqZJpE.js.map
