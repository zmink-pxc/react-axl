"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AXL_2152Module = _interopRequireDefault(require("./AXL_2152.module.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AXL_Connector = _interopRequireDefault(require("../../AXL_Connector/AXL_Connector.jsx"));

var _phoenixP = _interopRequireDefault(require("./phoenix-p.png"));

var _bottomCard = _interopRequireDefault(require("./bottomCard.png"));

var _topCard = _interopRequireDefault(require("./topCard.png"));

var _AXL_LED_Horizontal = _interopRequireDefault(require("../../AXL_LED_Horizontal/AXL_LED_Horizontal.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AXL_2152 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AXL_2152, _React$PureComponent);

  function AXL_2152(props) {
    _classCallCheck(this, AXL_2152);

    return _possibleConstructorReturn(this, _getPrototypeOf(AXL_2152).call(this, props));
  }

  _createClass(AXL_2152, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: _AXL_2152Module["default"].base
      }, _react["default"].createElement(Vents, {
        width: 39,
        upper: true
      }), _react["default"].createElement("div", {
        className: _AXL_2152Module["default"].top
      }, _react["default"].createElement(CardHolder, {
        up: true
      }, _react["default"].createElement("img", {
        className: _AXL_2152Module["default"].card,
        src: _topCard["default"]
      }))), _react["default"].createElement("div", {
        className: _AXL_2152Module["default"].mid
      }, _react["default"].createElement(DiagLeds, null), _react["default"].createElement("img", {
        className: _AXL_2152Module["default"].logo,
        src: _phoenixP["default"]
      })), _react["default"].createElement("div", {
        className: _AXL_2152Module["default"].bottom
      }, _react["default"].createElement("div", {
        className: _AXL_2152Module["default"].bottomLeft
      }, _react["default"].createElement("div", {
        className: _AXL_2152Module["default"].powerMarker
      }), _react["default"].createElement("div", {
        className: _AXL_2152Module["default"].connectorPosition
      }, _react["default"].createElement(_AXL_Connector["default"], {
        type: "POWER",
        isBlack: true,
        numRows: 2,
        numCols: 2,
        terminals: [{
          redPlunger: true,
          label: 'a1'
        }, {
          redPlunger: true,
          label: 'a2'
        }, {
          bluePlunger: true,
          label: 'b1'
        }, {
          bluePlunger: true,
          label: 'b2'
        }]
      }))), _react["default"].createElement("div", {
        className: _AXL_2152Module["default"].bottomRight
      }, _react["default"].createElement(CardHolder, {
        down: true
      }, _react["default"].createElement("img", {
        className: _AXL_2152Module["default"].card,
        src: _bottomCard["default"]
      })))));
    }
  }]);

  return AXL_2152;
}(_react["default"].PureComponent); //takes a width of the component in mm and calculates the number of vents should be rendered


exports["default"] = AXL_2152;

function Vents(props) {
  var vents = [];
  var numvents = Math.floor(props.width / 5);
  var ventContainerWidth = props.width + 'mm';
  var ventClass = (0, _classnames["default"])(_defineProperty({}, _AXL_2152Module["default"].ventLower, props.lower === true), _defineProperty({}, _AXL_2152Module["default"].ventUpper, props.upper === true));

  for (var i = 0; i < numvents; i++) {
    vents.push(_react["default"].createElement("div", {
      key: 'v' + i,
      className: ventClass
    }));
  }

  return _react["default"].createElement("div", {
    className: _AXL_2152Module["default"].ventContainer,
    style: {
      width: ventContainerWidth
    }
  }, vents);
}

function CardHolder(props) {
  var cardholderClass = (0, _classnames["default"])(_AXL_2152Module["default"].cardHolder, _defineProperty({}, _AXL_2152Module["default"].cardHolderUp, props.up), _defineProperty({}, _AXL_2152Module["default"].cardHolderDown, props.down));
  var leftFlangeClass = (0, _classnames["default"])(_AXL_2152Module["default"].cardHolderFlange, _AXL_2152Module["default"].cardHolderFlangeLeft);
  var rightFlangeClass = (0, _classnames["default"])(_AXL_2152Module["default"].cardHolderFlange, _AXL_2152Module["default"].cardHolderFlangeRight);
  return _react["default"].createElement("div", {
    className: cardholderClass
  }, _react["default"].createElement("div", {
    className: leftFlangeClass
  }), props.children, _react["default"].createElement("div", {
    className: rightFlangeClass
  }));
}

function DiagLeds(props) {
  return _react["default"].createElement("div", {
    className: _AXL_2152Module["default"].ledContainer
  }, _react["default"].createElement("div", {
    className: _AXL_2152Module["default"].ledGroup
  }, _react["default"].createElement(_AXL_LED_Horizontal["default"], null), _react["default"].createElement(_AXL_LED_Horizontal["default"], null), _react["default"].createElement(_AXL_LED_Horizontal["default"], null), _react["default"].createElement(_AXL_LED_Horizontal["default"], null), _react["default"].createElement(_AXL_LED_Horizontal["default"], null)), _react["default"].createElement("div", {
    className: _AXL_2152Module["default"].ledGroup
  }, _react["default"].createElement(_AXL_LED_Horizontal["default"], null), _react["default"].createElement(_AXL_LED_Horizontal["default"], null), _react["default"].createElement(_AXL_LED_Horizontal["default"], null), _react["default"].createElement(_AXL_LED_Horizontal["default"], null), _react["default"].createElement(_AXL_LED_Horizontal["default"], null)));
}

AXL_2152.defaultProps = {
  partNumber: '2404267',
  partName: 'AXC F 2152'
};

//# sourceMappingURL=AXL_2152.jsx.map