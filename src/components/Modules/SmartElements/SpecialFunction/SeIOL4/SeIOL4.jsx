
import React from 'react';
import SeModule from '@bit/zmink.axioline.smart-elements.se-module';
import SeConnector from '@bit/zmink.axioline.smart-elements.se-connector';

export default function SeIOL4(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/><SeConnector/></SeModule>
}

SeIOL4.defaultProps = {
    partName: "IOL4",
    partNumber: "1088132",
    ledLabels: ['E','CQ1','','','','CQ2','','','','CQ3','','','','CQ4','','','','E']
}