"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AxlTerminalModule = _interopRequireDefault(require("./AxlTerminal.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AxlTerminal = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AxlTerminal, _React$PureComponent);

  var _super = _createSuper(AxlTerminal);

  function AxlTerminal(props) {
    _classCallCheck(this, AxlTerminal);

    return _super.call(this, props);
  }

  _createClass(AxlTerminal, [{
    key: "render",
    value: function render() {
      var insetClass = (0, _classnames["default"])(_AxlTerminalModule["default"].inset, _defineProperty({}, _AxlTerminalModule["default"].inset_end, this.props.isEnd));
      var edgeClass = (0, _classnames["default"])(_AxlTerminalModule["default"].edge, _defineProperty({}, _AxlTerminalModule["default"].edge_end, this.props.isEnd));
      var coverClass = (0, _classnames["default"])(_AxlTerminalModule["default"].blackCover, _defineProperty({}, _AxlTerminalModule["default"].blackCover_end, this.props.isEnd));

      if (this.props.isBlack === true) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: _AxlTerminalModule["default"].container
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: edgeClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: insetClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: _AxlTerminalModule["default"].center_circle
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: _AxlTerminalModule["default"].terminal_center
        })))), /*#__PURE__*/_react["default"].createElement("div", {
          className: coverClass
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: _AxlTerminalModule["default"].container
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: edgeClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: insetClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: _AxlTerminalModule["default"].center_circle
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: _AxlTerminalModule["default"].terminal_center
        })))));
      }
    }
  }]);

  return AxlTerminal;
}(_react["default"].PureComponent);

exports["default"] = AxlTerminal;
AxlTerminal.propTypes = {
  isEnd: _propTypes["default"].bool.isRequired,
  //is the terminal at the end of the connector - will show a carved out edge
  isBlack: _propTypes["default"].bool //should the connector be rendered as black    

};

//# sourceMappingURL=AxlTerminal.jsx.map