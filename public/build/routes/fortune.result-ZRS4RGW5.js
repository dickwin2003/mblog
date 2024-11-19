import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  Layout
} from "/build/_shared/chunk-2LM4VPNB.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-BQHH2O3L.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-FC5AQ3XV.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/fortune.result.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\fortune.result.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\fortune.result.tsx"
  );
  import.meta.hot.lastModified = "1731932975257.793";
}
var FORTUNE_MEANINGS = {
  VERY_GOOD: "\u4E0A\u4E0A\u7B7E",
  GOOD: "\u4E0A\u7B7E",
  FAIR: "\u4E2D\u7B7E",
  POOR: "\u4E0B\u7B7E",
  VERY_POOR: "\u4E0B\u4E0B\u7B7E"
};
function FortuneResult() {
  _s();
  const {
    fortuneNumber,
    content
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto px-4 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/80 rounded-lg shadow-lg p-6 border border-red-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-red-800 mb-2", children: content.title }, void 0, false, {
        fileName: "app/routes/fortune.result.tsx",
        lineNumber: 68,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-block px-4 py-1 rounded-full text-white bg-red-700", children: FORTUNE_MEANINGS[content.level] }, void 0, false, {
        fileName: "app/routes/fortune.result.tsx",
        lineNumber: 71,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fortune.result.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-50 p-6 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-red-900 mb-4", children: "\u7B7E\u8BD7" }, void 0, false, {
        fileName: "app/routes/fortune.result.tsx",
        lineNumber: 77,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: content.poem.map((line, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-red-800", children: line }, index, false, {
        fileName: "app/routes/fortune.result.tsx",
        lineNumber: 79,
        columnNumber: 52
      }, this)) }, void 0, false, {
        fileName: "app/routes/fortune.result.tsx",
        lineNumber: 78,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fortune.result.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6 text-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-red-900 mb-2", children: "\u89E3\u7B7E" }, void 0, false, {
          fileName: "app/routes/fortune.result.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 leading-relaxed", children: content.explanation }, void 0, false, {
          fileName: "app/routes/fortune.result.tsx",
          lineNumber: 88,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fortune.result.tsx",
        lineNumber: 86,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-red-900 mb-2", children: "\u5EFA\u8BAE" }, void 0, false, {
          fileName: "app/routes/fortune.result.tsx",
          lineNumber: 94,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 leading-relaxed", children: content.suggestion }, void 0, false, {
          fileName: "app/routes/fortune.result.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fortune.result.tsx",
        lineNumber: 93,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fortune.result.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/fortune", className: "inline-flex items-center justify-center px-6 py-2.5 text-lg font-medium text-white bg-gradient-to-r from-red-800 to-red-700 rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-colors duration-300", children: "\u91CD\u65B0\u6C42\u7B7E" }, void 0, false, {
      fileName: "app/routes/fortune.result.tsx",
      lineNumber: 102,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/fortune.result.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/fortune.result.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.result.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.result.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.result.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_s(FortuneResult, "TRrGntM2bvINWLhUxGzCvr8gnas=", false, function() {
  return [useLoaderData];
});
_c = FortuneResult;
var _c;
$RefreshReg$(_c, "FortuneResult");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FortuneResult as default
};
//# sourceMappingURL=/build/routes/fortune.result-ZRS4RGW5.js.map
