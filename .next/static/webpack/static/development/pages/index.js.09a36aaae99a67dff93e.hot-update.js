webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Listing.js":
/*!*******************************!*\
  !*** ./components/Listing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Group */ "./node_modules/@material-ui/icons/Group.js");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Payment */ "./node_modules/@material-ui/icons/Payment.js");
/* harmony import */ var _material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Room */ "./node_modules/@material-ui/icons/Room.js");
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_13__);


var _this = undefined,
    _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Listing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














var Listing = function Listing(props) {
  var classes = useStyles();
  var therapist = props.therapist;

  function handleClick() {
    props.setSelected(props.id);
    if (!props.showMidbar) props.setShowMidbar(true);
  }

  return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    button: true,
    selected: therapist.id === props.selected,
    onClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.imageCropper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: '/therapist-images/' + therapist.image,
    className: classes.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: classes.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, therapist.first_name, " ", therapist.last_name), __jsx("h3", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, therapist.title), __jsx("h4", {
    className: classes.specialties,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, therapist.specialties.join(', ') + '...'), __jsx("span", {
    className: classes.insurance,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.insuranceIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), therapist.insurance.length ? "Accepts some insurance" : "Does not accept insurance")), __jsx("span", {
    className: classes.neighborhood,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: classes.pinIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), therapist.neighborhood));
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    root: {
      overflow: 'hidden',
      background: "white",
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      borderRadius: 6,
      margin: '10px 0px',
      listStyleType: 'none'
    },
    imageCropper: {
      display: 'inline-block',
      width: 90,
      height: 90,
      minWidth: 90,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '50%',
      marginRight: 20,
      marginLeft: 20
    },
    image: {
      display: 'inline',
      margin: '0 auto',
      marginRight: '-25%',
      height: 'auto',
      width: '100%'
    },
    content: {
      display: 'inline-block',
      verticalAlign: 'middle',
      overflow: 'hidden'
    },
    name: {
      fontSize: 16,
      fontWeight: 400,
      margin: 0,
      paddingTop: 18,
      lineHeight: '16px'
    },
    title: {
      paddingTop: 4,
      fontSize: 14,
      fontWeight: 400,
      margin: 0,
      lineHeight: '16px',
      color: '#565656'
    },
    specialties: {
      paddingTop: 10,
      fontSize: 13,
      fontWeight: 600,
      margin: 0,
      lineHeight: '16px'
    },
    insurance: {
      display: 'block',
      paddingTop: 10,
      paddingBottom: 12,
      fontSize: 13,
      lineHeight: '14px',
      color: theme.palette.primary.main
    },
    insuranceIcon: {
      fontSize: 16,
      verticalAlign: 'middle',
      marginRight: 8,
      position: 'relative',
      top: '-1px'
    },
    neighborhood: {
      position: 'absolute',
      top: 15,
      right: 30,
      color: theme.palette.primary.main,
      fontSize: 13
    },
    pinIcon: {
      position: 'relative',
      top: '-1px',
      marginRight: 5,
      verticalAlign: 'bottom',
      fontSize: 18
    }
  }, theme.breakpoints.down('sm'), {
    root: {
      padding: 8,
      margin: '10px 0px'
    },
    imageCropper: {
      marginRight: 20,
      marginLeft: 0
    },
    name: {
      fontSize: 17
    },
    title: {
      fontSize: 13
    },
    specialties: {
      fontSize: 12
    },
    insurance: {
      fontSize: 12
    },
    neighborhood: {
      fontSize: 12
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Listing);

/***/ })

})
//# sourceMappingURL=index.js.09a36aaae99a67dff93e.hot-update.js.map