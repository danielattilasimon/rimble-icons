"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgEur = function SvgEur(props) {
  return _react2.default.createElement(
    "svg",
    _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      height: props.size,
      width: props.size
    }, props),
    _react2.default.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "#0F8FF8"
    }),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 14.253l.607-1.503h.643a12.214 12.214 0 01-.025-.773c0-.335.014-.648.042-.937H6l.607-1.502h.956c.89-2.859 2.895-4.288 6.014-4.288 1.025 0 2 .133 2.923.399v1.893a6.69 6.69 0 00-2.762-.582c-1.87 0-3.072.86-3.608 2.579h5.567l-.607 1.502H9.767a5.205 5.205 0 00-.042.746c0 .36.011.68.034.964h4.637l-.6 1.502H10.08c.4 1.042.887 1.766 1.462 2.175.574.408 1.393.612 2.457.612.761 0 1.594-.185 2.501-.556v1.78c-.862.324-1.886.486-3.075.486-3.125 0-5.102-1.5-5.93-4.497H6z",
      fill: "#fff"
    })
  );
};

exports.default = SvgEur;