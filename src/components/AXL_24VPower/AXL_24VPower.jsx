import AXL_Connector from '../AXL_Connector/AXL_Connector.jsx';
import React from 'react';

export default function AXL_24VPower(props){
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

    return (<AXL_Connector terminals={terminals} leds={leds} numRows={4} numCols={1}/>)
}

const terminalLabels = ['a1','a2','b1','b2'];
const ledLabels = ['D','UO','E1','E2'];