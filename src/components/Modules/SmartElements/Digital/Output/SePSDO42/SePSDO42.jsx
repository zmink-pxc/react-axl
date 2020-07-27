

import React from 'react';
import styles from './SePSDO42.module.scss';
import SeModule from '@bit/zmink.axioline.smart-elements.se-module';
import SeConnector from '@bit/zmink.axioline.smart-elements.se-connector';

export default function SePSDO42(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} style={{backgroundColor: styles.axiolineYellow}} {...other}><SeConnector/></SeModule>
}

SePSDO42.defaultProps = {
    partName: "PSDO4/2",
    partNumber: "1079231",
    ledLabels: ['E','00','01','02','03','','','','','','','','','','SD','FS','P','E']
}