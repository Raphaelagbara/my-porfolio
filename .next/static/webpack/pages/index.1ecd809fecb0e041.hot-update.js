"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\nvar Timeline = function() {\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), activeItem = _useState[0], setActiveItem = _useState[1];\n    var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var scroll = function(node, left) {\n        return node.scrollTo({\n            left: left,\n            behavior: \"smooth\"\n        });\n    };\n    var handleClick = function(e, i) {\n        e.preventDefault();\n        if (carouselRef.current) {\n            var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));\n            scroll(carouselRef.current, scrollLeft);\n        }\n    };\n    var handleScroll = function() {\n        if (carouselRef.current) {\n            var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);\n            setActiveItem(index);\n        }\n    };\n    // // snap back to beginning of scroll when window is resized\n    // // avoids a bug where content is covered up if coming from smaller screen\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleResize = function() {\n            scroll(carouselRef.current, 0);\n        };\n        window.addEventListener(\"resize\", handleResize);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n        id: \"about\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n                children: \"My name is Raphael Agbara, I am a graduate of Computer Science from Kaduna State University. I am very passionate about offering s\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n                ref: carouselRef,\n                onScroll: handleScroll,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function(item, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n                            final: index === TOTAL_CAROUSEL_COUNT - 1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                                index: index,\n                                id: \"carousel__item-\".concat(index),\n                                active: activeItem,\n                                onClick: function(e) {\n                                    return handleClick(e, index);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {\n                                        children: [\n                                            item.year,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {\n                                                width: \"208\",\n                                                height: \"6\",\n                                                viewBox: \"0 0 208 6\",\n                                                fill: \"none\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        \"fill-rule\": \"evenodd\",\n                                                        \"clip-rule\": \"evenodd\",\n                                                        d: \"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z\",\n                                                        fill: \"url(#paint0_linear)\",\n                                                        \"fill-opacity\": \"0.33\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 21\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                                                            id: \"paint0_linear\",\n                                                            x1: \"-4.30412e-10\",\n                                                            y1: \"0.5\",\n                                                            x2: \"208\",\n                                                            y2: \"0.500295\",\n                                                            gradientUnits: \"userSpaceOnUse\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                    \"stop-color\": \"white\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                                                                    lineNumber: 90,\n                                                                    columnNumber: 25\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                    offset: \"0.79478\",\n                                                                    \"stop-color\": \"white\",\n                                                                    \"stop-opacity\": \"0\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                                                                    lineNumber: 91,\n                                                                    columnNumber: 25\n                                                                }, _this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 23\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {\n                                        children: item.text\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {\n                children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {\n                        index: index,\n                        active: activeItem,\n                        onClick: function(e) {\n                            return handleClick(e, index);\n                        },\n                        type: \"button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {\n                            active: activeItem\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this);\n};\n_s(Timeline, \"qE2Y7awmqdFA9rYczLkhjQwwAdI=\");\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxrRUFBZ0IsQ0FBQyxTQUFDK0IsTUFBTVQ7eUNBQ3ZCLDhEQUFDbkMsMkRBQWNBO3dCQUVibUMsT0FBT0E7d0JBQ1BXLFFBQVE3Qjt3QkFDUjhCLFNBQVMsU0FBQ3JCO21DQUFNRCxZQUFZQyxHQUFHUzs7d0JBQy9Cb0MsTUFBSztrQ0FFTCw0RUFBQ3RFLDhEQUFpQkE7NEJBQUM2QyxRQUFRN0I7Ozs7Ozt1QkFOdEJrQjs7Ozs7Ozs7Ozs7MEJBVVgsOERBQUN6QixvRUFBY0E7Ozs7Ozs7Ozs7O0FBR3JCO0dBakhNTTtLQUFBQTtBQW1ITiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcz85MTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhcm91c2VsQnV0dG9uLCBDYXJvdXNlbEJ1dHRvbkRvdCwgQ2Fyb3VzZWxCdXR0b25zLCBDYXJvdXNlbENvbnRhaW5lciwgQ2Fyb3VzZWxJdGVtLCBDYXJvdXNlbEl0ZW1JbWcsIENhcm91c2VsSXRlbVRleHQsIENhcm91c2VsSXRlbVRpdGxlLCBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUgfSBmcm9tICcuL1RpbWVMaW5lU3R5bGVzJztcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgVGltZUxpbmVEYXRhIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gVGltZUxpbmVEYXRhLmxlbmd0aDtcblxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiB7XG4gICAgcmV0dXJuIG5vZGUuc2Nyb2xsVG8oeyBsZWZ0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNyAqIChpIC8gVGltZUxpbmVEYXRhLmxlbmd0aCkpO1xuICAgICAgXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XG4gICAgIH1cbiAgIH1cblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKiBUaW1lTGluZURhdGEubGVuZ3RoKTtcblxuICAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgIH1cbiAgIH1cblxuICAvLyAvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG4gIC8vIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XG4gICAgfVxuXG4gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuICAgICAgPFNlY3Rpb25UaXRsZT5BYm91dCBNZTwvU2VjdGlvblRpdGxlPlxuICAgICAgPFNlY3Rpb25UZXh0PlxuICAgICAgICBNeSBuYW1lIGlzIFJhcGhhZWwgQWdiYXJhLCBJIGFtIGEgZ3JhZHVhdGUgb2YgQ29tcHV0ZXIgU2NpZW5jZSBmcm9tIEthZHVuYSBTdGF0ZSBVbml2ZXJzaXR5LlxuICAgICAgICBJIGFtIHZlcnkgcGFzc2lvbmF0ZSBhYm91dCBvZmZlcmluZyBzXG4gICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxuICAgICAgICA8PlxuICAgICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBmaW5hbD17aW5kZXggPT09IFRPVEFMX0NBUk9VU0VMX0NPVU5UIC0gMX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpZD17YGNhcm91c2VsX19pdGVtLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnllYXJ9XG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjA4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNlwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDUuNUMzLjg4MDcxIDUuNSA1IDQuMzgwNzEgNSAzVjMuNUwyMDggMy41MDAwMlYyLjUwMDAyTDUgMi41VjNDNSAxLjYxOTI5IDMuODgwNzEgMC41IDIuNSAwLjVDMS4xMTkyOSAwLjUgMCAxLjYxOTI5IDAgM0MwIDQuMzgwNzEgMS4xMTkyOSA1LjUgMi41IDUuNVpcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXIpXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjMzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCItNC4zMDQxMmUtMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDI9XCIyMDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCIwLjUwMDI5NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwLjc5NDc4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtSW1nPlxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cbiAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XG4gICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvblxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25Eb3QgYWN0aXZlPXthY3RpdmVJdGVtfSAvPlxuICAgICAgICAgIDwvQ2Fyb3VzZWxCdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbEJ1dHRvbnM+XG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiQ2Fyb3VzZWxCdXR0b24iLCJDYXJvdXNlbEJ1dHRvbkRvdCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQ29udGFpbmVyIiwiQ2Fyb3VzZWxJdGVtIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIiwiU2VjdGlvbiIsIlNlY3Rpb25EaXZpZGVyIiwiU2VjdGlvblRleHQiLCJTZWN0aW9uVGl0bGUiLCJUaW1lTGluZURhdGEiLCJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsImxlbmd0aCIsIlRpbWVsaW5lIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlkIiwicmVmIiwib25TY3JvbGwiLCJtYXAiLCJpdGVtIiwiZmluYWwiLCJhY3RpdmUiLCJvbkNsaWNrIiwieWVhciIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJmaWxsLXJ1bGUiLCJjbGlwLXJ1bGUiLCJkIiwiZmlsbC1vcGFjaXR5IiwiZGVmcyIsImxpbmVhckdyYWRpZW50IiwieDEiLCJ5MSIsIngyIiwieTIiLCJncmFkaWVudFVuaXRzIiwic3RvcCIsInN0b3AtY29sb3IiLCJvZmZzZXQiLCJzdG9wLW9wYWNpdHkiLCJ0ZXh0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n"));

/***/ })

});