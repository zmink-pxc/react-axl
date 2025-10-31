import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxlAI41I1H from '../../../../src/components/Modules/Analog/Input/AxlAI41I1H/AxlAI41I1H.jsx';

storiesOf('Modules/Analog/Input/AxlAI41I1H', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlAI41I1H/>);

