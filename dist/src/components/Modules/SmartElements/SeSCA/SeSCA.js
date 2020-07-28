"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SeSCA;

var _react = _interopRequireDefault(require("react"));

var _zminkAxiolineSmartElements = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-module"));

var _zminkAxiolineSmartElements2 = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-connector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SeSCA(props) {
  return /*#__PURE__*/_react.default.createElement(_zminkAxiolineSmartElements.default, {
    partName: props.partName,
    ledLabels: props.ledLabels
  });
}

SeSCA.defaultProps = {
  partName: "SC-A",
  partNumber: "1088134",
  ledLabels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
};

//# sourceMappingURL=SeSCA.jsx.map