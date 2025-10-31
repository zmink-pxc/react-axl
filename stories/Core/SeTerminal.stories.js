import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import SeTerminal from '../../src/components/Core/SeTerminal/SeTerminal.jsx';

storiesOf('Core/SeTerminal', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <SeTerminal isBlack={boolean('isBlack',false)} isLeft={boolean('isLeft',false)}/>);

