function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgNano = function SvgNano(props) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), React.createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), React.createElement("path", {
    d: "M18.712 8.25c-.643 0-1.187.52-1.187 1.187 0 .94-.148 1.188-1.188 1.188h-.099a1.161 1.161 0 00-1.063 1.162v.025c0 .915-.173 1.138-1.188 1.138-.049 0-.098 0-.123.025-.594.074-1.064.569-1.064 1.162 0 .644.52 1.188 1.188 1.188.618 0 1.137-.495 1.162-1.088v-.1c0-.84.272-1.162 1.162-1.187h.025c.619 0 1.139-.495 1.163-1.113v-.075c0-.865.272-1.187 1.188-1.187.643 0 1.187-.519 1.187-1.187 0-.618-.52-1.138-1.163-1.138zm-6.976 2.374a1.198 1.198 0 011.089 1.139c0 .668-.52 1.187-1.188 1.187a1.188 1.188 0 01-1.187-1.187c0-.841-.272-1.162-1.188-1.162-.915 0-1.187.32-1.187 1.187v.074c-.024.593-.544 1.088-1.162 1.088a1.188 1.188 0 01-1.188-1.187c0-.619.47-1.114 1.064-1.162h.099c1.039 0 1.187-.223 1.187-1.163a1.188 1.188 0 012.375 0c0 .94.148 1.186 1.187 1.186h.099zm-7.174 4.7a1.187 1.187 0 110-2.373 1.187 1.187 0 010 2.374z",
    fill: "white"
  }));
};

SvgNano.displayName = "SvgNano";
SvgNano.defaultProps = {
  size: 24,
  color: "#4A90E2"
};
export default SvgNano;