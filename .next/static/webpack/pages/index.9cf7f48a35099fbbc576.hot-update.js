self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Adeoti\\.vscode\\DIGIFIGS\\TODO LIST NEXTjs\\pages\\index.js",
    _s = $RefreshSig$();



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "pages__Wrapper",
  componentId: "n41r2g-0"
})(["color:#000000;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;html{font-size:10px;}input{width:20rem;padding:.8rem;}button{margin-left:1rem;padding:.8rem;width:5rem;background-color:transparent;border-radius:5px;}.todo{font-size:1.5rem;text-align:left;}"]);
_c = Wrapper;

const index = () => {
  _s();

  const {
    0: userInput,
    1: setUserInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: todoLIst,
    1: settodoList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const handleSubmit = e => {
    e.preventDefault();
    settodoList([userInput, ...todoLIst]);
    setUserInput("");
  };

  const handleChange = e => {
    e.preventDefault();
    setUserInput(e.target.value);
    console.log(userInput);
  };

  const handleDelete = todo => {
    const updateArr = todoLIst.filter(todoItem => todoLIst.indexOf(todoItem) != todoLIst.indexOf(todo));
    settodoList(updateArr);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Next js todo list"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        action: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          value: userInput,
          placeholder: "Enter Todo Item",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: handleSubmit,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: todoLIst.length >= 1 ? todoLIst.map((todo, idx) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [todo, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: e => {
                e.preventDefault();
                handleDelete(todo);
              },
              children: "DELETE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 57
            }, undefined)]
          }, idx, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 36
          }, undefined);
        }) : "Enter a todo item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, undefined);
};

_s(index, "yjcCLUEAh4I0OA8XixLloAmRpS8=");

/* harmony default export */ __webpack_exports__["default"] = (index);

var _c;

$RefreshReg$(_c, "Wrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidXNlU3RhdGUiLCJ0b2RvTElzdCIsInNldHRvZG9MaXN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsInVwZGF0ZUFyciIsImZpbHRlciIsInRvZG9JdGVtIiwiaW5kZXhPZiIsImxlbmd0aCIsIm1hcCIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsb1RBQWI7S0FBTUQsTzs7QUEyQk4sTUFBTUUsS0FBSyxHQUFDLE1BQUk7QUFBQTs7QUFDWixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVdDO0FBQVgsTUFBeUJDLCtDQUFRLENBQUMsRUFBRCxDQUF2QztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF1QkYsK0NBQVEsQ0FBQyxFQUFELENBQXJDOztBQUVBLFFBQU1HLFlBQVksR0FBRUMsQ0FBRCxJQUFLO0FBQ3BCQSxLQUFDLENBQUNDLGNBQUY7QUFFQUgsZUFBVyxDQUFDLENBQ1JKLFNBRFEsRUFFUixHQUFHRyxRQUZLLENBQUQsQ0FBWDtBQUtBRixnQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNILEdBVEQ7O0FBV0EsUUFBTU8sWUFBWSxHQUFFRixDQUFELElBQUs7QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBTixnQkFBWSxDQUFDSyxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixTQUFaO0FBQ0gsR0FKRDs7QUFLQSxRQUFNYSxZQUFZLEdBQUVDLElBQUQsSUFBUTtBQUN2QixVQUFNQyxTQUFTLEdBQUNaLFFBQVEsQ0FBQ2EsTUFBVCxDQUFnQkMsUUFBUSxJQUFHZCxRQUFRLENBQUNlLE9BQVQsQ0FBaUJELFFBQWpCLEtBQTZCZCxRQUFRLENBQUNlLE9BQVQsQ0FBaUJKLElBQWpCLENBQXhELENBQWhCO0FBQ0FWLGVBQVcsQ0FBQ1csU0FBRCxDQUFYO0FBQ0gsR0FIRDs7QUFJQSxzQkFDSSw4REFBQyxPQUFEO0FBQUEsMkJBQ0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQU0sY0FBTSxFQUFDLEVBQWI7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGVBQUssRUFBRWYsU0FBMUI7QUFBcUMscUJBQVcsRUFBQyxpQkFBakQ7QUFBbUUsa0JBQVEsRUFBRVE7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQVEsaUJBQU8sRUFBRUgsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBTUk7QUFBQSxrQkFFUUYsUUFBUSxDQUFDZ0IsTUFBVCxJQUFpQixDQUFqQixHQUFtQmhCLFFBQVEsQ0FBQ2lCLEdBQVQsQ0FBYSxDQUFDTixJQUFELEVBQU1PLEdBQU4sS0FBWTtBQUN4Qyw4QkFBTztBQUFBLHVCQUFlUCxJQUFmLG9CQUFxQjtBQUFRLHFCQUFPLEVBQUdSLENBQUQsSUFBSztBQUM5Q0EsaUJBQUMsQ0FBQ0MsY0FBRjtBQUNBTSw0QkFBWSxDQUFDQyxJQUFELENBQVo7QUFDSCxlQUgyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBckI7QUFBQSxhQUFTTyxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVA7QUFJSCxTQUxrQixDQUFuQixHQU1DO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFzQkgsQ0E5Q0Q7O0dBQU10QixLOztBQStDTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Y2Y3ZjQ4YTM1MDk5ZmJiYzU3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaHRtbHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgcGFkZGluZzogLjhyZW07XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogLjhyZW07XHJcbiAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLnRvZG97XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgaW5kZXg9KCk9PntcclxuICAgIGNvbnN0IFt1c2VySW5wdXQsc2V0VXNlcklucHV0XT11c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt0b2RvTElzdCxzZXR0b2RvTGlzdF09dXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0PShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBzZXR0b2RvTGlzdChbXHJcbiAgICAgICAgICAgIHVzZXJJbnB1dCxcclxuICAgICAgICAgICAgLi4udG9kb0xJc3RcclxuICAgICAgICBdKVxyXG5cclxuICAgICAgICBzZXRVc2VySW5wdXQoXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2U9KGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0VXNlcklucHV0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJbnB1dClcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZT0odG9kbyk9PntcclxuICAgICAgICBjb25zdCB1cGRhdGVBcnI9dG9kb0xJc3QuZmlsdGVyKHRvZG9JdGVtID0+dG9kb0xJc3QuaW5kZXhPZih0b2RvSXRlbSkgIT10b2RvTElzdC5pbmRleE9mKHRvZG8pKVxyXG4gICAgICAgIHNldHRvZG9MaXN0KHVwZGF0ZUFycilcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5OZXh0IGpzIHRvZG8gbGlzdDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcklucHV0fSBwbGFjZWhvbGRlcj1cIkVudGVyIFRvZG8gSXRlbVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0xJc3QubGVuZ3RoPj0xP3RvZG9MSXN0Lm1hcCgodG9kbyxpZHgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aWR4fT57dG9kb30gPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUodG9kbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRFTEVURTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcIkVudGVyIGEgdG9kbyBpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9