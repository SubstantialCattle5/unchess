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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/computer.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/puzzle.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/glasses.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/users.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/user.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/settings.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/ToolTip */ \"(app-pages-browser)/./src/components/ui/ToolTip.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/../../node_modules/next/dist/api/link.js\");\n/* harmony import */ var _ModeToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModeToggle */ \"(app-pages-browser)/./src/components/ModeToggle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { show, setter } = param;\n    _s();\n    const router = useRout;\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const menuItems = [\n        {\n            name: \"Play\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            key: \"play\"\n        },\n        {\n            name: \"Puzzles\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            key: \"puzzles\"\n        },\n        {\n            name: \"Watch\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            key: \"watch\"\n        },\n        {\n            name: \"Social\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            key: \"social\"\n        },\n        {\n            name: \"Profile\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            key: \"profile\"\n        },\n        {\n            name: \"Settings\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n            key: \"settings\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"fixed inset-y-0 left-0 z-10 \".concat(isOpen ? \"w-64\" : \"w-16\", \" flex flex-col border-r bg-gray-900 text-gray-100 transition-all duration-300 ease-in-out\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between pl-3 pt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"\".concat(isOpen ? \"block\" : \"hidden\", \" text-xl font-bold text-white\"),\n                        children: \"UNChess\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-2 text-gray-100 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700\",\n                        onClick: ()=>setIsOpen(!isOpen),\n                        children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 31\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 59\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.TooltipProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex flex-col items-stretch gap-1 px-2 py-4\",\n                    children: menuItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.TooltipTrigger, {\n                                    asChild: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"#\",\n                                        className: \"flex items-center p-3 w-full rounded-lg transition-transform transform duration-300 ease-in-out \".concat(isOpen ? \"hover:bg-gray-700 hover:scale-105\" : \"text-gray-400 hover:text-gray-100 hover:bg-zinc-500\", \" \").concat(isOpen ? \"hover:shadow-md\" : \"\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                                className: \"h-6 w-6\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"ml-4 text-lg font-medium\",\n                                                children: item.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 48\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, undefined),\n                                !isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.TooltipContent, {\n                                    side: \"right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-sm font-medium\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, item.key, true, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-auto p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModeToggle__WEBPACK_IMPORTED_MODULE_4__.ModeToggle, {}, void 0, false, {\n                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Sidebar, \"mEi83NlPXQzy/XIDfTYWzOSvaHw=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3dEO0FBQ0Q7QUFDM0Q7QUFDYTtBQUUxQyxNQUFNZSxVQUFVO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7O0lBQzdCLE1BQU1DLFNBQVNDO0lBQ2YsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNc0IsWUFBWTtRQUNkO1lBQUVDLE1BQU07WUFBUUMsTUFBTXZCLDhIQUFRQTtZQUFFd0IsS0FBSztRQUFPO1FBQzVDO1lBQUVGLE1BQU07WUFBV0MsTUFBTXJCLDhIQUFNQTtZQUFFc0IsS0FBSztRQUFVO1FBQ2hEO1lBQUVGLE1BQU07WUFBU0MsTUFBTXRCLDhIQUFPQTtZQUFFdUIsS0FBSztRQUFRO1FBQzdDO1lBQUVGLE1BQU07WUFBVUMsTUFBTWxCLDhIQUFLQTtZQUFFbUIsS0FBSztRQUFTO1FBQzdDO1lBQUVGLE1BQU07WUFBV0MsTUFBTW5CLDhIQUFJQTtZQUFFb0IsS0FBSztRQUFVO1FBQzlDO1lBQUVGLE1BQU07WUFBWUMsTUFBTXBCLCtIQUFRQTtZQUFFcUIsS0FBSztRQUFXO0tBQ3ZEO0lBRUQscUJBQ0ksOERBQUNDO1FBQU1DLFdBQVcsK0JBQXdELE9BQXpCUCxTQUFTLFNBQVMsUUFBTzs7MEJBQ3RFLDhEQUFDUTtnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNFO3dCQUFHRixXQUFXLEdBQStCLE9BQTVCUCxTQUFTLFVBQVUsVUFBUztrQ0FBZ0M7Ozs7OztrQ0FDOUUsOERBQUNVO3dCQUNHSCxXQUFVO3dCQUNWSSxTQUFTLElBQU1WLFVBQVUsQ0FBQ0Q7a0NBRXpCQSx1QkFBUyw4REFBQ1osK0hBQUNBOzRCQUFDbUIsV0FBVTs7Ozs7c0RBQWUsOERBQUNwQiwrSEFBSUE7NEJBQUNvQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHOUQsOERBQUNoQix3REFBZUE7MEJBQ1osNEVBQUNxQjtvQkFBSUwsV0FBVTs4QkFDVkwsVUFBVVcsR0FBRyxDQUFDLENBQUNDLHFCQUNaLDhEQUFDekIsZ0RBQU9BOzs4Q0FDSiw4REFBQ0csdURBQWNBO29DQUFDdUIsT0FBTzs4Q0FDbkIsNEVBQUN0QixpREFBSUE7d0NBQUN1QixNQUFLO3dDQUFJVCxXQUFXLG1HQUEyTVAsT0FBeEdBLFNBQVMsc0NBQXNDLHVEQUFzRCxLQUFtQyxPQUFoQ0EsU0FBUyxvQkFBb0I7OzBEQUM5UCw4REFBQ2MsS0FBS1YsSUFBSTtnREFBQ0csV0FBVTs7Ozs7OzRDQUNwQlAsd0JBQVUsOERBQUNpQjtnREFBS1YsV0FBVTswREFBNEJPLEtBQUtYLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUd2RSxDQUFDSCx3QkFDRSw4REFBQ1YsdURBQWNBO29DQUFDNEIsTUFBSzs4Q0FDakIsNEVBQUNEO3dDQUFLVixXQUFVO2tEQUF1Qk8sS0FBS1gsSUFBSTs7Ozs7Ozs7Ozs7OzJCQVQ5Q1csS0FBS1QsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OzBCQWdCbEMsOERBQUNHO2dCQUFJRCxXQUFVOzBCQUNYLDRFQUFDYixtREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7R0FoRE1DO0tBQUFBO0FBa0ROLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudHN4PzBjYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21wdXRlciwgR2xhc3NlcywgUHV6emxlLCBTZXR0aW5ncywgVXNlciwgVXNlcnMsIE1lbnUsIFggfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgVG9vbHRpcCwgVG9vbHRpcENvbnRlbnQsIFRvb2x0aXBQcm92aWRlciwgVG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuL3VpL1Rvb2xUaXAnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IE1vZGVUb2dnbGUgfSBmcm9tICcuL01vZGVUb2dnbGUnO1xuXG5jb25zdCBTaWRlYmFyID0gKHsgc2hvdywgc2V0dGVyIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgICAgICB7IG5hbWU6ICdQbGF5JywgaWNvbjogQ29tcHV0ZXIsIGtleTogJ3BsYXknIH0sXG4gICAgICAgIHsgbmFtZTogJ1B1enpsZXMnLCBpY29uOiBQdXp6bGUsIGtleTogJ3B1enpsZXMnIH0sXG4gICAgICAgIHsgbmFtZTogJ1dhdGNoJywgaWNvbjogR2xhc3Nlcywga2V5OiAnd2F0Y2gnIH0sXG4gICAgICAgIHsgbmFtZTogJ1NvY2lhbCcsIGljb246IFVzZXJzLCBrZXk6ICdzb2NpYWwnIH0sXG4gICAgICAgIHsgbmFtZTogJ1Byb2ZpbGUnLCBpY29uOiBVc2VyLCBrZXk6ICdwcm9maWxlJyB9LFxuICAgICAgICB7IG5hbWU6ICdTZXR0aW5ncycsIGljb246IFNldHRpbmdzLCBrZXk6ICdzZXR0aW5ncycgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17YGZpeGVkIGluc2V0LXktMCBsZWZ0LTAgei0xMCAke2lzT3BlbiA/ICd3LTY0JyA6ICd3LTE2J30gZmxleCBmbGV4LWNvbCBib3JkZXItciBiZy1ncmF5LTkwMCB0ZXh0LWdyYXktMTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dGB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcGwtMyBwdC0yXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7aXNPcGVuID8gJ2Jsb2NrJyA6ICdoaWRkZW4nfSB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlYH0+VU5DaGVzczwvaDE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdGV4dC1ncmF5LTEwMCBiZy1ncmF5LTgwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpc09wZW4gPyA8WCBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz4gOiA8TWVudSBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz59XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxUb29sdGlwUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0cmV0Y2ggZ2FwLTEgcHgtMiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBrZXk9e2l0ZW0ua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBwLTMgdy1mdWxsIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCAke2lzT3BlbiA/ICdob3ZlcjpiZy1ncmF5LTcwMCBob3ZlcjpzY2FsZS0xMDUnIDogJ3RleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTEwMCBob3ZlcjpiZy16aW5jLTUwMCd9ICR7aXNPcGVuID8gJ2hvdmVyOnNoYWRvdy1tZCcgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNPcGVuICYmIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1sZyBmb250LW1lZGl1bVwiPntpdGVtLm5hbWV9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcFRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc09wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcENvbnRlbnQgc2lkZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L1Rvb2x0aXBQcm92aWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBwLTRcIj5cbiAgICAgICAgICAgICAgICA8TW9kZVRvZ2dsZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb21wdXRlciIsIkdsYXNzZXMiLCJQdXp6bGUiLCJTZXR0aW5ncyIsIlVzZXIiLCJVc2VycyIsIk1lbnUiLCJYIiwiVG9vbHRpcCIsIlRvb2x0aXBDb250ZW50IiwiVG9vbHRpcFByb3ZpZGVyIiwiVG9vbHRpcFRyaWdnZXIiLCJMaW5rIiwiTW9kZVRvZ2dsZSIsIlNpZGViYXIiLCJzaG93Iiwic2V0dGVyIiwicm91dGVyIiwidXNlUm91dCIsImlzT3BlbiIsInNldElzT3BlbiIsIm1lbnVJdGVtcyIsIm5hbWUiLCJpY29uIiwia2V5IiwiYXNpZGUiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuYXYiLCJtYXAiLCJpdGVtIiwiYXNDaGlsZCIsImhyZWYiLCJzcGFuIiwic2lkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SideBar.tsx\n"));

/***/ })

});