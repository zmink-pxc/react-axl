"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SeTerminalGroup;

var _react = _interopRequireDefault(require("react"));

var _zminkAxiolineSmartElements = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-terminal"));

var _zminkAxiolineSmartElements2 = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-plunger"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _zminkAxiolineSmartElements3 = _interopRequireDefault(require("@bit/zmink.axioline.smart-elements.se-terminal-group-module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SeTerminalGroup(props) {
  return props.left ? /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements3.default.root
  }, /*#__PURE__*/_react.default.createElement(_zminkAxiolineSmartElements.default, _extends({}, props.terminal, {
    isLeft: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '0.5mm'
    }
  }), /*#__PURE__*/_react.default.createElement(_zminkAxiolineSmartElements2.default, props.plunger)) : /*#__PURE__*/_react.default.createElement("div", {
    className: _zminkAxiolineSmartElements3.default.root
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '0.5mm'
    }
  }), /*#__PURE__*/_react.default.createElement(_zminkAxiolineSmartElements2.default, props.plunger), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '0.5mm'
    }
  }), /*#__PURE__*/_react.default.createElement(_zminkAxiolineSmartElements.default, _extends({}, props.terminal, {
    isLeft: false
  })));
}

SeTerminalGroup.propTypes = {
  terminal: _propTypes.default.object,
  //props sent to terminal 
  plunger: _propTypes.default.object //props sent to plunger

};

//# sourceMappingURL=SeTerminalGroup.jsx.map