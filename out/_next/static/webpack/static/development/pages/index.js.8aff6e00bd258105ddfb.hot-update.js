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
/* harmony import */ var _Information__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Information */ "./components/Information.js");
/* harmony import */ var _assets_images_fireworks_explosion_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/fireworks-explosion.gif */ "./assets/images/fireworks-explosion.gif");
/* harmony import */ var _assets_images_fireworks_explosion_gif__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_fireworks_explosion_gif__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_fireworks_take_off_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/fireworks-take-off.gif */ "./assets/images/fireworks-take-off.gif");
/* harmony import */ var _assets_images_fireworks_take_off_gif__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_fireworks_take_off_gif__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Body.js";






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
    onClick: handleSetShow,
    name: "france",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Les invit\xE9s en France"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Information__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: show,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./components/Information.js":
/*!***********************************!*\
  !*** ./components/Information.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Map */ "./components/Map.js");
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Timeline */ "./components/Timeline.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./helpers.js");

var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Information.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    flex-direction: row;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs({
  className: "flex-1 fxd-c"
}).withConfig({
  displayName: "Information__Container",
  componentId: "glfbnm-0"
})(["display:", ";"], function (_ref) {
  var show = _ref.show;
  return show ? "inherit" : "none";
});
var Top = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs({
  className: "flex"
}).withConfig({
  displayName: "Information__Top",
  componentId: "glfbnm-1"
})(["flex-direction:column;margin:2rem 1rem;", ""], _helpers__WEBPACK_IMPORTED_MODULE_5__["media"].tablet(_templateObject()));
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs({
  className: "flex fxd-c flex-1"
}).withConfig({
  displayName: "Information__TextContainer",
  componentId: "glfbnm-2"
})([""]);
var StyledMap = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Map__WEBPACK_IMPORTED_MODULE_3__["default"]).attrs({
  className: "flex-1"
}).withConfig({
  displayName: "Information__StyledMap",
  componentId: "glfbnm-3"
})([""]);
var Schema = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs({
  className: "flex-1 flex jc-c ai-c"
}).withConfig({
  displayName: "Information__Schema",
  componentId: "glfbnm-4"
})([""]);
var Bottom = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs({
  className: "flex fxd-c flex-auto"
}).withConfig({
  displayName: "Information__Bottom",
  componentId: "glfbnm-5"
})([""]);
var BottomSubContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs({
  className: "flex-1 flex jc-sa ai-c"
}).withConfig({
  displayName: "Information__BottomSubContainer",
  componentId: "glfbnm-6"
})([""]);
var Camping = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.attrs({
  className: ""
}).withConfig({
  displayName: "Information__Camping",
  componentId: "glfbnm-7"
})([""]);
var Housing = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.attrs({
  className: ""
}).withConfig({
  displayName: "Information__Housing",
  componentId: "glfbnm-8"
})([""]);
var Message = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.attrs({
  className: "flex-1 flex ai-c jc-c"
}).withConfig({
  displayName: "Information__Message",
  componentId: "glfbnm-9"
})([""]);

var Information = function Information(_ref2) {
  var show = _ref2.show,
      className = _ref2.className;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    show: show,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Top, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Adresse"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus rerum quam eius necessitatibus cumque vero officia nemo fugiat labore iusto.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledMap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Schema, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Sch\xE9ma")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Timeline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bottom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BottomSubContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Camping, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\u26FA\uFE0F Camping"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Housing, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "\uD83C\uDFE0 Logement")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Message, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Pour notre voyage dans l'espace : BEXX XXXX XXXX")));
};

/* harmony default export */ __webpack_exports__["default"] = (Information);

/***/ }),

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Map.js";


var StyledMap = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Map).attrs({
  className: "w100 h100"
}).withConfig({
  displayName: "Map__StyledMap",
  componentId: "sc-1futo3k-0"
})([""]);

function Map(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    className: className,
    src: "https://maps.google.com/maps?width=100%&height=600&hl=en&q=Marly-Gomont%2C%20France+(Marley%20Gomon)&ie=UTF8&t=&z=14&iwloc=B&output=embed",
    frameBorder: "0",
    scrolling: "no",
    marginHeight: "0",
    marginWidth: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (StyledMap);

/***/ }),

/***/ "./components/Timeline.js":
/*!********************************!*\
  !*** ./components/Timeline.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/mathieu/Projects/production/leomaglove-be/components/Timeline.js";


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex jc-sa relative"
}).withConfig({
  displayName: "Timeline__Container",
  componentId: "anie9o-0"
})(["margin:1rem;"]);

var TimelineItem = function TimelineItem(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "100%",
    viewBox: "0 0 221 121",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "60.5",
    cy: "60.5",
    r: "60",
    fill: "white",
    stroke: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "121",
    y1: "59.5",
    x2: "221",
    y2: "59.5",
    stroke: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

var StyledTimelineItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(TimelineItem).withConfig({
  displayName: "Timeline__StyledTimelineItem",
  componentId: "anie9o-1"
})(["width:100px;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.attrs({
  className: "absolute"
}).withConfig({
  displayName: "Timeline__Text",
  componentId: "anie9o-2"
})(["bottom:0;left:50%;transform:translate3d(0,0,0);"]);

var Timeline = function Timeline() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Timeline"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTimelineItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTimelineItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTimelineItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTimelineItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

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
//# sourceMappingURL=index.js.8aff6e00bd258105ddfb.hot-update.js.map