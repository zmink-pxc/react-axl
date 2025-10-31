
import React from 'react';
import SeModule from '../../../../Core/SeModule/SeModule';
import SeConnector from '../../../../Core/SeConnector/SeConnector';

export default function SeIOL4(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/><SeConnector/></SeModule>
}

SeIOL4.defaultProps = {
    partName: "IOL4",
    partNumber: "1088132",
    ledLabels: ['E','CQ1','','','','CQ2','','','','CQ3','','','','CQ4','','','','E']
}