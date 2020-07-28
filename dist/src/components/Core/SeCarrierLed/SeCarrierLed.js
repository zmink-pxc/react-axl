"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SeCarrierLed;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _zminkAxiolineSmartElements = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-carrier-led-module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SeCarrierLed() {
  var ledClass = (0, _classnames.default)(_zminkAxiolineSmartElements.default.led_base, _defineProperty({}, _zminkAxiolineSmartElements.default.error, this.props.isError), _defineProperty({}, _zminkAxiolineSmartElements.default.warning, this.props.isWarning), _defineProperty({}, _zminkAxiolineSmartElements.default.active, this.props.isActive));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ledClass
  });
} //isError
//isWarning
//isActive

//# sourceMappingURL=SeCarrierLed.jsx.map