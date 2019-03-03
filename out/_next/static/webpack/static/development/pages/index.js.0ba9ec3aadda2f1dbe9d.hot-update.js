webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Countdown.js":
/*!*********************************!*\
  !*** ./components/Countdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CountdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountdownContext */ "./components/CountdownContext.js");
/* harmony import */ var _CountdownItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CountdownItem */ "./components/CountdownItem.js");
var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Countdown.js";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex w100 jc-c fxw-w"
}).withConfig({
  displayName: "Countdown__Container",
  componentId: "vo6s54-0"
})(["margin-top:10px;"]);

var Countdown = function Countdown() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountdownContext__WEBPACK_IMPORTED_MODULE_2__["CountdownConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, function (countdown) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountdownItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Jours",
      time: countdown.days,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountdownItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Heures",
      time: countdown.hours,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountdownItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Minutes",
      time: countdown.minutes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountdownItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Secondes",
      time: countdown.seconds,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ })

})
//# sourceMappingURL=index.js.0ba9ec3aadda2f1dbe9d.hot-update.js.map