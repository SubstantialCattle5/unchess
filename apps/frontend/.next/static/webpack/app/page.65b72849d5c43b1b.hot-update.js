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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/computer.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/puzzle.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/glasses.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/users.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/user.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/settings.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/ToolTip */ \"(app-pages-browser)/./src/components/ui/ToolTip.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/../../node_modules/next/dist/api/link.js\");\n/* harmony import */ var _ModeToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModeToggle */ \"(app-pages-browser)/./src/components/ModeToggle.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/../../node_modules/next/dist/api/navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let {} = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const menuItems = [\n        {\n            name: \"Play\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            key: \"play\",\n            route: \"/play\"\n        },\n        {\n            name: \"Puzzles\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            key: \"puzzles\",\n            route: \"/puzzle\"\n        },\n        {\n            name: \"Watch\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            key: \"watch\",\n            route: \"/watch\"\n        },\n        {\n            name: \"Social\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            key: \"social\",\n            route: \"/social\"\n        },\n        {\n            name: \"Profile\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n            key: \"profile\",\n            route: \"/profile\"\n        },\n        {\n            name: \"Settings\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n            key: \"settings\",\n            route: \"/setting\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"fixed inset-y-0 left-0 z-10 \".concat(isOpen ? \"w-64\" : \"w-16\", \" flex flex-col border-r bg-primary-500 text-gray-100 transition-all duration-300 ease-in-out\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between pl-3 pt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"\".concat(isOpen ? \"block\" : \"hidden\", \" text-xl font-bold text-white\"),\n                        children: \"UNChess\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-2 text-gray-100 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700\",\n                        onClick: ()=>setIsOpen(!isOpen),\n                        children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 31\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 59\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.TooltipProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex flex-col items-stretch gap-1 px-2 py-4\",\n                    children: menuItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.TooltipTrigger, {\n                                    asChild: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: item.route,\n                                        className: \"flex items-center p-3 w-full rounded-lg transition-transform transform duration-300 ease-in-out \".concat(isOpen ? \"hover:bg-gray-700 hover:scale-105\" : \"text-gray-400 hover:text-gray-100 hover:bg-zinc-500\", \" \").concat(isOpen ? \"hover:shadow-md\" : \"\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                                className: \"h-6 w-6\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"ml-4 text-lg font-medium\",\n                                                children: item.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 48\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 29\n                                }, undefined),\n                                !isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.TooltipContent, {\n                                    side: \"right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-sm font-medium\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, item.key, true, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-auto p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModeToggle__WEBPACK_IMPORTED_MODULE_4__.ModeToggle, {}, void 0, false, {\n                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Sidebar, \"J3l0LaLumK52+AVwtQ7tkayGPsk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUN3RDtBQUNEO0FBQzNEO0FBQ2E7QUFDRTtBQUU1QyxNQUFNZ0IsVUFBVTtRQUFDLEVBQUc7O0lBQ2hCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUV4QixNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR25CLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1vQixZQUFZO1FBQ2Q7WUFBRUMsTUFBTTtZQUFRQyxNQUFNckIsOEhBQVFBO1lBQUVzQixLQUFLO1lBQVFDLE9BQU87UUFBUTtRQUM1RDtZQUFFSCxNQUFNO1lBQVdDLE1BQU1uQiw4SEFBTUE7WUFBRW9CLEtBQUs7WUFBV0MsT0FBTztRQUFVO1FBQ2xFO1lBQUVILE1BQU07WUFBU0MsTUFBTXBCLDhIQUFPQTtZQUFFcUIsS0FBSztZQUFTQyxPQUFPO1FBQVM7UUFDOUQ7WUFBRUgsTUFBTTtZQUFVQyxNQUFNaEIsOEhBQUtBO1lBQUVpQixLQUFLO1lBQVVDLE9BQU87UUFBVTtRQUMvRDtZQUFFSCxNQUFNO1lBQVdDLE1BQU1qQiwrSEFBSUE7WUFBRWtCLEtBQUs7WUFBV0MsT0FBTztRQUFXO1FBQ2pFO1lBQUVILE1BQU07WUFBWUMsTUFBTWxCLCtIQUFRQTtZQUFFbUIsS0FBSztZQUFZQyxPQUFPO1FBQVc7S0FDMUU7SUFFRCxxQkFDSSw4REFBQ0M7UUFBTUMsV0FBVywrQkFBd0QsT0FBekJSLFNBQVMsU0FBUyxRQUFPOzswQkFDdEUsOERBQUNTO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ0U7d0JBQUdGLFdBQVcsR0FBK0IsT0FBNUJSLFNBQVMsVUFBVSxVQUFTO2tDQUFnQzs7Ozs7O2tDQUM5RSw4REFBQ1c7d0JBQ0dILFdBQVU7d0JBQ1ZJLFNBQVMsSUFBTVgsVUFBVSxDQUFDRDtrQ0FFekJBLHVCQUFTLDhEQUFDViwrSEFBQ0E7NEJBQUNrQixXQUFVOzs7OztzREFBZSw4REFBQ25CLCtIQUFJQTs0QkFBQ21CLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc5RCw4REFBQ2Ysd0RBQWVBOzBCQUNaLDRFQUFDb0I7b0JBQUlMLFdBQVU7OEJBQ1ZOLFVBQVVZLEdBQUcsQ0FBQyxDQUFDQyxxQkFDWiw4REFBQ3hCLGdEQUFPQTs7OENBQ0osOERBQUNHLHVEQUFjQTtvQ0FBQ3NCLE9BQU87OENBQ25CLDRFQUFDckIsaURBQUlBO3dDQUFDc0IsTUFBTUYsS0FBS1QsS0FBSzt3Q0FBRUUsV0FBVyxtR0FBMk1SLE9BQXhHQSxTQUFTLHNDQUFzQyx1REFBc0QsS0FBbUMsT0FBaENBLFNBQVMsb0JBQW9COzswREFDdlEsOERBQUNlLEtBQUtYLElBQUk7Z0RBQUNJLFdBQVU7Ozs7Ozs0Q0FDcEJSLHdCQUFVLDhEQUFDa0I7Z0RBQUtWLFdBQVU7MERBQTRCTyxLQUFLWixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHdkUsQ0FBQ0gsd0JBQ0UsOERBQUNSLHVEQUFjQTtvQ0FBQzJCLE1BQUs7OENBQ2pCLDRFQUFDRDt3Q0FBS1YsV0FBVTtrREFBdUJPLEtBQUtaLElBQUk7Ozs7Ozs7Ozs7OzsyQkFUOUNZLEtBQUtWLEdBQUc7Ozs7Ozs7Ozs7Ozs7OzswQkFnQmxDLDhEQUFDSTtnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ1osbURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSTNCO0dBakRNRTs7UUFDYUQsc0RBQVNBOzs7S0FEdEJDO0FBbUROLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudHN4PzBjYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21wdXRlciwgR2xhc3NlcywgUHV6emxlLCBTZXR0aW5ncywgVXNlciwgVXNlcnMsIE1lbnUsIFggfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgVG9vbHRpcCwgVG9vbHRpcENvbnRlbnQsIFRvb2x0aXBQcm92aWRlciwgVG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuL3VpL1Rvb2xUaXAnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IE1vZGVUb2dnbGUgfSBmcm9tICcuL01vZGVUb2dnbGUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuY29uc3QgU2lkZWJhciA9ICh7IH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICAgICAgeyBuYW1lOiAnUGxheScsIGljb246IENvbXB1dGVyLCBrZXk6ICdwbGF5Jywgcm91dGU6IFwiL3BsYXlcIiB9LFxuICAgICAgICB7IG5hbWU6ICdQdXp6bGVzJywgaWNvbjogUHV6emxlLCBrZXk6ICdwdXp6bGVzJywgcm91dGU6IFwiL3B1enpsZVwiIH0sXG4gICAgICAgIHsgbmFtZTogJ1dhdGNoJywgaWNvbjogR2xhc3Nlcywga2V5OiAnd2F0Y2gnLCByb3V0ZTogXCIvd2F0Y2hcIiB9LFxuICAgICAgICB7IG5hbWU6ICdTb2NpYWwnLCBpY29uOiBVc2Vycywga2V5OiAnc29jaWFsJywgcm91dGU6IFwiL3NvY2lhbFwiIH0sXG4gICAgICAgIHsgbmFtZTogJ1Byb2ZpbGUnLCBpY29uOiBVc2VyLCBrZXk6ICdwcm9maWxlJywgcm91dGU6IFwiL3Byb2ZpbGVcIiB9LFxuICAgICAgICB7IG5hbWU6ICdTZXR0aW5ncycsIGljb246IFNldHRpbmdzLCBrZXk6ICdzZXR0aW5ncycsIHJvdXRlOiBcIi9zZXR0aW5nXCIgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17YGZpeGVkIGluc2V0LXktMCBsZWZ0LTAgei0xMCAke2lzT3BlbiA/ICd3LTY0JyA6ICd3LTE2J30gZmxleCBmbGV4LWNvbCBib3JkZXItciBiZy1wcmltYXJ5LTUwMCB0ZXh0LWdyYXktMTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dGB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcGwtMyBwdC0yXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7aXNPcGVuID8gJ2Jsb2NrJyA6ICdoaWRkZW4nfSB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlYH0+VU5DaGVzczwvaDE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdGV4dC1ncmF5LTEwMCBiZy1ncmF5LTgwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpc09wZW4gPyA8WCBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz4gOiA8TWVudSBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz59XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxUb29sdGlwUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0cmV0Y2ggZ2FwLTEgcHgtMiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBrZXk9e2l0ZW0ua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5yb3V0ZX0gY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgcC0zIHctZnVsbCByb3VuZGVkLWxnIHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtpc09wZW4gPyAnaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6c2NhbGUtMTA1JyA6ICd0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS0xMDAgaG92ZXI6YmctemluYy01MDAnfSAke2lzT3BlbiA/ICdob3ZlcjpzaGFkb3ctbWQnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzT3BlbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJtbC00IHRleHQtbGcgZm9udC1tZWRpdW1cIj57aXRlbS5uYW1lfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXNPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBDb250ZW50IHNpZGU9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9Ub29sdGlwUHJvdmlkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gcC00XCI+XG4gICAgICAgICAgICAgICAgPE1vZGVUb2dnbGUgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FzaWRlPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29tcHV0ZXIiLCJHbGFzc2VzIiwiUHV6emxlIiwiU2V0dGluZ3MiLCJVc2VyIiwiVXNlcnMiLCJNZW51IiwiWCIsIlRvb2x0aXAiLCJUb29sdGlwQ29udGVudCIsIlRvb2x0aXBQcm92aWRlciIsIlRvb2x0aXBUcmlnZ2VyIiwiTGluayIsIk1vZGVUb2dnbGUiLCJ1c2VSb3V0ZXIiLCJTaWRlYmFyIiwicm91dGVyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibWVudUl0ZW1zIiwibmFtZSIsImljb24iLCJrZXkiLCJyb3V0ZSIsImFzaWRlIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwibmF2IiwibWFwIiwiaXRlbSIsImFzQ2hpbGQiLCJocmVmIiwic3BhbiIsInNpZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SideBar.tsx\n"));

/***/ })

});