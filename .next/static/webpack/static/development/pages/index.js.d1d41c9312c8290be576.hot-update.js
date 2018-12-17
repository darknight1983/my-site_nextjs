webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/jacolbygreen/front-end-dev/myPortfolio-next.js/components/Projects.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var styles = function styles(theme) {
  return {
    items: {
      width: '30%',
      height: '30%'
    },
    projects: {
      width: '70%',
      height: '70%'
    },
    projectImg: {
      width: '100%',
      height: '100%'
    },
    margin: {
      marginTop: '20px',
      marginBottom: '40px'
    },
    h1: {
      padding: '10px'
    },
    description: {
      padding: '10px',
      marginBottom: '15px'
    }
  };
};

var ImgBox = react_pose__WEBPACK_IMPORTED_MODULE_8__["default"].div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 2.2
  }
});
var Content = react_pose__WEBPACK_IMPORTED_MODULE_8__["default"].div({
  closed: {
    height: 0
  },
  open: {
    height: 'auto'
  }
});

var Projects =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects(props) {
    var _this;

    _classCallCheck(this, Projects);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Projects).call(this, props));
    _this.state = {
      open: false,
      projects: [{
        title: 'Node Server',
        description: 'This is a brief description of this project that I am going to use as an example while Im building out my updated website',
        link: 'http://github.com',
        technologies: ['React', 'Node', 'Express']
      }, {
        title: 'Node Server',
        description: 'This is a brief description of this project that I am going to use as an example while Im building out my updated website',
        link: 'http://github.com',
        technologies: ['React', 'Node', 'Express']
      }, {
        title: 'Node Server',
        description: 'This is a brief description of this project that I am going to use as an example while Im building out my updated website',
        link: 'http://github.com',
        technologies: ['React', 'Node', 'Express']
      }]
    };
    return _this;
  }

  _createClass(Projects, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _this$state = this.state,
          projects = _this$state.projects,
          open = _this$state.open;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: classes.margin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0___default.a, {
        variant: "h2",
        component: "h1",
        color: "primary",
        align: "center",
        className: classes.margin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Projects"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        container: true,
        justify: "center",
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, projects.map(function (project, i) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
          item: true,
          key: i,
          className: classes.items,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
          square: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0___default.a, {
          variant: "h5",
          component: "h1",
          color: "primary",
          align: "center",
          className: classes.h1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, project.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0___default.a, {
          variant: "h5",
          component: "h5",
          onClick: function onClick() {
            return _this2.setState({
              open: open === i ? false : i
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, "Description: ".concat(project.title)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Content, {
          className: "content",
          pose: open === i ? 'open' : 'closed',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "content-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, content)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
          container: true,
          justify: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
          item: true,
          className: classes.projects,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ImgBox, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
          src: "/static/imgs/testProject.png",
          alt: "Image of project",
          className: classes.projectImg,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
          container: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
          item: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, project.technologies.map(function (tech, i) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
            button: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }, tech);
        }))))));
      })));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Projects));

/***/ })

})
//# sourceMappingURL=index.js.d1d41c9312c8290be576.hot-update.js.map