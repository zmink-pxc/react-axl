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
    "1035429": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlAI2AO2XC1H" */ '@bit/zmink.axioline.analog.combo.axl-ai2-ao2-xc-1h'))},
    "2702072": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlAI2AO21H" */ '@bit/zmink.axioline.analog.combo.axl-ai2-ao2-1h'))},
    "2702008": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlAI4UXC1H" */ '@bit/zmink.axioline.analog.input.axl-ai4u-xc-1h'))},
    "2688064": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlAI8" */ '@bit/zmink.axioline.analog.input.axl-ai8'))},
    "2702525": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlAI8W1F" */ '@bit/zmink.axioline.analog.input.axl-ai8w-1f'))},
    "2701232": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlAI8XC1F" */ '@bit/zmink.axioline.analog.input.axl-ai8-xc-1f'))},
    "2688491": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlAI41I1H" */ '@bit/zmink.axioline.analog.input.axl-ai4-1i-1h'))},
    "2702007": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlAI41IXC1H" */ '@bit/zmink.axioline.analog.input.axl-ai4-1i-xc-1h'))},
    "1035430": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlRTD4XC1H" */ '@bit/zmink.axioline.analog.input.axl-rtd4-xc-1h'))},
    "2702120": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlRTD8S1F" */ '@bit/zmink.axioline.analog.input.axl-rtd8s-1f'))},
    "2701235": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlRTD8XC1F" */ '@bit/zmink.axioline.analog.input.axl-rtd8-xc-1f'))},
    "2688556": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlRTD41H" */ '@bit/zmink.axioline.analog.input.axl-rtd4-1h'))},
    "2688077": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlRTD81F" */ '@bit/zmink.axioline.analog.input.axl-rtd8-1f'))},
    "2702911": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlSGI21H" */ '@bit/zmink.axioline.analog.input.axl-sgi2-1h'))},
    "2702464": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlUTH8XC1F" */ '@bit/zmink.axioline.analog.input.axl-uth8-xc-1f'))},
    "2688598": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlUTH41H" */ '@bit/zmink.axioline.analog.input.axl-uth4-1h'))},
    "2688417": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlUTH81F" */ '@bit/zmink.axioline.analog.input.axl-uth8-1f'))},
    "2688527": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlAO41H" */ '@bit/zmink.axioline.analog.output.axl-ao4-1h'))},
    "2702071": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlDI3DO32H" */ '@bit/zmink.axioline.digital.combo.axl-di83-do83-2h'))},
    "2702017": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlDI81DO81XC1H" */ '@bit/zmink.axioline.digital.output.axl-di81-do81-xc-1h'))},
    "2701916": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlDI81DO811H" */ '@bit/zmink.axioline.digital.output.axl-di81-do81-1h'))},
    "2701722": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlDI161HS1H" */ '@bit/zmink.axioline.digital.input.axl-di16-1hs-1h'))},
    "2688310": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlDI1611H" */ '@bit/zmink.axioline.digital.input.axl-di161-1h'))},
    "2688035": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlDI3211F" */ '@bit/zmink.axioline.digital.input.axl-di321-1f'))},
    "2700684": {width: 53.6,component: React.lazy(() => import(/* webpackChunkName: "AxlDI821102201F" */ '@bit/zmink.axioline.digital.input.axl-di8-2110220-1f'))},
    "2688381": {width: 35,  component: React.lazy(() => import(/* webpackChunkName: "AxlDO822A1H" */ '@bit/zmink.axioline.digital.output.axl-do82-2a-1h'))},
    "2702052": {width: 35, component: React.lazy(()=> import(/* webpackChunkName: "AxlDI3212H"*/ '@bit/zmink.axioline.digital.input.axl-di32-1-2h'))}
 
}

export default Modules