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

// const modulesContext = require.context('./', true, /.jsx$/);
// const Modules = modulesContext.keys().reduce( (modules, file) => {
// 	const Module = modulesContext(file).default;
// 	const partNumber = Module.defaultProps.partNumber;   //file.slice(2, -4); // strip './' and '.js'
//     const partName = Module.defaultProps.partName;
//     modules[partNumber] = Module;
//     modules[partName] = Module;
// 	return modules;
// }, {});
var Modules = {
  "1035429": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Combo/AxlAI2AO2XC1H/AxlAI2AO2XC1H.jsx'));
      });
    })
  },
  "2702072": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Combo/AxlAI2AO21H/AxlAI2AO21H.jsx'));
      });
    })
  },
  "2702008": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlAI4UXC1H/AxlAI4UXC1H.jsx'));
      });
    })
  },
  "2688064": {
    width: 53.6,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlAI8/AxlAI8.jsx'));
      });
    })
  },
  "2702525": {
    width: 53.6,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlAI8W1F/AxlAI8W1F.jsx'));
      });
    })
  },
  "2701232": {
    width: 53.6,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlAI8XC1F/AxlAI8XC1F.jsx'));
      });
    })
  },
  "2688491": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlAI41I1H/AxlAI41I1H.jsx'));
      });
    })
  },
  "2702007": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlAI41IXC1H/AxlAI41IXC1H.jsx'));
      });
    })
  },
  "1035430": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlRTD4XC1H/AxlRTD4XC1H.jsx'));
      });
    })
  },
  "2702120": {
    width: 53.6,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlRTD8S1F/AxlRTD8S1F.jsx'));
      });
    })
  },
  "2701235": {
    width: 53.6,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlRTD8XC1F/AxlRTD8XC1F.jsx'));
      });
    })
  },
  "2688556": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlRTD41H/AxlRTD41H.jsx'));
      });
    })
  },
  "2688077": {
    width: 53.6,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlRTD81F/AxlRTD81F.jsx'));
      });
    })
  },
  "2702911": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlSGI21H/AxlSGI21H.jsx'));
      });
    })
  },
  "2702464": {
    width: 53.6,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlUTH8XC1F/AxlUTH8XC1F.jsx'));
      });
    })
  },
  "2688598": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlUTH41H/AxlUTH41H.jsx'));
      });
    })
  },
  "2688417": {
    width: 53.6,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Input/AxlUTH81F/AxlUTH81F.jsx'));
      });
    })
  },
  "2688527": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Analog/Output/AxlAO41H/AxlAO41H.jsx'));
      });
    })
  },
  "2702017": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Digital/Combo/AxlDI81DO81XC1H/AxlDI81DO81XC1H.jsx'));
      });
    })
  },
  "2701916": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Digital/Combo/AxlDI81DO811H/AxlDI81DO811H.jsx'));
      });
    })
  },
  "2701722": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Digital/Input/AxlDI161HS1H/AxlDI161HS1H.jsx'));
      });
    })
  },
  "2688310": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Digital/Input/AxlDI1611H/AxlDI1611H.jsx'));
      });
    })
  },
  "2702052": {
    width: 53.6,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Digital/Input/AxlDI3211F/AxlDI3211F.jsx'));
      });
    })
  },
  "2700684": {
    width: 53.6,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Digital/Input/AxlDI821102201F/AxlDI821102201F.jsx'));
      });
    })
  },
  "2688381": {
    width: 35,
    component: _react["default"].lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@modules/Digital/Output/AxlDO822A1H/AxlDO822A1H.jsx'));
      });
    })
  }
};
var _default = Modules;
exports["default"] = _default;

//# sourceMappingURL=load-modules.js.map