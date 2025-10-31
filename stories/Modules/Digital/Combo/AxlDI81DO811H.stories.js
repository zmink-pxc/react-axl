import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxlDI81DO811H from '../../../../src/components/Modules/Digital/Combo/AxlDI81DO811H/AxlDI81DO811H.jsx';

storiesOf('Modules/Digital/Combo/AxlDI81DO811H', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlDI81DO811H/>);

