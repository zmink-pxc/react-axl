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
  .add('Basic',()=><AXL_Connector/>);