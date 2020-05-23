import React from 'react';
import SeModule from '@core/SeModule/SeModule.jsx';
import SeConnector from '@core/SeConnector/SeConnector.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  var component = renderer.create(<SeModule/>)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

    component = renderer.create(<SeModule partName={'SeTest'} partNumber={'1111111'} ledLabels={['E','','','','','','','','','','','','','','','','','E']} ><SeConnector/></SeModule>);

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(<SeModule partName={'SeTest'} partNumber={'1111111'} ledLabels={['E','','','','','','','','','','','','','','','','','E']} ><SeConnector isBlack={true}/></SeModule>);

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
   
});