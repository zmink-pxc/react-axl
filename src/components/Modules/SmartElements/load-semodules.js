/**
 * This map contains smart elements components which have part numbers that can be provided
 * via axioline.  Devices such as the SCA and the Carrier components will not provide part numbers and
 * must be generated via logic
 */
import React from 'react';


const SeModules = {
    "1088062": {component: React.lazy(() => import(/* webpackChunkName: "SeAI4I420" */ '@se/Analog/Input/SeAI4I420/SeAI4I420.jsx'))},
    "1088104": {component: React.lazy(() => import(/* webpackChunkName: "SeAI4U010" */ '@se/Analog/Input/SeAI4U010/SeAI4U010.jsx'))},
    "1088106": {component: React.lazy(() => import(/* webpackChunkName: "SeRTD4PT100" */ '@se/Analog/Input/SeRTD4PT100/SeRTD4PT100.jsx'))},
    "1088123": {component: React.lazy(() => import(/* webpackChunkName: "SeAO4I420" */ '@se/Analog/Output/SeAO4I420/SeAO4I420.jsx'))},
    "1088126": {component: React.lazy(() => import(/* webpackChunkName: "SeAO4U010" */ '@se/Analog/Output/SeAO4U010/SeAO4U010.jsx'))},
    "1088127": {component: React.lazy(() => import(/* webpackChunkName: "SeDI161" */ '@se/Digital/Input/SeDI161/SeDI161.jsx'))},
    "1079241": {component: React.lazy(() => import(/* webpackChunkName: "SePSDI83" */ '@se/Digital/Input/SePSDI83/SePSDI83.jsx'))},
    "1088129": {component: React.lazy(() => import(/* webpackChunkName: "SeDO161" */ '@se/Digital/Output/SeDO161/SeDO161.jsx'))},
    "1079231": {component: React.lazy(() => import(/* webpackChunkName: "SePSDO42" */ '@se/Digital/Output/SePSDO42/SePSDO42.jsx'))},
    "1088131": {component: React.lazy(() => import(/* webpackChunkName: "SeCNT1" */ '@se/SpecialFunction/SeCNT1/SeCNT1.jsx'))},
    "1088130": {component: React.lazy(() => import(/* webpackChunkName: "SeINC1SYM" */ '@se/SpecialFunction/SeINC1SYM/SeINC1SYM.jsx'))},
    "1088132": {component: React.lazy(() => import(/* webpackChunkName: "SeIOL4" */ '@se/SpecialFunction/SeIOL4/SeIOL4.jsx'))},
    "1088128": {component: React.lazy(() => import(/* webpackChunkName: "SeRS485" */ '@se/SpecialFunction/SeRS485/SeRS485.jsx'))},
    "1088134": {component: React.lazy(() => import(/* webpackChunkName: "SeSCA" */ '@se/SeSCA/SeSCA.jsx'))}
}

export default SeModules