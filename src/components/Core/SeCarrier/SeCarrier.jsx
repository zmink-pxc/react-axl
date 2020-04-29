import React from 'react';
import PropTypes from 'prop-types';
import styles from './SeCarrier.module.scss';
import PhoenixP from '@core/PhoenixP/PhoenixP.jsx';
import SeCarrierLed from '@core/SeCarrierLed/SeCarrierLed.jsx';
import SeCarrierTerminal from '@core/SeCarrierTerminal/SeCarrierTerminal.jsx';

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
            <div className={styles.shadow}></div>
            <div style={{height:'5mm',width:'5mm'}}>
                <PhoenixP/>
            </div>
            <div className={styles.partText}><div className={styles.textFormat}><span>{`AXL  F  BP  SE${props.numModules}`}</span><br/><span>{props.partNumber}</span></div></div>
            <div style={{height:'20mm',width:'9mm'}}></div>
            <CarrierLedArea numModules={props.numModules}/>
            <SeCarrierTerminalGroup text='Up+'/>
            <SeCarrierTerminalGroup text='Up-'/>
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
    return (<div className={styles.termGroup}>
        <SeCarrierTerminal/>
        <Inset/>
        <div>{props.text}</div>
        <Inset/>
        <SeCarrierTerminal/>
    </div>)
}

function Inset(){
    return <div className={styles.inset}></div>
}