import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import AxlConnectorSocket from '../../src/components/Core/AxlConnectorSocket/AxlConnectorSocket.jsx';

storiesOf('Core/AxlConnectorSocket', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlConnectorSocket numRows={number('numRows',2)} numCols={number('numCols',2)}/>);

