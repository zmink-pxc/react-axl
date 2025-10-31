import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import SePSDI83 from '../../../src/components/Modules/SmartElements/Digital/Input/SePSDI83/SePSDI83.jsx';

storiesOf('Modules/SmartElements/SePSDI83', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <SePSDI83 />);

