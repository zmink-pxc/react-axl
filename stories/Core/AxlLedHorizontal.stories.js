import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import AxlLedHorizontal from '../../src/components/Core/AxlLedHorizontal/AxlLedHorizontal.jsx';

storiesOf('Core/AxlLedHorizontal', module)
  .addDecorator(withKnobs)
  .add('as dynamic variables', () => {
    return (<AxlLedHorizontal isError={boolean('isError', false)} isErrorWarning={boolean('isErrorWarning', false)} isWarning={boolean('isWarning', false)} isActive={boolean('isActive', false)}/>);
  });

