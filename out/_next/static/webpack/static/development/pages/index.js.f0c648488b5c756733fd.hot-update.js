webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Emoji.js":
/*!*****************************!*\
  !*** ./components/Emoji.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Emoji.js";


var Emoji = function Emoji(_ref) {
  var text = _ref.text,
      symbol = _ref.symbol,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["text", "symbol"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "img",
    "aria-label": text
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), symbol);
};

/* harmony default export */ __webpack_exports__["default"] = (Emoji);

/***/ }),

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
/* harmony import */ var _icons_MagaliLoveLeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/MagaliLoveLeo */ "./components/icons/MagaliLoveLeo.js");
/* harmony import */ var _Emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Emoji */ "./components/Emoji.js");
var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Header.js";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.attrs({
  className: "flex jc-c ai-c"
}).withConfig({
  displayName: "Header__Container",
  componentId: "sc-1l4pn8m-0"
})(["flex:0 6rem;border-bottom:1px solid black;margin:1px;"]);
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.attrs({
  className: "visuallyHidden"
}).withConfig({
  displayName: "Header__H1",
  componentId: "sc-1l4pn8m-1"
})([""]);
var StyledMagaliLoveLeo = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_icons_MagaliLoveLeo__WEBPACK_IMPORTED_MODULE_2__["default"]).attrs({
  className: ""
}).withConfig({
  displayName: "Header__StyledMagaliLoveLeo",
  componentId: "sc-1l4pn8m-2"
})(["height:6rem;"]);
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex w100 h100 ai-c jc-sb"
}).withConfig({
  displayName: "Header__SubContainer",
  componentId: "sc-1l4pn8m-3"
})(["margin:0 1rem;"]);
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex-2 flex h100 fxd-c jc-c"
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
  }, !secondary ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Magali ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Emoji__WEBPACK_IMPORTED_MODULE_3__["default"], {
    symbol: "\u2764\uFE0F",
    text: "coeur",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), " L\xE9o"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMagaliLoveLeo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Texte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Texte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Texte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMagaliLoveLeo, {
    className: "flex-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ })

})
//# sourceMappingURL=index.js.f0c648488b5c756733fd.hot-update.js.map