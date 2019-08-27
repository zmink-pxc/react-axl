"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AXL_24VPower;

var _AXL_Connector = _interopRequireDefault(require("../AXL_Connector/AXL_Connector.jsx"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AXL_24VPower(props) {
  var terminalArr, ledArr;

  if (typeof props.terminals === "undefined") {
    terminalArr = [{}, {}, {}, {}];
    ledArr = [{}, {}, {}, {}];
  } else {
    terminalArr = props.terminals;
    ledArr = props.leds;
  }

  var terminals = terminalArr.map(function (terminal, index) {
    var t = _objectSpread({}, terminal);

    t.label = terminalLabels[index];
    return t;
  });
  var leds = ledArr.map(function (led, index) {
    var l = _objectSpread({}, led);

    l.label = ledLabels[index];
    return l;
  });
  return _react["default"].createElement(_AXL_Connector["default"], {
    terminals: terminals,
    leds: leds,
    numRows: 4,
    numCols: 1
  });
}

var terminalLabels = ['a1', 'a2', 'b1', 'b2'];
var ledLabels = ['D', 'UO', 'E1', 'E2'];

//# sourceMappingURL=AXL_24VPower.jsx.map