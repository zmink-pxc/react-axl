"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SeTerminalModule = _interopRequireDefault(require("./SeTerminal.module.scss"));

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

var SeTerminal = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SeTerminal, _React$PureComponent);

  var _super = _createSuper(SeTerminal);

  function SeTerminal(props) {
    _classCallCheck(this, SeTerminal);

    return _super.call(this, props);
  }

  _createClass(SeTerminal, [{
    key: "render",
    value: function render() {
      var insetClass = (0, _classnames["default"])(_SeTerminalModule["default"].inset, _defineProperty({}, _SeTerminalModule["default"].inset_end, this.props.isLeft));
      var edgeClass = (0, _classnames["default"])(_SeTerminalModule["default"].edge, _defineProperty({}, _SeTerminalModule["default"].edge_end, this.props.isLeft));
      var coverClass = (0, _classnames["default"])(_SeTerminalModule["default"].blackCover, _defineProperty({}, _SeTerminalModule["default"].blackCover_end, this.props.isLeft));

      if (this.props.isBlack === true) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: _SeTerminalModule["default"].container
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: edgeClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: insetClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: _SeTerminalModule["default"].center_circle
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: _SeTerminalModule["default"].terminal_center
        })))), /*#__PURE__*/_react["default"].createElement("div", {
          className: coverClass
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: _SeTerminalModule["default"].container
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: edgeClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: insetClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: _SeTerminalModule["default"].center_circle
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: _SeTerminalModule["default"].terminal_center
        })))));
      }
    }
  }]);

  return SeTerminal;
}(_react["default"].PureComponent);

exports["default"] = SeTerminal;
SeTerminal.propTypes = {
  isLeft: _propTypes["default"].bool.isRequired,
  //is the terminal at the end of the connector - will show a carved out edge
  isBlack: _propTypes["default"].bool //should the connector be rendered as black    

};

//# sourceMappingURL=SeTerminal.jsx.map