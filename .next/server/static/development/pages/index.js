module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Listings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listings */ "./components/Listings.js");
/* harmony import */ var _Listing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Listing */ "./components/Listing.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Map */ "./components/Map.js");
/* harmony import */ var _Midbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Midbar */ "./components/Midbar.js");
/* harmony import */ var _FiltersBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FiltersBar */ "./components/FiltersBar.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
/* harmony import */ var _ModalContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ModalContent */ "./components/ModalContent.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mobile_BottomBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mobile/BottomBar */ "./components/mobile/BottomBar.js");
/* harmony import */ var _mobile_Subpage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mobile/Subpage */ "./components/mobile/Subpage.js");
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/App.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
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

const App = props => {
  const classes = useStyles(); // MOBILE

  const {
    0: mobile,
    1: setMobile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setMobile(window.innerWidth < 960);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  });
  const onWindowResize = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["throttle"])(() => setMobile(window.innerWidth < 960), 200, {
    'leading': true
  }); // LISTINGS

  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: selectedTherapist,
    1: setSelectedTherapist
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.therapists[0]);
  const {
    0: showMidbar,
    1: setShowMidbar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const getSelectedTherapist = () => {
    return props.therapists.find(therapist => therapist.id == selected);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (selected) setSelectedTherapist(getSelectedTherapist());
  }, [selected]); // FILTERS

  const defaultFilters = {
    clientTypes: "",
    specialties: "",
    insurance: ""
  };
  const {
    0: filters,
    1: setFilters
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultFilters);

  const changeFilters = (filter, value) => {
    setFilters(_objectSpread({}, filters, {
      [filter]: value
    }));
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  const therapists = props.therapists.filter(function (therapist) {
    return (filters.clientTypes ? therapist.clientTypes.includes(filters.clientTypes) : therapist) && (filters.specialties ? therapist.specialties.includes(filters.specialties) : therapist) && (filters.insurance ? therapist.insurance.includes(filters.insurance) : therapist);
  }); // MOBILE SUBPAGE

  const {
    0: subpage,
    1: setSubpage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: previousSubpage,
    1: setPreviousSubpage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const showSubpage = content => {
    setPreviousSubpage(subpage);
    setSubpage(content);
  };

  const showPreviousSubpage = () => {
    setPreviousSubpage("");
    setSubpage(previousSubpage);
  };

  const closeSubpage = () => {
    setSubpage("");
  }; // MODAL


  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const showModal = content => {
    setModal(content);
  };

  const closeModal = () => {
    setModal("");
  }; // REQUEST A LISTING STATE LOGIC


  const {
    0: formFields,
    1: setFormFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    email: ""
  });

  const changeFormFields = e => {
    setFormFields(_objectSpread({}, formFields, {
      [e.target.name]: e.target.value
    }));
  };

  const submitForm = async e => {
    e.preventDefault();
    setModal("loader");
    const url = "https://charlotte-therapists-api.herokuapp.com/api/v1" + '/request-listing';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Token': "GaDEIslk4hf9302nflango390n5j"
      },
      body: JSON.stringify(formFields)
    });
    response.ok ? setModal("success") : setModal("fail");
  };

  if (mobile) {
    return __jsx("div", {
      className: classes.root,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 7
      }
    }, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      showModal: showModal,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }
    }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.main,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }
    }, __jsx(_Listings__WEBPACK_IMPORTED_MODULE_2__["default"], {
      therapists: therapists,
      selected: selected,
      setSelected: setSelected,
      showMidbar: showMidbar,
      setShowMidbar: setShowMidbar,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    }), __jsx(_Midbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      therapist: selectedTherapist,
      showMidbar: showMidbar,
      setShowMidbar: setShowMidbar,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }
    })), __jsx(_mobile_BottomBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      subpage: subpage,
      show: showSubpage,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }
    }), subpage && __jsx(_mobile_Subpage__WEBPACK_IMPORTED_MODULE_13__["default"], {
      back: showPreviousSubpage,
      show: showSubpage,
      content: subpage,
      onChange: changeFilters,
      activeFilters: filters,
      catalogue: props.catalogue,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }
    }));
  } else {
    return __jsx("div", {
      className: classes.root,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 7
      }
    }, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      showModal: showModal,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }
    }), __jsx(_FiltersBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      clearFilters: clearFilters,
      onChange: changeFilters,
      activeFilters: filters,
      catalogue: props.catalogue,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }
    }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.main,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }
    }, __jsx(_Listings__WEBPACK_IMPORTED_MODULE_2__["default"], {
      therapists: therapists,
      selected: selected,
      setSelected: setSelected,
      showMidbar: showMidbar,
      setShowMidbar: setShowMidbar,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }
    }), __jsx(_Midbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      therapist: selectedTherapist,
      showMidbar: showMidbar,
      setShowMidbar: setShowMidbar,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: {
        flexGrow: '1'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }, __jsx(_Map__WEBPACK_IMPORTED_MODULE_6__["default"], {
      therapists: props.therapists,
      selected: selected,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 40
      }
    }))), modal && __jsx(_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      closeModal: closeModal,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }
    }, __jsx(_ModalContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
      content: modal,
      formFields: formFields,
      handleChange: changeFormFields,
      handleSubmit: submitForm,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }
    })));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/Filter.js":
