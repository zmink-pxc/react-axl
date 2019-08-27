"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var modulesContext = require.context('./', true, /.jsx$/);

var Modules = modulesContext.keys().reduce(function (modules, file) {
  var Module = modulesContext(file)["default"];
  var partNumber = Module.defaultProps.partNumber; //file.slice(2, -4); // strip './' and '.js'

  var partName = Module.defaultProps.partName;
  modules[partNumber] = Module;
  modules[partName] = Module;
  return modules;
}, {});
var _default = Modules;
exports["default"] = _default;

//# sourceMappingURL=load-modules.js.map