"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SeCarrier;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _zminkAxiolineSmartElements = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-carrier-module"));

var _zminkAxioline = _interopRequireDefault(require("@bit/zmink.axioline.phoenix-p"));

var _zminkAxiolineSmartElements2 = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-carrier-led"));

var _zminkAxiolineSmartElements3 = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-carrier-terminal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 
 * @param {number} numModules - number of modules to render  
 */
function SeCarrier(props) {
  var topRow = [];
  var bottomRow = [];
  props.children.forEach(function (child, index) {
    if ((index + 1) % 2 === 0) {
      bottomRow.push( /*#__PURE__*/_react.default.createElement(_react.Suspense, {
        key: index,
        fallback: /*#__PURE__*/_react.default.createElement("div", {
          key: 'd' + index
        })
      }, child));
    } else {
      topRow.push( /*#__PURE__*/_react.default.createElement(_react.Suspense, {
        key: index,
        fallback: /*#__PURE__*/_react.default.createElement("div", {
          key: 'd' + index
        })
      }, child));
    }
  });
  var modules = topRow.concat(bottomRow);
  var modAreaWidth = props.numModules / 2 * 15;
  var carrierWidth = props.shrink ? modAreaWidth : modAreaWidth + 10;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.root,
    style: {
      width: carrierWidth + 'mm'
    }
  }, !props.shrink ? /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.leftArea
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.shadow
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '5mm',
      width: '5mm'
    }
  }, /*#__PURE__*/_react.default.createElement(_zminkAxioline.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.partText
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.textFormat
  }, /*#__PURE__*/_react.default.createElement("span", null, "AXL  F  BP  SE".concat(props.numModules)), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, props.partNumber))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '20mm',
      width: '9mm'
    }
  }), /*#__PURE__*/_react.default.createElement(CarrierLedArea, {
    numModules: props.numModules
  }), /*#__PURE__*/_react.default.createElement(SeCarrierTerminalGroup, {
    text: "Up+"
  }), /*#__PURE__*/_react.default.createElement(SeCarrierTerminalGroup, {
    text: "Up-"
  })) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.moduleArea,
    style: {
      width: modAreaWidth + 'mm'
    }
  }, modules));
}

SeCarrier.propTypes = {
  numModules: _propTypes.default.number.isRequired
};

function CarrierLedArea(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '20mm',
      width: '9mm'
    }
  });
}

function SeCarrierTerminalGroup(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.termGroup
  }, /*#__PURE__*/_react.default.createElement(_zminkAxiolineSmartElements3.default, null), /*#__PURE__*/_react.default.createElement(Inset, null), /*#__PURE__*/_react.default.createElement("div", null, props.text), /*#__PURE__*/_react.default.createElement(Inset, null), /*#__PURE__*/_react.default.createElement(_zminkAxiolineSmartElements3.default, null));
}

function Inset() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements.default.inset
  });
}

//# sourceMappingURL=SeCarrier.jsx.map