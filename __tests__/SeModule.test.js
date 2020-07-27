import React from 'react';
import SeModule from '@bit/zmink.axioline.smart-elements.se-module';
import SeConnector from '@bit/zmink.axioline.smart-elements.se-connector';
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