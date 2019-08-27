"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AXL_LED_GroupModule = _interopRequireDefault(require("./AXL_LED_Group.module.css"));

var _AXL_LED = _interopRequireDefault(require("../AXL_LED/AXL_LED.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AXL_LED_Group =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AXL_LED_Group, _React$PureComponent);

  function AXL_LED_Group(props) {
    _classCallCheck(this, AXL_LED_Group);

    return _possibleConstructorReturn(this, _getPrototypeOf(AXL_LED_Group).call(this, props));
  }

  _createClass(AXL_LED_Group, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: _AXL_LED_GroupModule["default"].rootContainer
      }, this.props.leds.map(function (led, index) {
        var _led = _objectSpread({}, led),
            label = _led.label,
            rest = _objectWithoutProperties(_led, ["label"]);

        return _react["default"].createElement("div", {
          className: _AXL_LED_GroupModule["default"].row,
          key: 'lr' + index
        }, _react["default"].createElement("div", {
          className: _AXL_LED_GroupModule["default"].ledContainer
        }, _react["default"].createElement(_AXL_LED["default"], rest)), _react["default"].createElement("div", {
          className: _AXL_LED_GroupModule["default"].labelContainer
        }, _react["default"].createElement("div", {
          className: _AXL_LED_GroupModule["default"].label
        }, label)));
      }));
    }
  }]);

  return AXL_LED_Group;
}(_react["default"].PureComponent);

exports["default"] = AXL_LED_Group;
AXL_LED_Group.defaultProps = {
  leds: [{
    isWarning: true,
    label: '00'
  }, {
    isError: true,
    label: '10'
  }, {
    isActive: true,
    label: '20'
  }, {
    isWarning: true,
    label: '30'
  }]
};

//# sourceMappingURL=AXL_LED_Group.jsx.map