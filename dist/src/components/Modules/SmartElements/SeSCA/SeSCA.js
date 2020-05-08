"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SeSCA;

var _react = _interopRequireDefault(require("react"));

var _SeModule = _interopRequireDefault(require("@core/SeModule/SeModule.jsx"));

var _SeConnector = _interopRequireDefault(require("@core/SeConnector/SeConnector.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SeSCA(props) {
  return /*#__PURE__*/_react["default"].createElement(_SeModule["default"], {
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