/*!******************************!*\
  !*** ./components/Filter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SelectOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectOptions */ "./components/SelectOptions.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Filter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
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
}));

const Filter = props => {
  const classes = useStyles();
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleClose = () => {
    setOpen(false);
  };

  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.button,
    onClick: () => setOpen(!open),
    size: "small",
    color: props.activeFilter ? "primary" : "inherit",
    variant: props.activeFilter ? "contained" : "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, props.activeFilter ? `${props.label}: ${props.activeFilter}` : `Choose ${props.label}`, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.expandIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })), open && __jsx(_SelectOptions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleClose: handleClose,
    selected: props.activeFilter,
    options: props.options,
    filter: props.filter,
    onChange: props.onChange,
    type: "radio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./components/FiltersBar.js":
/*!**********************************!*\
  !*** ./components/FiltersBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SelectOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectOptions */ "./components/SelectOptions.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Filter */ "./components/Filter.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "@material-ui/icons/FilterList");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/FiltersBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
    color: theme.palette.primary.main
  },
  clear: {
    color: theme.palette.error.main,
    borderRadius: 20,
    padding: "2px 15px"
  },
  close: {
    position: "absolute",
    top: 20,
    right: 20
  }
}));

const anyActiveFilters = activeFilters => {
  for (let key in activeFilters) {
    if (activeFilters[key] != "") {
      return true;
    }
  }

  return false;
};

const FiltersBar = props => {
  const classes = useStyles();
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: `${classes.filterIndicator} ${anyActiveFilters(props.activeFilters) && classes.active} `,
    style: {
      fontFamily: "Raleway",
      fontWeight: "bold",
      marginRight: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: `${classes.filterIcon} ${anyActiveFilters(props.activeFilters) && classes.active} `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), anyActiveFilters(props.activeFilters) ? "FILTERS ON" : "FILTERS OFF"), __jsx(_Filter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activeFilter: props.activeFilters.clientTypes,
    options: props.catalogue.clientTypes,
    filter: "clientTypes",
    onChange: props.onChange,
    label: "Client Type",
    type: "radio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx(_Filter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activeFilter: props.activeFilters.specialties,
    options: props.catalogue.specialties,
    filter: "specialties",
    onChange: props.onChange,
    label: "Specialty",
    type: "radio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx(_Filter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activeFilter: props.activeFilters.insurance,
    options: props.catalogue.insurance,
    filter: "insurance",
    onChange: props.onChange,
    label: "Insurance",
    type: "radio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), anyActiveFilters(props.activeFilters) && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "small",
    onClick: props.clearFilters,
    className: classes.clear,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 52
    }
  }, "Clear All Filters ", __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      fontSize: 14,
      marginLeft: 8
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 146
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FiltersBar);

/***/ }),

/***/ "./components/Listing.js":
/*!*******************************!*\
  !*** ./components/Listing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/School */ "@material-ui/icons/School");
