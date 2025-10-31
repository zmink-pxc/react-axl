import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxlDI1611H from '../../../../src/components/Modules/Digital/Input/AxlDI1611H/AxlDI1611H.jsx';

storiesOf('Modules/Digital/Input/AxlDI1611H', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlDI1611H/>);

