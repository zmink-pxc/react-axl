"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AxioLoader;

var _react = _interopRequireDefault(require("react"));

var _AxioLoaderModule = _interopRequireDefault(require("./AxioLoader.module.scss"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 
 * @param {*} props 
 */
function AxioLoader(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _AxioLoaderModule["default"].base,
    style: {
      height: '122mm',
      width: props.mmWidth
    }
  });
}

//# sourceMappingURL=AxioLoader.jsx.map