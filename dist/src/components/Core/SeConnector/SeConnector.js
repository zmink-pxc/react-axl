"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SeConnector;

var _react = _interopRequireDefault(require("react"));

var _SeTerminalGroup = _interopRequireDefault(require("@core/SeTerminalGroup/SeTerminalGroup.jsx"));

var _SeConnectorModule = _interopRequireDefault(require("./SeConnector.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SeConnector(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _SeConnectorModule["default"].root
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _SeConnectorModule["default"].shadow
  }), /*#__PURE__*/_react["default"].createElement(_SeTerminalGroup["default"], {
    key: "tg-1",
    left: true
  }), /*#__PURE__*/_react["default"].createElement(_SeTerminalGroup["default"], {
    key: "tg-2"
  }), /*#__PURE__*/_react["default"].createElement(_SeTerminalGroup["default"], {
    key: "tg-3",
    left: true
  }), /*#__PURE__*/_react["default"].createElement(_SeTerminalGroup["default"], {
    key: "tg-4"
  }), /*#__PURE__*/_react["default"].createElement(_SeTerminalGroup["default"], {
    key: "tg-5",
    left: true
  }), /*#__PURE__*/_react["default"].createElement(_SeTerminalGroup["default"], {
    key: "tg-6"
  }), /*#__PURE__*/_react["default"].createElement(_SeTerminalGroup["default"], {
    key: "tg-7",
    left: true
  }), /*#__PURE__*/_react["default"].createElement(_SeTerminalGroup["default"], {
    key: "tg-8"
  }));
}

//# sourceMappingURL=SeConnector.jsx.map