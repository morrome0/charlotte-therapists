webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Modal.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  shade: {
    position: "absolute",
    height: '100%',
    width: '100%',
    zIndex: '1999',
    background: "rgba(0,0,0,.6)"
  },
  modal: {
    position: "absolute",
    height: '85%',
    width: '85%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: "white",
    zIndex: '2000',
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  close: {
    position: "absolute",
    top: 20,
    right: 20
  }
});

var Modal = function Modal(props) {
  var classes = useStyles();
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.shade,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.modal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-label": "close",
    className: classes.close,
    onClick: props.closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ })

})
//# sourceMappingURL=index.js.08ad5ea7f10fc28ed530.hot-update.js.map