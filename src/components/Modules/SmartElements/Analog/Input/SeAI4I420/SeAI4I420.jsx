import React from 'react';
import SeModule from '@core/SeModule/SeModule.jsx';
import SeConnector from '@core/SeConnector/SeConnector.jsx';

export default function SeAI4I420(props){
    return <SeModule partName={props.partName}><SeConnector/></SeModule>
}

SeAI4I420.defaultProps = {
    partName: "AI4 I",
    partNumber: "1088062",
    ledLabels: ['E','','','','','','','','','','','','','','','','','E']
}