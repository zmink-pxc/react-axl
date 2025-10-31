import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxlAI8 from '../../../../src/components/Modules/Analog/Input/AxlAI8/AxlAI8.jsx';

storiesOf('Modules/Analog/Input/AxlAI8', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlAI8/>);

