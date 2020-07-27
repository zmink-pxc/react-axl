
import React from 'react';
import SeModule from '@bit/zmink.axioline.smart-elements.se-module';
import SeConnector from '@bit/zmink.axioline.smart-elements.se-connector';

export default function SeCNT1(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/></SeModule>
}

SeCNT1.defaultProps = {
    partName: "CNT1",
    partNumber: "1088131",
    ledLabels: ['E','SRC','G','DIR','','US','','OUT','','','','','','','','','','E']
}