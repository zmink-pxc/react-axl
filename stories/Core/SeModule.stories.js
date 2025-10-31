import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import SeModule from '../../src/components/Core/SeModule/SeModule.jsx';
import SeConnector from '../../src/components/Core/SeConnector/SeConnector.jsx';

storiesOf('Core/SeModule', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <SeModule partName={text('partName','AI4 I')}><SeConnector/><SeConnector/></SeModule>);

