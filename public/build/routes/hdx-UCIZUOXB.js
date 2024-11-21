import {
  Form,
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-JGS77FGK.js";

// empty-module:@remix-run/cloudflare
var require_cloudflare = __commonJS({
  "empty-module:@remix-run/cloudflare"(exports, module) {
    module.exports = {};
  }
});

// app/routes/hdx.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Hdx() {
  const data = useLoaderData();
  const record = data.record;
  const formatPoem = (poem) => {
    const cleanPoem = poem.replace(/[，。？！、；：""'']/g, "").replace(/\s+/g, "");
    const verses = [];
    for (let i = 0; i < cleanPoem.length; i += 7) {
      const verse = cleanPoem.slice(i, i + 7);
      if (verse.length === 7) {
        verses.push(verse);
      }
    }
    const couplets = [];
    for (let i = 0; i < verses.length; i += 2) {
      if (i + 1 < verses.length) {
        couplets.push([verses[i], verses[i + 1]]);
      } else if (verses[i]) {
        couplets.push([verses[i]]);
      }
    }
    return couplets;
  };
  const formatXianJi = (xianji) => {
    const cleanXianji = xianji.replace(/\s+/g, "");
    const parts = cleanXianji.split(/[;；]/);
    return parts.map((part) => {
      const [title, content] = part.split(/[：:]/);
      return {
        title: title?.trim() || "",
        content: content?.trim() || ""
      };
    }).filter((item) => item.title && item.content);
  };
  const [inputNo, setInputNo] = (0, import_react2.useState)("");
  const handleSubmit = (e) => {
    if (parseInt(inputNo) < 1 || parseInt(inputNo) > 100) {
      e.preventDefault();
      alert("\u8BF7\u8F93\u51651-100\u4E4B\u95F4\u7684\u6570\u5B57");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", onSubmit: handleSubmit, className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "no", className: "block text-sm font-medium text-gray-700 mb-1", children: "\u8BF7\u8F93\u5165\u7B7E\u53F7 (1-100):" }, void 0, false, {
          fileName: "app/routes/hdx.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "number",
            name: "no",
            id: "no",
            min: "1",
            max: "100",
            value: inputNo,
            onChange: (e) => setInputNo(e.target.value),
            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            required: true
          },
          void 0,
          false,
          {
            fileName: "app/routes/hdx.tsx",
            lineNumber: 107,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/hdx.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          children: "\u67E5\u8BE2"
        },
        void 0,
        false,
        {
          fileName: "app/routes/hdx.tsx",
          lineNumber: 119,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/hdx.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/hdx.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    record && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold", children: [
          "\u7B2C",
          record.no,
          "\u7B7E"
        ] }, void 0, true, {
          fileName: "app/routes/hdx.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-xl font-medium", children: record.qt }, void 0, false, {
          fileName: "app/routes/hdx.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `mt-2 text-lg font-medium ${record.jx.includes("\u4E0A") ? "text-green-600" : record.jx.includes("\u4E2D") ? "text-blue-600" : "text-red-600"}`, children: record.jx }, void 0, false, {
          fileName: "app/routes/hdx.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/hdx.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-poetry space-y-4", children: formatPoem(record.qs).map((couplet, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg leading-loose whitespace-pre", children: [
        couplet[0],
        couplet[1] ? ` ${couplet[1]}` : ""
      ] }, index, true, {
        fileName: "app/routes/hdx.tsx",
        lineNumber: 141,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "app/routes/hdx.tsx",
        lineNumber: 139,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium mb-2", children: "\u89E3\u66F0\uFF1A" }, void 0, false, {
            fileName: "app/routes/hdx.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: record.jy }, void 0, false, {
            fileName: "app/routes/hdx.tsx",
            lineNumber: 150,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/hdx.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium mb-2", children: "\u4ED9\u673A\uFF1A" }, void 0, false, {
            fileName: "app/routes/hdx.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: formatXianJi(record.xj).map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-700", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: [
              item.title,
              "\uFF1A"
            ] }, void 0, true, {
              fileName: "app/routes/hdx.tsx",
              lineNumber: 157,
              columnNumber: 21
            }, this),
            item.content
          ] }, index, true, {
            fileName: "app/routes/hdx.tsx",
            lineNumber: 156,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "app/routes/hdx.tsx",
            lineNumber: 154,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/hdx.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        record.dg && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium mb-2", children: "\u5178\u6545\uFF1A" }, void 0, false, {
            fileName: "app/routes/hdx.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: record.dg }, void 0, false, {
            fileName: "app/routes/hdx.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/hdx.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/hdx.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/hdx.tsx",
      lineNumber: 129,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/hdx.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}
export {
  Hdx as default
};