/* harmony import */ var _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_School__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Work */ "@material-ui/icons/Work");
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Group */ "@material-ui/icons/Group");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/AttachMoney */ "@material-ui/icons/AttachMoney");
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Listing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const Listing = props => {
  const classes = useStyles();

  function handleClick() {
    props.setSelected(props.id);
    if (!props.showMidbar) props.setShowMidbar(true);
  }

  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
    my: 1.5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    button: true,
    selected: props.therapist.id == props.selected ? true : false,
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.imageContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default.a, {
    image: '/therapist-images/' + props.therapist.image,
    className: classes.listingImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.contentContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
    py: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      fontSize: 18
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, props.therapist.first_name, " ", props.therapist.last_name), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "h4",
    className: classes.subtitle,
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, props.therapist.title)), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
    pl: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default.a, {
    item: true,
    xs: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body2",
    style: {
      display: "inline-block"
    },
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_School__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      fontSize: 14,
      verticalAlign: "middle"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }), " ", props.therapist.licenses.join(', '))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default.a, {
    item: true,
    xs: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body2",
    style: {
      display: "inline-block"
    },
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      fontSize: 14,
      verticalAlign: "middle"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }), " ", props.therapist.clientTypes.join(', '))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default.a, {
    item: true,
    xs: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body2",
    style: {
      display: "inline-block"
    },
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_13___default.a, {
    style: {
      fontSize: 16,
      verticalAlign: "middle"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }), " ", props.therapist.price, " per Session")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default.a, {
    item: true,
    xs: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body2",
    style: {
      display: "inline-block"
    },
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      fontSize: 14,
      verticalAlign: "middle"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }), " ", props.therapist.experience, " years experience")))))));
};

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    overflow: 'hidden',
    background: "white",
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderRadius: 12
  },
  selected: {
    background: 'red'
  },
  subtitle: {
    margin: 0
  },
  imageContainer: {
    [theme.breakpoints.only('xs')]: {
      width: 110,
      height: 110,
      padding: 10
    },
    width: 115,
    height: 115,
    padding: 18,
    display: 'inline-box',
    verticalAlign: 'top'
  },
  contentContainer: {
    width: 375,
    height: 110,
    display: 'inline-box',
    verticalAlign: 'top',
    overflow: 'hidden'
  },
  listingImage: {
    width: '100%',
    borderRadius: '50%'
  },
  chip: {
    position: 'absolute',
    top: 15,
    right: 15
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (Listing);

/***/ }),

/***/ "./components/Listings.js":
/*!********************************!*\
  !*** ./components/Listings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Listing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Listing */ "./components/Listing.js");
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Listings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: "600px"
    },
    width: "100%",
    background: "#F6F9FC",
    display: 'inline-block',
    zIndex: 100,
    borderRight: "1px solid #ddd",
    overflow: 'scroll',
    position: 'relative'
  },
  listingsContainer: {}
}));

const Listings = props => {
  const classes = useStyles();
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.listingsContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, props.therapists.map(therapist => __jsx(_Listing__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: therapist.id,
    id: therapist.id,
    therapist: therapist,
    selected: props.selected,
    setSelected: props.setSelected,
    showMidbar: props.showMidbar,
    setShowMidbar: props.setShowMidbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Listings);

/***/ }),

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutline */ "@material-ui/icons/CheckCircleOutline");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/HighlightOff */ "@material-ui/icons/HighlightOff");
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Loader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
  },
  success: {
    color: theme.palette.success.main
  },
  failed: {
    color: theme.palette.error.main
  }
}));

const Loader = props => {
  const classes = useStyles();
  let icon;
  let message;

  if (props.status == 'loading') {
    icon = __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default.a, {
      size: props.size,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 12
      }
    });
    message = 'Request submitting...';
  } else if (props.status == 'success') {
    icon = __jsx(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.success,
      style: {
        fontSize: props.size
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 12
      }
    });
    message = 'Your request was submitted!';
  } else if (props.status == 'failed') {
    icon = __jsx(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.failed,
      style: {
        fontSize: props.size
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 14
      }
    });
    message = 'Your request failed to submit.';
  } else {
    icon = '?';
    message = 'No loading status given to Loader component';
  }

  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, icon, __jsx("p", {
    className: classes.message,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, message));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    height: '100%'
  }
});

