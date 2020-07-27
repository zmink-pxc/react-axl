import React from 'react';
import SeModule from '@bit/zmink.axioline.smart-elements.se-module';
import SeConnector from '@bit/zmink.axioline.smart-elements.se-connector';


export default function SeAI4I420(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/></SeModule>
}

SeAI4I420.defaultProps = {
    partName: "AI4 I",
    partNumber: "1088062",
    ledLabels: ['E','','','','','','','','','','','','','','','','','E']
}