import {ReactComponent as LED} from  '../../protocol-icons/icons/devices/svg/axlLED.svg';
import React from 'react';
import classNames from 'classnames';
import styles from './AXL_Plunger.module.css'

export default class AXL_Plunger extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const plungerClass = classNames(styles.plunger_base,{[styles.red]:this.props.red},{[styles.green]:this.props.green},{[styles.blue]:this.props.blue})
        return (<div className={plungerClass}>
            </div>)
        
    }
}

//isError
//isWarning
//isActive