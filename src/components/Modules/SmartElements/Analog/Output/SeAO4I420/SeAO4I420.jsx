import React from 'react';
import SeModule from '@core/SeModule/SeModule.jsx';
import SeConnector from '@core/SeConnector/SeConnector.jsx';

export default function SeAO4I420(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/></SeModule>
}

SeAO4I420.defaultProps = {
    partName: "AO4 I",
    partNumber: "1088123",
    ledLabels: ['E','','','','','','','','','','','','','','','','','E']
}