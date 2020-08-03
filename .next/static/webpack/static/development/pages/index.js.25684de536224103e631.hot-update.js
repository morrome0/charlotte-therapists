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

  if (props.status == 'loading') {
    icon = __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 80,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 12
      }
    });
    message = 'Request submitting...';
    console.log(1);
  } else if (props.status == 'success') {
    icon = __jsx(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 12
      }
    });
    message = 'Request submitting...';
    console.log(2);
  } else if (props.status == 'failed') {
    icon = __jsx(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 14
      }
    });
    message = 'Request submitting...';
    console.log(3);
  } else {
    icon = '?';
    message = 'No loading status given to Loader component';
  }

  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, icon, __jsx("p", {
    className: classes.message,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, message));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ })

})
//# sourceMappingURL=index.js.25684de536224103e631.hot-update.js.map