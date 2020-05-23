import React from 'react';
import PhoenixBrand from '@core/PhoenixBrand/PhoenixBrand.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  var component = renderer.create(<PhoenixBrand/>)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
});