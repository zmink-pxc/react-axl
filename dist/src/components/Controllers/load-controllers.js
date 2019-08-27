"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var controllersContext = require.context('./', true, /.jsx$/);

var Controllers = controllersContext.keys().reduce(function (controllers, file) {
  var Controller = controllersContext(file)["default"];
  var partNumber = Controller.defaultProps.partNumber; //file.slice(2, -4); // strip './' and '.js'

  var partName = Controller.defaultProps.partName;
  controllers[partNumber] = Controller;
  controllers[partName] = Controller;
  return controllers;
}, {});
var _default = Controllers;
exports["default"] = _default;

//# sourceMappingURL=load-controllers.js.map