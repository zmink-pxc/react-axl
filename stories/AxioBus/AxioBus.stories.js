import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AxioBus from '../../src/components/AxioBus/AxioBus.jsx';

var isHover = false;
var pos = '0px';

storiesOf('AxioBus', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <AxioBus busConfiguration={['2404267','2701916','2688310','2702525']}/>)
  .add('Scaling', () => <div style={{width: "400px",height: "500px",backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267']}/></div>)
  .add('Scaling2', () => <div style={{width: "400px",height: "500px",backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','2688310','2702525']}/></div>)
  .add('Scaling with Padding', () => <div style={{width: "400px",height: "500px",boxSizing: 'border-box',padding:'40px 40px',backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','2688310','2702525']}/></div>)
  .add('Bus props', () => <div style={{width: "400px",height: "500px",boxSizing: 'border-box',padding:'40px 40px',backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','2688310','2702525','1088127','1088129','1088062','1088123']} busProps={[{style:{backgroundColor:"red"}},null,null,null,{style:{backgroundColor:"red"}}]}/></div>)
  .add('Basic with Smart Elements', () => <div style={{width: "400px",height: "500px",boxSizing: 'border-box',padding:'40px 40px',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','2688310','2702071','1088127','1088129','1088062','1088123']} /></div>)
  .add('Scaling with Smart Elements', () => <div style={{width: "1500px",height: "312px",boxSizing: 'border-box',padding:'40px 40px',backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','1088127','1088129','1088062','1088123']}/></div>)
  .add('SCA Rendering 1', () => <div style={{width: "1500px",height: "312px",boxSizing: 'border-box',padding:'40px 40px',backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','1088127','1088123','1088062']}/></div>)
  .add('SCA Rendering 2', () => <div style={{width: "1500px",height: "312px",boxSizing: 'border-box',padding:'40px 40px',backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','1088127','1088123']}/></div>)
  .add('SCA Rendering 3', () => <div style={{width: "1500px",height: "312px",boxSizing: 'border-box',padding:'40px 40px',backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','1088127','1088123','1088127','1088123','1088123']}/></div>)
  .add('Uknown Card', () => <div style={{width: "1500px",height: "312px",boxSizing: 'border-box',padding:'40px 40px',backgroundColor: 'orange',position: 'absolute',left:'50px',top: '100px'}}><AxioBus busConfiguration={['2404267','2701916','1088127','1088123','1088127','1088123','xdfasdf']}/></div>);

