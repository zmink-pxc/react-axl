"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _zminkAxioline = _interopRequireWildcard(require("@bit/zmink.axioline.axl-module"));

var _zminkAxioline2 = _interopRequireDefault(require("@bit/zmink.axioline.axl-connector"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AxlDI3212H = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AxlDI3212H, _React$PureComponent);

  var _super = _createSuper(AxlDI3212H);

  function AxlDI3212H(props) {
    _classCallCheck(this, AxlDI3212H);

    return _super.call(this, props);
  }

  _createClass(AxlDI3212H, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          partName = _this$props.partName,
          partNumber = _this$props.partNumber,
          mmWidth = _this$props.mmWidth,
          mmHeight = _this$props.mmHeight,
          terminals = _this$props.terminals,
          leds = _this$props.leds,
          rest = _objectWithoutProperties(_this$props, ["partName", "partNumber", "mmWidth", "mmHeight", "terminals", "leds"]);

      return /*#__PURE__*/_react.default.createElement(_zminkAxioline.default, _extends({}, rest, {
        partName: this.props.partName,
        width: this.props.mmWidth,
        terminals: this.props.terminals,
        leds: this.props.leds,
        raisedMidsection: false,
        hasTopRow: true,
        partNumber: this.props.partNumber,
        labels: ['a', '0', '1', '2', '3'],
        colorCard: {
          isComboDigital: true
        }
      }), /*#__PURE__*/_react.default.createElement(_zminkAxioline2.default, {
        type: "POWER",
        isBlack: true,
        numRows: 4,
        numCols: 1
      }), /*#__PURE__*/_react.default.createElement(_zminkAxioline2.default, {
        type: "IO",
        isBlack: false,
        numRows: 4,
        numCols: 2
      }), /*#__PURE__*/_react.default.createElement(_zminkAxioline2.default, {
        type: "IO",
        isBlack: false,
        numRows: 4,
        numCols: 2
      }), /*#__PURE__*/_react.default.createElement(_zminkAxioline2.default, {
        type: "IO",
        isBlack: false,
        numRows: 4,
        numCols: 2
      }), /*#__PURE__*/_react.default.createElement(_zminkAxioline2.default, {
        type: "IO",
        isBlack: false,
        numRows: 4,
        numCols: 2
      }));
    }
  }]);

  return AxlDI3212H;
}(_react.default.PureComponent);

exports.default = AxlDI3212H;
AxlDI3212H.defaultProps = {
  partName: "DI32",
  partNumber: "2702052",
  mmWidth: 35,
  //width of component in mm which can be converted to px size
  mmHeight: 122,
  terminals: (0, _zminkAxioline.defaultTerminals)(12),
  leds: (0, _zminkAxioline.defaultLeds)(12)
};

//# sourceMappingURL=AxlDI3212H.jsx.map