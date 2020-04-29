import React from 'react';
import SeModule from '@core/SeModule/SeModule.jsx';
import SeConnector from '@core/SeConnector/SeConnector.jsx';

export default function SeAI4I420(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/></SeModule>
}

SeAI4I420.defaultProps = {
    partName: "AI4 I",
    partNumber: "1088062",
    ledLabels: ['E','','','','','','','','','','','','','','','','','E']
}