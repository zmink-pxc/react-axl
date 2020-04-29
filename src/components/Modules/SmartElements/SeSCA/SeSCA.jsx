import React from 'react';
import SeModule from '@core/SeModule/SeModule.jsx';
import SeConnector from '@core/SeConnector/SeConnector.jsx';

export default function SeSCA(props){
    return <SeModule partName={props.partName}></SeModule>
}

SeSCA.defaultProps = {
    partName: "SC-A",
    partNumber: "1088134",
    ledLabels: ['','','','','','','','','','','','','','','','','','']
}