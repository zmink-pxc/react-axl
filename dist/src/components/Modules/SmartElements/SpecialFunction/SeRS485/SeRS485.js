"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SeRS485;

var _react = _interopRequireDefault(require("react"));

var _SeModule = _interopRequireDefault(require("@core/SeModule/SeModule.jsx"));

var _SeConnector = _interopRequireDefault(require("@core/SeConnector/SeConnector.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SeRS485(props) {
  var partName = props.partName,
      partNumber = props.partNumber,
      ledLabels = props.ledLabels,
      other = _objectWithoutProperties(props, ["partName", "partNumber", "ledLabels"]);

  return /*#__PURE__*/_react["default"].createElement(_SeModule["default"], _extends({
    partName: partName,
    partNumber: partNumber,
    ledLabels: ledLabels
  }, other), /*#__PURE__*/_react["default"].createElement(_SeConnector["default"], null));
}

SeRS485.defaultProps = {
  partName: "RS485",
  partNumber: "1088128",
  ledLabels: ['E', 'RxD', 'TxD', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'E']
};

//# sourceMappingURL=SeRS485.jsx.map