webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/FontFaces.js":
/*!*********************************!*\
  !*** ./components/FontFaces.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _FontFacesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FontFacesList */ "./components/FontFacesList.js");



var generateFontFace = function generateFontFace(ff, fw, fs, woff2) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@font-face{font-family:", ";src:url(", ") format(\"woff2\");font-weight:", ";font-style:", ";}"], ff, woff2, fw, fs);
};

var fontFaces = _FontFacesList__WEBPACK_IMPORTED_MODULE_1__["default"].map(function (f) {
  return generateFontFace(f[0], f[1], f[2], f[3]);
});
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", ""], fontFaces));

/***/ })

})
//# sourceMappingURL=_app.js.28f854b7f6a7f328896f.hot-update.js.map