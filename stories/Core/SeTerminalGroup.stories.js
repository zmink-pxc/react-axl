import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import SeTerminalGroup from '../../src/components/Core/SeTerminalGroup/SeTerminalGroup.jsx';

storiesOf('Core/SeTerminalGroup', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <SeTerminalGroup left={boolean('left',false)}/>);

