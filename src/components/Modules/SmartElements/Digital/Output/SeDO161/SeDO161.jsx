
import React from 'react';
import SeModule from '@bit/zmink.axioline.smart-elements.se-module';
import SeConnector from '@bit/zmink.axioline.smart-elements.se-connector';

export default function SeDO161(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} {...other}><SeConnector/><SeConnector/></SeModule>
}

SeDO161.defaultProps = {
    partName: "DO16/1",
    partNumber: "1088129",
    ledLabels: ['E','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','E']
}