import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxlDI3212H from '../../../../src/components/Modules/Digital/Input/AxlDI3212H/AxlDI3212H.jsx';

storiesOf('Modules/Digital/Input/AxlDI3212H', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlDI3212H/>);