const Map = props => {
  const classes = useStyles();
  const {
    0: map,
    1: setMap
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: markers,
    1: setMarkers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const mapRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const initMap = () => {
    const map = new google.maps.Map(mapRef.current, {
      center: {
        lat: 35.2271,
        lng: -80.8431
      },
      zoom: 12,
      disableDefaultUI: true,
      styles: [{
        featureType: "poi",
        elementType: "labels",
        stylers: [{
          visibility: "off"
        }]
      }]
    });
    setMap(map);
    const markers = [];
    props.therapists.forEach(therapist => {
      if (therapist.location) {
        let marker = new google.maps.Marker({
          position: therapist.location,
          map: map
        });
        markers.push({
          "id": therapist.id,
          "object": marker
        });
      }
    });
    setMarkers(markers);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    initMap();
    return () => {};
  }, []);

  const changeSelectedMarker = () => {
    markers.forEach(marker => marker.object.setAnimation(null));

    if (props.therapists.find(therapist => therapist.id == props.selected).location) {
      markers.find(marker => marker.id == props.selected).object.setAnimation(google.maps.Animation.BOUNCE);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.selected) changeSelectedMarker();
    return () => {};
  }, [props.selected]);
  return __jsx("div", {
    ref: mapRef,
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/Midbar.js":
/*!******************************!*\
  !*** ./components/Midbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Midbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      position: 'absolute',
      width: '100%',
      boxShadow: 'none',
      zIndex: 100
    },
    height: '100%',
    position: 'relative',
    display: 'inline-block',
    width: '450px',
    background: '#fff',
    borderRight: '1px solid #ddd',
    zIndex: 10,
    overflow: 'auto'
  },
  hide: {
    display: "none"
  },
  closeButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    color: "grey"
  },
  image: {
    width: "100px",
    height: "100px"
  },
  topImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover"
  }
}));

const Midbar = props => {
  const classes = useStyles();
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    px: 4,
    className: props.showMidbar ? classes.root : classes.hide,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pb: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    mt: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11___default.a, {
    src: '/therapist-images/' + props.therapist.image,
    className: classes.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fontSize: "24px",
    mt: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, props.therapist.first_name, " ", props.therapist.last_name)), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "textSecondary",
    pt: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, props.therapist.title)), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pt: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    display: "inline-block",
    pr: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "mailto:" + props.therapist.email,
    variant: "contained",
    color: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "Email")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    display: "inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: props.therapist.website,
    target: "_blank ",
    variant: "contained",
    color: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "Website")))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    py: 1.5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pb: .5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "textSecondary",
    variant: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "About")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, props.therapist.about)), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    py: 1.5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pb: .5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "textSecondary",
    variant: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Specialty Areas")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, props.therapist.specialties.join(', '))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    py: 1.5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pb: .5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "textSecondary",
    variant: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "Treatment Approaches")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, props.therapist.treatments.join(', '))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    py: 1.5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pb: .5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "textSecondary",
    variant: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Payment")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, "$", props.therapist.price, " per Session")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    py: 1.5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pb: .5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    color: "textSecondary",
    variant: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "Clients")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, props.therapist.clientTypes.join(', '))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: () => props.setShowMidbar(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Midbar);

/***/ }),

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
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

const Modal = props => {
  const classes = useStyles();
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.shade,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.modal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    "aria-label": "close",
    className: classes.close,
    onClick: props.closeModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/ModalContent.js":
/*!************************************!*\
  !*** ./components/ModalContent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RequestListing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestListing */ "./components/RequestListing.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ "./components/Loader.js");
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/ModalContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ModalContent = props => {
  switch (props.content) {
    case "listingRequest":
      return __jsx(_RequestListing__WEBPACK_IMPORTED_MODULE_1__["default"], {
        formFields: props.formFields,
        handleChange: props.handleChange,
        handleSubmit: props.handleSubmit,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 14
        }
      });

    case "loader":
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        status: "loading",
        size: 80,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 14
        }
      });

    case "success":
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        status: "success",
        size: 80,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 14
        }
      });

    case "fail":
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        status: "failed",
        size: 80,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 14
        }
      });

    default:
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 14
        }
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ModalContent);

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Weekend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Weekend */ "@material-ui/icons/Weekend");
/* harmony import */ var _material_ui_icons_Weekend__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Weekend__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      borderBottom: "1px solid #ddd"
    },
    textAlign: "center",
    background: "white"
  },
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
}));

