"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.combo.axl-ai2-ao2-xc-1h'));
      });
    })
  },
  "2702072": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.combo.axl-ai2-ao2-1h'));
      });
    })
  },
  "2702008": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-ai4u-xc-1h'));
      });
    })
  },
  "2688064": {
    width: 53.6,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-ai8'));
      });
    })
  },
  "2702525": {
    width: 53.6,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-ai8w-1f'));
      });
    })
  },
  "2701232": {
    width: 53.6,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-ai8-xc-1f'));
      });
    })
  },
  "2688491": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-ai4-1i-1h'));
      });
    })
  },
  "2702007": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-ai4-1i-xc-1h'));
      });
    })
  },
  "1035430": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-rtd4-xc-1h'));
      });
    })
  },
  "2702120": {
    width: 53.6,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-rtd8s-1f'));
      });
    })
  },
  "2701235": {
    width: 53.6,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-rtd8-xc-1f'));
      });
    })
  },
  "2688556": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-rtd4-1h'));
      });
    })
  },
  "2688077": {
    width: 53.6,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-rtd8-1f'));
      });
    })
  },
  "2702911": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-sgi2-1h'));
      });
    })
  },
  "2702464": {
    width: 53.6,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-uth8-xc-1f'));
      });
    })
  },
  "2688598": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-uth4-1h'));
      });
    })
  },
  "2688417": {
    width: 53.6,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.input.axl-uth8-1f'));
      });
    })
  },
  "2688527": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.analog.output.axl-ao4-1h'));
      });
    })
  },
  "2702071": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.digital.combo.axl-di83-do83-2h'));
      });
    })
  },
  "2702017": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.digital.output.axl-di81-do81-xc-1h'));
      });
    })
  },
  "2701916": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.digital.output.axl-di81-do81-1h'));
      });
    })
  },
  "2701722": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.digital.input.axl-di16-1hs-1h'));
      });
    })
  },
  "2688310": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.digital.input.axl-di161-1h'));
      });
    })
  },
  "2688035": {
    width: 53.6,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.digital.input.axl-di321-1f'));
      });
    })
  },
  "2700684": {
    width: 53.6,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.digital.input.axl-di8-2110220-1f'));
      });
    })
  },
  "2688381": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.digital.output.axl-do82-2a-1h'));
      });
    })
  },
  "2702052": {
    width: 35,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.digital.input.axl-di32-1-2h'));
      });
    })
  }
};
var _default = Modules;
exports.default = _default;

//# sourceMappingURL=load-modules.js.map