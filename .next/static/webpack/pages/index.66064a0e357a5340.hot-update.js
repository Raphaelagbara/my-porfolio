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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\nvar Timeline = function() {\n    _s();\n    // const [activeItem, setActiveItem] = useState(0);\n    var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // const scroll = (node, left) => {\n    //   return node.scrollTo({ left, behavior: 'smooth' });\n    // }\n    // const handleClick = (e, i) => {\n    //   e.preventDefault();\n    //   if (carouselRef.current) {\n    //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));\n    //     scroll(carouselRef.current, scrollLeft);\n    //   }\n    // }\n    // const handleScroll = () => {\n    //   if (carouselRef.current) {\n    //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);\n    //     setActiveItem(index);\n    //   }\n    // }\n    // // snap back to beginning of scroll when window is resized\n    // // avoids a bug where content is covered up if coming from smaller screen\n    // useEffect(() => {\n    //   const handleResize = () => {\n    //     scroll(carouselRef.current, 0);\n    //   }\n    //   window.addEventListener('resize', handleResize);\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n        id: \"about\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n                children: \"how i started\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n                ref: carouselRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function(item, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n                            final: index === TOTAL_CAROUSEL_COUNT - 1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                                index: index\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                            lineNumber: 54,\n                            columnNumber: 9\n                        }, _this);\n                    })\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n                lineNumber: 51,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\portfolio\\\\my-porfolio\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n        lineNumber: 46,\n        columnNumber: 4\n    }, _this);\n};\n_s(Timeline, \"tFDqjupRFhy2WgqEeSf1lC9Fk5g=\");\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyRDtBQUU0STtBQUNwRztBQUMxQztBQUV6RCxJQUFNa0IsdUJBQXVCRCxxRUFBbUI7QUFFaEQsSUFBTUcsV0FBVyxXQUFNOztJQUNyQixtREFBbUQ7SUFDbkQsSUFBTUMsY0FBY25CLDZDQUFNQTtJQUUxQixtQ0FBbUM7SUFDbkMsd0RBQXdEO0lBQ3hELElBQUk7SUFFSixrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBRXhCLCtCQUErQjtJQUMvQix3R0FBd0c7SUFFeEcsK0NBQStDO0lBQy9DLE1BQU07SUFDTixJQUFJO0lBRUosK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixrSUFBa0k7SUFFbEksNEJBQTRCO0lBQzVCLE1BQU07SUFDTixJQUFJO0lBRUosNkRBQTZEO0lBQzdELDRFQUE0RTtJQUM1RSxvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLHNDQUFzQztJQUN0QyxNQUFNO0lBRU4scURBQXFEO0lBQ3JELFVBQVU7SUFFVixxQkFDQyw4REFBQ1csNkRBQU9BO1FBQUNTLElBQUc7OzBCQUNYLDhEQUFDTixrRUFBWUE7MEJBQUM7Ozs7OzswQkFDZCw4REFBQ0QsaUVBQVdBOzBCQUFDOzs7Ozs7MEJBR2IsOERBQUNSLDhEQUFpQkE7Z0JBQUNnQixLQUFLRjswQkFDdEI7OEJBQ0NKLGtFQUFnQixDQUFDLFNBQUNRLE1BQUtDOzZDQUN0Qiw4REFBQ2QscUVBQXdCQTs0QkFBYWUsT0FBT0QsVUFBVVIsdUJBQXFCO3NDQUMxRSw0RUFBQ1YseURBQVlBO2dDQUNia0IsT0FBT0E7Ozs7OzsyQkFGc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdkM7R0ExRE1OO0tBQUFBO0FBNEROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lLmpzPzkxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2Fyb3VzZWxCdXR0b24sIENhcm91c2VsQnV0dG9uRG90LCBDYXJvdXNlbEJ1dHRvbnMsIENhcm91c2VsQ29udGFpbmVyLCBDYXJvdXNlbEl0ZW0sIENhcm91c2VsSXRlbUltZywgQ2Fyb3VzZWxJdGVtVGV4dCwgQ2Fyb3VzZWxJdGVtVGl0bGUsIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSB9IGZyb20gJy4vVGltZUxpbmVTdHlsZXMnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcbiAgLy8gY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XG5cbiAgLy8gY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcbiAgLy8gICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgLy8gfVxuXG4gIC8vIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAvLyAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNyAqIChpIC8gVGltZUxpbmVEYXRhLmxlbmd0aCkpO1xuICAgICAgXG4gIC8vICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAvLyAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gIC8vICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKiBUaW1lTGluZURhdGEubGVuZ3RoKTtcblxuICAvLyAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICAvLyAvLyBhdm9pZHMgYSBidWcgd2hlcmUgY29udGVudCBpcyBjb3ZlcmVkIHVwIGlmIGNvbWluZyBmcm9tIHNtYWxsZXIgc2NyZWVuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAvLyAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xuICAvLyAgIH1cblxuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgIDxTZWN0aW9uIGlkPVwiYWJvdXRcIj5cbiAgICA8U2VjdGlvblRpdGxlPkFib3V0IE1lPC9TZWN0aW9uVGl0bGU+XG4gICAgPFNlY3Rpb25UZXh0PlxuICAgICAgaG93IGkgc3RhcnRlZFxuICAgIDwvU2VjdGlvblRleHQ+XG4gICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9PlxuICAgICAgPD5cbiAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLGluZGV4KT0+KFxuICAgICAgICA8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIGtleT17aW5kZXh9IGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQtMX0+XG4gICAgICAgICAgPENhcm91c2VsSXRlbVxuICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8L0Nhcm91c2VsSXRlbT4gXG5cbiAgICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+XG4gICAgICApKX1cbiAgICAgIDwvPlxuXG4gICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cbiAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJDYXJvdXNlbEJ1dHRvbiIsIkNhcm91c2VsQnV0dG9uRG90IiwiQ2Fyb3VzZWxCdXR0b25zIiwiQ2Fyb3VzZWxDb250YWluZXIiLCJDYXJvdXNlbEl0ZW0iLCJDYXJvdXNlbEl0ZW1JbWciLCJDYXJvdXNlbEl0ZW1UZXh0IiwiQ2Fyb3VzZWxJdGVtVGl0bGUiLCJDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUiLCJTZWN0aW9uIiwiU2VjdGlvbkRpdmlkZXIiLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25UaXRsZSIsIlRpbWVMaW5lRGF0YSIsIlRPVEFMX0NBUk9VU0VMX0NPVU5UIiwibGVuZ3RoIiwiVGltZWxpbmUiLCJjYXJvdXNlbFJlZiIsImlkIiwicmVmIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZmluYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n"));

/***/ })

});