const NavBar = props => {
  const classes = useStyles();
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.root,
    px: 4,
    pt: 1,
    style: {
      height: "80px",
      position: "relative",
      zIndex: 1000
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_Weekend__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.logoIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: classes.logo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 49
    }
  }, "Charlotte Therapists"), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {
    display: {
      xs: 'none',
      md: 'block'
    },
    style: {
      position: "absolute",
      top: 23,
      right: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: () => props.showModal("listingRequest"),
    color: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 96
    }
  }, "I'm a Charlotte Therapist")));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/Option.js":
/*!******************************!*\
  !*** ./components/Option.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Option.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
}));

const Option = props => {
  const classes = useStyles();
  return __jsx("label", {
    className: `${classes.option} ${props.checked && classes.selected}`,
    name: props.name,
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: classes.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ }),

/***/ "./components/RequestListing.js":
/*!**************************************!*\
  !*** ./components/RequestListing.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/RequestListing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: 80,
    flexWrap: "wrap"
  },
  form: {
    marginTop: 0
  },
  field: {
    display: "block",
    padding: "10px 0",
    fontSize: "18px",
    fontWeight: "600"
  },
  input: {
    minWidth: 400,
    borderRadius: 4,
    background: "#f4f6f8",
    border: "none",
    padding: '12px 24px',
    fontSize: '20px',
    boxShadow: 'inset 0px 0px 2px rgba(0,0,0,.2)',
    fontFamily: 'Source Sans Pro'
  },
  label: {
    display: "block",
    paddingBottom: 8
  },
  header: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    fontSize: '18px'
  },
  close: {
    position: "absolute",
    top: 20,
    right: 20
  },
  submit: {
    width: "100%",
    paddingY: "",
    marginTop: 20,
    fontSize: "16px"
  }
});

const RequestListing = props => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "It's Free to Join Charlotte Therapists Before 2021"), __jsx("h3", {
    style: {
      fontWeight: "500"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "Are you a therapist in the Charlotte area? Submit this form to request to add your listing to this site.")), __jsx("form", {
    className: classes.form,
    onSubmit: e => props.handleSubmit(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: classes.field,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "Your Name"), __jsx("input", {
    className: classes.input,
    name: "name",
    type: "text",
    value: props.formFields.name,
    onChange: e => props.handleChange(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  })), __jsx("label", {
    className: classes.field,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "Your Email Address"), __jsx("input", {
    className: classes.input,
    name: "email",
    type: "text",
    value: props.formFields.email,
    onChange: e => props.handleChange(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "large",
    className: classes.submit,
    color: "primary",
    type: "submit",
    variant: "contained",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (RequestListing);

/***/ }),

/***/ "./components/SelectOptions.js":
/*!*************************************!*\
  !*** ./components/SelectOptions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Option */ "./components/Option.js");
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/SelectOptions.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  selectOptions: {
    minWidth: 200,
    background: '#fff',
    borderRadius: 4,
    border: "1px solid #ddd",
    boxShadow: '0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)',
    position: 'absolute',
    top: 32,
    zIndex: 1000,
    fontFamily: 'raleway',
    fontSize: 13,
    fontWeight: '500'
  }
}));

const Select = props => {
  const classes = useStyles();
  const node = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }

    props.handleClose();
  };

  const handleChange = e => {
    props.onChange(props.filter, e.target.value);
    props.handleClose();
  };

  return __jsx("form", {
    onChange: e => handleChange(e),
    ref: node,
    className: classes.selectOptions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, props.options.map((option, i) => __jsx(_Option__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: i,
    id: i,
    checked: props.selected === option,
    value: option,
    name: props.filter,
    type: props.type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, option)));
};

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./components/mobile/BottomBar.js":
/*!****************************************!*\
  !*** ./components/mobile/BottomBar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "@material-ui/icons/FilterList");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/mobile/BottomBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: 'block',
    position: 'fixed',
    bottom: 0,
    background: 'white',
    zIndex: 101,
    textAlign: 'center',
    width: '100%',
    left: "50%",
    transform: "translate(-50%,0)",
    padding: '10px 0',
    border: "1px solid #ddd"
  },
  filterIcon: {
    color: "#777",
    fontSize: 24,
    marginRight: 10
  }
}));

const FiltersBar = props => {
  const classes = useStyles();
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: () => props.show("filters"),
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.filterIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), " Search Filters")));
};

/* harmony default export */ __webpack_exports__["default"] = (FiltersBar);

