"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AXL_Module = _interopRequireWildcard(require("../../../../AXL_Module/AXL_Module.jsx"));

var _AXL_Connector = _interopRequireDefault(require("../../../../AXL_Connector/AXL_Connector.jsx"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

var AXL_RTD8_1F =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AXL_RTD8_1F, _React$PureComponent);

  function AXL_RTD8_1F(props) {
    _classCallCheck(this, AXL_RTD8_1F);

    return _possibleConstructorReturn(this, _getPrototypeOf(AXL_RTD8_1F).call(this, props));
  }

  _createClass(AXL_RTD8_1F, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_AXL_Module["default"], {
        partName: this.props.partName,
        width: 54,
        terminals: this.props.terminals,
        leds: this.props.leds,
        raisedMidsection: false,
        hasTopRow: false,
        partNumber: this.props.partNumber,
        labels: ['a', '0', '1', '2', '3', '4', '5', '6', '7'],
        colorCard: {
          isAnalogIn: true
        }
      }, _react["default"].createElement(_AXL_Connector["default"], {
        type: "POWER",
        isBlack: true,
        numRows: 4,
        numCols: 1
      }), _react["default"].createElement(_AXL_Connector["default"], {
        type: "IO",
        isBlack: false,
        numRows: 4,
        numCols: 2
      }), _react["default"].createElement(_AXL_Connector["default"], {
        type: "IO",
        isBlack: false,
        numRows: 4,
        numCols: 2
      }), _react["default"].createElement(_AXL_Connector["default"], {
        type: "IO",
        isBlack: false,
        numRows: 4,
        numCols: 2
      }), _react["default"].createElement(_AXL_Connector["default"], {
        type: "IO",
        isBlack: false,
        numRows: 4,
        numCols: 2
      }));
    }
  }]);

  return AXL_RTD8_1F;
}(_react["default"].PureComponent);

exports["default"] = AXL_RTD8_1F;
AXL_RTD8_1F.defaultProps = {
  partName: "RTD8",
  partNumber: "2688077",
  terminals: (0, _AXL_Module.defaultTerminals)(12),
  leds: (0, _AXL_Module.defaultLeds)(12)
};

//# sourceMappingURL=AXL_RTD8_1F.jsx.map