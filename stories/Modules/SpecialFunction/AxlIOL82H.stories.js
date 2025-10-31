import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxlIOL82H from '../../../src/components/Modules/SpecialFunction/AxlIOL82H/AxlIOL82H.jsx';

storiesOf('Modules/Special Function/AxlIOL82H', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlIOL82H/>);

