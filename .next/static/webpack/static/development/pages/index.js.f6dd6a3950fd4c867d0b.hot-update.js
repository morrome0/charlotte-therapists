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
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Filters"), __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, props.options.map(function (option, i) {
    return __jsx("div", {
      className: classes.row,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FilterMobile); // <form onChange={(e) => handleChange(e)} className={classes.selectOptions}>
//   {props.options.map((option, i) => (
//     <div className={classes.row}>
//       <Option key={i} id={i} checked={props.selected === option} value={option} name={props.filter} type={props.type}>{option}</Option>
//     </div>
//   ))}
// </form>

/***/ })

})
//# sourceMappingURL=index.js.f6dd6a3950fd4c867d0b.hot-update.js.map