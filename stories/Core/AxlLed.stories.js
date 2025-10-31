import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import AxlLed from '../../src/components/Core/AxlLed/AxlLed.jsx';

storiesOf('Core/AxlLed', module)
  .addDecorator(withKnobs)
  .add('with text', () => <AxlLed/>)
  .add('as dynamic variables', () => {
    return (<AxlLed isError={boolean('isError', false)} isWarning={boolean('isWarning', false)} isActive={boolean('isActive', false)}/>);
  });

