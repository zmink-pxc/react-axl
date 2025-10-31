import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Axl24VPower from '../../src/components/Core/Axl24VPower/Axl24VPower.jsx';

storiesOf('Core/Axl24VPower', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <Axl24VPower/>);

