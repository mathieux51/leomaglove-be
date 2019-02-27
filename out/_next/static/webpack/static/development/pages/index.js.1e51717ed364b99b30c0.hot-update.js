webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Body.js":
/*!****************************!*\
  !*** ./components/Body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CountDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountDown */ "./components/CountDown.js");
var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Body.js";



var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.attrs({
  className: "flex fxd-c"
}).withConfig({
  displayName: "Body__Main",
  componentId: "sc-1ccgya6-0"
})(["min-height:calc(100vh - 120px);border:1px solid black;margin:1px;border-top:0;"]);
var TopContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex-1 flex jc-c ai-c fxd-c"
}).withConfig({
  displayName: "Body__TopContainer",
  componentId: "sc-1ccgya6-1"
})([""]);
var Frame = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: ""
}).withConfig({
  displayName: "Body__Frame",
  componentId: "sc-1ccgya6-2"
})(["font-size:3rem;"]);

var Body = function Body() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Frame, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Plus d'info bient\xF4t !"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountDown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./components/CountDown.js":
/*!*********************************!*\
  !*** ./components/CountDown.js ***!
  \*********************************/
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
/* harmony import */ var _CountDownItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CountDownItem */ "./components/CountDownItem.js");







var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/CountDown.js";


var Container = styled.div.attrs({
  className: "flex"
}).withConfig({
  displayName: "CountDown__Container",
  componentId: "sc-1b9i74q-0"
})(["margin-top:10px;"]);

var CountDown =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CountDown, _React$PureComponent);

  function CountDown() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CountDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CountDown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "finalDate", new Date("Jun 29 2019").getTime());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "timer", function () {
      var now = new Date().getTime();
      var distance = _this.finalDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000);

      _this.setState({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CountDown, [{
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
    key: "render",
    value: function render() {
      var _this$state = this.state,
          days = _this$state.days,
          hours = _this$state.hours,
          minutes = _this$state.minutes,
          seconds = _this$state.seconds;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CountDownItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Jours",
        time: days,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CountDownItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Heures",
        time: hours,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CountDownItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Minutes",
        time: minutes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CountDownItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Secondes",
        time: seconds,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }));
    }
  }]);

  return CountDown;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (CountDown);

/***/ }),

/***/ "./components/CountDownItem.js":
/*!*************************************!*\
  !*** ./components/CountDownItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/CountDownItem.js";


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex fxd-c jc-sb ai-c"
}).withConfig({
  displayName: "CountDownItem__Container",
  componentId: "oa8lkl-0"
})(["margin:10px 5px 5px;& > div{margin:0 30px;}"]);
var Time = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.attrs({
  className: ""
}).withConfig({
  displayName: "CountDownItem__Time",
  componentId: "oa8lkl-1"
})(["border:1px solid black;padding:5px;margin:2px;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.attrs({
  className: ""
}).withConfig({
  displayName: "CountDownItem__Text",
  componentId: "oa8lkl-2"
})(["margin-top:10px;font-size:1.25rem;"]);
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex jc-c w100"
}).withConfig({
  displayName: "CountDownItem__SubContainer",
  componentId: "oa8lkl-3"
})([""]);
var CountDownItem = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var text = _ref.text,
      time = _ref.time;

  var _time = String(time);

  var splitTime = _time.split("");

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, _time.length === 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Time, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, _time)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Time, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, splitTime[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Time, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, splitTime[1])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, text));
});
/* harmony default export */ __webpack_exports__["default"] = (CountDownItem);

/***/ })

})
//# sourceMappingURL=index.js.1e51717ed364b99b30c0.hot-update.js.map