"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SeTerminalGroup;

var _react = _interopRequireDefault(require("react"));

var _SeTerminal = _interopRequireDefault(require("@core/SeTerminal/SeTerminal.jsx"));

var _SePlunger = _interopRequireDefault(require("@core/SePlunger/SePlunger.jsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SeTerminalGroupModule = _interopRequireDefault(require("./SeTerminalGroup.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SeTerminalGroup(props) {
  return props.left ? /*#__PURE__*/_react["default"].createElement("div", {
    className: _SeTerminalGroupModule["default"].root
  }, /*#__PURE__*/_react["default"].createElement(_SeTerminal["default"], _extends({}, props.terminal, {
    isLeft: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '0.5mm'
    }
  }), /*#__PURE__*/_react["default"].createElement(_SePlunger["default"], props.plunger)) : /*#__PURE__*/_react["default"].createElement("div", {
    className: _SeTerminalGroupModule["default"].root
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '0.5mm'
    }
  }), /*#__PURE__*/_react["default"].createElement(_SePlunger["default"], props.plunger), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '0.5mm'
    }
  }), /*#__PURE__*/_react["default"].createElement(_SeTerminal["default"], _extends({}, props.terminal, {
    isLeft: false
  })));
}

SeTerminalGroup.propTypes = {
  terminal: _propTypes["default"].object,
  //props sent to terminal 
  plunger: _propTypes["default"].object //props sent to plunger

};

//# sourceMappingURL=SeTerminalGroup.jsx.map