webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/mobile/Subpage.js":
/*!**************************************!*\
  !*** ./components/mobile/Subpage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SubpageContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubpageContent */ "./components/mobile/SubpageContent.js");
var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/mobile/Subpage.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      background: 'white',
      zIndex: 1002,
      position: 'fixed',
      height: '100%',
      width: '100%',
      bottom: 0,
      border: "1px solid #ddd",
      padding: 50
    },
    back: {
      fontSize: 18
    },
    arrowBackIcon: {
      verticalAlign: 'middle',
      marginRight: 12
    }
  };
});

var Subpage = function Subpage(props) {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.back,
    onClick: props.back,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.arrowBackIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Back")), __jsx(_SubpageContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: props.content,
    show: props.show,
    onChange: props.onChange,
    activeFilters: props.activeFilters,
    catalogue: props.catalogue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Subpage);

/***/ })

})
//# sourceMappingURL=index.js.01ce196defe7c76c42bb.hot-update.js.map