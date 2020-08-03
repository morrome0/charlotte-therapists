webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ModalContent.js":
/*!************************************!*\
  !*** ./components/ModalContent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RequestListing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestListing */ "./components/RequestListing.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ "./components/Loader.js");
/* harmony import */ var _Success__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Success */ "./components/Success.js");
/* harmony import */ var _Fail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fail */ "./components/Fail.js");
var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/ModalContent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ModalContent = function ModalContent(props) {
  switch (props.content) {
    case "listingRequest":
      return __jsx(_RequestListing__WEBPACK_IMPORTED_MODULE_1__["default"], {
        formFields: props.formFields,
        handleChange: props.handleChange,
        handleSubmit: props.handleSubmit,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 14
        }
      });

    case "loader":
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 14
        }
      });

    case "success":
      return __jsx(_Success__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 14
        }
      });

    case "fail":
      return __jsx(_Fail__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 14
        }
      });

    default:
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 14
        }
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ModalContent);

/***/ })

})
//# sourceMappingURL=index.js.d7d2e43ac964438b70d7.hot-update.js.map