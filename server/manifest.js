const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["icons/.gitkeep","icons/README.md","icons/book_medium.png","icons/cards_medium.png","icons/download_medium.png","icons/group_medium.png","icons/group_xl_medium.png","icons/large_medium.png","icons/largecloseup_medium.png","icons/medium_medium.png","icons/mediumcloseup_medium.png","icons/small_medium.png","icons/smallcloseup_medium.png","icons/smallwhitebg_medium.png","logo_small.jpg","robots.txt"]),
	mimeTypes: {".md":"text/markdown",".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.u8CRxXEx.js",app:"_app/immutable/entry/app.Db04-Jny.js",imports:["_app/immutable/entry/start.u8CRxXEx.js","_app/immutable/chunks/Cx_Ee0-d.js","_app/immutable/entry/app.Db04-Jny.js","_app/immutable/chunks/B5RRCds9.js","_app/immutable/chunks/Cx_Ee0-d.js","_app/immutable/chunks/CCfpsn-g.js","_app/immutable/chunks/dTVzOKt_.js","_app/immutable/chunks/DIvLsiiz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('./chunks/0-TAZi6HxY.js')),
			__memo(() => import('./chunks/1-A8fAQdYq.js')),
			__memo(() => import('./chunks/2-DKuTsBTR.js')),
			__memo(() => import('./chunks/3-BuuOYnMJ.js')),
			__memo(() => import('./chunks/4-BUNSVVmS.js').then(function (n) { return n._; })),
			__memo(() => import('./chunks/5-DHNp-y2q.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/payment-notification",
				pattern: /^\/api\/payment-notification\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BY9dLFx-.js'))
			},
			{
				id: "/api/send-email",
				pattern: /^\/api\/send-email\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BZEE7GvX.js'))
			},
			{
				id: "/api/send-mails",
				pattern: /^\/api\/send-mails\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Bdf_KjJL.js'))
			},
			{
				id: "/api/set-language",
				pattern: /^\/api\/set-language\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-5NHiqx5L.js'))
			},
			{
				id: "/api/validate-address",
				pattern: /^\/api\/validate-address\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BLnNHxCv.js'))
			},
			{
				id: "/catalogue",
				pattern: /^\/catalogue\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/checkout",
				pattern: /^\/checkout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CnRUig5-.js'))
			},
			{
				id: "/order-confirmation/[ordernumber]",
				pattern: /^\/order-confirmation\/([^/]+?)\/?$/,
				params: [{"name":"ordernumber","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
