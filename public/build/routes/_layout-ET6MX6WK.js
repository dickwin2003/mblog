import {
  Link,
  Outlet,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLocation
} from "/build/_shared/chunk-JGS77FGK.js";

// app/components/Layout.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = (0, import_react2.useState)(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-b from-yellow-50/30 to-yellow-100/30 relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[url('/images/chinese-pattern.svg')] opacity-5 fixed" }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-gradient-to-b from-red-900 to-red-800 shadow-sm border-b border-red-700 relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[url('/images/chinese-pattern.svg')] opacity-10" }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "max-w-screen-md mx-auto px-3 py-2 relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
          !isHomePage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              to: "/",
              className: "text-lg font-bold text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-peace mr-2 text-yellow-200/90" }, void 0, false, {
                  fileName: "app/components/Layout.tsx",
                  lineNumber: 24,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-serif", children: "\u9EC3\u5927\u4ED9\u9748\u7C3D" }, void 0, false, {
                  fileName: "app/components/Layout.tsx",
                  lineNumber: 25,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 20,
              columnNumber: 15
            },
            this
          ),
          isHomePage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6" }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 28,
            columnNumber: 28
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              onClick: () => setIsMenuOpen(!isMenuOpen),
              className: "text-yellow-50 hover:text-yellow-100 transition-colors duration-300 md:hidden",
              "aria-label": "\u958B\u555F\u9078\u55AE",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: `fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-lg` }, void 0, false, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 35,
                columnNumber: 15
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 30,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:flex space-x-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/fortune",
                className: "text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center text-sm",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-pray w-4 text-yellow-200/90" }, void 0, false, {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: "\u6C42\u7C64\u554F\u4E8B" }, void 0, false, {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/Layout.tsx",
                lineNumber: 40,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/blog",
                className: "text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center text-sm",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-scroll w-4 text-yellow-200/90" }, void 0, false, {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: "\u9748\u7C3D\u5178\u7C4D" }, void 0, false, {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/Layout.tsx",
                lineNumber: 47,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: "/about",
                className: "text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center text-sm",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-temple w-4 text-yellow-200/90" }, void 0, false, {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: "\u95DC\u65BC\u672C\u6BBF" }, void 0, false, {
                    fileName: "app/components/Layout.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/Layout.tsx",
                lineNumber: 54,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: `${isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"} 
            md:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-red-700/50 pt-2 space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Link,
                {
                  to: "/fortune",
                  className: "flex items-center py-1.5 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 text-sm",
                  onClick: () => setIsMenuOpen(false),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-pray w-5 text-yellow-200/90" }, void 0, false, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 75,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: "\u6C42\u7C64\u554F\u4E8B" }, void 0, false, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 76,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/Layout.tsx",
                  lineNumber: 70,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Link,
                {
                  to: "/blog",
                  className: "flex items-center py-1.5 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 text-sm",
                  onClick: () => setIsMenuOpen(false),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-scroll w-5 text-yellow-200/90" }, void 0, false, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 83,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: "\u9748\u7C3D\u5178\u7C4D" }, void 0, false, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 84,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/Layout.tsx",
                  lineNumber: 78,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Link,
                {
                  to: "/about",
                  className: "flex items-center py-1.5 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 text-sm",
                  onClick: () => setIsMenuOpen(false),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-temple w-5 text-yellow-200/90" }, void 0, false, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 91,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: "\u95DC\u65BC\u672C\u6BBF" }, void 0, false, {
                      fileName: "app/components/Layout.tsx",
                      lineNumber: 92,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/components/Layout.tsx",
                  lineNumber: 86,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/Layout.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 65,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-grow relative", children }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "bg-gradient-to-b from-red-800 to-red-900 text-yellow-50 border-t border-red-700 relative mt-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[url('/images/chinese-pattern.svg')] opacity-10" }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-screen-md mx-auto px-3 py-4 relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-6 mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              href: "#",
              className: "text-yellow-200/80 hover:text-yellow-100 transition-colors duration-300",
              "aria-label": "\u5FAE\u4FE1",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fab fa-weixin text-lg" }, void 0, false, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 115,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 110,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              href: "#",
              className: "text-yellow-200/80 hover:text-yellow-100 transition-colors duration-300",
              "aria-label": "\u5FAE\u535A",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fab fa-weibo text-lg" }, void 0, false, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 122,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 117,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              href: "#",
              className: "text-yellow-200/80 hover:text-yellow-100 transition-colors duration-300",
              "aria-label": "QQ",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fab fa-qq text-lg" }, void 0, false, {
                fileName: "app/components/Layout.tsx",
                lineNumber: 129,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 124,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-yellow-200/80 space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium font-serif", children: "\u9EC3\u5927\u4ED9\u9748\u7C3D\u6BBF\u5802" }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 133,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs tracking-wider", children: "\u627F\u8499\u9EC3\u5927\u4ED9\u5E2B\u6069\u51C6 \u2022 \u50B3\u627F\u53E4\u6CD5 \u2022 \u6307\u5F15\u8FF7\u6D25" }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 134,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs opacity-80", children: " 2024 \u7248\u6B0A\u6240\u6709 \u2022 \u8654\u8AA0\u6C42\u7C64 \u2022 \u8B39\u614E\u53C3\u8003" }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function AppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
export {
  AppLayout as default
};
