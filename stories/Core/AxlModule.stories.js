import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxlModule from '../../src/components/Core/AxlModule/AxlModule.jsx';

storiesOf('Core/AxlModule', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxlModule raisedMidsection={false} hasTopRow={false} colorCard={{isDigitalIn:true}} width={53.6}/>);

