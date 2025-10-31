/**
 * React Axl Library Entry Point
 * Exports all high-level module components (excluding Core components)
 */

// Analog Combo modules
export { default as AxlAI2AO2XC1H } from './components/Modules/Analog/Combo/AxlAI2AO2XC1H/AxlAI2AO2XC1H';
export { default as AxlAI2AO21H } from './components/Modules/Analog/Combo/AxlAI2AO21H/AxlAI2AO21H';

// Analog Input modules
export { default as AxlAI4UXC1H } from './components/Modules/Analog/Input/AxlAI4UXC1H/AxlAI4UXC1H';
export { default as AxlAI8 } from './components/Modules/Analog/Input/AxlAI8/AxlAI8';
export { default as AxlAI8W1F } from './components/Modules/Analog/Input/AxlAI8W1F/AxlAI8W1F';
export { default as AxlAI8XC1F } from './components/Modules/Analog/Input/AxlAI8XC1F/AxlAI8XC1F';
export { default as AxlAI41I1H } from './components/Modules/Analog/Input/AxlAI41I1H/AxlAI41I1H';
export { default as AxlAI41IXC1H } from './components/Modules/Analog/Input/AxlAI41IXC1H/AxlAI41IXC1H';
export { default as AxlRTD4XC1H } from './components/Modules/Analog/Input/AxlRTD4XC1H/AxlRTD4XC1H';
export { default as AxlRTD8S1F } from './components/Modules/Analog/Input/AxlRTD8S1F/AxlRTD8S1F';
export { default as AxlRTD8XC1F } from './components/Modules/Analog/Input/AxlRTD8XC1F/AxlRTD8XC1F';
export { default as AxlRTD41H } from './components/Modules/Analog/Input/AxlRTD41H/AxlRTD41H';
export { default as AxlRTD81F } from './components/Modules/Analog/Input/AxlRTD81F/AxlRTD81F';
export { default as AxlSGI21H } from './components/Modules/Analog/Input/AxlSGI21H/AxlSGI21H';
export { default as AxlUTH8XC1F } from './components/Modules/Analog/Input/AxlUTH8XC1F/AxlUTH8XC1F';
export { default as AxlUTH41H } from './components/Modules/Analog/Input/AxlUTH41H/AxlUTH41H';
export { default as AxlUTH81F } from './components/Modules/Analog/Input/AxlUTH81F/AxlUTH81F';

// Analog Output modules
export { default as AxlAO41H } from './components/Modules/Analog/Output/AxlAO41H/AxlAO41H';

// Digital Combo modules
export { default as AxlDI83DO832H } from './components/Modules/Digital/Combo/AxlDI83DO832H/AxlDI83DO832H';
export { default as AxlDI81DO81XC1H } from './components/Modules/Digital/Combo/AxlDI81DO81XC1H/AxlDI81DO81XC1H';
export { default as AxlDI81DO811H } from './components/Modules/Digital/Combo/AxlDI81DO811H/AxlDI81DO811H';

// Digital Input modules
export { default as AxlDI161HS1H } from './components/Modules/Digital/Input/AxlDI161HS1H/AxlDI161HS1H';
export { default as AxlDI1611H } from './components/Modules/Digital/Input/AxlDI1611H/AxlDI1611H';
export { default as AxlDI3211F } from './components/Modules/Digital/Input/AxlDI3211F/AxlDI3211F';
export { default as AxlDI821102201F } from './components/Modules/Digital/Input/AxlDI821102201F/AxlDI821102201F';
export { default as AxlDI3212H } from './components/Modules/Digital/Input/AxlDI3212H/AxlDI3212H';

// Digital Output modules
export { default as AxlDO822A1H } from './components/Modules/Digital/Output/AxlDO822A1H/AxlDO822A1H';

// Special Function modules
export { default as AxlIOL82H } from './components/Modules/SpecialFunction/AxlIOL82H/AxlIOL82H';

// SmartElements Analog Input
export { default as SeAI4I420 } from './components/Modules/SmartElements/Analog/Input/SeAI4I420/SeAI4I420';
export { default as SeAI4U010 } from './components/Modules/SmartElements/Analog/Input/SeAI4U010/SeAI4U010';
export { default as SeRTD4PT100 } from './components/Modules/SmartElements/Analog/Input/SeRTD4PT100/SeRTD4PT100';

// SmartElements Analog Output
export { default as SeAO4I420 } from './components/Modules/SmartElements/Analog/Output/SeAO4I420/SeAO4I420';
export { default as SeAO4U010 } from './components/Modules/SmartElements/Analog/Output/SeAO4U010/SeAO4U010';

// SmartElements Digital Input
export { default as SeDI161 } from './components/Modules/SmartElements/Digital/Input/SeDI161/SeDI161';
export { default as SePSDI83 } from './components/Modules/SmartElements/Digital/Input/SePSDI83/SePSDI83';

// SmartElements Digital Output
export { default as SeDO161 } from './components/Modules/SmartElements/Digital/Output/SeDO161/SeDO161';
export { default as SePSDO42 } from './components/Modules/SmartElements/Digital/Output/SePSDO42/SePSDO42';

// SmartElements Special Function
export { default as SeCNT1 } from './components/Modules/SmartElements/SpecialFunction/SeCNT1/SeCNT1';
export { default as SeINC1SYM } from './components/Modules/SmartElements/SpecialFunction/SeINC1SYM/SeINC1SYM';
export { default as SeIOL4 } from './components/Modules/SmartElements/SpecialFunction/SeIOL4/SeIOL4';
export { default as SeRS485 } from './components/Modules/SmartElements/SpecialFunction/SeRS485/SeRS485';

// SmartElements SCA
export { default as SeSCA } from './components/Modules/SmartElements/SeSCA/SeSCA';

// Controllers
export { default as Axc2152 } from './components/Controllers/Axc2152/Axc2152';

// High-level components
export { default as AxioBus } from './components/AxioBus/AxioBus';
export { default as PLCnextBackground } from './components/PLCnextBackground/PLCnextBackground';

// Export module maps for part-number lookup (backwards compatibility)
import Modules from './components/Modules/load-modules';
import SeModules from './components/Modules/SmartElements/load-semodules';
import Controllers from './components/Controllers/load-controllers';

export { Modules, SeModules, Controllers };

