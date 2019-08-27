"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AXL_LatchModule = _interopRequireDefault(require("./AXL_Latch.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AXL_Latch =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AXL_Latch, _React$PureComponent);

  function AXL_Latch(props) {
    _classCallCheck(this, AXL_Latch);

    return _possibleConstructorReturn(this, _getPrototypeOf(AXL_Latch).call(this, props));
  }

  _createClass(AXL_Latch, [{
    key: "render",
    value: function render() {
      var topClass = (0, _classnames["default"])([_AXL_LatchModule["default"].top], [_AXL_LatchModule["default"].orange], _defineProperty({}, _AXL_LatchModule["default"].topPushedIn, this.props.pushedIn));
      var midClass = (0, _classnames["default"])([_AXL_LatchModule["default"].mid], [_AXL_LatchModule["default"].orange]);
      var bottomClass = (0, _classnames["default"])([_AXL_LatchModule["default"].bottom], [_AXL_LatchModule["default"].orange]);
      var mountClass = (0, _classnames["default"])([_AXL_LatchModule["default"].mount], _defineProperty({}, _AXL_LatchModule["default"].mountPushedIn, this.props.pushedIn));
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: topClass
      }, _react["default"].createElement("div", {
        className: mountClass
      })), _react["default"].createElement("div", {
        className: midClass
      }), _react["default"].createElement("div", {
        className: bottomClass
      }));
    }
  }]);

  return AXL_Latch;
}(_react["default"].PureComponent);

exports["default"] = AXL_Latch;

//# sourceMappingURL=AXL_Latch.jsx.map