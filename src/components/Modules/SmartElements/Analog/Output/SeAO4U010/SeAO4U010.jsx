import React from 'react';
import SeModule from '@core/SeModule/SeModule.jsx';
import SeConnector from '@core/SeConnector/SeConnector.jsx';

export default function SeAO4U010(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/></SeModule>
}

SeAO4U010.defaultProps = {
    partName: "AO4 U",
    partNumber: "1088126",
    ledLabels: ['E','','','','','','','','','','','','','','','','','E']
}