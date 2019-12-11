"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = (0, _styledComponents2.default)("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgEla = function SvgEla(props) {
  return _react2.default.createElement(
    Svg,
    _extends({
      viewBox: "0 0 24 24",
      fill: props.color ? "currentcolor" : "#3FBADF",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    _react2.default.createElement("path", {
      d: "M8.25 16.59L12 14.473v4.227l-3.75-2.112zm0-6.75L12 7.723v4.226L8.25 9.84z",
      fill: "white",
      fillOpacity: 0.4
    }),
    _react2.default.createElement("path", {
      d: "M19.5 14.422l-3.75 2.165v-4.264l3.75 2.1zm0-6.75l-3.75 2.165V5.573l3.75 2.1z",
      fill: "white",
      fillOpacity: 0.7
    }),
    _react2.default.createElement("path", {
      d: "M8.25 16.588v-4.263L12 14.479l-3.75 2.11zm0-6.75V5.576L12 7.728l-3.75 2.11z",
      fill: "white",
      fillOpacity: 0.8
    }),
    _react2.default.createElement("path", {
      d: "M15.75 16.587L12 14.478l3.75-2.155v4.264zm0-6.75L12 7.728l3.75-2.155v4.264z",
      fill: "white"
    }),
    _react2.default.createElement("path", {
      d: "M15.75 16.587L12 18.701v-4.223l3.75 2.109zm0-6.75L12 11.951V7.728l3.75 2.109z",
      fill: "white",
      fillOpacity: 0.6
    }),
    _react2.default.createElement("path", {
      d: "M8.25 12.325v4.263L4.5 14.424l3.75-2.098zm0-6.75v4.263L4.5 7.674l3.75-2.099z",
      fill: "white",
      fillOpacity: 0.5
    })
  );
};

SvgEla.displayName = "SvgEla";
SvgEla.defaultProps = {
  size: 24
};
exports.default = SvgEla;