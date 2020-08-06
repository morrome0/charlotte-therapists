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
/* harmony import */ var _FiltersBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FiltersBar */ "./components/FiltersBar.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
/* harmony import */ var _ModalContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModalContent */ "./components/ModalContent.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mobile_BottomBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mobile/BottomBar */ "./components/mobile/BottomBar.js");
/* harmony import */ var _mobile_Subpage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mobile/Subpage */ "./components/mobile/Subpage.js");



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
  var classes = useStyles(); // MOBILE

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      mobile = _useState[0],
      setMobile = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setMobile(window.innerWidth < 960);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('resize', onWindowResize);
    return function () {
      return window.removeEventListener('resize', onWindowResize);
    };
  });
  var onWindowResize = Object(lodash__WEBPACK_IMPORTED_MODULE_13__["throttle"])(function () {
    return setMobile(window.innerWidth < 960);
  }, 200, {
    'leading': true
  }); // LISTINGS

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.therapists[0]),
      selectedTherapist = _useState3[0],
      setSelectedTherapist = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showMidbar = _useState4[0],
      setShowMidbar = _useState4[1];

  var getSelectedTherapist = function getSelectedTherapist() {
    return props.therapists.find(function (therapist) {
      return therapist.id == selected;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (selected) setSelectedTherapist(getSelectedTherapist());
  }, [selected]); // FILTERS

  var defaultFilters = {
    clientTypes: "",
    specialties: "",
    insurance: ""
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultFilters),
      filters = _useState5[0],
      setFilters = _useState5[1];

  var changeFilters = function changeFilters(filter, value) {
    setFilters(_objectSpread({}, filters, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, filter, value)));
  };

  var clearFilters = function clearFilters() {
    setFilters(defaultFilters);
  };

  var therapists = props.therapists.filter(function (therapist) {
    return (filters.clientTypes ? therapist.clientTypes.includes(filters.clientTypes) : therapist) && (filters.specialties ? therapist.specialties.includes(filters.specialties) : therapist) && (filters.insurance ? therapist.insurance.includes(filters.insurance) : therapist);
  }); // MOBILE SUBPAGE

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      subpage = _useState6[0],
      setSubpage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      previousSubpage = _useState7[0],
      setPreviousSubpage = _useState7[1];

  var showSubpage = function showSubpage(content) {
    setPreviousSubpage(subpage);
    setSubpage(content);
  };

  var showPreviousSubpage = function showPreviousSubpage() {
    setPreviousSubpage("");
    setSubpage(previousSubpage);
  };

  var closeSubpage = function closeSubpage() {
    setSubpage("");
  }; // MODAL


  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      modal = _useState8[0],
      setModal = _useState8[1];

  var showModal = function showModal(content) {
    setModal(content);
  };

  var closeModal = function closeModal() {
    setModal("");
  }; // REQUEST A LISTING STATE LOGIC


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: "",
    email: ""
  }),
      formFields = _useState9[0],
      setFormFields = _useState9[1];

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
            setModal("loader");
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
            response.ok ? setModal("success") : setModal("fail");

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  if (mobile) {
    return __jsx("div", {
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 7
      }
    }, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      showModal: showModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }
    }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.main,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
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
        lineNumber: 151,
        columnNumber: 11
      }
    }), __jsx(_Midbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      therapist: selectedTherapist,
      showMidbar: showMidbar,
      setShowMidbar: setShowMidbar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }
    })), __jsx(_mobile_BottomBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
      subpage: subpage,
      show: showSubpage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }
    }), subpage && __jsx(_mobile_Subpage__WEBPACK_IMPORTED_MODULE_15__["default"], {
      back: showPreviousSubpage,
      show: showSubpage,
      content: subpage,
      onChange: changeFilters,
      activeFilters: filters,
      catalogue: props.catalogue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }
    }), console.log(filters));
  } else {
    return __jsx("div", {
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 7
      }
    }, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      showModal: showModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }
    }), __jsx(_FiltersBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      clearFilters: clearFilters,
      onChange: changeFilters,
      activeFilters: filters,
      catalogue: props.catalogue,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }
    }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.main,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
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
        lineNumber: 167,
        columnNumber: 11
      }
    }), __jsx(_Midbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      therapist: selectedTherapist,
      showMidbar: showMidbar,
      setShowMidbar: setShowMidbar,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        flexGrow: '1'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }
    }, __jsx(_Map__WEBPACK_IMPORTED_MODULE_8__["default"], {
      therapists: props.therapists,
      selected: selected,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 40
      }
    }))), modal && __jsx(_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      closeModal: closeModal,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }
    }, __jsx(_ModalContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
      content: modal,
      formFields: formFields,
      handleChange: changeFormFields,
      handleSubmit: submitForm,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 11
      }
    })));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.3c590af691ef5000524e.hot-update.js.map