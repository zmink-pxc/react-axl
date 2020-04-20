import AxlConnector from '../AxlConnector/AxlConnector.jsx';
import React from 'react';

export default function Axl24VPower(props){

    var terminalArr,ledArr
    if (typeof props.terminals === "undefined"){
        terminalArr = [{},{},{},{}];
        ledArr = [{},{},{},{}];
    }else{
        terminalArr = props.terminals;
        ledArr = props.leds;
    }

    const terminals = terminalArr.map((terminal,index)=>{
        const t = {...terminal};
        t.label = terminalLabels[index];
        return t;
    });
    const leds = ledArr.map((led,index)=>{
        const l = {...led};
        l.label= ledLabels[index];
        return l
    });

    return (<AxlConnector terminals={terminals} leds={leds} numRows={4} numCols={1}/>)
}

const terminalLabels = ['a1','a2','b1','b2'];
const ledLabels = ['D','UO','E1','E2'];