import {ReactComponent as LED} from  '../../protocol-icons/icons/devices/svg/axlLED.svg';
import React from 'react';
import classNames from 'classnames';
import styles from './AXL_LED_Horizontal.module.scss'

export default class AXL_LED_Horizontal extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        const ledClass = classNames(styles.led_base,{[styles.error]:this.props.isError},{[styles['error-warning']]:this.props.isErrorWarning},{[styles.warning]:this.props.isWarning},{[styles.active]:this.props.isActive})
        return (<div className={ledClass}>
            </div>)
        
    }
}

//isError
//isWarning
//isActive