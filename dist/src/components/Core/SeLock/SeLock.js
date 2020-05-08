"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SeLock;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SeLockModule = _interopRequireDefault(require("./SeLock.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SeLock() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _SeLockModule["default"].root
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _SeLockModule["default"].indent
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _SeLockModule["default"].indent
  }));
}

//# sourceMappingURL=SeLock.jsx.map