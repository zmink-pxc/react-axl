"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AXL_ConnectorModule = _interopRequireDefault(require("./AXL_Connector.module.scss"));

var _AXL_LED_Group = _interopRequireDefault(require("../AXL_LED_Group/AXL_LED_Group.jsx"));

var _AXL_TerminalGroup = _interopRequireDefault(require("../AXL_TerminalGroup/AXL_TerminalGroup.jsx"));

var _AXL_Latch = _interopRequireDefault(require("../AXL_Latch/AXL_Latch.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AXL_Connector =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AXL_Connector, _React$PureComponent);

  function AXL_Connector(props) {
    _classCallCheck(this, AXL_Connector);

    return _possibleConstructorReturn(this, _getPrototypeOf(AXL_Connector).call(this, props));
  }

  _createClass(AXL_Connector, [{
    key: "render",
    value: function render() {
      var _this = this;

      var cols = Array.apply(null, Array(this.props.numCols));
      var rows = Array.apply(null, Array(this.props.numRows));
      var connectorStyle = (0, _classnames["default"])(_AXL_ConnectorModule["default"].connector);
      var connectorMiddleStyle = (0, _classnames["default"])(_AXL_ConnectorModule["default"]['connector-middle'], _defineProperty({}, _AXL_ConnectorModule["default"].blackConnector, this.props.isBlack));
      var terminals = this.props.hasOwnProperty('terminals') ? this.props.terminals : initArray(placeholderTerminal, this.props.numRows * this.props.numCols);
      return _react["default"].createElement("div", {
        className: connectorStyle,
        style: {
          width: this.props.numCols * 5 + 'mm'
        }
      }, _react["default"].createElement(Foot, {
        isBlack: this.props.isBlack
      }), _react["default"].createElement("div", {
        className: connectorMiddleStyle
      }, cols.map(function (col, coli) {
        var j = _this.props.numRows * coli;
        var leds = _this.props.hasOwnProperty('leds') ? _this.props.leds.slice(j, j + _this.props.numRows) : initArray(placeholderLED, _this.props.numRows); // if (this.props.leds !== (this.props.numRows*this.props.numCols)){leds = }

        return _react["default"].createElement("div", {
          className: _AXL_ConnectorModule["default"].col
        }, _react["default"].createElement(_AXL_LED_Group["default"], {
          leds: leds
        }), rows.map(function (row, rowi) {
          return _react["default"].createElement(_AXL_TerminalGroup["default"], _extends({
            key: 'ter-' + rowi + '-' + coli
          }, terminals[coli * _this.props.numRows + rowi], {
            isBlack: _this.props.isBlack === true,
            isEnd: rowi === _this.props.numRows - 1
          }));
        }));
      })), _react["default"].createElement(_AXL_Latch["default"], {
        pushedIn: this.props.pushInLatch
      }));
    }
  }]);

  return AXL_Connector;
}(_react["default"].PureComponent);

exports["default"] = AXL_Connector;
AXL_Connector.propTypes = {
  pushInLatch: _propTypes["default"].bool,
  //push the latch in
  isBlack: _propTypes["default"].bool,
  //is the connector black
  numRows: _propTypes["default"].number.isRequired,
  //number of rows on the connector
  numCols: _propTypes["default"].number.isRequired,
  //number of columns on the connector
  terminals: _propTypes["default"].array,
  //hooks into terminal props if necessary
  leds: _propTypes["default"].array //hooks into led props for animating and labeling purposes
  // AXL_Connector.defaultProps = {
  //     isBlack: true,
  //     numRows: 4,
  //     numCols: 1,
  //     terminals: [{label:'00'},{label:'10'},{label:'20'},{label:'30'}],
  //     leds: [{isWarning: true,label:'00'},{isError: true,label:'10'},{isActive: true,label:'20'},{isWarning: true,label:'30'}]
  // }

};
var placeholderLED = {
  isError: true,
  label: '00'
};
var placeholderTerminal = {
  label: '00'
};

function initArray(initElement, length) {
  var arr = Array.apply(null, Array(length));
  return arr.map(function (element) {
    return initElement;
  });
}

function Foot(props) {
  return _react["default"].createElement("div", {
    className: _AXL_ConnectorModule["default"].connectorFoot,
    style: {
      backgroundColor: props.isBlack === true ? 'black' : _AXL_ConnectorModule["default"].axiolineGrey
    }
  }, _react["default"].createElement("div", {
    className: _AXL_ConnectorModule["default"].footTop
  }));
}

//# sourceMappingURL=AXL_Connector.jsx.map