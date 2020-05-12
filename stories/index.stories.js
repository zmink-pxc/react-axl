import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number,object } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

import AxlLed from '../src/components/Core/AxlLed/AxlLed.jsx';
import AxlLedHorizontal from '../src/components/Core/AxlLedHorizontal/AxlLedHorizontal.jsx';
import AxlPlunger from '../src/components/Core/AxlPlunger/AxlPlunger.jsx';
import AxlTerminal from '../src/components/Core/AxlTerminal/AxlTerminal.jsx';
import AxlTerminalGroup from '../src/components/Core/AxlTerminalGroup/AxlTerminalGroup.jsx';
import AxlLedGroup from '../src/components/Core/AxlLedGroup/AxlLedGroup.jsx';
import AxlConnector from '../src/components/Core/AxlConnector/AxlConnector.jsx';
import AxlPlug from '../src/components/Core/AxlPlug/AxlPlug.jsx';
import AxlLatch from '../src/components/Core/AxlLatch/AxlLatch.jsx';
import AxlLedSocket from '../src/components/Core/AxlLedSocket/AxlLedSocket.jsx';
import AxlColorID from '../src/components/Core/AxlColorID/AxlColorID.jsx';
import AxlConnectorSocket from '../src/components/Core/AxlConnectorSocket/AxlConnectorSocket.jsx';
import AxlModule from '../src/components/Core/AxlModule/AxlModule.jsx';
import PLCnextBackground from '../src/components/PLCnextBackground/PLCnextBackground.jsx';
import Axl24VPower from '../src/components/Core/Axl24VPower/Axl24VPower.jsx';
import AxlDI81DO811H from '../src/components/Modules/Digital/Combo/AxlDI81DO811H/AxlDI81DO811H.jsx';
import AxlDI1611H from '../src/components/Modules/Digital/Input/AxlDI1611H/AxlDI1611H.jsx';
import AxlAI41I1H from '../src/components/Modules/Analog/Input/AxlAI41I1H/AxlAI41I1H.jsx';
import AxlAI8 from '../src/components/Modules/Analog/Input/AxlAI8/AxlAI8.jsx';
import Axc2152 from '../src/components/Controllers/Axc2152/Axc2152.jsx';
import AxioBus from '../src/components/AxioBus/AxioBus.jsx';
import AxioLoader from '../src/components/Utils/AxioLoader/AxioLoader.jsx';

import SeLock from '../src/components/Core/SeLock/SeLock.jsx';
import SeLed from '../src/components/Core/SeLed/SeLed.jsx';
import SeTerminal from '../src/components/Core/SeTerminal/SeTerminal.jsx';
import SePlunger from '../src/components/Core/SePlunger/SePlunger.jsx';
import SeTerminalGroup from '../src/components/Core/SeTerminalGroup/SeTerminalGroup.jsx';
import SeConnector from '../src/components/Core/SeConnector/SeConnector.jsx';
import SeModule from '../src/components/Core/SeModule/SeModule.jsx';
import SeCarrier from '../src/components/Core/SeCarrier/SeCarrier.jsx';
import SeCarrierTerminal from '../src/components/Core/SeCarrierTerminal/SeCarrierTerminal.jsx';

import SeAI4I420 from '../src/components/Modules/SmartElements/Analog/Input/SeAI4I420/SeAI4I420.jsx';
import SePSDI83 from '../src/components/Modules/SmartElements/Digital/Input/SePSDI83/SePSDI83.jsx';
import SeSCA from '../src/components/Modules/SmartElements/SeSCA/SeSCA.jsx';

import '../src/components/PLCnextBackground/PLCnextBackground.module.scss';

