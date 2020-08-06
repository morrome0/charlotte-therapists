webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/mobile/SubpageContent.js":
/*!*********************************************!*\
  !*** ./components/mobile/SubpageContent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filters */ "./components/mobile/Filters.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter */ "./components/mobile/Filter.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader */ "./components/Loader.js");
var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/mobile/SubpageContent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SubpageContent = function SubpageContent(props) {
  switch (props.content) {
    case "filters":
      return __jsx(_Filters__WEBPACK_IMPORTED_MODULE_1__["default"], {
        show: props.show,
        __self: _this,
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
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 14
        }
      });

    case "clientTypeFilter":
      return __jsx(_Filter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        filter: "specialties",
        label: "Specialties",
        selected: props.activeFilters.specialties,
        options: props.catalogue.specialties,
        onChange: props.onChange,
        type: "radio",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 14
        }
      });

    case "clientTypeFilter":
      return __jsx(_Filter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        filter: "insurance",
        label: "Insurance",
        selected: props.activeFilters.insurance,
        options: props.catalogue.insurance,
        onChange: props.onChange,
        type: "radio",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 16
        }
      });

    default:
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 14
        }
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SubpageContent);

/***/ })

})
//# sourceMappingURL=index.js.2309e5b88d9bbea0fa8b.hot-update.js.map