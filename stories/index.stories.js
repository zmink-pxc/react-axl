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
import PLCNextBackground from '../src/components/PLCNextBackground/PLCNextBackground.jsx';
import Axl24VPower from '../src/components/Core/Axl24VPower/Axl24VPower.jsx';
import AxlDI81DO811H from '../src/components/Modules/Digital/Combo/AxlDI81DO811H/AxlDI81DO811H.jsx';
import AxlDI1611H from '../src/components/Modules/Digital/Input/AxlDI1611H/AxlDI1611H.jsx';
import AxlAI41I1H from '../src/components/Modules/Analog/Input/AxlAI41I1H/AxlAI41I1H.jsx';
import AxlAI8 from '../src/components/Modules/Analog/Input/AxlAI8/AxlAI8.jsx';
import Axc2152 from '../src/components/Controllers/Axc2152/Axc2152.jsx';
import AxioBus from '../src/components/AxioBus/AxioBus.jsx';
import AxioLoader from '../src/components/Utils/AxioLoader/AxioLoader.jsx';


import '../src/components/PLCNextBackground/PLCNextBackground.module.scss';

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
  

  storiesOf('PLCNextBackground',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><PLCNextBackground numForegroundElements={100} numBackgroundElements={100}/>)

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
  .add('Bus props',()=><div style={{width: "400px",height: "500px",boxSizing: 'border-box',padding:'40px 40px',backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','2688310','2702525']} busProps={[{style:{backgroundColor:"red"}}]}/></div>)

  storiesOf('Axioloader',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AxioLoader mmWidth={35}/>)

