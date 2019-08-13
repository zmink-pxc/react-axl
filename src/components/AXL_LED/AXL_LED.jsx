import {ReactComponent as LED} from  '../../protocol-icons/icons/devices/svg/axlLED.svg';
import React from 'react';
import classNames from 'classnames';
import styles from './AXL_LED.module.css'

export default class AXL_LED extends React.PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        var ledClass = classNames(styles.led_base,{[styles.error]:this.props.isError},{[styles.warning]:this.props.isWarning},{[styles.active]:this.props.isActive})
        return <LED
            className={ledClass}
        ></LED>
    }
}

//isError
//isWarning
//isActive