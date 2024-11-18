import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Layout
} from "/build/_shared/chunk-OHSGCBC6.js";
import {
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

// app/routes/fortune.$number.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\fortune.$number.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\fortune.$number.tsx"
  );
  import.meta.hot.lastModified = "1731920629841.935";
}
function FortuneDetail() {
  _s();
  const {
    fortune
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto px-4 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/80 rounded-lg shadow-lg p-6 border border-red-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-red-900 mb-2", children: fortune.title }, void 0, false, {
        fileName: "app/routes/fortune.$number.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-20 bg-gradient-to-r from-red-800 to-red-700 mx-auto" }, void 0, false, {
        fileName: "app/routes/fortune.$number.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fortune.$number.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-red-900 mb-4 flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-feather-alt mr-2" }, void 0, false, {
          fileName: "app/routes/fortune.$number.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this),
        "\u7C64\u8A69"
      ] }, void 0, true, {
        fileName: "app/routes/fortune.$number.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-amber-50/50 rounded-lg p-4 border border-amber-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "text-gray-800 whitespace-pre-line text-center font-serif", children: fortune.poem }, void 0, false, {
        fileName: "app/routes/fortune.$number.tsx",
        lineNumber: 74,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/fortune.$number.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fortune.$number.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-red-900 mb-4 flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-scroll mr-2" }, void 0, false, {
          fileName: "app/routes/fortune.$number.tsx",
          lineNumber: 83,
          columnNumber: 15
        }, this),
        "\u89E3\u7C64"
      ] }, void 0, true, {
        fileName: "app/routes/fortune.$number.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose max-w-none text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: fortune.explanation }, void 0, false, {
        fileName: "app/routes/fortune.$number.tsx",
        lineNumber: 87,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/fortune.$number.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fortune.$number.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-red-900 mb-4 flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-compass mr-2" }, void 0, false, {
          fileName: "app/routes/fortune.$number.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this),
        "\u904B\u52E2\u89E3\u6790"
      ] }, void 0, true, {
        fileName: "app/routes/fortune.$number.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-4 border border-gray-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-900 mb-2 flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-circle text-yellow-600 mr-2" }, void 0, false, {
              fileName: "app/routes/fortune.$number.tsx",
              lineNumber: 101,
              columnNumber: 19
            }, this),
            "\u7E3D\u904B"
          ] }, void 0, true, {
            fileName: "app/routes/fortune.$number.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: fortune.divination.general }, void 0, false, {
            fileName: "app/routes/fortune.$number.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fortune.$number.tsx",
          lineNumber: 99,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-4 border border-gray-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-900 mb-2 flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-heart text-red-600 mr-2" }, void 0, false, {
              fileName: "app/routes/fortune.$number.tsx",
              lineNumber: 110,
              columnNumber: 19
            }, this),
            "\u59FB\u7DE3"
          ] }, void 0, true, {
            fileName: "app/routes/fortune.$number.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: fortune.divination.love }, void 0, false, {
            fileName: "app/routes/fortune.$number.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fortune.$number.tsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-4 border border-gray-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-900 mb-2 flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-briefcase text-blue-600 mr-2" }, void 0, false, {
              fileName: "app/routes/fortune.$number.tsx",
              lineNumber: 119,
              columnNumber: 19
            }, this),
            "\u4E8B\u696D"
          ] }, void 0, true, {
            fileName: "app/routes/fortune.$number.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: fortune.divination.business }, void 0, false, {
            fileName: "app/routes/fortune.$number.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fortune.$number.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-4 border border-gray-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-900 mb-2 flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-book text-green-600 mr-2" }, void 0, false, {
              fileName: "app/routes/fortune.$number.tsx",
              lineNumber: 128,
              columnNumber: 19
            }, this),
            "\u5B78\u696D"
          ] }, void 0, true, {
            fileName: "app/routes/fortune.$number.tsx",
            lineNumber: 127,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: fortune.divination.study }, void 0, false, {
            fileName: "app/routes/fortune.$number.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fortune.$number.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-4 border border-gray-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-900 mb-2 flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-heartbeat text-pink-600 mr-2" }, void 0, false, {
              fileName: "app/routes/fortune.$number.tsx",
              lineNumber: 137,
              columnNumber: 19
            }, this),
            "\u5065\u5EB7"
          ] }, void 0, true, {
            fileName: "app/routes/fortune.$number.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: fortune.divination.health }, void 0, false, {
            fileName: "app/routes/fortune.$number.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/fortune.$number.tsx",
          lineNumber: 135,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/fortune.$number.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/fortune.$number.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 p-4 bg-red-50 rounded-lg border border-red-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-red-800 flex items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-exclamation-circle mr-2 mt-0.5" }, void 0, false, {
        fileName: "app/routes/fortune.$number.tsx",
        lineNumber: 148,
        columnNumber: 15
      }, this),
      "\u7C64\u6587\u50C5\u4F9B\u53C3\u8003\uFF0C\u51E1\u4E8B\u61C9\u4EE5\u6B63\u9762\u7A4D\u6975\u7684\u614B\u5EA6\u9762\u5C0D\uFF0C\u82E5\u9047\u91CD\u5927\u6C7A\u5B9A\uFF0C\u8ACB\u5BE9\u614E\u8A55\u4F30\uFF0C\u5207\u52FF\u76F2\u76EE\u4F9D\u5F9E\u3002"
    ] }, void 0, true, {
      fileName: "app/routes/fortune.$number.tsx",
      lineNumber: 147,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/fortune.$number.tsx",
      lineNumber: 146,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/fortune.$number.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.$number.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/fortune.$number.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(FortuneDetail, "4T5TkUhl3vMwD8vj0YWK3gFN3QQ=", false, function() {
  return [useLoaderData];
});
_c = FortuneDetail;
var _c;
$RefreshReg$(_c, "FortuneDetail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FortuneDetail as default
};
//# sourceMappingURL=/build/routes/fortune.$number-GEZWIZUU.js.map
