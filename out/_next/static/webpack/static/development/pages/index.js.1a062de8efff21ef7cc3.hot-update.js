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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Body.js";


var Main = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].main.attrs({
  className: "flex fxd-c"
}).withConfig({
  displayName: "Body__Main",
  componentId: "sc-1ccgya6-0"
})(["min-height:calc(100vh - 120px);border:1px solid black;margin:1px;border-top:0;"]);
var TopContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.attrs({
  className: "flex-1 flex jc-c ai-c"
}).withConfig({
  displayName: "Body__TopContainer",
  componentId: "sc-1ccgya6-1"
})([""]);
var Frame = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.attrs({
  className: ""
}).withConfig({
  displayName: "Body__Frame",
  componentId: "sc-1ccgya6-2"
})(["font-size:3rem;"]);
var MoreInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.attrs({
  className: "flex fxd-c ai-c jc-sb"
}).withConfig({
  displayName: "Body__MoreInfoContainer",
  componentId: "sc-1ccgya6-3"
})(["padding:0 5vw 20px;"]);
var TextInfo = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.attrs({
  className: ""
}).withConfig({
  displayName: "Body__TextInfo",
  componentId: "sc-1ccgya6-4"
})(["margin:10px 10px 20px;"]);
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.attrs({
  className: "flex jc-sb w100"
}).withConfig({
  displayName: "Body__ButtonContainer",
  componentId: "sc-1ccgya6-5"
})([""]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button.attrs({
  className: ""
}).withConfig({
  displayName: "Body__Button",
  componentId: "sc-1ccgya6-6"
})(["border:1px solid black;padding:20px;"]);

var Body =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Body, _React$PureComponent);

  function Body() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Body);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Body)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "finalDate", new Date("March 27 2019").getTime());

    return _this;
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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.state.intervalId);
    }
  }, {
    key: "timer",
    value: function timer() {
      var now = new Date().getTime();
      var distance = finalDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000);
      this.setState({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Main, {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TopContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Frame, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Plus d'info bient\xF4t !")));
    }
  }]);

  return Body;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/***/ })

})
//# sourceMappingURL=index.js.1a062de8efff21ef7cc3.hot-update.js.map