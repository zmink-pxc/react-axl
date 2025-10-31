import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import SeSCA from '../../../src/components/Modules/SmartElements/SeSCA/SeSCA.jsx';

storiesOf('Modules/SmartElements/SeSCA', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <SeSCA />);

