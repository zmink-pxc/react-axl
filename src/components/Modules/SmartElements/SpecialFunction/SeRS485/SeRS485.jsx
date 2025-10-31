
import React from 'react';
import SeModule from '../../../../Core/SeModule/SeModule';
import SeConnector from '../../../../Core/SeConnector/SeConnector';

export default function SeRS485(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/></SeModule>
}

SeRS485.defaultProps = {
    partName: "RS485",
    partNumber: "1088128",
    ledLabels: ['E','RxD','TxD','','','','','','','','','','','','','','','E']
}