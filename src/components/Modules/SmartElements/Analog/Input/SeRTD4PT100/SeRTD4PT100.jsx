import React from 'react';
import SeModule from '@core/SeModule/SeModule.jsx';
import SeConnector from '@core/SeConnector/SeConnector.jsx';

export default function SeRTD4PT100(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/><SeConnector/></SeModule>
}

SeRTD4PT100.defaultProps = {
    partName: "RTD4",
    partNumber: "1088106",
    ledLabels: ['E','','','','','','','','','','','','','','','','','E']
}