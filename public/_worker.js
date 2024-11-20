var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";

// node_modules/isbot/index.mjs
function _iterableToArrayLimit(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t)
          return;
        f = !1;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
          ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _toPrimitive(t, r) {
  if (typeof t != "object" || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return typeof i == "symbol" ? i : String(i);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", {
    writable: !1
  }), Constructor;
}
function _defineProperty(obj, key, value) {
  return key = _toPropertyKey(key), key in obj ? Object.defineProperty(obj, key, {
    value,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : obj[key] = value, obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  return _classApplyDescriptorSet(receiver, descriptor, value), value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action3) {
  if (!privateMap.has(receiver))
    throw new TypeError("attempted to " + action3 + " private field on non-instance");
  return privateMap.get(receiver);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  return descriptor.get ? descriptor.get.call(receiver) : descriptor.value;
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set)
    descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable)
      throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
  }
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver))
    throw new TypeError("attempted to get private field on non-instance");
  return fn;
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap), privateMap.set(obj, value);
}
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet), privateSet.add(obj);
}
var list = [
  " daum[ /]",
  " deusu/",
  " yadirectfetcher",
  "(?:^| )site",
  "(?:^|[^g])news",
  "@[a-z]",
  "\\(at\\)[a-z]",
  "\\(github\\.com/",
  "\\[at\\][a-z]",
  "^12345",
  "^<",
  "^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$",
  "^[^ ]{50,}$",
  "^active",
  "^ad muncher",
  "^amaya",
  "^anglesharp/",
  "^anonymous",
  "^avsdevicesdk/",
  "^axios/",
  "^bidtellect/",
  "^biglotron",
  "^btwebclient/",
  "^castro",
  "^clamav[ /]",
  "^client/",
  "^cobweb/",
  "^coccoc",
  "^custom",
  "^ddg[_-]android",
  "^discourse",
  "^dispatch/\\d",
  "^downcast/",
  "^duckduckgo",
  "^facebook",
  "^fdm[ /]\\d",
  "^getright/",
  "^gozilla/",
  "^hatena",
  "^hobbit",
  "^hotzonu",
  "^hwcdn/",
  "^jeode/",
  "^jetty/",
  "^jigsaw",
  "^linkdex",
  "^lwp[-: ]",
  "^metauri",
  "^microsoft bits",
  "^movabletype",
  "^mozilla/\\d\\.\\d \\(compatible;?\\)$",
  "^mozilla/\\d\\.\\d \\w*$",
  "^navermailapp",
  "^netsurf",
  "^offline explorer",
  "^php",
  "^postman",
  "^postrank",
  "^python",
  "^read",
  "^reed",
  "^restsharp/",
  "^snapchat",
  "^space bison",
  "^svn",
  "^swcd ",
  "^taringa",
  "^test certificate info",
  "^thumbor/",
  "^tumblr/",
  "^user-agent:mozilla",
  "^valid",
  "^venus/fedoraplanet",
  "^w3c",
  "^webbandit/",
  "^webcopier",
  "^wget",
  "^whatsapp",
  "^xenu link sleuth",
  "^yahoo",
  "^yandex",
  "^zdm/\\d",
  "^zoom marketplace/",
  "^{{.*}}$",
  "adbeat\\.com",
  "appinsights",
  "archive",
  "ask jeeves/teoma",
  "bit\\.ly/",
  "bluecoat drtr",
  "bot",
  "browsex",
  "burpcollaborator",
  "capture",
  "catch",
  "check",
  "chrome-lighthouse",
  "chromeframe",
  "cloud",
  "crawl",
  "cryptoapi",
  "dareboost",
  "datanyze",
  "dataprovider",
  "dejaclick",
  "dmbrowser",
  "download",
  "evc-batch/",
  "feed",
  "firephp",
  "freesafeip",
  "gomezagent",
  "google",
  "headlesschrome/",
  "http",
  "httrack",
  "hubspot marketing grader",
  "hydra",
  "ibisbrowser",
  "images",
  "inspect",
  "iplabel",
  "ips-agent",
  "java",
  "library",
  "mail\\.ru/",
  "manager",
  "monitor",
  "morningscore/",
  "neustar wpm",
  "nutch",
  "offbyone",
  "optimize",
  "pageburst",
  "pagespeed",
  "perl",
  "phantom",
  "pingdom",
  "powermarks",
  "preview",
  "proxy",
  "ptst[ /]\\d",
  "reader",
  "rexx;",
  "rigor",
  "rss",
  "scan",
  "scrape",
  "search",
  "serp ?reputation ?management",
  "server",
  "sogou",
  "sparkler/",
  "speedcurve",
  "spider",
  "splash",
  "statuscake",
  "stumbleupon\\.com",
  "supercleaner",
  "synapse",
  "synthetic",
  "torrent",
  "tracemyfile",
  "transcoder",
  "trendsmapresolver",
  "twingly recon",
  "url",
  "virtuoso",
  "wappalyzer",
  "webglance",
  "webkit2png",
  "websitemetadataretriever",
  "whatcms/",
  "wordpress",
  "zgrab"
];
function amend(list2) {
  try {
    new RegExp("(?<! cu)bot").test("dangerbot");
  } catch {
    return list2;
  }
  return [
    // Addresses: Cubot device
    ["bot", "(?<! cu)bot"],
    // Addresses: Android webview
    ["google", "(?<! (?:channel/|google/))google(?!(app|/google| pixel))"],
    // Addresses: libhttp browser
    ["http", "(?<!(?:lib))http"],
    // Addresses: java based browsers
    ["java", "java(?!;)"],
    // Addresses: Yandex Search App
    ["search", "(?<! ya(?:yandex)?)search"]
  ].forEach(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 2), search = _ref2[0], replace = _ref2[1], index = list2.lastIndexOf(search);
    ~index && list2.splice(index, 1, replace);
  }), list2;
}
amend(list);
var flags = "i", _list = /* @__PURE__ */ new WeakMap(), _pattern = /* @__PURE__ */ new WeakMap(), _update = /* @__PURE__ */ new WeakSet(), _index = /* @__PURE__ */ new WeakSet(), Isbot = /* @__PURE__ */ function() {
  function Isbot2(patterns) {
    var _this = this;
    _classCallCheck(this, Isbot2), _classPrivateMethodInitSpec(this, _index), _classPrivateMethodInitSpec(this, _update), _classPrivateFieldInitSpec(this, _list, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldInitSpec(this, _pattern, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldSet(this, _list, patterns || list.slice()), _classPrivateMethodGet(this, _update, _update2).call(this);
    var isbot2 = function(ua) {
      return _this.test(ua);
    };
    return Object.defineProperties(isbot2, Object.entries(Object.getOwnPropertyDescriptors(Isbot2.prototype)).reduce(function(accumulator, _ref) {
      var _ref2 = _slicedToArray(_ref, 2), prop = _ref2[0], descriptor = _ref2[1];
      return typeof descriptor.value == "function" && Object.assign(accumulator, _defineProperty({}, prop, {
        value: _this[prop].bind(_this)
      })), typeof descriptor.get == "function" && Object.assign(accumulator, _defineProperty({}, prop, {
        get: function() {
          return _this[prop];
        }
      })), accumulator;
    }, {}));
  }
  return _createClass(Isbot2, [{
    key: "pattern",
    get: (
      /**
       * Get a clone of the pattern
       * @type RegExp
       */
      function() {
        return new RegExp(_classPrivateFieldGet(this, _pattern));
      }
    )
    /**
     * Match given string against out pattern
     * @param  {string} ua User Agent string
     * @returns {boolean}
     */
  }, {
    key: "test",
    value: function(ua) {
      return Boolean(ua) && _classPrivateFieldGet(this, _pattern).test(ua);
    }
  }, {
    key: "isbot",
    value: function(ua) {
      return Boolean(ua) && _classPrivateFieldGet(this, _pattern).test(ua);
    }
    /**
     * Get the match for strings' known crawler pattern
     * @param  {string} ua User Agent string
     * @returns {string|null}
     */
  }, {
    key: "find",
    value: function() {
      var ua = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", match = ua.match(_classPrivateFieldGet(this, _pattern));
      return match && match[0];
    }
    /**
     * Get the patterns that match user agent string if any
     * @param  {string} ua User Agent string
     * @returns {string[]}
     */
  }, {
    key: "matches",
    value: function() {
      var ua = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return _classPrivateFieldGet(this, _list).filter(function(entry2) {
        return new RegExp(entry2, flags).test(ua);
      });
    }
    /**
     * Clear all patterns that match user agent
     * @param  {string} ua User Agent string
     * @returns {void}
     */
  }, {
    key: "clear",
    value: function() {
      var ua = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      this.exclude(this.matches(ua));
    }
    /**
     * Extent patterns for known crawlers
     * @param  {string[]} filters
     * @returns {void}
     */
  }, {
    key: "extend",
    value: function() {
      var _this2 = this, filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      [].push.apply(_classPrivateFieldGet(this, _list), filters.filter(function(rule) {
        return _classPrivateMethodGet(_this2, _index, _index2).call(_this2, rule) === -1;
      }).map(function(filter) {
        return filter.toLowerCase();
      })), _classPrivateMethodGet(this, _update, _update2).call(this);
    }
    /**
     * Exclude patterns from bot pattern rule
     * @param  {string[]} filters
     * @returns {void}
     */
  }, {
    key: "exclude",
    value: function() {
      for (var filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], length = filters.length; length--; ) {
        var index = _classPrivateMethodGet(this, _index, _index2).call(this, filters[length]);
        index > -1 && _classPrivateFieldGet(this, _list).splice(index, 1);
      }
      _classPrivateMethodGet(this, _update, _update2).call(this);
    }
    /**
     * Create a new Isbot instance using given list or self's list
     * @param  {string[]} [list]
     * @returns {Isbot}
     */
  }, {
    key: "spawn",
    value: function(list2) {
      return new Isbot2(list2 || _classPrivateFieldGet(this, _list));
    }
  }]), Isbot2;
}();
function _update2() {
  _classPrivateFieldSet(this, _pattern, new RegExp(_classPrivateFieldGet(this, _list).join("|"), flags));
}
function _index2(rule) {
  return _classPrivateFieldGet(this, _list).indexOf(rule.toLowerCase());
}
var isbot = new Isbot();

// app/entry.server.tsx
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  Layout: () => Layout,
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LMIW5BEX.css";

// app/styles/animations.css
var animations_default = "/build/_assets/animations-5YZZJPKI.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: animations_default },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap" }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "zh-CN", className: "h-full", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "h-full font-serif bg-gradient-to-b from-yellow-50/30 to-yellow-100/30", children: [
      children,
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ jsxDEV2(Layout, { children: /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.divine.tsx
var layout_divine_exports = {};
__export(layout_divine_exports, {
  action: () => action,
  default: () => Divine,
  loader: () => loader
});
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
async function loader({ request }) {
  let signNumber = new URL(request.url).searchParams.get("signNumber");
  return signNumber ? json({ signNumber }) : redirect("/");
}
async function action({ request }) {
  let formData = await request.formData(), signNumber = formData.get("signNumber");
  return formData.get("cupResult") === "yin" ? redirect("/") : redirect(`/result?signNumber=${signNumber}`);
}
function Divine() {
  let { signNumber } = useLoaderData(), [isShaking, setIsShaking] = useState(!1), [showResult, setShowResult] = useState(!1), [cupResult, setCupResult] = useState(null), throwCups = () => {
    setIsShaking(!0), setShowResult(!1);
    let result = Math.random() < 0.3 ? "yang" : "yin";
    setTimeout(() => {
      setIsShaking(!1), setCupResult(result), setShowResult(!0);
    }, 1e3);
  };
  return useEffect(() => {
    setIsShaking(!1), setShowResult(!1), setCupResult(null);
  }, []), /* @__PURE__ */ jsxDEV3("div", { className: "min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3", children: [
    /* @__PURE__ */ jsxDEV3("div", { className: "text-center py-6", children: /* @__PURE__ */ jsxDEV3("div", { className: "bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-6 mx-2 inline-block", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "mb-3", children: /* @__PURE__ */ jsxDEV3("i", { className: "fas fa-hands-praying text-yellow-800/90 text-3xl" }, void 0, !1, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("h2", { className: "text-xl font-bold text-yellow-900 mb-2", children: "\u6295\u63B7\u5723\u676F" }, void 0, !1, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { className: "text-yellow-900/80 text-xs", children: "\u8BDA\u5FC3\u7948\u7977\uFF0C\u7B49\u5F85\u795E\u660E\u6307\u793A" }, void 0, !1, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "flex-1 flex flex-col items-center justify-center px-4", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "relative w-full max-w-xs aspect-square bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV3("div", { className: `transform transition-all duration-500 ${isShaking ? "animate-shake" : ""}`, children: /* @__PURE__ */ jsxDEV3("div", { className: "relative", children: [
        /* @__PURE__ */ jsxDEV3("i", { className: "fas fa-moon text-6xl text-yellow-800/80 absolute top-0 left-0 transform -rotate-45" }, void 0, !1, {
          fileName: "app/routes/_layout.divine.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV3("i", { className: "fas fa-moon text-6xl text-yellow-800/80 absolute top-0 right-0 transform rotate-45" }, void 0, !1, {
          fileName: "app/routes/_layout.divine.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      showResult && /* @__PURE__ */ jsxDEV3("div", { className: "mt-6 text-center", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: `text-lg font-bold ${cupResult === "yang" ? "text-yellow-700" : "text-yellow-900/70"}`, children: cupResult === "yang" ? "\u5723\u676F\uFF08\u9633\u676F\uFF09" : "\u9634\u676F" }, void 0, !1, {
          fileName: "app/routes/_layout.divine.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("p", { className: "mt-2 text-sm text-yellow-900/80", children: cupResult === "yang" ? "\u606D\u559C\uFF0C\u5F97\u5230\u5723\u676F\uFF01\u795E\u660E\u5DF2\u7136\u5E94\u5141\uFF0C\u53EF\u4EE5\u89E3\u7B7E\u3002" : "\u672A\u5F97\u5723\u676F\uFF0C\u9700\u91CD\u65B0\u6C42\u7B7E\u3002" }, void 0, !1, {
          fileName: "app/routes/_layout.divine.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "px-4 space-y-4", children: showResult ? /* @__PURE__ */ jsxDEV3(Form, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV3("input", { type: "hidden", name: "signNumber", value: signNumber }, void 0, !1, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3("input", { type: "hidden", name: "cupResult", value: cupResult || "" }, void 0, !1, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(
        "button",
        {
          type: "submit",
          className: `w-full py-3 px-4 text-base font-medium rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50
                ${cupResult === "yang" ? "text-yellow-50 bg-gradient-to-r from-yellow-800 to-yellow-700 hover:from-yellow-700 hover:to-yellow-600" : "text-yellow-900 bg-gradient-to-r from-amber-200 to-yellow-200 hover:from-amber-300 hover:to-yellow-300 border border-yellow-900/20"}`,
          children: [
            /* @__PURE__ */ jsxDEV3("i", { className: `mr-2 fas ${cupResult === "yang" ? "fa-book-open" : "fa-redo"}` }, void 0, !1, {
              fileName: "app/routes/_layout.divine.tsx",
              lineNumber: 122,
              columnNumber: 15
            }, this),
            cupResult === "yang" ? "\u67E5\u770B\u89E3\u7B7E" : "\u91CD\u65B0\u6C42\u7B7E"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_layout.divine.tsx",
          lineNumber: 114,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this) : /* @__PURE__ */ jsxDEV3(
      "button",
      {
        onClick: throwCups,
        disabled: isShaking,
        className: "w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50 disabled:opacity-50",
        children: [
          /* @__PURE__ */ jsxDEV3("i", { className: "fas fa-hands-praying mr-2" }, void 0, !1, {
            fileName: "app/routes/_layout.divine.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this),
          isShaking ? "\u8BDA\u5FC3\u7948\u7977..." : "\u6295\u63B7\u5723\u676F"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 102,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "px-4 py-6", children: /* @__PURE__ */ jsxDEV3("div", { className: "bg-white/60 rounded-lg p-3 border border-yellow-900/10", children: /* @__PURE__ */ jsxDEV3("p", { className: "text-yellow-900/80 text-xs leading-5", children: [
      /* @__PURE__ */ jsxDEV3("i", { className: "fas fa-info-circle mr-1 text-yellow-700" }, void 0, !1, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this),
      "\u6295\u63B7\u5723\u676F\u65F6\u9700\u8654\u8BDA\u7948\u7977\u3002\u82E5\u5F97\u5723\u676F\uFF08\u9633\u676F\uFF09\uFF0C\u5219\u53EF\u89E3\u7B7E\uFF1B\u82E5\u4E3A\u9634\u676F\uFF0C\u9700\u91CD\u65B0\u6C42\u7B7E\u3002"
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.divine.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.result.tsx
var layout_result_exports = {};
__export(layout_result_exports, {
  default: () => Result,
  loader: () => loader2
});
import { json as json2, redirect as redirect2 } from "@remix-run/node";
import { Link, useLoaderData as useLoaderData2 } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var SIGN_MEANINGS = {
  1: {
    title: "\u7B2C\u4E00\u7B7E \u4E0A\u4E0A\u7B7E",
    poem: `\u4E00\u671D\u5929\u5B50\u5750\u91D1\u92AE\uFF0C\u56DB\u6D77\u5347\u5E73\u4E50\u81EA\u7136\u3002
\u592A\u5E73\u666F\u8C61\u4EBA\u96BE\u89C1\uFF0C\u98CE\u8C03\u96E8\u987A\u56FD\u4E30\u5E74\u3002`,
    meaning: "\u6B64\u7B7E\u4E3A\u4E0A\u4E0A\u7B7E\uFF0C\u9884\u793A\u7740\u8BF8\u4E8B\u987A\u9042\uFF0C\u524D\u7A0B\u5149\u660E\u3002\u5982\u540C\u5929\u5B50\u767B\u57FA\uFF0C\u56FD\u6CF0\u6C11\u5B89\uFF0C\u98CE\u8C03\u96E8\u987A\u3002",
    advice: "\u5B9C\u8FDB\u53D6\uFF0C\u53EF\u8C0B\u4E8B\uFF0C\u8BF8\u4E8B\u7686\u5B9C\u3002",
    explanation: {
      general: "\u6574\u4F53\u8FD0\u52BF\u6781\u597D\uFF0C\u53EF\u4EE5\u5927\u80C6\u5411\u524D\u3002",
      fortune: "\u8D22\u8FD0\u4EA8\u901A\uFF0C\u6B63\u8D22\u504F\u8D22\u7686\u6709\u8FDB\u8D26\u3002",
      health: "\u8EAB\u4F53\u5EB7\u5065\uFF0C\u7CBE\u795E\u6109\u60A6\u3002",
      love: "\u59FB\u7F18\u7F8E\u6EE1\uFF0C\u6709\u60C5\u4EBA\u7EC8\u6210\u7737\u5C5E\u3002",
      career: "\u4E8B\u4E1A\u84B8\u84B8\u65E5\u4E0A\uFF0C\u6709\u5347\u8FC1\u4E4B\u8C61\u3002"
    }
  }
  // 后续可添加更多签文内容
};
async function loader2({ request }) {
  let signNumber = new URL(request.url).searchParams.get("signNumber");
  if (!signNumber)
    return redirect2("/");
  let signMeaning = SIGN_MEANINGS[1] || {
    title: `\u7B2C${signNumber}\u7B7E`,
    poem: "\u6682\u65E0\u7B7E\u6587",
    meaning: "\u6682\u65E0\u89E3\u91CA",
    advice: "\u6682\u65E0\u5EFA\u8BAE",
    explanation: {
      general: "\u6682\u65E0\u8BE6\u89E3",
      fortune: "\u6682\u65E0\u8BE6\u89E3",
      health: "\u6682\u65E0\u8BE6\u89E3",
      love: "\u6682\u65E0\u8BE6\u89E3",
      career: "\u6682\u65E0\u8BE6\u89E3"
    }
  };
  return json2({ signNumber: parseInt(signNumber, 10), signMeaning });
}
function Result() {
  let { signNumber, signMeaning } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV4("div", { className: "min-h-[calc(100vh-6rem)] bg-amber-50/30 py-3 px-4", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "text-center mb-6", children: /* @__PURE__ */ jsxDEV4("div", { className: "inline-block bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-6 py-4", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "mb-2", children: /* @__PURE__ */ jsxDEV4("i", { className: "fas fa-scroll text-yellow-800/90 text-2xl" }, void 0, !1, {
        fileName: "app/routes/_layout.result.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_layout.result.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("h1", { className: "text-xl font-bold text-yellow-900", children: signMeaning.title }, void 0, !1, {
        fileName: "app/routes/_layout.result.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.result.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout.result.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4", children: [
        /* @__PURE__ */ jsxDEV4("h2", { className: "text-base font-medium text-yellow-900 mb-3 flex items-center", children: [
          /* @__PURE__ */ jsxDEV4("i", { className: "fas fa-feather-alt mr-2" }, void 0, !1, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          "\u7B7E\u8BD7"
        ] }, void 0, !0, {
          fileName: "app/routes/_layout.result.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "bg-white/60 rounded-lg p-4 border border-yellow-900/10", children: /* @__PURE__ */ jsxDEV4("p", { className: "text-yellow-900/90 text-sm whitespace-pre-line leading-relaxed", children: signMeaning.poem }, void 0, !1, {
          fileName: "app/routes/_layout.result.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_layout.result.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.result.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4", children: [
        /* @__PURE__ */ jsxDEV4("h2", { className: "text-base font-medium text-yellow-900 mb-3 flex items-center", children: [
          /* @__PURE__ */ jsxDEV4("i", { className: "fas fa-book-open mr-2" }, void 0, !1, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          "\u89E3\u7B7E"
        ] }, void 0, !0, {
          fileName: "app/routes/_layout.result.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "bg-white/60 rounded-lg p-4 border border-yellow-900/10", children: /* @__PURE__ */ jsxDEV4("p", { className: "text-yellow-900/90 text-sm leading-relaxed", children: signMeaning.meaning }, void 0, !1, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "bg-white/60 rounded-lg p-4 border border-yellow-900/10", children: /* @__PURE__ */ jsxDEV4("p", { className: "text-yellow-900/90 text-sm leading-relaxed", children: [
            /* @__PURE__ */ jsxDEV4("span", { className: "font-medium", children: "\u5EFA\u8BAE\uFF1A" }, void 0, !1, {
              fileName: "app/routes/_layout.result.tsx",
              lineNumber: 93,
              columnNumber: 17
            }, this),
            signMeaning.advice
          ] }, void 0, !0, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_layout.result.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.result.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4", children: [
        /* @__PURE__ */ jsxDEV4("h2", { className: "text-base font-medium text-yellow-900 mb-3 flex items-center", children: [
          /* @__PURE__ */ jsxDEV4("i", { className: "fas fa-list-ul mr-2" }, void 0, !1, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          "\u8BE6\u89E3"
        ] }, void 0, !0, {
          fileName: "app/routes/_layout.result.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "bg-white/60 rounded-lg p-3 border border-yellow-900/10", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsxDEV4("i", { className: "fas fa-star text-yellow-800/80 mt-0.5" }, void 0, !1, {
              fileName: "app/routes/_layout.result.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4("p", { className: "text-sm text-yellow-900/90 flex-1", children: [
              /* @__PURE__ */ jsxDEV4("span", { className: "font-medium", children: "\u603B\u8BBA\uFF1A" }, void 0, !1, {
                fileName: "app/routes/_layout.result.tsx",
                lineNumber: 111,
                columnNumber: 19
              }, this),
              signMeaning.explanation.general
            ] }, void 0, !0, {
              fileName: "app/routes/_layout.result.tsx",
              lineNumber: 110,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 108,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "bg-white/60 rounded-lg p-3 border border-yellow-900/10", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsxDEV4("i", { className: "fas fa-coins text-yellow-800/80 mt-0.5" }, void 0, !1, {
              fileName: "app/routes/_layout.result.tsx",
              lineNumber: 118,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4("p", { className: "text-sm text-yellow-900/90 flex-1", children: [
              /* @__PURE__ */ jsxDEV4("span", { className: "font-medium", children: "\u8D22\u8FD0\uFF1A" }, void 0, !1, {
                fileName: "app/routes/_layout.result.tsx",
                lineNumber: 120,
                columnNumber: 19
              }, this),
              signMeaning.explanation.fortune
            ] }, void 0, !0, {
              fileName: "app/routes/_layout.result.tsx",
              lineNumber: 119,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 117,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 116,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "bg-white/60 rounded-lg p-3 border border-yellow-900/10", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsxDEV4("i", { className: "fas fa-heart text-yellow-800/80 mt-0.5" }, void 0, !1, {
              fileName: "app/routes/_layout.result.tsx",
              lineNumber: 127,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4("p", { className: "text-sm text-yellow-900/90 flex-1", children: [
              /* @__PURE__ */ jsxDEV4("span", { className: "font-medium", children: "\u59FB\u7F18\uFF1A" }, void 0, !1, {
                fileName: "app/routes/_layout.result.tsx",
                lineNumber: 129,
                columnNumber: 19
              }, this),
              signMeaning.explanation.love
            ] }, void 0, !0, {
              fileName: "app/routes/_layout.result.tsx",
              lineNumber: 128,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 125,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "bg-white/60 rounded-lg p-3 border border-yellow-900/10", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsxDEV4("i", { className: "fas fa-briefcase text-yellow-800/80 mt-0.5" }, void 0, !1, {
              fileName: "app/routes/_layout.result.tsx",
              lineNumber: 136,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4("p", { className: "text-sm text-yellow-900/90 flex-1", children: [
              /* @__PURE__ */ jsxDEV4("span", { className: "font-medium", children: "\u4E8B\u4E1A\uFF1A" }, void 0, !1, {
                fileName: "app/routes/_layout.result.tsx",
                lineNumber: 138,
                columnNumber: 19
              }, this),
              signMeaning.explanation.career
            ] }, void 0, !0, {
              fileName: "app/routes/_layout.result.tsx",
              lineNumber: 137,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "bg-white/60 rounded-lg p-3 border border-yellow-900/10", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsxDEV4("i", { className: "fas fa-heart-pulse text-yellow-800/80 mt-0.5" }, void 0, !1, {
              fileName: "app/routes/_layout.result.tsx",
              lineNumber: 145,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4("p", { className: "text-sm text-yellow-900/90 flex-1", children: [
              /* @__PURE__ */ jsxDEV4("span", { className: "font-medium", children: "\u5065\u5EB7\uFF1A" }, void 0, !1, {
                fileName: "app/routes/_layout.result.tsx",
                lineNumber: 147,
                columnNumber: 19
              }, this),
              signMeaning.explanation.health
            ] }, void 0, !0, {
              fileName: "app/routes/_layout.result.tsx",
              lineNumber: 146,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 144,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 143,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_layout.result.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.result.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.result.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "mt-6 mb-4", children: /* @__PURE__ */ jsxDEV4(
      Link,
      {
        to: "/",
        className: "block w-full py-3 px-4 text-yellow-900 text-base font-medium bg-gradient-to-r from-amber-200 to-yellow-200 rounded-lg shadow-md transition-all duration-300 hover:from-amber-300 hover:to-yellow-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50 border border-yellow-900/20 text-center",
        children: [
          /* @__PURE__ */ jsxDEV4("i", { className: "fas fa-home mr-2" }, void 0, !1, {
            fileName: "app/routes/_layout.result.tsx",
            lineNumber: 162,
            columnNumber: 11
          }, this),
          "\u8FD4\u56DE\u9996\u9875"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_layout.result.tsx",
        lineNumber: 158,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_layout.result.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.result.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/routes/_layout._index.tsx
var layout_index_exports = {};
__export(layout_index_exports, {
  default: () => Index,
  meta: () => meta
});
import { Form as Form2 } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "\u9EC4\u5927\u4ED9\u7075\u7B7E\u6BBF\u5802 - \u8654\u8BDA\u6C42\u7B7E" },
  { name: "description", content: "\u9EC4\u5927\u4ED9\u7075\u7B7E\u6BBF\u5802\uFF0C\u627F\u8499\u9EC4\u5927\u4ED9\u5E08\u6069\u51C6\uFF0C\u4F20\u627F\u53E4\u6CD5\uFF0C\u6307\u5F15\u8FF7\u6D25" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV5("div", { className: "min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-3 mx-2 text-center", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "mb-2", children: /* @__PURE__ */ jsxDEV5("i", { className: "fas fa-dharmachakra text-yellow-800/90 text-3xl" }, void 0, !1, {
        fileName: "app/routes/_layout._index.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_layout._index.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("h1", { className: "text-xl font-bold mb-1 text-yellow-900", children: "\u9EC4\u5927\u4ED9\u7075\u7B7E\u6BBF\u5802" }, void 0, !1, {
        fileName: "app/routes/_layout._index.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { className: "text-yellow-800/90 text-sm", children: "\u627F\u8499\u9EC4\u5927\u4ED9\u5E08\u6069\u51C6\uFF0C\u4F20\u627F\u53E4\u6CD5\uFF0C\u6307\u5F15\u8FF7\u6D25" }, void 0, !1, {
        fileName: "app/routes/_layout._index.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout._index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-col items-center justify-center py-3 px-2", children: /* @__PURE__ */ jsxDEV5("div", { className: "w-full bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4 shadow-[0_0_15px_rgba(217,119,6,0.1)]", children: /* @__PURE__ */ jsxDEV5(Form2, { method: "post", action: "/draw", className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "text-center space-y-3", children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "inline-block p-3 bg-yellow-100/80 rounded-full border-2 border-yellow-900/20", children: /* @__PURE__ */ jsxDEV5("i", { className: "fas fa-pray text-xl text-yellow-800" }, void 0, !1, {
          fileName: "app/routes/_layout._index.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_layout._index.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("h3", { className: "text-base font-medium text-yellow-900", children: "\u8654\u8BDA\u6C42\u7B7E" }, void 0, !1, {
          fileName: "app/routes/_layout._index.tsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("p", { className: "text-yellow-800/90 text-xs", children: "\u8BDA\u5FC3\u7948\u613F\uFF0C\u9759\u5019\u4ED9\u793A" }, void 0, !1, {
          fileName: "app/routes/_layout._index.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_layout._index.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5(
        "button",
        {
          type: "submit",
          className: "w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50",
          children: "\u5F00\u59CB\u6C42\u7B7E"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_layout._index.tsx",
          lineNumber: 34,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_layout._index.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout._index.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout._index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "px-4 py-3", children: /* @__PURE__ */ jsxDEV5("div", { className: "bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-3", children: [
      /* @__PURE__ */ jsxDEV5("h2", { className: "text-base font-medium text-yellow-900 mb-3 text-center", children: "\u6C42\u7B7E\u6D41\u7A0B" }, void 0, !1, {
        fileName: "app/routes/_layout._index.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "flex items-start space-x-3", children: [
          /* @__PURE__ */ jsxDEV5("span", { className: "bg-yellow-100 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", children: "\u58F9" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-yellow-900/90 flex-1", children: '\u70B9\u51FB"\u5F00\u59CB\u6C42\u7B7E"\u6309\u94AE\uFF0C\u8654\u8BDA\u7948\u613F' }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_layout._index.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "flex items-start space-x-3", children: [
          /* @__PURE__ */ jsxDEV5("span", { className: "bg-yellow-100 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", children: "\u8D30" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-yellow-900/90 flex-1", children: "\u53EF\u9009\u62E9\u6295\u63B7\u5723\u676F\uFF0C\u83B7\u5F97\u795E\u660E\u6307\u793A" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_layout._index.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "flex items-start space-x-3", children: [
          /* @__PURE__ */ jsxDEV5("span", { className: "bg-yellow-100 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", children: "\u53C1" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 58,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-yellow-900/90 flex-1", children: "\u89E3\u7B7E\u540E\u83B7\u5F97\u9EC4\u5927\u4ED9\u5E08\u6307\u5F15" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_layout._index.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_layout._index.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout._index.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout._index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "px-4 py-3", children: /* @__PURE__ */ jsxDEV5("div", { className: "bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-3", children: [
      /* @__PURE__ */ jsxDEV5("h2", { className: "text-base font-medium text-yellow-900 mb-3 text-center", children: "\u6C42\u7B7E\u987B\u77E5" }, void 0, !1, {
        fileName: "app/routes/_layout._index.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "flex items-start space-x-3", children: [
          /* @__PURE__ */ jsxDEV5("i", { className: "fas fa-circle text-[6px] text-yellow-800 mt-1.5" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-yellow-900/90 flex-1", children: "\u6C42\u7B7E\u524D\u9700\u8654\u8BDA\u7948\u7977\uFF0C\u5FC3\u65E0\u6742\u5FF5" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_layout._index.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "flex items-start space-x-3", children: [
          /* @__PURE__ */ jsxDEV5("i", { className: "fas fa-circle text-[6px] text-yellow-800 mt-1.5" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-yellow-900/90 flex-1", children: "\u6BCF\u6B21\u6C42\u7B7E\u9700\u95F4\u9694\u4E00\u5929\u4EE5\u4E0A" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_layout._index.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "flex items-start space-x-3", children: [
          /* @__PURE__ */ jsxDEV5("i", { className: "fas fa-circle text-[6px] text-yellow-800 mt-1.5" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-yellow-900/90 flex-1", children: "\u89E3\u7B7E\u5185\u5BB9\u4EC5\u4F9B\u53C2\u8003\uFF0C\u5207\u52FF\u8FC7\u5206\u4F9D\u8D56" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_layout._index.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "flex items-start space-x-3", children: [
          /* @__PURE__ */ jsxDEV5("i", { className: "fas fa-circle text-[6px] text-yellow-800 mt-1.5" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-yellow-900/90 flex-1", children: "\u9075\u533B\u5631\uFF0C\u5B88\u6CD5\u89C4\uFF0C\u6709\u7591\u95EE\u53CA\u65F6\u54A8\u8BE2\u4E13\u4E1A\u4EBA\u58EB" }, void 0, !1, {
            fileName: "app/routes/_layout._index.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_layout._index.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_layout._index.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout._index.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout._index.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout._index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.draw.tsx
var layout_draw_exports = {};
__export(layout_draw_exports, {
  action: () => action2,
  default: () => Draw,
  loader: () => loader3
});
import { json as json3, redirect as redirect3 } from "@remix-run/node";
import { Form as Form3, useLoaderData as useLoaderData3 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
async function loader3({ request }) {
  let existingSignNumber = new URL(request.url).searchParams.get("signNumber");
  if (existingSignNumber)
    return json3({ signNumber: parseInt(existingSignNumber, 10) });
  let signNumber = Math.floor(Math.random() * 100) + 1;
  return json3({ signNumber });
}
async function action2({ request }) {
  let formData = await request.formData(), signNumber = formData.get("signNumber"), intent = formData.get("intent");
  if (!signNumber && !intent) {
    let newSignNumber = Math.floor(Math.random() * 100) + 1;
    return redirect3(`/draw?signNumber=${newSignNumber}`);
  }
  return intent === "divine" ? redirect3(`/divine?signNumber=${signNumber}`) : intent === "result" ? redirect3(`/result?signNumber=${signNumber}`) : redirect3("/");
}
function Draw() {
  let { signNumber } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV6("div", { className: "min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3", children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "text-center py-6", children: /* @__PURE__ */ jsxDEV6("div", { className: "bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-6 mx-2 inline-block", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "mb-3", children: /* @__PURE__ */ jsxDEV6("i", { className: "fas fa-scroll text-yellow-800/90 text-3xl" }, void 0, !1, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("h2", { className: "text-xl font-bold text-yellow-900 mb-2", children: [
        "\u7B2C ",
        signNumber,
        " \u7B7E"
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { className: "text-yellow-900/80 text-xs", children: "\u4ED9\u7B7E\u5DF2\u5B9A\uFF0C\u662F\u5426\u9700\u8981\u6295\u63B7\u5723\u676F\u786E\u8BA4\uFF1F" }, void 0, !1, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.draw.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout.draw.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "px-4 space-y-4", children: [
      /* @__PURE__ */ jsxDEV6(Form3, { method: "post", children: [
        /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "signNumber", value: signNumber }, void 0, !1, {
          fileName: "app/routes/_layout.draw.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "intent", value: "divine" }, void 0, !1, {
          fileName: "app/routes/_layout.draw.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6(
          "button",
          {
            type: "submit",
            className: "w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50",
            children: [
              /* @__PURE__ */ jsxDEV6("i", { className: "fas fa-hands-praying mr-2" }, void 0, !1, {
                fileName: "app/routes/_layout.draw.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this),
              "\u6295\u63B7\u5723\u676F"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_layout.draw.tsx",
            lineNumber: 65,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(Form3, { method: "post", children: [
        /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "signNumber", value: signNumber }, void 0, !1, {
          fileName: "app/routes/_layout.draw.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("input", { type: "hidden", name: "intent", value: "result" }, void 0, !1, {
          fileName: "app/routes/_layout.draw.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6(
          "button",
          {
            type: "submit",
            className: "w-full py-3 px-4 text-yellow-900 text-base font-medium bg-gradient-to-r from-amber-200 to-yellow-200 rounded-lg shadow-md transition-all duration-300 hover:from-amber-300 hover:to-yellow-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50 border border-yellow-900/20",
            children: [
              /* @__PURE__ */ jsxDEV6("i", { className: "fas fa-book-open mr-2" }, void 0, !1, {
                fileName: "app/routes/_layout.draw.tsx",
                lineNumber: 81,
                columnNumber: 13
              }, this),
              "\u7ACB\u5373\u89E3\u7B7E"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_layout.draw.tsx",
            lineNumber: 77,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.draw.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "px-4 py-6", children: /* @__PURE__ */ jsxDEV6("div", { className: "bg-white/60 rounded-lg p-3 border border-yellow-900/10", children: /* @__PURE__ */ jsxDEV6("p", { className: "text-yellow-900/80 text-xs leading-5", children: [
      /* @__PURE__ */ jsxDEV6("i", { className: "fas fa-info-circle mr-1 text-yellow-700" }, void 0, !1, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this),
      "\u6295\u63B7\u5723\u676F\u53EF\u83B7\u5F97\u795E\u660E\u52A0\u6301\uFF0C\u89E3\u7B7E\u66F4\u51C6\u786E\u3002\u76F4\u63A5\u89E3\u7B7E\u5219\u4E0D\u542B\u795E\u660E\u6307\u793A\u3002"
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.draw.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout.draw.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout.draw.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.draw.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.tsx
var layout_exports = {};
__export(layout_exports, {
  default: () => AppLayout
});
import { Outlet as Outlet2 } from "@remix-run/react";

// app/components/Layout.tsx
import { Link as Link2, useLocation } from "@remix-run/react";
import { useState as useState2 } from "react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Layout2({ children }) {
  let [isMenuOpen, setIsMenuOpen] = useState2(!1), isHomePage = useLocation().pathname === "/";
  return /* @__PURE__ */ jsxDEV7("div", { className: "min-h-screen bg-gradient-to-b from-yellow-50/30 to-yellow-100/30 relative", children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "absolute inset-0 bg-[url('/images/chinese-pattern.svg')] opacity-5 fixed" }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("header", { className: "bg-gradient-to-b from-red-900 to-red-800 shadow-sm border-b border-red-700 relative", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "absolute inset-0 bg-[url('/images/chinese-pattern.svg')] opacity-10" }, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("nav", { className: "max-w-screen-md mx-auto px-3 py-2 relative", children: [
        /* @__PURE__ */ jsxDEV7("div", { className: "flex justify-between items-center", children: [
          !isHomePage && /* @__PURE__ */ jsxDEV7(
            Link2,
            {
              to: "/",
              className: "text-lg font-bold text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center",
              children: [
                /* @__PURE__ */ jsxDEV7("i", { className: "fas fa-peace mr-2 text-yellow-200/90" }, void 0, !1, {
                  fileName: "app/components/Layout.tsx",
                  lineNumber: 24,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV7("span", { className: "font-serif", children: "\u9EC3\u5927\u4ED9\u9748\u7C3D" }, void 0, !1, {
                  fileName: "app/components/Layout.tsx",
                  lineNumber: 25,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 20,
              columnNumber: 15
            },
            this
          ),
          isHomePage && /* @__PURE__ */ jsxDEV7("div", { className: "w-6" }, void 0, !1, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 28,
            columnNumber: 28
          }, this),
          /* @__PURE__ */ jsxDEV7(
            "button",
            {
              onClick: () => setIsMenuOpen(!isMenuOpen),
              className: "text-yellow-50 hover:text-yellow-100 transition-colors duration-300 md:hidden",
              "aria-label": "\u958B\u555F\u9078\u55AE",
              children: /* @__PURE__ */ jsxDEV7("i", { className: `fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-lg` }, void 0, !1, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 35,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 30,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7("div", { className: "hidden md:flex space-x-6", children: [
            /* @__PURE__ */ jsxDEV7(
              Link2,
              {
                to: "/fortune",
                className: "text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center text-sm",
                children: [
                  /* @__PURE__ */ jsxDEV7("i", { className: "fas fa-pray w-4 text-yellow-200/90" }, void 0, !1, {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV7("span", { className: "ml-1", children: "\u6C42\u7C64\u554F\u4E8B" }, void 0, !1, {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Layout.tsx",
                lineNumber: 40,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              Link2,
              {
                to: "/blog",
                className: "text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center text-sm",
                children: [
                  /* @__PURE__ */ jsxDEV7("i", { className: "fas fa-scroll w-4 text-yellow-200/90" }, void 0, !1, {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV7("span", { className: "ml-1", children: "\u9748\u7C3D\u5178\u7C4D" }, void 0, !1, {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Layout.tsx",
                lineNumber: 47,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              Link2,
              {
                to: "/about",
                className: "text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center text-sm",
                children: [
                  /* @__PURE__ */ jsxDEV7("i", { className: "fas fa-temple w-4 text-yellow-200/90" }, void 0, !1, {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV7("span", { className: "ml-1", children: "\u95DC\u65BC\u672C\u6BBF" }, void 0, !1, {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Layout.tsx",
                lineNumber: 54,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV7(
          "div",
          {
            className: `${isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"} 
            md:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2`,
            children: /* @__PURE__ */ jsxDEV7("div", { className: "border-t border-red-700/50 pt-2 space-y-2", children: [
              /* @__PURE__ */ jsxDEV7(
                Link2,
                {
                  to: "/fortune",
                  className: "flex items-center py-1.5 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 text-sm",
                  onClick: () => setIsMenuOpen(!1),
                  children: [
                    /* @__PURE__ */ jsxDEV7("i", { className: "fas fa-pray w-5 text-yellow-200/90" }, void 0, !1, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 75,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV7("span", { className: "ml-1", children: "\u6C42\u7C64\u554F\u4E8B" }, void 0, !1, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 76,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/Layout.tsx",
                  lineNumber: 70,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                Link2,
                {
                  to: "/blog",
                  className: "flex items-center py-1.5 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 text-sm",
                  onClick: () => setIsMenuOpen(!1),
                  children: [
                    /* @__PURE__ */ jsxDEV7("i", { className: "fas fa-scroll w-5 text-yellow-200/90" }, void 0, !1, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 83,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV7("span", { className: "ml-1", children: "\u9748\u7C3D\u5178\u7C4D" }, void 0, !1, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 84,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/Layout.tsx",
                  lineNumber: 78,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                Link2,
                {
                  to: "/about",
                  className: "flex items-center py-1.5 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 text-sm",
                  onClick: () => setIsMenuOpen(!1),
                  children: [
                    /* @__PURE__ */ jsxDEV7("i", { className: "fas fa-temple w-5 text-yellow-200/90" }, void 0, !1, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 91,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV7("span", { className: "ml-1", children: "\u95DC\u65BC\u672C\u6BBF" }, void 0, !1, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 92,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/Layout.tsx",
                  lineNumber: 86,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/Layout.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 65,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("main", { className: "flex-grow relative", children }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("footer", { className: "bg-gradient-to-b from-red-800 to-red-900 text-yellow-50 border-t border-red-700 relative mt-auto", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "absolute inset-0 bg-[url('/images/chinese-pattern.svg')] opacity-10" }, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "max-w-screen-md mx-auto px-3 py-4 relative", children: /* @__PURE__ */ jsxDEV7("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV7("div", { className: "flex justify-center space-x-6 mb-3", children: [
          /* @__PURE__ */ jsxDEV7(
            "a",
            {
              href: "#",
              className: "text-yellow-200/80 hover:text-yellow-100 transition-colors duration-300",
              "aria-label": "\u5FAE\u4FE1",
              children: /* @__PURE__ */ jsxDEV7("i", { className: "fab fa-weixin text-lg" }, void 0, !1, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 115,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 110,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7(
            "a",
            {
              href: "#",
              className: "text-yellow-200/80 hover:text-yellow-100 transition-colors duration-300",
              "aria-label": "\u5FAE\u535A",
              children: /* @__PURE__ */ jsxDEV7("i", { className: "fab fa-weibo text-lg" }, void 0, !1, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 122,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 117,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7(
            "a",
            {
              href: "#",
              className: "text-yellow-200/80 hover:text-yellow-100 transition-colors duration-300",
              "aria-label": "QQ",
              children: /* @__PURE__ */ jsxDEV7("i", { className: "fab fa-qq text-lg" }, void 0, !1, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 129,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 124,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "text-yellow-200/80 space-y-1", children: [
          /* @__PURE__ */ jsxDEV7("p", { className: "text-sm font-medium font-serif", children: "\u9EC3\u5927\u4ED9\u9748\u7C3D\u6BBF\u5802" }, void 0, !1, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 133,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { className: "text-xs tracking-wider", children: "\u627F\u8499\u9EC3\u5927\u4ED9\u5E2B\u6069\u51C6 \u2022 \u50B3\u627F\u53E4\u6CD5 \u2022 \u6307\u5F15\u8FF7\u6D25" }, void 0, !1, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 134,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { className: "text-xs opacity-80", children: " 2024 \u7248\u6B0A\u6240\u6709 \u2022 \u8654\u8AA0\u6C42\u7C64 \u2022 \u8B39\u614E\u53C3\u8003" }, void 0, !1, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function AppLayout() {
  return /* @__PURE__ */ jsxDEV8(Layout2, { children: /* @__PURE__ */ jsxDEV8(Outlet2, {}, void 0, !1, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MARKTRW6.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-3OAAVJT7.js", "/build/_shared/chunk-FC5AQ3XV.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XPP3K3CX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout": { id: "routes/_layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_layout-FMVT4HKQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout._index": { id: "routes/_layout._index", parentId: "routes/_layout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_layout._index-K4V2JXCM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.divine": { id: "routes/_layout.divine", parentId: "routes/_layout", path: "divine", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.divine-SF5H6XW3.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.draw": { id: "routes/_layout.draw", parentId: "routes/_layout", path: "draw", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.draw-ICPEGK7Y.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.result": { id: "routes/_layout.result", parentId: "routes/_layout", path: "result", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.result-QQHGLSDI.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "6079256e", hmr: { runtime: "/build/_shared\\chunk-FC5AQ3XV.js", timestamp: 1732083780040 }, url: "/build/manifest-6079256E.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !0, v3_relativeSplatPath: !0, v3_throwAbortReason: !0, v3_singleFetch: !0, v3_lazyRouteDiscovery: !0, unstable_optimizeDeps: !1, unstable_routeConfig: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_layout.divine": {
    id: "routes/_layout.divine",
    parentId: "routes/_layout",
    path: "divine",
    index: void 0,
    caseSensitive: void 0,
    module: layout_divine_exports
  },
  "routes/_layout.result": {
    id: "routes/_layout.result",
    parentId: "routes/_layout",
    path: "result",
    index: void 0,
    caseSensitive: void 0,
    module: layout_result_exports
  },
  "routes/_layout._index": {
    id: "routes/_layout._index",
    parentId: "routes/_layout",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: layout_index_exports
  },
  "routes/_layout.draw": {
    id: "routes/_layout.draw",
    parentId: "routes/_layout",
    path: "draw",
    index: void 0,
    caseSensitive: void 0,
    module: layout_draw_exports
  },
  "routes/_layout": {
    id: "routes/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=_worker.js.map