/***/ }),

/***/ "./components/mobile/Filter.js":
/*!*************************************!*\
  !*** ./components/mobile/Filter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Option */ "./components/mobile/Option.js");
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/mobile/Filter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
    float: 'right',
    verticalAlign: 'middle',
    marginTop: 24,
    fontSize: 40
  }
}));

const FilterMobile = props => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Filter by ", props.label), __jsx("form", {
    onChange: e => props.onChange(props.filter, e.target.value),
    className: classes.selectOptions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, props.options.map((option, i) => __jsx("div", {
    className: classes.row,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(_Option__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.label,
    key: i,
    id: i,
    checked: props.selected === option,
    value: option,
    name: props.filter,
    type: props.type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, option)))));
};

/* harmony default export */ __webpack_exports__["default"] = (FilterMobile); // <form onChange={(e) => handleChange(e)} className={classes.selectOptions}>
//   {props.options.map((option, i) => (
//     <div className={classes.row}>
//       <Option key={i} id={i} checked={props.selected === option} value={option} name={props.filter} type={props.type}>{option}</Option>
//     </div>
//   ))}
// </form>

/***/ }),

/***/ "./components/mobile/Filters.js":
/*!**************************************!*\
  !*** ./components/mobile/Filters.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter */ "./components/mobile/Filter.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/mobile/Filters.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
    float: 'right',
    verticalAlign: 'middle',
    marginTop: 24,
    fontSize: 40
  }
}));

const FiltersMobile = props => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: classes.header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "Filters"), __jsx("div", {
    className: classes.row,
    onClick: () => props.show('clientTypeFilter'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Client Type"), __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.chevronRightIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: classes.row,
    onClick: () => props.show('specialtyFilter'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Specialties"), __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.chevronRightIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: classes.row,
    onClick: () => props.show('insuranceFilter'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: classes.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "Insurance"), __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.chevronRightIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FiltersMobile);

/***/ }),

/***/ "./components/mobile/Option.js":
/*!*************************************!*\
  !*** ./components/mobile/Option.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/mobile/Option.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {},
  selected: {
    color: "#4d8ac7"
  },
  label: {
    paddingLeft: 20
  }
}));

const Option = props => {
  const classes = useStyles();
  return __jsx("label", {
    className: `${classes.root} ${props.checked && classes.selected}`,
    name: props.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("input", {
    checked: props.checked,
    type: props.type,
    value: props.value,
    name: props.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: classes.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ }),

/***/ "./components/mobile/Subpage.js":
/*!**************************************!*\
  !*** ./components/mobile/Subpage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SubpageContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubpageContent */ "./components/mobile/SubpageContent.js");
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/mobile/Subpage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
}));

const Subpage = props => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.back,
    onClick: props.back,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.arrowBackIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Subpage);

/***/ }),

/***/ "./components/mobile/SubpageContent.js":
/*!*********************************************!*\
  !*** ./components/mobile/SubpageContent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filters */ "./components/mobile/Filters.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter */ "./components/mobile/Filter.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader */ "./components/Loader.js");
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/mobile/SubpageContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SubpageContent = props => {
  switch (props.content) {
    case "filters":
      return __jsx(_Filters__WEBPACK_IMPORTED_MODULE_1__["default"], {
        show: props.show,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 14
        }
      });

    case "clientTypeFilter":
      return __jsx(_Filter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        filter: "clientTypes",
        label: "Client Type",
        selected: props.activeFilters.clientTypes,
        options: props.catalogue.clientTypes,
        onChange: props.onChange,
        type: "radio",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 14
        }
      });

    case "specialtyFilter":
      return __jsx(_Filter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        filter: "specialties",
        label: "Specialties",
        selected: props.activeFilters.specialties,
        options: props.catalogue.specialties,
        onChange: props.onChange,
        type: "radio",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 14
        }
      });

    case "insuranceFilter":
      return __jsx(_Filter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        filter: "insurance",
        label: "Insurance",
        selected: props.activeFilters.insurance,
        options: props.catalogue.insurance,
        onChange: props.onChange,
        type: "radio",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 14
        }
      });

    default:
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 14
        }
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SubpageContent);

