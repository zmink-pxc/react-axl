import React from 'react';
import AxlConnector from '../src/components/Core/AxlConnector/AxlConnector.jsx';
import AxlModule,{defaultTerminals,defaultLeds} from '@bit/zmink.axioline.axl-module';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  var component = renderer.create(<AxlModule/>)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

    component = renderer.create(<AxlModule partName="AI2 AO2 XC" width={35} raisedMidsection={false} hasTopRow={false} partNumber="1035429" labels={['a','0','1','2','3']} colorCard={{isAnalogIn:true}}>
      <AxlConnector type="POWER" isBlack={true} numRows={4} numCols={1}/>
      <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
      <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
      </AxlModule>);

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(<AxlModule partName="AI2 AO2 XC" width={35} raisedMidsection={false} hasTopRow={false} partNumber="1035429" labels={['a','0','1','2','3']} colorCard={{isAnalogIn:true}}>
      <AxlConnector type="POWER" isBlack={true} numRows={4} numCols={1}/>
      <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
      <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
      </AxlModule>);

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    
    component = renderer.create(<AxlModule partName="AI2 AO2 XC" width={35} terminals={defaultTerminals(12)} leds={defaultLeds(12)} raisedMidsection={false} hasTopRow={false} partNumber="1035429" labels={['a','0','1','2','3']} colorCard={{isAnalogIn:true}}>
      <AxlConnector type="POWER" isBlack={true} numRows={4} numCols={1}/>
      <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
      <AxlConnector type="IO" isBlack={false} numRows={4} numCols={2}/>
      </AxlModule>);

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});