//const stories = storiesOf('Storybook Knobs', module);


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

  storiesOf('AxlLed', module)
  .addDecorator(withKnobs)
  .add('with text', () => <AxlLED/>)
  .add('as dynamic variables', () => {
    
    return (<AxlLed isError={boolean('isError', false)} isWarning={boolean('isWarning', false)} isActive={boolean('isActive', false)}/>);
  });

  storiesOf('AxlLedHorizontal',module)
  .addDecorator(withKnobs)
  .add('as dynamic variables', () => {
    
    return (<AxlLedHorizontal isError={boolean('isError', false)} isErrorWarning={boolean('isErrorWarning', false)} isWarning={boolean('isWarning', false)} isActive={boolean('isActive', false)}/>);
  });


  storiesOf('AxlPlunger', module)
  .addDecorator(withKnobs)
  .add('with text', () => <AxlPlunger pushIn={boolean('pushIn', false)} red={boolean('red', false)} green={boolean('green', false)} blue={boolean('blue', false)}/>)
  .add('as dynamic variables', () => {
    
    return (<AxlPlunger/>);
  })
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('AxlTerminal', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlTerminal isBlack={boolean('isBlack',false)} isEnd={boolean('isEnd',false)}/>)

  storiesOf('AxlTerminalGroup', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlTerminalGroup pushIn={boolean('pushIn',false)} isBlack={boolean('isBlack',false)} label={text('label','00')} redPlunger={boolean('redPlunger', false)} greenPlunger={boolean('greenPlunger',false)} bluePlunger={boolean('bluePlunger',false)}/>)


  storiesOf('AxlLEDGroup',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxlLedGroup/>);

  storiesOf('AxlConnector',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxlConnector pushInLatch={boolean('pushInLatch',false)}/>);

  storiesOf('Axl24VPower',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><Axl24VPower/>)

  storiesOf('AxlPlug',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxlPlug/>)

  storiesOf('AxlLatch',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxlLatch pushedIn={boolean('pushIn',false)}/>);

  storiesOf('AxlLEDSocket',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxlLEDSocket numRows={number('numRows',2)} numCols={number('numCols',2)}/>)

  storiesOf('AxlColorID',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxlColorID isDigitalIn={boolean('isDigitalIn',false)}
  isDigitalOut={boolean('isDigitalOut',true)}
  isComboDigital={boolean('isComboDigital',false)}
  isAnalogOut={boolean('isAnalogOut',false)}
  isAnalogIn={boolean('isAnalogIn',false)}
  isSpecialFn={boolean('isSpecialFn',false)}
  isPwr={boolean('isPwr',false)}
  />)

  storiesOf('AxlConnectorSocket',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxlConnectorSocket numRows={number('numRows',2)} numCols={number('numCols',2)}/>)


  storiesOf('AxlModule',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxlModule raisedMidsection={false} hasTopRow={false} colorCard={{isDigitalIn:true}} width={53.6}/>)

  storiesOf('AxlDI81DO811H',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxlDI81DO811H/>)

  storiesOf('AxlDI1611H',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxlDI1611H/>)

  storiesOf('AxlAI41I1H',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxlAI41I1H/>)
  
  storiesOf('AxlAI8',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxlAI8/>)
  

  storiesOf('PLCnextBackground',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><PLCnextBackground />)

  storiesOf('Axl2152',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><Axc2152 />)

  var isHover = false;
  var pos = '0px';

  storiesOf('AxioBus',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxioBus busConfiguration={['2404267','2701916','2688310','2702525']}/>)
  .add('Scaling',()=><div style={{width: "400px",height: "500px",backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267']}/></div>)
  .add('Scaling2',()=><div style={{width: "400px",height: "500px",backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','2688310','2702525']}/></div>)
  .add('Scaling with Padding',()=><div style={{width: "400px",height: "500px",boxSizing: 'border-box',padding:'40px 40px',backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','2688310','2702525']}/></div>)
  .add('Bus props',()=><div style={{width: "400px",height: "500px",boxSizing: 'border-box',padding:'40px 40px',backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','2688310','2702525','1088127','1088129','1088062','1088123']} busProps={[{style:{backgroundColor:"red"}},null,null,null,{style:{backgroundColor:"red"}}]}/></div>)
  .add('Basic with Smart Elements',()=><div style={{width: "400px",height: "500px",boxSizing: 'border-box',padding:'40px 40px',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','2688310','2702525','1088127','1088129','1088062','1088123']} /></div>)
  .add('Scaling with Smart Elements',()=><div style={{width: "1500px",height: "312px",boxSizing: 'border-box',padding:'40px 40px',backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','1088127','1088129','1088062','1088123']}/></div>)


  storiesOf('Axioloader',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxioLoader mmWidth={35}/>)

  storiesOf('SeLock', module)
  .add('Basic', () => <SeLock/>)

  storiesOf('SeLed', module)
  .addDecorator(withKnobs)
  .add('with text', () => <SeLed/>)
  .add('as dynamic variables', () => {
    
    return (<SeLed isErrLed={boolean('isErrLed', false)} isError={boolean('isError', false)} isWarning={boolean('isWarning', false)} isActive={boolean('isActive', false)}/>);
  });

  storiesOf('SeTerminal', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <SeTerminal isBlack={boolean('isBlack',false)} isLeft={boolean('isLeft',false)}/>)

  storiesOf('SePlunger', module)
  .addDecorator(withKnobs)
  .add('with text', () => <SePlunger pushIn={boolean('pushIn', false)} red={boolean('red', false)} green={boolean('green', false)} blue={boolean('blue', false)}/>)
  .add('as dynamic variables', () => {
    
    return (<SePlunger/>);
  })
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('SeTerminalGroup', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <SeTerminalGroup left={boolean('left',false)}/>)

  storiesOf('SeConnector',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><SeConnector />)

  storiesOf('SeModule',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><SeModule partName={text('partName','AI4 I')}><SeConnector/><SeConnector/></SeModule>)

  storiesOf('SeSCA',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><SeSCA />)

  storiesOf('SeAI4I420',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><SeAI4I420 />)

  
  storiesOf('SePSDI83',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><SePSDI83 />)

  storiesOf('SeCarrierTerminal',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><SeCarrierTerminal />)

  SeCarrier
  storiesOf('SeCarrier',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><SeCarrier numModules={4}><SeAI4I420 /><SeSCA /><SeAI4I420 /><SeSCA /></SeCarrier>)
  .add('Shrunk',()=><SeCarrier numModules={4} shrink={true}><SeAI4I420 /><SeSCA /><SeAI4I420 /><SeSCA /></SeCarrier>)

  