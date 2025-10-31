
import React from 'react';
import SeModule from '../../../../Core/SeModule/SeModule';
import SeConnector from '../../../../Core/SeConnector/SeConnector';

export default function SeINC1SYM(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/><SeConnector/></SeModule>
}

SeINC1SYM.defaultProps = {
    partName: "INC1",
    partNumber: "1088130",
    ledLabels: ['E','POS','NEG','','','','','UE','','','REF','L','','','','','','E']
}