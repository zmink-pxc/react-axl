"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTerminals = defaultTerminals;
exports.defaultLeds = defaultLeds;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _zminkAxioline = _interopRequireDefault(require("@bit/zmink.axioline.axl-modulemodule"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _zminkAxioline2 = _interopRequireDefault(require("@bit/zmink.axioline.axl-color-id"));

var _zminkAxioline3 = _interopRequireDefault(require("@bit/zmink.axioline.phoenix-p"));

var _zminkAxioline4 = _interopRequireDefault(require("@bit/zmink.axioline.phoenix-brand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AxlModule = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AxlModule, _React$PureComponent);

  var _super = _createSuper(AxlModule);

  function AxlModule(props) {
    var _this;

    _classCallCheck(this, AxlModule);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "faceWidth", function () {
      return Math.floor(_this.props.width / 10) * 10;
    });

    _defineProperty(_assertThisInitialized(_this), "mapPropsToConnector", function (connector, connectorIndex) {
      _this.connSectionWidth = _this.connSectionWidth + connector.props.numCols * 5;

      if (connectorIndex === _this.numConnectors - 1 && _this.props.hasTopRow) {
        _this.connSectionWidth = _this.connSectionWidth / 2 + 2.5;
      }

      switch (connector.props.type) {
        case 'POWER':
          break;

        case 'IO':
          break;

        default:
          break;
      } //console.log('Connector Props: ' + JSON.stringify(connector));


      return {};
    });

    _defineProperty(_assertThisInitialized(_this), "withMM", function (num) {
      return num + "mm";
    });

    _this.numConnectors = props.children ? props.children.length : 0;
    _this.connSectionWidth = 0;
    return _this;
  }

  _createClass(AxlModule, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          moduleName = _this$props.moduleName,
          numCols = _this$props.numCols,
          fullWidthLogo = _this$props.fullWidthLogo,
          width = _this$props.width,
          raisedMidsection = _this$props.raisedMidsection,
          hasTopRow = _this$props.hasTopRow,
          labels = _this$props.labels,
          partName = _this$props.partName,
          partNumber = _this$props.partNumber,
          colorCard = _this$props.colorCard,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["moduleName", "numCols", "fullWidthLogo", "width", "raisedMidsection", "hasTopRow", "labels", "partName", "partNumber", "colorCard", "children"]);

      this.connSectionWidth = 0;
      var middleWidth = numCols * 5 + "mm";
      var Logo = fullWidthLogo === true ? _zminkAxioline4.default : _zminkAxioline3.default;
      var tChildren = []; //top row children

      var bChildren = []; //bottom row children
      //iterate over children and map to the appropriate children container array

      var foldPoint = (children.length - 1) / 2 + 1;

      _react.default.Children.map(children, function (child, index) {
        console.log("child index: ".concat(index));
        console.log("fold point: ".concat(foldPoint)); //if top row (2f/2h) exists, and element is not the power connector (element 0)

        if (hasTopRow && index >= foldPoint) {
          var newProps = _objectSpread({}, _this2.mapPropsToConnector(child, index), {
            style: {
              transform: 'rotate(180deg)'
            }
          });

          tChildren.push(_react.default.cloneElement(child, newProps));
        } else {
          bChildren.push(_react.default.cloneElement(child, _this2.mapPropsToConnector(child, index)));
        }
      });

      var moduleTopStyle = this.props.hasTopRow ? {
        width: this.faceWidth() + "mm",
        border: 'none',
        marginRight: '6mm',
        justifyContent: 'right'
      } : {
        width: this.faceWidth() + "mm"
      };
      return /*#__PURE__*/_react.default.createElement("div", _extends({
        className: _zminkAxioline.default.moduleBase,
        style: {
          width: width + "mm",
          justifyContent: this.props.hasTopRow ? "center" : "flex-start"
        }
      }, rest), /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.moduleTop,
        style: moduleTopStyle
      }, (raisedMidsection || hasTopRow) === false ? /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.raisedContainer,
        style: {
          width: this.faceWidth() + "mm"
        }
      }, /*#__PURE__*/_react.default.createElement(Vents, {
        width: width,
        upper: true
      }), /*#__PURE__*/_react.default.createElement(Label, {
        width: this.faceWidth() - 4 + 1,
        labels: labels
      }), /*#__PURE__*/_react.default.createElement(LabelHolder, null), /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.brandArea
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.logo
      }, /*#__PURE__*/_react.default.createElement(Logo, null)), /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.printArea
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.print
      }, partName), /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.print
      }, partNumber))), /*#__PURE__*/_react.default.createElement(Vents, {
        width: width,
        lower: true
      })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, tChildren)), /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.moduleMiddle,
        style: {
          width: this.connSectionWidth + 'mm'
        }
      }, /*#__PURE__*/_react.default.createElement(_zminkAxioline2.default, colorCard), /*#__PURE__*/_react.default.createElement(Inset, null)), /*#__PURE__*/_react.default.createElement("div", {
        className: _zminkAxioline.default.moduleBottom
      }, bChildren));
    }
  }]);

  return AxlModule;
}(_react.default.PureComponent);

