webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CountdownItem.js":
/*!*************************************!*\
  !*** ./components/CountdownItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CountdownItemText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountdownItemText */ "./components/CountdownItemText.js");
var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/CountdownItem.js";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex fxd-c jc-sb ai-c"
}).withConfig({
  displayName: "CountdownItem__Container",
  componentId: "sc-14hj33y-0"
})(["min-width:108px;min-height:72px;margin:10px 5px 5px;& > div{margin:0 30px;}"]);
var Time = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.attrs({
  className: "ta-c"
}).withConfig({
  displayName: "CountdownItem__Time",
  componentId: "sc-14hj33y-1"
})(["font-size:1.25rem;border:1px solid black;padding:5px;margin:2px;width:20px;"]);
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex jc-c w100"
}).withConfig({
  displayName: "CountdownItem__SubContainer",
  componentId: "sc-14hj33y-2"
})([""]);
var CountdownItem = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var text = _ref.text,
      time = _ref.time;
  console.log(time);

  var _time = String(time).length === 1 ? String(time) : "0".concat(time).slice(-2);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, _time.split("").map(function (t, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Time, {
      key: i + t,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, t);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountdownItemText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (CountdownItem);

/***/ })

})
//# sourceMappingURL=index.js.c9a601b44d4c45a011ac.hot-update.js.map