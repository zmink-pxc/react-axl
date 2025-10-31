import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import AxlTerminalGroup from '../../src/components/Core/AxlTerminalGroup/AxlTerminalGroup.jsx';

storiesOf('Core/AxlTerminalGroup', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlTerminalGroup pushIn={boolean('pushIn',false)} isBlack={boolean('isBlack',false)} label={text('label','00')} redPlunger={boolean('redPlunger', false)} greenPlunger={boolean('greenPlunger',false)} bluePlunger={boolean('bluePlunger',false)}/>);