/***/ }),

/***/ "./database.json":
/*!***********************!*\
  !*** ./database.json ***!
  \***********************/
/*! exports provided: therapists, catalogue, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"therapists\":[{\"id\":1,\"first_name\":\"Susan\",\"last_name\":\"Morrow\",\"image\":\"susan-morrow.jpg\",\"location\":{\"lat\":35.2089029,\"lng\":-80.8534172},\"title\":\"Couples Therapist\",\"about\":\"30 Years of private practice. Masters of Social Work from University of Georigia. Licensed Clinical Social Worker\",\"specialties\":[\"Depression\",\"Anxiety\",\"Marriage\"],\"treatments\":[\"emotionally-Focused Therapy\",\"cognitive Behavioral Therapy\"],\"price\":180,\"clientTypes\":[\"Individual\",\"Family\",\"Couple\"],\"email\":\"morrowsus@gmail.com\",\"website\":\"https://susanmorrow.us\",\"licenses\":[\"MSW\",\"LCSW\"],\"experience\":\"30\",\"insurance\":[]},{\"id\":2,\"first_name\":\"Kellie\",\"last_name\":\"Stinson\",\"image\":\"kallie-stinson.jpg\",\"location\":{\"lat\":35.2219936,\"lng\":-80.8557504},\"title\":\"Couples Therapist\",\"about\":\"30 Years of private practice. Masters of Social Work from University of Georigia. Licensed Clinical Social Worker\",\"specialties\":[\"depression\",\"anxiety\",\"stress\",\"marriage\"],\"treatments\":[\"emotionally-Focused Therapy\",\"cognitive Behavioral Therapy\"],\"price\":180,\"clientTypes\":[\"Individual\",\"Family\"],\"email\":\"morrowsus@gmail.com\",\"website\":\"https://susanmorrow.us\",\"licenses\":[\"MSW\",\"LCSW\"],\"experience\":\"11\",\"insurance\":[\"Aetna\",\"United Healthcare\",\"Cigna\"]},{\"id\":3,\"first_name\":\"Montina\",\"last_name\":\"Myers-Galloway\",\"image\":\"montina-myers-gallaway.jpg\",\"location\":{\"lat\":35.2028807,\"lng\":-80.8463633},\"title\":\"Couples Therapist\",\"about\":\"30 Years of private practice. Masters of Social Work from University of Georigia. Licensed Clinical Social Worker\",\"specialties\":[\"depression\",\"stress\",\"marriage\"],\"treatments\":[\"emotionally-Focused Therapy\",\"cognitive Behavioral Therapy\"],\"price\":180,\"clientTypes\":[\"Family\"],\"email\":\"morrowsus@gmail.com\",\"website\":\"https://susanmorrow.us\",\"licenses\":[\"MSW\",\"LCSW\"],\"experience\":\"7\",\"insurance\":[\"Aetna\",\"United Healthcare\",\"BlueCross BlueShield\"]},{\"id\":4,\"first_name\":\"Susan\",\"last_name\":\"Morrow\",\"image\":\"susan-morrow.jpg\",\"location\":{\"lat\":35.2089029,\"lng\":-80.8534172},\"title\":\"Couples Therapist\",\"about\":\"30 Years of private practice. Masters of Social Work from University of Georigia. Licensed Clinical Social Worker\",\"specialties\":[\"depression\",\"anxiety\",\"stress\",\"marriage\"],\"treatments\":[\"emotionally-Focused Therapy\",\"cognitive Behavioral Therapy\"],\"price\":180,\"clientTypes\":[\"Individual\",\"Family\"],\"email\":\"morrowsus@gmail.com\",\"website\":\"https://susanmorrow.us\",\"licenses\":[\"MSW\",\"LCSW\"],\"experience\":\"3\",\"insurance\":[\"Aetna\",\"United Healthcare\",\"BlueCross BlueShield\"]},{\"id\":5,\"first_name\":\"Kellie\",\"last_name\":\"Stinson\",\"image\":\"kallie-stinson.jpg\",\"location\":{\"lat\":35.2219936,\"lng\":-80.8557504},\"title\":\"Couples Therapist\",\"about\":\"30 Years of private practice. Masters of Social Work from University of Georigia. Licensed Clinical Social Worker\",\"specialties\":[\"depression\",\"anxiety\",\"stress\",\"marriage\"],\"treatments\":[\"emotionally-Focused Therapy\",\"cognitive Behavioral Therapy\"],\"price\":180,\"clientTypes\":[\"Individual\",\"Family\"],\"email\":\"morrowsus@gmail.com\",\"website\":\"https://susanmorrow.us\",\"licenses\":[\"MSW\",\"LCSW\"],\"experience\":\"12\",\"insurance\":[\"Aetna\",\"United Healthcare\",\"BlueCross BlueShield\"]},{\"id\":6,\"first_name\":\"Montina\",\"last_name\":\"Myers-Galloway\",\"image\":\"montina-myers-gallaway.jpg\",\"location\":{\"lat\":35.2028807,\"lng\":-80.8463633},\"title\":\"Couples Therapist\",\"about\":\"30 Years of private practice. Masters of Social Work from University of Georigia. Licensed Clinical Social Worker\",\"specialties\":[\"depression\",\"anxiety\",\"stress\",\"marriage\"],\"treatments\":[\"emotionally-Focused Therapy\",\"cognitive Behavioral Therapy\"],\"price\":180,\"clientTypes\":[\"Individual\",\"Family\"],\"email\":\"morrowsus@gmail.com\",\"website\":\"https://susanmorrow.us\",\"licenses\":[\"MSW\",\"LCSW\"],\"experience\":\"30\",\"insurance\":[\"Aetna\",\"United Healthcare\",\"BlueCross BlueShield, Optium\"]}],\"catalogue\":{\"specialties\":[\"Depression\",\"Anxiety\",\"Marriage\",\"Stress\"],\"treatments\":[\"Emotionally-Focused Therapy\",\"Gottman Method\",\"Cognitive Behavioral Therapy\",\"Family Systems Therapy\",\"ACT\"],\"clientTypes\":[\"Individual\",\"Couple\",\"Family\"],\"licenses\":[\"MSW\",\"LCSW\"],\"insurance\":[\"Aetna\",\"BlueCross BlueShield\",\"Cigna\",\"Humana\",\"Optium\",\"United Healthcare\"]}}");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database.json */ "./database.json");
var _database_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../database.json */ "./database.json", 1);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Home = props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Charlotte Therapists"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })), __jsx(_components_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
    therapists: props.therapists,
    catalogue: props.catalogue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
};

