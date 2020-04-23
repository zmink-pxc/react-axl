"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Axc2152Module = _interopRequireDefault(require("./Axc2152.module.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AxlConnector = _interopRequireDefault(require("@core/AxlConnector/AxlConnector.jsx"));

var _AxlLedHorizontal = _interopRequireDefault(require("@core/AxlLedHorizontal/AxlLedHorizontal.jsx"));

var _PhoenixP = _interopRequireDefault(require("@core/PhoenixP/PhoenixP.jsx"));

var _TopCard = _interopRequireDefault(require("@core/TopCard/TopCard.jsx"));

var _BottomCard = _interopRequireDefault(require("@core/BottomCard/BottomCard.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: _Axc2152Module["default"].base
      }, this.props), /*#__PURE__*/_react["default"].createElement(Vents, {
        width: 39,
        upper: true
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: _Axc2152Module["default"].top
      }, /*#__PURE__*/_react["default"].createElement(CardHolder, {
        up: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _Axc2152Module["default"].card
      }, /*#__PURE__*/_react["default"].createElement(_TopCard["default"], null)))), /*#__PURE__*/_react["default"].createElement("div", {
        className: _Axc2152Module["default"].mid
      }, /*#__PURE__*/_react["default"].createElement(DiagLeds, null), /*#__PURE__*/_react["default"].createElement("div", {
        className: _Axc2152Module["default"].logo
      }, /*#__PURE__*/_react["default"].createElement(_PhoenixP["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
        className: _Axc2152Module["default"].bottom
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _Axc2152Module["default"].bottomLeft
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _Axc2152Module["default"].powerMarker
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: _Axc2152Module["default"].connectorPosition
      }, /*#__PURE__*/_react["default"].createElement(_AxlConnector["default"], {
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
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: _Axc2152Module["default"].bottomRight
      }, /*#__PURE__*/_react["default"].createElement(CardHolder, {
        down: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _Axc2152Module["default"].card
      }, /*#__PURE__*/_react["default"].createElement(_BottomCard["default"], null))))));
    }
  }]);

  return Axc2152;
}(_react["default"].PureComponent); //takes a width of the component in mm and calculates the number of vents should be rendered


exports["default"] = Axc2152;

function Vents(props) {
  var vents = [];
  var numvents = Math.floor(props.width / 5);
  var ventContainerWidth = props.width + 'mm';
  var ventClass = (0, _classnames["default"])(_defineProperty({}, _Axc2152Module["default"].ventLower, props.lower === true), _defineProperty({}, _Axc2152Module["default"].ventUpper, props.upper === true));

  for (var i = 0; i < numvents; i++) {
    vents.push( /*#__PURE__*/_react["default"].createElement("div", {
      key: 'v' + i,
      className: ventClass
    }));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _Axc2152Module["default"].ventContainer,
    style: {
      width: ventContainerWidth
    }
  }, vents);
}

function CardHolder(props) {
  var cardholderClass = (0, _classnames["default"])(_Axc2152Module["default"].cardHolder, _defineProperty({}, _Axc2152Module["default"].cardHolderUp, props.up), _defineProperty({}, _Axc2152Module["default"].cardHolderDown, props.down));
  var leftFlangeClass = (0, _classnames["default"])(_Axc2152Module["default"].cardHolderFlange, _Axc2152Module["default"].cardHolderFlangeLeft);
  var rightFlangeClass = (0, _classnames["default"])(_Axc2152Module["default"].cardHolderFlange, _Axc2152Module["default"].cardHolderFlangeRight);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cardholderClass
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: leftFlangeClass
  }), props.children, /*#__PURE__*/_react["default"].createElement("div", {
    className: rightFlangeClass
  }));
}

function DiagLeds(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _Axc2152Module["default"].ledArea
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _Axc2152Module["default"].ledTextGroup,
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "BF-C"), /*#__PURE__*/_react["default"].createElement("div", null, "BF-D"), /*#__PURE__*/_react["default"].createElement("div", null, "SF"), /*#__PURE__*/_react["default"].createElement("div", null, "BOOT"), /*#__PURE__*/_react["default"].createElement("div", null, "EXT")), /*#__PURE__*/_react["default"].createElement("div", {
    className: _Axc2152Module["default"].ledContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _Axc2152Module["default"].ledGroup
  }, /*#__PURE__*/_react["default"].createElement(_AxlLedHorizontal["default"], null), /*#__PURE__*/_react["default"].createElement(_AxlLedHorizontal["default"], null), /*#__PURE__*/_react["default"].createElement(_AxlLedHorizontal["default"], null), /*#__PURE__*/_react["default"].createElement(_AxlLedHorizontal["default"], null), /*#__PURE__*/_react["default"].createElement(_AxlLedHorizontal["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _Axc2152Module["default"].ledGroup
  }, /*#__PURE__*/_react["default"].createElement(_AxlLedHorizontal["default"], null), /*#__PURE__*/_react["default"].createElement(_AxlLedHorizontal["default"], null), /*#__PURE__*/_react["default"].createElement(_AxlLedHorizontal["default"], null), /*#__PURE__*/_react["default"].createElement(_AxlLedHorizontal["default"], null), /*#__PURE__*/_react["default"].createElement(_AxlLedHorizontal["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: _Axc2152Module["default"].ledTextGroup,
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "RUN"), /*#__PURE__*/_react["default"].createElement("div", null, "FAIL"), /*#__PURE__*/_react["default"].createElement("div", null, "DBG"), /*#__PURE__*/_react["default"].createElement("div", null, "D"), /*#__PURE__*/_react["default"].createElement("div", null, "E")));
}

Axc2152.defaultProps = {
  partNumber: '2404267',
  partName: 'AXC F 2152',
  mmWidth: 45,
  //width of component in mm which can be converted to px size
  mmHeight: 122
};

//# sourceMappingURL=Axc2152.jsx.map