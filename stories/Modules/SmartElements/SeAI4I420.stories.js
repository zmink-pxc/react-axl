import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import SeAI4I420 from '../../../src/components/Modules/SmartElements/Analog/Input/SeAI4I420/SeAI4I420.jsx';

storiesOf('Modules/SmartElements/SeAI4I420', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <SeAI4I420 />);