if (true) {
  Home.getInitialProps = async ctx => {
    const json = _database_json__WEBPACK_IMPORTED_MODULE_3__;
    return {
      therapists: json.therapists,
      catalogue: json.catalogue
    };
  };
} else {}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/miller/Code/charlotte-therapists/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Slide":
/*!******************************************!*\
  !*** external "@material-ui/core/Slide" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ArrowBack":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowBack" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),

/***/ "@material-ui/icons/AttachMoney":
/*!*************************************************!*\
  !*** external "@material-ui/icons/AttachMoney" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AttachMoney");

/***/ }),

/***/ "@material-ui/icons/CheckCircleOutline":
/*!********************************************************!*\
  !*** external "@material-ui/icons/CheckCircleOutline" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircleOutline");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/FilterList":
/*!************************************************!*\
  !*** external "@material-ui/icons/FilterList" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterList");

/***/ }),

/***/ "@material-ui/icons/Group":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Group" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Group");

/***/ }),

/***/ "@material-ui/icons/HighlightOff":
/*!**************************************************!*\
  !*** external "@material-ui/icons/HighlightOff" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HighlightOff");

/***/ }),

/***/ "@material-ui/icons/School":
/*!********************************************!*\
  !*** external "@material-ui/icons/School" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/School");

/***/ }),

/***/ "@material-ui/icons/Weekend":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Weekend" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Weekend");

/***/ }),

/***/ "@material-ui/icons/Work":
/*!******************************************!*\
  !*** external "@material-ui/icons/Work" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Work");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map