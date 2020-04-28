"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AxioBusModule = _interopRequireDefault(require("./AxioBus.module.scss"));

var _reactMotion = require("react-motion");

var _Scale = require("@utils/Scale.jsx");

var _AxioLoader = _interopRequireDefault(require("@utils/AxioLoader/AxioLoader.jsx"));

var _loadModules = _interopRequireDefault(require("@modules/load-modules.js"));

var _loadControllers = _interopRequireDefault(require("@controllers/load-controllers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Devices = Object.assign({}, _loadControllers["default"], _loadModules["default"]);
/**
 * Renders axiobus components configured via part numbers
 * 
 * @param {Array} busConfiguration Array of part numbers of devices to render
 */

var AxioBus = /*#__PURE__*/function (_React$Component) {
  _inherits(AxioBus, _React$Component);

  var _super = _createSuper(AxioBus);

  function AxioBus(props) {
    var _this;

    _classCallCheck(this, AxioBus);

    _this = _super.call(this, props); //this.deviceDictionary = deviceDictionary;

    _this.defaultStyles = _this.props.busConfiguration.map(function (key) {
      return {
        y: 1000
      };
    });
    return _this;
  }

  _createClass(AxioBus, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var bus = this.props.busConfiguration.map(function (key, index) {
        var Device = Devices[key].component;
        var deviceProps = _this2.props.busProps ? _this2.props.busProps.slice()[index] : null;
        return /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          key: "s".concat(key),
          fallback: /*#__PURE__*/_react["default"].createElement(_AxioLoader["default"], {
            key: "l".concat(key),
            mmWidth: Devices[key].width
          })
        }, /*#__PURE__*/_react["default"].createElement(Device, _extends({
          key: "c".concat(key)
        }, deviceProps)));
      });
      var containerClass = (0, _classnames["default"])([_AxioBusModule["default"].base], _defineProperty({}, _AxioBusModule["default"].wrap, this.props.wrap), _defineProperty({}, _AxioBusModule["default"].flexLeft, this.props.left === true));
      return /*#__PURE__*/_react["default"].createElement(_Scale.AxioBusScale, {
        className: containerClass
      }, bus);
    }
  }]);

  return AxioBus;
}(_react["default"].Component);

exports["default"] = AxioBus;
AxioBus.propTypes = {
  busConfiguration: _propTypes["default"].arrayOf(_propTypes["default"].string),
  busProps: _propTypes["default"].arrayOf(_propTypes["default"].object),
  height: _propTypes["default"].any,
  width: _propTypes["default"].any,
  partHeight: _propTypes["default"].any,
  wrap: _propTypes["default"].bool,
  left: _propTypes["default"].bool
};
AxioBus.defaultProps = {
  wrap: false,
  left: false
};

//# sourceMappingURL=AxioBus.jsx.map