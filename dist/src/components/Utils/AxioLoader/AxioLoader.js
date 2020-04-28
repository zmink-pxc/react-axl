"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AxioLoader;

var _react = _interopRequireDefault(require("react"));

var _AxioLoaderModule = _interopRequireDefault(require("./AxioLoader.module.scss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 
 * @param {*} props 
 */
function AxioLoader(props) {
  var mm = props.mmWidth + "mm";
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: '#8e9291',
      height: '122mm',
      width: mm,
      padding: '5mm 5mm'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _AxioLoaderModule["default"].skeletonBox,
    style: {
      height: '57mm',
      width: '100%'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '1mm',
      marginBottom: '2mm'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _AxioLoaderModule["default"].skeletonBox,
    style: {
      height: '5mm',
      width: '10mm'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _AxioLoaderModule["default"].skeletonBox,
    style: {
      height: '5mm',
      width: '22mm'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: _AxioLoaderModule["default"].skeletonBox,
    style: {
      height: '56mm',
      width: '100%'
    }
  }));
}

AxioLoader.propTypes = {
  mmWidth: _propTypes["default"].number.isRequired //width in mm of the component

};

//# sourceMappingURL=AxioLoader.jsx.map