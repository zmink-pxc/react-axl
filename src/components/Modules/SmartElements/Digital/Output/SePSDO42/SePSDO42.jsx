

import React from 'react';
import styles from './SePSDI83.module.scss';
import SeModule from '@core/SeModule/SeModule.jsx';
import SeConnector from '@core/SeConnector/SeConnector.jsx';

export default function SePSDO42(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} style={{backgroundColor: styles.axiolineYellow}} {...other}><SeConnector/></SeModule>
}

SePSDO42.defaultProps = {
    partName: "PSDO4/2",
    partNumber: "1079231",
    ledLabels: ['E','00','01','02','03','','','','','','','','','','SD','FS','P','E']
}