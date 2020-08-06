webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/mobile/Option.js":
/*!*************************************!*\
  !*** ./components/mobile/Option.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/mobile/Option.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    option: {
      cursor: "pointer"
    },
    selected: {
      color: "#4d8ac7"
    },
    label: {
      paddingLeft: 20
    }
  };
});

var Option = function Option(props) {
  var classes = useStyles();
  return __jsx("label", {
    className: "".concat(classes.option, " ").concat(props.checked && classes.selected),
    name: props.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("input", {
    checked: props.checked,
    type: props.type,
    value: props.value,
    name: props.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: classes.label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ })

})
//# sourceMappingURL=index.js.ca9cc37764c868c2fe84.hot-update.js.map