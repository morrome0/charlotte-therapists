webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Filter.js":
/*!******************************!*\
  !*** ./components/Filter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _SelectOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectOptions */ "./components/SelectOptions.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Filter.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    container: {
      display: "inline-block",
      position: "relative"
    },
    button: {
      marginRight: 15,
      minWidth: 200,
      textAlign: "left",
      borderRadius: 20,
      fontSize: 13,
      padding: "2px 25px 2px",
      justifyContent: "normal"
    },
    expandIcon: {
      position: "absolute",
      right: 8
    }
  };
});

var Filter = function Filter(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var node = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
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

    console.log("close this");
  };

  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.button,
    onClick: function onClick(e) {
      return setOpen(!open);
    },
    size: "small",
    color: "secondary",
    variant: props.activeFilter ? "contained" : "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, props.activeFilter ? "".concat(props.label, ": ").concat(props.activeFilter) : "Choose a ".concat(props.label), __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.expandIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "expand_more")), open && __jsx(_SelectOptions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: node,
    selected: props.activeFilter,
    options: props.options,
    filter: props.filter,
    onChange: props.onChange,
    type: "radio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ })

})
//# sourceMappingURL=index.js.847d2e475578ee47f6fb.hot-update.js.map