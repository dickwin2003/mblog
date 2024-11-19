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

// app/routes/blog.$slug.tsx
var import_node = __toESM(require_node(), 1);
var import_post = __toESM(require_post(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\blog.$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\blog.$slug.tsx"
  );
  import.meta.hot.lastModified = "1731914970113.1936";
}
function BlogPost() {
  _s();
  const {
    post
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto flex flex-wrap py-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full md:w-2/3 flex flex-col items-center px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "flex flex-col shadow my-4 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white flex flex-col justify-start p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold pb-4", children: post.title }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 51,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm pb-8", children: [
        "\u53D1\u5E03\u4E8E ",
        new Date(post.created_at).toLocaleDateString(),
        post.updated_at !== post.created_at && ` \u2022 \u66F4\u65B0\u4E8E ${new Date(post.updated_at).toLocaleDateString()}`
      ] }, void 0, true, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose max-w-none pb-8", children: post.content }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 56,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "w-full md:w-1/3 flex flex-col items-center px-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-white shadow flex flex-col my-4 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-3", children: "\u5206\u7C7B" }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-blue-700 hover:text-blue-900", children: "\u62BD\u7B7E\u89E3\u8BFB" }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-blue-700 hover:text-blue-900", children: "\u7075\u6027\u6307\u5BFC" }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-blue-700 hover:text-blue-900", children: "\u6BCF\u65E5\u8FD0\u52BF" }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-white shadow flex flex-col my-4 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-3", children: "\u5206\u4EAB\u6587\u7AE0" }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "social-link text-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fab fa-facebook" }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "social-link text-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fab fa-twitter" }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "social-link text-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fab fa-linkedin" }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 95,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 94,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "social-link text-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fab fa-weibo" }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog.$slug.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/blog.$slug.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(BlogPost, "XKKHaSRpeA70aITHb2nxIAbZ33A=", false, function() {
  return [useLoaderData];
});
_c = BlogPost;
var _c;
$RefreshReg$(_c, "BlogPost");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BlogPost as default
};
//# sourceMappingURL=/build/routes/blog.$slug-ZJZ3YDFP.js.map
