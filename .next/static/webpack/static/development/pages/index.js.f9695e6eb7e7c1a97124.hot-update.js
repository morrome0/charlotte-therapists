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
/* harmony import */ var _SelectOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SelectOptions */ "./components/SelectOptions.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader */ "./components/Loader.js");
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
          lineNumber: 10,
          columnNumber: 14
        }
      });

    case "clientTypeFilter":
      return __jsx(_SelectOptions__WEBPACK_IMPORTED_MODULE_3__["default"], {
        selected: props.activeFilter,
        options: props.options,
        filter: props.filter,
        onChange: props.onChange,
        type: "radio",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 14
        }
      });

    case "clientTypeFilter..":
      return __jsx(_Filter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        filter: "clientTypes",
        label: "Client Type",
        activeFilter: props.activeFilters.clientTypes,
        options: props.catalogue.clientTypes,
        onChange: props.onChange,
        type: "radio",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 14
        }
      });

    default:
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 14
        }
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SubpageContent);

/***/ })

})
//# sourceMappingURL=index.js.f9695e6eb7e7c1a97124.hot-update.js.map