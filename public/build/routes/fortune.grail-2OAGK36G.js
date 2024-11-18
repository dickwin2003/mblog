import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  Layout
} from "/build/_shared/chunk-OHSGCBC6.js";
import {
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

// app/routes/fortune.grail.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\fortune.grail.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\fortune.grail.tsx"
  );
  import.meta.hot.lastModified = "1731935332560.3464";
}
function FortuneGrail() {
  _s();
  const {
    isHolyGrail,
    fortuneNumber
  } = useLoaderData();
  const fortuneNumberText = fortuneNumber.toString();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto px-4 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/80 rounded-lg shadow-lg p-6 border border-red-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-8 space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-red-800", children: "\u64F2\u8056\u676F" }, void 0, false, {
      fileName: "app/routes/fortune.grail.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/fortune.grail.tsx",
      lineNumber: 51,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-50 p-8 rounded-lg space-y-6", children: isHolyGrail ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-red-700", children: [
        "\u606D\u559C\u60A8\uFF01\u60A8\u70BA\u300C\u7B2C",
        fortuneNumberText,
        "\u7C64\u300D\u64F2\u51FA\u4E86\u300C\u8056\u676F\u300D\uFF0C\u795E\u660E\u8868\u793A\u9019\u679D\u662F\u9748\u7C64\uFF01\u8B93\u6211\u4F86\u70BA\u60A8\u89E3\u8AAA\u6B64\u7C64\u5427\u3002"
      ] }, void 0, true, {
        fileName: "app/routes/fortune.grail.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/fortune/result?fortune=${fortuneNumber}`, className: "inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-800 to-red-700 rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-colors duration-300", children: "\u89E3\u7C64" }, void 0, false, {
        fileName: "app/routes/fortune.grail.tsx",
        lineNumber: 63,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/fortune.grail.tsx",
        lineNumber: 62,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fortune.grail.tsx",
      lineNumber: 58,
      columnNumber: 32
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-700", children: [
        "\u60A8\u70BA\u300C\u7B2C",
        fortuneNumberText,
        "\u7C64\u300D\u64F2\u51FA\u4E86\u9670\u676F\uFF0C\u795E\u660E\u8868\u793A\u6B64\u7C64\u4E0D\u9748\uFF01\u8ACB\u8AA0\u5FC3\u7948\u79B1\u5F8C\u91CD\u65B0\u6C42\u7C64\u3002"
      ] }, void 0, true, {
        fileName: "app/routes/fortune.grail.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/fortune", className: "inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-800 to-red-700 rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-colors duration-300", children: "\u91CD\u65B0\u6C42\u7C64" }, void 0, false, {
        fileName: "app/routes/fortune.grail.tsx",
        lineNumber: 72,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/fortune.grail.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fortune.grail.tsx",
      lineNumber: 67,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/fortune.grail.tsx",
      lineNumber: 57,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/fortune.grail.tsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.grail.tsx",
    lineNumber: 49,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.grail.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.grail.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.grail.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(FortuneGrail, "LrfAJkH6GgOCZ04Fwy2Hca1nhX8=", false, function() {
  return [useLoaderData];
});
_c = FortuneGrail;
var _c;
$RefreshReg$(_c, "FortuneGrail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FortuneGrail as default
};
//# sourceMappingURL=/build/routes/fortune.grail-2OAGK36G.js.map
