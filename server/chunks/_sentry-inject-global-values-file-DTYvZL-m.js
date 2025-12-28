import { c as commonjsGlobal } from './_commonjsHelpers-Bi63GUIs.js';

var _sentryInjectGlobalValuesFile = {};

var hasRequired_sentryInjectGlobalValuesFile;

function require_sentryInjectGlobalValuesFile () {
	if (hasRequired_sentryInjectGlobalValuesFile) return _sentryInjectGlobalValuesFile;
	hasRequired_sentryInjectGlobalValuesFile = 1;
	!(function() {
	  try {
	    var e = "undefined" != typeof window ? window : "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
	    e.SENTRY_RELEASE = { id: "99069e462683fde0ac533c0f9d57bdbde12d31be" };
	  } catch (e2) {
	  }
	})();
	{
	  try {
	    (function() {
	      var e = "undefined" != typeof window ? window : "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
	      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "842939aa-67f5-4ca3-b510-15431a5a2692", e._sentryDebugIdIdentifier = "sentry-dbid-842939aa-67f5-4ca3-b510-15431a5a2692");
	    })();
	  } catch (e) {
	  }
	}
	globalThis["__sentry_sveltekit_output_dir"] = "build";
	return _sentryInjectGlobalValuesFile;
}

require_sentryInjectGlobalValuesFile();
//# sourceMappingURL=_sentry-inject-global-values-file-DTYvZL-m.js.map
