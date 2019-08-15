import React from 'react';
import classNames from 'classnames';
import styles from './AXL_TerminalGroup.module.css'
import AXL_Plunger from '../AXL_Plunger/AXL_Plunger.jsx';
import AXL_Terminal from '../AXL_Terminal/AXL_Terminal.jsx';

export default class AXL_TerminalGroup extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return (<div className={styles.rootContainer}>
             <div className={styles.pinLabelContainer}>
                 <div className={styles.pinHoleContainer}>
                     <div className={styles.pinHole}></div>
                 </div>
                 <div classname={styles.labelContainer}>
                    <div className={styles.label}>{this.props.label}</div>
                 </div>
             </div>
             <div className={styles.plungerContainer}>
                <AXL_Plunger/>
             </div>
             <div className={styles.terminalContainer}>
                <AXL_Terminal/>
             </div>
         </div>)
    }
}