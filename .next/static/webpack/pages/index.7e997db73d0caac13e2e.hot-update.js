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
})(["color:#000000;display:flex;flex-direction:column;align-items:center;"]);
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
        lineNumber: 38,
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
          lineNumber: 40,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: handleSubmit,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
              lineNumber: 46,
              columnNumber: 57
            }, undefined)]
          }, idx, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 36
          }, undefined);
        }) : "Enter a todo item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidXNlU3RhdGUiLCJ0b2RvTElzdCIsInNldHRvZG9MaXN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsInVwZGF0ZUFyciIsImZpbHRlciIsInRvZG9JdGVtIiwiaW5kZXhPZiIsImxlbmd0aCIsIm1hcCIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsNEVBQWI7S0FBTUQsTzs7QUFPTixNQUFNRSxLQUFLLEdBQUMsTUFBSTtBQUFBOztBQUNaLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUF5QkMsK0NBQVEsQ0FBQyxFQUFELENBQXZDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXVCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBckM7O0FBRUEsUUFBTUcsWUFBWSxHQUFFQyxDQUFELElBQUs7QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBSCxlQUFXLENBQUMsQ0FDUkosU0FEUSxFQUVSLEdBQUdHLFFBRkssQ0FBRCxDQUFYO0FBS0FGLGdCQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0gsR0FURDs7QUFXQSxRQUFNTyxZQUFZLEdBQUVGLENBQUQsSUFBSztBQUNwQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FOLGdCQUFZLENBQUNLLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQVo7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlaLFNBQVo7QUFDSCxHQUpEOztBQUtBLFFBQU1hLFlBQVksR0FBRUMsSUFBRCxJQUFRO0FBQ3ZCLFVBQU1DLFNBQVMsR0FBQ1osUUFBUSxDQUFDYSxNQUFULENBQWdCQyxRQUFRLElBQUdkLFFBQVEsQ0FBQ2UsT0FBVCxDQUFpQkQsUUFBakIsS0FBNkJkLFFBQVEsQ0FBQ2UsT0FBVCxDQUFpQkosSUFBakIsQ0FBeEQsQ0FBaEI7QUFDQVYsZUFBVyxDQUFDVyxTQUFELENBQVg7QUFDSCxHQUhEOztBQUlBLHNCQUNJLDhEQUFDLE9BQUQ7QUFBQSwyQkFDSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTSxjQUFNLEVBQUMsRUFBYjtBQUFBLGdDQUNJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsZUFBSyxFQUFFZixTQUExQjtBQUFxQyxxQkFBVyxFQUFDLGlCQUFqRDtBQUFtRSxrQkFBUSxFQUFFUTtBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBUSxpQkFBTyxFQUFFSCxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFNSTtBQUFBLGtCQUVRRixRQUFRLENBQUNnQixNQUFULElBQWlCLENBQWpCLEdBQW1CaEIsUUFBUSxDQUFDaUIsR0FBVCxDQUFhLENBQUNOLElBQUQsRUFBTU8sR0FBTixLQUFZO0FBQ3hDLDhCQUFPO0FBQUEsdUJBQWVQLElBQWYsb0JBQXFCO0FBQVEscUJBQU8sRUFBR1IsQ0FBRCxJQUFLO0FBQzlDQSxpQkFBQyxDQUFDQyxjQUFGO0FBQ0FNLDRCQUFZLENBQUNDLElBQUQsQ0FBWjtBQUNILGVBSDJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFyQjtBQUFBLGFBQVNPLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUDtBQUlILFNBTGtCLENBQW5CLEdBTUM7QUFSVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXNCSCxDQTlDRDs7R0FBTXRCLEs7O0FBK0NOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdlOTk3ZGI3M2QwY2FhYzEzZTJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBpbmRleD0oKT0+e1xyXG4gICAgY29uc3QgW3VzZXJJbnB1dCxzZXRVc2VySW5wdXRdPXVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3RvZG9MSXN0LHNldHRvZG9MaXN0XT11c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQ9KGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIHNldHRvZG9MaXN0KFtcclxuICAgICAgICAgICAgdXNlcklucHV0LFxyXG4gICAgICAgICAgICAuLi50b2RvTElzdFxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIHNldFVzZXJJbnB1dChcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZT0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcklucHV0KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlPSh0b2RvKT0+e1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUFycj10b2RvTElzdC5maWx0ZXIodG9kb0l0ZW0gPT50b2RvTElzdC5pbmRleE9mKHRvZG9JdGVtKSAhPXRvZG9MSXN0LmluZGV4T2YodG9kbykpXHJcbiAgICAgICAgc2V0dG9kb0xpc3QodXBkYXRlQXJyKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPk5leHQganMgdG9kbyBsaXN0PC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VySW5wdXR9IHBsYWNlaG9sZGVyPVwiRW50ZXIgVG9kbyBJdGVtXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvTElzdC5sZW5ndGg+PTE/dG9kb0xJc3QubWFwKCh0b2RvLGlkeCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpZHh9Pnt0b2RvfSA8YnV0dG9uIG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZSh0b2RvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+REVMRVRFPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlwiRW50ZXIgYSB0b2RvIGl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvV3JhcHBlcj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=