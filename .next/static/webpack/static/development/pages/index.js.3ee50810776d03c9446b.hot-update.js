webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/app.js":
/*!***************************!*\
  !*** ./components/app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_Listings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Listings */ "./components/Listings.js");
/* harmony import */ var _components_Listing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Listing */ "./components/Listing.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var _components_Midbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Midbar */ "./components/Midbar.js");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Filters */ "./components/Filters.js");


var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    display: "flex",
    height: '100%',
    overflow: "hidden"
  },
  mapbox: {
    flexgrow: 1
  }
});

var App = function App(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selected = _useState[0],
      setSelected = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.therapists[0]),
      selectedTherapist = _useState2[0],
      setSelectedTherapist = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      showMidbar = _useState3[0],
      setShowMidbar = _useState3[1];

  var getSelectedTherapist = function getSelectedTherapist() {
    return props.therapists.find(function (therapist) {
      return therapist.id == selected;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (selected) setSelectedTherapist(getSelectedTherapist());
  }, [selected]);
  var defaultFilters = {
    clientTypes: "",
    specialties: ""
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultFilters),
      filters = _useState4[0],
      setFilters = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      visibleOptions = _useState5[0],
      setVisibleOptions = _useState5[1];

  var changeFilters = function changeFilters(filter, value) {
    setFilters(_objectSpread({}, filters, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, filter, value)));
  };

  var therapists = props.therapists.filter(function (therapist) {
    return (filters.clientTypes ? therapist.clientTypes.includes(filters.clientTypes) : therapist) && (filters.specialties ? therapist.specialties.includes(filters.specialties) : therapist);
  });

  var showOptions = function showOptions(filter) {
    setVisibleOptions(filter);
  };

  var hideOptions = function hideOptions(filter) {
    setVisibleOptions("");
  };

  var clearFilters = function clearFilters() {
    setFilters(defaultFilters);
  };

  return __jsx("div", {
    className: classes.root,
    onClick: visibleOptions && hideOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx(_Filters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    clearFilters: clearFilters,
    onChange: changeFilters,
    activeFilters: filters,
    catalogue: props.catalogue,
    visibleOptions: visibleOptions,
    showOptions: showOptions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(_components_Listings__WEBPACK_IMPORTED_MODULE_3__["default"], {
    therapists: therapists,
    selected: selected,
    setSelected: setSelected,
    showMidbar: showMidbar,
    setShowMidbar: setShowMidbar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx(_components_Midbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    therapist: selectedTherapist,
    showMidbar: showMidbar,
    setShowMidbar: setShowMidbar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: {
      xs: 'none',
      sm: 'block'
    },
    style: {
      flexGrow: '1'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_7__["default"], {
    therapists: props.therapists,
    selected: selected,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 73
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.3ee50810776d03c9446b.hot-update.js.map