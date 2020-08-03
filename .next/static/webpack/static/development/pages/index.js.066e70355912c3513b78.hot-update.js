webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Weekend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Weekend */ "./node_modules/@material-ui/icons/Weekend.js");
/* harmony import */ var _material_ui_icons_Weekend__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Weekend__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  var _root;

  return {
    root: (_root = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_root, theme.breakpoints.only('xs'), {}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_root, "textAlign", "center"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_root, "background", "white"), _root),
    logo: {
      fontFamily: theme.fontFamily.primary,
      color: theme.palette.primary.main,
      display: "inline-block",
      verticalAlign: "middle",
      fontSize: 24,
      fontWeight: "600"
    },
    logoIcon: {
      fontSize: 36,
      display: "inline-block",
      color: theme.palette.primary.main,
      verticalAlign: "middle",
      marginRight: 8
    }
  };
});

var NavBar = function NavBar(props) {
  var classes = useStyles();
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    px: 4,
    pt: 1,
    style: {
      height: "80px",
      position: "relative",
      zIndex: 1000
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_Weekend__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.logoIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: classes.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 49
    }
  }, "Charlotte Therapists"), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: {
      xs: 'none',
      sm: 'block'
    },
    style: {
      position: "absolute",
      top: 23,
      right: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return props.showModal("listingRequest");
    },
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 96
    }
  }, "I'm a Charlotte Therapist")));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./node_modules/@material-ui/icons/Weekend.js":
/*!****************************************************!*\
  !*** ./node_modules/@material-ui/icons/Weekend.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  transform: "scale(0.5, 0.5)",
  d: "M42 20c-2.21 0-4 1.79-4 4v6H10v-6c0-2.21-1.79-4-4-4s-4 1.79-4 4v10c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V24c0-2.21-1.79-4-4-4zm-6-10H12c-2.2 0-4 1.8-4 4v4.31c2.32.83 4 3.03 4 5.63V28h24v-4.06c0-2.6 1.68-4.8 4-5.63V14c0-2.2-1.8-4-4-4z"
}), 'Weekend');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.066e70355912c3513b78.hot-update.js.map