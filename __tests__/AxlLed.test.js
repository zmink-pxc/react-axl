import React from 'react';
import AxlLed from '../src/components/Core/AxlLed/AxlLed';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  var component = renderer.create(<AxlLed/>)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component = renderer.create(<AxlLed isError={true}/>)
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component = renderer.create(<AxlLed isActive={true}/>)
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component = renderer.create(<AxlLed isWarning={true}/>)
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});