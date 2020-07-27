import React from 'react';
import SeModule from '@bit/zmink.axioline.smart-elements.se-module';
import SeConnector from '@bit/zmink.axioline.smart-elements.se-connector';

export default function SeAO4U010(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/></SeModule>
}

SeAO4U010.defaultProps = {
    partName: "AO4 U",
    partNumber: "1088126",
    ledLabels: ['E','','','','','','','','','','','','','','','','','E']
}