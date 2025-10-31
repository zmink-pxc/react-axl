
import React from 'react';
import SeModule from '../../../../Core/SeModule/SeModule';
import SeConnector from '../../../../Core/SeConnector/SeConnector';

export default function SeCNT1(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/></SeModule>
}

SeCNT1.defaultProps = {
    partName: "CNT1",
    partNumber: "1088131",
    ledLabels: ['E','SRC','G','DIR','','US','','OUT','','','','','','','','','','E']
}