exports.default = AxlModule;
AxlModule.propTypes = {
  raisedMidsection: _propTypes.default.bool.isRequired,
  //does the card have a raised midsection
  hasTopRow: _propTypes.default.bool.isRequired,
  //do the connectors appear at the top of the module
  width: _propTypes.default.number.isRequired,
  //width in mm of the card
  colorCard: _propTypes.default.object.isRequired,
  //properties to pass to colorID card
  partNumber: _propTypes.default.string.isRequired,
  //part number of the module
  partName: _propTypes.default.string.isRequired,
  //name of the product as displayed on the physical unit
  fullWidthLogo: _propTypes.default.bool,
  //should show full width phoenix contact logo
  moduleName: _propTypes.default.string //name of the module e.g. AI8,DO8, etc

};
AxlModule.defaultProps = {
  labels: ['a', '0', '1', '2', '3', '4', '5', '6', '7']
}; //takes a width of the component in mm and calculates the number of vents should be rendered

function Vents(props) {
  var vents = [];
  var numvents = Math.floor(props.width / 6);
  var ventContainerWidth = props.width - 1 + "mm";
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
} //54/45mm


function Label(props) {
  var labelWidth = props.width + "mm";
  var lineWidth = props.width - 3 + "mm";
  var singleWidth = 10 * props.labels.length > props.width;
  var numVerticalLines = props.labels.length - 1;
  var labelVerticalClass = (0, _classnames.default)([_zminkAxioline.default.labelVerticalLine], _defineProperty({}, _zminkAxioline.default.singleWidthMargin, singleWidth), _defineProperty({}, _zminkAxioline.default.doubleWidthMargin, !singleWidth));
  var Columns = props.labels.map(function (label, index) {
    if (index < props.labels.length) {
      var borderStyle, flex;

      if (index === 0) {
        borderStyle = 'none';
        flex = '2';
      } else if (index === props.labels.length - 1) {
        flex = '2';
        borderStyle = '0.25mm solid black';
      } else {
        borderStyle = '0.25mm solid black';
        flex = '1';
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: labelVerticalClass,
        key: 'lbl' + index,
        style: {
          borderLeft: borderStyle,
          flexGrow: flex
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: _zminkAxioline.default.labelText
      }, label));
    }
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxioline.default.labelBase,
    style: {
      width: labelWidth
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxioline.default.labelHorizontalLine,
    style: {
      width: lineWidth
    }
  }), Columns);
}

function Inset(props) {
  //const insetWidth = props.width + "mm";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxioline.default.inset
  });
}

function LabelHolder(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxioline.default.labelHolder
  }, props.children);
}

function defaultTerminals(numTerminals) {
  var vals = [];

  for (var k = 0; k < numTerminals; k++) {
    vals.push({});
  }

  return vals; //[{label:'00'},{label:'10'},{label:'20'},{label:'30'}]
}

function defaultLeds(numLeds) {
  var vals = [];

  for (var i = 0; i < numLeds; i++) {
    vals.push({});
  }

  return vals;
}

//# sourceMappingURL=AxlModule.jsx.map