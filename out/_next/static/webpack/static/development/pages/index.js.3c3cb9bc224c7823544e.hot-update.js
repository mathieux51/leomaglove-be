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
/* harmony import */ var _icons_Heart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/Heart */ "./components/icons/Heart.js");
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
var StyledHeart = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_icons_Heart__WEBPACK_IMPORTED_MODULE_2__["default"]).attrs({
  className: ""
}).withConfig({
  displayName: "Header__StyledHeart",
  componentId: "sc-1l4pn8m-2"
})(["width:50px;"]);
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex w100 h100 ai-c jc-sb"
}).withConfig({
  displayName: "Header__SubContainer",
  componentId: "sc-1l4pn8m-3"
})(["margin:0 1rem;"]);
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex h100 fxd-c jc-c"
}).withConfig({
  displayName: "Header__TextContainer",
  componentId: "sc-1l4pn8m-4"
})([""]);

var Header = function Header(_ref) {
  var secondary = _ref.secondary;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, !secondary ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Magali ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeart, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), "L\xE9o") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Texte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Texte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Texte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Magali \u2764\uFE0F L\xE9o ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Heart.js":
false,

/***/ "./components/icons/Heart.js":
/*!***********************************!*\
  !*** ./components/icons/Heart.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/icons/Heart.js";


var Path = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].path.withConfig({
  displayName: "Heart__Path",
  componentId: "sc-1fnj807-0"
})(["fill-rule:evenodd;clip-rule:evenodd;fill:black;"]);

var Heart = function Heart(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "100%",
    viewBox: "0 0 57 50",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path, {
    d: "M27.0123 13.8472C29.2633 11.2551 31.3779 8.5266 33.7653 6.07094C36.9031 2.79673 40.6548 0 45.2933 0C47.9536 0 51.0232 0.682128 53.1378 2.79673C55.2524 4.91132 56.6166 7.4352 56.6848 10.8458C56.7531 16.7121 54.5702 21.4188 50.8185 25.5798C46.3847 30.2865 41.678 34.8568 37.1078 39.427C35.266 41.2688 33.4925 43.1105 31.5825 44.8158C29.3997 46.6576 27.0805 48.3629 24.6248 49.8636C24.0109 50.2728 22.0327 49.7271 21.8281 49.1814C20.2592 45.0887 16.7121 42.4966 14.1883 39.1542C10.4366 34.3793 7.16234 29.2633 4.22919 23.9427C2.59208 21.0778 0.886762 18.0082 0.204634 14.8022C-0.341069 12.2783 0.409272 9.41337 0.750336 6.68486C0.886762 6.27558 1.56889 5.66166 2.11459 5.45703C5.11596 4.29741 8.11732 2.86494 11.528 3.61528C11.869 3.68349 12.2101 3.75171 12.5512 3.75171C18.0082 3.13779 21.2824 6.54843 24.2838 10.2319C25.307 11.3915 26.1255 12.6876 27.0123 13.8472Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Heart);

/***/ })

})
//# sourceMappingURL=index.js.3c3cb9bc224c7823544e.hot-update.js.map