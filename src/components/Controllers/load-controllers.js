import React from 'react';
// const controllersContext = require.context('./', true, /.jsx$/);
// const Controllers = controllersContext.keys().reduce( (controllers, file) => {
// 	const Controller = controllersContext(file).default;
// 	const partNumber = Controller.defaultProps.partNumber;   //file.slice(2, -4); // strip './' and '.js'
//     const partName = Controller.defaultProps.partName;
//     controllers[partNumber] = Controller;
//     controllers[partName] = Controller;
// 	return controllers;
// }, {});

const Controllers = {
    "2404267": {width: 45,component: React.lazy(() => import(/* webpackChunkName: "Axc2152" */ '@bit/zmink.axioline.axc2152'))} 
}

export default Controllers