webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Filters.js":
/*!*******************************!*\
  !*** ./components/Filters.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _SelectMultiple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectMultiple */ "./components/SelectMultiple.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _SelectOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectOptions */ "./components/SelectOptions.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Filter */ "./components/Filter.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Filters.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      background: '#fff',
      padding: "0 15px 15px 180px",
      borderBottom: "1px solid #ddd",
      position: 'relative'
    },
    filterIndicator: {
      position: "absolute",
      left: 40
    },
    filterIcon: {
      verticalAlign: "middle",
      color: "#777",
      fontSize: 26,
      marginRight: 10
    },
    active: {
      color: theme.palette.warning.main
    },
    clear: {
      color: theme.palette.error.main,
      borderRadius: 20,
      padding: "2px 15px"
    }
  };
});

var anyActiveFilters = function anyActiveFilters(activeFilters) {
  for (var key in activeFilters) {
    if (activeFilters[key] != "") {
      return true;
    }
  }

  return false;
};

var Filters = function Filters(props) {
  var classes = useStyles();
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "".concat(classes.filterIndicator, " ").concat(anyActiveFilters(props.activeFilters) && classes.active, " "),
    style: {
      fontFamily: "Raleway",
      fontWeight: "bold",
      marginRight: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "".concat(classes.filterIcon, " ").concat(anyActiveFilters(props.activeFilters) && classes.active, " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "filter_list"), anyActiveFilters(props.activeFilters) ? "FILTERS ON" : "FILTERS OFF"), __jsx(_Filter__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activeFilter: props.activeFilters.clientTypes,
    options: props.catalogue.clientTypes,
    showOptions: props.showOptions,
    visible: props.visibleOptions === "clientTypes",
    filter: "clientTypes",
    onChange: props.onChange,
    label: "Client Type",
    type: "radio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx(_Filter__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activeFilter: props.activeFilters.specialties,
    options: props.catalogue.specialties,
    showOptions: props.showOptions,
    visible: props.visibleOptions === "specialties",
    filter: "specialties",
    onChange: props.onChange,
    label: "Specialty",
    type: "radio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), anyActiveFilters(props.activeFilters) && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    onClick: props.clearFilters,
    className: classes.clear,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 50
    }
  }, "Clear All Filters ", __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      fontSize: 14,
      marginLeft: 8
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 144
    }
  }, "close")));
};

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ })

})
//# sourceMappingURL=index.js.8d382e2c918a158d4203.hot-update.js.map