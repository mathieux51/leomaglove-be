webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Body.js":
/*!****************************!*\
  !*** ./components/Body.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Body.js";


var Main = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].main.attrs({
  className: "flex fxd-c"
}).withConfig({
  displayName: "Body__Main",
  componentId: "sc-1ccgya6-0"
})(["min-height:calc(100vh - 120px);border:1px solid black;margin:1px;border-top:0;"]);
var TopContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.attrs({
  className: "flex-1 flex jc-c ai-c"
}).withConfig({
  displayName: "Body__TopContainer",
  componentId: "sc-1ccgya6-1"
})([""]);
var Frame = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.attrs({
  className: ""
}).withConfig({
  displayName: "Body__Frame",
  componentId: "sc-1ccgya6-2"
})(["font-size:3rem;"]);
var MoreInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.attrs({
  className: "flex fxd-c ai-c jc-sb"
}).withConfig({
  displayName: "Body__MoreInfoContainer",
  componentId: "sc-1ccgya6-3"
})(["padding:0 5vw 20px;"]);
var TextInfo = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].span.attrs({
  className: ""
}).withConfig({
  displayName: "Body__TextInfo",
  componentId: "sc-1ccgya6-4"
})(["margin:10px 10px 20px;"]);
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.attrs({
  className: "flex jc-sb w100"
}).withConfig({
  displayName: "Body__ButtonContainer",
  componentId: "sc-1ccgya6-5"
})([""]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button.attrs({
  className: ""
}).withConfig({
  displayName: "Body__Button",
  componentId: "sc-1ccgya6-6"
})(["border:1px solid black;padding:20px;"]);
var finalDate = new Date("March 27 2019").getTime();
var now = new Date().getTime();
var distance = finalDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
var seconds = Math.floor(distance % (1000 * 60) / 1000);

var Body =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Body, _React$PureComponent);

  function Body() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Body);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Body).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Body, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var intervalId = setInterval(this.timer, 1000);
      this.setState({
        intervalId: intervalId
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Main, {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TopContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Frame, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Plus d'info bient\xF4t !")));
    }
  }]);

  return Body;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);

/***/ })

})
//# sourceMappingURL=index.js.d13d848a32cddd208cb7.hot-update.js.map