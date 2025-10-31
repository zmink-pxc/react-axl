/**
 * This map contains smart elements components which have part numbers that can be provided
 * via axioline.  Devices such as the SCA and the Carrier components will not provide part numbers and
 * must be generated via logic
 */
import React from 'react';


const SeModules = {
    "1088062": {component: React.lazy(() => import(/* webpackChunkName: "SeAI4I420" */ './Analog/Input/SeAI4I420/SeAI4I420'))},
    "1088104": {component: React.lazy(() => import(/* webpackChunkName: "SeAI4U010" */ './Analog/Input/SeAI4U010/SeAI4U010'))},
    "1088106": {component: React.lazy(() => import(/* webpackChunkName: "SeRTD4PT100" */ './Analog/Input/SeRTD4PT100/SeRTD4PT100'))},
    "1088123": {component: React.lazy(() => import(/* webpackChunkName: "SeAO4I420" */ './Analog/Output/SeAO4I420/SeAO4I420'))},
    "1088126": {component: React.lazy(() => import(/* webpackChunkName: "SeAO4U010" */ './Analog/Output/SeAO4U010/SeAO4U010'))},
    "1088127": {component: React.lazy(() => import(/* webpackChunkName: "SeDI161" */ './Digital/Input/SeDI161/SeDI161'))},
    "1079241": {component: React.lazy(() => import(/* webpackChunkName: "SePSDI83" */ './Digital/Input/SePSDI83/SePSDI83'))},
    "1088129": {component: React.lazy(() => import(/* webpackChunkName: "SeDO161" */ './Digital/Output/SeDO161/SeDO161'))},
    "1079231": {component: React.lazy(() => import(/* webpackChunkName: "SePSDO42" */ './Digital/Output/SePSDO42/SePSDO42'))},
    "1088131": {component: React.lazy(() => import(/* webpackChunkName: "SeCNT1" */ './SpecialFunction/SeCNT1/SeCNT1'))},
    "1088130": {component: React.lazy(() => import(/* webpackChunkName: "SeINC1SYM" */ './SpecialFunction/SeINC1SYM/SeINC1SYM'))},
    "1088132": {component: React.lazy(() => import(/* webpackChunkName: "SeIOL4" */ './SpecialFunction/SeIOL4/SeIOL4'))},
    "1088128": {component: React.lazy(() => import(/* webpackChunkName: "SeRS485" */ './SpecialFunction/SeRS485/SeRS485'))},
    "1088134": {component: React.lazy(() => import(/* webpackChunkName: "SeSCA" */ './SeSCA/SeSCA'))}
}

export default SeModules