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
  Component: react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiDotnet,
  title: "dot.net",
  Description: function Description() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "I can code in dot.net. But I mainly use it for Android app development."
    }, void 0, false);
  }
}, {
  slug: "c#",
  Component: react_icons_di__WEBPACK_IMPORTED_MODULE_1__.TbCSharp,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzL1NraWxscy5qcyJdLCJuYW1lcyI6WyJTa2lsbHMiLCJzbHVnIiwiQ29tcG9uZW50IiwiRGlBbmRyb2lkIiwidGl0bGUiLCJEZXNjcmlwdGlvbiIsIlNpSmF2YSIsIkRpRG90bmV0IiwiVGJDU2hhcnAiLCJEaVRlcm1pbmFsIiwiU2lGaXJlYmFzZSIsIlNpR2l0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxJQUFNQSxNQUFNLEdBQUcsQ0FDcEI7QUFDRUMsTUFBSSxFQUFFLFNBRFI7QUFFRUMsV0FBUyxFQUFFQyxxREFGYjtBQUdFQyxPQUFLLEVBQUUsU0FIVDtBQUlFQyxhQUFXLEVBQUU7QUFBQSx3QkFBTTtBQUFBO0FBQUEscUJBQU47QUFBQTtBQUpmLENBRG9CLEVBUXBCO0FBQ0VKLE1BQUksRUFBRSxNQURSO0FBRUVDLFdBQVMsRUFBRUksa0RBRmI7QUFHRUYsT0FBSyxFQUFFLE1BSFQ7QUFJRUMsYUFBVyxFQUFFO0FBQUEsd0JBQ1g7QUFBQTtBQUFBLHFCQURXO0FBQUE7QUFKZixDQVJvQixFQWdCcEI7QUFDRUosTUFBSSxFQUFFLFNBRFI7QUFFRUMsV0FBUyxFQUFFSyxvREFGYjtBQUdFSCxPQUFLLEVBQUUsU0FIVDtBQUlFQyxhQUFXLEVBQUU7QUFBQSx3QkFDWDtBQUFBO0FBQUEscUJBRFc7QUFBQTtBQUpmLENBaEJvQixFQTBCcEI7QUFDRUosTUFBSSxFQUFFLElBRFI7QUFFRUMsV0FBUyxFQUFFTSxvREFGYjtBQUdFSixPQUFLLEVBQUUsSUFIVDtBQUlFQyxhQUFXLEVBQUU7QUFBQSx3QkFDWDtBQUFBO0FBQUEscUJBRFc7QUFBQTtBQUpmLENBMUJvQixFQWtDcEI7QUFDRUosTUFBSSxFQUFFLFVBRFI7QUFFRUMsV0FBUyxFQUFFTyxzREFGYjtBQUdFTCxPQUFLLEVBQUUsV0FIVDtBQUlFQyxhQUFXLEVBQUU7QUFBQSx3QkFDWDtBQUFBO0FBQUEscUJBRFc7QUFBQTtBQUpmLENBbENvQixFQTBDcEI7QUFDRUosTUFBSSxFQUFFLFVBRFI7QUFFRUMsV0FBUyxFQUFFUSxzREFGYjtBQUdFTixPQUFLLEVBQUUsVUFIVDtBQUlFQyxhQUFXLEVBQUU7QUFBQSx3QkFDWDtBQUFBO0FBQUEscUJBRFc7QUFBQTtBQUpmLENBMUNvQixFQWtEcEI7QUFDRUosTUFBSSxFQUFFLEtBRFI7QUFFRUMsV0FBUyxFQUFFUyxpREFGYjtBQUdFUCxPQUFLLEVBQUUsS0FIVDtBQUlFQyxhQUFXLEVBQUU7QUFBQSx3QkFDWDtBQUFBO0FBQUEscUJBRFc7QUFBQTtBQUpmLENBbERvQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkZTMxNDQ1NDdiYTBjYTgyYzkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaUFuZHJvaWQsIERpVGVybWluYWwsRGlEb3RuZXQsVGJDU2hhcnAgfSBmcm9tIFwicmVhY3QtaWNvbnMvZGlcIjtcclxuaW1wb3J0IHsgU2lKYXZhLCBTaUZpcmViYXNlLCBTaUdpdCwgU2lEb3ROZXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2tpbGxzID0gW1xyXG4gIHtcclxuICAgIHNsdWc6IFwiYW5kcm9pZFwiLFxyXG4gICAgQ29tcG9uZW50OiBEaUFuZHJvaWQsXHJcbiAgICB0aXRsZTogXCJBbmRyb2lkXCIsXHJcbiAgICBEZXNjcmlwdGlvbjogKCkgPT4gPD5JIHdvcmsgb24gUk9NcywgS2VybmVscyAmIEFuZHJvaWQgQXBwcyB1c2luZyBKYXZhLjwvPixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBzbHVnOiBcImphdmFcIixcclxuICAgIENvbXBvbmVudDogU2lKYXZhLFxyXG4gICAgdGl0bGU6IFwiSmF2YVwiLFxyXG4gICAgRGVzY3JpcHRpb246ICgpID0+IChcclxuICAgICAgPD5JIGNhbiBjb2RlIGluIEphdmEuIEJ1dCBJIG1haW5seSB1c2UgaXQgZm9yIEFuZHJvaWQgYXBwIGRldmVsb3BtZW50LjwvPlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIHNsdWc6IFwiZG90Lm5ldFwiLFxyXG4gICAgQ29tcG9uZW50OiBEaURvdG5ldCxcclxuICAgIHRpdGxlOiBcImRvdC5uZXRcIixcclxuICAgIERlc2NyaXB0aW9uOiAoKSA9PiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgSSBjYW4gY29kZSBpbiBkb3QubmV0LiBCdXQgSSBtYWlubHkgdXNlIGl0IGZvciBBbmRyb2lkIGFwcCBkZXZlbG9wbWVudC5cclxuICAgICAgPC8+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2x1ZzogXCJjI1wiLFxyXG4gICAgQ29tcG9uZW50OiBUYkNTaGFycCxcclxuICAgIHRpdGxlOiBcImMjXCIsXHJcbiAgICBEZXNjcmlwdGlvbjogKCkgPT4gKFxyXG4gICAgICA8PkkgY2FuIGNvZGUgaW4gQyMuIEJ1dCBJIG1haW5seSB1c2UgaXQgZm9yIEFuZHJvaWQgYXBwIGRldmVsb3BtZW50LjwvPlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIHNsdWc6IFwidGVybWluYWxcIixcclxuICAgIENvbXBvbmVudDogRGlUZXJtaW5hbCxcclxuICAgIHRpdGxlOiBcIlNjcmlwdGluZ1wiLFxyXG4gICAgRGVzY3JpcHRpb246ICgpID0+IChcclxuICAgICAgPD5JIGhhdmUgd3JpdHRlbiBkb3plbnMgb2YgU2hlbGwgc2NyaXB0cyBmb3IgdmFyaW91cyBwdXJwb3Nlcy48Lz5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiBcImZpcmViYXNlXCIsXHJcbiAgICBDb21wb25lbnQ6IFNpRmlyZWJhc2UsXHJcbiAgICB0aXRsZTogXCJGaXJlYmFzZVwiLFxyXG4gICAgRGVzY3JpcHRpb246ICgpID0+IChcclxuICAgICAgPD5JIGhhdmUgdXNlZCBGaXJlYmFzZSBmb3IgYXV0aCwgZGF0YWJhc2UgJiBhbmFseXRpY3MgaW4gbXkgYXBwcy48Lz5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICBzbHVnOiBcImdpdFwiLFxyXG4gICAgQ29tcG9uZW50OiBTaUdpdCxcclxuICAgIHRpdGxlOiBcIkdpdFwiLFxyXG4gICAgRGVzY3JpcHRpb246ICgpID0+IChcclxuICAgICAgPD5HaXQgaXMgYSB0b29sIHRoYXQgSSB1c2UgZXZlcnkgZGF5LiBJIHVzZSBHaXRIdWIgZm9yIHB1c2hpbmcgbXkgY29kZS48Lz5cclxuICAgICksXHJcbiAgfSxcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==