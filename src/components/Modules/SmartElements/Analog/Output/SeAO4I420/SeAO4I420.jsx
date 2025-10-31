import React from 'react';
import SeModule from '../../../../../Core/SeModule/SeModule';
import SeConnector from '../../../../../Core/SeConnector/SeConnector';

export default function SeAO4I420(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/></SeModule>
}

SeAO4I420.defaultProps = {
    partName: "AO4 I",
    partNumber: "1088123",
    ledLabels: ['E','','','','','','','','','','','','','','','','','E']
}