self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Technologies/Skills.js":
/*!***********************************************!*\
  !*** ./src/components/Technologies/Skills.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skills": function() { return /* binding */ Skills; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var Skills = [{
  slug: "android",
  Component: react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiAndroid,
  title: "Android",
  Description: function Description() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "I work on ROMs, Kernels & Android Apps using Java."
    }, void 0, false);
  }
}, {
  slug: "java",
  Component: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiJava,
  title: "Java",
  Description: function Description() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "I can code in Java. But I mainly use it for Android app development."
    }, void 0, false);
  }
}, {
  slug: "dot.net",
  Component: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiJava,
  title: "dot.net",
  Description: function Description() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "I can code in dot.net. But I mainly use it for Android app development."
    }, void 0, false);
  }
}, {
  slug: "c#",
  Component: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiJava,
  title: "c#",
  Description: function Description() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "I can code in C#. But I mainly use it for Android app development."
    }, void 0, false);
  }
}, {
  slug: "terminal",
  Component: react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiTerminal,
  title: "Scripting",
  Description: function Description() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "I have written dozens of Shell scripts for various purposes."
    }, void 0, false);
  }
}, {
  slug: "firebase",
  Component: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiFirebase,
  title: "Firebase",
  Description: function Description() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "I have used Firebase for auth, database & analytics in my apps."
    }, void 0, false);
  }
}, {
  slug: "git",
  Component: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiGit,
  title: "Git",
  Description: function Description() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "Git is a tool that I use every day. I use GitHub for pushing my code."
    }, void 0, false);
  }
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzL1NraWxscy5qcyJdLCJuYW1lcyI6WyJTa2lsbHMiLCJzbHVnIiwiQ29tcG9uZW50IiwiRGlBbmRyb2lkIiwidGl0bGUiLCJEZXNjcmlwdGlvbiIsIlNpSmF2YSIsIkRpVGVybWluYWwiLCJTaUZpcmViYXNlIiwiU2lHaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLENBQ3BCO0FBQ0VDLE1BQUksRUFBRSxTQURSO0FBRUVDLFdBQVMsRUFBRUMscURBRmI7QUFHRUMsT0FBSyxFQUFFLFNBSFQ7QUFJRUMsYUFBVyxFQUFFO0FBQUEsd0JBQU07QUFBQTtBQUFBLHFCQUFOO0FBQUE7QUFKZixDQURvQixFQVFwQjtBQUNFSixNQUFJLEVBQUUsTUFEUjtBQUVFQyxXQUFTLEVBQUVJLGtEQUZiO0FBR0VGLE9BQUssRUFBRSxNQUhUO0FBSUVDLGFBQVcsRUFBRTtBQUFBLHdCQUNYO0FBQUE7QUFBQSxxQkFEVztBQUFBO0FBSmYsQ0FSb0IsRUFnQnBCO0FBQ0VKLE1BQUksRUFBRSxTQURSO0FBRUVDLFdBQVMsRUFBRUksa0RBRmI7QUFHRUYsT0FBSyxFQUFFLFNBSFQ7QUFJRUMsYUFBVyxFQUFFO0FBQUEsd0JBQ1g7QUFBQTtBQUFBLHFCQURXO0FBQUE7QUFKZixDQWhCb0IsRUEwQnBCO0FBQ0VKLE1BQUksRUFBRSxJQURSO0FBRUVDLFdBQVMsRUFBRUksa0RBRmI7QUFHRUYsT0FBSyxFQUFFLElBSFQ7QUFJRUMsYUFBVyxFQUFFO0FBQUEsd0JBQ1g7QUFBQTtBQUFBLHFCQURXO0FBQUE7QUFKZixDQTFCb0IsRUFrQ3BCO0FBQ0VKLE1BQUksRUFBRSxVQURSO0FBRUVDLFdBQVMsRUFBRUssc0RBRmI7QUFHRUgsT0FBSyxFQUFFLFdBSFQ7QUFJRUMsYUFBVyxFQUFFO0FBQUEsd0JBQ1g7QUFBQTtBQUFBLHFCQURXO0FBQUE7QUFKZixDQWxDb0IsRUEwQ3BCO0FBQ0VKLE1BQUksRUFBRSxVQURSO0FBRUVDLFdBQVMsRUFBRU0sc0RBRmI7QUFHRUosT0FBSyxFQUFFLFVBSFQ7QUFJRUMsYUFBVyxFQUFFO0FBQUEsd0JBQ1g7QUFBQTtBQUFBLHFCQURXO0FBQUE7QUFKZixDQTFDb0IsRUFrRHBCO0FBQ0VKLE1BQUksRUFBRSxLQURSO0FBRUVDLFdBQVMsRUFBRU8saURBRmI7QUFHRUwsT0FBSyxFQUFFLEtBSFQ7QUFJRUMsYUFBVyxFQUFFO0FBQUEsd0JBQ1g7QUFBQTtBQUFBLHFCQURXO0FBQUE7QUFKZixDQWxEb0IsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NDhmYTVhZWM2YzI4NGM0MzJkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlBbmRyb2lkLCBEaVRlcm1pbmFsIH0gZnJvbSBcInJlYWN0LWljb25zL2RpXCI7XHJcbmltcG9ydCB7IFNpSmF2YSwgU2lGaXJlYmFzZSwgU2lHaXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcclxuaW1wb3J0IFNpRG90bmV0IGZyb20gXCJyZWFjdC1pY29ucy9zaVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNraWxscyA9IFtcclxuICB7XHJcbiAgICBzbHVnOiBcImFuZHJvaWRcIixcclxuICAgIENvbXBvbmVudDogRGlBbmRyb2lkLFxyXG4gICAgdGl0bGU6IFwiQW5kcm9pZFwiLFxyXG4gICAgRGVzY3JpcHRpb246ICgpID0+IDw+SSB3b3JrIG9uIFJPTXMsIEtlcm5lbHMgJiBBbmRyb2lkIEFwcHMgdXNpbmcgSmF2YS48Lz4sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgc2x1ZzogXCJqYXZhXCIsXHJcbiAgICBDb21wb25lbnQ6IFNpSmF2YSxcclxuICAgIHRpdGxlOiBcIkphdmFcIixcclxuICAgIERlc2NyaXB0aW9uOiAoKSA9PiAoXHJcbiAgICAgIDw+SSBjYW4gY29kZSBpbiBKYXZhLiBCdXQgSSBtYWlubHkgdXNlIGl0IGZvciBBbmRyb2lkIGFwcCBkZXZlbG9wbWVudC48Lz5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiBcImRvdC5uZXRcIixcclxuICAgIENvbXBvbmVudDogU2lKYXZhLFxyXG4gICAgdGl0bGU6IFwiZG90Lm5ldFwiLFxyXG4gICAgRGVzY3JpcHRpb246ICgpID0+IChcclxuICAgICAgPD5cclxuICAgICAgICBJIGNhbiBjb2RlIGluIGRvdC5uZXQuIEJ1dCBJIG1haW5seSB1c2UgaXQgZm9yIEFuZHJvaWQgYXBwIGRldmVsb3BtZW50LlxyXG4gICAgICA8Lz5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiBcImMjXCIsXHJcbiAgICBDb21wb25lbnQ6IFNpSmF2YSxcclxuICAgIHRpdGxlOiBcImMjXCIsXHJcbiAgICBEZXNjcmlwdGlvbjogKCkgPT4gKFxyXG4gICAgICA8PkkgY2FuIGNvZGUgaW4gQyMuIEJ1dCBJIG1haW5seSB1c2UgaXQgZm9yIEFuZHJvaWQgYXBwIGRldmVsb3BtZW50LjwvPlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIHNsdWc6IFwidGVybWluYWxcIixcclxuICAgIENvbXBvbmVudDogRGlUZXJtaW5hbCxcclxuICAgIHRpdGxlOiBcIlNjcmlwdGluZ1wiLFxyXG4gICAgRGVzY3JpcHRpb246ICgpID0+IChcclxuICAgICAgPD5JIGhhdmUgd3JpdHRlbiBkb3plbnMgb2YgU2hlbGwgc2NyaXB0cyBmb3IgdmFyaW91cyBwdXJwb3Nlcy48Lz5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiBcImZpcmViYXNlXCIsXHJcbiAgICBDb21wb25lbnQ6IFNpRmlyZWJhc2UsXHJcbiAgICB0aXRsZTogXCJGaXJlYmFzZVwiLFxyXG4gICAgRGVzY3JpcHRpb246ICgpID0+IChcclxuICAgICAgPD5JIGhhdmUgdXNlZCBGaXJlYmFzZSBmb3IgYXV0aCwgZGF0YWJhc2UgJiBhbmFseXRpY3MgaW4gbXkgYXBwcy48Lz5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiBcImdpdFwiLFxyXG4gICAgQ29tcG9uZW50OiBTaUdpdCxcclxuICAgIHRpdGxlOiBcIkdpdFwiLFxyXG4gICAgRGVzY3JpcHRpb246ICgpID0+IChcclxuICAgICAgPD5HaXQgaXMgYSB0b29sIHRoYXQgSSB1c2UgZXZlcnkgZGF5LiBJIHVzZSBHaXRIdWIgZm9yIHB1c2hpbmcgbXkgY29kZS48Lz5cclxuICAgICksXHJcbiAgfSxcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==