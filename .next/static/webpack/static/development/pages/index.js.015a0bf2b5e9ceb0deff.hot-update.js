webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/mobile/Filter.js":
/*!*************************************!*\
  !*** ./components/mobile/Filter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Option */ "./components/mobile/Option.js");
var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/mobile/Filter.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {},
    header: {
      fontSize: 30,
      paddingTop: 20
    },
    row: {
      height: 80,
      borderBottom: "1px solid #ddd",
      fontSize: 20,
      lineHeight: "80px"
    },
    label: {
      verticalAlign: 'middle'
    },
    chevronRightIcon: {
      "float": 'right',
      verticalAlign: 'middle',
      marginTop: 24,
      fontSize: 40
    }
  };
});

var FilterMobile = function FilterMobile(props) {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Filters"), __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, props.options.map(function (option, i) {
    return __jsx("div", {
      className: classes.row,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx(_Option__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      id: i,
      checked: props.selected === option,
      value: option,
      name: props.filter,
      type: props.type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, option));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FilterMobile); // <form onChange={(e) => handleChange(e)} className={classes.selectOptions}>
//   {props.options.map((option, i) => (
//     <div className={classes.row}>
//       <Option key={i} id={i} checked={props.selected === option} value={option} name={props.filter} type={props.type}>{option}</Option>
//     </div>
//   ))}
// </form>

/***/ }),

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
      width: "100%",
      padding: 15,
      cursor: "pointer",
      display: "block",
      "&:hover": {
        background: theme.palette.primary.light
      }
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
      lineNumber: 26,
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
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: classes.label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ })

})
//# sourceMappingURL=index.js.015a0bf2b5e9ceb0deff.hot-update.js.map