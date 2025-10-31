import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Axc2152 from '../../src/components/Controllers/Axc2152/Axc2152.jsx';

storiesOf('Controllers/Axl2152', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <Axc2152 />);

