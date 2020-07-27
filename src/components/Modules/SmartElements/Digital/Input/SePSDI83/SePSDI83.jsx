
import React from 'react';
import styles from './SePSDI83.module.scss';
import SeModule from '@bit/zmink.axioline.smart-elements.se-module';
import SeConnector from '@bit/zmink.axioline.smart-elements.se-connector';

export default function SePSDI83(props){
    const {partName,partNumber,ledLabels,...other} = props;
    return <SeModule partName={partName} partNumber={partNumber} ledLabels={ledLabels} style={{backgroundColor: styles.axiolineYellow}} {...other}><SeConnector/><SeConnector/></SeModule>
}

SePSDI83.defaultProps = {
    partName: "PSDI8/3",
    partNumber: "1079241",
    ledLabels: ['E','01','02','03','04','05','06','07','','','','','','','SD','FS','P','E']
}