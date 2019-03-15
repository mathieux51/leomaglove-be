webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Heart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Heart */ "./components/Heart.js");
var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Header.js";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex jc-c ai-c"
}).withConfig({
  displayName: "Header__Container",
  componentId: "sc-1l4pn8m-0"
})(["height:100px;border:1px solid black;margin:1px;"]);
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.attrs({
  className: "fw400"
}).withConfig({
  displayName: "Header__H1",
  componentId: "sc-1l4pn8m-1"
})(["margin:0;font-size:2.5rem;"]);
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex w100 h100 ai-c jc-sb"
}).withConfig({
  displayName: "Header__SubContainer",
  componentId: "sc-1l4pn8m-2"
})(["margin:0 1rem;"]);
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex h100 fxd-c jc-c"
}).withConfig({
  displayName: "Header__TextContainer",
  componentId: "sc-1l4pn8m-3"
})([""]);

var Header = function Header(_ref) {
  var secondary = _ref.secondary;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, !secondary ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Magali L\xE9o") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Texte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Texte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Texte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Magali \u2764\uFE0F L\xE9o ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Heart.js":
/*!*****************************!*\
  !*** ./components/Heart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Heart.js";


var Heart = function Heart(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "100%",
    viewBox: "209 298 55 17",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "red",
    d: "M246.9,303c-0.5-0.2-0.8-0.3-1.2-0.4c-8.2-3-16-6.9-22.8-12.4c-4.5-3.7-8.4-7.9-11.2-13.1 c-1.3-2.5-2.4-5.1-2.7-7.9c-0.3-3.3,0.6-6.3,2.9-8.8c1.7-1.9,3.9-2.7,6.4-2.9c2.9-0.3,5.6,0.4,8.3,1.6c2.1,1,4,2.3,5.7,4.1 c0.2,0.2,0.4,0.4,0.7,0.7c0-0.5,0-0.8,0-1.1c-0.2-2.7-0.1-5.4,0.6-8.1c0.4-1.7,1-3.2,2-4.7c1.1-1.7,2.6-3,4.6-3.7 c1.8-0.6,3.6-0.5,5.3,0.3c1.9,0.9,3.3,2.3,4.4,4c1.5,2.3,2.5,4.9,3.1,7.6c0.8,3.5,1.2,7,1.4,10.5c0.3,6.1-0.2,12.1-0.9,18.1 c-0.5,4.2-1.2,8.4-1.8,12.5c0,0.3-0.1,0.6-0.1,1c0.4,0.1,0.7,0.2,1.1,0.3c2.6,0.5,5.1,1,7.7,1.5c0.7,0.1,1.4,0.4,2,0.6 c0.3,0.1,0.5,0.2,0.7,0.4c0.5,0.4,0.8,0.9,0.6,1.6c-0.2,0.7-0.7,1.1-1.3,1.2c-1.1,0.2-2.2,0.1-3.3-0.1c-2.6-0.5-5.3-1-7.9-1.6 c-0.1,0-0.2,0-0.4,0c-0.3,1.3-0.6,2.7-0.9,4c-1.8,8-4.1,16-7.3,23.6c-1.9,4.5-4.1,8.7-6.9,12.7c-1.1,1.5-2.2,2.9-3.6,4.1 c-0.4,0.3-0.7,0.7-1.3,0.4c-0.5-0.3-0.6-0.9-0.3-1.4c0.3-0.7,0.6-1.4,1-2.1c3.2-5,5.7-10.3,7.9-15.8c3.2-8.1,5.5-16.5,7.3-25 C246.7,304.1,246.8,303.6,246.9,303z M247.5,299.1c0.1-0.4,0.2-0.5,0.2-0.7c0.7-4.9,1.4-9.7,2-14.6c0.7-5.6,1-11.3,0.5-16.9 c-0.2-3.2-0.6-6.3-1.5-9.3c-0.6-1.9-1.3-3.7-2.5-5.3c-0.6-0.9-1.4-1.6-2.3-2.1c-1.1-0.6-2.1-0.6-3.2,0.1c-0.9,0.5-1.6,1.3-2.1,2.2 c-0.5,1-0.9,2-1.2,3c-0.9,3.3-0.8,6.6-0.1,9.9c0.6,3,1.5,6,2.3,9c0.1,0.5,0.3,0.9,0.3,1.4c0.1,0.9-0.4,1.7-1.1,2 c-0.8,0.3-1.6,0.2-2.2-0.4c-0.3-0.3-0.5-0.7-0.7-1.1c-0.5-1-1-2.1-1.6-3.2c-1.2-2.4-2.6-4.7-4.4-6.7c-2.1-2.4-4.7-4-7.8-4.7 c-1-0.2-2-0.3-3-0.3c-3.1,0.1-5.2,2-5.8,5c-0.4,1.7-0.2,3.3,0.3,4.9c0.9,3,2.4,5.7,4.3,8.2c3.4,4.5,7.5,8.3,12.3,11.3 c4.1,2.6,8.4,4.8,12.9,6.8C244.4,298,245.9,298.5,247.5,299.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Heart);

/***/ })

})
//# sourceMappingURL=index.js.c958c1d1e81262bc94f6.hot-update.js.map