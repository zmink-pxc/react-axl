"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SeModules = {
  "1088062": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/Analog/Input/SeAI4I420/SeAI4I420.jsx'));
      });
    })
  },
  "1088104": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/Analog/Input/SeAI4U010/SeAI4U010.jsx'));
      });
    })
  },
  "1088106": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/Analog/Input/SeRTD4PT100/SeRTD4PT100.jsx'));
      });
    })
  },
  "1088123": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/Analog/Output/SeAO4I420/SeAO4I420.jsx'));
      });
    })
  },
  "1088126": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/Analog/Output/SeAO4U010/SeAO4U010.jsx'));
      });
    })
  },
  "1088127": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/Digital/Input/SeDI161/SeDI161.jsx'));
      });
    })
  },
  "1079241": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/Digital/Input/SePSDI83/SePSDI83.jsx'));
      });
    })
  },
  "1088129": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/Digital/Output/SeDO161/SeDO161.jsx'));
      });
    })
  },
  "1079231": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/Digital/Output/SePSDO42/SePSDO42.jsx'));
      });
    })
  },
  "1088131": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/SpecialFunction/SeCNT1/SeCNT1.jsx'));
      });
    })
  },
  "1088130": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/SpecialFunction/SeINC1SYM/SeINC1SYM.jsx'));
      });
    })
  },
  "1088132": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/SpecialFunction/SeIOL4/SeIOL4.jsx'));
      });
    })
  },
  "1088128": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/SpecialFunction/SeRS485/SeRS485.jsx'));
      });
    })
  },
  "1088134": {
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@se/SeSCA/SeSCA.jsx'));
      });
    })
  }
};
var _default = SeModules;
exports["default"] = _default;

//# sourceMappingURL=load-semodules.js.map