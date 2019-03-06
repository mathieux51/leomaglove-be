webpackHotUpdate("static/development/pages/dev.js",{

/***/ "./components/Dev.js":
/*!***************************!*\
  !*** ./components/Dev.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Main */ "./components/Main.js");







var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Dev.js";



var Top = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.attrs({
  className: "flex-1 flex jc-c ai-c fxd-c"
}).withConfig({
  displayName: "Dev__Top",
  componentId: "kmxpvl-0"
})(["max-height:900px;"]);
var Middle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.attrs({
  className: "flex fxd-c ai-c jc-c"
}).withConfig({
  displayName: "Dev__Middle",
  componentId: "kmxpvl-1"
})(["background:gold;flex:0 6rem;"]);
var transitionName = "example";
var Bottom = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.attrs({
  className: ""
}).withConfig({
  displayName: "Dev__Bottom",
  componentId: "kmxpvl-2"
})(["flex:none;visibility:", ";opacity:", ";transition:visibility 0s,opacity 0.5s linear;"], function (_ref) {
  var show = _ref.show;
  return show ? "visible" : "hidden";
}, function (_ref2) {
  var show = _ref2.show;
  return show ? 1 : 0;
});
var Big = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.attrs({
  className: "f31"
}).withConfig({
  displayName: "Dev__Big",
  componentId: "kmxpvl-3"
})([""]);
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.attrs({
  className: "flex-1 w100 flex ai-c jc-sa"
}).withConfig({
  displayName: "Dev__ButtonContainer",
  componentId: "kmxpvl-4"
})([""]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.attrs({
  className: "flex-1 w100 flex ai-c ta-c jc-c"
}).withConfig({
  displayName: "Dev__Text",
  componentId: "kmxpvl-5"
})([""]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button.attrs({
  className: "ttu"
}).withConfig({
  displayName: "Dev__Button",
  componentId: "kmxpvl-6"
})(["border:1px solid black;padding:0.4rem;"]);

var Dev =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Dev, _React$PureComponent);

  function Dev() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dev);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Dev)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      show: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setShow", function (evt) {
      return _this.setState({
        show: evt.target.name
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dev, [{
    key: "render",
    value: function render() {
      var show = this.state.show;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Top, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Big, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Vid\xE9o en boucle")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Middle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Plus d'info"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ButtonContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Button, {
        onClick: this.setShow,
        name: "belgium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Les invit\xE9s en Belgique"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Button, {
        onClick: this.setShow,
        name: "france",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Les invit\xE9s en France"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Bottom, {
        show: show,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Bottom"));
    }
  }]);

  return Dev;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Dev);

/***/ })

})
//# sourceMappingURL=dev.js.7bdf4d46b562c360be76.hot-update.js.map