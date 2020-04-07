webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Map.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var mapStyles = {
  width: 'calc(100vw - 600px)',
  height: '90vh'
};
var containerStyle = {
  width: '100%',
  height: '100%',
  position: 'relative'
};

var MapInstance = function MapInstance(props) {
  return __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Map"], {
    google: props.google,
    zoom: 12,
    style: mapStyles,
    containerStyle: containerStyle,
    initialCenter: {
      lat: 35.2271,
      lng: -80.8431
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["GoogleApiWrapper"])({
  apiKey: 'AIzaSyDIMJcfY-RZqWOinuyarRlKXw1R_PPUg34'
})(MapInstance)); //To-Do Secure API Key

/***/ })

})
//# sourceMappingURL=index.js.4d9ce58f9d75bd47542f.hot-update.js.map