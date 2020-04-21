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
    "1035429": {width: 35,component: React.lazy(() => import('./Analog/Combo/AxlAI2AO2XC1H/AxlAI2AO2XC1H.jsx'))},
    "2702072": {width: 35,component: React.lazy(() => import('./Analog/Combo/AxlAI2AO21H/AxlAI2AO21H.jsx'))},
    "2702008": {width: 35,component: React.lazy(() => import('./Analog/Input/AxlAI4UXC1H/AxlAI4UXC1H.jsx'))},
    "2688064": {width: 53.6,component: React.lazy(() => import('./Analog/Input/AxlAI8/AxlAI8.jsx'))},
    "2702525": {width: 53.6,component: React.lazy(() => import('./Analog/Input/AxlAI8W1F/AxlAI8W1F.jsx'))},
    "2701232": {width: 53.6,component: React.lazy(() => import('./Analog/Input/AxlAI8XC1F/AxlAI8XC1F.jsx'))},
    "2688491": {width: 35,component: React.lazy(() => import('./Analog/Input/AxlAI41I1H/AxlAI41I1H.jsx'))},
    "2702007": {width: 35,component: React.lazy(() => import('./Analog/Input/AxlAI41IXC1H/AxlAI41IXC1H.jsx'))},
    "1035430": {width: 35,component: React.lazy(() => import('./Analog/Input/AxlRTD4XC1H/AxlRTD4XC1H.jsx'))},
    "2702120": {width: 53.6,component: React.lazy(() => import('./Analog/Input/AxlRTD8S1F/AxlRTD8S1F.jsx'))},
    "2701235": {width: 53.6,component: React.lazy(() => import('./Analog/Input/AxlRTD8XC1F/AxlRTD8XC1F.jsx'))},
    "2688556": {width: 35,component: React.lazy(() => import('./Analog/Input/AxlRTD41H/AxlRTD41H.jsx'))},
    "2688077": {width: 53.6,component: React.lazy(() => import('./Analog/Input/AxlRTD81F/AxlRTD81F.jsx'))},
    "2702911": {width: 35,component: React.lazy(() => import('./Analog/Input/AxlSGI21H/AxlSGI21H.jsx'))},
    "2702464": {width: 53.6,component: React.lazy(() => import('./Analog/Input/AxlUTH8XC1F/AxlUTH8XC1F.jsx'))},
    "2688598": {width: 35,component: React.lazy(() => import('./Analog/Input/AxlUTH41H/AxlUTH41H.jsx'))},
    "2688417": {width: 53.6,component: React.lazy(() => import('./Analog/Input/AxlUTH81F/AxlUTH81F.jsx'))},
    "2688527": {width: 35,component: React.lazy(() => import('./Analog/Output/AxlAO41H/AxlAO41H.jsx'))},
    "2702017": {width: 35,component: React.lazy(() => import('./Digital/Combo/AxlDI81DO81XC1H/AxlDI81DO81XC1H.jsx'))},
    "2701916": {width: 35,component: React.lazy(() => import('./Digital/Combo/AxlDI81DO811H/AxlDI81DO811H.jsx'))},
    "2701722": {width: 35,component: React.lazy(() => import('./Digital/Input/AxlDI161HS1H/AxlDI161HS1H.jsx'))},
    "2688310": {width: 35,component: React.lazy(() => import('./Digital/Input/AxlDI1611H/AxlDI1611H.jsx'))},
    "2702052": {width: 53.6,component: React.lazy(() => import('./Digital/Input/AxlDI3211F/AxlDI3211F.jsx'))},
    "2700684": {width: 53.6,component: React.lazy(() => import('./Digital/Input/AxlDI821102201F/AxlDI821102201F.jsx'))},
    "2688381": {width: 35,component: React.lazy(() => import('./Digital/Output/AxlDO822A1H/AxlDO822A1H.jsx'))}
}

export default Modules