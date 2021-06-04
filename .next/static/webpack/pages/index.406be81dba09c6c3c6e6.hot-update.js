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
})(["color:#000000;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;html{font-size:10px;}input{width:20rem;padding:.8rem;}button{margin-left:1rem;padding:.8rem;width:5rem;background-color:transparent;border-radius:5px;}"]);
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
        lineNumber: 54,
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
          lineNumber: 56,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: handleSubmit,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
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
              lineNumber: 62,
              columnNumber: 57
            }, undefined)]
          }, idx, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 36
          }, undefined);
        }) : "Enter a todo item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidXNlU3RhdGUiLCJ0b2RvTElzdCIsInNldHRvZG9MaXN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsInVwZGF0ZUFyciIsImZpbHRlciIsInRvZG9JdGVtIiwiaW5kZXhPZiIsImxlbmd0aCIsIm1hcCIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsNFFBQWI7S0FBTUQsTzs7QUF1Qk4sTUFBTUUsS0FBSyxHQUFDLE1BQUk7QUFBQTs7QUFDWixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVdDO0FBQVgsTUFBeUJDLCtDQUFRLENBQUMsRUFBRCxDQUF2QztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF1QkYsK0NBQVEsQ0FBQyxFQUFELENBQXJDOztBQUVBLFFBQU1HLFlBQVksR0FBRUMsQ0FBRCxJQUFLO0FBQ3BCQSxLQUFDLENBQUNDLGNBQUY7QUFFQUgsZUFBVyxDQUFDLENBQ1JKLFNBRFEsRUFFUixHQUFHRyxRQUZLLENBQUQsQ0FBWDtBQUtBRixnQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNILEdBVEQ7O0FBV0EsUUFBTU8sWUFBWSxHQUFFRixDQUFELElBQUs7QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBTixnQkFBWSxDQUFDSyxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixTQUFaO0FBQ0gsR0FKRDs7QUFLQSxRQUFNYSxZQUFZLEdBQUVDLElBQUQsSUFBUTtBQUN2QixVQUFNQyxTQUFTLEdBQUNaLFFBQVEsQ0FBQ2EsTUFBVCxDQUFnQkMsUUFBUSxJQUFHZCxRQUFRLENBQUNlLE9BQVQsQ0FBaUJELFFBQWpCLEtBQTZCZCxRQUFRLENBQUNlLE9BQVQsQ0FBaUJKLElBQWpCLENBQXhELENBQWhCO0FBQ0FWLGVBQVcsQ0FBQ1csU0FBRCxDQUFYO0FBQ0gsR0FIRDs7QUFJQSxzQkFDSSw4REFBQyxPQUFEO0FBQUEsMkJBQ0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQU0sY0FBTSxFQUFDLEVBQWI7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGVBQUssRUFBRWYsU0FBMUI7QUFBcUMscUJBQVcsRUFBQyxpQkFBakQ7QUFBbUUsa0JBQVEsRUFBRVE7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQVEsaUJBQU8sRUFBRUgsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBTUk7QUFBQSxrQkFFUUYsUUFBUSxDQUFDZ0IsTUFBVCxJQUFpQixDQUFqQixHQUFtQmhCLFFBQVEsQ0FBQ2lCLEdBQVQsQ0FBYSxDQUFDTixJQUFELEVBQU1PLEdBQU4sS0FBWTtBQUN4Qyw4QkFBTztBQUFBLHVCQUFlUCxJQUFmLG9CQUFxQjtBQUFRLHFCQUFPLEVBQUdSLENBQUQsSUFBSztBQUM5Q0EsaUJBQUMsQ0FBQ0MsY0FBRjtBQUNBTSw0QkFBWSxDQUFDQyxJQUFELENBQVo7QUFDSCxlQUgyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBckI7QUFBQSxhQUFTTyxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVA7QUFJSCxTQUxrQixDQUFuQixHQU1DO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFzQkgsQ0E5Q0Q7O0dBQU10QixLOztBQStDTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MDZiZTgxZGJhMDljNmMzYzZlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaHRtbHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgcGFkZGluZzogLjhyZW07XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogLjhyZW07XHJcbiAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBpbmRleD0oKT0+e1xyXG4gICAgY29uc3QgW3VzZXJJbnB1dCxzZXRVc2VySW5wdXRdPXVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3RvZG9MSXN0LHNldHRvZG9MaXN0XT11c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQ9KGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIHNldHRvZG9MaXN0KFtcclxuICAgICAgICAgICAgdXNlcklucHV0LFxyXG4gICAgICAgICAgICAuLi50b2RvTElzdFxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIHNldFVzZXJJbnB1dChcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZT0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcklucHV0KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlPSh0b2RvKT0+e1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUFycj10b2RvTElzdC5maWx0ZXIodG9kb0l0ZW0gPT50b2RvTElzdC5pbmRleE9mKHRvZG9JdGVtKSAhPXRvZG9MSXN0LmluZGV4T2YodG9kbykpXHJcbiAgICAgICAgc2V0dG9kb0xpc3QodXBkYXRlQXJyKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPk5leHQganMgdG9kbyBsaXN0PC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VySW5wdXR9IHBsYWNlaG9sZGVyPVwiRW50ZXIgVG9kbyBJdGVtXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvTElzdC5sZW5ndGg+PTE/dG9kb0xJc3QubWFwKCh0b2RvLGlkeCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpZHh9Pnt0b2RvfSA8YnV0dG9uIG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZSh0b2RvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+REVMRVRFPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlwiRW50ZXIgYSB0b2RvIGl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvV3JhcHBlcj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=