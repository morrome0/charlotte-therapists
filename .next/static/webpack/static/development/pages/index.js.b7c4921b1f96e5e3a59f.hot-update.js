webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Fail.js":
false,

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
          lineNumber: 8,
          columnNumber: 14
        }
      });

    case "loader":
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        status: "loading",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 14
        }
      });

    case "success":
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        status: "success",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 14
        }
      });

    case "fail":
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        status: "failed",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 14
        }
      });

    default:
      return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: _this,
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

/***/ "./components/Success.js":
false

})
//# sourceMappingURL=index.js.b7c4921b1f96e5e3a59f.hot-update.js.map