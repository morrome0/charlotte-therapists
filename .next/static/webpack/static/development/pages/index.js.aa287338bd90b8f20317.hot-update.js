webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SelectOptions.js":
/*!*************************************!*\
  !*** ./components/SelectOptions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Option */ "./components/Option.js");
var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/SelectOptions.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    selectOptions: {
      minWidth: 200,
      background: '#fff',
      borderRadius: 4,
      border: "1px solid #ddd",
      boxShadow: '0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)',
      position: 'absolute',
      top: 32,
      zIndex: 1000,
      display: 'none',
      fontFamily: 'raleway',
      fontSize: 13,
      fontWeight: '500'
    },
    visible: {
      display: 'block'
    }
  };
});

var Select = function Select(props) {
  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener("mousedown", handleClick);
    return function () {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  var handleClick = function handleClick(e) {
    if (node.current.contains(e.target)) {
      return;
    }
  };

  return __jsx("form", {
    onChange: function onChange(e) {
      return props.onChange(props.filter, e.target.value);
    },
    className: "".concat(classes.selectOptions, " ").concat(props.visible && classes.visible, " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, props.options.map(function (option, i) {
    return __jsx(_Option__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: i,
      checked: props.selected === option,
      value: option,
      name: props.filter,
      type: props.type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, option);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ })

})
//# sourceMappingURL=index.js.aa287338bd90b8f20317.hot-update.js.map