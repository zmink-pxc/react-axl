"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTerminals = defaultTerminals;
exports.defaultLeds = defaultLeds;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AXL_ModuleModule = _interopRequireDefault(require("./AXL_Module.module.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AXL_ColorID = _interopRequireDefault(require("../AXL_ColorID/AXL_ColorID.jsx"));

var _types = require("@babel/types");

var _phoenixP = _interopRequireDefault(require("./phoenix-p.png"));

var _phoenixBrand = _interopRequireDefault(require("./phoenix-brand.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AXL_Module =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AXL_Module, _React$PureComponent);

  function AXL_Module(props) {
    var _this;

    _classCallCheck(this, AXL_Module);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AXL_Module).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "faceWidth", function () {
      return Math.floor(_this.props.width / 10) * 10;
    });

    _defineProperty(_assertThisInitialized(_this), "mapPropsToConnector", function (connector, connectorIndex) {
      _this.connSectionWidth = _this.connSectionWidth + connector.props.numCols * 5;

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

  _createClass(AXL_Module, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var middleWidth = this.props.numCols * 5 + "mm";
      var logo = this.props.fullWidthLogo === true ? _phoenixBrand["default"] : _phoenixP["default"];

      var children = _react["default"].Children.map(this.props.children, function (child, index) {
        return _react["default"].cloneElement(child, _this2.mapPropsToConnector(child, index));
      });

      return _react["default"].createElement("div", {
        className: _AXL_ModuleModule["default"].moduleBase,
        style: {
          width: this.props.width + "mm"
        }
      }, _react["default"].createElement("div", {
        className: _AXL_ModuleModule["default"].moduleTop,
        style: {
          width: this.faceWidth() + "mm"
        }
      }, (this.props.raisedMidSection || this.props.hasTopRow) === false ? _react["default"].createElement("div", {
        className: _AXL_ModuleModule["default"].raisedContainer,
        style: {
          width: this.faceWidth() + "mm"
        }
      }, _react["default"].createElement(Vents, {
        width: this.props.width,
        upper: true
      }), _react["default"].createElement(Label, {
        width: this.faceWidth() - 4 + 1,
        labels: this.props.labels
      }), _react["default"].createElement(LabelHolder, null), _react["default"].createElement("div", {
        className: _AXL_ModuleModule["default"].brandArea
      }, _react["default"].createElement("img", {
        className: _AXL_ModuleModule["default"].logo,
        src: logo,
        alt: "Phoenix Contact"
      }), _react["default"].createElement("div", {
        className: _AXL_ModuleModule["default"].printArea
      }, _react["default"].createElement("div", {
        className: _AXL_ModuleModule["default"].print
      }, this.props.partName), _react["default"].createElement("div", {
        className: _AXL_ModuleModule["default"].print
      }, this.props.partNumber))), _react["default"].createElement(Vents, {
        width: this.props.width,
        lower: true
      })) : null), _react["default"].createElement("div", {
        className: _AXL_ModuleModule["default"].moduleMiddle,
        style: {
          width: this.connSectionWidth + 'mm'
        }
      }, _react["default"].createElement(_AXL_ColorID["default"], this.props.colorCard), _react["default"].createElement(Inset, null)), _react["default"].createElement("div", {
        className: _AXL_ModuleModule["default"].moduleBottom
      }, children));
    }
  }]);

  return AXL_Module;
}(_react["default"].PureComponent);

exports["default"] = AXL_Module;
AXL_Module.propTypes = {
  raisedMidsection: _propTypes["default"].bool.isRequired,
  //does the card have a raised midsection
  hasTopRow: _propTypes["default"].bool.isRequired,
  //do the connectors appear at the top of the module
  width: _propTypes["default"].number.isRequired,
  //width in mm of the card
  colorCard: _propTypes["default"].object.isRequired,
  //properties to pass to colorID card
  partNumber: _propTypes["default"].number.isRequired,
  //part number of the module
  partName: _propTypes["default"].string.isRequired,
  //name of the product as displayed on the physical unit
  fullWidthLogo: _propTypes["default"].bool,
  //should show full width phoenix contact logo
  moduleName: _propTypes["default"].string //name of the module e.g. AI8,DO8, etc

};
AXL_Module.defaultProps = {
  labels: ['a', '0', '1', '2', '3', '4', '5', '6', '7'] //takes a width of the component in mm and calculates the number of vents should be rendered

};

function Vents(props) {
  var vents = [];
  var numvents = Math.floor(props.width / 6);
  var ventContainerWidth = props.width - 1 + "mm";
  var ventClass = (0, _classnames["default"])(_defineProperty({}, _AXL_ModuleModule["default"].ventLower, props.lower === true), _defineProperty({}, _AXL_ModuleModule["default"].ventUpper, props.upper === true));

  for (var i = 0; i < numvents; i++) {
    vents.push(_react["default"].createElement("div", {
      key: 'v' + i,
      className: ventClass
    }));
  }

  return _react["default"].createElement("div", {
    className: _AXL_ModuleModule["default"].ventContainer,
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
  var labelVerticalClass = (0, _classnames["default"])([_AXL_ModuleModule["default"].labelVerticalLine], _defineProperty({}, _AXL_ModuleModule["default"].singleWidthMargin, singleWidth), _defineProperty({}, _AXL_ModuleModule["default"].doubleWidthMargin, !singleWidth));
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

      return _react["default"].createElement("div", {
        className: labelVerticalClass,
        key: 'lbl' + index,
        style: {
          borderLeft: borderStyle,
          flexGrow: flex
        }
      }, _react["default"].createElement("span", {
        className: _AXL_ModuleModule["default"].labelText
      }, label));
    }
  });
  return _react["default"].createElement("div", {
    className: _AXL_ModuleModule["default"].labelBase,
    style: {
      width: labelWidth
    }
  }, _react["default"].createElement("div", {
    className: _AXL_ModuleModule["default"].labelHorizontalLine,
    style: {
      width: lineWidth
    }
  }), Columns);
}

function Inset(props) {
  //const insetWidth = props.width + "mm";
  return _react["default"].createElement("div", {
    className: _AXL_ModuleModule["default"].inset
  });
}

function LabelHolder(props) {
  return _react["default"].createElement("div", {
    className: _AXL_ModuleModule["default"].labelHolder
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

//# sourceMappingURL=AXL_Module.jsx.map