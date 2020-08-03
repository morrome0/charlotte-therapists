webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutline */ "./node_modules/@material-ui/icons/CheckCircleOutline.js");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/HighlightOff */ "./node_modules/@material-ui/icons/HighlightOff.js");
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Loader.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      textAlign: "center"
    },
    message: {
      paddingTop: 20,
      fontWeight: "600",
      fontSize: "22px"
    }
  };
});

var Loader = function Loader(props) {
  var classes = useStyles();
  var icon;
  var message;

  switch (props.status) {
    case 'loading':
      icon = __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 80,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 14
        }
      });
      message = 'Request submitting...';

    case 'success':
      icon = __jsx(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 14
        }
      });
      message = 'Request submitting...';

    case 'fail':
      icon = __jsx(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 14
        }
      });
      message = 'Request submitting...';
  }

  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3___default.a, {
    size: 80,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx("p", {
    className: classes.message,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "This is a really long test sentence"));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./node_modules/@material-ui/icons/HighlightOff.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/HighlightOff.js ***!
  \*********************************************************/
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
  d: "M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'HighlightOff');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.599fc6e436038a508208.hot-update.js.map