import React from 'react';
import classNames from 'classnames';
import styles from './AxlTerminalGroup.module.scss'
import AxlPlunger from '@core/AxlPlunger/AxlPlunger.jsx';
import AxlTerminal from '@core/AxlTerminal/AxlTerminal.jsx';

export default class AxlTerminalGroup extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){

        return (<div className={styles.rootContainer}>
             <div className={styles.pinLabelContainer}>
                 <div className={styles.pinHoleContainer}>
                     <div className={styles.pinHole}></div>
                 </div>
                 <div className={styles.labelContainer}>
                    <div className={styles.label}>{this.props.label}</div>
                 </div>
             </div>
             <div className={styles.plungerContainer}>
                <AxlPlunger pushIn={this.props.pushIn} red={this.props.redPlunger} blue={this.props.bluePlunger} green={this.props.greenPlunger}/>
             </div>
             <div className={styles.terminalContainer}>
                <AxlTerminal isBlack={this.props.isBlack} isEnd={this.props.isEnd}/>
             </div>
         </div>)
    }
}