"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _zminkAxioline = _interopRequireDefault(require("@bit/zmink.axioline.axc2152module"));

var _zminkAxioline2 = _interopRequireDefault(require("@bit/zmink.axioline.axl-connector"));

var _zminkAxioline3 = _interopRequireDefault(require("@bit/zmink.axioline.axl-led-horizontal"));

var _zminkAxioline4 = _interopRequireDefault(require("@bit/zmink.axioline.phoenix-p"));

var _zminkAxiolineTopCard = _interopRequireDefault(require("@bit/zmink.axioline.top-card.top-card"));

var _zminkAxiolineBottomCard = _interopRequireDefault(require("@bit/zmink.axioline.bottom-card.bottom-card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Axc2152 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Axc2152, _React$PureComponent);

  var _super = _createSuper(Axc2152);

  function Axc2152(props) {
    _classCallCheck(this, Axc2152);

    return _super.call(this, props);
  }

  _createClass(Axc2152, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          partNumber = _this$props.partNumber,
          partName = _this$props.partName,
          mmWidth = _this$props.mmWidth,
          mmHeight = _this$props.mmHeight,
          rest = _objectWithoutProperties(_this$props, ["partNumber", "partName", "mmWidth", "mmHeight"]);

      return /*#__PURE__*/_react.default.createElement("div", _extends({
        className: _zminkAxioline.default.base
      }, rest), /*#__PURE__*/_react.default.createElement(Vents, {
        width: 39,
        upper: true
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.top
      }, /*#__PURE__*/_react.default.createElement(CardHolder, {
        up: true
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.card
      }, /*#__PURE__*/_react.default.createElement(_zminkAxiolineTopCard.default, null)))), /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.mid
      }, /*#__PURE__*/_react.default.createElement(DiagLeds, null), /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.logo
      }, /*#__PURE__*/_react.default.createElement(_zminkAxioline4.default, null))), /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.bottom
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.bottomLeft
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.powerMarker
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.connectorPosition
      }, /*#__PURE__*/_react.default.createElement(_zminkAxioline2.default, {
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
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.bottomRight
      }, /*#__PURE__*/_react.default.createElement(CardHolder, {
        down: true
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.card
      }, /*#__PURE__*/_react.default.createElement(_zminkAxiolineBottomCard.default, null))))));
    }
  }]);

  return Axc2152;
}(_react.default.PureComponent); //takes a width of the component in mm and calculates the number of vents should be rendered


exports.default = Axc2152;

function Vents(props) {
  var vents = [];
  var numvents = Math.floor(props.width / 5);
  var ventContainerWidth = props.width + 'mm';
  var ventClass = (0, _classnames.default)(_defineProperty({}, _zminkAxioline.default.ventLower, props.lower === true), _defineProperty({}, _zminkAxioline.default.ventUpper, props.upper === true));

  for (var i = 0; i < numvents; i++) {
    vents.push( /*#__PURE__*/_react.default.createElement("div", {
      key: 'v' + i,
      className: ventClass
    }));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxioline.default.ventContainer,
    style: {
      width: ventContainerWidth
    }
  }, vents);
}

function CardHolder(props) {
  var cardholderClass = (0, _classnames.default)(_zminkAxioline.default.cardHolder, _defineProperty({}, _zminkAxioline.default.cardHolderUp, props.up), _defineProperty({}, _zminkAxioline.default.cardHolderDown, props.down));
  var leftFlangeClass = (0, _classnames.default)(_zminkAxioline.default.cardHolderFlange, _zminkAxioline.default.cardHolderFlangeLeft);
  var rightFlangeClass = (0, _classnames.default)(_zminkAxioline.default.cardHolderFlange, _zminkAxioline.default.cardHolderFlangeRight);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cardholderClass
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: leftFlangeClass
  }), props.children, /*#__PURE__*/_react.default.createElement("div", {
    className: rightFlangeClass
  }));
}

function DiagLeds(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxioline.default.ledArea
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxioline.default.ledTextGroup,
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, "BF-C"), /*#__PURE__*/_react.default.createElement("div", null, "BF-D"), /*#__PURE__*/_react.default.createElement("div", null, "SF"), /*#__PURE__*/_react.default.createElement("div", null, "BOOT"), /*#__PURE__*/_react.default.createElement("div", null, "EXT")), /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxioline.default.ledContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxioline.default.ledGroup
  }, /*#__PURE__*/_react.default.createElement(_zminkAxioline3.default, null), /*#__PURE__*/_react.default.createElement(_zminkAxioline3.default, null), /*#__PURE__*/_react.default.createElement(_zminkAxioline3.default, null), /*#__PURE__*/_react.default.createElement(_zminkAxioline3.default, null), /*#__PURE__*/_react.default.createElement(_zminkAxioline3.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxioline.default.ledGroup
  }, /*#__PURE__*/_react.default.createElement(_zminkAxioline3.default, null), /*#__PURE__*/_react.default.createElement(_zminkAxioline3.default, null), /*#__PURE__*/_react.default.createElement(_zminkAxioline3.default, null), /*#__PURE__*/_react.default.createElement(_zminkAxioline3.default, null), /*#__PURE__*/_react.default.createElement(_zminkAxioline3.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxioline.default.ledTextGroup,
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, "RUN"), /*#__PURE__*/_react.default.createElement("div", null, "FAIL"), /*#__PURE__*/_react.default.createElement("div", null, "DBG"), /*#__PURE__*/_react.default.createElement("div", null, "D"), /*#__PURE__*/_react.default.createElement("div", null, "E")));
}

Axc2152.defaultProps = {
  partNumber: '2404267',
  partName: 'AXC F 2152',
  mmWidth: 45,
  //width of component in mm which can be converted to px size
  mmHeight: 122
};

//# sourceMappingURL=Axc2152.jsx.map