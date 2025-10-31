import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Button } from '@storybook/react/demo';
import AxlPlunger from '../../src/components/Core/AxlPlunger/AxlPlunger.jsx';

storiesOf('Core/AxlPlunger', module)
  .addDecorator(withKnobs)
  .add('with text', () => <AxlPlunger pushIn={boolean('pushIn', false)} red={boolean('red', false)} green={boolean('green', false)} blue={boolean('blue', false)}/>)
  .add('as dynamic variables', () => {
    return (<AxlPlunger/>);
  })
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

