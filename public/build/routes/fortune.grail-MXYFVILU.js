import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  Layout
} from "/build/_shared/chunk-2LM4VPNB.js";
import {
  Form,
  useNavigation
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
  import.meta.hot.lastModified = "1731988265109.7842";
}
function FortuneGrail() {
  _s();
  const navigation = useNavigation();
  const isRolling = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto px-4 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/80 rounded-lg shadow-lg p-6 border border-red-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-8 space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-red-800", children: "\u64F2\u8056\u676F" }, void 0, false, {
      fileName: "app/routes/fortune.grail.tsx",
      lineNumber: 80,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/fortune.grail.tsx",
      lineNumber: 79,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-50 p-8 rounded-lg space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-700", children: "\u8ACB\u8654\u8AA0\u7948\u79B1\u5F8C\u9078\u64C7\u7D50\u679C" }, void 0, false, {
        fileName: "app/routes/fortune.grail.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "contents", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "result", value: "success" }, void 0, false, {
            fileName: "app/routes/fortune.grail.tsx",
            lineNumber: 89,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isRolling, className: "px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-800 to-red-700 rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-colors duration-300 disabled:opacity-50", children: isRolling ? "\u64F2\u676F\u4E2D..." : "\u8056\u676F" }, void 0, false, {
            fileName: "app/routes/fortune.grail.tsx",
            lineNumber: 90,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fortune.grail.tsx",
          lineNumber: 88,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "contents", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "result", value: "fail" }, void 0, false, {
            fileName: "app/routes/fortune.grail.tsx",
            lineNumber: 95,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isRolling, className: "px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg hover:from-gray-700 hover:to-gray-600 transition-colors duration-300 disabled:opacity-50", children: isRolling ? "\u64F2\u676F\u4E2D..." : "\u9670\u676F" }, void 0, false, {
            fileName: "app/routes/fortune.grail.tsx",
            lineNumber: 96,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fortune.grail.tsx",
          lineNumber: 94,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fortune.grail.tsx",
        lineNumber: 87,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fortune.grail.tsx",
      lineNumber: 83,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/fortune.grail.tsx",
    lineNumber: 78,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.grail.tsx",
    lineNumber: 77,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.grail.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.grail.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.grail.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s(FortuneGrail, "I2WaJhUM5KV32aS1+j3KKeVsgyA=", false, function() {
  return [useNavigation];
});
_c = FortuneGrail;
var _c;
$RefreshReg$(_c, "FortuneGrail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FortuneGrail as default
};
//# sourceMappingURL=/build/routes/fortune.grail-MXYFVILU.js.map
