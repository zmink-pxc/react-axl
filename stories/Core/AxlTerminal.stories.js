import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import AxlTerminal from '../../src/components/Core/AxlTerminal/AxlTerminal.jsx';

storiesOf('Core/AxlTerminal', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlTerminal isBlack={boolean('isBlack',false)} isEnd={boolean('isEnd',false)}/>);

