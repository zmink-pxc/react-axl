import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import AxlLatch from '../../src/components/Core/AxlLatch/AxlLatch.jsx';

storiesOf('Core/AxlLatch', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlLatch pushedIn={boolean('pushIn',false)}/>);

