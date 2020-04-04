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
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/Listing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {},
  title: {
    fontSize: 14
  },
  pos: {
    marginTop: 12
  },
  imageContainer: {
    width: 120,
    height: 120,
    display: 'inline-box',
    verticalAlign: 'top'
  },
  contentContainer: {
    width: 568,
    height: 120,
    display: 'inline-box',
    verticalAlign: 'top'
  },
  image: {
    width: '100%'
  }
});

const Listing = props => {
  const classes = useStyles();
  console.log(props.image);
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.pos,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.imageContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default.a, {
    image: '/therapist-images/' + props.image,
    className: classes.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: classes.contentContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Dilworth"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "h5",
    component: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, props.name, " ", props.surname), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.pos,
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Marriage Counselor"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "body2",
    component: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "Do you want help with your life, your work or your relationships? Let\u2019s collaborate to lighten the obstacles to your best life! I offer individual therapy, couples therapy, crisis intervention, pre-marital coaching, family therapy, trauma-informed therapy, personal coaching, and work-life balance coaching. I use best practices that evolve clinically following advances in the research."), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    size: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Learn More")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Listing);

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
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ToolBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ToolBar */ "@material-ui/core/ToolBar");
/* harmony import */ var _material_ui_core_ToolBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ToolBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/components/NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const NavBar = () => {
  return __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    position: "static",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ToolBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Charlotte Therapists")));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTherapists; });
/* harmony import */ var _database_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database.json */ "./database.json");
var _database_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./database.json */ "./database.json", 1);
 // import fetch from 'isomorphic-unfetch';

function getTherapists() {
  return _database_json__WEBPACK_IMPORTED_MODULE_0__.therapists;
}

/***/ }),

/***/ "./database.json":
/*!***********************!*\
  !*** ./database.json ***!
  \***********************/
