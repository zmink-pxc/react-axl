"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AXL_TerminalModule = _interopRequireDefault(require("./AXL_Terminal.module.css"));

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

var AXL_Terminal =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AXL_Terminal, _React$PureComponent);

  function AXL_Terminal(props) {
    _classCallCheck(this, AXL_Terminal);

    return _possibleConstructorReturn(this, _getPrototypeOf(AXL_Terminal).call(this, props));
  }

  _createClass(AXL_Terminal, [{
    key: "render",
    value: function render() {
      var insetClass = (0, _classnames["default"])(_AXL_TerminalModule["default"].inset, _defineProperty({}, _AXL_TerminalModule["default"].inset_end, this.props.isEnd));
      var edgeClass = (0, _classnames["default"])(_AXL_TerminalModule["default"].edge, _defineProperty({}, _AXL_TerminalModule["default"].edge_end, this.props.isEnd));
      var coverClass = (0, _classnames["default"])(_AXL_TerminalModule["default"].blackCover, _defineProperty({}, _AXL_TerminalModule["default"].blackCover_end, this.props.isEnd));

      if (this.props.isBlack === true) {
        return _react["default"].createElement("div", {
          className: _AXL_TerminalModule["default"].container
        }, _react["default"].createElement("div", {
          className: edgeClass
        }, _react["default"].createElement("div", {
          className: insetClass
        }, _react["default"].createElement("div", {
          className: _AXL_TerminalModule["default"].center_circle
        }, _react["default"].createElement("div", {
          className: _AXL_TerminalModule["default"].terminal_center
        })))), _react["default"].createElement("div", {
          className: coverClass
        }));
      } else {
        return _react["default"].createElement("div", {
          className: _AXL_TerminalModule["default"].container
        }, _react["default"].createElement("div", {
          className: edgeClass
        }, _react["default"].createElement("div", {
          className: insetClass
        }, _react["default"].createElement("div", {
          className: _AXL_TerminalModule["default"].center_circle
        }, _react["default"].createElement("div", {
          className: _AXL_TerminalModule["default"].terminal_center
        })))));
      }
    }
  }]);

  return AXL_Terminal;
}(_react["default"].PureComponent);

exports["default"] = AXL_Terminal;
AXL_Terminal.propTypes = {
  isEnd: _propTypes["default"].bool.isRequired,
  //is the terminal at the end of the connector - will show a carved out edge
  isBlack: _propTypes["default"].bool //should the connector be rendered as black    

};

//# sourceMappingURL=AXL_Terminal.jsx.map