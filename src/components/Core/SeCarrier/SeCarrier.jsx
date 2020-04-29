import React from 'react';
import PropTypes from 'prop-types';
import styles from './SeCarrier.module.scss';
import PhoenixP from '@core/PhoenixP/PhoenixP.jsx';
import SeCarrierLed from '@core/SeCarrierLed/SeCarrierLed.jsx';

export default function SeCarrier(props){
    var topRow = [];
    var bottomRow = [];
    props.children.forEach((child,index)=>{
        if (index%2 === 0 && index !== 0){
            bottomRow.push(child);
        }else{
            topRow.push(child);
        }
    });
    const modules = topRow.concat(bottomRow);
    
    const modAreaWidth = props.numModules/2 * 15;
    const carrierWidth = modAreaWidth + 10;
    return (<div className={styles.root} style={{width: carrierWidth + 'mm'}}>
        <div className={styles.leftArea}>
            <div style={{height:'5mm',width:'5mm'}}>
                <PhoenixP/>
            </div>
            <div className={styles.partText}><div className={styles.textFormat}><span>{`AXL  F  BP  SE${props.numModules}`}</span><br/><span>{props.partNumber}</span></div></div>
            <div style={{height:'20mm',width:'9mm'}}></div>
            <CarrierLedArea numModules={props.numModules}/>
            <SeCarrierTerminalGroup/>
            <SeCarrierTerminalGroup/>
        </div>
        <div className={styles.moduleArea} style={{width: modAreaWidth + 'mm'}}>
            {modules}
        </div>
    </div>)
}

SeCarrier.propTypes = {
    numModules: PropTypes.number.isRequired
}

function CarrierLedArea(props){
    return <div style={{height:'20mm',width:'9mm'}}></div>
}

function SeCarrierTerminalGroup(props){
    return <div style={{width:'9mm',height:'20mm'}}></div>
}