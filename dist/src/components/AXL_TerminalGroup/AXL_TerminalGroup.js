"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AXL_TerminalGroupModule = _interopRequireDefault(require("./AXL_TerminalGroup.module.css"));

var _AXL_Plunger = _interopRequireDefault(require("../AXL_Plunger/AXL_Plunger.jsx"));

var _AXL_Terminal = _interopRequireDefault(require("../AXL_Terminal/AXL_Terminal.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AXL_TerminalGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AXL_TerminalGroup, _React$PureComponent);

  function AXL_TerminalGroup(props) {
    _classCallCheck(this, AXL_TerminalGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(AXL_TerminalGroup).call(this, props));
  }

  _createClass(AXL_TerminalGroup, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: _AXL_TerminalGroupModule["default"].rootContainer
      }, _react["default"].createElement("div", {
        className: _AXL_TerminalGroupModule["default"].pinLabelContainer
      }, _react["default"].createElement("div", {
        className: _AXL_TerminalGroupModule["default"].pinHoleContainer
      }, _react["default"].createElement("div", {
        className: _AXL_TerminalGroupModule["default"].pinHole
      })), _react["default"].createElement("div", {
        className: _AXL_TerminalGroupModule["default"].labelContainer
      }, _react["default"].createElement("div", {
        className: _AXL_TerminalGroupModule["default"].label
      }, this.props.label))), _react["default"].createElement("div", {
        className: _AXL_TerminalGroupModule["default"].plungerContainer
      }, _react["default"].createElement(_AXL_Plunger["default"], {
        pushIn: this.props.pushIn,
        red: this.props.redPlunger,
        blue: this.props.bluePlunger,
        green: this.props.greenPlunger
      })), _react["default"].createElement("div", {
        className: _AXL_TerminalGroupModule["default"].terminalContainer
      }, _react["default"].createElement(_AXL_Terminal["default"], {
        isBlack: this.props.isBlack,
        isEnd: this.props.isEnd
      })));
    }
  }]);

  return AXL_TerminalGroup;
}(_react["default"].PureComponent);

exports["default"] = AXL_TerminalGroup;

//# sourceMappingURL=AXL_TerminalGroup.jsx.map