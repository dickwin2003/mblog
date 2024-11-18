import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:../models/hdx.server
var require_hdx = __commonJS({
  "empty-module:../models/hdx.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/test-hdx.tsx
var import_node = __toESM(require_node(), 1);
var import_hdx = __toESM(require_hdx(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\test-hdx.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\test-hdx.tsx"
  );
  import.meta.hot.lastModified = "1731922368630.719";
}
function TestHDX() {
  _s();
  const {
    items,
    total,
    error
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-4", children: "\u6D4B\u8BD5 HDX \u6570\u636E\u5E93\u64CD\u4F5C" }, void 0, false, {
      fileName: "app/routes/test-hdx.tsx",
      lineNumber: 99,
      columnNumber: 13
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-100 p-4 rounded mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600", children: error }, void 0, false, {
      fileName: "app/routes/test-hdx.tsx",
      lineNumber: 102,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/test-hdx.tsx",
      lineNumber: 101,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold mb-4", children: "\u6DFB\u52A0\u65B0\u6761\u76EE" }, void 0, false, {
        fileName: "app/routes/test-hdx.tsx",
        lineNumber: 106,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-2", children: "\u6807\u9898\uFF1A" }, void 0, false, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 109,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", className: "w-full p-2 border rounded", required: true }, void 0, false, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 110,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/test-hdx.tsx",
          lineNumber: 108,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-2", children: "\u5185\u5BB9\uFF1A" }, void 0, false, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 113,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "content", className: "w-full p-2 border rounded", rows: 4, required: true }, void 0, false, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 114,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/test-hdx.tsx",
          lineNumber: 112,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-2", children: "\u4F5C\u8005\uFF1A" }, void 0, false, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 117,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "author", className: "w-full p-2 border rounded" }, void 0, false, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 118,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/test-hdx.tsx",
          lineNumber: 116,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-2", children: "\u5206\u7C7B\uFF1A" }, void 0, false, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 121,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "category", className: "w-full p-2 border rounded" }, void 0, false, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 122,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/test-hdx.tsx",
          lineNumber: 120,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-2", children: "\u6807\u7B7E\uFF1A" }, void 0, false, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 125,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "tags", className: "w-full p-2 border rounded", placeholder: "\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u6807\u7B7E" }, void 0, false, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 126,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/test-hdx.tsx",
          lineNumber: 124,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600", children: "\u63D0\u4EA4" }, void 0, false, {
          fileName: "app/routes/test-hdx.tsx",
          lineNumber: 128,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/test-hdx.tsx",
        lineNumber: 107,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/test-hdx.tsx",
      lineNumber: 105,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold mb-4", children: [
        "\u73B0\u6709\u6761\u76EE (\u603B\u8BA1: ",
        total,
        ")"
      ] }, void 0, true, {
        fileName: "app/routes/test-hdx.tsx",
        lineNumber: 135,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border p-4 rounded", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold", children: item.title }, void 0, false, {
          fileName: "app/routes/test-hdx.tsx",
          lineNumber: 138,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: item.content }, void 0, false, {
          fileName: "app/routes/test-hdx.tsx",
          lineNumber: 139,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            "\u4F5C\u8005: ",
            item.author || "\u533F\u540D"
          ] }, void 0, true, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 141,
            columnNumber: 33
          }, this),
          item.category && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-4", children: [
            "\u5206\u7C7B: ",
            item.category
          ] }, void 0, true, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 142,
            columnNumber: 51
          }, this),
          item.tags && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-4", children: [
            "\u6807\u7B7E: ",
            item.tags
          ] }, void 0, true, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 143,
            columnNumber: 47
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/test-hdx.tsx",
          lineNumber: 140,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            "\u6D4F\u89C8: ",
            item.views
          ] }, void 0, true, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 146,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-4", children: [
            "\u70B9\u8D5E: ",
            item.likes
          ] }, void 0, true, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 147,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-4", children: [
            "\u521B\u5EFA\u65F6\u95F4: ",
            new Date(item.created_at).toLocaleString()
          ] }, void 0, true, {
            fileName: "app/routes/test-hdx.tsx",
            lineNumber: 148,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/test-hdx.tsx",
          lineNumber: 145,
          columnNumber: 29
        }, this)
      ] }, item.id, true, {
        fileName: "app/routes/test-hdx.tsx",
        lineNumber: 137,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/routes/test-hdx.tsx",
        lineNumber: 136,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/test-hdx.tsx",
      lineNumber: 134,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/test-hdx.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_s(TestHDX, "PDaCWhY4dkkVd6TXfMYvh3I7v54=", false, function() {
  return [useLoaderData];
});
_c = TestHDX;
var _c;
$RefreshReg$(_c, "TestHDX");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TestHDX as default
};
//# sourceMappingURL=/build/routes/test-hdx-GQJRMGHU.js.map
