import React from 'react';
import SeModule from '../../../Core/SeModule/SeModule';
import SeConnector from '../../../Core/SeConnector/SeConnector';

export default function SeSCA(props){
    return <SeModule partNumber={props.partName} partName={props.partName} ledLabels={props.ledLabels}></SeModule>
}

SeSCA.defaultProps = {
    partName: "SC-A",
    partNumber: "1088134",
    ledLabels: ['','','','','','','','','','','','','','','','','','']
}