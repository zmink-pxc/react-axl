import React from 'react';
// const modulesContext = require.context('./', true, /.jsx$/);
// const Modules = modulesContext.keys().reduce( (modules, file) => {
// 	const Module = modulesContext(file).default;
// 	const partNumber = Module.defaultProps.partNumber;   //file.slice(2, -4); // strip './' and '.js'
//     const partName = Module.defaultProps.partName;
//     modules[partNumber] = Module;
//     modules[partName] = Module;
// 	return modules;
// }, {});

const Modules = {
    "1035429": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlAI2AO2XC1H" */ './Analog/Combo/AxlAI2AO2XC1H/AxlAI2AO2XC1H.jsx'))},
    "2702072": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlAI2AO21H" */ './Analog/Combo/AxlAI2AO21H/AxlAI2AO21H.jsx'))},
    "2702008": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlAI4UXC1H" */ './Analog/Input/AxlAI4UXC1H/AxlAI4UXC1H.jsx'))},
    "2688064": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlAI8" */ './Analog/Input/AxlAI8/AxlAI8.jsx'))},
    "2702525": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlAI8W1F" */ './Analog/Input/AxlAI8W1F/AxlAI8W1F.jsx'))},
    "2701232": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlAI8XC1F" */ './Analog/Input/AxlAI8XC1F/AxlAI8XC1F.jsx'))},
    "2688491": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlAI41I1H" */ './Analog/Input/AxlAI41I1H/AxlAI41I1H.jsx'))},
    "2702007": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlAI41IXC1H" */ './Analog/Input/AxlAI41IXC1H/AxlAI41IXC1H.jsx'))},
    "1035430": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlRTD4XC1H" */ './Analog/Input/AxlRTD4XC1H/AxlRTD4XC1H.jsx'))},
    "2702120": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlRTD8S1F" */ './Analog/Input/AxlRTD8S1F/AxlRTD8S1F.jsx'))},
    "2701235": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlRTD8XC1F" */ './Analog/Input/AxlRTD8XC1F/AxlRTD8XC1F.jsx'))},
    "2688556": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlRTD41H" */ './Analog/Input/AxlRTD41H/AxlRTD41H.jsx'))},
    "2688077": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlRTD81F" */ './Analog/Input/AxlRTD81F/AxlRTD81F.jsx'))},
    "2702911": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlSGI21H" */ './Analog/Input/AxlSGI21H/AxlSGI21H.jsx'))},
    "2702464": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlUTH8XC1F" */ './Analog/Input/AxlUTH8XC1F/AxlUTH8XC1F.jsx'))},
    "2688598": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlUTH41H" */ './Analog/Input/AxlUTH41H/AxlUTH41H.jsx'))},
    "2688417": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlUTH81F" */ './Analog/Input/AxlUTH81F/AxlUTH81F.jsx'))},
    "2688527": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlAO41H" */ './Analog/Output/AxlAO41H/AxlAO41H.jsx'))},
    "2702071": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlDI3DO32H" */ './Digital/Combo/AxlDI83DO832H/AxlDI83DO832H.jsx'))},
    "2702017": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlDI81DO81XC1H" */ './Digital/Combo/AxlDI81DO81XC1H/AxlDI81DO81XC1H.jsx'))},
    "2701916": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlDI81DO811H" */ './Digital/Combo/AxlDI81DO811H/AxlDI81DO811H.jsx'))},
    "2701722": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlDI161HS1H" */ './Digital/Input/AxlDI161HS1H/AxlDI161HS1H.jsx'))},
    "2688310": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlDI1611H" */ './Digital/Input/AxlDI1611H/AxlDI1611H.jsx'))},
    "2688035": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlDI3211F" */ './Digital/Input/AxlDI3211F/AxlDI3211F.jsx'))},
    "2700684": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlDI821102201F" */ './Digital/Input/AxlDI821102201F/AxlDI821102201F.jsx'))},
    "2688381": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlDO822A1H" */ './Digital/Output/AxlDO822A1H/AxlDO822A1H.jsx'))},
    "2702052": {width: 35, component: React.lazy(()=> import(/* webpackChunkName: "AxlDI3212H"*/ './Digital/Input/AxlDI3212H/AxlDI3212H.jsx'))}
 
}

export default Modules