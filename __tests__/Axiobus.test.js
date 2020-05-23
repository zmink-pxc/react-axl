import React from 'react';
import AxioBus from '@components/AxioBus/AxioBus.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    var component = renderer.create(<AxioBus busConfiguration={['2404267','2701916','2688310','2702525']}/>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(<div style={{width: "400px",height: "500px",backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267']}/></div>);

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();


    component = renderer.create(<div style={{width: "1500px",height: "312px",boxSizing: 'border-box',padding:'40px 40px',backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','1088127','1088129','1088062','1088123']}/></div>);

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});