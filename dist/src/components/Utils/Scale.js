"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRenderedSizes = useRenderedSizes;
exports.useParentSize = useParentSize;
exports.ScaleRendered = ScaleRendered;
exports.AxioBusScale = AxioBusScale;

var _react = _interopRequireWildcard(require("react"));

var _unitToPx = _interopRequireDefault(require("unit-to-px"));

var _useViewportSizes3 = _interopRequireDefault(require("use-viewport-sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var mmToPx = (0, _unitToPx["default"])('mm');

function useRenderedSizes(props) {
  var ref = (0, _react.useRef)(); //const parentRef = useRef(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      childSize = _useState2[0],
      setChildSize = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      parentSize = _useState4[0],
      setParentSize = _useState4[1];

  (0, _react.useEffect)(function () {
    if (ref.current) {
      var width = 0;
      var height = 0;
      var parentRect = ref.current.parentElement.getBoundingClientRect();
      setParentSize({
        width: parentRect.width,
        height: parentRect.height
      });
      ref.current.children[0].children.forEach(function (childEl) {
        //console.log(childEl);
        var rect = childEl.getBoundingClientRect();
        width += rect.width;
        height = rect.height;
      });
      setChildSize({
        width: width,
        height: height
      });
      console.log("Children height ".concat(height, ", width ").concat(width));
    }
  }, [ref]);
  return [ref, parentSize, childSize];
} //get the size in px of the parent component


function useParentSize(props) {
  var ref = (0, _react.useRef)(); //const [parentSize,setParentSize] = useState(null);

  var parentSize = null;

  if (ref.current) {
    var elementWidth, elementHeight;
    var element = ref.current;
    var computedStyle = getComputedStyle(element);
    elementHeight = element.clientHeight;
    elementWidth = element.clientWidth;
    elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    parentSize = {
      width: elementWidth,
      height: elementHeight
    };
  }

  return [ref, parentSize];
}

function ScaleRendered(props) {
  var _useRenderedSizes = useRenderedSizes(),
      _useRenderedSizes2 = _slicedToArray(_useRenderedSizes, 3),
      ref = _useRenderedSizes2[0],
      parentSize = _useRenderedSizes2[1],
      childSize = _useRenderedSizes2[2];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      rendered = _useState6[0],
      setRendered = _useState6[1];

  (0, _react.useEffect)(function () {
    setRendered(true);
  }, []);
  var t = null;
  var style = {
    display: 'none'
  };

  if (parentSize && childSize) {
    t = calcTransform(childSize, parentSize);
  }

  if (t && t < 1) {
    style.transform = "scale(".concat(t, ")");
  }

  if (rendered === true) {
    style.display = 'block';
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    style: style
  }, props.children);
}
/**
 * Uses axio default size in mm props to transform the bus to fit
 * inside parent component
 *
 * @export
 * @param {*} props
 * @returns
 */


function AxioBusScale(props) {
  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      rendered = _useState8[0],
      setRendered = _useState8[1];

  var _useParentSize = useParentSize(),
      _useParentSize2 = _slicedToArray(_useParentSize, 2),
      ref = _useParentSize2[0],
      parentSize = _useParentSize2[1];

  var _useViewportSizes = (0, _useViewportSizes3["default"])(250),
      _useViewportSizes2 = _slicedToArray(_useViewportSizes, 2),
      vpWidth = _useViewportSizes2[0],
      vpHeight = _useViewportSizes2[1];

  var childSize = null;
  var style = {};
  (0, _react.useEffect)(function () {
    setRendered(true);
  }, []);
  var elements = null;

  if (props.children[0].type.toString() === "Symbol(react.suspense)") {
    elements = props.children.map(function (child) {
      return child.props.fallback;
    });
  } else {
    elements = props.children;
  }

  childSize = getBusSize(elements);
  var t = null;

  if (parentSize && childSize) {
    t = calcTransform(childSize, parentSize);
  }

  if (t && t < 1) {
    style.transform = "scale(".concat(t, ")"); //style.transformOrigin = 'left';
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    className: props.className,
    style: style
  }, rendered === true && parentSize ? props.children : false);
}

function calcTransform(childSize, parentSize) {
  var ty = parentSize.height / childSize.height;
  var tx = parentSize.width / childSize.width;
  return ty < tx ? ty : tx;
}

function getAxioSize(component) {
  var oH = component.props.mmHeight || 122;
  var oW = component.props.mmWidth; // if (!component.props.mmHeight){throw Error('Component doesnt have mmHeight value in default props')}
  // if (!component.props.mmWidth){throw Error('Component doesnt have mmWidth default prop')}

  var h = oH * mmToPx;
  var w = oW * mmToPx;
  return {
    width: w,
    height: h
  };
} //current expects single row bus


function getBusSize(componentArr) {
  var totalWidth = 0;
  var totalHeight = 0;
  componentArr.forEach(function (component) {
    var cSize = getAxioSize(component);
    totalWidth += cSize.width;
    totalHeight = cSize.height;
  });
  return {
    width: totalWidth,
    height: totalHeight
  };
}

//# sourceMappingURL=Scale.jsx.map