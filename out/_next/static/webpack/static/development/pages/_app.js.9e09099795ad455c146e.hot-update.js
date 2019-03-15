webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./assets/fonts/ILoveGlitter.woff2":
false,

/***/ "./assets/fonts/josefin-slab-normal-400.woff2":
/*!****************************************************!*\
  !*** ./assets/fonts/josefin-slab-normal-400.woff2 ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/fonts/josefin-slab-normal-400-325589c7b6fe90a07bf6ee47149488f9.woff2";

/***/ }),

/***/ "./assets/fonts/josefin-slab-normal-600.woff2":
/*!****************************************************!*\
  !*** ./assets/fonts/josefin-slab-normal-600.woff2 ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/fonts/josefin-slab-normal-600-d19eade635a443b4ade2f5339a326189.woff2";

/***/ }),

/***/ "./assets/fonts/josefin-slab-normal-700.woff2":
/*!****************************************************!*\
  !*** ./assets/fonts/josefin-slab-normal-700.woff2 ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/fonts/josefin-slab-normal-700-3d7270ee7bf094f200a6406215639c06.woff2";

/***/ }),

/***/ "./components/CountdownContext.js":
false,

/***/ "./components/FontFacesList.js":
/*!*************************************!*\
  !*** ./components/FontFacesList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_fonts_josefin_slab_normal_400_woff2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/fonts/josefin-slab-normal-400.woff2 */ "./assets/fonts/josefin-slab-normal-400.woff2");
/* harmony import */ var _assets_fonts_josefin_slab_normal_400_woff2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_josefin_slab_normal_400_woff2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_fonts_josefin_slab_normal_600_woff2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/fonts/josefin-slab-normal-600.woff2 */ "./assets/fonts/josefin-slab-normal-600.woff2");
/* harmony import */ var _assets_fonts_josefin_slab_normal_600_woff2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_josefin_slab_normal_600_woff2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_fonts_josefin_slab_normal_700_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/fonts/josefin-slab-normal-700.woff2 */ "./assets/fonts/josefin-slab-normal-700.woff2");
/* harmony import */ var _assets_fonts_josefin_slab_normal_700_woff2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_josefin_slab_normal_700_woff2__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ([["JosefinSlab", 400, "normal", _assets_fonts_josefin_slab_normal_400_woff2__WEBPACK_IMPORTED_MODULE_0___default.a], ["JosefinSlabSemiBold", 600, "normal", _assets_fonts_josefin_slab_normal_600_woff2__WEBPACK_IMPORTED_MODULE_1___default.a], ["JosefinSlabBold", 700, "normal", _assets_fonts_josefin_slab_normal_700_woff2__WEBPACK_IMPORTED_MODULE_2___default.a]]);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/theme */ "./style/theme.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Head */ "./components/Head.js");
/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalStyle */ "./components/GlobalStyle.js");
var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Layout.js";



 // import Footer from "components/Footer"


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__Container",
  componentId: "oy0maz-0"
})(["min-height:calc(100vh - 20px);overflow:hidden;background:", ";margin:10px;border-radius:5px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.bg;
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _style_theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), children));
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false

})
//# sourceMappingURL=_app.js.9e09099795ad455c146e.hot-update.js.map