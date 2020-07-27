import React from 'react';
import SeModule from '@bit/zmink.axioline.smart-elements.se-module';
import SeConnector from '@bit/zmink.axioline.smart-elements.se-connector';

export default function SeSCA(props){
    return <SeModule partName={props.partName} ledLabels={props.ledLabels}></SeModule>
}

SeSCA.defaultProps = {
    partName: "SC-A",
    partNumber: "1088134",
    ledLabels: ['','','','','','','','','','','','','','','','','','']
}