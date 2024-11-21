import {
  require_node
} from "/build/_shared/chunk-2AQJSNRS.js";
import {
  Form,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-JGS77FGK.js";

// app/routes/_layout.divine.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Divine() {
  const { signNumber } = useLoaderData();
  const [isShaking, setIsShaking] = (0, import_react2.useState)(false);
  const [showResult, setShowResult] = (0, import_react2.useState)(false);
  const [cupResult, setCupResult] = (0, import_react2.useState)(null);
  const throwCups = () => {
    setIsShaking(true);
    setShowResult(false);
    const result = Math.random() < 0.3 ? "yang" : "yin";
    setTimeout(() => {
      setIsShaking(false);
      setCupResult(result);
      setShowResult(true);
    }, 1e3);
  };
  (0, import_react2.useEffect)(() => {
    setIsShaking(false);
    setShowResult(false);
    setCupResult(null);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-6 mx-2 inline-block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-hands-praying text-yellow-800/90 text-3xl" }, void 0, false, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-yellow-900 mb-2", children: "\u6295\u63B7\u5723\u676F" }, void 0, false, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-yellow-900/80 text-xs", children: "\u8BDA\u5FC3\u7948\u7977\uFF0C\u7B49\u5F85\u795E\u660E\u6307\u793A" }, void 0, false, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col items-center justify-center px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full max-w-xs aspect-square bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `transform transition-all duration-500 ${isShaking ? "animate-shake" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-moon text-6xl text-yellow-800/80 absolute top-0 left-0 transform -rotate-45" }, void 0, false, {
          fileName: "app/routes/_layout.divine.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-moon text-6xl text-yellow-800/80 absolute top-0 right-0 transform rotate-45" }, void 0, false, {
          fileName: "app/routes/_layout.divine.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      showResult && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-lg font-bold ${cupResult === "yang" ? "text-yellow-700" : "text-yellow-900/70"}`, children: cupResult === "yang" ? "\u5723\u676F\uFF08\u9633\u676F\uFF09" : "\u9634\u676F" }, void 0, false, {
          fileName: "app/routes/_layout.divine.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-yellow-900/80", children: cupResult === "yang" ? "\u606D\u559C\uFF0C\u5F97\u5230\u5723\u676F\uFF01\u795E\u660E\u5DF2\u7136\u5E94\u5141\uFF0C\u53EF\u4EE5\u89E3\u7B7E\u3002" : "\u672A\u5F97\u5723\u676F\uFF0C\u9700\u91CD\u65B0\u6C42\u7B7E\u3002" }, void 0, false, {
          fileName: "app/routes/_layout.divine.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 space-y-4", children: !showResult ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        onClick: throwCups,
        disabled: isShaking,
        className: "w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50 disabled:opacity-50",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-hands-praying mr-2" }, void 0, false, {
            fileName: "app/routes/_layout.divine.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this),
          isShaking ? "\u8BDA\u5FC3\u7948\u7977..." : "\u6295\u63B7\u5723\u676F"
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 102,
        columnNumber: 11
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "signNumber", value: signNumber }, void 0, false, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "cupResult", value: cupResult || "" }, void 0, false, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "submit",
          className: `w-full py-3 px-4 text-base font-medium rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50
                ${cupResult === "yang" ? "text-yellow-50 bg-gradient-to-r from-yellow-800 to-yellow-700 hover:from-yellow-700 hover:to-yellow-600" : "text-yellow-900 bg-gradient-to-r from-amber-200 to-yellow-200 hover:from-amber-300 hover:to-yellow-300 border border-yellow-900/20"}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: `mr-2 fas ${cupResult === "yang" ? "fa-book-open" : "fa-redo"}` }, void 0, false, {
              fileName: "app/routes/_layout.divine.tsx",
              lineNumber: 122,
              columnNumber: 15
            }, this),
            cupResult === "yang" ? "\u67E5\u770B\u89E3\u7B7E" : "\u91CD\u65B0\u6C42\u7B7E"
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/_layout.divine.tsx",
          lineNumber: 114,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/60 rounded-lg p-3 border border-yellow-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-yellow-900/80 text-xs leading-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-info-circle mr-1 text-yellow-700" }, void 0, false, {
        fileName: "app/routes/_layout.divine.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this),
      "\u6295\u63B7\u5723\u676F\u65F6\u9700\u8654\u8BDA\u7948\u7977\u3002\u82E5\u5F97\u5723\u676F\uFF08\u9633\u676F\uFF09\uFF0C\u5219\u53EF\u89E3\u7B7E\uFF1B\u82E5\u4E3A\u9634\u676F\uFF0C\u9700\u91CD\u65B0\u6C42\u7B7E\u3002"
    ] }, void 0, true, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.divine.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout.divine.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
export {
  Divine as default
};
