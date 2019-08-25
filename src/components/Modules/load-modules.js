const modulesContext = require.context('./', true, /.jsx$/);
const Modules = modulesContext.keys().reduce( (modules, file) => {
	const Module = modulesContext(file).default;
	const partNumber = Module.defaultProps.partNumber;   //file.slice(2, -4); // strip './' and '.js'
    const partName = Module.defaultProps.partName;
    modules[partNumber] = Module;
    modules[partName] = Module;
	return modules;
}, {});

export default Modules