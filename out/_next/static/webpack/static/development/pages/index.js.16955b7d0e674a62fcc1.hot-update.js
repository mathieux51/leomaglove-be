webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CountDownItem.js":
/*!*************************************!*\
  !*** ./components/CountDownItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/CountDownItem.js";


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex fxd-c jc-sb ai-c"
}).withConfig({
  displayName: "CountDownItem__Container",
  componentId: "oa8lkl-0"
})(["margin:10px 5px 5px;&:first-child{margin:10px;}"]);
var Time = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.attrs({
  className: ""
}).withConfig({
  displayName: "CountDownItem__Time",
  componentId: "oa8lkl-1"
})(["border:1px solid black;padding:5px;margin:2px;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.attrs({
  className: ""
}).withConfig({
  displayName: "CountDownItem__Text",
  componentId: "oa8lkl-2"
})(["margin-top:10px;font-size:1.25rem;"]);
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex jc-c w100"
}).withConfig({
  displayName: "CountDownItem__SubContainer",
  componentId: "oa8lkl-3"
})([""]);

var CountDownItem = function CountDownItem(_ref) {
  var text = _ref.text,
      time = _ref.time;

  var _time = String(time);

  var splitTime = _time.split("");

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, _time.length === 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Time, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, _time)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Time, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, splitTime[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Time, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, splitTime[1])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (CountDownItem);

/***/ })

})
//# sourceMappingURL=index.js.16955b7d0e674a62fcc1.hot-update.js.map