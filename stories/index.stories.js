import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

import AXL_LED from '../src/components/AXL_LED/AXL_LED.jsx';

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
  })
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
