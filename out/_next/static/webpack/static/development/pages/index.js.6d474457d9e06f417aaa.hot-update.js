webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Body.js":
/*!****************************!*\
  !*** ./components/Body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main */ "./components/Main.js");
/* harmony import */ var _icons_DiscoBall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/DiscoBall */ "./components/icons/DiscoBall.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./helpers.js");

var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Body.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 15rem;  \n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var TopContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.attrs({
  className: "flex-1 flex jc-c ai-c fxd-c relative"
}).withConfig({
  displayName: "Body__TopContainer",
  componentId: "sc-1ccgya6-0"
})(["max-height:900px;"]);
var H2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.attrs({
  className: "m0 fw400 ta-c"
}).withConfig({
  displayName: "Body__H2",
  componentId: "sc-1ccgya6-1"
})(["font-size:3rem;"]);
var StyledDiscoBall = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_icons_DiscoBall__WEBPACK_IMPORTED_MODULE_4__["default"]).attrs({
  className: "absolute"
}).withConfig({
  displayName: "Body__StyledDiscoBall",
  componentId: "sc-1ccgya6-2"
})(["width:15rem;top:-6px;right:2rem;transform:rotate(2deg);", ""], _helpers__WEBPACK_IMPORTED_MODULE_5__["media"].deskop(_templateObject()));

var Body = function Body() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDiscoBall, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Plus d'infos... bient\xF4t !")));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! exports provided: media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/sizes */ "./style/sizes.js");



var media = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_style_sizes__WEBPACK_IMPORTED_MODULE_2__["default"]).reduce(function (acc, label) {
  acc[label] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "em){", "}"], _style_sizes__WEBPACK_IMPORTED_MODULE_2__["default"][label] / 16, styled_components__WEBPACK_IMPORTED_MODULE_1__["css"].apply(void 0, arguments));
  };

  return acc;
}, {});

/***/ }),

/***/ "./style/sizes.js":
/*!************************!*\
  !*** ./style/sizes.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  desktop: 992,
  tablet: 768,
  phone: 576
});

/***/ })

})
//# sourceMappingURL=index.js.6d474457d9e06f417aaa.hot-update.js.map