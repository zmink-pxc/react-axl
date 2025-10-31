import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxlDI83DO832H from '../../../../src/components/Modules/Digital/Combo/AxlDI83DO832H/AxlDI83DO832H.jsx';

storiesOf('Modules/Digital/Combo/AxlDI83DO832H', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlDI83DO832H/>);

