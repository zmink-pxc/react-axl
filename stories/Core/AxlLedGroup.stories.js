import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxlLedGroup from '../../src/components/Core/AxlLedGroup/AxlLedGroup.jsx';

storiesOf('Core/AxlLEDGroup', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlLedGroup/>);

