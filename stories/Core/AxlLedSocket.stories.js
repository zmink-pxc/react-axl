import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import AxlLedSocket from '../../src/components/Core/AxlLedSocket/AxlLedSocket.jsx';

storiesOf('Core/AxlLedSocket', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlLedSocket numRows={number('numRows',2)} numCols={number('numCols',2)}/>);

