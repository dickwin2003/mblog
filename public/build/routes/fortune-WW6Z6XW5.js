import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  Layout
} from "/build/_shared/chunk-OHSGCBC6.js";
import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-UOBU4OYR.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-FC5AQ3XV.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/fortune.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\fortune.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\fortune.tsx"
  );
  import.meta.hot.lastModified = "1731935054952.7195";
}
function Fortune() {
  _s();
  const {
    fortuneNumber
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto px-4 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/80 rounded-lg shadow-lg p-6 border border-red-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-8 space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
      "\u6C42\u7C64\u4E4B\u524D\uFF0C\u8ACB\u5148\u9ED8\u5FF5\u81EA\u5DF1\u7684\u59D3\u540D\u3001\u51FA\u751F\u5E74\u6708\u65E5\u6642\u8FB0\u3001\u4F4F\u5740\uFF0C",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/fortune.tsx",
        lineNumber: 58,
        columnNumber: 19
      }, this),
      "\u4E26\u8AA0\u5FC3\u7948\u6C42\u795E\u660E\u6307\u9EDE\u8FF7\u6D25\u3002"
    ] }, void 0, true, {
      fileName: "app/routes/fortune.tsx",
      lineNumber: 56,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/fortune.tsx",
      lineNumber: 55,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-50 p-8 rounded-lg space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-red-800", children: [
        "\u60A8\u6C42\u5F97\u4E86\u300C\u7B2C",
        fortuneNumber,
        "\u7C64\u300D"
      ] }, void 0, true, {
        fileName: "app/routes/fortune.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-700", children: "\u60A8\u53EF\u4EE5\u9078\u64C7\u64F2\u8056\u676F\u4F86\u5224\u5B9A\u6B64\u7C64\u662F\u5426\u70BA\u9748\u7C64\uFF0C\u6216\u8005\u76F4\u63A5\u67E5\u770B\u89E3\u7C64\u3002" }, void 0, false, {
        fileName: "app/routes/fortune.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fortune.tsx",
      lineNumber: 62,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-yellow-700", children: [
      "\u63D0\u9192\uFF1A\u82E5\u9078\u64C7\u64F2\u8056\u676F\uFF0C\u5FC5\u9808\u64F2\u51FA\u8056\u676F\u624D\u80FD\u89E3\u7C64\uFF0C\u82E5\u70BA\u9670\u676F\u5247\u9700\u91CD\u65B0\u6C42\u7C64\u3002",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/fortune.tsx",
        lineNumber: 74,
        columnNumber: 19
      }, this),
      "\u5411\u795E\u660E\u6C42\u7C64\u662F\u838A\u56B4\u7684\u4E8B\uFF0C\u8ACB\u52FF\u56E0\u62BD\u4E2D\u4E0B\u7C64\u800C\u6577\u884D\u4E86\u4E8B\u3002"
    ] }, void 0, true, {
      fileName: "app/routes/fortune.tsx",
      lineNumber: 72,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/fortune.tsx",
      lineNumber: 71,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center gap-6 pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/fortune/grail?fortune=${fortuneNumber}`, prefetch: "intent", className: "inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-800 to-red-700 rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-colors duration-300", children: "\u64F2\u8056\u676F" }, void 0, false, {
        fileName: "app/routes/fortune.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "contents", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "interpret" }, void 0, false, {
          fileName: "app/routes/fortune.tsx",
          lineNumber: 85,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "fortune", value: fortuneNumber }, void 0, false, {
          fileName: "app/routes/fortune.tsx",
          lineNumber: 86,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "inline-flex items-center justify-center px-8 py-3 text-lg font-medium border-2 border-red-800 text-red-800 hover:bg-red-50 rounded-lg shadow-lg transition-colors duration-300", children: "\u76F4\u63A5\u89E3\u7C64" }, void 0, false, {
          fileName: "app/routes/fortune.tsx",
          lineNumber: 87,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fortune.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fortune.tsx",
      lineNumber: 79,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/fortune.tsx",
    lineNumber: 54,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.tsx",
    lineNumber: 53,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(Fortune, "kVnZc2VXT81pAo9Q41EbYtkWyu0=", false, function() {
  return [useLoaderData];
});
_c = Fortune;
var _c;
$RefreshReg$(_c, "Fortune");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Fortune as default
};
//# sourceMappingURL=/build/routes/fortune-WW6Z6XW5.js.map
