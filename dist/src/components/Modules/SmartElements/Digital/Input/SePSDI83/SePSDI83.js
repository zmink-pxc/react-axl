"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SePSDI83;

var _react = _interopRequireDefault(require("react"));

var _SePSDI83Module = _interopRequireDefault(require("./SePSDI83.module.scss"));

var _zminkAxiolineSmartElements = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-module"));

var _zminkAxiolineSmartElements2 = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-connector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SePSDI83(props) {
  var partName = props.partName,
      partNumber = props.partNumber,
      ledLabels = props.ledLabels,
      other = _objectWithoutProperties(props, ["partName", "partNumber", "ledLabels"]);

  return /*#__PURE__*/_react.default.createElement(_zminkAxiolineSmartElements.default, _extends({
    partName: partName,
    partNumber: partNumber,
    ledLabels: ledLabels,
    style: {
      backgroundColor: _SePSDI83Module.default.axiolineYellow
    }
  }, other), /*#__PURE__*/_react.default.createElement(_zminkAxiolineSmartElements2.default, null), /*#__PURE__*/_react.default.createElement(_zminkAxiolineSmartElements2.default, null));
}

SePSDI83.defaultProps = {
  partName: "PSDI8/3",
  partNumber: "1079241",
  ledLabels: ['E', '01', '02', '03', '04', '05', '06', '07', '', '', '', '', '', '', 'SD', 'FS', 'P', 'E']
};

//# sourceMappingURL=SePSDI83.jsx.map