import {
  require_post
} from "/build/_shared/chunk-LURGBB2L.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Layout
} from "/build/_shared/chunk-2LM4VPNB.js";
import {
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

// app/routes/blog._index.tsx
var import_node = __toESM(require_node(), 1);
var import_post = __toESM(require_post(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\blog._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\blog._index.tsx"
  );
  import.meta.hot.lastModified = "1731914951073.042";
}
var meta = () => {
  return [{
    title: "\u535A\u5BA2 - \u7DDA\u4E0A\u9748\u7C64"
  }, {
    name: "description",
    content: "Read our latest blog posts about fortune telling and spiritual guidance"
  }];
};
function BlogIndex() {
  _s();
  const {
    posts
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto flex flex-wrap py-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full md:w-2/3 flex flex-col items-center px-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold mb-8", children: "\u535A\u5BA2\u6587\u7AE0" }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "flex flex-col shadow my-4 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white flex flex-col justify-start p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/blog/${post.slug}`, className: "text-3xl font-bold hover:text-blue-700 pb-4", children: post.title }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm pb-3", children: [
          "\u53D1\u5E03\u4E8E ",
          new Date(post.created_at).toLocaleDateString()
        ] }, void 0, true, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pb-6", children: [
          post.content.substring(0, 200),
          "..."
        ] }, void 0, true, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/blog/${post.slug}`, className: "text-blue-700 hover:text-blue-900", children: "\u7EE7\u7EED\u9605\u8BFB \u2192" }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this) }, post.id, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 51,
        columnNumber: 30
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "w-full md:w-1/3 flex flex-col items-center px-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-white shadow flex flex-col my-4 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-3", children: "\u5206\u7C7B" }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-blue-700 hover:text-blue-900", children: "\u62BD\u7B7E\u89E3\u8BFB" }, void 0, false, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-blue-700 hover:text-blue-900", children: "\u7075\u6027\u6307\u5BFC" }, void 0, false, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-blue-700 hover:text-blue-900", children: "\u6BCF\u65E5\u8FD0\u52BF" }, void 0, false, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-white shadow flex flex-col my-4 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-3", children: "\u8BA2\u9605\u66F4\u65B0" }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "\u8BA2\u9605\u6211\u4EEC\u7684\u535A\u5BA2\u66F4\u65B0\uFF0C\u83B7\u53D6\u6700\u65B0\u7684\u6587\u7AE0\u548C\u8FD0\u52BF\u6307\u5BFC\u3002" }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", placeholder: "\u60A8\u7684\u90AE\u7BB1\u5730\u5740", className: "bg-gray-100 text-gray-900 mb-4 px-4 py-2 rounded" }, void 0, false, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3", children: "\u8BA2\u9605" }, void 0, false, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(BlogIndex, "TAfyE0i9dyPQ7/d8lmPxXUSIugM=", false, function() {
  return [useLoaderData];
});
_c = BlogIndex;
var _c;
$RefreshReg$(_c, "BlogIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BlogIndex as default,
  meta
};
//# sourceMappingURL=/build/routes/blog._index-AQOK7JTP.js.map
