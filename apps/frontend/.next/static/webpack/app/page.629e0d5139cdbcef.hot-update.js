"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/SideBar.tsx":
/*!************************************!*\
  !*** ./src/components/SideBar.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,GlassesIcon,Link,Package2,PuzzleIcon,SettingsIcon,UserIcon,Users!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/computer.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,GlassesIcon,Link,Package2,PuzzleIcon,SettingsIcon,UserIcon,Users!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/puzzle.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,GlassesIcon,Link,Package2,PuzzleIcon,SettingsIcon,UserIcon,Users!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/glasses.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,GlassesIcon,Link,Package2,PuzzleIcon,SettingsIcon,UserIcon,Users!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/users.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,GlassesIcon,Link,Package2,PuzzleIcon,SettingsIcon,UserIcon,Users!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/user.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,GlassesIcon,Link,Package2,PuzzleIcon,SettingsIcon,UserIcon,Users!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/settings.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,GlassesIcon,Link,Package2,PuzzleIcon,SettingsIcon,UserIcon,Users!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/link.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,GlassesIcon,Link,Package2,PuzzleIcon,SettingsIcon,UserIcon,Users!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/package-2.js\");\n\n\nconst Sidebar = ()=>{\n    const menuItems = [\n        {\n            name: \"Play\",\n            icon: _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            key: \"play\"\n        },\n        {\n            name: \"Puzzles\",\n            icon: _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            key: \"puzzles\"\n        },\n        {\n            name: \"Watch\",\n            icon: _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            key: \"watch\"\n        },\n        {\n            name: \"Social\",\n            icon: _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            key: \"social\"\n        },\n        {\n            name: \"Profile\",\n            icon: _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            key: \"profile\"\n        },\n        {\n            name: \"Settings\",\n            icon: _barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            key: \"settings\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex flex-col items-center gap-4 px-2 sm:py-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    href: \"#\",\n                    className: \"group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Computer_GlassesIcon_Link_Package2_PuzzleIcon_SettingsIcon_UserIcon_Users_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            className: \"h-4 w-4 transition-all group-hover:scale-110\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Acme Inc\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"mt-auto flex flex-col items-center gap-4 px-2 sm:py-4\"\n            }, void 0, false, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1MO0FBR25MLE1BQU1RLFVBQVU7SUFFWixNQUFNQyxZQUFZO1FBQ2Q7WUFBRUMsTUFBTTtZQUFRQyxNQUFNWCxxSkFBUUE7WUFBRVksS0FBSztRQUFPO1FBQzVDO1lBQUVGLE1BQU07WUFBV0MsTUFBTVQscUpBQVVBO1lBQUVVLEtBQUs7UUFBVTtRQUNwRDtZQUFFRixNQUFNO1lBQVNDLE1BQU1WLHFKQUFXQTtZQUFFVyxLQUFLO1FBQVE7UUFDakQ7WUFBRUYsTUFBTTtZQUFVQyxNQUFNTixxSkFBS0E7WUFBRU8sS0FBSztRQUFTO1FBQzdDO1lBQUVGLE1BQU07WUFBV0MsTUFBTVAscUpBQVFBO1lBQUVRLEtBQUs7UUFBVTtRQUNsRDtZQUFFRixNQUFNO1lBQVlDLE1BQU1SLHFKQUFZQTtZQUFFUyxLQUFLO1FBQVc7S0FDM0Q7SUFFRCxxQkFDSSw4REFBQ0M7UUFBTUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNYLDRFQUFDUixxSkFBSUE7b0JBQ0RVLE1BQUs7b0JBQ0xGLFdBQVU7O3NDQUVWLDhEQUFDUCxxSkFBUUE7NEJBQUNPLFdBQVU7Ozs7OztzQ0FDcEIsOERBQUNHOzRCQUFLSCxXQUFVO3NDQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEMsOERBQUNDO2dCQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7QUFJM0I7S0EzQk1OO0FBNkJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudHN4PzBjYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcHV0ZXIsIEdsYXNzZXNJY29uLCBQdXp6bGVJY29uLCBTZXR0aW5nc0ljb24sIFVzZXJJY29uLCBVc2VycywgTWVudSwgWCwgSG9tZSwgTGluZUNoYXJ0LCBMaW5rLCBQYWNrYWdlLCBQYWNrYWdlMiwgU2V0dGluZ3MsIFNob3BwaW5nQ2FydCwgVXNlcnMyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IFRvb2x0aXAsIFRvb2x0aXBDb250ZW50LCBUb29sdGlwVHJpZ2dlciB9IGZyb20gJy4vdWkvVG9vbFRpcCc7XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAgICAgIHsgbmFtZTogJ1BsYXknLCBpY29uOiBDb21wdXRlciwga2V5OiAncGxheScgfSxcbiAgICAgICAgeyBuYW1lOiAnUHV6emxlcycsIGljb246IFB1enpsZUljb24sIGtleTogJ3B1enpsZXMnIH0sXG4gICAgICAgIHsgbmFtZTogJ1dhdGNoJywgaWNvbjogR2xhc3Nlc0ljb24sIGtleTogJ3dhdGNoJyB9LFxuICAgICAgICB7IG5hbWU6ICdTb2NpYWwnLCBpY29uOiBVc2Vycywga2V5OiAnc29jaWFsJyB9LFxuICAgICAgICB7IG5hbWU6ICdQcm9maWxlJywgaWNvbjogVXNlckljb24sIGtleTogJ3Byb2ZpbGUnIH0sXG4gICAgICAgIHsgbmFtZTogJ1NldHRpbmdzJywgaWNvbjogU2V0dGluZ3NJY29uLCBrZXk6ICdzZXR0aW5ncycgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LXktMCBsZWZ0LTAgei0xMCBoaWRkZW4gdy0xNCBmbGV4LWNvbCBib3JkZXItciBiZy1iYWNrZ3JvdW5kIHNtOmZsZXhcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTQgcHgtMiBzbTpweS00XCI+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBmbGV4IGgtOSB3LTkgc2hyaW5rLTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBtZDpoLTggbWQ6dy04IG1kOnRleHQtYmFzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8UGFja2FnZTIgY2xhc3NOYW1lPVwiaC00IHctNCB0cmFuc2l0aW9uLWFsbCBncm91cC1ob3ZlcjpzY2FsZS0xMTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+QWNtZSBJbmM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibXQtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNCBweC0yIHNtOnB5LTRcIj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2FzaWRlPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sIm5hbWVzIjpbIkNvbXB1dGVyIiwiR2xhc3Nlc0ljb24iLCJQdXp6bGVJY29uIiwiU2V0dGluZ3NJY29uIiwiVXNlckljb24iLCJVc2VycyIsIkxpbmsiLCJQYWNrYWdlMiIsIlNpZGViYXIiLCJtZW51SXRlbXMiLCJuYW1lIiwiaWNvbiIsImtleSIsImFzaWRlIiwiY2xhc3NOYW1lIiwibmF2IiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SideBar.tsx\n"));

/***/ })

});