/*! exports provided: therapists, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"therapists\":[{\"name\":\"Susan\",\"surname\":\"Morrow\",\"image\":\"susan-morrow.jpg\"},{\"name\":\"Kellie\",\"surname\":\"Stinson\",\"image\":\"kallie-stinson.jpg\"},{\"name\":\"Montina\",\"surname\":\"Myers-Galloway\",\"image\":\"montina-myers-gallaway.jpg\"},{\"name\":\"Henry\",\"surname\":\"Jones\",\"image\":\"susan-morrow.jpg\"}]}");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./data.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_Listing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Listing */ "./components/Listing.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/miller/Code/charlotte-therapists/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Home = props => __jsx("div", {
  className: "jsx-1917921411",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("title", {
  className: "jsx-1917921411",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, "Create Next App"), __jsx("link", {
  rel: "icon",
  href: "/favicon.ico",
  className: "jsx-1917921411",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
  className: "jsx-1917921411",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  className: "jsx-1917921411",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}), "// TO-DO move font loading to server side using custom _document.js"), __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, props.therapists.map(therapist => __jsx(_components_Listing__WEBPACK_IMPORTED_MODULE_5__["default"], {
  name: therapist.name,
  surname: therapist.surname,
  image: therapist.image,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 11
  }
}))), __jsx("footer", {
  className: "jsx-1917921411",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
}), "// ", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "205351471",
  __self: undefined
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxsZXIvQ29kZS9jaGFybG90dGUtdGhlcmFwaXN0cy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQm1CIiwiZmlsZSI6Ii9Vc2Vycy9taWxsZXIvQ29kZS9jaGFybG90dGUtdGhlcmFwaXN0cy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBnZXRUaGVyYXBpc3RzIGZyb20gXCIuLi9kYXRhXCJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInXG5pbXBvcnQgTGlzdGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RpbmcnXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcblxuY29uc3QgSG9tZSA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgLz5cbiAgICAgIC8vIFRPLURPIG1vdmUgZm9udCBsb2FkaW5nIHRvIHNlcnZlciBzaWRlIHVzaW5nIGN1c3RvbSBfZG9jdW1lbnQuanNcbiAgICA8L0hlYWQ+XG4gICAgPE5hdkJhciAvPlxuICAgIDxDb250YWluZXI+XG4gICAgICB7cHJvcHMudGhlcmFwaXN0cy5tYXAodGhlcmFwaXN0ID0+IChcbiAgICAgICAgICA8TGlzdGluZyBuYW1lPXt0aGVyYXBpc3QubmFtZX0gc3VybmFtZT17dGhlcmFwaXN0LnN1cm5hbWV9IGltYWdlPXt0aGVyYXBpc3QuaW1hZ2V9IC8+XG4gICAgICApKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Zm9vdGVyPlxuICAgIDwvZm9vdGVyPlxuXG4gICAgLy8gPHN0eWxlIGpzeD57YFxuICAgIC8vICAgLmNvbnRhaW5lciB7XG4gICAgLy8gICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIC8vICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcbiAgICAvLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIG1haW4ge1xuICAgIC8vXG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIGZvb3RlciB7XG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcbiAgICAvLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIGZvb3RlciBpbWcge1xuICAgIC8vICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICBmb290ZXIgYSB7XG4gICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICBhIHtcbiAgICAvLyAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgLnRpdGxlIGEge1xuICAgIC8vICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAvLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICAudGl0bGUgYTpob3ZlcixcbiAgICAvLyAgIC50aXRsZSBhOmZvY3VzLFxuICAgIC8vICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAvLyAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIC50aXRsZSB7XG4gICAgLy8gICAgIG1hcmdpbjogMDtcbiAgICAvLyAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgLnRpdGxlLFxuICAgIC8vICAgLmRlc2NyaXB0aW9uIHtcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICAuZGVzY3JpcHRpb24ge1xuICAgIC8vICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIC8vICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgY29kZSB7XG4gICAgLy8gICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAvLyAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgIC8vICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgLmdyaWQge1xuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC8vXG4gICAgLy8gICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIC5jYXJkIHtcbiAgICAvLyAgICAgbWFyZ2luOiAxcmVtO1xuICAgIC8vICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgLy8gICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAvLyAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvLyAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIC5jYXJkOmhvdmVyLFxuICAgIC8vICAgLmNhcmQ6Zm9jdXMsXG4gICAgLy8gICAuY2FyZDphY3RpdmUge1xuICAgIC8vICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAvLyAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICAuY2FyZCBoMyB7XG4gICAgLy8gICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAvLyAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIC5jYXJkIHAge1xuICAgIC8vICAgICBtYXJnaW46IDA7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAvLyAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLy8gICAgIC5ncmlkIHtcbiAgICAvLyAgICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gYH08L3N0eWxlPlxuICAgIC8vXG4gICAgLy8gPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAvLyAgIGh0bWwsXG4gICAgLy8gICBib2R5IHtcbiAgICAvLyAgICAgcGFkZGluZzogMDtcbiAgICAvLyAgICAgbWFyZ2luOiAwO1xuICAgIC8vICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgLy8gICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgICoge1xuICAgIC8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8vICAgfVxuICAgIC8vIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGxldCB0aGVyYXBpc3RzID0gZ2V0VGhlcmFwaXN0cygpXG4gIGNvbnNvbGUubG9nKHRoZXJhcGlzdHMpXG5cbiAgcmV0dXJuIHtcbiAgICB0aGVyYXBpc3RzOiB0aGVyYXBpc3RzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/miller/Code/charlotte-therapists/pages/index.js */"), "// // ", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2580009381",
  __self: undefined
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxsZXIvQ29kZS9jaGFybG90dGUtdGhlcmFwaXN0cy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSjBCIiwiZmlsZSI6Ii9Vc2Vycy9taWxsZXIvQ29kZS9jaGFybG90dGUtdGhlcmFwaXN0cy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBnZXRUaGVyYXBpc3RzIGZyb20gXCIuLi9kYXRhXCJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInXG5pbXBvcnQgTGlzdGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RpbmcnXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcblxuY29uc3QgSG9tZSA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgLz5cbiAgICAgIC8vIFRPLURPIG1vdmUgZm9udCBsb2FkaW5nIHRvIHNlcnZlciBzaWRlIHVzaW5nIGN1c3RvbSBfZG9jdW1lbnQuanNcbiAgICA8L0hlYWQ+XG4gICAgPE5hdkJhciAvPlxuICAgIDxDb250YWluZXI+XG4gICAgICB7cHJvcHMudGhlcmFwaXN0cy5tYXAodGhlcmFwaXN0ID0+IChcbiAgICAgICAgICA8TGlzdGluZyBuYW1lPXt0aGVyYXBpc3QubmFtZX0gc3VybmFtZT17dGhlcmFwaXN0LnN1cm5hbWV9IGltYWdlPXt0aGVyYXBpc3QuaW1hZ2V9IC8+XG4gICAgICApKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Zm9vdGVyPlxuICAgIDwvZm9vdGVyPlxuXG4gICAgLy8gPHN0eWxlIGpzeD57YFxuICAgIC8vICAgLmNvbnRhaW5lciB7XG4gICAgLy8gICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIC8vICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcbiAgICAvLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIG1haW4ge1xuICAgIC8vXG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIGZvb3RlciB7XG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcbiAgICAvLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIGZvb3RlciBpbWcge1xuICAgIC8vICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICBmb290ZXIgYSB7XG4gICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICBhIHtcbiAgICAvLyAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgLnRpdGxlIGEge1xuICAgIC8vICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAvLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICAudGl0bGUgYTpob3ZlcixcbiAgICAvLyAgIC50aXRsZSBhOmZvY3VzLFxuICAgIC8vICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAvLyAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIC50aXRsZSB7XG4gICAgLy8gICAgIG1hcmdpbjogMDtcbiAgICAvLyAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgLnRpdGxlLFxuICAgIC8vICAgLmRlc2NyaXB0aW9uIHtcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICAuZGVzY3JpcHRpb24ge1xuICAgIC8vICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIC8vICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgY29kZSB7XG4gICAgLy8gICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAvLyAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgIC8vICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgLmdyaWQge1xuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC8vXG4gICAgLy8gICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIC5jYXJkIHtcbiAgICAvLyAgICAgbWFyZ2luOiAxcmVtO1xuICAgIC8vICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgLy8gICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAvLyAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvLyAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIC5jYXJkOmhvdmVyLFxuICAgIC8vICAgLmNhcmQ6Zm9jdXMsXG4gICAgLy8gICAuY2FyZDphY3RpdmUge1xuICAgIC8vICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAvLyAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgIC8vICAgfVxuICAgIC8vXG4gICAgLy8gICAuY2FyZCBoMyB7XG4gICAgLy8gICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAvLyAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIC5jYXJkIHAge1xuICAgIC8vICAgICBtYXJnaW46IDA7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAvLyAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLy8gICAgIC5ncmlkIHtcbiAgICAvLyAgICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gYH08L3N0eWxlPlxuICAgIC8vXG4gICAgLy8gPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAvLyAgIGh0bWwsXG4gICAgLy8gICBib2R5IHtcbiAgICAvLyAgICAgcGFkZGluZzogMDtcbiAgICAvLyAgICAgbWFyZ2luOiAwO1xuICAgIC8vICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgLy8gICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgICoge1xuICAgIC8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8vICAgfVxuICAgIC8vIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGxldCB0aGVyYXBpc3RzID0gZ2V0VGhlcmFwaXN0cygpXG4gIGNvbnNvbGUubG9nKHRoZXJhcGlzdHMpXG5cbiAgcmV0dXJuIHtcbiAgICB0aGVyYXBpc3RzOiB0aGVyYXBpc3RzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/miller/Code/charlotte-therapists/pages/index.js */"));

Home.getInitialProps = async function () {
  let therapists = Object(_data__WEBPACK_IMPORTED_MODULE_3__["default"])();
  console.log(therapists);
  return {
    therapists: therapists
  };
};

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

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/ToolBar":
/*!********************************************!*\
  !*** external "@material-ui/core/ToolBar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ToolBar");

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

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map