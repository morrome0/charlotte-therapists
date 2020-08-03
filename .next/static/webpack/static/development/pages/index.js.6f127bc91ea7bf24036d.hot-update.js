webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Listings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Listings */ "./components/Listings.js");
/* harmony import */ var _Listing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Listing */ "./components/Listing.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Map */ "./components/Map.js");
/* harmony import */ var _Midbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Midbar */ "./components/Midbar.js");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Filters */ "./components/Filters.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
/* harmony import */ var _ModalContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModalContent */ "./components/ModalContent.js");



var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/App.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
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
  var classes = useStyles(); // LISTING STATE LOGIC

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selected = _useState[0],
      setSelected = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.therapists[0]),
      selectedTherapist = _useState2[0],
      setSelectedTherapist = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      showMidbar = _useState3[0],
      setShowMidbar = _useState3[1];

  var getSelectedTherapist = function getSelectedTherapist() {
    return props.therapists.find(function (therapist) {
      return therapist.id == selected;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (selected) setSelectedTherapist(getSelectedTherapist());
  }, [selected]); // FILTER STATE LOGIC

  var defaultFilters = {
    clientTypes: "",
    specialties: "",
    insurance: ""
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultFilters),
      filters = _useState4[0],
      setFilters = _useState4[1];

  var changeFilters = function changeFilters(filter, value) {
    setFilters(_objectSpread({}, filters, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, filter, value)));
  };

  var clearFilters = function clearFilters() {
    setFilters(defaultFilters);
  };

  var therapists = props.therapists.filter(function (therapist) {
    return (filters.clientTypes ? therapist.clientTypes.includes(filters.clientTypes) : therapist) && (filters.specialties ? therapist.specialties.includes(filters.specialties) : therapist) && (filters.insurance ? therapist.insurance.includes(filters.insurance) : therapist);
  }); //MODAL CONTENT LOGIC

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      modal = _useState5[0],
      setModal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      modalContent = _useState6[0],
      setModalContent = _useState6[1];

  var showModal = function showModal(content) {
    setModal(content);
  };

  var closeModal = function closeModal() {
    setModal("");
  }; // REQUEST A LISTING STATE LOGIC


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: "",
    email: ""
  }),
      formFields = _useState7[0],
      setFormFields = _useState7[1];

  var changeFormFields = function changeFormFields(e) {
    setFormFields(_objectSpread({}, formFields, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.name, e.target.value)));
  };

  var submitForm = function submitForm(e) {
    var url, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitForm$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            setModalContent("loader");
            url = "https://charlotte-therapists-api.herokuapp.com/api/v1" + '/request-listing';
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Token': "GaDEIslk4hf9302nflango390n5j"
              },
              body: JSON.stringify(formFields)
            }));

          case 5:
            response = _context.sent;
            response.ok ? setModalContent("success") : setModalContent("fail");

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    showModal: showModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }), __jsx(_Filters__WEBPACK_IMPORTED_MODULE_10__["default"], {
    clearFilters: clearFilters,
    onChange: changeFilters,
    activeFilters: filters,
    catalogue: props.catalogue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx(_Listings__WEBPACK_IMPORTED_MODULE_4__["default"], {
    therapists: therapists,
    selected: selected,
    setSelected: setSelected,
    showMidbar: showMidbar,
    setShowMidbar: setShowMidbar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }), __jsx(_Midbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    therapist: selectedTherapist,
    showMidbar: showMidbar,
    setShowMidbar: setShowMidbar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx(_Map__WEBPACK_IMPORTED_MODULE_8__["default"], {
    therapists: props.therapists,
    selected: selected,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 73
    }
  }))), modal && __jsx(_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    closeModal: closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx(_ModalContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    content: modalContent,
    formFields: formFields,
    handleChange: changeFormFields,
    handleSubmit: submitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

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
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");


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
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.logoIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "weekend"), __jsx("h1", {
    className: classes.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 58
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
    onClick: props.showModal("listingRequest"),
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

/***/ })

})
//# sourceMappingURL=index.js.6f127bc91ea7bf24036d.hot-update.js.map