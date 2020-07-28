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

// const controllersContext = require.context('./', true, /.jsx$/);
// const Controllers = controllersContext.keys().reduce( (controllers, file) => {
// 	const Controller = controllersContext(file).default;
// 	const partNumber = Controller.defaultProps.partNumber;   //file.slice(2, -4); // strip './' and '.js'
//     const partName = Controller.defaultProps.partName;
//     controllers[partNumber] = Controller;
//     controllers[partName] = Controller;
// 	return controllers;
// }, {});
var Controllers = {
  "2404267": {
    width: 45,
    component: _react.default.lazy(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@bit/zmink.axioline.axc2152'));
      });
    })
  }
};
var _default = Controllers;
exports.default = _default;

//# sourceMappingURL=load-controllers.js.map