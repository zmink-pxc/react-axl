
import React from 'react';
import SeModule from '@core/SeModule/SeModule.jsx';
import SeConnector from '@core/SeConnector/SeConnector.jsx';

export default function SeCNT1(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/><SeConnector/></SeModule>
}

SeCNT1.defaultProps = {
    partName: "INC1",
    partNumber: "1088130",
    ledLabels: ['E','POS','NEG','','','','','UE','','','REF','L','','','','','','E']
}