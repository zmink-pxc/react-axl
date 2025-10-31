import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxlPlug from '../../src/components/Core/AxlPlug/AxlPlug.jsx';

storiesOf('Core/AxlPlug', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlPlug/>);

