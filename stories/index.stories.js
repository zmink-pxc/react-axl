import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number,object } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

import AXL_LED from '../src/components/AXL_LED/AXL_LED.jsx';
import AXL_Plunger from '../src/components/AXL_Plunger/AXL_Plunger.jsx';
import AXL_Terminal from '../src/components/AXL_Terminal/AXL_Terminal.jsx';
import AXL_TerminalGroup from '../src/components/AXL_TerminalGroup/AXL_TerminalGroup.jsx';
import AXL_LED_Group from '../src/components/AXL_LED_Group/AXL_LED_Group.jsx';
import AXL_Connector from '../src/components/AXL_Connector/AXL_Connector.jsx';
import AXL_Plug from '../src/components/AXL_Plug/AXL_Plug.jsx';
import AXL_Latch from '../src/components/AXL_Latch/AXL_Latch.jsx';
import AXL_LED_Socket from '../src/components/AXL_LED_Socket/AXL_LED_Socket.jsx';
import AXL_ColorID from '../src/components/AXL_ColorID/AXL_ColorID.jsx';
import AXL_Connector_Socket from '../src/components/AXL_Connector_Socket/AXL_Connector_Socket.jsx';
import AXL_Module from '../src/components/AXL_Module/AXL_Module.jsx';
import PLCNextBackground from '../src/components/PLCNextBackground/PLCNextBackground.jsx';

//const stories = storiesOf('Storybook Knobs', module);


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('AXL_LED', module)
  .addDecorator(withKnobs)
  .add('with text', () => <AXL_LED/>)
  .add('as dynamic variables', () => {
    
    return (<AXL_LED isError={boolean('isError', false)} isWarning={boolean('isWarning', false)} isActive={boolean('isActive', false)}/>);
  });

  storiesOf('AXL_Plunger', module)
  .addDecorator(withKnobs)
  .add('with text', () => <AXL_Plunger pushIn={boolean('pushIn', false)} red={boolean('red', false)} green={boolean('green', false)} blue={boolean('blue', false)}/>)
  .add('as dynamic variables', () => {
    
    return (<AXL_Plunger/>);
  })
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('AXL_Terminal', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AXL_Terminal isBlack={boolean('isBlack',false)} isEnd={boolean('isEnd',false)}/>)

  storiesOf('AXL_TerminalGroup', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AXL_TerminalGroup pushIn={boolean('pushIn',false)} isBlack={boolean('isBlack',false)} label={text('label','00')} redPlunger={boolean('redPlunger', false)} greenPlunger={boolean('greenPlunger',false)} bluePlunger={boolean('bluePlunger',false)}/>)


  storiesOf('AXL_LED_Group',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AXL_LED_Group/>);

  storiesOf('AXL_Connector',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AXL_Connector pushInLatch={boolean('pushInLatch',false)}/>);

  storiesOf('AXL_Plug',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AXL_Plug/>)

  storiesOf('AXL_Latch',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AXL_Latch pushedIn={boolean('pushIn',false)}/>);

  storiesOf('AXL_LED_Socket',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AXL_LED_Socket numRows={number('numRows',2)} numCols={number('numCols',2)}/>)

  storiesOf('AXL_ColorID',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AXL_ColorID isDigitalIn={boolean('isDigitalIn',false)}
  isDigitalOut={boolean('isDigitalOut',true)}
  isAnalogOut={boolean('isAnalogOut',false)}
  isAnalogIn={boolean('isAnalogIn',false)}
  isSpecialFn={boolean('isSpecialFn',false)}
  isPwr={boolean('isPwr',false)}
  />)

  storiesOf('AXL_Connector_Socket',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AXL_Connector_Socket numRows={number('numRows',2)} numCols={number('numCols',2)}/>)


  storiesOf('AXL_Module',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><AXL_Module raisedMidsection={false} hasTopRow={false} colorCard={{isDigitalIn:true}} width={53.6}/>)

  storiesOf('PLCNextBackground',module)
  .addDecorator(withKnobs)
  .add('Basic',()=><PLCNextBackground numForegroundElements={10} numBackgroundElements={30}/>)