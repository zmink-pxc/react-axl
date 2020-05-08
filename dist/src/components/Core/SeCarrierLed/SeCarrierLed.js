"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SeCarrierLed;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SeCarrierLedModule = _interopRequireDefault(require("./SeCarrierLed.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SeCarrierLed() {
  var ledClass = (0, _classnames["default"])(_SeCarrierLedModule["default"].led_base, _defineProperty({}, _SeCarrierLedModule["default"].error, this.props.isError), _defineProperty({}, _SeCarrierLedModule["default"].warning, this.props.isWarning), _defineProperty({}, _SeCarrierLedModule["default"].active, this.props.isActive));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: ledClass
  });
} //isError
//isWarning
//isActive

//# sourceMappingURL=SeCarrierLed.jsx.map