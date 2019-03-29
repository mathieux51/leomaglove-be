webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Body.js":
/*!****************************!*\
  !*** ./components/Body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main */ "./components/Main.js");
/* harmony import */ var _assets_images_fireworks_explosion_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/fireworks-explosion.gif */ "./assets/images/fireworks-explosion.gif");
/* harmony import */ var _assets_images_fireworks_explosion_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_fireworks_explosion_gif__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_fireworks_take_off_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/fireworks-take-off.gif */ "./assets/images/fireworks-take-off.gif");
/* harmony import */ var _assets_images_fireworks_take_off_gif__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_fireworks_take_off_gif__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Body.js";


 // import Information from "./Information"



var Top = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs({
  className: "flex-1 flex jc-c ai-c fxd-c"
}).withConfig({
  displayName: "Body__Top",
  componentId: "sc-1ccgya6-0"
})(["height:60vh;max-height:31rem;border:1px solid black;"]);
var FireworksExplosionGif = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.attrs({
  className: ""
}).withConfig({
  displayName: "Body__FireworksExplosionGif",
  componentId: "sc-1ccgya6-1"
})([""]);
var Middle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs({
  className: "flex fxd-c ai-c jc-c relative"
}).withConfig({
  displayName: "Body__Middle",
  componentId: "sc-1ccgya6-2"
})(["flex:0 6rem;border:1px solid black;border-left:0;border-right:0;"]);
var Big = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.attrs({
  className: "f31 ttu"
}).withConfig({
  displayName: "Body__Big",
  componentId: "sc-1ccgya6-3"
})([""]);
var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.attrs({
  className: "absolute flex jc-c ai-c"
}).withConfig({
  displayName: "Body__CloseButton",
  componentId: "sc-1ccgya6-4"
})(["margin:0.75rem;right:0;top:0;"]);
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs({
  className: "flex-1 w100 flex ai-c jc-sa"
}).withConfig({
  displayName: "Body__ButtonContainer",
  componentId: "sc-1ccgya6-5"
})([""]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.attrs({
  className: "flex-1 w100 flex ai-c ta-c jc-c"
}).withConfig({
  displayName: "Body__Text",
  componentId: "sc-1ccgya6-6"
})([""]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.attrs({
  className: "ttu"
}).withConfig({
  displayName: "Body__Button",
  componentId: "sc-1ccgya6-7"
})(["border:1px solid black;padding:0.4rem;"]);

function Body() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      show = _React$useState2[0],
      setShow = _React$useState2[1];

  var handleSetShow = function handleSetShow(evt) {
    return setShow(evt.target.name);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Top, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Big, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Coming soon"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FireworksExplosionGif, {
    src: FireworksExplosionGif,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Middle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, show && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CloseButton, {
    onClick: handleSetShow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\u274C"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Plus d'info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    onClick: handleSetShow,
    name: "belgium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Les invit\xE9s en Belgique"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    onClick: this.setShow,
    name: "france",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Les invit\xE9s en France"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Information, {
    show: show,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ })

})
//# sourceMappingURL=index.js.a37ed23dd4e756a37b9b.hot-update.js.map