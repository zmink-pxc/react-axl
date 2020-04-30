import React from 'react';
import PropTypes from 'prop-types';
import styles from './SeModule.module.scss';
import SeLed from '@core/SeLed/SeLed.jsx';
import SeLock from '@core/SeLock/SeLock.jsx';

export default function SeModule(props){
    const {partName,leds,ledLabels,children,...other} = props;
    return (<div className={styles.root} {...other}>
        <div className={styles.partName}><div style={{marginLeft: '1mm'}}>{partName}</div></div>
        <div className={styles.mainContent}>
            <LedArea ledLabels={ledLabels} ledProps={leds}/><div className={styles.conArea}>{children}</div>
        </div>
        <div className={styles.partName}><div style={{marginLeft: '1mm'}}>{partName}</div></div>
    </div>)
}

SeModule.propTypes = {
    partNumber: PropTypes.string.isRequired,
    partName:   PropTypes.string.isRequired,
    terminals:  PropTypes.object
}

SeModule.defaultProps = {
    ledLabels: ['E','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','E']
}

function LedArea(props){
    return (<div className={styles.ledArea}>{
        props.ledLabels.map((label,index)=>{
            const bigLed = (index === 0) || (index === 17);
            return (index === 9) ? (<SeLock/>):(<div className={styles.ledContainer}><SeLed isErrLed={bigLed}/><div>{label}</div></div>)
        })
    }</div>)
    
}