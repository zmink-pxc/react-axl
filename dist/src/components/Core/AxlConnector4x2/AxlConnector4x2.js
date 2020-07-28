"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AxlConnector4x2;

var _zminkAxioline = _interopRequireDefault(require("@bit/zmink.axioline.axl-connector"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function AxlConnector4x2(props) {
  return /*#__PURE__*/_react.default.createElement(_zminkAxioline.default, _extends({}, props, {
    isBlack: false,
    numRows: 4,
    numCols: 2
  }));
}

//# sourceMappingURL=AxlConnector4x2.jsx.map