import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import SeConnector from '../../src/components/Core/SeConnector/SeConnector.jsx';

storiesOf('Core/SeConnector', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <SeConnector />);

