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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Map.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    display: 'inline-block',
    height: '90vh',
    width: 'calc(100vw - 600px)'
  }
});

var Map = function Map(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      map = _useState[0],
      setMap = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      markers = _useState2[0],
      setMarkers = _useState2[1];

  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var initMap = function initMap() {
    var map = new google.maps.Map(mapRef.current, {
      center: {
        lat: 35.2271,
        lng: -80.8431
      },
      zoom: 12
    });
    setMap(map);
    var markers = [];
    props.therapists.forEach(function (therapist) {
      if (therapist.location) {
        var marker = new google.maps.Marker({
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    initMap();
    return function () {};
  }, []);

  var changeSelectedMarker = function changeSelectedMarker() {
    if (props.selected) {
      markers.forEach(function (marker) {
        return marker.object.setAnimation(null);
      });
      markers.find(function (marker) {
        return marker.id == props.selected;
      }).object.setAnimation(google.maps.Animation.BOUNCE);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    changeSelectedMarker();
    return function () {};
  }, [props.selected]);
  return __jsx("div", {
    ref: mapRef,
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/Marker.js":
false

})
//# sourceMappingURL=index.js.bd4510eb53e4870220c1.hot-update.js.map