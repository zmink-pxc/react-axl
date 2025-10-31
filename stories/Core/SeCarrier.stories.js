import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import SeCarrier from '../../src/components/Core/SeCarrier/SeCarrier.jsx';
import SeAI4I420 from '../../src/components/Modules/SmartElements/Analog/Input/SeAI4I420/SeAI4I420.jsx';
import SeSCA from '../../src/components/Modules/SmartElements/SeSCA/SeSCA.jsx';

storiesOf('Core/SeCarrier', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <SeCarrier numModules={4}><SeAI4I420 /><SeSCA /><SeAI4I420 /><SeSCA /></SeCarrier>)
  .add('Shrunk', () => <SeCarrier numModules={4} shrink={true}><SeAI4I420 /><SeSCA /><SeAI4I420 /><SeSCA /></SeCarrier>);

