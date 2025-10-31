import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import PLCnextBackground from '../../src/components/PLCnextBackground/PLCnextBackground.jsx';
import '../../src/components/PLCnextBackground/PLCnextBackground.module.scss';

storiesOf('PLCnextBackground', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <PLCnextBackground />);

