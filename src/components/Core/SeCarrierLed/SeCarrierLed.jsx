import React from 'react';
import classNames from 'classnames';
import styles from './SeCarrierLed.module.scss';

export default function SeCarrierLed (){
    const ledClass = classNames(styles.led_base,{[styles.error]:this.props.isError},{[styles.warning]:this.props.isWarning},{[styles.active]:this.props.isActive})
    return (<div className={ledClass}>
        </div>)
}

//isError
//isWarning
//isActive