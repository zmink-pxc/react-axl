import React from 'react';
import styles from './SeModule.module.scss';
import SeLed from '@core/SeLed/SeLed.jsx';
import SeLock from '@core/SeLock/SeLock.jsx';

export default function SeModule(props){
    return (<div className={styles.root}>
        <LedArea ledLabels={props.ledLabels} ledProps={props.leds}/>
    </div>)
}

SeModule.propTypes = {
    partNumber: PropTypes.string.isRequired,
    partName:   PropTypes.string.isRequired,
}

SeModule.defaultProps = {
    ledLabels: ['E','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','E']
}

function LedArea(props){
    <div className={styles.ledArea}>{
        props.ledLabels.map((label,index)=>{
            return (index === 9) ? (<SeLock/>):(<div className={styles.ledContainer}><SeLed/><div>{label}</div></div>)
        })
    }</div>
}