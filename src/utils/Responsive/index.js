"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponsiveProvider = exports.Responsive = void 0;

var _react = _interopRequireDefault(require("react"));

var _Responsive = require("./Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResponsiveComponents = (0, _Responsive.createResponsiveComponents)();
var Responsive = ResponsiveComponents.Consumer; // TODO Once we consider the deprecation period of the previous ‘beakpoint’
//      centric API to be over, we can replace the wrapper with just this line.
//
// export const ResponsiveProvider = Responsive.Provider

exports.Responsive = Responsive;

var ResponsiveProvider = function ResponsiveProvider(props) {
  var _ref = props,
      initialMatchingMediaQueries = _ref.initialMatchingMediaQueries,
      mediaQueries = _ref.mediaQueries;
  var _ref2 = props,
      initialBreakpoint = _ref2.initialBreakpoint,
      breakpoints = _ref2.breakpoints;

  if (initialBreakpoint) {
    console.warn("[Responsive] The usage of `initialBreakpoint` is deprecated, use " + "`initialMatchingMediaQueries` instead.");
  }

  if (breakpoints) {
    console.warn("[Responsive] The usage of `breakpoints` is deprecated, use " + "`mediaQueries` instead.");
  } else if (!mediaQueries) {
    throw new Error("[Responsive] If no `breakpoints` are specified, then `mediaQueries` " + "is required.");
  }

  return _react.default.createElement(ResponsiveComponents.Provider, {
    mediaQueries: mediaQueries || breakpoints,
    initialMatchingMediaQueries: initialMatchingMediaQueries || initialBreakpoint && [initialBreakpoint]
  }, props.children);
};

exports.ResponsiveProvider = ResponsiveProvider;
//# sourceMappingURL=index.js.map