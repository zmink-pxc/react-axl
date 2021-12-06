"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AxioLoader;

var _react = _interopRequireDefault(require("react"));

var _AxioLoaderModule = _interopRequireDefault(require("./AxioLoader.module.scss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {*} props 
 */
function AxioLoader(props) {
  var skeletonClass = props.disableAnimate ? _AxioLoaderModule.default.skeletonBoxPlain : _AxioLoaderModule.default.skeletonBox;
  var mm = props.mmWidth + "mm";
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: '#8e9291',
      height: '122mm',
      width: mm,
      padding: props.disableAnimate ? 'none' : '5mm 5mm'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: skeletonClass,
    style: {
      height: '57mm',
      width: '100%'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '1mm',
      marginBottom: '2mm'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: skeletonClass,
    style: {
      height: '5mm',
      width: '10mm'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: skeletonClass,
    style: {
      height: '5mm',
      width: '22mm'
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: skeletonClass,
    style: {
      height: '56mm',
      width: '100%'
    }
  }));
}

AxioLoader.propTypes = {
  /**
   * Width in mm of the component
   */
  mmWidth: _propTypes.default.number.isRequired,

  /**
   * Disable the animation and display flat grey boxes
   */
  disableAnimate: _propTypes.default.bool
};

//# sourceMappingURL=AxioLoader.jsx.map