webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/context.js":
/*!************************!*\
  !*** ./lib/context.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getContext; });
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/lib/index.js");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "./node_modules/@material-ui/core/colors/grey.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_3__);




var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  palette: {
    primary: {
      main: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2___default.a[700]
    },
    secondary: {
      main: '#1B5E20'
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
    useNextVariants: true
  }
});

function createPageContext() {
  return {
    theme: theme,
    sheetManager: new Map(),
    sheetsRegistry: new react_jss__WEBPACK_IMPORTED_MODULE_0__["SheetsRegistry"](),
    generateClassName: new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createGenerateClassName"]()
  };
}

function getContext() {
  if (false) {}

  if (!global.INIT_MATERIAL_UI) {
    global.INIT_MATERIAL_UI = createPageContext();
  }

  return global.INIT_MATERIAL_UI;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.7e3694e5527ede097049.hot-update.js.map