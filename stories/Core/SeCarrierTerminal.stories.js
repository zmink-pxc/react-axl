import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import SeCarrierTerminal from '../../src/components/Core/SeCarrierTerminal/SeCarrierTerminal.jsx';

storiesOf('Core/SeCarrierTerminal', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <SeCarrierTerminal />);

