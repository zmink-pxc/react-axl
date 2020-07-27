/**
 * This map contains smart elements components which have part numbers that can be provided
 * via axioline.  Devices such as the SCA and the Carrier components will not provide part numbers and
 * must be generated via logic
 */
import React from 'react';


const SeModules = {
    "1088062": {component: React.lazy(() => import(/* webpackChunkName: "SeAI4I420" */ '@bit/zmink.axioline.smart-elements.se-ai4-i-420'))},
    "1088104": {component: React.lazy(() => import(/* webpackChunkName: "SeAI4U010" */ '@bit/zmink.axioline.smart-elements.se-ai4-u-010'))},
    "1088106": {component: React.lazy(() => import(/* webpackChunkName: "SeRTD4PT100" */ '@bit/zmink.axioline.smart-elements.se-rtd4-pt100'))},
    "1088123": {component: React.lazy(() => import(/* webpackChunkName: "SeAO4I420" */ '@bit/zmink.axioline.smart-elements.se-ao4-i-420'))},
    "1088126": {component: React.lazy(() => import(/* webpackChunkName: "SeAO4U010" */ '@bit/zmink.axioline.smart-elements.se-ao4-u-010'))},
    "1088127": {component: React.lazy(() => import(/* webpackChunkName: "SeDI161" */ '@bit/zmink.axioline.smart-elements.se-di16-1'))},
    "1079241": {component: React.lazy(() => import(/* webpackChunkName: "SePSDI83" */ '@bit/zmink.axioline.smart-elements.se-psdi8-3'))},
    "1088129": {component: React.lazy(() => import(/* webpackChunkName: "SeDO161" */ '@bit/zmink.axioline.smart-elements.se-do16-1'))},
    "1079231": {component: React.lazy(() => import(/* webpackChunkName: "SePSDO42" */ '@bit/zmink.axioline.smart-elements.se-psdo4-2'))},
    "1088131": {component: React.lazy(() => import(/* webpackChunkName: "SeCNT1" */ '@bit/zmink.axioline.smart-elements.se-cnt1'))},
    "1088130": {component: React.lazy(() => import(/* webpackChunkName: "SeINC1SYM" */ '@bit/zmink.axioline.smart-elements.se-inc1-sym'))},
    "1088132": {component: React.lazy(() => import(/* webpackChunkName: "SeIOL4" */ '@bit/zmink.axioline.smart-elements.se-iol4'))},
    "1088128": {component: React.lazy(() => import(/* webpackChunkName: "SeRS485" */ '@bit/zmink.axioline.smart-elements.se-rs485'))},
    "1088134": {component: React.lazy(() => import(/* webpackChunkName: "SeSCA" */ '@bit/zmink.axioline.smart-elements.se-sca'))}
}

export default SeModules