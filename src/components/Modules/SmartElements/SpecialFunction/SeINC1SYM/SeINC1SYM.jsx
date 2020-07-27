
import React from 'react';
import SeModule from '@bit/zmink.axioline.smart-elements.se-module';
import SeConnector from '@bit/zmink.axioline.smart-elements.se-connector';

export default function SeINC1SYM(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/><SeConnector/></SeModule>
}

SeINC1SYM.defaultProps = {
    partName: "INC1",
    partNumber: "1088130",
    ledLabels: ['E','POS','NEG','','','','','UE','','','REF','L','','','','','','E']
}