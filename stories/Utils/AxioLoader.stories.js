import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxioLoader from '../../src/components/Utils/AxioLoader/AxioLoader.jsx';

storiesOf('Utils/Axioloader', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxioLoader mmWidth={35}/>);

