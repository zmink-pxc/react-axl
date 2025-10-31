import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import AxlColorID from '../../src/components/Core/AxlColorID/AxlColorID.jsx';

storiesOf('Core/AxlColorID', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlColorID 
    isDigitalIn={boolean('isDigitalIn',false)}
    isDigitalOut={boolean('isDigitalOut',true)}
    isComboDigital={boolean('isComboDigital',false)}
    isAnalogOut={boolean('isAnalogOut',false)}
    isAnalogIn={boolean('isAnalogIn',false)}
    isSpecialFn={boolean('isSpecialFn',false)}
    isPwr={boolean('isPwr',false)}
  />);

