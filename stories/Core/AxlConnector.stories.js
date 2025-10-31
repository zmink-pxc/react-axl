import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxlConnector from '../../src/components/Core/AxlConnector/AxlConnector.jsx';

storiesOf('Core/AxlConnector', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>);

