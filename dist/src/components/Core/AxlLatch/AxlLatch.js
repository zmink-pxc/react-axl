"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _zminkAxioline = _interopRequireDefault(require("@bit/zmink.axioline.axl-latchmodule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var AxlLatch = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AxlLatch, _React$PureComponent);

  var _super = _createSuper(AxlLatch);

  function AxlLatch(props) {
    _classCallCheck(this, AxlLatch);

    return _super.call(this, props);
  }

  _createClass(AxlLatch, [{
    key: "render",
    value: function render() {
      var topClass = (0, _classnames.default)([_zminkAxioline.default.top], [_zminkAxioline.default.orange], _defineProperty({}, _zminkAxioline.default.topPushedIn, this.props.pushedIn));
      var midClass = (0, _classnames.default)([_zminkAxioline.default.mid], [_zminkAxioline.default.orange]);
      var bottomClass = (0, _classnames.default)([_zminkAxioline.default.bottom], [_zminkAxioline.default.orange]);
      var mountClass = (0, _classnames.default)([_zminkAxioline.default.mount], _defineProperty({}, _zminkAxioline.default.mountPushedIn, this.props.pushedIn));
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: topClass
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: mountClass
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: midClass
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: bottomClass
      }));
    }
  }]);

  return AxlLatch;
}(_react.default.PureComponent);

exports.default = AxlLatch;

//# sourceMappingURL=AxlLatch.jsx.map