import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import SeLed from '../../src/components/Core/SeLed/SeLed.jsx';

storiesOf('Core/SeLed', module)
  .addDecorator(withKnobs)
  .add('with text', () => <SeLed/>)
  .add('as dynamic variables', () => {
    return (<SeLed isErrLed={boolean('isErrLed', false)} isError={boolean('isError', false)} isWarning={boolean('isWarning', false)} isActive={boolean('isActive', false)}/>);
  });

