"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SeModule;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _zminkAxiolineSmartElements = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-module-module"));

var _zminkAxiolineSmartElements2 = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-led"));

var _zminkAxiolineSmartElements3 = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-lock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SeModule(props) {
  var partName = props.partName,
      partNumber = props.partNumber,
      leds = props.leds,
      ledLabels = props.ledLabels,
      children = props.children,
      other = _objectWithoutProperties(props, ["partName", "partNumber", "leds", "ledLabels", "children"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: _zminkAxiolineSmartElements.default.root
  }, other), /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.partName
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginLeft: '1mm'
    }
  }, partName)), /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.mainContent
  }, /*#__PURE__*/_react.default.createElement(LedArea, {
    ledLabels: ledLabels,
    ledProps: leds
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.conArea
  }, children)), /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.partName
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginLeft: '1mm'
    }
  }, partName)));
}

SeModule.propTypes = {
  partNumber: _propTypes.default.string.isRequired,
  partName: _propTypes.default.string.isRequired,
  terminals: _propTypes.default.object
};
SeModule.defaultProps = {
  ledLabels: ['E', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', 'E']
};

function LedArea(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.ledArea
  }, props.ledLabels.map(function (label, index) {
    var bigLed = index === 0 || index === 17;
    return index === 9 ? /*#__PURE__*/_react.default.createElement(_zminkAxiolineSmartElements3.default, {
      key: "l".concat(index)
    }) : /*#__PURE__*/_react.default.createElement("div", {
      key: "lea".concat(index),
      className: _zminkAxiolineSmartElements.default.ledContainer
    }, /*#__PURE__*/_react.default.createElement(_zminkAxiolineSmartElements2.default, {
      isErrLed: bigLed
    }), /*#__PURE__*/_react.default.createElement("div", null, label));
  }));
}

//# sourceMappingURL=SeModule.jsx.map